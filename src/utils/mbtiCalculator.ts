// MBTI 计算器工具函数
// 根据标准 MBTI 计分规则实现

import { Question } from '../data/questions';

export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';

export interface DimensionScore {
  dimension: Dimension;
  letter: string;
  scoreA: number; // 第一个字母的得分（E/S/T/J）
  scoreB: number; // 第二个字母的得分（I/N/F/P）
}

// 将5级答案转换为双向量表得分
// 答案范围: 0-4（非常不同意-非常同意）
// 正向题：同意(3-4)倾向positiveLetter，不同意(0-1)倾向negativeLetter
// 反向题：已通过positiveLetter/negativeLetter处理，逻辑相同
const getScoreForAnswer = (answer: number): { positive: number; negative: number } => {
  if (answer === 4) {
    // 非常同意 → 强烈倾向正向字母
    return { positive: 3, negative: 0 };
  } else if (answer === 3) {
    // 同意 → 中等倾向正向字母
    return { positive: 2, negative: 0 };
  } else if (answer === 2) {
    // 中立 → 两侧均0分
    return { positive: 0, negative: 0 };
  } else if (answer === 1) {
    // 不同意 → 中等倾向反向字母
    return { positive: 0, negative: 2 };
  } else {
    // 非常不同意 → 强烈倾向反向字母
    return { positive: 0, negative: 3 };
  }
};

// 计算单个维度的分数
// 按照标准规则：分别累加两个字母的得分，比较后决定维度代表字母
export const calculateDimension = (
  questions: Question[],
  answers: number[],
  dimension: Dimension
): DimensionScore => {
  const dimensionQuestions = questions.filter(q => q.category === dimension);

  let scoreA = 0; // 第一个字母得分（E/S/T/J）
  let scoreB = 0; // 第二个字母得分（I/N/F/P）

  const firstLetter = dimension[0]; // E, S, T, J
  const secondLetter = dimension[1]; // I, N, F, P

  dimensionQuestions.forEach((question) => {
    const answer = answers[question.id - 1];
    if (answer !== undefined) {
      const { positive, negative } = getScoreForAnswer(answer);

      // 根据题目标记决定哪个字母获得分数
      if (question.positiveLetter === firstLetter) {
        scoreA += positive;
        scoreB += negative;
      } else {
        scoreA += negative;
        scoreB += positive;
      }
    }
  });

  // 判定维度代表字母
  let letter: string;
  if (scoreA > scoreB) {
    letter = firstLetter;
  } else if (scoreB > scoreA) {
    letter = secondLetter;
  } else {
    // 平分规则：强制判定为 I/N/F/P（即secondLetter）
    letter = secondLetter;
  }

  return {
    dimension,
    letter,
    scoreA,
    scoreB,
  };
};

// 计算完整的 MBTI 人格类型
export const calculateMBTI = (
  questions: Question[],
  answers: number[]
): string => {
  const eiResult = calculateDimension(questions, answers, 'EI');
  const snResult = calculateDimension(questions, answers, 'SN');
  const tfResult = calculateDimension(questions, answers, 'TF');
  const jpResult = calculateDimension(questions, answers, 'JP');

  const mbtiType = `${eiResult.letter}${snResult.letter}${tfResult.letter}${jpResult.letter}`;

  return mbtiType;
};

// 获取每个维度的详细分数
export const getDimensionScores = (
  questions: Question[],
  answers: number[]
): DimensionScore[] => {
  return [
    calculateDimension(questions, answers, 'EI'),
    calculateDimension(questions, answers, 'SN'),
    calculateDimension(questions, answers, 'TF'),
    calculateDimension(questions, answers, 'JP'),
  ];
};

// 判断维度倾向的强度
export const getTendencyStrength = (scoreA: number, scoreB: number): string => {
  const total = scoreA + scoreB;
  if (total === 0) return '中立';

  const diff = Math.abs(scoreA - scoreB);
  const ratio = diff / total;

  if (ratio >= 0.7) return '非常强烈';
  if (ratio >= 0.5) return '强烈';
  if (ratio >= 0.3) return '中等';
  return '轻微';
};
