import { useState, useMemo } from 'react';
import { agentTypes, agentFilters } from '../data/agents';
import SectionTitle from './SectionTitle';

/* ---------- tiny helpers ---------- */
function diffBadge(d) {
  if (d === '入门') return 'badge badge-easy';
  if (d === '进阶') return 'badge badge-medium';
  if (d === '专业') return 'badge badge-hard';
  return 'badge';
}

function starRow(n) {
  return (
    <span className="inline-flex gap-0.5" title={`推荐指数 ${n}/5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i <= n ? '#FBBF24' : 'none'}
          stroke={i <= n ? '#FBBF24' : '#4B5563'}
          strokeWidth="1.5"
        >
          <path d="M10 1l2.39 4.84L18 6.91l-4 3.9.94 5.49L10 13.4l-4.94 2.9L6 10.81l-4-3.9 5.61-.87L10 1z" />
        </svg>
      ))}
    </span>
  );
}

function execBar(level) {
  const map = { 低: 1, 中: 2, 高: 3, 极高: 4 };
  const n = map[level] || 1;
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`h-2 w-8 rounded-full transition-colors ${
            i <= n ? 'bg-gradient-to-r from-primary to-accent' : 'bg-white/10'
          }`}
        />
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#22C55E" strokeWidth="1.5" fill="#22C55E15" />
      <path d="M6 10l3 3 5-5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#F87171" strokeWidth="1.5" fill="#F8717115" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#F87171" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- component ---------- */
export default function AgentComparison() {
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState({});

  const filtered = useMemo(() => {
    if (filter === 'all') return agentTypes;
    return agentTypes.filter((a) => a.tags.includes(filter));
  }, [filter]);

  const toggle = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));
  const [copied, setCopied] = useState(null);

  const copyPrompt = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* fallback silently */
    }
  };

  /* count agents per filter */
  const filterCounts = useMemo(() => {
    const counts = {};
    agentFilters.forEach((f) => {
      counts[f.id] = agentTypes.filter((a) => a.tags.includes(f.id)).length;
    });
    return counts;
  }, []);

  /* ---------- comparison table dimensions ---------- */
  const dimensions = [
    { key: 'difficulty', label: '入门难度' },
    { key: 'executionAbility', label: '执行能力' },
    { key: 'needsToolCall', label: '需要工具' },
    { key: 'needsKnowledgeBase', label: '需要知识库' },
    { key: 'beginnerFriendly', label: '适合小白' },
    { key: 'enterpriseReady', label: '适合企业' },
    { key: 'recommendation', label: '推荐指数' },
  ];

  return (
    <section className="section-padding relative" id="agent-compare">
      {/* ---- title ---- */}
      <SectionTitle
        icon="🤖"
        title="Agent 类型对比"
        subtitle="10 种主流 AI Agent 一网打尽 —— 从聊天机器人到多智能体系统，帮你找到最适合自己的 AI 搭档"
      />

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
          全部 ({agentTypes.length})
        </button>
        {agentFilters.map((f) => (
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
          <p className="text-lg">该类别下暂未收录 Agent，请尝试其他筛选条件</p>
        </div>
      )}

      {/* ---- agent cards grid ---- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {filtered.map((agent) => {
          const isOpen = !!expanded[agent.id];

          return (
            <article
              key={agent.id}
              className={`glass-card card-hover flex flex-col ${
                isOpen ? 'ring-1 ring-primary/40' : ''
              }`}
            >
              {/* ======== card header ======== */}
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl flex-shrink-0">{agent.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-white text-base">{agent.name}</h3>
                    <span className={diffBadge(agent.difficulty)}>{agent.difficulty}</span>
                    {agent.beginnerFriendly && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded-full">
                        🌱 小白友好
                      </span>
                    )}
                  </div>
                  {starRow(agent.recommendation)}
                </div>
              </div>

              {/* ======== preview ======== */}
              <p className="text-sm text-white/50 leading-relaxed mb-3 line-clamp-3">
                {agent.description}
              </p>

              {/* typicalTasks tags */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                {agent.typicalTasks.slice(0, 4).map((t, i) => (
                  <span key={i} className="tag text-[10px]">
                    {t.length > 14 ? t.slice(0, 14) + '…' : t}
                  </span>
                ))}
                {agent.typicalTasks.length > 4 && (
                  <span className="text-[10px] text-white/30">+{agent.typicalTasks.length - 4}</span>
                )}
              </div>

              {/* suitableFor tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {agent.suitableFor.map((s, i) => (
                  <span key={i} className="tag-accent text-[10px]">
                    {s}
                  </span>
                ))}
              </div>

              {/* ======== expand button ======== */}
              <button
                onClick={() => toggle(agent.id)}
                className="btn-outline text-xs py-1.5 px-4 self-start mt-auto"
              >
                {isOpen ? '收起详情 ▲' : '查看详情 ▼'}
              </button>

              {/* ======== expanded content ======== */}
              {isOpen && (
                <div className="mt-5 pt-5 border-t border-white/10 space-y-5 animate-[fadeIn_0.3s_ease]">
                  {/* ---- 是什么 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
                      <span className="text-accent">◆</span> 是什么
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed">{agent.description}</p>
                  </section>

                  {/* ---- 典型任务 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
                      <span className="text-accent">◆</span> 典型任务
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-white/60">
                      {agent.typicalTasks.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ol>
                  </section>

                  {/* ---- 适合人群 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
                      <span className="text-accent">◆</span> 适合人群
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {agent.suitableFor.map((s, i) => (
                        <span key={i} className="tag-accent text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* ---- 执行能力 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
                      <span className="text-accent">◆</span> 执行能力
                    </h4>
                    <div className="flex items-center gap-3">
                      {execBar(agent.executionAbility)}
                      <span className="text-xs text-white/40">{agent.executionAbility}</span>
                    </div>
                  </section>

                  {/* ---- 能力特征 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
                      <span className="text-accent">◆</span> 能力特征
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1.5 glass-sm">
                        {agent.needsToolCall ? <CheckIcon /> : <CrossIcon />}
                        <span className="text-white/60">
                          {agent.needsToolCall ? '需要工具调用' : '无需工具调用'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 glass-sm">
                        {agent.needsKnowledgeBase ? <CheckIcon /> : <CrossIcon />}
                        <span className="text-white/60">
                          {agent.needsKnowledgeBase ? '需要知识库' : '无需知识库'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 glass-sm">
                        {agent.beginnerFriendly ? <CheckIcon /> : <CrossIcon />}
                        <span className="text-white/60">
                          {agent.beginnerFriendly ? '适合小白' : '不适合小白'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 glass-sm">
                        {agent.enterpriseReady ? <CheckIcon /> : <CrossIcon />}
                        <span className="text-white/60">
                          {agent.enterpriseReady ? '适合企业' : '不适合企业'}
                        </span>
                      </div>
                    </div>
                  </section>

                  {/* ---- 优点 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-1.5">
                      ✅ 优点
                    </h4>
                    <ul className="space-y-1">
                      {agent.pros.map((p, i) => (
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
                      {agent.cons.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-white/60">
                          <span className="text-yellow-400 mt-0.5 flex-shrink-0">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* ---- 风险点 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-1.5">
                      🔴 风险点
                    </h4>
                    <ul className="space-y-1">
                      {agent.risks.map((r, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-white/60">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">!</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* ---- 代表产品 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
                      <span className="text-accent">◆</span> 代表产品
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.representatives.map((r, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs bg-primary/15 text-primary-light border border-primary/25"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* ---- 示例操作流程 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
                      <span className="text-accent">◆</span> 示例操作流程
                    </h4>
                    <ol className="space-y-2">
                      {agent.exampleFlow.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary-light text-[10px] flex items-center justify-center font-bold">
                            {i + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </section>

                  {/* ---- 示例提示词 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
                      <span className="text-accent">◆</span> 示例提示词
                    </h4>
                    <div className="relative">
                      <pre className="glass-sm text-xs text-white/70 whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-48 overflow-y-auto">
                        {agent.examplePrompt}
                      </pre>
                      <button
                        onClick={() => copyPrompt(agent.id, agent.examplePrompt)}
                        className="absolute top-2 right-2 px-2.5 py-1 rounded-md text-[10px] bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-colors"
                      >
                        {copied === agent.id ? '已复制 ✓' : '复制'}
                      </button>
                    </div>
                  </section>

                  {/* ---- 推荐指数 ---- */}
                  <section>
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
                      <span className="text-accent">◆</span> 推荐指数
                    </h4>
                    <div className="flex items-center gap-2">
                      {starRow(agent.recommendation)}
                      <span className="text-xs text-white/40">
                        {agent.recommendation} / 5 星
                      </span>
                    </div>
                  </section>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* ======== summary comparison table ======== */}
      <div className="glass overflow-hidden mb-6">
        <div className="p-5 border-b border-white/10">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>📋</span> 10 种 Agent 类型横向对比总览
          </h3>
          <p className="text-xs text-white/40 mt-1">一表看清所有 Agent 在 7 个关键维度上的差异</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 font-semibold text-white/80 sticky left-0 bg-[#0F0F1A]/95 backdrop-blur z-10 min-w-[120px]">
                  名称
                </th>
                {dimensions.map((d) => (
                  <th key={d.key} className="text-center p-3 font-semibold text-white/80 whitespace-nowrap min-w-[80px]">
                    {d.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {agentTypes.map((agent) => (
                <tr
                  key={agent.id}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="p-3 sticky left-0 bg-[#0F0F1A]/95 backdrop-blur z-10">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{agent.icon}</span>
                      <span className="font-medium text-white">{agent.name}</span>
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-[10px] ${
                        agent.difficulty === '入门'
                          ? 'bg-green-500/10 text-green-400'
                          : agent.difficulty === '进阶'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : 'bg-red-500/10 text-red-400'
                      }`}
                    >
                      {agent.difficulty}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex justify-center">{execBar(agent.executionAbility)}</div>
                  </td>
                  <td className="p-3 text-center">
                    {agent.needsToolCall ? (
                      <span className="text-green-400"><CheckIcon /></span>
                    ) : (
                      <span className="text-red-400/60"><CrossIcon /></span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {agent.needsKnowledgeBase ? (
                      <span className="text-green-400"><CheckIcon /></span>
                    ) : (
                      <span className="text-red-400/60"><CrossIcon /></span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {agent.beginnerFriendly ? (
                      <span className="text-green-400 text-xs">✅ 是</span>
                    ) : (
                      <span className="text-red-400/60 text-xs">❌ 否</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {agent.enterpriseReady ? (
                      <span className="text-green-400 text-xs">✅ 是</span>
                    ) : (
                      <span className="text-red-400/60 text-xs">❌ 否</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex justify-center">{starRow(agent.recommendation)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* small inline animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
