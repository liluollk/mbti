import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { storage } from '../utils/storage';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';

interface ToastProps {
  message: string;
  visible: boolean;
}

// Toast 提示组件
const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 toast">
      <div className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg">
        {message}
      </div>
    </div>
  );
};

// 测试页面组件
const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [toast, setToast] = useState({ message: '', visible: false });

  // 组件挂载时加载保存的进度
  useEffect(() => {
    // 检查是否已付费，未付费则跳转回付费页
    if (!storage.isPaid()) {
      navigate('/', { replace: true });
      return;
    }

    // 加载保存的答案和当前索引
    const savedAnswers = storage.getAnswers();
    const savedIndex = storage.getCurrentIndex();

    if (savedAnswers.length > 0) {
      setAnswers(savedAnswers);
      setCurrentIndex(savedIndex);
    } else {
      // 初始化答案数组
      const initialAnswers = new Array(questions.length).fill(-1);
      setAnswers(initialAnswers);
    }
  }, [navigate]);

  // 处理答案选择
  const handleAnswer = (answer: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = answer;
    setAnswers(newAnswers);

    // 保存到 localStorage
    storage.setAnswers(newAnswers);
    storage.setCurrentIndex(currentIndex);
  };

  // 显示 Toast 提示
  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast({ message: '', visible: false });
    }, 2000);
  };

  // 上一题
  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      storage.setCurrentIndex(newIndex);
    }
  };

  // 下一题
  const handleNext = () => {
    // 检查当前题是否已作答
    if (answers[currentIndex] === -1) {
      showToast('请先选择答案');
      return;
    }

    // 检查是否是最后一题
    if (currentIndex === questions.length - 1) {
      // 提交测试
      navigate('/result', { replace: true });
    } else {
      // 下一题
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      storage.setCurrentIndex(newIndex);
    }
  };

  // 获取当前题目和选中的答案
  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[currentIndex] ?? null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 py-8 px-4">
      {/* 顶部进度条 */}
      <div className="max-w-4xl mx-auto">
        <ProgressBar current={currentIndex} total={questions.length} />
      </div>

      {/* 保存进度提示 */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
          <span className="text-blue-700 text-sm">
            💡 暂时离开不用担心，进度自动保存～
          </span>
        </div>
      </div>

      {/* 题目卡片 */}
      <div className="max-w-4xl mx-auto">
        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswer={handleAnswer}
          />
        )}
      </div>

      {/* 导航按钮 */}
      <div className="max-w-4xl mx-auto mt-8 flex justify-between gap-4">
        {/* 上一题按钮 */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`
            flex-1 py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300
            ${currentIndex === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg btn-hover'
            }
          `}
        >
          ← 上一题
        </button>

        {/* 下一题/提交按钮 */}
        <button
          onClick={handleNext}
          className="flex-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 btn-hover"
        >
          {currentIndex === questions.length - 1 ? '提交测试 →' : '下一题 →'}
        </button>
      </div>

      {/* 底部信息 */}
      <div className="max-w-4xl mx-auto mt-8 text-center text-gray-400 text-sm">
        <p>MBTI 人格测试 · 探索你的性格密码</p>
      </div>

      {/* Toast 提示 */}
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
};

export default TestPage;
