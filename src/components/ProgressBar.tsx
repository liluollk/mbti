import React from 'react';

interface ProgressBarProps {
  current: number; // 当前题目索引
  total: number; // 总题目数
}

// 进度条组件
const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  // 计算进度百分比
  const progress = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      {/* 进度文本 */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          第 {current + 1} / {total} 题
        </span>
        <span className="text-sm font-medium text-primary-600">
          {Math.round(progress)}%
        </span>
      </div>

      {/* 进度条容器 */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        {/* 进度条填充 */}
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
