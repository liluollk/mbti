// MBTI 计算器工具函数
// 修复版：正确处理答案格式和计分逻辑

export interface DimensionScore {
  dimension: string;
  letter: string;
  scoreA: number; // 正向得分 (E/S/T/J)
  scoreB: number; // 反向得分 (I/N/F/P)
  confidence: number; // 置信度 0-100
  strength: 'weak' | 'moderate' | 'strong' | 'very_strong'; // 倾向强度
}

export interface MBTIResult {
  type: string;
  dimensions: DimensionScore[];
  confidence: number; // 整体置信度
  consistency: number; // 回答一致性
}

// 根据题目和答案计算各维度得分
export function getDimensionScores(questions: Question[], answers: number[]): DimensionScore[] {
  const scores: Record<string, { scoreA: number; scoreB: number; count: number }> = {
    'EI': { scoreA: 0, scoreB: 0, count: 0 },
    'SN': { scoreA: 0, scoreB: 0, count: 0 },
    'TF': { scoreA: 0, scoreB: 0, count: 0 },
    'JP': { scoreA: 0, scoreB: 0, count: 0 },
  };

  if (!questions || !answers || questions.length === 0) {
    return Object.entries(scores).map(([dimension, data]) => ({
      dimension,
      letter: getDefaultLetter(dimension),
      scoreA: data.scoreA,
      scoreB: data.scoreB,
      confidence: 50,
      strength: 'weak' as const,
    }));
  }

  questions.forEach((q, index) => {
    const answer = answers[index];

    // 跳过无效答案
    if (answer === undefined || answer === null || answer === -1 || answer < 0 || answer > 4) {
      return;
    }

    const dimension = q.category;

    // 答案转换规则（5点双向量表）
    // 4(非常同意) -> 正向3分，反向0分
    // 3(同意) -> 正向2分，反向0分
    // 2(中立) -> 两侧均0分
    // 1(不同意) -> 正向0分，反向2分
    // 0(非常不同意) -> 正向0分，反向3分
    let scoreA = 0; // 正向得分（E/S/T/J）
    let scoreB = 0; // 反向得分（I/N/F/P）

    switch (answer) {
      case 4: // 非常同意
        scoreA = 3;
        scoreB = 0;
        break;
      case 3: // 同意
        scoreA = 2;
        scoreB = 0;
        break;
      case 2: // 中立
        scoreA = 0;
        scoreB = 0;
        break;
      case 1: // 不同意
        scoreA = 0;
        scoreB = 2;
        break;
      case 0: // 非常不同意
        scoreA = 0;
        scoreB = 3;
        break;
    }

    // 判断题目是正向还是反向
    // 正向题：positiveLetter 是 E/S/T/J，同意倾向正向
    // 反向题：positiveLetter 是 I/N/F/P，同意倾向反向
    const isPositiveQuestion = q.positiveLetter === 'E' || q.positiveLetter === 'S' || q.positiveLetter === 'T' || q.positiveLetter === 'J';

    if (isPositiveQuestion) {
      scores[dimension].scoreA += scoreA;
      scores[dimension].scoreB += scoreB;
    } else {
      // 反向题，交换得分
      scores[dimension].scoreA += scoreB;
      scores[dimension].scoreB += scoreA;
    }
    scores[dimension].count++;
  });

  return Object.entries(scores).map(([dimension, data]) => {
    const total = data.scoreA + data.scoreB;
    const letter = total === 0
      ? getDefaultLetter(dimension)  // 平分规则
      : data.scoreA >= data.scoreB
        ? dimension[0]  // E/S/T/J
        : dimension[1]; // I/N/F/P

    // 计算置信度（基于回答数量和得分差异）
    const maxScore = data.count * 3;
    const confidence = maxScore > 0
      ? Math.min(100, Math.round((Math.abs(data.scoreA - data.scoreB) / maxScore) * 100))
      : 50;

    // 计算倾向强度
    const strength = getStrengthLevel(data.scoreA, data.scoreB, data.count);

    return {
      dimension,
      letter,
      scoreA: data.scoreA,
      scoreB: data.scoreB,
      confidence,
      strength,
    };
  });
}

