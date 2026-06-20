import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: '首页' },
  { id: 'what-is-ai', label: 'AI 是什么' },
  { id: 'term-map', label: '名词地图' },
  { id: 'glossary', label: '名词词典' },
  { id: 'steps', label: '7步上手' },
  { id: 'usecases', label: '应用场景' },
  { id: 'agents', label: 'Agent 对比' },
  { id: 'platforms', label: '工具对比' },
  { id: 'vibe-coding', label: 'Vibe Coding' },
  { id: 'prompts', label: '提示词库' },
  { id: 'learning-path', label: '学习路线' },
  { id: 'risks', label: '避坑指南' },
  { id: 'faq', label: 'FAQ' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-surface/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 text-lg font-bold hover:opacity-80 transition-opacity">
            <span className="text-2xl">🤖</span>
            <span className="gradient-text hidden sm:inline">AI 小白通关手册</span>
            <span className="gradient-text sm:hidden">AI通关手册</span>
          </button>

          <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="px-3 py-1.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all whitespace-nowrap">
                {item.label}
              </button>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-white/80 hover:text-white">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-surface/95 backdrop-blur-xl border-t border-white/10 max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-3 grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all text-left">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
