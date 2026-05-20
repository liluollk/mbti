// MBTI 16 型人格描述数据
// 包含每种人格类型的特点、职业倾向、优势等信息

export interface MBTIDescription {
  type: string; // 人格类型，如 'INTJ', 'ENFP' 等
  name: string; // 中文名称
  description: string; // 基本描述
  strengths: string[]; // 优势
  weaknesses: string[]; // 劣势
  careers: string[]; // 适合职业
  relationships: string; // 人际关系特点
}

// MBTI 16 型人格完整描述
export const mbtiDescriptions: Record<string, MBTIDescription> = {
  'INTJ': {
    type: 'INTJ',
    name: '建筑师',
    description: '富有想象力和战略性的思想家，一切皆在计划之中。',
    strengths: ['独立思考', '战略眼光', '追求完美', '逻辑性强', '自律'],
    weaknesses: ['过于挑剔', '不善于表达情感', '可能显得冷漠'],
    careers: ['科学家', '工程师', '战略规划师', '法官', '律师'],
    relationships: '倾向于建立深层但数量有限的关系，重视智识上的连接。',
  },
  'INTP': {
    type: 'INTP',
    name: '逻辑学家',
    description: '创新的发明家，对知识充满渴望，寻求逻辑背后的真理。',
    strengths: ['分析能力强', '创新思维', '客观理性', '求知欲强'],
    weaknesses: ['不切实际', '健忘', '不善社交', '难以表达感情'],
    careers: ['计算机科学家', '哲学家', '教授', '研究员', '数学家'],
    relationships: '在深层智识对话中茁壮成长，但在情感表达上可能存在困难。',
  },
  'ENTJ': {
    type: 'ENTJ',
    name: '指挥官',
    description: '大胆、富有想象力的领导者，总能找到解决方案。',
    strengths: ['领导能力强', '果断', '高效', '自信', '战略思维'],
    weaknesses: ['傲慢', '不耐烦', '可能显得咄咄逼人', '不善处理冲突'],
    careers: ['CEO', '企业家', '律师', '管理顾问', '高管'],
    relationships: '喜欢掌控局面，在关系中直接且有目标导向。',
  },
  'ENTP': {
    type: 'ENTP',
    name: '辩论家',
    description: '聪明好奇的思想家，喜欢用智力挑战一切。',
    strengths: ['机智聪明', '创新', '善于沟通', '适应性强', '多才多艺'],
    weaknesses: ['好辩', '容易厌倦', '不注重细节', '冲动'],
    careers: ['律师', '企业家', '记者', '营销策划', '顾问'],
    relationships: '喜欢智力刺激，寻找能够跟上他们思考的伴侣。',
  },
  'INFJ': {
    type: 'INFJ',
    name: '提倡者',
    description: '安静而有远见的人，致力于改善世界。',
    strengths: ['同理心强', '有原则', '创造力', '忠诚', '理想主义'],
    weaknesses: ['过于理想化', '自我牺牲', '不善于处理冲突', '难以接受批评'],
    careers: ['心理咨询师', '社会工作者', '作家', '教师', '非营利组织工作者'],
    relationships: '深度连接，重视有意义的关系，渴望帮助他人。',
  },
  'INFP': {
    type: 'INFP',
    name: '调停者',
    description: '诗意、善良的利他主义者，总是为他人着想。',
    strengths: ['同理心', '创造力', '理想主义', '适应性强', '价值观驱动'],
    weaknesses: ['过于理想化', '情绪化', '优柔寡断', '自我封闭'],
    careers: ['作家', '艺术家', '心理咨询师', '社会工作者', '教师'],
    relationships: '寻找深层精神连接，重视真实性和价值观一致性。',
  },
  'ENFJ': {
    type: 'ENFJ',
    name: '主人公',
    description: '富有魅力的领导者，能够启发他人。',
    strengths: ['魅力非凡', '同理心', '责任感', '鼓舞人心', '善于沟通'],
    weaknesses: ['过于理想化', '取悦他人', '忽视自己需求', '敏感于批评'],
    careers: ['教师', '教练', '人力资源经理', '市场营销', '顾问'],
    relationships: '关心他人成长，在培养周围人的潜力中找到满足感。',
  },
  'ENFP': {
    type: 'ENFP',
    name: '竞选者',
    description: '热情、有创造力的社交者，总是被生活的可能性所激励。',
    strengths: ['热情', '创造力', '情商高', '适应力强', '善于激励'],
    weaknesses: ['容易分心', '情绪波动', '计划性差', '过于乐观'],
    careers: ['营销人员', '记者', '演员', '艺术家', '顾问'],
    relationships: '寻找能够共享热情和新想法的充满活力的关系。',
  },
  'ISTJ': {
    type: 'ISTJ',
    name: '物流师',
    description: '事实性的思考者，不易动摇责任感极强的人。',
    strengths: ['可靠性', '责任感', '实用性', '专注', '诚信'],
    weaknesses: ['固执', '不善变通', '难以接受新观念', '不善于表达情感'],
    careers: ['会计师', '审计师', '医生', '律师', '管理人员'],
    relationships: '通过行动表达关爱，重视承诺和长期稳定性。',
  },
  'ISFJ': {
    type: 'ISFJ',
    name: '守卫者',
    description: '非常忠诚和关爱的守护者，随时准备保护所爱的人。',
    strengths: ['支持性', '可靠', '勤奋', '有责任心', '善良'],
    weaknesses: ['忽视自己', '过于谦虚', '难以说"不"', '过度批评自己'],
    careers: ['护士', '社会工作者', '教师', '行政助理', '图书馆员'],
    relationships: '通过无私照顾来表达爱意，是坚定可靠的支持者。',
  },
  'ESTJ': {
    type: 'ESTJ',
    name: '总经理',
    description: '出色的管理者，在商业或需要领导的场合表现出色。',
    strengths: ['领导能力', '可靠性', '责任感', '直接', '善于组织'],
    weaknesses: ['不灵活', '固执', '忽视情绪', '可能显得傲慢'],
    careers: ['经理', '军官', '法官', '警察', '企业高管'],
    relationships: '喜欢在关系中承担责任，重视传统和秩序。',
  },
  'ESFJ': {
    type: 'ESFJ',
    name: '执政官',
    description: '非常关心社交秩序和谐的热心人士，总是帮助他人。',
    strengths: ['关怀', '社交能力', '责任感', '合作', '实际'],
    weaknesses: ['过度在意他人看法', '需要认可', '不愿处理冲突', '过于控制'],
    careers: ['护士', '教师', '客户服务', '人力资源', '市场营销'],
    relationships: '通过照顾他人来表达关爱，创造和谐温暖的家庭环境。',
  },
  'ISTP': {
    type: 'ISTP',
    name: '鉴赏家',
    description: '大胆而实际的冒险家，擅长使用各种工具。',
    strengths: ['实用主义', '自嘲', '冷静', '好奇心', '动手能力'],
    weaknesses: ['不善于表达情感', '冒险', '难以坚持', '冷漠'],
    careers: ['工程师', '机械师', '飞行员', '运动员', '警察'],
    relationships: '通过共同活动和解决问题来建立联系。',
  },
  'ISFP': {
    type: 'ISFP',
    name: '探险家',
    description: '灵活有魅力的艺术家，随时准备探索新事物。',
    strengths: ['艺术性', '适应力', '观察力', '好奇心', '独立性'],
    weaknesses: ['容易厌倦', '情绪化', '回避冲突', '难以计划'],
    careers: ['艺术家', '设计师', '摄影师', '厨师', '音乐家'],
    relationships: '活在当下，重视自由和当下的美好时刻。',
  },
  'ESTP': {
    type: 'ESTP',
    name: '企业家',
    description: '聪明、精力充沛的冒险家，擅长即时解决问题。',
    strengths: ['活力', '实用主义', '观察力', '社交能力', '适应力'],
    weaknesses: ['冲动', '不耐烦', '忽视长期影响', '容易冒险'],
    careers: ['企业家', '销售', '经纪人', '营销', '运动员'],
    relationships: '喜欢刺激和行动，在社交活动中茁壮成长。',
  },
  'ESFP': {
    type: 'ESFP',
    name: '表演者',
    description: '自发的、精力充沛的表演者，喜欢成为关注的焦点。',
    strengths: ['魅力', '活力', '实用性', '同理心', '艺术性'],
    weaknesses: ['注意力短暂', '不喜欢独处', '冲动', '逃避问题'],
    careers: ['演员', '销售', '艺人', '摄影师', '活动策划'],
    relationships: '热爱社交，在关系中充满活力和热情。',
  },
};
