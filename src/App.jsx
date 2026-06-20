import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsAI from './components/WhatIsAI';
import TermMap from './components/TermMap';
import Glossary from './components/Glossary';
import BeginnerSteps from './components/BeginnerSteps';
import UseCases from './components/UseCases';
import AgentComparison from './components/AgentComparison';
import PlatformComparison from './components/PlatformComparison';
import VibeCoding from './components/VibeCoding';
import PromptLibrary from './components/PromptLibrary';
import LearningPathGenerator from './components/LearningPathGenerator';
import RiskGuide from './components/RiskGuide';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handler = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-white">
      <Navbar />

      {/* Hero */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="relative z-10 w-full">
          <Hero />
        </div>
      </section>

      {/* What is AI */}
      <section id="what-is-ai" className="py-20 relative">
        <div className="section-padding">
          <WhatIsAI />
        </div>
      </section>

      {/* Term Map */}
      <section id="term-map" className="py-20 relative bg-surface-light/30">
        <div className="section-padding">
          <TermMap />
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" className="py-20 relative">
        <div className="section-padding">
          <Glossary />
        </div>
      </section>

      {/* Beginner Steps */}
      <section id="steps" className="py-20 relative bg-surface-light/30">
        <div className="section-padding">
          <BeginnerSteps />
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="py-20 relative">
        <div className="section-padding">
          <UseCases />
        </div>
      </section>

      {/* Agent Comparison */}
      <section id="agents" className="py-20 relative bg-surface-light/30">
        <div className="section-padding">
          <AgentComparison />
        </div>
      </section>

      {/* Platform Comparison */}
      <section id="platforms" className="py-20 relative">
        <div className="section-padding">
          <PlatformComparison />
        </div>
      </section>

      {/* Vibe Coding */}
      <section id="vibe-coding" className="py-20 relative bg-surface-light/30">
        <div className="section-padding">
          <VibeCoding />
        </div>
      </section>

      {/* Prompt Library */}
      <section id="prompts" className="py-20 relative">
        <div className="section-padding">
          <PromptLibrary />
        </div>
      </section>

      {/* Learning Path Generator */}
      <section id="learning-path" className="py-20 relative bg-surface-light/30">
        <div className="section-padding">
          <LearningPathGenerator />
        </div>
      </section>

      {/* Risk Guide */}
      <section id="risks" className="py-20 relative">
        <div className="section-padding">
          <RiskGuide />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 relative bg-surface-light/30">
        <div className="section-padding">
          <FAQ />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary/80 hover:bg-primary text-white shadow-lg shadow-primary/20 transition-all duration-300 ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
