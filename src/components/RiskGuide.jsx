import { useState, useMemo, useCallback } from 'react';
import { risks, riskCategories } from '../data/risks';
import SectionTitle from './SectionTitle';

const severityConfig = {
  high: {
    label: '🔴 高风险',
    borderClass: 'border-l-red-500',
    badgeClass: 'bg-red-500/15 text-red-400 border border-red-500/30',
    dot: '🔴',
  },
  medium: {
    label: '🟡 中风险',
    borderClass: 'border-l-yellow-500',
    badgeClass: 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30',
    dot: '🟡',
  },
  low: {
    label: '🟢 低风险',
    borderClass: 'border-l-green-500',
    badgeClass: 'bg-green-500/15 text-green-400 border border-green-500/30',
    dot: '🟢',
  },
};

const RiskGuide = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = useCallback((id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  const filteredRisks = useMemo(() => {
    if (activeCategory === 'all') return risks;
    return risks.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  const severityOrder = { high: 0, medium: 1, low: 2 };
  const sortedRisks = useMemo(() => {
    return [...filteredRisks].sort(
      (a, b) => severityOrder[a.severity] - severityOrder[b.severity]
    );
  }, [filteredRisks]);

  return (
    <section className="section-padding" id="risks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="AI 风险避坑指南"
          subtitle="了解 AI 使用中的常见陷阱与风险，学会安全、正确地使用 AI 工具"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`tag text-sm px-4 py-2 rounded-full transition-all duration-200 ${
              activeCategory === 'all'
                ? 'btn-primary'
                : 'glass-sm text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            ⚠️ 全部风险
          </button>
          {riskCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`tag text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'btn-primary'
                  : 'glass-sm text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-400 mb-6 text-center">
          共 <span className="text-accent font-semibold">{sortedRisks.length}</span> 条风险提示
          {activeCategory !== '全部' && (
            <span>
              {' '}在 <span className="text-white">{riskCategories.find((c) => c.id === activeCategory)?.name}</span> 分类下
            </span>
          )}
        </div>

        {/* Risk Cards Grid */}
        {sortedRisks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sortedRisks.map((risk) => {
              const isExpanded = expandedId === risk.id;
              const severity = severityConfig[risk.severity] || severityConfig.medium;

              return (
                <div
                  key={risk.id}
                  className={`glass-card rounded-2xl border-l-4 ${severity.borderClass} overflow-hidden transition-all duration-300 ${
                    isExpanded
                      ? 'shadow-xl'
                      : 'card-hover'
                  }`}
                >
                  {/* Card Body */}
                  <div
                    onClick={() => toggleExpand(risk.id)}
                    className="p-5 cursor-pointer select-none"
                  >
                    {/* Top: Title + Severity Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-2 min-w-0">
                        <span className="text-xl shrink-0">{severity.dot}</span>
                        <h3 className="text-lg font-bold text-white leading-snug">
                          {risk.title}
                        </h3>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 font-medium ${severity.badgeClass}`}>
                        {severity.label}
                      </span>
                    </div>

                    {/* Risk Description */}
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                      {risk.risk}
                    </p>

                    {/* Example Box */}
                    {risk.example && (
                      <div className="bg-red-500/5 border border-red-500/15 rounded-xl p-3 mb-3">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-sm">⚠️</span>
                          <span className="text-xs font-semibold text-red-400">
                            真实案例
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {risk.example}
                        </p>
                      </div>
                    )}

                    {/* Solution Box */}
                    {risk.solution && (
                      <div className="bg-green-500/5 border border-green-500/15 rounded-xl p-3 mb-3">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-sm">✅</span>
                          <span className="text-xs font-semibold text-green-400">
                            正确做法
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {risk.solution}
                        </p>
                      </div>
                    )}

                    {/* Expand Toggle */}
                    <div className="mt-3 flex items-center text-xs text-gray-500">
                      <svg
                        className={`w-4 h-4 mr-1 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      {isExpanded ? '收起详情' : '查看完整说明'}
                    </div>
                  </div>

                  {/* Expanded Detail Section */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {risk.details && (
                      <div className="px-5 pb-5 border-t border-white/5 pt-4">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                          <span className="text-sm font-semibold text-gray-300 block mb-2">
                            📖 详细说明
                          </span>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {risk.details}
                          </p>
                        </div>
                      </div>
                    )}

                    {risk.preventionTips && risk.preventionTips.length > 0 && (
                      <div className="px-5 pb-5 border-t border-white/5 pt-4">
                        <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                          <span className="text-sm font-semibold text-primary block mb-2">
                            🛡️ 预防措施
                          </span>
                          <ul className="space-y-1.5">
                            {risk.preventionTips.map((tip, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-300 flex items-start gap-2"
                              >
                                <span className="text-primary shrink-0 mt-0.5">
                                  {idx + 1}.
                                </span>
                                <span className="leading-relaxed">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">该分类下暂无风险记录</h3>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              当前筛选条件下没有找到对应的风险提示，请尝试切换其他分类查看。
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="btn-outline mt-4 px-6 py-2 rounded-xl"
            >
              查看全部风险
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RiskGuide;
