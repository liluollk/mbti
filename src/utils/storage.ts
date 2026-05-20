// localStorage 工具函数
// 用于管理用户测试进度和付费状态

// 存储键名
const STORAGE_KEYS = {
  PAID: 'mbti_paid', // 付费状态
  ANSWERS: 'mbti_answers', // 用户答案
  CURRENT_INDEX: 'mbti_current_index', // 当前题目索引
};

// 付费状态管理
export const storage = {
  // 检查用户是否已付费
  isPaid: (): boolean => {
    const paid = localStorage.getItem(STORAGE_KEYS.PAID);
    return paid === 'true';
  },

  // 设置付费状态
  setPaid: (paid: boolean): void => {
    localStorage.setItem(STORAGE_KEYS.PAID, paid.toString());
  },

  // 清除付费状态（用于重置测试）
  clearPaid: (): void => {
    localStorage.removeItem(STORAGE_KEYS.PAID);
  },

  // 获取用户答案
  getAnswers: (): number[] => {
    const answers = localStorage.getItem(STORAGE_KEYS.ANSWERS);
    return answers ? JSON.parse(answers) : [];
  },

  // 保存用户答案
  setAnswers: (answers: number[]): void => {
    localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(answers));
  },

  // 获取当前题目索引
  getCurrentIndex: (): number => {
    const index = localStorage.getItem(STORAGE_KEYS.CURRENT_INDEX);
    return index ? parseInt(index, 10) : 0;
  },

  // 设置当前题目索引
  setCurrentIndex: (index: number): void => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_INDEX, index.toString());
  },

  // 清除测试进度（用于重新测试）
  clearProgress: (): void => {
    localStorage.removeItem(STORAGE_KEYS.ANSWERS);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_INDEX);
  },

  // 重置所有数据
  resetAll: (): void => {
    storage.clearPaid();
    storage.clearProgress();
  },
};
