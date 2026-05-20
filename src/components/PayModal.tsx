import React, { useEffect } from 'react';

interface PayModalProps {
  isOpen: boolean; // 是否显示模态框
  onClose: () => void; // 关闭模态框的回调
  onPay: () => void; // 支付确认的回调
}

// 支付模态框组件
const PayModal: React.FC<PayModalProps> = ({ isOpen, onClose, onPay }) => {
  // 监听 ESC 键关闭模态框
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // 如果模态框未打开，不渲染任何内容
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
      onClick={onClose}
    >
      {/* 模态框内容 */}
      <div
        className="modal-content bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()} // 阻止点击事件冒泡
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="关闭"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 标题 */}
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
          一键支付 ¥0.10
        </h3>

        {/* 副标题 */}
        <p className="text-gray-500 text-center mb-6">
          模拟支付演示（暂不支持真实支付）
        </p>

        {/* 支付图标 */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4">
            {/* 支付宝图标 */}
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
              支付宝
            </div>
            {/* 微信支付图标 */}
            <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
              微信
            </div>
          </div>
        </div>

        {/* 提示信息 */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800 text-center">
            💡 这是一个演示页面，无需真实支付
          </p>
        </div>

        {/* 支付按钮 */}
        <button
          onClick={onPay}
          className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 btn-hover"
        >
          立即支付 ¥0.10
        </button>

        {/* 取消按钮 */}
        <button
          onClick={onClose}
          className="w-full mt-3 text-gray-500 hover:text-gray-700 py-2 font-medium transition-colors"
        >
          取消
        </button>
      </div>
    </div>
  );
};

export default PayModal;
