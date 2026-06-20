import { useState, useCallback } from 'react';
import { vibeCodingIntro, vibeCodingFlow, vibeCodingMistakes, vibeCodingPrompts } from '../data/vibecoding';
import SectionTitle from './SectionTitle';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Silently fail
      }
      document.body.removeChild(textarea);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 transition-all duration-200 shrink-0"
    >
      <span>{copied ? '已复制!' : '📋 复制'}</span>
    </button>
  );
}

function PromptCard({ prompt }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card overflow-hidden">
      {/* Header - always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div>
          <h4 className="text-base md:text-lg font-semibold text-white mb-1">
            {prompt.title}
          </h4>
          <p className="text-sm text-white/50">{prompt.scenario}</p>
        </div>
        <span
          className={`text-white/40 text-sm transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>

      {/* Expandable content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 border-t border-white/5">
          {/* Full prompt in code box */}
          {prompt.content && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                  完整提示词
                </p>
                <CopyButton text={prompt.content} />
              </div>
              <div className="p-4 rounded-xl bg-surface/80 border border-white/10 font-mono text-xs md:text-sm text-white/75 leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto">
                {prompt.content}
              </div>
            </div>
          )}

          {/* Parameters list */}
          {prompt.parameters && prompt.parameters.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                参数说明
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-3 text-white/50 font-medium text-xs uppercase tracking-wider">
                        参数名
                      </th>
                      <th className="text-left py-2 pr-3 text-white/50 font-medium text-xs uppercase tracking-wider">
                        说明
                      </th>
                      <th className="text-left py-2 text-white/50 font-medium text-xs uppercase tracking-wider">
                        示例
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {prompt.parameters.map((param, i) => (
                      <tr
                        key={i}
                        className="border-b border-white/5 last:border-0"
                      >
                        <td className="py-2.5 pr-3">
                          <code className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-primary">
                            {param.name}
                          </code>
                        </td>
                        <td className="py-2.5 pr-3 text-white/60">{param.description}</td>
                        <td className="py-2.5 text-white/40 italic">{param.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VibeCoding() {
  return (
    <section id="vibe-coding" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle
          icon="💻"
          title="Vibe Coding 完全指南"
          subtitle="不会写代码也能用 AI 做网站、做应用、做工具——用自然语言告诉 AI 你要什么，它帮你写代码"
        />

        {/* ============================================ */}
        {/* Hero: whatIs + analogy                         */}
        {/* ============================================ */}
        <div className="glass-card p-6 md:p-8 mb-16 border-primary/20">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* What is Vibe Coding */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <span>什么是 Vibe Coding？</span>
              </h3>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                {vibeCodingIntro.whatIs}
              </p>
            </div>

            {/* Analogy */}
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>🍳</span>
                <span>一个类比帮你秒懂</span>
              </h3>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                {vibeCodingIntro.analogy}
              </p>
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* 适合做什么 — colorful tag grid                */}
        {/* ============================================ */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            适合做什么
          </h3>
          <p className="text-white/50 mb-6 text-sm md:text-base">
            Vibe Coding 特别适合以下场景，从简单到复杂都可以
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {vibeCodingIntro.suitableFor.map((item) => (
              <span
                key={item}
                className="tag tag-accent text-sm md:text-base px-4 py-2 rounded-xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ============================================ */}
        {/* 基本流程 — horizontal step cards              */}
        {/* ============================================ */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            基本流程
          </h3>
          <p className="text-white/50 mb-8 text-sm md:text-base">
            从想法到上线，8 步完成一个 Vibe Coding 项目
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {vibeCodingFlow.map((item) => (
              <div key={item.step} className="glass-card p-5 card-hover flex flex-col">
                {/* Step number */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm mb-3 shadow-lg shadow-primary/30">
                  {item.step}
                </div>

                {/* Title */}
                <h4 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-3 flex-1">
                  {item.description}
                </p>

                {/* Example */}
                {item.example && (
                  <div className="p-3 rounded-lg bg-surface/60 border border-white/5 text-xs text-white/50 leading-relaxed">
                    <span className="text-primary font-medium">示例：</span>
                    {item.example}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Connecting arrow indicator for desktop */}
          <div className="hidden lg:flex justify-center mt-6">
            <div className="flex items-center gap-1 text-white/20 text-sm">
              {vibeCodingFlow.map((item, i) => (
                <span key={item.step}>
                  {i > 0 && <span className="mx-1">→</span>}
                  <span className="text-white/40">{item.step}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* 常见错误 — mistake/consequence/fix cards      */}
        {/* ============================================ */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            常见错误
          </h3>
          <p className="text-white/50 mb-8 text-sm md:text-base">
            新手最容易踩的坑，提前知道少走弯路
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vibeCodingMistakes.map((item, index) => (
              <div key={index} className="glass-card p-5 card-hover flex flex-col gap-3">
                {/* Mistake — red */}
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
                    错误做法
                  </p>
                  <p className="text-sm text-red-300/90 leading-relaxed">{item.mistake}</p>
                </div>

                {/* Consequence — yellow */}
                <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <p className="text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-1">
                    后果
                  </p>
                  <p className="text-sm text-yellow-300/90 leading-relaxed">{item.consequence}</p>
                </div>

                {/* Fix — green */}
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex-1">
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                    正确做法
                  </p>
                  <p className="text-sm text-emerald-300/90 leading-relaxed">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================ */}
        {/* 提示词模板 — expandable cards                 */}
        {/* ============================================ */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            提示词模板
          </h3>
          <p className="text-white/50 mb-8 text-sm md:text-base">
            拿来即用的提示词模板，点击展开查看完整内容和参数说明
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {vibeCodingPrompts.map((prompt) => (
              <PromptCard key={prompt.title} prompt={prompt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
