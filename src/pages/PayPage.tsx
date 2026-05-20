import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../utils/storage';
import PayModal from '../components/PayModal';

// 付费页面组件
const PayPage: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // 组件挂载时检查付费状态
  useEffect(() => {
    if (storage.isPaid()) {
      // 已付费，跳转到测试页面
      navigate('/test', { replace: true });
    }
  }, [navigate]);

  // 处理支付
  const handlePay = () => {
    // 设置付费状态
    storage.setPaid(true);
    // 关闭模态框
    setShowModal(false);
    // 跳转到测试页面
    navigate('/test', { replace: true });
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      {/* 主内容卡片 */}
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 animate-fadeIn">
        {/* 脑科学 SVG 插图 */}
        <div className="flex justify-center mb-8">
          <svg
            className="w-48 h-48 md:w-64 md:h-64"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 脑轮廓 */}
            <path
              d="M100 20C60 20 30 50 30 90C30 130 50 150 70 170C75 175 80 180 85 185C90 190 95 195 100 195C105 195 110 190 115 185C120 180 125 175 130 170C150 150 170 130 170 90C170 50 140 20 100 20Z"
              fill="url(#brain-gradient)"
              opacity="0.9"
            />
            {/* 脑沟回 */}
            <path
              d="M60 80C70 70 80 75 90 80M110 75C120 70 130 80 140 85M75 110C85 105 95 110 105 115M115 110C125 115 135 110 145 105M80 140C90 135 100 145 110 150M120 145C130 150 140 145 150 140"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* 神经元节点 */}
            <circle cx="60" cy="60" r="5" fill="white" opacity="0.8" />
            <circle cx="140" cy="60" r="5" fill="white" opacity="0.8" />
            <circle cx="50" cy="100" r="4" fill="white" opacity="0.7" />
            <circle cx="150" cy="100" r="4" fill="white" opacity="0.7" />
            <circle cx="70" cy="130" r="4" fill="white" opacity="0.7" />
            <circle cx="130" cy="130" r="4" fill="white" opacity="0.7" />
            {/* 连接线 */}
            <line x1="60" y1="60" x2="100" y2="80" stroke="white" strokeWidth="1" opacity="0.4" />
            <line x1="140" y1="60" x2="100" y2="80" stroke="white" strokeWidth="1" opacity="0.4" />
            <line x1="100" y1="80" x2="100" y2="110" stroke="white" strokeWidth="1" opacity="0.4" />
            {/* 渐变定义 */}
            <defs>
              <linearGradient id="brain-gradient" x1="30" y1="20" x2="170" y2="195" gradientUnits="userSpaceOnUse">
                <stop stopColor="#667eea" />
                <stop offset="1" stopColor="#764ba2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 主标题 */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          探索你的人格代码
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-700">
          MBTI 专业测试
        </h2>

        {/* 副标题 */}
        <div className="text-center text-gray-500 mb-8 text-lg">
          <p className="mb-2">93题 · 15分钟 · 解锁你的16型人格报告</p>
        </div>

        {/* 价格标签 */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-2xl shadow-lg inline-block animate-pulse">
            <div className="text-sm mb-1 opacity-90">限时特惠</div>
            <div className="text-4xl font-bold">¥0.10</div>
            <div className="text-sm mt-1 opacity-90 line-through">原价 ¥99</div>
          </div>
        </div>

        {/* CTA 按钮 */}
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 btn-hover"
        >
          开始测试 ¥0.10
        </button>

        {/* 底部提示 */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>✅ 完全匿名 · 🔒 数据安全 · 💡 科学的心理测评</p>
        </div>
      </div>

      {/* 支付模态框 */}
      <PayModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onPay={handlePay}
      />
    </div>
  );
};

export default PayPage;
