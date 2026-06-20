import { useState, useMemo } from 'react';
import { platforms, platformFilters } from '../data/platforms';
import SectionTitle from './SectionTitle';

/* ---------- tiny helpers ---------- */
function diffBadge(d) {
  if (d === '入门') return 'badge badge-easy';
  if (d === '进阶') return 'badge badge-medium';
  if (d === '专业') return 'badge badge-hard';
  return 'badge';
}

function categoryBadge(label) {
  const colors = {
    '聊天助手': 'bg-purple-500/10 text-purple-400 border-purple-500/25',
    '开发框架': 'bg-orange-500/10 text-orange-400 border-orange-500/25',
    '低代码平台': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
    '编程工具': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
    '模型平台': 'bg-pink-500/10 text-pink-400 border-pink-500/25',
  };
  return `px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${colors[label] || 'bg-white/5 text-white/50 border-white/10'}`;
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#22C55E" strokeWidth="1.5" fill="#22C55E15" />
      <path d="M6 10l3 3 5-5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#F87171" strokeWidth="1.5" fill="#F8717115" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#F87171" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- component ---------- */
export default function PlatformComparison() {
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState({});

  const filtered = useMemo(() => {
    if (filter === 'all') return platforms;
    return platforms.filter((p) => p.category === filter);
  }, [filter]);

  const toggle = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  /* beginner-friendly platforms */
  const beginnerPlatforms = useMemo(
    () => platforms.filter((p) => p.beginnerFriendly),
    [],
  );

  /* count per filter */
  const filterCounts = useMemo(() => {
    const counts = {};
    platformFilters.forEach((f) => {
      counts[f.id] = platforms.filter((p) => p.category === f.id).length;
    });
    return counts;
  }, []);

  /* ---- comparison table dimensions ---- */
  const dimensions = [
    { key: 'difficulty', label: '上手难度' },
    { key: 'needsCoding', label: '需写代码' },
    { key: 'beginnerFriendly', label: '适合小白' },
    { key: 'enterpriseReady', label: '适合企业' },
  ];

  return (
    <section className="section-padding relative" id="platform-compare">
      {/* ---- title ---- */}
      <SectionTitle
        icon="🛠️"
        title="平台与工具对比"
        subtitle="从聊天助手到编程工具，帮你选对 AI 平台，少走弯路"
      />

      {/* ======== 小白推荐 spotlight ======== */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-2xl">🌱</span>
          <h3 className="text-xl font-bold text-white">小白推荐</h3>
          <span className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded-full">
            以下平台对初学者最友好
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {beginnerPlatforms.map((p) => (
            <div
              key={p.id}
              className="glass p-5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{p.icon}</span>
                <div>
                  <h4 className="font-bold text-white text-sm">{p.name}</h4>
                  <span className={categoryBadge(p.categoryLabel)}>{p.categoryLabel}</span>
                </div>
              </div>
              <p className="text-xs text-white/50 leading-relaxed mb-3 line-clamp-2">
                {p.description}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={diffBadge(p.difficulty)}>{p.difficulty}上手</span>
                {!p.needsCoding && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded-full">
                    <CheckIcon /> 无需代码
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- filter chips ---- */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
            filter === 'all'
              ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
              : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white/90'
          }`}
        >
          全部 ({platforms.length})
        </button>
        {platformFilters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
              filter === f.id
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white/90'
            }`}
          >
            <span>{f.icon}</span>
            <span>{f.name}</span>
            <span className="text-xs opacity-60">({filterCounts[f.id] || 0})</span>
          </button>
        ))}
      </div>

      {/* ---- empty state ---- */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-white/40">
          <span className="text-5xl block mb-4">🔍</span>
          <p className="text-lg">该类别下暂未收录平台，请尝试其他筛选条件</p>
        </div>
      )}

      {/* ======== platform cards grid ======== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {filtered.map((platform) => {
          const isOpen = !!expanded[platform.id];

          return (
            <article
              key={platform.id}
              className={`glass-card card-hover flex flex-col ${
                isOpen ? 'ring-1 ring-primary/40' : ''
              }`}
            >
              {/* ======== card header ======== */}
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl flex-shrink-0">{platform.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <h3 className="font-bold text-white text-base">{platform.name}</h3>
                    <span className={categoryBadge(platform.categoryLabel)}>
                      {platform.categoryLabel}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed line-clamp-3">
                    {platform.description}
                  </p>
                </div>
              </div>

              {/* ======== key badges row ======== */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {/* 面向人群 */}
                <span className="inline-flex items-center gap-1 text-[10px] text-white/50 bg-white/5 px-2 py-1 rounded-full">
                  👥 {platform.audience.length > 20 ? platform.audience.slice(0, 20) + '…' : platform.audience}
                </span>
                {/* 是否需要代码 */}
                <span
                  className={`inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full ${
                    platform.needsCoding
                      ? 'bg-orange-500/10 text-orange-400'
                      : 'bg-green-500/10 text-green-400'
                  }`}
                >
                  {platform.needsCoding ? (
                    <>
                      <XIcon /> 需要写代码
                    </>
                  ) : (
                    <>
                      <CheckIcon /> 无需代码
                    </>
                  )}
                </span>
                {/* 上手难度 */}
                <span className={diffBadge(platform.difficulty)}>{platform.difficulty}上手</span>
              </div>

              {/* ======== 适合做什么 ======== */}
              <div className="mb-2">
                <span className="text-[10px] text-white/30 uppercase tracking-wide">适合做什么</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {platform.suitableFor.slice(0, 3).map((s, i) => (
                    <span key={i} className="tag text-[10px]">
                      {s.length > 16 ? s.slice(0, 16) + '…' : s}
                    </span>
                  ))}
                  {platform.suitableFor.length > 3 && (
                    <span className="text-[10px] text-white/30">+{platform.suitableFor.length - 3}</span>
                  )}
                </div>
              </div>

              {/* ======== 不适合做什么 ======== */}
              <div className="mb-4">
                <span className="text-[10px] text-white/30 uppercase tracking-wide">不适合做什么</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {platform.unsuitableFor.slice(0, 2).map((s, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/8 text-red-300/70 border border-red-500/15"
                    >
                      {s.length > 16 ? s.slice(0, 16) + '…' : s}
                    </span>
                  ))}
                </div>
              </div>

              {/* ======== expand button ======== */}
              <button
                onClick={() => toggle(platform.id)}
                className="btn-outline text-xs py-1.5 px-4 self-start mt-auto"
              >
                {isOpen ? '收起详情 ▲' : '查看详情 ▼'}
              </button>

              {/* ======== expanded content ======== */}
              {isOpen && (
                <div className="mt-5 pt-5 border-t border-white/10 space-y-5 animate-[fadeIn_0.3s_ease]">
                  {/* ---- 优点 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-1.5">
                      ✅ 优点
                    </h4>
                    <ul className="space-y-1">
                      {platform.pros.map((p, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-white/60">
                          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* ---- 缺点 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center gap-1.5">
                      ⚠️ 缺点
                    </h4>
                    <ul className="space-y-1">
                      {platform.cons.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-white/60">
                          <span className="text-yellow-400 mt-0.5 flex-shrink-0">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* ---- 适用场景 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
                      <span className="text-accent">◆</span> 适用场景
                    </h4>
                    <ul className="space-y-1">
                      {platform.recommendedScenarios.map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-white/60">
                          <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* ---- 小白建议 (highlighted box) ---- */}
                  {platform.recommendationNote && (
                    <section className="glass-sm border border-primary/30 bg-primary/5 rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-primary-light mb-2 flex items-center gap-1.5">
                        <span>💡</span> 小白建议
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {platform.recommendationNote}
                      </p>
                    </section>
                  )}

                  {/* ---- 价格 ---- */}
                  {platform.pricing && (
                    <section>
                      <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-1.5">
                        <span className="text-accent">◆</span> 价格
                      </h4>
                      <p className="text-xs text-white/50">{platform.pricing}</p>
                    </section>
                  )}

                  {/* ---- 官网 ---- */}
                  {platform.website && (
                    <section>
                      <a
                        href={platform.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                      >
                        🔗 访问官网
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 15L15 5M6 5h9v9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </section>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* ======== comparison table ======== */}
      <div className="glass overflow-hidden mb-6">
        <div className="p-5 border-b border-white/10">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>📋</span> 全平台横向对比总览
          </h3>
          <p className="text-xs text-white/40 mt-1">按分类快速对比所有平台的关键属性</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 font-semibold text-white/80 sticky left-0 bg-[#0F0F1A]/95 backdrop-blur z-10 min-w-[110px]">
                  名称
                </th>
                <th className="text-center p-3 font-semibold text-white/80 whitespace-nowrap min-w-[80px]">
                  分类
                </th>
                {dimensions.map((d) => (
                  <th
                    key={d.key}
                    className="text-center p-3 font-semibold text-white/80 whitespace-nowrap min-w-[70px]"
                  >
                    {d.label}
                  </th>
                ))}
                <th className="text-center p-3 font-semibold text-white/80 whitespace-nowrap min-w-[80px]">
                  价格
                </th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="p-3 sticky left-0 bg-[#0F0F1A]/95 backdrop-blur z-10">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{p.icon}</span>
                      <span className="font-medium text-white text-xs">{p.name}</span>
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <span className={categoryBadge(p.categoryLabel)}>{p.categoryLabel}</span>
                  </td>
                  <td className="p-3 text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-[10px] ${
                        p.difficulty === '入门'
                          ? 'bg-green-500/10 text-green-400'
                          : p.difficulty === '进阶'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : 'bg-red-500/10 text-red-400'
                      }`}
                    >
                      {p.difficulty}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    {p.needsCoding ? (
                      <span className="text-orange-400 text-xs">需要</span>
                    ) : (
                      <span className="text-green-400 text-xs">不需要</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {p.beginnerFriendly ? (
                      <span className="text-green-400 text-xs">✅ 是</span>
                    ) : (
                      <span className="text-red-400/60 text-xs">❌ 否</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {p.enterpriseReady ? (
                      <span className="text-green-400 text-xs">✅ 是</span>
                    ) : (
                      <span className="text-red-400/60 text-xs">❌ 否</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    <span className="text-white/50 text-[10px]">
                      {p.pricing ? p.pricing.split('；')[0] : '—'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======== disclaimer ======== */}
      <div className="flex items-start gap-3 glass-sm border border-yellow-500/20 bg-yellow-500/5 rounded-xl p-4 max-w-3xl mx-auto">
        <span className="text-lg flex-shrink-0">⚠️</span>
        <div>
          <h4 className="text-sm font-semibold text-yellow-400 mb-1">重要提示</h4>
          <p className="text-xs text-white/50 leading-relaxed">
            工具和平台快速迭代，请以官方最新文档为准。本文档中的价格、功能和评价基于 2026
            年中期信息，实际使用前建议查阅各平台官方网站获取最新资讯。部分海外平台在中国大陆的使用可能受到网络环境限制。
          </p>
        </div>
      </div>

      {/* animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
