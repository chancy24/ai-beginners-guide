import { useState, useCallback } from 'react';
import { useCases, useCaseCategories } from '../data/usecases';
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
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 transition-all duration-200"
    >
      <span>{copied ? '已复制!' : '📋 复制'}</span>
    </button>
  );
}

function UseCaseCard({ useCase }) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="glass-card p-6 card-hover flex flex-col">
      {/* Title and description */}
      <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
      <p className="text-white/60 text-sm mb-4">{useCase.description}</p>

      {/* Suitable tools as tags */}
      {useCase.suitableTools && useCase.suitableTools.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {useCase.suitableTools.map((tool) => (
            <span key={tool} className="tag text-xs">
              {tool}
            </span>
          ))}
        </div>
      )}

      {/* Steps as numbered list */}
      {useCase.steps && useCase.steps.length > 0 && (
        <div className="mb-4 p-4 rounded-xl bg-surface/60 border border-white/5">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
            操作步骤
          </p>
          <ol className="space-y-1.5">
            {useCase.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/75">
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-medium mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Prompt with copy button */}
      {useCase.prompt && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">
              提示词模板
            </p>
            <CopyButton text={useCase.prompt} />
          </div>
          <div className="p-3 rounded-xl bg-surface/80 border border-white/10 font-mono text-xs text-white/75 leading-relaxed whitespace-pre-wrap max-h-40 overflow-y-auto">
            {useCase.prompt}
          </div>
        </div>
      )}

      {/* Check method in info box */}
      {useCase.checkMethod && (
        <div className="mb-4 p-3 rounded-xl bg-accent/10 border border-accent/20">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
            如何检查效果
          </p>
          <p className="text-sm text-white/70 leading-relaxed">{useCase.checkMethod}</p>
        </div>
      )}

      {/* Advanced pro tip - collapsible */}
      {useCase.advanced && (
        <div className="mt-auto">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-1.5 text-xs font-semibold text-primary/80 hover:text-primary transition-colors"
          >
            <span
              className={`inline-block transition-transform duration-200 ${
                showAdvanced ? 'rotate-90' : ''
              }`}
            >
              ▶
            </span>
            <span>进阶技巧</span>
          </button>
          {showAdvanced && (
            <div className="mt-2 p-3 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-sm text-white/70 leading-relaxed">{useCase.advanced}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function UseCases() {
  const [activeCategory, setActiveCategory] = useState(useCaseCategories[0]?.id || 'study');

  const currentCases = useCases[activeCategory] || [];

  return (
    <section id="usecases" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle
          icon="🎯"
          title="AI 应用场景"
          subtitle="按场景查看 AI 能帮你做什么，每个场景都有现成的提示词模板"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {useCaseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <span className="text-base">{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active category description */}
        {useCaseCategories.find((c) => c.id === activeCategory) && (
          <p className="text-center text-white/40 text-sm mb-8">
            {useCaseCategories.find((c) => c.id === activeCategory).description}
          </p>
        )}

        {/* Use case cards grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {currentCases.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}
