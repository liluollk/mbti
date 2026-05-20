// MBTI 测试题目数据
// 参考来源：16Personalities、Myers-Briggs 官方问卷、经典心理学测试
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
  scenario?: string; // 题目所属场景
}

// MBTI 测试题目（共 93 道题，多场景丰富版）
export const questions: Question[] = [
  // ==================== EI 维度（外向 E vs 内向 I）====================
  // 社交场景
  { id: 1, text: "在朋友聚会中，我通常是主动发起话题的人。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "社交" },
  { id: 2, text: "参加完大型活动后，我需要独自待一段时间来恢复精力。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "社交" },
  { id: 3, text: "我喜欢在团队讨论中分享自己的想法和观点。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "社交" },
  { id: 4, text: "人多嘈杂的环境会让我感到烦躁不安。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "社交" },

  // 工作场景
  { id: 5, text: "工作中，我更喜欢面对面沟通而不是邮件或即时消息。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "工作" },
  { id: 6, text: "我更喜欢独立完成任务，避免频繁的会议和讨论。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "工作" },
  { id: 7, text: "开会时我喜欢积极发言，参与讨论。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "工作" },
  { id: 8, text: "我更喜欢在安静的环境中工作，不受打扰。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "工作" },

  // 休闲场景
  { id: 9, text: "周末我更喜欢和朋友一起出去玩而不是待在家里。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "休闲" },
  { id: 10, text: "我享受独处的时光，比如看书、听音乐或冥想。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "休闲" },
  { id: 11, text: "我喜欢参加各种社交活动，认识新朋友。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "休闲" },
  { id: 12, text: "旅行时我更喜欢独自探索而不是跟着旅行团。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "休闲" },

  // 情感表达
  { id: 13, text: "我很容易表达自己的情感和感受。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "情感" },
  { id: 14, text: "我倾向于把情感藏在心里，不轻易表露。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "情感" },
  { id: 15, text: "与人交流能让我感到快乐和满足。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "情感" },
  { id: 16, text: "独自思考能让我更好地理解自己的感受。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "情感" },

  // 能量来源
  { id: 17, text: "与人交往是我获取能量的主要方式。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "能量" },
  { id: 18, text: "独处和安静是我获取能量的主要方式。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "能量" },
  { id: 19, text: "我喜欢成为人群的焦点。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "能量" },
  { id: 20, text: "我喜欢保持低调，不喜欢过多关注。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "能量" },

  // 沟通方式
  { id: 21, text: "我喜欢通过聊天来解决问题。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "沟通" },
  { id: 22, text: "我喜欢通过思考来解决问题。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "沟通" },
  { id: 23, text: "我喜欢在社交媒体上分享生活和想法。", category: "EI", dimension: "EI", positiveLetter: "E", negativeLetter: "I", scenario: "沟通" },
  { id: 24, text: "我更喜欢通过文字而不是语音交流。", category: "EI", dimension: "EI", positiveLetter: "I", negativeLetter: "E", scenario: "沟通" },

  // ==================== SN 维度（感觉 S vs 直觉 N）====================
  // 学习方式
  { id: 25, text: "学习新知识时，我喜欢从具体例子入手。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "学习" },
  { id: 26, text: "学习新知识时，我喜欢先理解整体概念和理论。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "学习" },
  { id: 27, text: "我更相信亲身经历过的事情。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "学习" },
  { id: 28, text: "我更相信直觉和灵感。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "学习" },

  // 信息处理
  { id: 29, text: "我更关注细节和具体事实。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "信息" },
  { id: 30, text: "我更关注整体模式和可能性。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "信息" },
  { id: 31, text: "我喜欢处理实际的、可触摸的事物。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "信息" },
  { id: 32, text: "我喜欢思考抽象的概念和想法。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "信息" },

  // 决策依据
  { id: 33, text: "做决定时，我更依赖已有的经验。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "决策" },
  { id: 34, text: "做决定时，我更依赖直觉和预感。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "决策" },
  { id: 35, text: "我相信眼见为实。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "决策" },
  { id: 36, text: "我相信第六感和直觉。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "决策" },

  // 未来规划
  { id: 37, text: "我更关注当下和眼前的事情。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "未来" },
  { id: 38, text: "我更关注未来的可能性和趋势。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "未来" },
  { id: 39, text: "我喜欢按部就班地实现目标。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "未来" },
  { id: 40, text: "我喜欢想象未来可能发生的各种情景。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "未来" },

  // 解决问题
  { id: 41, text: "解决问题时，我喜欢从具体细节入手。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "问题" },
  { id: 42, text: "解决问题时，我喜欢从整体框架入手。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "问题" },
  { id: 43, text: "我喜欢使用已验证的方法解决问题。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "问题" },
  { id: 44, text: "我喜欢尝试新的、创新的方法解决问题。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "问题" },

  // 生活态度
  { id: 45, text: "我更注重实际应用和具体结果。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "生活" },
  { id: 46, text: "我更注重意义和可能性。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "生活" },
  { id: 47, text: "我喜欢关注事物的实用价值。", category: "SN", dimension: "SN", positiveLetter: "S", negativeLetter: "N", scenario: "生活" },
  { id: 48, text: "我喜欢思考事物的深层含义和目的。", category: "SN", dimension: "SN", positiveLetter: "N", negativeLetter: "S", scenario: "生活" },

  // ==================== TF 维度（思考 T vs 情感 F）====================
  // 决策方式
  { id: 49, text: "做决定时，我更看重逻辑和事实。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "决策" },
  { id: 50, text: "做决定时，我更看重人情和感受。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "决策" },
  { id: 51, text: "我认为公正比和谐更重要。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "决策" },
  { id: 52, text: "我认为和谐比公正更重要。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "决策" },

  // 冲突处理
  { id: 53, text: "面对冲突，我倾向于直接解决问题。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "冲突" },
  { id: 54, text: "面对冲突，我倾向于维护关系和谐。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "冲突" },
  { id: 55, text: "我会直接指出他人的错误，即使可能伤害感情。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "冲突" },
  { id: 56, text: "我会委婉地表达不同意见，避免伤害他人感情。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "冲突" },

  // 价值观
  { id: 57, text: "我更重视公平和原则。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "价值观" },
  { id: 58, text: "我更重视关怀和体谅。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "价值观" },
  { id: 59, text: "我相信规则和制度是公平的基础。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "价值观" },
  { id: 60, text: "我相信每个情况都需要灵活处理。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "价值观" },

  // 工作风格
  { id: 61, text: "工作中我更关注效率和效果。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "工作" },
  { id: 62, text: "工作中我更关注团队和谐和员工感受。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "工作" },
  { id: 63, text: "我喜欢客观地评价他人的工作表现。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "工作" },
  { id: 64, text: "我喜欢鼓励和支持他人，即使他们表现一般。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "工作" },

  // 人际关系
  { id: 65, text: "我更看重事情的对错而非人际关系。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "人际" },
  { id: 66, text: "我更看重人际关系的和谐而非事情的对错。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "人际" },
  { id: 67, text: "我倾向于理性地处理人际关系。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "人际" },
  { id: 68, text: "我倾向于感性地处理人际关系。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "人际" },

  // 自我认知
  { id: 69, text: "我认为自己是一个理性的人。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "自我" },
  { id: 70, text: "我认为自己是一个感性的人。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "自我" },
  { id: 71, text: "我更容易注意到逻辑错误。", category: "TF", dimension: "TF", positiveLetter: "T", negativeLetter: "F", scenario: "自我" },
  { id: 72, text: "我更容易注意到他人的情感需求。", category: "TF", dimension: "TF", positiveLetter: "F", negativeLetter: "T", scenario: "自我" },

  // ==================== JP 维度（判断 J vs 知觉 P）====================
  // 生活方式
  { id: 73, text: "我更喜欢有计划、有规律的生活。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P", scenario: "生活" },
  { id: 74, text: "我更喜欢灵活、随性的生活。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J", scenario: "生活" },
  { id: 75, text: "我喜欢提前做好详细的计划。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P", scenario: "生活" },
  { id: 76, text: "我喜欢随遇而安，走一步看一步。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J", scenario: "生活" },

  // 工作习惯
  { id: 77, text: "我倾向于提前完成任务，避免拖延。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P", scenario: "工作" },
  { id: 78, text: "我倾向于在最后期限前才完成任务。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J", scenario: "工作" },
  { id: 79, text: "我喜欢把事情安排得井井有条。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P", scenario: "工作" },
  { id: 80, text: "我喜欢保持灵活，随时调整计划。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J", scenario: "工作" },

  // 决策风格
  { id: 81, text: "我喜欢快速做出决定并坚持执行。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P", scenario: "决策" },
  { id: 82, text: "我喜欢收集更多信息后再做决定。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J", scenario: "决策" },
  { id: 83, text: "我喜欢有明确的目标和计划。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P", scenario: "决策" },
  { id: 84, text: "我喜欢保持开放的选择和可能性。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J", scenario: "决策" },

  // 完成任务
  { id: 85, text: "完成任务后我会感到满足和轻松。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P", scenario: "任务" },
  { id: 86, text: "我享受过程本身，不太在意是否完成。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J", scenario: "任务" },
  { id: 87, text: "我喜欢把事情做完再做其他事。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P", scenario: "任务" },
  { id: 88, text: "我喜欢同时处理多个任务。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J", scenario: "任务" },

  // 时间管理
  { id: 89, text: "我认为截止日期是严格的。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P", scenario: "时间" },
  { id: 90, text: "我认为截止日期是有弹性的。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J", scenario: "时间" },
  { id: 91, text: "我喜欢设定明确的目标并努力实现。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P", scenario: "时间" },
  { id: 92, text: "我喜欢保持灵活，不设定太具体的目标。", category: "JP", dimension: "JP", positiveLetter: "P", negativeLetter: "J", scenario: "时间" },

  // 收尾习惯
  { id: 93, text: "我更喜欢有始有终，完成所有开始的事情。", category: "JP", dimension: "JP", positiveLetter: "J", negativeLetter: "P", scenario: "收尾" },
];

export const totalQuestions = questions.length;

// 场景分类
export const scenarios = ['社交', '工作', '休闲', '情感', '能量', '沟通', '学习', '信息', '决策', '未来', '问题', '生活', '冲突', '价值观', '人际', '自我', '任务', '时间', '收尾'];
