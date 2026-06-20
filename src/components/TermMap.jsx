import { useState, useMemo } from 'react';
import { terms, termCategories } from '../data/terms';
import SectionTitle from './SectionTitle';

function difficultyBadge(difficulty) {
  if (difficulty === '入门') return 'badge badge-easy';
  if (difficulty === '进阶') return 'badge badge-medium';
  if (difficulty === '专业') return 'badge badge-hard';
  return 'badge';
}

function categoryColor(category) {
  const map = {
    basics: 'bg-primary/20 text-primary-light',
    application: 'bg-accent/20 text-accent',
    agent: 'bg-purple-500/20 text-purple-400',
    platform: 'bg-emerald-500/20 text-emerald-400',
    safety: 'bg-amber-500/20 text-amber-400',
  };
  return map[category] || 'bg-white/10 text-white/70';
}

export default function TermMap() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    let list = terms;
    if (category !== 'all') {
      list = list.filter((t) => t.category === category);
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
  }, [search, category]);

  const openModal = (term) => setSelected(term);
  const closeModal = () => setSelected(null);

  return (
    <section className="section-padding relative" id="term-map">
      {/* ---- 标题 ---- */}
      <SectionTitle
        icon="🗺️"
        title="AI 热门名词地图"
        subtitle="按类别快速浏览 AI 领域最常听到的核心名词，点击任意名词查看详细解释"
      />

      {/* ---- 搜索框 ---- */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
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
            placeholder="搜索 AI 名词..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-colors text-sm"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* ---- 分类标签 ---- */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setCategory('all')}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
            category === 'all'
              ? 'bg-primary text-white shadow-lg shadow-primary/25'
              : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/90'
          }`}
        >
          📋 全部
        </button>
        {termCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              category === cat.id
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/90'
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* ---- 名词网格 ---- */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-white/50 text-lg mb-2">未找到相关名词</p>
          <p className="text-white/30 text-sm">尝试更换搜索词或切换分类标签</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-3">
          {filtered.map((term) => (
            <button
              key={term.id}
              onClick={() => openModal(term)}
              className="group glass-card rounded-xl px-5 py-3.5 flex items-center gap-3 card-hover transition-all duration-200 hover:scale-[1.03] cursor-pointer border border-white/[0.06] hover:border-primary/30"
            >
              <span className="text-lg">{term.icon || '📌'}</span>
              <span className="text-white font-medium text-sm">{term.cnName}</span>
              <span className={difficultyBadge(term.difficulty)}>{term.difficulty}</span>
            </button>
          ))}
        </div>
      )}

      <p className="text-center text-white/25 text-xs mt-8">
        共 {filtered.length} 个名词{category !== 'all' && `（已筛选：${termCategories.find((c) => c.id === category)?.name || category}）`}
      </p>

      {/* ---- 详情弹窗 ---- */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="glass-card rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-6 relative border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 头部 */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">{selected.icon || '📌'}</span>
              <div>
                <h3 className="text-xl font-bold text-white">{selected.cnName}</h3>
                <p className="text-white/50 text-sm font-mono">{selected.name}</p>
              </div>
            </div>

            {/* 标签行 */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className={`tag text-xs px-3 py-1 rounded-full ${categoryColor(selected.category)}`}>
                {termCategories.find((c) => c.id === selected.category)?.icon}{' '}
                {termCategories.find((c) => c.id === selected.category)?.name || selected.category}
              </span>
              <span className={difficultyBadge(selected.difficulty)}>{selected.difficulty}</span>
            </div>

            {/* 简单解释 */}
            <div className="mb-5">
              <h4 className="text-white/60 text-xs uppercase tracking-wider mb-2">📖 简单解释</h4>
              <p className="text-white/85 text-sm leading-relaxed">{selected.simpleExplain}</p>
            </div>

            {/* 类比 */}
            <div className="mb-5 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <h4 className="text-primary-light text-xs uppercase tracking-wider mb-2">💡 生活类比</h4>
              <p className="text-white/85 text-sm leading-relaxed">{selected.analogy}</p>
            </div>

            {/* 应用场景 */}
            <div className="mb-5">
              <h4 className="text-white/60 text-xs uppercase tracking-wider mb-2">🎯 应用场景</h4>
              <div className="flex flex-wrap gap-2">
                {selected.useCases.map((uc, i) => (
                  <span key={i} className="tag-accent text-xs px-2.5 py-1 rounded-full bg-accent/15 text-accent">
                    {uc}
                  </span>
                ))}
              </div>
            </div>

            {/* 常见误区 */}
            <div className="mb-5 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25">
              <h4 className="text-amber-400 text-xs uppercase tracking-wider mb-2">⚠️ 常见误区</h4>
              <p className="text-white/80 text-sm leading-relaxed">{selected.misconception}</p>
            </div>

            {/* 入门建议 */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
              <h4 className="text-emerald-400 text-xs uppercase tracking-wider mb-2">🌱 入门建议</h4>
              <p className="text-white/80 text-sm leading-relaxed">{selected.beginnerTip}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
