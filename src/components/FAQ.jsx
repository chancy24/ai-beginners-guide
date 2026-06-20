import { useState, useMemo, useCallback } from 'react';
import { faqs, faqCategories } from '../data/faqs';
import SectionTitle from './SectionTitle';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const categories = useMemo(() => faqCategories, []);

  const filteredFaqs = useMemo(() => {
    let result = faqs;

    if (activeCategory !== 'all') {
      result = result.filter((f) => f.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const toggleFaq = useCallback(
    (id) => {
      setOpenId((prev) => (prev === id ? null : id));
    },
    []
  );

  return (
    <section className="section-padding" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="常见问题解答"
          subtitle="关于 AI 入门最常被问到的问题，这里都有答案"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`tag text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'btn-primary'
                  : 'glass-sm text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.icon && <span className="mr-1.5">{cat.icon}</span>}
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
              placeholder="搜索问题..."
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
        <div className="text-sm text-gray-400 mb-6 text-center">
          共 <span className="text-accent font-semibold">{filteredFaqs.length}</span> 个问题
          {activeCategory !== 'all' && (
            <span>
              {' '}在 <span className="text-white">{categories.find(c => c.id === activeCategory)?.name || activeCategory}</span> 分类下
            </span>
          )}
          {searchQuery && (
            <span>
              {' '}匹配 "<span className="text-white">{searchQuery}</span>"
            </span>
          )}
        </div>

        {/* FAQ Accordion */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'ring-1 ring-primary/40 shadow-lg shadow-primary/5'
                      : 'card-hover'
                  }`}
                >
                  {/* Question Row */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 flex items-start justify-between gap-4 text-left focus:outline-none"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span
                        className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          isOpen
                            ? 'bg-primary text-white rotate-45'
                            : 'bg-white/10 text-gray-400'
                        }`}
                      >
                        +
                      </span>
                      <span className="text-base sm:text-lg font-bold text-white leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    {faq.category && (
                      <span className="tag-accent text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 hidden sm:inline-block">
                        {faq.category}
                      </span>
                    )}
                  </button>

                  {/* Answer (collapsible) */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5 border-t border-white/5 pt-4">
                      <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                      {faq.category && (
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs text-gray-500">分类：</span>
                          <span className="tag text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400">
                            {faq.category}
                          </span>
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
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-white mb-2">未找到相关问题</h3>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              当前筛选条件下没有找到匹配的问题，请尝试调整搜索关键词或切换分类。
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
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

export default FAQ;
