import { useState, useCallback, useMemo } from 'react';
import { identities, goals, getRoute } from '../data/routes';
import SectionTitle from './SectionTitle';

const STEPS = {
  IDENTITY: 'identity',
  GOAL: 'goal',
  RESULT: 'result',
};

const LearningPathGenerator = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.IDENTITY);
  const [selectedIdentity, setSelectedIdentity] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [generatedRoute, setGeneratedRoute] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const handleSelectIdentity = useCallback((id) => {
    setSelectedIdentity(id);
  }, []);

  const handleSelectGoal = useCallback((id) => {
    setSelectedGoal(id);
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!selectedIdentity || !selectedGoal) return;

    setIsGenerating(true);
    // Simulate a short delay for smooth UX transition
    await new Promise((resolve) => setTimeout(resolve, 400));
    const route = getRoute(selectedIdentity, selectedGoal);
    setGeneratedRoute(route);
    setIsGenerating(false);
    setCurrentStep(STEPS.RESULT);
  }, [selectedIdentity, selectedGoal]);

  const handleReset = useCallback(() => {
    setCurrentStep(STEPS.IDENTITY);
    setSelectedIdentity(null);
    setSelectedGoal(null);
    setGeneratedRoute(null);
    setCopiedId(null);
  }, []);

  const handleCopy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(text);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(text);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }, []);

  const selectedIdentityObj = useMemo(
    () => identities.find((i) => i.id === selectedIdentity) || null,
    [selectedIdentity]
  );

  const selectedGoalObj = useMemo(
    () => goals.find((g) => g.id === selectedGoal) || null,
    [selectedGoal]
  );

  const canGenerate = selectedIdentity && selectedGoal;

  return (
    <section className="section-padding" id="learning-path">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="学习路线生成器"
          subtitle="告诉我们的你是谁、想学什么，一秒生成你的专属 AI 学习路线"
        />

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[
            { key: STEPS.IDENTITY, label: '我是...', num: 1 },
            { key: STEPS.GOAL, label: '我想...', num: 2 },
            { key: STEPS.RESULT, label: '生成路线', num: 3 },
          ].map((step, idx) => (
            <div key={step.key} className="flex items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep === step.key
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-110'
                    : currentStep === STEPS.RESULT ||
                      (currentStep === STEPS.GOAL && step.key === STEPS.IDENTITY) ||
                      (currentStep === STEPS.RESULT && step.key !== STEPS.RESULT)
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-white/10 text-gray-500'
                }`}
              >
                {currentStep === STEPS.RESULT ||
                (currentStep === STEPS.GOAL && step.key === STEPS.IDENTITY) ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  step.num
                )}
              </div>
              <span
                className={`ml-2 text-sm font-medium hidden sm:inline ${
                  currentStep === step.key ? 'text-white' : 'text-gray-500'
                }`}
              >
                {step.label}
              </span>
              {idx < 2 && (
                <div
                  className={`w-8 sm:w-12 h-0.5 mx-2 rounded transition-all duration-300 ${
                    currentStep === STEPS.RESULT ||
                    (currentStep === STEPS.GOAL && step.key === STEPS.IDENTITY)
                      ? 'bg-green-500/50'
                      : 'bg-white/10'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Identity Selection */}
        <div
          className={`transition-all duration-500 ${
            currentStep === STEPS.IDENTITY
              ? 'opacity-100 translate-y-0 max-h-[2000px]'
              : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden pointer-events-none'
          }`}
        >
          <h3 className="text-xl font-bold text-white text-center mb-6">
            第一步：我是...
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {identities.map((identity) => (
              <button
                key={identity.id}
                onClick={() => handleSelectIdentity(identity.id)}
                className={`glass-card rounded-2xl p-5 text-left transition-all duration-300 ${
                  selectedIdentity === identity.id
                    ? 'ring-2 ring-primary shadow-lg shadow-primary/20 bg-primary/5'
                    : 'card-hover'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{identity.icon}</span>
                  <div>
                    <span className="block text-base font-bold text-white">
                      {identity.name}
                    </span>
                    {identity.subtitle && (
                      <span className="text-xs text-gray-500">{identity.subtitle}</span>
                    )}
                  </div>
                </div>
                {identity.description && (
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {identity.description}
                  </p>
                )}
                {selectedIdentity === identity.id && (
                  <div className="mt-3 flex items-center gap-1.5 text-primary text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    已选择
                  </div>
                )}
              </button>
            ))}
          </div>
          {selectedIdentity && (
            <div className="text-center mt-6">
              <button
                onClick={() => setCurrentStep(STEPS.GOAL)}
                className="btn-primary px-8 py-3 rounded-xl text-base font-bold"
              >
                下一步：选择目标 →
              </button>
            </div>
          )}
        </div>

        {/* Step 2: Goal Selection */}
        <div
          className={`transition-all duration-500 ${
            currentStep === STEPS.GOAL
              ? 'opacity-100 translate-y-0 max-h-[2000px]'
              : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden pointer-events-none'
          }`}
        >
          <div className="text-center mb-6">
            <button
              onClick={() => setCurrentStep(STEPS.IDENTITY)}
              className="text-sm text-gray-400 hover:text-white transition-colors mb-4 inline-flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              返回修改身份
            </button>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">{selectedIdentityObj?.icon}</span>
              <span className="text-sm text-gray-400">
                当前身份：
                <span className="text-white font-medium ml-1">
                  {selectedIdentityObj?.name}
                </span>
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mt-4">
              第二步：我想...
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => handleSelectGoal(goal.id)}
                className={`glass-card rounded-2xl p-5 text-left transition-all duration-300 ${
                  selectedGoal === goal.id
                    ? 'ring-2 ring-primary shadow-lg shadow-primary/20 bg-primary/5'
                    : 'card-hover'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{goal.icon}</span>
                  <div>
                    <span className="block text-base font-bold text-white">
                      {goal.name}
                    </span>
                    {goal.subtitle && (
                      <span className="text-xs text-gray-500">{goal.subtitle}</span>
                    )}
                  </div>
                </div>
                {goal.description && (
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {goal.description}
                  </p>
                )}
                {selectedGoal === goal.id && (
                  <div className="mt-3 flex items-center gap-1.5 text-primary text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    已选择
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Generate Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleGenerate}
              disabled={!canGenerate || isGenerating}
              className={`px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 ${
                canGenerate
                  ? 'btn-primary hover:scale-105 active:scale-95 shadow-lg shadow-primary/30'
                  : 'bg-white/5 text-gray-600 cursor-not-allowed'
              }`}
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  正在生成...
                </span>
              ) : (
                '✨ 生成我的学习路线'
              )}
            </button>
            {!canGenerate && (
              <p className="text-sm text-gray-500 mt-2">
                请先完成上面两步选择
              </p>
            )}
          </div>
        </div>

        {/* Step 3: Result */}
        <div
          className={`transition-all duration-500 ${
            currentStep === STEPS.RESULT
              ? 'opacity-100 translate-y-0 max-h-[8000px]'
              : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden pointer-events-none'
          }`}
        >
          {generatedRoute && (
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {/* Route Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                  {generatedRoute.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  为{' '}
                  <span className="text-white font-medium">
                    {selectedIdentityObj?.name}
                  </span>{' '}
                  定制 · 目标：
                  <span className="text-white font-medium ml-1">
                    {selectedGoalObj?.name}
                  </span>
                </p>
              </div>

              {/* Learning Steps Timeline */}
              {generatedRoute.steps && generatedRoute.steps.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span>🗺️</span> 推荐学习顺序
                  </h4>
                  <div className="space-y-3">
                    {generatedRoute.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                            {idx + 1}
                          </div>
                          {idx < generatedRoute.steps.length - 1 && (
                            <div className="w-px flex-1 bg-primary/20 my-1" />
                          )}
                        </div>
                        <div className="pb-4 flex-1">
                          <h5 className="text-white font-bold text-sm mb-1">
                            {step.title}
                          </h5>
                          {step.description && (
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {step.description}
                            </p>
                          )}
                          {step.duration && (
                            <span className="tag text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-500 mt-1 inline-block">
                              ⏱ {step.duration}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Must-Know Terms */}
              {generatedRoute.mustKnow && generatedRoute.mustKnow.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span>📖</span> 必学 AI 名词
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {generatedRoute.mustKnow.map((term) => (
                      <span
                        key={term}
                        className="glass-sm px-3 py-1.5 rounded-lg text-sm text-gray-200"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Tools */}
              {generatedRoute.tools && generatedRoute.tools.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span>🛠️</span> 推荐工具类型
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {generatedRoute.tools.map((tool) => (
                      <span
                        key={tool}
                        className="tag-accent px-3 py-1.5 rounded-lg text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Agents */}
              {generatedRoute.agents && generatedRoute.agents.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span>🤖</span> 推荐 Agent 类型
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {generatedRoute.agents.map((agent) => (
                      <span
                        key={agent}
                        className="tag px-3 py-1.5 rounded-lg text-sm bg-white/5 text-gray-300"
                      >
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* First Task */}
              {generatedRoute.firstTask && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span>🎯</span> 第一个练习任务
                  </h4>
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {generatedRoute.firstTask}
                    </p>
                  </div>
                </div>
              )}

              {/* Copyable Prompt */}
              {generatedRoute.prompt && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span>📋</span> 可复制提示词
                  </h4>
                  <div className="relative">
                    <pre className="bg-[#0F0F1A] border border-white/10 rounded-xl p-4 text-sm text-gray-200 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                      {generatedRoute.prompt}
                    </pre>
                    <button
                      onClick={() => handleCopy(generatedRoute.prompt)}
                      className={`absolute top-3 right-3 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 active:scale-95 ${
                        copiedId === generatedRoute.prompt
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'btn-primary'
                      }`}
                    >
                      {copiedId === generatedRoute.prompt
                        ? '✅ 已复制!'
                        : '📋 复制提示词'}
                    </button>
                  </div>
                </div>
              )}

              {/* Warnings */}
              {generatedRoute.warnings && generatedRoute.warnings.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span>⚠️</span> 避坑提醒
                  </h4>
                  <div className="bg-red-500/5 border border-red-500/15 rounded-xl p-4">
                    <ul className="space-y-2">
                      {generatedRoute.warnings.map((warning, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-300 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-red-400 shrink-0 mt-0.5">⚠</span>
                          <span>{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Is Fallback Indicator */}
              {generatedRoute.isFallback && (
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-lg shrink-0">💡</span>
                    <div>
                      <span className="text-sm font-semibold text-yellow-400">
                        提示
                      </span>
                      <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                        当前身份和目标的组合尚未有专属路线，这里为你推荐了一条通用入门路线。我们会不断更新更多专属路线。
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Reset Button */}
              <div className="text-center mt-8 pt-6 border-t border-white/5">
                <button
                  onClick={handleReset}
                  className="btn-outline px-8 py-3 rounded-xl text-sm font-bold"
                >
                  🔄 重新选择
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LearningPathGenerator;
