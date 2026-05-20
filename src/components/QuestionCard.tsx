import React from 'react';
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
  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="text-lg font-semibold text-gray-800 text-center leading-relaxed mb-4">
          {question.text}
        </h2>

        <div className="space-y-2">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => onAnswer(option.value)}
              className={`
                w-full p-3 rounded-lg text-left transition-all duration-200
                ${selectedAnswer === option.value
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }
                font-medium text-base flex items-center
              `}
            >
              <div
                className={`
                  w-5 h-5 rounded-full border-2 mr-3 flex-shrink-0 flex items-center justify-center
                  ${selectedAnswer === option.value
                    ? 'border-white'
                    : 'border-gray-300 bg-white'
                  }
                `}
              >
                {selectedAnswer === option.value && (
                  <div className="w-3 h-3 rounded-full bg-white" />
                )}
              </div>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
