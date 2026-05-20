// MBTI 测试题目数据
// 设计原则：每个维度包含正向题和反向题，平衡分布
// 共93题，每个维度约23-24题

export interface Question {
  id: number;
  text: string;
  category: 'EI' | 'SN' | 'TF' | 'JP';
  positiveLetter: string;
  negativeLetter: string;
  subDimension: string;
  dimension: string;
}

export const questions: Question[] = [
  // ==================== EI 维度（外向 E + 内向 I）====================
  // E 方向
  { id: 1, text: "在社交场合中，我通常感到精力充沛，而不是疲惫。", category: "EI", positiveLetter: "E", negativeLetter: "I", subDimension: "E-社交能量", dimension: "EI" },
  { id: 2, text: "我更喜欢通过口头交流来表达想法，而不是书面文字。", category: "EI", positiveLetter: "E", negativeLetter: "I", subDimension: "E-表达偏好", dimension: "EI" },
  { id: 3, text: "我倾向于关注外部世界和他人的反应，而不是内心思考。", category: "EI", positiveLetter: "E", negativeLetter: "I", subDimension: "E-注意力方向", dimension: "EI" },
  { id: 4, text: "我更喜欢先行动后思考，而不是先想好再行动。", category: "EI", positiveLetter: "E", negativeLetter: "I", subDimension: "E-行动模式", dimension: "EI" },
  { id: 5, text: "我倾向于主动发起社交活动，而不是等待他人邀请。", category: "EI", positiveLetter: "E", negativeLetter: "I", subDimension: "E-社交主动", dimension: "EI" },
  { id: 6, text: "我更喜欢在团队环境中工作，而不是独自工作。", category: "EI", positiveLetter: "E", negativeLetter: "I", subDimension: "E-工作偏好", dimension: "EI" },
  { id: 7, text: "我容易与陌生人打开话匣子，而不是保持沉默。", category: "EI", positiveLetter: "E", negativeLetter: "I", subDimension: "E-社交开放", dimension: "EI" },
  { id: 8, text: "我喜欢成为群体讨论的中心，而不是边缘参与者。", category: "EI", positiveLetter: "E", negativeLetter: "I", subDimension: "E-关注需求", dimension: "EI" },

  // I 方向（反向题）
  { id: 9, text: "我更喜欢独自思考问题，而不是与人讨论。", category: "EI", positiveLetter: "I", negativeLetter: "E", subDimension: "I-思考方式", dimension: "EI" },
  { id: 10, text: "社交活动后，我需要独处来恢复精力。", category: "EI", positiveLetter: "I", negativeLetter: "E", subDimension: "I-能量恢复", dimension: "EI" },
  { id: 11, text: "我更喜欢书面沟通，而不是面对面交流。", category: "EI", positiveLetter: "I", negativeLetter: "E", subDimension: "I-沟通偏好", dimension: "EI" },
  { id: 12, text: "我倾向于深入思考后再行动，而不是即兴行动。", category: "EI", positiveLetter: "I", negativeLetter: "E", subDimension: "I-行动节奏", dimension: "EI" },
  { id: 13, text: "我更喜欢安静的小团体活动，而不是热闹的大型聚会。", category: "EI", positiveLetter: "I", negativeLetter: "E", subDimension: "I-社交偏好", dimension: "EI" },
  { id: 14, text: "我需要时间独处来整理思绪。", category: "EI", positiveLetter: "I", negativeLetter: "E", subDimension: "I-独处需求", dimension: "EI" },
  { id: 15, text: "我更喜欢倾听他人，而不是成为焦点。", category: "EI", positiveLetter: "I", negativeLetter: "E", subDimension: "I-社交角色", dimension: "EI" },
  { id: 16, text: "我倾向于保持低调，避免成为关注的中心。", category: "EI", positiveLetter: "I", negativeLetter: "E", subDimension: "I-自我呈现", dimension: "EI" },

  // 更多 EI 题
  { id: 17, text: "我喜欢通过社交活动来放松，而不是独自休息。", category: "EI", positiveLetter: "E", negativeLetter: "I", subDimension: "E-放松方式", dimension: "EI" },
  { id: 18, text: "我倾向于分享个人感受和想法，而不是保持私密。", category: "EI", positiveLetter: "E", negativeLetter: "I", subDimension: "E-自我暴露", dimension: "EI" },
  { id: 19, text: "我更喜欢与人面对面交流，而不是通过网络或电话。", category: "EI", positiveLetter: "E", negativeLetter: "I", subDimension: "E-交流方式", dimension: "EI" },
  { id: 20, text: "我更喜欢独自工作，而不是在团队中。", category: "EI", positiveLetter: "I", negativeLetter: "E", subDimension: "I-工作方式", dimension: "EI" },
  { id: 21, text: "我倾向于保持个人隐私，不轻易分享内心想法。", category: "EI", positiveLetter: "I", negativeLetter: "E", subDimension: "I-隐私保护", dimension: "EI" },
  { id: 22, text: "我更喜欢通过文字交流，而不是语音通话。", category: "EI", positiveLetter: "I", negativeLetter: "E", subDimension: "I-媒介偏好", dimension: "EI" },

  // ==================== SN 维度（感觉 S + 直觉 N）====================
  // S 方向
  { id: 23, text: "我更关注具体的事实和细节，而不是抽象的概念。", category: "SN", positiveLetter: "S", negativeLetter: "N", subDimension: "S-细节关注", dimension: "SN" },
  { id: 24, text: "我相信通过实际经验获得的知识，而不是理论推断。", category: "SN", positiveLetter: "S", negativeLetter: "N", subDimension: "S-知识来源", dimension: "SN" },
  { id: 25, text: "我更看重想法的实际应用价值，而不是理论完美。", category: "SN", positiveLetter: "S", negativeLetter: "N", subDimension: "S-实用导向", dimension: "SN" },
  { id: 26, text: "我更关注现实和当前的情况，而不是未来的可能性。", category: "SN", positiveLetter: "S", negativeLetter: "N", subDimension: "S-时间取向", dimension: "SN" },
  { id: 27, text: "我通过五官体验来理解新事物，而不是依靠直觉。", category: "SN", positiveLetter: "S", negativeLetter: "N", subDimension: "S-感知方式", dimension: "SN" },
  { id: 28, text: "我更容易记住具体的事实和数据，而不是抽象的图案。", category: "SN", positiveLetter: "S", negativeLetter: "N", subDimension: "S-记忆偏好", dimension: "SN" },
  { id: 29, text: "我更偏好稳定和可预测的环境，而不是变化和未知。", category: "SN", positiveLetter: "S", negativeLetter: "N", subDimension: "S-环境偏好", dimension: "SN" },
  { id: 30, text: "我相信循序渐进的方法，而不是跳跃式创新。", category: "SN", positiveLetter: "S", negativeLetter: "N", subDimension: "S-方法偏好", dimension: "SN" },

  // N 方向（反向题）
  { id: 31, text: "我更关注事物的可能性和未来趋势，而不是现状。", category: "SN", positiveLetter: "N", negativeLetter: "S", subDimension: "N-未来取向", dimension: "SN" },
  { id: 32, text: "我相信直觉和灵感，而不是仅仅依靠事实。", category: "SN", positiveLetter: "N", negativeLetter: "S", subDimension: "N-直觉信任", dimension: "SN" },
  { id: 33, text: "我更喜欢思考抽象概念，而不是处理具体细节。", category: "SN", positiveLetter: "N", negativeLetter: "S", subDimension: "N-抽象偏好", dimension: "SN" },
  { id: 34, text: "我倾向于关注整体格局，而不是细节。", category: "SN", positiveLetter: "N", negativeLetter: "S", subDimension: "N-全局视角", dimension: "SN" },
  { id: 35, text: "我喜欢探索新的可能性，而不是遵循已有的方法。", category: "SN", positiveLetter: "N", negativeLetter: "S", subDimension: "N-探索倾向", dimension: "SN" },
  { id: 36, text: "我更看重创新和变革，而不是稳定和传统。", category: "SN", positiveLetter: "N", negativeLetter: "S", subDimension: "N-变革偏好", dimension: "SN" },
  { id: 37, text: "我倾向于用想象力理解世界，而不是仅仅依靠感官。", category: "SN", positiveLetter: "N", negativeLetter: "S", subDimension: "N-想象倾向", dimension: "SN" },
  { id: 38, text: "我更喜欢思考理论和概念，而不是实际应用。", category: "SN", positiveLetter: "N", negativeLetter: "S", subDimension: "N-理论偏好", dimension: "SN" },

  // 更多 SN 题
  { id: 39, text: "我更关注事物的现状，而不是它的可能性。", category: "SN", positiveLetter: "S", negativeLetter: "N", subDimension: "S-现状关注", dimension: "SN" },
  { id: 40, text: "我更喜欢具体的任务，而不是抽象的目标。", category: "SN", positiveLetter: "S", negativeLetter: "N", subDimension: "S-任务偏好", dimension: "SN" },
  { id: 41, text: "我倾向于相信可以验证的证据，而不是直觉感受。", category: "SN", positiveLetter: "S", negativeLetter: "N", subDimension: "S-证据偏好", dimension: "SN" },
  { id: 42, text: "我喜欢思考未来的可能性，而不是局限于眼前。", category: "SN", positiveLetter: "N", negativeLetter: "S", subDimension: "N-前瞻思维", dimension: "SN" },
  { id: 43, text: "我相信直觉的指引，而不仅仅是数据。", category: "SN", positiveLetter: "N", negativeLetter: "S", subDimension: "N-直觉导向", dimension: "SN" },
  { id: 44, text: "我更喜欢处理理论问题，而不是实际问题。", category: "SN", positiveLetter: "N", negativeLetter: "S", subDimension: "N-问题偏好", dimension: "SN" },

  // ==================== TF 维度（思考 T + 情感 F）====================
  // T 方向
  { id: 45, text: "做决定时，我更看重逻辑和证据，而不是个人情感。", category: "TF", positiveLetter: "T", negativeLetter: "F", subDimension: "T-决策依据", dimension: "TF" },
  { id: 46, text: "我倾向于客观地评价事物，而不是受情感影响。", category: "TF", positiveLetter: "T", negativeLetter: "F", subDimension: "T-客观性", dimension: "TF" },
  { id: 47, text: "我更看重规则和原则，而不是特殊情况下的灵活变通。", category: "TF", positiveLetter: "T", negativeLetter: "F", subDimension: "T-规则导向", dimension: "TF" },
  { id: 48, text: "我倾向于分析利弊得失来做决定，而不是凭直觉。", category: "TF", positiveLetter: "T", negativeLetter: "F", subDimension: "T-分析倾向", dimension: "TF" },
  { id: 49, text: "我倾向于批判性地思考问题，而不是全盘接受。", category: "TF", positiveLetter: "T", negativeLetter: "F", subDimension: "T-批判思维", dimension: "TF" },
  { id: 50, text: "我更看重决策的一致性和连贯性，而不是妥协和让步。", category: "TF", positiveLetter: "T", negativeLetter: "F", subDimension: "T-一致性", dimension: "TF" },
  { id: 51, text: "我更看重效率和效果，而不是过程中的人情味。", category: "TF", positiveLetter: "T", negativeLetter: "F", subDimension: "T-效率导向", dimension: "TF" },
  { id: 52, text: "我认为公平比和谐更重要。", category: "TF", positiveLetter: "T", negativeLetter: "F", subDimension: "T-价值排序", dimension: "TF" },

  // F 方向（反向题）
  { id: 53, text: "做决定时，我更看重他人的感受和需求，而不是纯粹的逻辑。", category: "TF", positiveLetter: "F", negativeLetter: "T", subDimension: "F-情感优先", dimension: "TF" },
  { id: 54, text: "我倾向于根据个人价值观来做决定，而不是逻辑分析。", category: "TF", positiveLetter: "F", negativeLetter: "T", subDimension: "F-价值导向", dimension: "TF" },
  { id: 55, text: "我认为关系和谐比规则更重要。", category: "TF", positiveLetter: "F", negativeLetter: "T", subDimension: "F-和谐优先", dimension: "TF" },
  { id: 56, text: "我倾向于考虑决策对他人的影响，而不仅仅是效率。", category: "TF", positiveLetter: "F", negativeLetter: "T", subDimension: "F-人际影响", dimension: "TF" },
  { id: 57, text: "我更喜欢通过共情来理解他人，而不是分析。", category: "TF", positiveLetter: "F", negativeLetter: "T", subDimension: "F-共情倾向", dimension: "TF" },
  { id: 58, text: "我认为善良比正确更重要。", category: "TF", positiveLetter: "F", negativeLetter: "T", subDimension: "F-善良优先", dimension: "TF" },
  { id: 59, text: "我倾向于委婉地表达意见，避免伤害他人感情。", category: "TF", positiveLetter: "F", negativeLetter: "T", subDimension: "F-沟通方式", dimension: "TF" },
  { id: 60, text: "我更看重团队的和谐氛围，而不是个人的正确性。", category: "TF", positiveLetter: "F", negativeLetter: "T", subDimension: "F-团队和谐", dimension: "TF" },

  // 更多 TF 题
  { id: 61, text: "我倾向于用逻辑分析问题，而不是凭感觉。", category: "TF", positiveLetter: "T", negativeLetter: "F", subDimension: "T-分析方式", dimension: "TF" },
  { id: 62, text: "我更看重事实真相，而不是他人的感受。", category: "TF", positiveLetter: "T", negativeLetter: "F", subDimension: "T-事实优先", dimension: "TF" },
  { id: 63, text: "我倾向于直接指出问题，而不是委婉表达。", category: "TF", positiveLetter: "T", negativeLetter: "F", subDimension: "T-直接沟通", dimension: "TF" },
  { id: 64, text: "我倾向于根据他人的感受调整自己的表达。", category: "TF", positiveLetter: "F", negativeLetter: "T", subDimension: "F-表达调整", dimension: "TF" },
  { id: 65, text: "我更看重人际关系的维护，而不是事情的对错。", category: "TF", positiveLetter: "F", negativeLetter: "T", subDimension: "F-关系维护", dimension: "TF" },
  { id: 66, text: "我相信直觉和情感的指引，而不仅仅是逻辑。", category: "TF", positiveLetter: "F", negativeLetter: "T", subDimension: "F-情感直觉", dimension: "TF" },

  // ==================== JP 维度（判断 J + 知觉 P）====================
  // J 方向
  { id: 67, text: "我更喜欢有计划、有规律的生活方式。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-计划倾向", dimension: "JP" },
  { id: 68, text: "我倾向于快速做出决定并坚持执行。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-决定性", dimension: "JP" },
  { id: 69, text: "我更喜欢设定明确的目标并努力实现。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-目标导向", dimension: "JP" },
  { id: 70, text: "我喜欢保持环境的整洁和有序。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-秩序偏好", dimension: "JP" },
  { id: 71, text: "我倾向于完成任务后再做其他事情。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-完成倾向", dimension: "JP" },
  { id: 72, text: "我更喜欢按照既定计划行事，而不是即兴发挥。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-计划执行", dimension: "JP" },
  { id: 73, text: "我认为截止日期是严格的。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-截止态度", dimension: "JP" },
  { id: 74, text: "我喜欢有始有终，完成所有开始的事情。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-完成执着", dimension: "JP" },

  // P 方向（反向题）
  { id: 75, text: "我更喜欢灵活、随性的生活方式，而不是严格的计划。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-灵活偏好", dimension: "JP" },
  { id: 76, text: "我倾向于保持选择的开放性，而不是过早做决定。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-开放态度", dimension: "JP" },
  { id: 77, text: "我更喜欢随遇而安，而不是设定严格的目标。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-随性倾向", dimension: "JP" },
  { id: 78, text: "我不介意环境有些杂乱，重要的是舒适。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-环境容忍", dimension: "JP" },
  { id: 79, text: "我喜欢同时处理多个任务，而不是专注于一个。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-多任务倾向", dimension: "JP" },
  { id: 80, text: "我倾向于灵活调整计划，而不是死守原定方案。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-适应能力", dimension: "JP" },
  { id: 81, text: "我认为截止日期是灵活的，可以调整。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-截止灵活", dimension: "JP" },
  { id: 82, text: "我喜欢探索多种可能性，而不是急于完成。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-探索倾向", dimension: "JP" },

  // 更多 JP 题
  { id: 83, text: "我更喜欢提前完成任务，避免拖延。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-提前完成", dimension: "JP" },
  { id: 84, text: "我倾向于制定详细的计划，而不是即兴行动。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-计划详细", dimension: "JP" },
  { id: 85, text: "我喜欢明确的结构和规则。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-结构偏好", dimension: "JP" },
  { id: 86, text: "我更喜欢保持选择的灵活性，不急于下结论。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-延迟决定", dimension: "JP" },
  { id: 87, text: "我喜欢随性而为，不受计划束缚。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-随性偏好", dimension: "JP" },
  { id: 88, text: "我倾向于保持开放的态度，接受新的可能性。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-开放心态", dimension: "JP" },

  // 补充题目
  { id: 89, text: "我倾向于按部就班地完成任务。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-步骤导向", dimension: "JP" },
  { id: 90, text: "我更喜欢在最后一刻完成任务，享受压力下的效率。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-压力效率", dimension: "JP" },
  { id: 91, text: "我认为规则是为了被遵守而存在的。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-规则尊重", dimension: "JP" },
  { id: 92, text: "我认为规则是可以变通的，视情况而定。", category: "JP", positiveLetter: "P", negativeLetter: "J", subDimension: "P-规则灵活", dimension: "JP" },
  { id: 93, text: "我喜欢提前规划未来的事情。", category: "JP", positiveLetter: "J", negativeLetter: "P", subDimension: "J-未来规划", dimension: "JP" },
];
