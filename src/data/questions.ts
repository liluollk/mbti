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

// MBTI 测试题目（共 93 道题）
export const questions: Question[] = [
  // ==================== EI 维度（外向 vs 内向）====================
  { id: 1, text: "我喜欢和很多人一起参加社交活动，这能让我感到精力充沛。", category: "EI" },
  { id: 2, text: "当我需要思考重要事情时，我更喜欢一个人独处。", category: "EI" },
  { id: 3, text: "与人交谈是我获取新想法和能量的主要方式。", category: "EI" },
  { id: 4, text: "我更喜欢在安静的环境中工作，这样效率更高。", category: "EI" },
  { id: 5, text: "社交聚会结束后，我通常感觉很累，需要独处恢复精力。", category: "EI" },
  { id: 6, text: "我喜欢成为人群中的焦点，享受被关注的感觉。", category: "EI" },
  { id: 7, text: "我更喜欢通过阅读或独自思考来学习新知识。", category: "EI" },
  { id: 8, text: "与人讨论问题能帮助我更好地理解和解决问题。", category: "EI" },
  { id: 9, text: "我倾向于保留自己的想法，除非被问到。", category: "EI" },
  { id: 10, text: "我喜欢主动与人交流，结交新朋友。", category: "EI" },
  { id: 11, text: "大型聚会会让我感到疲惫，更喜欢一对一的交谈。", category: "EI" },
  { id: 12, text: "我常常主动发起对话，让交流活跃起来。", category: "EI" },
  { id: 13, text: "我需要时间独处来整理思绪。", category: "EI" },
  { id: 14, text: "团队合作能激发我的创造力和热情。", category: "EI" },
  { id: 15, text: "我更倾向于倾听而不是表达。", category: "EI" },
  { id: 16, text: "社交活动对我来说是重要的能量来源。", category: "EI" },
  { id: 17, text: "我喜欢独自完成任务，避免不必要的交流。", category: "EI" },
  { id: 18, text: "我乐于在公众场合表达自己的观点。", category: "EI" },
  { id: 19, text: "我倾向于保持低调，不喜欢过多的关注。", category: "EI" },
  { id: 20, text: "与人互动是我放松和享受的方式。", category: "EI" },
  { id: 21, text: "我更喜欢书面沟通而不是面对面交流。", category: "EI" },
  { id: 22, text: "我喜欢参加各种社交活动，认识不同的人。", category: "EI" },
  { id: 23, text: "独处时我能更好地集中注意力。", category: "EI" },
  { id: 24, text: "小组讨论能帮助我更好地理解复杂问题。", category: "EI" },

  // ==================== SN 维度（感觉 vs 直觉）====================
  { id: 25, text: "我更相信可以通过五官感知到的具体事实和数据。", category: "SN" },
  { id: 26, text: "我更关注事物的可能性和未来的发展趋势。", category: "SN" },
  { id: 27, text: "学习新知识时，我更倾向于先了解具体的细节和实例。", category: "SN" },
  { id: 28, text: "我对事物的整体概念和潜在意义更感兴趣。", category: "SN" },
  { id: 29, text: "我倾向于相信经验和已证实的信息。", category: "SN" },
  { id: 30, text: "我喜欢探索新的想法和可能性。", category: "SN" },
  { id: 31, text: "我更注重实际应用和具体结果。", category: "SN" },
  { id: 32, text: "我常常思考事物之间的联系和模式。", category: "SN" },
  { id: 33, text: "我倾向于关注眼前的现实和具体细节。", category: "SN" },
  { id: 34, text: "我喜欢想象未来可能发生的事情。", category: "SN" },
  { id: 35, text: "我更相信可以验证的事实而不是直觉。", category: "SN" },
  { id: 36, text: "我经常有直觉性的洞察和灵感。", category: "SN" },
  { id: 37, text: "我倾向于按部就班地解决问题。", category: "SN" },
  { id: 38, text: "我喜欢跳跃式思考，从一个想法跳到另一个想法。", category: "SN" },
  { id: 39, text: "我更关注具体的细节而不是整体概念。", category: "SN" },
  { id: 40, text: "我经常思考事物的意义和目的。", category: "SN" },
  { id: 41, text: "我倾向于依赖已有的经验和知识。", category: "SN" },
  { id: 42, text: "我对创新和变革充满热情。", category: "SN" },
  { id: 43, text: "我更喜欢处理实际的、可触摸的事物。", category: "SN" },
  { id: 44, text: "我喜欢思考抽象的概念和理论。", category: "SN" },
  { id: 45, text: "我倾向于关注现在而不是未来。", category: "SN" },
  { id: 46, text: "我常常憧憬未来的可能性。", category: "SN" },
  { id: 47, text: "我更相信自己的感官体验。", category: "SN" },
  { id: 48, text: "我相信直觉和第六感。", category: "SN" },

  // ==================== TF 维度（思考 vs 情感）====================
  { id: 49, text: "做决定时，我更看重逻辑分析和客观事实。", category: "TF" },
  { id: 50, text: "当与他人发生分歧时，我会优先考虑对方的感受和关系和谐。", category: "TF" },
  { id: 51, text: "我认为公正和原则比个人感情更重要。", category: "TF" },
  { id: 52, text: "我倾向于根据个人价值观和对他人的影响来做决定。", category: "TF" },
  { id: 53, text: "我喜欢用逻辑和分析来解决问题。", category: "TF" },
  { id: 54, text: "我更关注决策对他人的影响和感受。", category: "TF" },
  { id: 55, text: "我认为批评应该客观公正，不考虑个人感情。", category: "TF" },
  { id: 56, text: "我倾向于委婉地表达不同意见，避免伤害他人感情。", category: "TF" },
  { id: 57, text: "我更看重事情的对错而非人际关系。", category: "TF" },
  { id: 58, text: "我认为理解和共情比正确更重要。", category: "TF" },
  { id: 59, text: "我倾向于以理性和客观的方式处理冲突。", category: "TF" },
  { id: 60, text: "我更愿意妥协和让步来维持关系。", category: "TF" },
  { id: 61, text: "我认为规则和原则是维护公平的基础。", category: "TF" },
  { id: 62, text: "我相信每个情况都是独特的，需要灵活处理。", category: "TF" },
  { id: 63, text: "我倾向于直接表达自己的观点，即使可能冒犯他人。", category: "TF" },
  { id: 64, text: "我会考虑他人的感受，选择合适的表达方式。", category: "TF" },
  { id: 65, text: "我更关注事情的效率和效果。", category: "TF" },
  { id: 66, text: "我更关注他人的需求和感受。", category: "TF" },
  { id: 67, text: "我认为决策应该基于客观标准而不是主观感受。", category: "TF" },
  { id: 68, text: "我认为决策应该考虑到所有相关人员的感受。", category: "TF" },
  { id: 69, text: "我倾向于冷静地分析问题，不受情绪影响。", category: "TF" },
  { id: 70, text: "我的决策往往受到自己和他人情绪的影响。", category: "TF" },
  { id: 71, text: "我相信公平比和谐更重要。", category: "TF" },
  { id: 72, text: "我相信和谐比公平更重要。", category: "TF" },

  // ==================== JP 维度（判断 vs 知觉）====================
  { id: 73, text: "我更喜欢有计划、有规律的生活方式。", category: "JP" },
  { id: 74, text: "我更喜欢灵活、随性的生活方式，不喜欢被计划束缚。", category: "JP" },
  { id: 75, text: "我倾向于提前做好计划，避免临时决策。", category: "JP" },
  { id: 76, text: "我喜欢保持开放的选择，根据情况灵活调整。", category: "JP" },
  { id: 77, text: "完成任务后我会感到满足和轻松。", category: "JP" },
  { id: 78, text: "我享受过程本身，不太在意是否完成。", category: "JP" },
  { id: 79, text: "我倾向于快速做决定，然后坚持执行。", category: "JP" },
  { id: 80, text: "我喜欢收集更多信息后再做决定。", category: "JP" },
  { id: 81, text: "我喜欢把事情安排得井井有条。", category: "JP" },
  { id: 82, text: "我喜欢顺其自然，不刻意安排。", category: "JP" },
  { id: 83, text: "我倾向于尽快完成任务，避免拖延。", category: "JP" },
  { id: 84, text: "我常常拖延，直到最后一刻才开始工作。", category: "JP" },
  { id: 85, text: "我喜欢明确的计划和时间表。", category: "JP" },
  { id: 86, text: "我喜欢保持灵活，随时改变计划。", category: "JP" },
  { id: 87, text: "我倾向于在截止日期前完成任务。", category: "JP" },
  { id: 88, text: "我常常在截止日期临近时才完成任务。", category: "JP" },
  { id: 89, text: "我喜欢把事情做完再做其他事。", category: "JP" },
  { id: 90, text: "我喜欢同时处理多个任务。", category: "JP" },
  { id: 91, text: "我倾向于设定明确的目标并努力实现。", category: "JP" },
  { id: 92, text: "我喜欢随遇而安，不设定太具体的目标。", category: "JP" },
  { id: 93, text: "我更喜欢有始有终，完成所有开始的事情。", category: "JP" },
];

// 题目总数
export const totalQuestions = questions.length;
