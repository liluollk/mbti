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
    text: "我喜欢和很多人一起参加社交活动，这能让我感到精力充沛。",
    category: "EI",
  },
  {
    id: 2,
    text: "当我需要思考重要事情时，我更喜欢一个人独处。",
    category: "EI",
  },
  {
    id: 3,
    text: "与人交谈是我获取新想法和能量的主要方式。",
    category: "EI",
  },
  {
    id: 4,
    text: "我更相信可以通过五官感知到的具体事实和数据。",
    category: "SN",
  },
  {
    id: 5,
    text: "我更关注事物的可能性和未来的发展趋势。",
    category: "SN",
  },
  {
    id: 6,
    text: "学习新知识时，我更倾向于先了解具体的细节和实例。",
    category: "SN",
  },
  {
    id: 7,
    text: "做决定时，我更看重逻辑分析和客观事实。",
    category: "TF",
  },
  {
    id: 8,
    text: "当与他人发生分歧时，我会优先考虑对方的感受和关系和谐。",
    category: "TF",
  },
  {
    id: 9,
    text: "我认为公正和原则比个人感情更重要。",
    category: "TF",
  },
  {
    id: 10,
    text: "我更喜欢有计划、有规律的生活方式。",
    category: "JP",
  },
];

// 如果需要扩展到 93 题，可以在数组中继续添加更多题目
// 每道题目都需要标注清楚它属于哪个维度
