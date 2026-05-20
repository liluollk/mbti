// MBTI 16种人格详细描述数据

export interface MBTIResult {
  type: string;
  name: string;
  tagline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  cognitiveFunctions: {
    name: string;
    description: string;
  }[];
  career: {
    suitable: string[];
    unsuitable: string[];
    strengths: string[];
  };
  relationship: {
    idealPartner: string;
    communication: string;
    strengths: string[];
    challenges: string[];
    loveStyle: string;
  };
  workplace: {
    workStyle: string;
    leadership: string;
    teamwork: string;
  };
  growth: {
    strengths: string[];
    weaknesses: string[];
    growthAreas: string[];
    stressResponse: string[];
  };
  dating: {
    overview: string;
    communication: string;
    conflict: string;
    compatibility: string[];
    tips: string[];
  };
}

export const mbtiDescriptions: Record<string, MBTIResult> = {
  'INTJ': {
    type: 'INTJ',
    name: '建筑师',
    tagline: '富有想象力和战略性的思想家',
    description: 'INTJ 是最具分析能力的人格类型之一，他们追求知识和理性，喜欢制定长期战略。对于他们来说，世界是一个充满待解谜题的领域。',
    strengths: ['独立思考', '战略眼光', '逻辑清晰', '目标导向', '自我驱动', '高标准', '创新能力'],
    weaknesses: ['过于批判', '情感表达不足', '不擅长社交', '完美主义', '固执己见'],
    cognitiveFunctions: [
      { name: '内倾直觉 (Ni)', description: '洞察未来可能性，制定长期战略规划' },
      { name: '外倾思维 (Te)', description: '高效组织外部世界，推进目标实现' },
      { name: '内倾情感 (Fi)', description: '内心有强烈的个人价值观，但表达含蓄' },
      { name: '外倾感觉 (Se)', description: '对当前环境细节关注度较低' },
    ],
    career: {
      suitable: ['战略规划师', '科学家', '工程师', '法官', '律师', '金融分析师', 'IT架构师', '企业咨询'],
      unsuitable: ['销售代表', '公关专员', '幼儿园教师', '客户服务代表'],
      strengths: ['分析能力', '长期规划', '独立工作', '解决复杂问题', '创新思维'],
    },
    relationship: {
      idealPartner: '能够理解他们的独立性，尊重他们的空间，同时也能激发他们情感一面的人',
      communication: '直接、理性、注重逻辑，但需要学会表达情感',
      strengths: ['忠诚', '理性', '支持伴侣的个人成长', '长期承诺'],
      challenges: ['情感表达困难', '过度批评', '忽视当下感受', '社交需求低'],
      loveStyle: '深思熟虑型，会在确立关系前仔细评估，但一旦认定就会全身心投入',
    },
    workplace: {
      workStyle: '独立、高效、目标导向，喜欢自主掌控工作进度',
      leadership: '战略型领导，关注长远目标，善于制定清晰的方向',
      teamwork: '与志同道合的人合作效果最好，不喜欢办公室政治',
    },
    growth: {
      strengths: ['战略思维', '独立性', '客观分析', '坚持标准'],
      weaknesses: ['社交障碍', '情感疏离', '过度挑剔', '抗拒变化'],
      growthAreas: ['学习表达情感', '接受不完美', '提高社交技能', '关注当下'],
      stressResponse: ['退缩独处', '过度分析问题', '追求完美', '忽视身体需求'],
    },
    dating: {
      overview: 'INTJ在恋爱中理性而深沉，他们不会轻易开始一段关系，但一旦认定就会非常投入。他们渴望与伴侣建立智识上的深度连接。',
      communication: '直接表达想法，喜欢深入讨论，但需要在学会表达情感需求。避免过度理性化而忽视伴侣的感受。',
      conflict: '面对冲突时倾向于回避或理性分析，可能显得冷漠。学习承认情感的存在，而不是只用逻辑解决问题。',
      compatibility: ['ENFP（竞选者）', 'ENTP（辩论家）', 'INFJ（提倡者）', 'INTP（逻辑学家）'],
      tips: [
        '学习主动表达情感需求',
        '接受伴侣的不完美',
        '多花时间参与社交活动',
        '学会欣赏当下的美好',
        '在争论中保持温柔',
      ],
    },
  },

  'INTP': {
    type: 'INTP',
    name: '逻辑学家',
    tagline: '创新的发明家，对知识充满渴望',
    description: 'INTP 是安静而深奥的思想家，他们用逻辑和分析来理解世界的运作。对于他们来说，智识的探索是人生的终极目标。',
    strengths: ['分析能力', '创造力', '客观理性', '求知欲', '逻辑思维', '独立工作'],
    weaknesses: ['社交困难', '情感疏离', '拖延症', '过度分析', '忽视细节'],
    cognitiveFunctions: [
      { name: '内倾思考 (Ti)', description: '深入分析内在逻辑，追求理解的精确性' },
      { name: '外倾直觉 (Ne)', description: '探索多种可能性和理论联系' },
      { name: '内倾感觉 (Si)', description: '回顾过去的经验来验证当前理解' },
      { name: '外倾情感 (Fe)', description: '对他人情感敏感度较低' },
    ],
    career: {
      suitable: ['科学家', '研究员', '哲学家', '软件工程师', '数学家', '金融分析师', '大学教授', '数据科学家'],
      unsuitable: ['销售经理', '人力资源', '客户服务', '公关专员'],
      strengths: ['研究能力', '逻辑思维', '创新能力', '解决复杂问题', '独立工作'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的思维方式，耐心等待他们打开心扉，同时也能理解他们需要独处时间的人',
      communication: '注重逻辑和深度，但可能在情感表达上显得笨拙',
      strengths: ['忠诚', '理性支持', '尊重独立', '深度智识交流'],
      challenges: ['情感表达困难', '社交焦虑', '过度分析', '忽视伴侣感受'],
      loveStyle: '智识驱动型，渴望与伴侣进行深度的思想交流',
    },
    workplace: {
      workStyle: '灵活、探索式、喜欢自主安排工作内容和时间',
      leadership: '倾向于平等协作，不喜欢发号施令',
      teamwork: '在需要创意和独立思考的项目中表现出色',
    },
    growth: {
      strengths: ['智力优势', '创造力', '客观性', '学习能力'],
      weaknesses: ['社交障碍', '情感隔离', '拖延', '忽视现实'],
      growthAreas: ['提高执行力', '关注细节', '情感表达', '社交技能'],
      stressResponse: ['退缩思考', '过度分析', '拖延回避', '完美主义'],
    },
    dating: {
      overview: 'INTP在恋爱中需要很长时间才会打开心扉，但一旦认定就会非常忠诚。他们渴望与伴侣建立智识上的深度连接。',
      communication: '喜欢抽象和理论性的对话，需要学会在表达想法时也关注伴侣的情感需求。',
      conflict: '倾向于用逻辑来分析冲突，可能显得冷漠或不关心。学习承认"情感"也是一种合理的存在。',
      compatibility: ['ENFJ（主人公）', 'ENTJ（指挥官）', 'INFJ（提倡者）', 'INTJ（建筑师）'],
      tips: [
        '主动表达欣赏和爱意',
        '不要总是用逻辑分析问题',
        '记住重要的纪念日和承诺',
        '多参与伴侣的兴趣活动',
        '接受肢体接触和亲密',
      ],
    },
  },

  'ENTJ': {
    type: 'ENTJ',
    name: '指挥官',
    tagline: '大胆、富有想象力的领导者',
    description: 'ENTJ 是天生的领导者，他们自信、果断、有决断力。他们善于组织资源和人来实现目标，具有强大的影响力和说服力。',
    strengths: ['领导能力', '自信果断', '战略思维', '执行力强', '沟通能力', '目标导向'],
    weaknesses: ['傲慢', '缺乏耐心', '情感表达不足', '控制欲强', '过于竞争'],
    cognitiveFunctions: [
      { name: '外倾思维 (Te)', description: '高效组织外部资源和人来实现目标' },
      { name: '内倾直觉 (Ni)', description: '制定长期战略和愿景' },
      { name: '外倾感觉 (Se)', description: '关注当下环境和具体细节' },
      { name: '内倾情感 (Fi)', description: '内心有自己的价值判断，但容易被忽视' },
    ],
    career: {
      suitable: ['CEO', '企业家', '律师', '管理顾问', '投资银行家', '政治家', '军官', '项目经理'],
      unsuitable: ['心理咨询师', '艺术家', '社会工作者', '图书管理员'],
      strengths: ['领导力', '战略规划', '决策能力', '沟通表达', '执行力'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的领导力，自信独立，同时也能挑战他们并帮助他们放慢脚步的人',
      communication: '直接、高效、目标导向，需要学习倾听和情感表达',
      strengths: ['承诺', '保护', '支持成长', '清晰沟通'],
      challenges: ['控制欲', '忽视情感', '缺乏耐心', '过于直接'],
      loveStyle: '主动型，会积极追求心仪对象，渴望建立平等而有活力的伴侣关系',
    },
    workplace: {
      workStyle: '高效、果断、目标导向，喜欢快速推进项目',
      leadership: '命令型领导，清晰表达期望，善于激励团队',
      teamwork: '擅长组织协调，但需要学会欣赏他人的贡献',
    },
    growth: {
      strengths: ['领导力', '自信心', '战略眼光', '执行力'],
      weaknesses: ['傲慢', '缺乏同理心', '控制欲', '忽视感受'],
      growthAreas: ['培养同理心', '学会倾听', '接受批评', '关注他人感受'],
      stressResponse: ['增加控制', '批评他人', '逃避情感', '过度工作'],
    },
    dating: {
      overview: 'ENTJ在恋爱中自信主动，他们会明确表达自己的兴趣并积极追求。他们渴望与同样有野心、积极向上的伴侣建立关系。',
      communication: '直接明了，不喜欢拐弯抹角。需要学会在表达意见时更加圆滑，考虑伴侣的感受。',
      conflict: '面对冲突可能变得好辩或强势。学习退后一步，真正倾听伴侣的观点，而不是急于赢得争论。',
      compatibility: ['INFP（调停者）', 'INTP（逻辑学家）', 'ENFP（竞选者）', 'INFJ（提倡者）'],
      tips: [
        '放慢脚步，给关系时间发展',
        '学习倾听而不是主导对话',
        '表达脆弱和情感需求',
        '欣赏伴侣的成就而非只关注结果',
        '学会说"对不起"',
      ],
    },
  },

  'ENTP': {
    type: 'ENTP',
    name: '辩论家',
    tagline: '聪明好奇的思想家',
    description: 'ENTP 是充满活力和创造力的思想家，他们喜欢挑战现状，探索新的可能性。他们善于发现机会并迅速行动。',
    strengths: ['创新能力', '适应能力', '沟通能力', '分析能力', '魅力', '多任务处理'],
    weaknesses: ['缺乏专注', '冲动', '回避承诺', '好辩', '容易厌倦'],
    cognitiveFunctions: [
      { name: '外倾直觉 (Ne)', description: '发现并探索各种可能性' },
      { name: '内倾思考 (Ti)', description: '分析可能性背后的逻辑' },
      { name: '外倾情感 (Fe)', description: '关注人际和谐和他人需求' },
      { name: '内倾感觉 (Si)', description: '依赖过去的经验和细节' },
    ],
    career: {
      suitable: ['企业家', '律师', '记者', '顾问', '演员', '营销专家', '发明家', '公关专家'],
      unsuitable: ['会计', '公务员', '实验室技术员', '质量检测员'],
      strengths: ['创新能力', '沟通技巧', '适应能力', '问题解决', '创业精神'],
    },
    relationship: {
      idealPartner: '能够跟上他们的思维节奏，欣赏他们的幽默和活力，同时也能在他们冲动时帮助他们聚焦的人',
      communication: '活泼、机智、喜欢辩论，但需要学会在重要问题上认真对待',
      strengths: ['活力', '幽默', '支持独立', '启发思考'],
      challenges: ['承诺困难', '好辩', '忽视细节', '冲动'],
      loveStyle: '魅力型，吸引众多追求者，需要学会在关系中保持专注',
    },
    workplace: {
      workStyle: '灵活、创意、喜欢同时处理多个项目',
      leadership: '启发型领导，鼓励创新和自主',
      teamwork: '带来活力和创意，但需要团队成员的配合来落地执行',
    },
    growth: {
      strengths: ['创造力', '适应力', '沟通能力', '智力优势'],
      weaknesses: ['专注力差', '冲动', '承诺困难', '好辩'],
      growthAreas: ['提高专注力', '学会承诺', '关注细节', '培养耐心'],
      stressResponse: ['增加辩论', '逃避问题', '寻找新刺激', '过度分析'],
    },
    dating: {
      overview: 'ENTP在恋爱中充满魅力和活力，他们喜欢智识上的交流和有趣的约会。但他们可能难以做出长期承诺。',
      communication: '机智幽默，喜欢辩论和调侃。需要学会在玩笑中表达真诚的情感。',
      conflict: '争论时可能过于好辩，把小争执升级为大战。学习区分"赢得辩论"和"赢得关系"。',
      compatibility: ['INFJ（提倡者）', 'INTJ（建筑师）', 'ISFJ（守卫者）', 'INTP（逻辑学家）'],
      tips: [
        '学会做决定和承诺',
        '不要把一切都变成辩论',
        '关注伴侣的实际需求',
        '记住重要的纪念日',
        '在关系中保持专注而不是寻找新鲜感',
      ],
    },
  },

  'INFJ': {
    type: 'INFJ',
    name: '提倡者',
    tagline: '安静而有远见的领导者',
    description: 'INFJ 是理想主义者，他们有强烈的价值观和使命感。他们善于理解他人的情感和需求，致力于创造积极的社会影响。',
    strengths: ['同理心', '创造力', '洞察力', '理想主义', '忠诚', '沟通能力'],
    weaknesses: ['完美主义', '情感疲惫', '回避冲突', '过度自我牺牲', '不切实际'],
    cognitiveFunctions: [
      { name: '内倾情感 (Fi)', description: '拥有强烈的个人价值观和道德观' },
      { name: '外倾直觉 (Ne)', description: '洞察他人的潜力和可能性' },
      { name: '内倾思维 (Ti)', description: '分析和整合信息形成内在理解' },
      { name: '外倾感觉 (Se)', description: '对当下环境敏感度较低' },
    ],
    career: {
      suitable: ['心理咨询师', '社会工作者', '作家', '教师', '人力资源', '非营利组织', '护士', '神职人员'],
      unsuitable: ['销售员', '律师', '军官', '金融交易员'],
      strengths: ['同理心', '洞察力', '创造力', '沟通能力', '使命感'],
    },
    relationship: {
      idealPartner: '能够理解他们深刻的思想和情感世界，支持他们的理想，同时也能帮助他们落地现实的人',
      communication: '深度、敏感、注重意义，需要学会表达自己的需求',
      strengths: ['深度连接', '忠诚', '支持成长', '情感理解'],
      challenges: ['过度付出', '情感压抑', '回避冲突', '不切实际'],
      loveStyle: '深刻型，渴望与伴侣建立灵魂层面的连接',
    },
    workplace: {
      workStyle: '有使命感、注重质量、追求意义',
      leadership: '愿景型领导，启发团队追求更高的目标',
      teamwork: '善于协调人际关系，关注团队成员的发展',
    },
    growth: {
      strengths: ['同理心', '创造力', '洞察力', '理想主义'],
      weaknesses: ['完美主义', '自我牺牲', '情感疲惫', '回避冲突'],
      growthAreas: ['设置界限', '接受不完美', '表达需求', '关注自我'],
      stressResponse: ['退缩', '自我批评', '过度付出', '逃避现实'],
    },
    dating: {
      overview: 'INFJ在恋爱中追求深刻和真实的连接。他们是忠诚而浪漫的伴侣，但可能在表达需求和面对冲突时遇到困难。',
      communication: '深刻而有意义的对话对他们很重要。需要学会直接表达自己的需求，而不是期待伴侣读懂你的心思。',
      conflict: '倾向于回避冲突或压抑不满。学习健康地表达和处理分歧，而不是积累怨恨。',
      compatibility: ['ENFP（竞选者）', 'ENTP（辩论家）', 'INTJ（建筑师）', 'INFP（调停者）'],
      tips: [
        '直接表达需求和感受',
        '设置健康的界限',
        '接受关系中的不完美',
        '不要为了和谐而牺牲自己',
        '相信你的直觉但也要理性验证',
      ],
    },
  },

  'INFP': {
    type: 'INFP',
    name: '调停者',
    tagline: '诗意、善良的利他主义者',
    description: 'INFP 是理想主义者，他们充满热情和创造力。他们重视个人成长和真实表达，致力于帮助他人和改善世界。',
    strengths: ['同理心', '创造力', '适应性', '理想主义', '忠诚', '敏感'],
    weaknesses: ['过于理想化', '情感脆弱', '拖延', '自我批评', '难以接受批评'],
    cognitiveFunctions: [
      { name: '内倾情感 (Fi)', description: '拥有强烈的个人价值观和内在道德指南' },
      { name: '外倾直觉 (Ne)', description: '探索可能性和创意联系' },
      { name: '内倾思维 (Ti)', description: '分析逻辑一致性' },
      { name: '外倾感觉 (Se)', description: '对当下环境和感官体验敏感' },
    ],
    career: {
      suitable: ['作家', '艺术家', '心理咨询师', '教师', '社会工作者', '人力资源', '图书管理员', '神职人员'],
      unsuitable: ['销售经理', '律师', '军官', '金融交易员'],
      strengths: ['创造力', '同理心', '沟通能力', '适应能力', '语言天赋'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的理想和深度，耐心等待他们敞开心扉，同时也能帮助他们面对现实的人',
      communication: '情感丰富、富有诗意，需要感到被理解和接纳',
      strengths: ['深度共情', '浪漫', '支持成长', '忠诚'],
      challenges: ['情感敏感', '回避冲突', '过度理想化', '拖延'],
      loveStyle: '浪漫型，会全身心投入感情，渴望灵魂伴侣',
    },
    workplace: {
      workStyle: '灵活、创意、追求意义和价值',
      leadership: '启发型领导，授权团队成员自主发展',
      teamwork: '善于协调不同观点，关注每个人的感受',
    },
    growth: {
      strengths: ['创造力', '同理心', '适应力', '理想主义'],
      weaknesses: ['理想化', '拖延', '情感脆弱', '自我否定'],
      growthAreas: ['提高执行力', '接受批评', '设置界限', '面对现实'],
      stressResponse: ['退缩', '自我批评', '幻想逃避', '情绪化'],
    },
    dating: {
      overview: 'INFP在恋爱中浪漫而忠诚。他们渴望与伴侣建立深刻的精神连接，但可能在表达需求和面对现实问题时遇到困难。',
      communication: '喜欢深入的情感对话。需要学会直接表达自己的需求，而不是期望伴侣能读懂你的心。',
      conflict: '面对冲突时可能变得情绪化或回避。学习用建设性的方式表达不满，而不是积累怨恨或突然爆发。',
      compatibility: ['ENFJ（主人公）', 'ENTJ（指挥官）', 'INTJ（建筑师）', 'INFJ（提倡者）'],
      tips: [
        '直接表达需求而不是等待被理解',
        '接受关系中的不完美',
        '学会处理冲突而不是回避',
        '关注现实而不是只活在心里',
        '设定界限，不要为了取悦他人而牺牲自己',
      ],
    },
  },

  'ENFJ': {
    type: 'ENFJ',
    name: '主人公',
    tagline: '富有魅力的领导者',
    description: 'ENFJ 是天生的领导者，他们热情、有感染力、善于激励他人。他们有强烈的使命感和道德观，致力于帮助他人成为最好的自己。',
    strengths: ['领导能力', '同理心', '沟通能力', '魅力', '责任感', '激励能力'],
    weaknesses: ['过于理想化', '自我牺牲', '过度认可需求', '忽视自身需求', '敏感批评'],
    cognitiveFunctions: [
      { name: '外倾情感 (Fe)', description: '关注他人的情感和需求，善于建立和谐关系' },
      { name: '内倾直觉 (Ni)', description: '洞察他人潜力和未来的发展方向' },
      { name: '外倾感觉 (Se)', description: '对当下环境和他人反应敏感' },
      { name: '内倾思维 (Ti)', description: '内在的逻辑分析，但可能发展不足' },
    ],
    career: {
      suitable: ['教师', '心理咨询师', '人力资源', '培训师', '社会工作者', '政治家', '销售经理', '公关专家'],
      unsuitable: ['软件工程师', '实验室研究员', '会计', '军事技术员'],
      strengths: ['领导力', '沟通能力', '同理心', '激励能力', '组织能力'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的热情和关怀，同时也能帮助他们照顾自己的人',
      communication: '温暖、关怀、善于倾听，需要学会表达自己的需求',
      strengths: ['浪漫', '支持', '激励成长', '深度连接'],
      challenges: ['过度付出', '取悦他人', '忽视自己', '敏感批评'],
      loveStyle: '热情型，全身心地投入感情，致力于帮助伴侣成长',
    },
    workplace: {
      workStyle: '协作型、关怀型、注重团队氛围',
      leadership: '魅力型领导，启发团队成员发挥潜力',
      teamwork: '善于协调关系，关注每个人的发展',
    },
    growth: {
      strengths: ['领导力', '同理心', '沟通能力', '激励能力'],
      weaknesses: ['自我牺牲', '取悦他人', '过度理想化', '忽视自我'],
      growthAreas: ['设置界限', '照顾自己', '接受不完美', '区分他人和自己的需求'],
      stressResponse: ['过度付出', '取悦他人', '逃避冲突', '自我批评'],
    },
    dating: {
      overview: 'ENFJ在恋爱中是热情而浪漫的伴侣。他们致力于帮助伴侣成长和发展，但可能过度付出而忽视自己的需求。',
      communication: '温暖、关怀、善于倾听。需要学会在倾听伴侣的同时也表达自己的需求，而不是总是迁就对方。',
      conflict: '倾向于回避冲突以维护和谐。学习健康地表达不满，而不是积累到爆发或压抑成疾。',
      compatibility: ['INFP（调停者）', 'INTP（逻辑学家）', 'ISFP（探险家）', 'INTJ（建筑师）'],
      tips: [
        '学会说"不"',
        '照顾好自己的情感需求',
        '不要总是把伴侣的问题扛在自己身上',
        '接受伴侣的缺点而不是试图改变他们',
        '给自己一些独处的时间',
      ],
    },
  },

  'ENFP': {
    type: 'ENFP',
    name: '竞选者',
    tagline: '热情、有创造力的社交者',
    description: 'ENFP 是充满热情和创造力的理想主义者，他们善于发现可能性并激励他人。他们热情洋溢、富有魅力，喜欢探索新的想法和经历。',
    strengths: ['热情', '创造力', '沟通能力', '适应能力', '灵感', '乐观'],
    weaknesses: ['注意力分散', '情绪波动', '拖延', '过度敏感', '承诺困难'],
    cognitiveFunctions: [
      { name: '外倾直觉 (Ne)', description: '发现和探索各种可能性' },
      { name: '内倾情感 (Fi)', description: '拥有强烈的个人价值观' },
      { name: '外倾思维 (Te)', description: '组织和执行外部项目' },
      { name: '内倾感觉 (Si)', description: '依赖过去的经验作为参考' },
    ],
    career: {
      suitable: ['演员', '作家', '记者', '心理咨询师', '艺术家', '营销专家', '培训师', '人力资源'],
      unsuitable: ['会计', '质量检测', '军事技术员', '数据分析师'],
      strengths: ['创造力', '沟通能力', '适应能力', '激励能力', '洞察力'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的热情和创意，理解他们需要自由空间，同时也能帮助他们聚焦和坚持的人',
      communication: '热情、活泼、富有表现力，需要感到被理解和欣赏',
      strengths: ['热情', '浪漫', '支持成长', '有趣'],
      challenges: ['注意力分散', '情绪化', '承诺困难', '冲动'],
      loveStyle: '充满激情和创意，喜欢给伴侣带来惊喜和浪漫',
    },
    workplace: {
      workStyle: '灵活、创意、追求意义，喜欢多样化的任务',
      leadership: '启发型领导，激励团队创新和自主',
      teamwork: '为团队带来活力和创意，但需要执行型伙伴帮助落地',
    },
    growth: {
      strengths: ['创造力', '热情', '沟通能力', '适应力'],
      weaknesses: ['注意力分散', '拖延', '情绪化', '承诺困难'],
      growthAreas: ['提高专注力', '学会承诺', '情绪管理', '关注细节'],
      stressResponse: ['寻找新刺激', '情绪波动', '拖延逃避', '过度乐观'],
    },
    dating: {
      overview: 'ENFP在恋爱中热情浪漫，充满创意和惊喜。他们渴望与伴侣建立深刻的精神连接，但可能在长期承诺和日常坚持方面遇到挑战。',
      communication: '充满热情和表达力，喜欢深度对话。需要学会在热情的同时也倾听伴侣的想法，而不是只顾自己的表达。',
      conflict: '面对冲突可能变得情绪化或逃避。学习冷静下来处理问题，而不是转身寻找新的刺激。',
      compatibility: ['INTJ（建筑师）', 'INFJ（提倡者）', 'INTP（逻辑学家）', 'ENFJ（主人公）'],
      tips: [
        '学会专注于一段关系而不是寻找新的可能',
        '在浪漫的同时也要脚踏实地',
        '学会处理日常生活中的问题',
        '不要把热情只留给开始，要持续经营',
        '尊重伴侣的界限和需求',
      ],
    },
  },

  'ISTJ': {
    type: 'ISTJ',
    name: '物流师',
    tagline: '事实性思考者，责任感极强',
    description: 'ISTJ 是可靠和务实的人，他们重视责任、秩序和传统。他们踏实、认真、注重细节，是值得信赖的伙伴和工作者。',
    strengths: ['责任感', '可靠性', '勤奋', '实际', '忠诚', '注重细节'],
    weaknesses: ['死板', '不灵活', '难以接受变化', '情感表达不足', '过度批判'],
    cognitiveFunctions: [
      { name: '内倾思维 (Ti)', description: '基于逻辑分析做出决定' },
      { name: '外倾感觉 (Se)', description: '关注当下环境和具体细节' },
      { name: '内倾情感 (Fi)', description: '内心有强烈的个人价值观' },
      { name: '外倾直觉 (Ne)', description: '对可能性的关注度较低' },
    ],
    career: {
      suitable: ['会计', '审计师', '律师', '军官', '项目经理', '行政人员', '质量检测', '工程师'],
      unsuitable: ['艺术家', '广告创意', '心理咨询师', '社会工作者'],
      strengths: ['可靠性', '责任感', '注重细节', '实际', '组织能力'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的可靠性和忠诚，理解他们需要结构和传统，同时也能帮助他们更加灵活和情感开放的人',
      communication: '直接、实际、注重事实，需要学习表达情感',
      strengths: ['忠诚', '可靠', '承诺', '支持稳定'],
      challenges: ['情感表达困难', '死板', '不灵活', '批评倾向'],
      loveStyle: '传统型，用行动而非言语表达爱意',
    },
    workplace: {
      workStyle: '系统化、有序、注重质量和工作效率',
      leadership: '务实型领导，以身作则，注重结果',
      teamwork: '可靠的工作伙伴，但可能对不按规矩办事的同事缺乏耐心',
    },
    growth: {
      strengths: ['可靠性', '责任感', '实际', '专注'],
      weaknesses: ['死板', '不灵活', '情感疏离', '批评倾向'],
      growthAreas: ['接受变化', '情感表达', '灵活性', '欣赏创新'],
      stressResponse: ['坚持传统', '过度工作', '批评他人', '退缩'],
    },
    dating: {
      overview: 'ISTJ在恋爱中是忠诚可靠的伴侣。他们用行动而非言语表达爱意，重视承诺和长期关系，但可能在情感表达和灵活性方面有挑战。',
      communication: '直接务实，不擅长表达情感。需要学习主动表达爱意和感激，而不仅仅是通过行动表达。',
      conflict: '面对冲突可能变得防御性强或回避情感讨论。学习开放地讨论感受，而不仅仅关注对错。',
      compatibility: ['ESFP（表演者）', 'ENFP（竞选者）', 'ESTP（企业家）', 'ENTP（辩论家）'],
      tips: [
        '主动表达情感和爱意',
        '接受计划外的变化',
        '学会欣赏不同的做事方式',
        '在冲突中关注感受而不仅仅是事实',
        '给伴侣一些惊喜和浪漫',
      ],
    },
  },

  'ISFJ': {
    type: 'ISFJ',
    name: '守卫者',
    tagline: '忠诚和关爱的守护者',
    description: 'ISFJ 是温暖、体贴、负责任的人，他们重视传统和他人需求。他们默默付出，是最可靠的守护者和支持者。',
    strengths: ['温暖', '关怀', '责任感', '忠诚', '勤奋', '实际'],
    weaknesses: ['过度付出', '忽视自己', '难以说不', '抗拒变化', '过度自我批评'],
    cognitiveFunctions: [
      { name: '内倾情感 (Fi)', description: '拥有强烈的个人价值观和对他人的关怀' },
      { name: '外倾感觉 (Se)', description: '关注当下环境和他人需求' },
      { name: '内倾思维 (Ti)', description: '内在的逻辑分析能力' },
      { name: '外倾直觉 (Ne)', description: '对可能性的关注度较低' },
    ],
    career: {
      suitable: ['护士', '医生', '教师', '社会工作者', '图书管理员', '人力资源', '行政人员', '会计'],
      unsuitable: ['企业家', '律师', '军官', '金融交易员'],
      strengths: ['关怀', '责任感', '细致', '忠诚', '勤奋'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的付出和关怀，理解他们需要时间独处，同时也能帮助他们照顾自己的人',
      communication: '温暖、关怀、注重和谐，需要学会表达自己的需求',
      strengths: ['温暖', '关怀', '支持', '忠诚'],
      challenges: ['过度付出', '忽视自己', '难以说不', '回避冲突'],
      loveStyle: '奉献型，全心全意照顾伴侣和家庭',
    },
    workplace: {
      workStyle: '细致、勤奋、注重质量，默默完成工作',
      leadership: '服务型领导，关注团队成员的需求',
      teamwork: '可靠的合作者，但可能承担过多工作',
    },
    growth: {
      strengths: ['关怀', '责任感', '忠诚', '细致'],
      weaknesses: ['过度付出', '自我忽视', '取悦他人', '抗拒变化'],
      growthAreas: ['设置界限', '照顾自己', '接受变化', '表达需求'],
      stressResponse: ['加倍付出', '自我批评', '逃避冲突', '压抑感受'],
    },
    dating: {
      overview: 'ISFJ在恋爱中是温暖而奉献的伴侣。他们通过行动照顾伴侣，但可能在表达需求和设置健康界限方面遇到困难。',
      communication: '温暖、关怀、善于照顾人。需要学会表达自己的感受和需求，而不是一味地满足他人。',
      conflict: '倾向于压抑不满或回避冲突来维护和谐。学习用健康的方式表达不同意见。',
      compatibility: ['ESFP（表演者）', 'ESTP（企业家）', 'ENFP（竞选者）', 'ENTP（辩论家）'],
      tips: [
        '学会说"不"',
        '表达自己的需求和感受',
        '不要总是把伴侣的需求放在第一位',
        '接受变化和新体验',
        '给自己一些时间和空间',
      ],
    },
  },

  'ESTJ': {
    type: 'ESTJ',
    name: '总经理',
    tagline: '出色的管理者',
    description: 'ESTJ 是务实、高效、有组织的人，他们重视传统、秩序和责任。他们是天生的领导者，善于管理和协调工作。',
    strengths: ['领导能力', '责任感', '可靠性', '实际', '组织能力', '执行力'],
    weaknesses: ['死板', '缺乏同理心', '过于权威', '难以接受批评', '不灵活'],
    cognitiveFunctions: [
      { name: '外倾思维 (Te)', description: '高效组织外部世界和资源' },
      { name: '内倾感觉 (Si)', description: '依赖传统和过去的经验' },
      { name: '外倾直觉 (Ne)', description: '对可能性的关注度有限' },
      { name: '内倾情感 (Fi)', description: '内在有自己的价值观，但可能被忽视' },
    ],
    career: {
      suitable: ['CEO', '项目经理', '军官', '法官', '银行家', '政治家', '教师', '行政主管'],
      unsuitable: ['艺术家', '心理咨询师', '作家', '社会工作者'],
      strengths: ['领导力', '组织能力', '责任感', '实际', '执行力'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的可靠性和领导力，理解他们需要结构和传统，同时也能帮助他们更加灵活和情感开放的人',
      communication: '直接、务实、注重效率，需要学习情感表达',
      strengths: ['可靠', '承诺', '支持', '保护'],
      challenges: ['死板', '缺乏同理心', '控制欲', '批评倾向'],
      loveStyle: '传统型，用行动和承诺表达爱意',
    },
    workplace: {
      workStyle: '高效、有序、注重结果和效率',
      leadership: '命令型领导，清晰表达期望，以身作则',
      teamwork: '善于组织协调，但可能过于强势',
    },
    growth: {
      strengths: ['领导力', '可靠性', '实际', '执行力'],
      weaknesses: ['死板', '缺乏同理心', '控制欲', '不灵活'],
      growthAreas: ['培养同理心', '接受不同意见', '灵活变通', '情感表达'],
      stressResponse: ['增加控制', '批评他人', '坚持传统', '过度工作'],
    },
    dating: {
      overview: 'ESTJ在恋爱中是可靠而传统的伴侣。他们用行动和承诺表达爱意，但可能在情感表达和灵活性方面有挑战。',
      communication: '直接务实，不擅长表达情感。需要学习说"我爱你"，而不仅仅是通过行动表达。',
      conflict: '面对冲突可能变得防御性强或过于强硬。学习倾听而不是命令，尊重伴侣的感受。',
      compatibility: ['ISFP（探险家）', 'INFP（调停者）', 'ISTP（鉴赏家）', 'INTP（逻辑学家）'],
      tips: [
        '学习表达情感而不仅是完成任务',
        '倾听而不是命令',
        '接受不同的做事方式',
        '对伴侣多点耐心和温柔',
        '学会妥协而不是总是赢',
      ],
    },
  },

  'ESFJ': {
    type: 'ESFJ',
    name: '执政官',
    tagline: '关心社交秩序和谐的热心人士',
    description: 'ESFJ 是热情、体贴、社交的人，他们重视和谐、人际关系和传统。他们是天生的照顾者，喜欢帮助和取悦他人。',
    strengths: ['关怀', '社交能力', '责任感', '受欢迎', '实际', '组织能力'],
    weaknesses: ['过于取悦他人', '过度认可需求', '敏感批评', '忽视自己', '从众压力'],
    cognitiveFunctions: [
      { name: '外倾情感 (Fe)', description: '关注他人的情感和需求' },
      { name: '内倾感觉 (Si)', description: '依赖传统和过去的经验' },
      { name: '外倾直觉 (Ne)', description: '对可能性的关注' },
      { name: '内倾思维 (Ti)', description: '内在的逻辑分析' },
    ],
    career: {
      suitable: ['教师', '护士', '人力资源', '销售', '公关', '客户服务', '美容师', '酒店管理'],
      unsuitable: ['软件工程师', '科学家', '军事技术员', '金融分析师'],
      strengths: ['关怀', '社交能力', '协调能力', '责任感', '受欢迎'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的关怀和付出，理解他们需要社交认可，同时也能帮助他们照顾自己的人',
      communication: '温暖、关怀、善于社交，需要学会表达自己的需求',
      strengths: ['温暖', '关怀', '支持', '社交'],
      challenges: ['取悦他人', '过度付出', '敏感批评', '忽视自己'],
      loveStyle: '热情型，喜欢照顾伴侣并建立温暖的家庭氛围',
    },
    workplace: {
      workStyle: '协作型、关怀型、注重人际和谐',
      leadership: '服务型领导，关注团队的需求和福利',
      teamwork: '善于协调关系，创造和谐的工作环境',
    },
    growth: {
      strengths: ['关怀', '社交能力', '责任感', '协调能力'],
      weaknesses: ['取悦他人', '自我忽视', '敏感批评', '从众'],
      growthAreas: ['设置界限', '照顾自己', '接受批评', '独立思考'],
      stressResponse: ['加倍付出', '取悦他人', '过度担心', '压抑感受'],
    },
    dating: {
      overview: 'ESFJ在恋爱中是热情而关怀的伴侣。他们喜欢照顾伴侣并建立温暖的家庭，但可能在设置界限和照顾自己方面有挑战。',
      communication: '温暖、关怀、善于表达。需要学会在照顾他人的同时也关注自己的感受和需求。',
      conflict: '倾向于回避冲突以维护和谐，或过度迎合伴侣。学习用健康的方式表达不同意见。',
      compatibility: ['ISFP（探险家）', 'ISTP（鉴赏家）', 'INTP（逻辑学家）', 'INFP（调停者）'],
      tips: [
        '学会说"不"而不要有罪恶感',
        '照顾好自己的情感需求',
        '接受批评不是世界末日',
        '有自己的兴趣和朋友圈',
        '不要总是把伴侣的需求放在第一位',
      ],
    },
  },

  'ISTP': {
    type: 'ISTP',
    name: '鉴赏家',
    tagline: '大胆而实际的冒险家',
    description: 'ISTP 是务实、灵活、善于动手的人，他们喜欢探索事物如何运作。他们冷静、理性，善于在危机时刻保持冷静。',
    strengths: ['实际', '灵活', '理性', '动手能力', '问题解决', '冒险精神'],
    weaknesses: ['冲动', '情感疏离', '不擅表达', '冒险', '缺乏耐心'],
    cognitiveFunctions: [
      { name: '内倾思维 (Ti)', description: '分析事物内在逻辑和运作原理' },
      { name: '外倾感觉 (Se)', description: '对当下环境和感官体验敏感' },
      { name: '内倾情感 (Fi)', description: '内心有自己的价值观和情感' },
      { name: '外倾直觉 (Ne)', description: '探索各种可能性' },
    ],
    career: {
      suitable: ['工程师', '机械师', '飞行员', '运动员', '警察', '消防员', '技术人员', '程序员'],
      unsuitable: ['教师', '心理咨询师', '销售经理', '公关专员'],
      strengths: ['动手能力', '问题解决', '冷静', '实际', '灵活'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的独立和动手能力，理解他们需要自由空间，同时也能帮助他们表达情感的人',
      communication: '直接、简洁、不喜欢废话，需要学会表达情感',
      strengths: ['独立', '灵活', '实际', '冷静'],
      challenges: ['情感疏离', '不擅表达', '冲动', '回避承诺'],
      loveStyle: '行动型，用行动而非言语表达关心',
    },
    workplace: {
      workStyle: '灵活、实际、喜欢动手解决问题',
      leadership: '倾向于平等协作而非发号施令',
      teamwork: '在危机情况下表现出色，但日常可能显得疏离',
    },
    growth: {
      strengths: ['动手能力', '问题解决', '冷静', '实际'],
      weaknesses: ['情感疏离', '冲动', '不擅表达', '冒险'],
      growthAreas: ['情感表达', '承诺', '耐心', '计划性'],
      stressResponse: ['退缩独处', '冒险行为', '分析过度', '逃避'],
    },
    dating: {
      overview: 'ISTP在恋爱中是独立而实际的伴侣。他们不喜欢过多的情感表达，但一旦认定就会用行动表达关心。需要自由空间，不喜欢被束缚。',
      communication: '简洁直接，不喜欢长篇大论。需要学习用言语表达情感，而不仅是通过行动。',
      conflict: '面对冲突倾向于回避或冷静分析。需要学会真正处理情感问题，而不是逃避。',
      compatibility: ['ESFJ（执政官）', 'ENFJ（主人公）', 'ESTJ（总经理）', 'ENTJ（指挥官）'],
      tips: [
        '主动用言语表达情感',
        '不要总是逃避冲突',
        '学会做出承诺',
        '多关注伴侣的感受',
        '接受浪漫和仪式感',
      ],
    },
  },

  'ISFP': {
    type: 'ISFP',
    name: '探险家',
    tagline: '灵活有魅力的艺术家',
    description: 'ISFP 是敏感、创意、热爱自由的人，他们用艺术的方式体验世界。他们温和、体贴，重视个人表达和美学。',
    strengths: ['创意', '敏感', '审美', '灵活', '动手能力', '温暖'],
    weaknesses: ['冲动', '回避冲突', '难以说不', '过度敏感', '逃避现实'],
    cognitiveFunctions: [
      { name: '内倾情感 (Fi)', description: '拥有强烈的个人价值观和审美观' },
      { name: '外倾感觉 (Se)', description: '对当下感官体验敏感' },
      { name: '内倾直觉 (Ni)', description: '对未来有模糊的洞察' },
      { name: '外倾思维 (Te)', description: '组织和执行能力有限' },
    ],
    career: {
      suitable: ['艺术家', '设计师', '音乐家', '摄影师', '厨师', '园林师', '兽医', '时装设计'],
      unsuitable: ['律师', '军官', '企业高管', '金融分析师'],
      strengths: ['创意', '审美', '敏感', '动手能力', '独特视角'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的艺术气质和敏感性，理解他们需要自由空间，同时也能帮助他们面对现实的人',
      communication: '温和、敏感、注重感受，需要感到被接纳',
      strengths: ['温暖', '浪漫', '支持', '接纳'],
      challenges: ['敏感', '回避冲突', '冲动', '逃避现实'],
      loveStyle: '浪漫型，用独特的方式表达爱意和创造浪漫',
    },
    workplace: {
      workStyle: '灵活、创意、追求美学和个人表达',
      leadership: '倾向于避免领导角色，喜欢平等协作',
      teamwork: '为团队带来美感和独特视角，但可能回避冲突',
    },
    growth: {
      strengths: ['创意', '敏感', '审美', '灵活性'],
      weaknesses: ['冲动', '逃避', '敏感', '难以说不'],
      growthAreas: ['提高行动力', '面对冲突', '设置界限', '专注力'],
      stressResponse: ['退缩', '幻想逃避', '冲动行为', '过度敏感'],
    },
    dating: {
      overview: 'ISFP在恋爱中是浪漫而敏感的伴侣。他们用独特的方式表达爱意，但可能在承诺和面对冲突时遇到困难。',
      communication: '温和敏感，不喜欢直接批评。需要用温柔的方式沟通，并给他们时间消化。',
      conflict: '倾向于回避冲突或冲动反应。学习用健康的方式表达不满，而不是压抑或爆发。',
      compatibility: ['ENFJ（主人公）', 'ENTJ（指挥官）', 'ESFJ（执政官）', 'ESTJ（总经理）'],
      tips: [
        '学会用言语表达感受',
        '面对冲突而不是逃避',
        '提高行动力和执行力',
        '设置健康的界限',
        '接受承诺和责任',
      ],
    },
  },

  'ESTP': {
    type: 'ESTP',
    name: '企业家',
    tagline: '聪明、精力充沛的冒险家',
    description: 'ESTP 是活力充沛、善于交际、热爱冒险的人。他们活在当下，享受生活带来的刺激，善于把握机会。',
    strengths: ['活力', '社交能力', '适应力', '务实', '谈判能力', '危机处理'],
    weaknesses: ['冲动', '缺乏计划', '注意力分散', '冒险', '忽视感受'],
    cognitiveFunctions: [
      { name: '外倾感觉 (Se)', description: '对当下环境敏感，善于把握机会' },
      { name: '内倾思维 (Ti)', description: '分析情况和逻辑关系' },
      { name: '外倾情感 (Fe)', description: '关注社交和他人的反应' },
      { name: '内倾直觉 (Ni)', description: '对未来的洞察有限' },
    ],
    career: {
      suitable: ['企业家', '销售', '经纪', '运动员', '军官', '消防员', '公关专家', '市场推广'],
      unsuitable: ['图书馆员', '会计', '科学家', '心理咨询师'],
      strengths: ['社交能力', '危机处理', '务实', '谈判能力', '适应力'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的活力和冒险精神，理解他们需要行动和刺激，同时也能帮助他们放慢脚步的人',
      communication: '直接、活泼、注重当下，需要学会倾听',
      strengths: ['活力', '浪漫', '实际', '适应力'],
      challenges: ['冲动', '缺乏耐心', '冒险', '忽视感受'],
      loveStyle: '热情型，喜欢用行动和冒险创造浪漫',
    },
    workplace: {
      workStyle: '行动型、灵活、喜欢多样化的挑战',
      leadership: '务实型领导，善于抓住机会和激励团队',
      teamwork: '为团队带来活力，但在需要长期规划的项目中可能表现不佳',
    },
    growth: {
      strengths: ['社交能力', '适应力', '务实', '危机处理'],
      weaknesses: ['冲动', '缺乏计划', '冒险', '忽视感受'],
      growthAreas: ['提高计划性', '关注他人感受', '延迟满足', '专注力'],
      stressResponse: ['寻找刺激', '冲动行动', '否认问题', '逃避'],
    },
    dating: {
      overview: 'ESTP在恋爱中是热情而实际的伴侣。他们喜欢活在当下，创造刺激的约会体验，但可能在长期承诺和关注伴侣感受时遇到困难。',
      communication: '直接活泼，喜欢行动多于对话。需要学会倾听和关注伴侣的情感需求，而不仅是自己的想法。',
      conflict: '可能变得冲动或回避深入讨论。学习冷静下来处理情感问题，而不是逃避或争吵。',
      compatibility: ['ISFJ（守卫者）', 'ISTJ（物流师）', 'INFJ（提倡者）', 'INTJ（建筑师）'],
      tips: [
        '放慢脚步，关注伴侣的感受',
        '学会做长期计划',
        '在关系中保持专注而不是寻找刺激',
        '多倾听而不是总是主导',
        '接受承诺和责任',
      ],
    },
  },

  'ESFP': {
    type: 'ESFP',
    name: '表演者',
    tagline: '自发的、精力充沛的表演者',
    description: 'ESFP 是热情、活泼、热爱生活的人。他们充满活力，喜欢成为焦点，善于活跃气氛，是天生的表演者和社交明星。',
    strengths: ['热情', '社交能力', '审美', '适应力', '魅力', '创意'],
    weaknesses: ['注意力分散', '冲动', '难以说不', '逃避问题', '过度敏感'],
    cognitiveFunctions: [
      { name: '外倾感觉 (Se)', description: '对当下环境和感官体验极度敏感' },
      { name: '内倾情感 (Fi)', description: '拥有强烈的个人价值观和感受' },
      { name: '外倾直觉 (Ne)', description: '探索各种可能性和创意' },
      { name: '内倾思维 (Ti)', description: '内在的逻辑分析' },
    ],
    career: {
      suitable: ['演员', '歌手', '主持人', '销售', '公关', '化妆师', '摄影师', '旅游从业者'],
      unsuitable: ['科学家', '会计', '工程师', '图书馆员'],
      strengths: ['社交能力', '表现力', '审美', '适应力', '魅力'],
    },
    relationship: {
      idealPartner: '能够欣赏他们的活力和表演天赋，理解他们需要关注和刺激，同时也能帮助他们面对现实的人',
      communication: '热情、活泼、善于表达，需要感到被关注',
      strengths: ['热情', '浪漫', '有趣', '支持'],
      challenges: ['冲动', '注意力分散', '逃避问题', '过度敏感'],
      loveStyle: '热情浪漫型，喜欢创造难忘的体验和回忆',
    },
    workplace: {
      workStyle: '灵活、创意、喜欢多样化和社交互动',
      leadership: '魅力型领导，吸引和激励团队',
      teamwork: '为团队带来活力和正能量，但可能回避复杂的工作',
    },
    growth: {
      strengths: ['社交能力', '热情', '审美', '适应力'],
      weaknesses: ['注意力分散', '冲动', '逃避', '过度敏感'],
      growthAreas: ['提高专注力', '面对问题', '延迟满足', '承担后果'],
      stressResponse: ['寻找刺激', '逃避问题', '过度消费', '否认'],
    },
    dating: {
      overview: 'ESFP在恋爱中是热情浪漫的伴侣。他们喜欢创造有趣的约会和难忘的体验，但可能在长期承诺和面对日常问题时遇到困难。',
      communication: '热情善于表达，喜欢分享感受和经历。需要被关注和欣赏，否则可能感到不安。',
      conflict: '可能变得情绪化或逃避问题。学习冷静下来处理冲突，而不是转身寻找新的刺激。',
      compatibility: ['ISFJ（守卫者）', 'ISTJ（物流师）', 'INTJ（建筑师）', 'INFJ（提倡者）'],
      tips: [
        '学会处理日常生活中的问题',
        '不要总是逃避冲突和困难',
        '在关系中保持专注',
        '学会说"不"',
        '培养深度思考的能力',
      ],
    },
  },
};

export const dimensionDescriptions = {
  'EI': {
    name: '能量倾向',
    description: '你是从外部世界（外向E）还是内部世界（内向I）获取能量？',
    left: '外向型 (E)',
    right: '内向型 (I)',
  },
  'SN': {
    name: '信息获取',
    description: '你如何获取信息？通过具体的感官体验（实感S）还是抽象的直觉（直觉N）？',
    left: '实感型 (S)',
    right: '直觉型 (N)',
  },
  'TF': {
    name: '决策方式',
    description: '你如何做决定？通过逻辑分析（思考T）还是考虑他人感受（情感F）？',
    left: '思考型 (T)',
    right: '情感型 (F)',
  },
  'JP': {
    name: '生活方式',
    description: '你如何面对外部世界？喜欢有计划（判断J）还是灵活应变（知觉P）？',
    left: '判断型 (J)',
    right: '知觉型 (P)',
  },
};
