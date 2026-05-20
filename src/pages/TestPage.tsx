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

const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-50 toast">
      <div className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg">
        {message}
      </div>
    </div>
  );
};

const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [toast, setToast] = useState({ message: '', visible: false });

  useEffect(() => {
    if (!storage.isPaid()) {
      navigate('/', { replace: true });
      return;
    }

    const savedAnswers = storage.getAnswers();
    const savedIndex = storage.getCurrentIndex();

    if (savedAnswers.length > 0) {
      setAnswers(savedAnswers);
      setCurrentIndex(savedIndex);
    } else {
      const initialAnswers = new Array(questions.length).fill(-1);
      setAnswers(initialAnswers);
    }
  }, [navigate]);

  const handleAnswer = (answer: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = answer;
    setAnswers(newAnswers);
    storage.setAnswers(newAnswers);
    storage.setCurrentIndex(currentIndex);
  };

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast({ message: '', visible: false });
    }, 2000);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      storage.setCurrentIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (answers[currentIndex] === -1) {
      showToast('请先选择答案');
      return;
    }

    if (currentIndex === questions.length - 1) {
      navigate('/result', { replace: true });
    } else {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      storage.setCurrentIndex(newIndex);
    }
  };

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[currentIndex] ?? null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex flex-col">
      {/* 顶部区域 */}
      <div className="p-4">
        {/* 进度条 */}
        <ProgressBar current={currentIndex} total={questions.length} />

        {/* 保存进度提示 */}
        <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-2 text-center">
          <span className="text-blue-700 text-sm">💡 进度自动保存</span>
        </div>
      </div>

      {/* 题目内容区域 - 自适应高度 */}
      <div className="flex-1 overflow-auto px-4 pb-32">
        <div className="max-w-lg mx-auto">
          {currentQuestion && (
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </div>

      {/* 底部固定导航栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg px-4 py-3 bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-lg mx-auto flex gap-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`
              flex-1 py-3 px-6 rounded-xl font-semibold text-base transition-all duration-300
              ${currentIndex === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            ← 上一题
          </button>
          <button
            onClick={handleNext}
            className="flex-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 px-6 rounded-xl font-semibold text-base hover:shadow-lg transition-all duration-300"
          >
            {currentIndex === questions.length - 1 ? '提交测试' : '下一题 →'}
          </button>
        </div>
        <div className="text-center text-gray-400 text-xs mt-2">
          MBTI 人格测试 · 第 {currentIndex + 1}/{questions.length} 题
        </div>

        {/* 仅供参考提示 */}
        <div className="text-center text-gray-300 text-xs mt-1">
          ⚠️ 测试结果仅供娱乐参考
        </div>
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
};

export default TestPage;
