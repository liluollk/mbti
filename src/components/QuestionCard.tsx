import React, { useState, useEffect } from 'react';
import { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (answer: number) => void;
}

const options = [
  { value: 0, label: '非常不同意' },
  { value: 1, label: '不同意' },
  { value: 2, label: '中立' },
  { value: 3, label: '同意' },
  { value: 4, label: '非常同意' },
];

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswer,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [question.id]);

  return (
    <div className="w-full">
      <div
        className={`
          bg-white rounded-xl shadow-sm border border-gray-100 p-5
          transition-all duration-300 ease-out
          ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
        `}
      >
        <h2 className="text-lg font-semibold text-gray-800 text-center leading-relaxed mb-4">
          {question.text}
        </h2>

        <div className="space-y-2">
          {options.map((option, index) => (
            <button
              key={option.value}
              onClick={() => onAnswer(option.value)}
              className={`
                w-full p-3 rounded-lg text-left transition-all duration-200 ease-out
                ${selectedAnswer === option.value
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md scale-[1.02]'
                  : 'bg-gray-50 hover:bg-gray-100 hover:scale-[1.01] text-gray-700'
                }
                font-medium text-base flex items-center
                transform hover:shadow-sm
              `}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div
                className={`
                  w-5 h-5 rounded-full border-2 mr-3 flex-shrink-0 flex items-center justify-center
                  transition-all duration-200
                  ${selectedAnswer === option.value
                    ? 'border-white scale-110'
                    : 'border-gray-300 bg-white hover:border-primary-300'
                  }
                `}
              >
                {selectedAnswer === option.value && (
                  <div
                    className={`
                      w-3 h-3 rounded-full bg-white
                      transition-all duration-200
                      ${selectedAnswer === option.value ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                    `}
                  />
                )}
              </div>
              <span
                className={`
                  transition-all duration-200
                  ${selectedAnswer === option.value ? 'translate-x-0' : 'translate-x-[-2px]'}
                `}
              >
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
