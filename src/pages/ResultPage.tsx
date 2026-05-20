import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { mbtiDescriptions, MBTIResult } from '../data/mbtiDescriptions';
import { calculateMBTI, getDimensionScores, getTendencyStrength } from '../utils/mbtiCalculator';
import { storage } from '../utils/storage';

interface ResultData {
  mbtiType: string;
  description: MBTIResult;
  dimensionScores: ReturnType<typeof getDimensionScores>;
}

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<ResultData | null>(null);

  useEffect(() => {
    if (!storage.isPaid()) {
      navigate('/', { replace: true });
      return;
    }

    const answers = storage.getAnswers();

    if (answers.length === 0 || answers.every(a => a === -1)) {
      navigate('/test', { replace: true });
      return;
    }

    const mbtiType = calculateMBTI(questions, answers);
    const description = mbtiDescriptions[mbtiType] || mbtiDescriptions['INTJ'];
    const dimensionScores = getDimensionScores(questions, answers);

    setResult({
      mbtiType,
      description,
      dimensionScores,
    });
  }, [navigate]);

  const handleShare = () => {
    if (result) {
      const shareText = `我刚刚做了MBTI人格测试，结果是${result.mbtiType}(${result.description.name})！你也来试试吧！`;
      navigator.clipboard.writeText(shareText).then(() => {
        alert('分享内容已复制到剪贴板！');
      }).catch(() => {
        alert('分享功能开发中...');
        console.log('分享内容:', shareText);
      });
    }
  };

  const handleRetest = () => {
    storage.clearProgress();
    navigate('/test', { replace: true });
  };

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center">
        <div className="text-gray-600 text-xl">正在计算结果...</div>
      </div>
    );
  }

  const getStrengthText = (strength: string): string => {
    const map: Record<string, string> = {
      'weak': '微弱',
      'moderate': '中等',
      'strong': '明显',
      'very_strong': '强烈'
    };
    return map[strength] || strength;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
              {result.mbtiType}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {result.description.name}
            </h2>
            <p className="text-gray-600 text-lg">{result.description.tagline}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">维度分析</h3>
            <div className="space-y-4">
              {result.dimensionScores.map((score) => {
                const leftLetter = score.dimension[1];
                const rightLetter = score.dimension[0];
                const total = score.scoreA + score.scoreB;
                const progress = total > 0 ? (score.scoreA / total) * 100 : 50;

                return (
                  <div key={score.dimension} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-bold ${score.letter === leftLetter ? 'text-primary-600' : 'text-gray-500'}`}>
                        {leftLetter}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {score.dimension}
                      </span>
                      <span className={`font-bold ${score.letter === rightLetter ? 'text-accent-600' : 'text-gray-500'}`}>
                        {rightLetter}
                      </span>
                    </div>
                    <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-500">{score.scoreB}分</span>
                      <span className="text-sm text-gray-600 font-medium">
                        倾向 {score.letter} · {getTendencyStrength(score.scoreA, score.scoreB)}
                      </span>
                      <span className="text-xs text-gray-500">{score.scoreA}分</span>
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-xs text-gray-400">强度: {getStrengthText(score.strength)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">人格特点</h3>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-green-600 mb-3">✨ 优势</h4>
              <div className="flex flex-wrap gap-2">
                {result.description.strengths.map((strength, index) => (
                  <span
                    key={index}
                    className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-red-600 mb-3">⚠️ 待改进</h4>
              <div className="flex flex-wrap gap-2">
                {result.description.weaknesses.map((weakness, index) => (
                  <span
                    key={index}
                    className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {weakness}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💼 适合职业</h3>
            <div className="flex flex-wrap gap-2">
              {result.description.career.suitable.map((career, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🧠 认知功能</h3>
            <div className="space-y-3">
              {result.description.cognitiveFunctions.map((func, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4">
                  <div className="font-bold text-gray-800 mb-1">{func.name}</div>
                  <div className="text-gray-600 text-sm">{func.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💕 恋爱关系分析</h3>

            <div className="bg-pink-50 rounded-xl p-6 mb-4">
              <h4 className="font-bold text-pink-700 mb-2">恋爱风格</h4>
              <p className="text-gray-700">{result.description.relationship.loveStyle}</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 mb-4">
              <h4 className="font-bold text-purple-700 mb-2">理想伴侣</h4>
              <p className="text-gray-700">{result.description.relationship.idealPartner}</p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-6">
              <h4 className="font-bold text-indigo-700 mb-3">沟通特点</h4>
              <p className="text-gray-700">{result.description.relationship.communication}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💑 恋爱指南</h3>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-4">
              <h4 className="font-bold text-gray-800 mb-2">恋爱特点</h4>
              <p className="text-gray-700">{result.description.dating.overview}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-4">
              <h4 className="font-bold text-gray-800 mb-2">💕 最佳匹配</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {result.description.dating.compatibility.map((type, index) => (
                  <span
                    key={index}
                    className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6">
              <h4 className="font-bold text-orange-700 mb-3">💡 恋爱建议</h4>
              <ul className="space-y-2">
                {result.description.dating.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="mr-2">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🌱 个人成长</h3>

            <div className="bg-green-50 rounded-xl p-6 mb-4">
              <h4 className="font-bold text-green-700 mb-3">成长方向</h4>
              <ul className="space-y-2">
                {result.description.growth.growthAreas.map((area, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="mr-2">🌱</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <h4 className="font-bold text-yellow-700 mb-3">压力应对</h4>
              <ul className="space-y-2">
                {result.description.growth.stressResponse.map((response, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="mr-2">⚠️</span>
                    {response}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleShare}
              className="flex-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              🔗 分享结果
            </button>

            <button
              onClick={handleRetest}
              className="flex-1 bg-white text-gray-700 py-4 rounded-xl font-bold text-lg border-2 border-gray-300 hover:border-primary-500 hover:text-primary-600 transition-all duration-300"
            >
              🔄 重新测试
            </button>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>MBTI 人格测试 · 仅供娱乐参考</p>
          <p className="mt-1">⚠️ 温馨提示：MBTI 不是科学的心理测评工具，结果仅供参考</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