// 获取平分时的默认字母（I/N/F/P）
function getDefaultLetter(dimension: string): string {
  const defaults: Record<string, string> = {
    'EI': 'I',
    'SN': 'N',
    'TF': 'F',
    'JP': 'P',
  };
  return defaults[dimension] || dimension[1];
}

// 获取倾向强度级别
function getStrengthLevel(scoreA: number, scoreB: number, count: number): 'weak' | 'moderate' | 'strong' | 'very_strong' {
  const diff = Math.abs(scoreA - scoreB);
  const maxDiff = count * 3;

  if (maxDiff === 0) return 'weak';

  const ratio = diff / maxDiff;

  if (ratio < 0.2) return 'weak';
  if (ratio < 0.4) return 'moderate';
  if (ratio < 0.6) return 'strong';
  return 'very_strong';
}

// 计算 MBTI 类型
export function calculateMBTI(questions: Question[], answers: number[]): string {
  const scores = getDimensionScores(questions, answers);
  return scores.map(s => s.letter).join('');
}

// 计算倾向强度描述
export function getTendencyStrength(scoreA: number, scoreB: number): string {
  const diff = Math.abs(scoreA - scoreB);
  if (diff <= 2) return '轻微倾向';
  if (diff <= 5) return '中等倾向';
  if (diff <= 8) return '明显倾向';
  return '强烈倾向';
}

// 计算整体置信度
export function calculateOverallConfidence(scores: DimensionScore[]): number {
  if (!scores || scores.length === 0) {
    return 50;
  }

  const answeredDimensions = scores.filter(s => s.scoreA + s.scoreB > 0);

  if (answeredDimensions.length === 0) {
    return 20;
  }

  const avgConfidence = answeredDimensions.reduce((sum, s) => sum + s.confidence, 0) / answeredDimensions.length;
  const rounded = Math.round(avgConfidence);

  return Math.max(10, Math.min(95, rounded));
}

// 检测回答一致性（识别随机作答）
export function calculateConsistency(questions: Question[], answers: number[]): number {
  if (!questions || !answers || questions.length !== answers.length) {
    return 50;
  }

  let consistentCount = 0;
  let totalPairs = 0;

  for (let i = 0; i < questions.length - 1; i++) {
    for (let j = i + 1; j < questions.length; j++) {
      const q1 = questions[i];
      const q2 = questions[j];

      if (q1.category !== q2.category) continue;

      const a1 = answers[i];
      const a2 = answers[j];

      if (a1 === undefined || a1 === null || a1 === -1 || a1 < 0 || a1 > 4) continue;
      if (a2 === undefined || a2 === null || a2 === -1 || a2 < 0 || a2 > 4) continue;

      totalPairs++;

      const q1Positive = q1.positiveLetter === 'E' || q1.positiveLetter === 'S' || q1.positiveLetter === 'T' || q1.positiveLetter === 'J';
      const q2Positive = q2.positiveLetter === 'E' || q2.positiveLetter === 'S' || q2.positiveLetter === 'T' || q2.positiveLetter === 'J';

      let expectedA1 = a1;

      if (q1Positive !== q2Positive) {
        expectedA1 = 4 - a1;
      }

      if (Math.abs(expectedA1 - a2) <= 1) {
        consistentCount++;
      }
    }
  }

  if (totalPairs === 0) {
    return 50;
  }

  const consistency = Math.round((consistentCount / totalPairs) * 100);
  return Math.max(10, Math.min(95, consistency));
}

// 获取详细的结果分析
export function getDetailedResult(questions: Question[], answers: number[]): MBTIResult {
  const dimensions = getDimensionScores(questions, answers);
  const type = dimensions.map(s => s.letter).join('');
  const confidence = calculateOverallConfidence(dimensions);
  const consistency = calculateConsistency(questions, answers);

  return {
    type,
    dimensions,
    confidence,
    consistency,
  };
}

// 类型定义（保持兼容性）
export interface Question {
  id: number;
  text: string;
  category: 'EI' | 'SN' | 'TF' | 'JP';
  positiveLetter: string;
  negativeLetter: string;
  subDimension: string;
  dimension: string;
}
