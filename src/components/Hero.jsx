import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, BookOpen, BarChart3, MessageSquare, Compass, Briefcase } from 'lucide-react';

const floatingOrbs = [
  { size: 320, color: 'rgba(108,92,231,0.3)', top: '10%', left: '5%', delay: 0 },
  { size: 260, color: 'rgba(0,210,255,0.2)', top: '60%', left: '80%', delay: 2 },
  { size: 200, color: 'rgba(167,139,250,0.25)', top: '30%', left: '55%', delay: 4 },
  { size: 180, color: 'rgba(108,92,231,0.2)', top: '75%', left: '20%', delay: 1 },
  { size: 140, color: 'rgba(0,210,255,0.15)', top: '15%', left: '75%', delay: 3 },
];

const featureCards = [
  { icon: BookOpen, title: '100+ AI 名词通俗解释', desc: '每个术语都有"人话版"翻译，零基础也能看懂' },
  { icon: BarChart3, title: '10 类主流 Agent 对比', desc: '从 AutoGPT 到 Manus，横评功能、价格、适用场景' },
  { icon: MessageSquare, title: '50+ 可复制提示词', desc: '覆盖写作、编程、分析、翻译等高频场景，拿来即用' },
  { icon: Compass, title: '7 步 AI 上手路线', desc: '从认识AI到用AI赚钱，清晰的学习阶梯路径图' },
  { icon: Briefcase, title: '学习/办公/编程/创业全覆盖', desc: '不管你是学生、上班族还是创业者，都能找到实用指南' },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-28 pb-16 px-4 overflow-hidden">
      {/* Animated grid background */}
      <div className="grid-bg absolute inset-0 z-0 opacity-40" />

      {/* Floating gradient orbs */}
      {floatingOrbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float pointer-events-none z-0"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            top: orb.top,
            left: orb.left,
            animationDelay: `${orb.delay}s`,
            filter: 'blur(60px)',
          }}
        />
      ))}

      {/* Decorative glow dots */}
      <div className="glow-dot absolute top-[20%] right-[15%] w-2 h-2 z-0" />
      <div className="glow-dot absolute top-[55%] left-[10%] w-1.5 h-1.5 z-0 animate-glow" />
      <div className="glow-dot absolute top-[40%] right-[30%] w-1 h-1 z-0" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Badge */}
        <div className={`glass badge badge-easy flex items-center gap-2 mb-8 px-4 py-2 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">2026 年最全 AI 小白入门指南</span>
        </div>

        {/* Main headline */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-balance ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          看懂 AI，<br className="sm:hidden" />
          <span className="gradient-text">从这一个网站开始</span>
        </h1>

        {/* Sub-headline */}
        <p className={`text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed text-balance ${mounted ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}>
          用小白能听懂的方式，讲清楚大模型、生成式 AI、Agent、RAG、多模态、MCP、工作流、Vibe Coding 和 AI 工具实操
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap items-center justify-center gap-4 mb-16 ${mounted ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
          <button
            onClick={() => scrollTo('learn')}
            className="btn-primary animate-glow flex items-center gap-2 px-8 py-4 text-base font-semibold"
          >
            <RocketIcon />
            开始学习 AI
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTo('agent-compare')}
            className="btn-outline flex items-center gap-2 px-8 py-4 text-base font-semibold"
          >
            <Sparkles className="w-5 h-5" />
            查看 Agent 对比
          </button>
          <button
            onClick={() => scrollTo('learning-path')}
            className="btn-outline flex items-center gap-2 px-8 py-4 text-base font-semibold"
          >
            <CompassIcon />
            生成我的学习路线
          </button>
        </div>

        {/* Feature Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full ${mounted ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
          {featureCards.map((card, i) => (
            <div
              key={i}
              className="glass-card card-hover flex flex-col items-center text-center p-6 gap-3 group cursor-default"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <card.icon className="w-7 h-7 text-primary-light" />
              </div>
              <h3 className="font-semibold text-white text-sm leading-snug">{card.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0F1A] to-transparent z-10 pointer-events-none" />
    </section>
  );
}

/** Tiny inline icon components to avoid extra imports — keeping the bundle lean */
function RocketIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4l.5-2.5a5 5 0 0 1 5-4.5" />
      <path d="M15 12h5l-.5 2.5a5 5 0 0 1-5 4.5" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}
