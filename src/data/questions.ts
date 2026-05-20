// MBTI 测试题目数据
// 参考来源：16Personalities、Myers-Briggs 官方问卷等
// 维度说明：
// - EI: 外向(Extraversion) vs 内向(Introversion)
// - SN: 感觉(Sensing) vs 直觉(Intuition)
// - TF: 思考(Thinking) vs 情感(Feeling)
// - JP: 判断(Judging) vs 知觉(Perceiving)

export interface Question {
  id: number;
  text: string;
  category: 'EI' | 'SN' | 'TF' | 'JP';
  dimension: string;
  positiveLetter: string;
  negativeLetter: string;
}

// MBTI 测试题目（共 93 道题，参考经典问卷优化版）
export const questions: Question[] = [
  // ==================== EI 维度（外向 E vs 内向 I）====================
  { id: 1, text: "社交聚会后，我通常感到精力充沛。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },
  { id: 2, text: "我更喜欢独自工作或学习，效率更高。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 3, text: "与人交谈是我获取新能量的主要方式。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },
  { id: 4, text: "社交活动后我需要独处来恢复精力。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 5, text: "我喜欢主动发起对话，结识新朋友。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },
  { id: 6, text: "我倾向于倾听而不是表达自己。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 7, text: "我乐于在团队中担任领导者角色。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },
  { id: 8, text: "大型聚会会让我感到疲惫。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 9, text: "我喜欢在公众场合表达自己的观点。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },
  { id: 10, text: "我更喜欢书面沟通而不是面对面交流。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 11, text: "周末我更愿意和朋友出去玩而不是待在家里。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },
  { id: 12, text: "工作中我更喜欢独立完成任务而不是团队协作。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 13, text: "我喜欢在会议中积极发言，分享想法。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },
  { id: 14, text: "我需要私人空间来充电。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 15, text: "与人讨论能帮助我更好地理解问题。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },
  { id: 16, text: "我更喜欢通过阅读来获取信息。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 17, text: "我喜欢组织社交活动。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },
  { id: 18, text: "我喜欢独自旅行。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 19, text: "在社交聚会中，我通常与许多人交流，包括陌生人。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },
  { id: 20, text: "在社交聚会中，我只与几个熟悉的人交谈，或宁愿早点离开。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 21, text: "我喜欢成为关注的焦点。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },
  { id: 22, text: "我倾向于保持低调，不喜欢过多关注。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 23, text: "我需要时间独处来整理思绪。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E" },
  { id: 24, text: "我享受在人群中的感觉，即使不认识很多人。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I" },

  // ==================== SN 维度（感觉 S vs 直觉 N）====================
  { id: 25, text: "我更相信可以验证的事实和数据。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 26, text: "我对事物的可能性和未来趋势更感兴趣。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },
  { id: 27, text: "我注重实际应用和具体结果。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 28, text: "我经常思考事物之间的联系和模式。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },
  { id: 29, text: "我喜欢按部就班地解决问题。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 30, text: "我喜欢探索新想法和可能性。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },
  { id: 31, text: "我更关注具体细节而不是整体概念。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 32, text: "我经常有直觉性的洞察和灵感。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },
  { id: 33, text: "我相信自己的感官体验。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 34, text: "我相信直觉和第六感。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },
  { id: 35, text: "我倾向于依赖已有的经验。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 36, text: "我对创新和变革充满热情。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },
  { id: 37, text: "我喜欢处理实际的、可触摸的事物。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 38, text: "我喜欢思考抽象的概念和理论。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },
  { id: 39, text: "我更关注现在而不是未来。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 40, text: "我喜欢跳跃式思考，从一个想法跳到另一个想法。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },
  { id: 41, text: "学习新知识时，我先关注具体实例。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 42, text: "我喜欢想象未来可能发生的事情。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },
  { id: 43, text: "我更关注事物的实用价值。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 44, text: "我经常思考事物的意义和目的。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },
  { id: 45, text: "我倾向于相信经验而不是理论。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 46, text: "我常常憧憬未来的可能性。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },
  { id: 47, text: "我喜欢处理具体的任务。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N" },
  { id: 48, text: "我喜欢思考宏观的概念和大局。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S" },

  // ==================== TF 维度（思考 T vs 情感 F）====================
  { id: 49, text: "做决定时，我更看重逻辑分析和客观事实。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 50, text: "我会优先考虑对方的感受和关系和谐。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },
  { id: 51, text: "我认为公正和原则比个人感情更重要。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 52, text: "我根据个人价值观和对他人的影响做决定。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },
  { id: 53, text: "我喜欢用逻辑和分析来解决问题。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 54, text: "我更关注决策对他人的影响和感受。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },
  { id: 55, text: "我认为批评应该客观公正。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 56, text: "我倾向于委婉表达不同意见。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },
  { id: 57, text: "我更看重事情的对错而非人际关系。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 58, text: "我认为理解和共情比正确更重要。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },
  { id: 59, text: "我倾向于以理性方式处理冲突。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 60, text: "我更愿意妥协和让步来维持关系。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },
  { id: 61, text: "我认为规则和原则是维护公平的基础。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 62, text: "我相信每个情况都是独特的，需要灵活处理。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },
  { id: 63, text: "我更关注事情的效率和效果。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 64, text: "我更关注他人的需求和感受。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },
  { id: 65, text: "我直接表达观点，即使可能冒犯他人。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 66, text: "我会考虑他人感受，选择合适表达方式。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },
  { id: 67, text: "决策应该基于客观标准而不是主观感受。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 68, text: "决策应该考虑所有相关人员的感受。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },
  { id: 69, text: "我冷静分析问题，不受情绪影响。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 70, text: "我的决策会受到情绪影响。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },
  { id: 71, text: "我相信公平比和谐更重要。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F" },
  { id: 72, text: "我相信和谐比公平更重要。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T" },

  // ==================== JP 维度（判断 J vs 知觉 P）====================
  { id: 73, text: "我更喜欢有计划、有规律的生活方式。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P" },
  { id: 74, text: "我更喜欢灵活、随性的生活方式。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J" },
  { id: 75, text: "我倾向于提前做好计划，避免临时决策。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P" },
  { id: 76, text: "我喜欢保持开放的选择，根据情况灵活调整。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J" },
  { id: 77, text: "完成任务后我会感到满足和轻松。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P" },
  { id: 78, text: "我享受过程本身，不太在意是否完成。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J" },
  { id: 79, text: "我倾向于快速做决定，然后坚持执行。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P" },
  { id: 80, text: "我喜欢收集更多信息后再做决定。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J" },
  { id: 81, text: "我喜欢把事情安排得井井有条。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P" },
  { id: 82, text: "我喜欢顺其自然，不刻意安排。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J" },
  { id: 83, text: "我倾向于尽快完成任务，避免拖延。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P" },
  { id: 84, text: "我常常拖延，直到最后一刻才开始工作。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J" },
  { id: 85, text: "我喜欢明确的计划和时间表。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P" },
  { id: 86, text: "我喜欢保持灵活，随时改变计划。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J" },
  { id: 87, text: "我喜欢把事情做完再做其他事。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P" },
  { id: 88, text: "我喜欢同时处理多个任务。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J" },
  { id: 89, text: "我倾向于在截止日期前完成任务。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P" },
  { id: 90, text: "我常常在截止日期临近时才完成任务。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J" },
  { id: 91, text: "我倾向于设定明确的目标并努力实现。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P" },
  { id: 92, text: "我喜欢随遇而安，不设定太具体的目标。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J" },
  { id: 93, text: "我更喜欢有始有终，完成所有开始的事情。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P" },
];

export const totalQuestions = questions.length;
