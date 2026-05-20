import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { mbtiDescriptions, MBTIDescription } from '../data/mbtiDescriptions';
import { calculateMBTI, getDimensionScores, getTendencyStrength } from '../utils/mbtiCalculator';
import { storage } from '../utils/storage';

interface ResultData {
  mbtiType: string;
  description: MBTIDescription;
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
      const shareText = `我刚刚做了 MBTI 人格测试，结果是 ${result.mbtiType}（${result.description.name}）！你也来试试吧！`;
      console.log('分享内容:', shareText);
      alert('分享功能开发中...');
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
            <p className="text-gray-600 text-lg">{result.description.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">维度分析</h3>
            <div className="space-y-4">
              {result.dimensionScores.map((score) => {
                const leftLetter = score.dimension[1]; // I, N, F, P
                const rightLetter = score.dimension[0]; // E, S, T, J
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
              <h4 className="text-lg font-bold text-red-600 mb-3">⚠️ 劣势</h4>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-4">适合职业</h3>
            <div className="flex flex-wrap gap-2">
              {result.description.careers.map((career, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-purple-700 mb-3">💜 人际关系</h3>
            <p className="text-gray-700 leading-relaxed">{result.description.relationships}</p>
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
