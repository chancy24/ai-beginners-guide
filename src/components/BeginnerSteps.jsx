import { useState, useCallback } from 'react';
import { steps } from '../data/steps';
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
      className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 transition-all duration-200"
    >
      <span>{copied ? '已复制!' : '📋 复制'}</span>
    </button>
  );
}

function StepCard({ step, isLeft }) {
  return (
    <div className="relative flex items-start mb-16 md:mb-20 last:mb-0">
      {/* Step number circle - centered on desktop, left-aligned on mobile */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/40 ring-4 ring-surface">
          {step.number}
        </div>
      </div>

      {/* Content card */}
      <div
        className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
          isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
        }`}
      >
        <div className="glass-card p-6 md:p-8 card-hover">
          {/* Header */}
          <div className="mb-5">
            <span className="tag tag-accent text-xs mb-2 inline-block">
              第 {step.number} 步
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              {step.title}
            </h3>
            <p className="text-white/60 text-sm md:text-base">{step.subtitle}</p>
          </div>

          {/* Explanation paragraphs */}
          <div className="space-y-3 mb-6">
            {step.explanation.map((paragraph, i) => (
              <p key={i} className="text-white/70 text-sm md:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Example box */}
          {step.example && (
            <div className="mb-5 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {step.example.title}
              </p>
              <p className="text-white/75 text-sm leading-relaxed">
                {step.example.text}
              </p>
            </div>
          )}

          {/* Copyable prompt */}
          {step.copyablePrompt && (
            <div className="relative mb-5 p-4 pr-24 rounded-xl bg-surface/80 border border-white/10 font-mono text-xs md:text-sm text-white/80 leading-relaxed whitespace-pre-wrap">
              {step.copyablePrompt}
              <CopyButton text={step.copyablePrompt} />
            </div>
          )}

          {/* Common mistakes */}
          {step.commonMistakes && step.commonMistakes.length > 0 && (
            <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
                常见错误
              </p>
              <ul className="space-y-1.5">
                {step.commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-300/90">
                    <span className="shrink-0 mt-0.5">❌</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Improvement tips */}
          {step.improvementTips && step.improvementTips.length > 0 && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                改进建议
              </p>
              <ul className="space-y-1.5">
                {step.improvementTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-emerald-300/90">
                    <span className="shrink-0 mt-0.5">✅</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BeginnerSteps() {
  return (
    <section id="steps" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle
          icon="🗺️"
          title="7 步上手 AI"
          subtitle="从零基础到能独立使用 AI 完成日常任务，每天只需 30 分钟"
        />

        {/* Timeline container */}
        <div className="relative">
          {/* Single continuous timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-14 w-0.5 -translate-x-1/2 step-line" />

          {/* Step cards */}
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              isLeft={index % 2 === 0}
            />
          ))}

          {/* End marker */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl shadow-lg shadow-primary/40 ring-4 ring-surface">
              🎉
            </div>
          </div>
        </div>
      </div>

      {/* Step-line gradient */}
      <style>{`
        .step-line {
          background: linear-gradient(
            to bottom,
            #6C5CE7,
            #00D2FF 25%,
            #6C5CE7 50%,
            #00D2FF 75%,
            #6C5CE7
          );
        }
      `}</style>
    </section>
  );
}
