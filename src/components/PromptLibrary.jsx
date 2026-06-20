import { useState, useMemo, useCallback } from 'react';
import { prompts, promptCategories } from '../data/prompts';
import SectionTitle from './SectionTitle';

const PromptLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = useCallback(async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // fallback for environments without clipboard API
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }, []);

  const filteredPrompts = useMemo(() => {
    let result = prompts;

    if (activeCategory !== '全部') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.scenario.toLowerCase().includes(q) ||
          (p.suitableTools && p.suitableTools.some((t) => t.toLowerCase().includes(q)))
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-padding" id="prompts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="提示词模板库"
          subtitle="精选高质量提示词模板，复制即用，帮你快速上手 AI 工具"
        />

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          <button
            onClick={() => setActiveCategory('全部')}
            className={`tag text-sm px-4 py-2 rounded-full transition-all duration-200 ${
              activeCategory === '全部'
                ? 'btn-primary'
                : 'glass-sm text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            📚 全部
          </button>
          {promptCategories.map((cat) => (
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

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索提示词模板..."
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-400 mb-4 text-center">
          共找到 <span className="text-accent font-semibold">{filteredPrompts.length}</span> 个提示词模板
          {activeCategory !== '全部' && (
            <span>
              {' '}在 <span className="text-white">{promptCategories.find((c) => c.id === activeCategory)?.name}</span> 分类下
            </span>
          )}
          {searchQuery && (
            <span>
              {' '}匹配 "<span className="text-white">{searchQuery}</span>"
            </span>
          )}
        </div>

        {/* Prompts Grid */}
        {filteredPrompts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPrompts.map((prompt) => {
              const isExpanded = expandedId === prompt.id;
              const isCopied = copiedId === prompt.id;

              return (
                <div
                  key={prompt.id}
                  className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'ring-2 ring-primary/50 shadow-xl shadow-primary/10' : 'card-hover'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(prompt.id)}
                    className="p-5 cursor-pointer select-none"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {prompt.title}
                      </h3>
                      <span className="tag-accent text-xs px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                        {prompt.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                      {prompt.scenario}
                    </p>
                    {prompt.suitableTools && prompt.suitableTools.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {prompt.suitableTools.map((tool) => (
                          <span key={tool} className="tag text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400">
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
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
                      {isExpanded ? '收起详情' : '展开查看完整提示词'}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-4">
                      {/* Full Prompt Content */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-300">
                            📝 完整提示词
                          </span>
                        </div>
                        <div className="relative">
                          <pre className="bg-[#0F0F1A] border border-white/10 rounded-xl p-4 text-sm text-gray-200 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                            {prompt.content}
                          </pre>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopy(prompt.id, prompt.content);
                            }}
                            className={`absolute top-3 right-3 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 active:scale-95 ${
                              isCopied
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'btn-primary'
                            }`}
                          >
                            {isCopied ? '✅ 已复制!' : '📋 复制提示词'}
                          </button>
                        </div>
                      </div>

                      {/* Parameters */}
                      {prompt.parameters && prompt.parameters.length > 0 && (
                        <div>
                          <span className="text-sm font-semibold text-gray-300 block mb-2">
                            ⚙️ 参数说明
                          </span>
                          <div className="space-y-2">
                            {prompt.parameters.map((param) => (
                              <div
                                key={param.name}
                                className="bg-white/5 rounded-lg p-3 border border-white/5"
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <code className="text-accent text-sm font-mono">
                                    {'{' + param.name + '}'}
                                  </code>
                                  <span className="text-xs text-gray-500">— {param.description}</span>
                                </div>
                                <p className="text-xs text-gray-500 pl-1 border-l-2 border-white/10 pl-2">
                                  示例：{param.example}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Reminder */}
                      {prompt.reminder && (
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                          <div className="flex items-start gap-2">
                            <span className="text-lg shrink-0">💡</span>
                            <div>
                              <span className="text-sm font-semibold text-primary">
                                使用提醒
                              </span>
                              <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                                {prompt.reminder}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">未找到匹配的提示词</h3>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              当前筛选条件下没有找到对应的提示词模板，请尝试调整搜索关键词或切换分类。
            </p>
            <button
              onClick={() => {
                setActiveCategory('全部');
                setSearchQuery('');
              }}
              className="btn-outline mt-4 px-6 py-2 rounded-xl"
            >
              重置筛选条件
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PromptLibrary;
