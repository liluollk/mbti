// MBTI 计算器工具函数
// 根据用户答案计算 MBTI 人格类型

import { Question } from '../data/questions';

// MBTI 四个维度的名称
export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';

// 维度计算结果
export interface DimensionScore {
  dimension: Dimension;
  score: number;
  letter: string; // 计算结果字母，如 'E' 或 'I'
}

// 计算单个维度的分数
// 对于 EI 维度：分数越高越倾向于 E (外向)
// 对于 SN 维度：分数越高越倾向于 S (感觉)
// 对于 TF 维度：分数越高越倾向于 T (思考)
// 对于 JP 维度：分数越高越倾向于 J (判断)
export const calculateDimension = (
  questions: Question[],
  answers: number[],
  dimension: Dimension
): DimensionScore => {
  // 筛选属于该维度的题目
  const dimensionQuestions = questions.filter(q => q.category === dimension);

  // 计算该维度的总分
  let totalScore = 0;
  dimensionQuestions.forEach((question) => {
    const answer = answers[question.id - 1]; // 答案数组的索引从 0 开始
    if (answer !== undefined) {
      totalScore += answer;
    }
  });

  // 计算平均分（用于判断倾向）
  const averageScore = dimensionQuestions.length > 0
    ? totalScore / dimensionQuestions.length
    : 2; // 默认中立

  // 根据维度确定结果字母
  let letter: string;
  switch (dimension) {
    case 'EI':
      // 分数 >= 2 倾向于 E (外向)，< 2 倾向于 I (内向)
      letter = averageScore >= 2 ? 'E' : 'I';
      break;
    case 'SN':
      // 分数 >= 2 倾向于 S (感觉)，< 2 倾向于 N (直觉)
      letter = averageScore >= 2 ? 'S' : 'N';
      break;
    case 'TF':
      // 分数 >= 2 倾向于 T (思考)，< 2 倾向于 F (情感)
      letter = averageScore >= 2 ? 'T' : 'F';
      break;
    case 'JP':
      // 分数 >= 2 倾向于 J (判断)，< 2 倾向于 P (知觉)
      letter = averageScore >= 2 ? 'J' : 'P';
      break;
  }

  return {
    dimension,
    score: averageScore,
    letter,
  };
};

// 计算完整的 MBTI 人格类型
export const calculateMBTI = (
  questions: Question[],
  answers: number[]
): string => {
  // 计算四个维度的结果
  const eiResult = calculateDimension(questions, answers, 'EI');
  const snResult = calculateDimension(questions, answers, 'SN');
  const tfResult = calculateDimension(questions, answers, 'TF');
  const jpResult = calculateDimension(questions, answers, 'JP');

  // 组合成完整的 MBTI 类型
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
export const getTendencyStrength = (score: number): string => {
  if (score <= 0.5 || score >= 3.5) return '非常强烈';
  if (score <= 1.0 || score >= 3.0) return '强烈';
  if (score <= 1.5 || score >= 2.5) return '中等';
  return '轻微';
};
