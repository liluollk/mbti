// Storage utilities for local storage

const STORAGE_KEYS = {
  PAID: 'mbti_paid',
  ANSWERS: 'mbti_answers',
  CURRENT_INDEX: 'mbti_current_index',
};

export const storage = {
  // Paid status
  isPaid(): boolean {
    try {
      return localStorage.getItem(STORAGE_KEYS.PAID) === 'true';
    } catch {
      return false;
    }
  },

  setPaid(value: boolean): void {
    localStorage.setItem(STORAGE_KEYS.PAID, String(value));
  },

  // Answers
  getAnswers(): number[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ANSWERS);
      if (!saved) return [];
      const answers = JSON.parse(saved);
      return Array.isArray(answers) ? answers : [];
    } catch {
      return [];
    }
  },

  setAnswers(answers: number[]): void {
    localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(answers));
  },

  // Current index
  getCurrentIndex(): number {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_INDEX);
      if (!saved) return 0;
      const index = parseInt(saved, 10);
      return isNaN(index) ? 0 : index;
    } catch {
      return 0;
    }
  },

  setCurrentIndex(index: number): void {
    localStorage.setItem(STORAGE_KEYS.CURRENT_INDEX, String(index));
  },

  // Clear progress
  clearProgress(): void {
    localStorage.removeItem(STORAGE_KEYS.ANSWERS);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_INDEX);
  },

  // Clear all
  clearAll(): void {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  }
};
