// MBTI 测试题目数据
// 维度说明：
// - EI: 外向(Extraversion) vs 内向(Introversion)
// - SN: 感觉(Sensing) vs 直觉(Intuition)
// - TF: 思考(Thinking) vs 情感(Feeling)
// - JP: 判断(Judging) vs 知觉(Perceiving)

export interface Question {
  id: number;
  text: string;
  category: 'EI' | 'SN' | 'TF' | 'JP'; // 题目所属的维度
  // 选项分数说明：
  // 0 = 非常不同意 (强烈倾向于维度左侧)
  // 1 = 不同意
  // 2 = 中立
  // 3 = 同意
  // 4 = 非常同意 (强烈倾向于维度右侧)
}

// MBTI 测试题目（示例数据，包含 10 道题，可轻松扩展到 93 题）
export const questions: Question[] = [
  {
    id: 1,
    text: "在社交聚会中，你通常会：",
    category: "EI",
  },
  {
    id: 2,
    text: "当你独自一人时，你会感到：",
    category: "EI",
  },
  {
    id: 3,
    text: "你更喜欢的工作方式是：",
    category: "EI",
  },
  {
    id: 4,
    text: "在解决问题时，你更倾向于：",
    category: "SN",
  },
  {
    id: 5,
    text: "你更关注：",
    category: "SN",
  },
  {
    id: 6,
    text: "你更喜欢：",
    category: "SN",
  },
  {
    id: 7,
    text: "在做决定时，你更看重：",
    category: "TF",
  },
  {
    id: 8,
    text: "当与他人发生分歧时，你通常会：",
    category: "TF",
  },
  {
    id: 9,
    text: "你认为公正和仁慈哪个更重要：",
    category: "TF",
  },
  {
    id: 10,
    text: "你更喜欢有计划的生活还是随遇而安：",
    category: "JP",
  },
];

// 如果需要扩展到 93 题，可以在数组中继续添加更多题目
// 每道题目都需要标注清楚它属于哪个维度
