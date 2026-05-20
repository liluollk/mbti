import React from 'react';
import { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null; // 当前选中的答案（0-4）
  onAnswer: (answer: number) => void; // 选择答案时的回调
}

// 选项配置
const options = [
  { value: 0, label: '非常不同意' },
  { value: 1, label: '不同意' },
  { value: 2, label: '中立' },
  { value: 3, label: '同意' },
  { value: 4, label: '非常同意' },
];

// 题目卡片组件
const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswer,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* 题目容器 */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fadeIn">
        {/* 题目文本 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10 leading-relaxed">
          {question.text}
        </h2>

        {/* 选项列表 */}
        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => onAnswer(option.value)}
              className={`
                w-full p-4 md:p-6 rounded-xl text-left transition-all duration-300
                ${selectedAnswer === option.value
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg transform scale-[1.02]'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
                }
                font-medium text-lg
                btn-hover
              `}
            >
              <div className="flex items-center">
                {/* 圆形指示器 */}
                <div
                  className={`
                    w-6 h-6 rounded-full border-2 mr-4 flex-shrink-0
                    ${selectedAnswer === option.value
                      ? 'border-white bg-white'
                      : 'border-gray-300 bg-white'
                    }
                  `}
                >
                  {selectedAnswer === option.value && (
                    <div className="w-full h-full rounded-full bg-primary-600 scale-75" />
                  )}
                </div>
                <span>{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
