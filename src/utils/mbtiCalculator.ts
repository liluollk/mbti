// MBTI 计算器工具函数
// 根据用户答案计算 MBTI 人格类型

import { Question } from '../data/questions';

export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';

export interface DimensionScore {
  dimension: Dimension;
  score: number;
  letter: string;
}

// 计算单个维度的分数
// 正向题：分数越高越倾向于维度右侧（E/S/T/J）
// 反向题：答案需要反转，反转后分数越高越倾向于维度右侧
export const calculateDimension = (
  questions: Question[],
  answers: number[],
  dimension: Dimension
): DimensionScore => {
  const dimensionQuestions = questions.filter(q => q.category === dimension);

  let totalScore = 0;
  dimensionQuestions.forEach((question) => {
    const answer = answers[question.id - 1];
    if (answer !== undefined) {
      // 如果是反向题，反转分数（0↔4, 1↔3, 2↔2）
      const adjustedAnswer = question.reverse ? 4 - answer : answer;
      totalScore += adjustedAnswer;
    }
  });

  const averageScore = dimensionQuestions.length > 0
    ? totalScore / dimensionQuestions.length
    : 2;

  let letter: string;
  switch (dimension) {
    case 'EI':
      letter = averageScore >= 2 ? 'E' : 'I';
      break;
    case 'SN':
      letter = averageScore >= 2 ? 'S' : 'N';
      break;
    case 'TF':
      letter = averageScore >= 2 ? 'T' : 'F';
      break;
    case 'JP':
      letter = averageScore >= 2 ? 'J' : 'P';
      break;
  }

  return {
    dimension,
    score: averageScore,
    letter,
  };
};

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

export const getTendencyStrength = (score: number): string => {
  if (score <= 0.5 || score >= 3.5) return '非常强烈';
  if (score <= 1.0 || score >= 3.0) return '强烈';
  if (score <= 1.5 || score >= 2.5) return '中等';
  return '轻微';
};
