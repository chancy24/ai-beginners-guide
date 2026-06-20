import { useState, useMemo, useCallback } from 'react';
import { terms, termCategories } from '../data/terms';
import SectionTitle from './SectionTitle';

const difficultyLevels = [
  { key: 'all', label: '全部难度' },
  { key: '入门', label: '入门' },
  { key: '进阶', label: '进阶' },
  { key: '专业', label: '专业' },
];

function difficultyBadge(difficulty) {
  if (difficulty === '入门') return 'badge badge-easy';
  if (difficulty === '进阶') return 'badge badge-medium';
  if (difficulty === '专业') return 'badge badge-hard';
  return 'badge';
}

function categoryLabel(catKey) {
  const found = termCategories.find((c) => c.id === catKey);
  return found ? `${found.icon} ${found.name}` : catKey;
}

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [difficulty, setDifficulty] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = useMemo(() => {
    let list = terms;
    if (category !== 'all') {
      list = list.filter((t) => t.category === category);
    }
    if (difficulty !== 'all') {
      list = list.filter((t) => t.difficulty === difficulty);
    }
    if (search.trim()) {
      const kw = search.trim().toLowerCase();
      list = list.filter(
        (t) =>
          t.cnName.toLowerCase().includes(kw) ||
          t.name.toLowerCase().includes(kw) ||
          t.simpleExplain.toLowerCase().includes(kw)
      );
    }
    return list;
  }, [search, category, difficulty]);

  const toggle = useCallback((id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section className="section-padding" id="glossary">
      {/* ---- 标题 ---- */}
      <SectionTitle
        icon="📖"
        title="AI 名词词典"
        subtitle="系统性查阅 AI 领域的核心名词，支持搜索、分类与难度筛选"
      />

      <div className="max-w-3xl mx-auto">
        {/* ---- 搜索框 ---- */}
        <div className="relative mb-6">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/35"
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="输入名词或关键词搜索..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-colors text-sm"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
              aria-label="清除搜索"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* ---- 筛选行 ---- */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          {/* 分类筛选 */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                category === 'all'
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-white/5 text-white/55 hover:bg-white/10 hover:text-white/85'
              }`}
            >
              全部类别
            </button>
            {termCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                  category === cat.id
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-white/5 text-white/55 hover:bg-white/10 hover:text-white/85'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* 难度筛选 */}
          <div className="flex gap-2">
            {difficultyLevels.map((lvl) => (
              <button
                key={lvl.key}
                onClick={() => setDifficulty(lvl.key)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                  difficulty === lvl.key
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-white/5 text-white/55 hover:bg-white/10 hover:text-white/85'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* ---- 结果数量 ---- */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-white/40 text-xs">
            共找到 <span className="text-white/70 font-semibold">{filtered.length}</span> 个名词
            {(category !== 'all' || difficulty !== 'all') && (
              <span>（已筛选）</span>
            )}
          </p>
          {(category !== 'all' || difficulty !== 'all' || search) && (
            <button
              onClick={() => {
                setCategory('all');
                setDifficulty('all');
                setSearch('');
              }}
              className="text-xs text-primary-light hover:text-primary transition-colors"
            >
              清除全部筛选
            </button>
          )}
        </div>

        {/* ---- 名词列表 ---- */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-5">📭</div>
            <p className="text-white/50 text-lg font-medium mb-2">未找到相关名词</p>
            <p className="text-white/25 text-sm">请尝试调整搜索条件或筛选选项</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((term) => {
              const isOpen = expandedId === term.id;
              return (
                <div
                  key={term.id}
                  className="glass-card rounded-xl border border-white/[0.06] overflow-hidden transition-all duration-200"
                >
                  {/* 摘要行 */}
                  <button
                    onClick={() => toggle(term.id)}
                    className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-white/[0.03] transition-colors cursor-pointer"
                  >
                    {/* 图标 */}
                    <span className="text-2xl flex-shrink-0">{term.icon || '📌'}</span>

                    {/* 核心信息 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-semibold text-sm">{term.cnName}</h3>
                        <span className="text-white/35 text-xs font-mono">{term.name}</span>
                      </div>
                      <p className="text-white/50 text-xs mt-1 line-clamp-1">{term.simpleExplain}</p>
                    </div>

                    {/* 标签区 */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="tag tag-accent text-[10px] px-2 py-0.5 rounded-full hidden sm:inline-block">
                        {categoryLabel(term.category)}
                      </span>
                      <span className={difficultyBadge(term.difficulty)}>{term.difficulty}</span>
                    </div>

                    {/* 展开箭头 */}
                    <svg
                      className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* 展开详情 */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-2 border-t border-white/[0.04] space-y-4">
                        {/* 类比 */}
                        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                          <h4 className="text-primary-light text-xs font-semibold mb-2">💡 生活类比</h4>
                          <p className="text-white/80 text-sm leading-relaxed">{term.analogy}</p>
                        </div>

                        {/* 应用场景 */}
                        <div>
                          <h4 className="text-white/60 text-xs font-semibold mb-2">🎯 应用场景</h4>
                          <ul className="space-y-1.5">
                            {term.useCases.map((uc, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-white/75">
                                <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                                <span>{uc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 常见误区 */}
                        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25">
                          <h4 className="text-amber-400 text-xs font-semibold mb-2">⚠️ 常见误区</h4>
                          <p className="text-white/80 text-sm leading-relaxed">{term.misconception}</p>
                        </div>

                        {/* 入门建议 */}
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
                          <h4 className="text-emerald-400 text-xs font-semibold mb-2">🌱 入门建议</h4>
                          <p className="text-white/80 text-sm leading-relaxed">{term.beginnerTip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
