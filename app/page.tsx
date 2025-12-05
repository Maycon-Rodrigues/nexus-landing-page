"use client";

import React, { useEffect, useState } from 'react';
import { translations } from '../translations';
import { Brain, Mic, Image as ImageIcon, Zap, Check, ArrowRight, Globe, CornerDownRight } from 'lucide-react';
import { useGameStore } from '../stores/useGameStore';

const LandingPage: React.FC = () => {
  const { initialLanguage, setLanguage, setShowLanding } = useGameStore();
  
  const t = translations[initialLanguage].landing;

  useEffect(() => {
    // Auto-detect language
    const browserLang = navigator.language;
    if (browserLang.toLowerCase().startsWith('pt')) {
      setLanguage('pt-BR');
    }
  }, [setLanguage]);

  const toggleLang = () => {
    setLanguage(initialLanguage === 'en-US' ? 'pt-BR' : 'en-US');
  };

  const handleEnter = () => {
    setShowLanding(false);
  }

  return (
    <div className="h-screen w-full bg-black text-gray-100 font-sans overflow-y-auto overflow-x-hidden selection:bg-blue-500 selection:text-white custom-scrollbar">
      
      {/* VFX Overlays */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-purple-900/5"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_currentColor]"></div>
             <div className="text-xl font-bold font-serif tracking-tighter text-white">
               NEXUS ENGINE
             </div>
          </div>
          <button 
            onClick={toggleLang}
            className="group relative flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-sm uppercase tracking-widest hover:bg-white/5"
          >
            <Globe size={12} />
            {initialLanguage === 'en-US' ? 'PT-BR' : 'EN'}
            <div className="absolute top-0 right-0 w-1 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </nav>

      <header className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 overflow-hidden z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 animate-float-delayed"></div>

        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/10 text-blue-300 text-[10px] font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            System Online
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight tracking-tight text-shadow-lg">
            {t.heroTitle.split('. ')[0]}.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {t.heroTitle.split('. ')[1]}.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            {t.heroSubtitle}
          </p>
          
          <div className="pt-12 flex justify-center">
            <button 
              onClick={handleEnter}
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-blue-900/20 font-mono uppercase tracking-widest overflow-hidden"
            >
              <div className="absolute inset-0 border border-blue-500/50 group-hover:border-blue-400 transition-colors"></div>
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-blue-500"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-blue-500"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-500"></div>

              <span className="relative z-10 flex items-center gap-3">
                {t.ctaStart}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <section className="py-24 bg-black border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-blue-500 mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-blue-500/50"></span>
              {t.features.title}
              <span className="w-8 h-[1px] bg-blue-500/50"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Powered by Gemini 2.5 Flash</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: t.features.aiBrain, desc: t.features.aiBrainDesc, color: "text-blue-400", border: "group-hover:border-blue-500/50" },
              { icon: Mic, title: t.features.voice, desc: t.features.voiceDesc, color: "text-purple-400", border: "group-hover:border-purple-500/50" },
              { icon: ImageIcon, title: t.features.visuals, desc: t.features.visualsDesc, color: "text-pink-400", border: "group-hover:border-pink-500/50" },
              { icon: Zap, title: t.features.tension, desc: t.features.tensionDesc, color: "text-yellow-400", border: "group-hover:border-yellow-500/50" },
            ].map((f, i) => (
              <div key={i} className={`group relative p-8 bg-gray-900/20 border border-white/10 transition-all duration-500 hover:bg-gray-900/40 ${f.border}`}>
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <CornerDownRight size={16} className={f.color} />
                </div>
                <f.icon className={`w-12 h-12 mb-6 ${f.color} group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]`} />
                <h4 className="text-xl font-bold mb-3 font-serif">{f.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-5xl font-serif font-bold">{t.pricing.title}</h2>
             <p className="text-gray-400 font-light text-lg">{t.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PricingCard 
              title={t.pricing.free.title}
              price={t.pricing.free.price}
              features={t.pricing.free.features}
              cta={t.pricing.free.cta}
              onSelect={handleEnter}
              primary={true}
            />
            <PricingCard 
              title={t.pricing.subscription.title}
              price={t.pricing.subscription.price}
              features={t.pricing.subscription.features}
              cta={t.pricing.subscription.cta}
              badge={t.pricing.subscription.badge}
              highlight={true}
              onSelect={() => alert("Subscription gateway integration coming soon.")}
            />
             <PricingCard 
              title={t.pricing.dlc.title}
              price={t.pricing.dlc.price}
              features={t.pricing.dlc.features}
              cta={t.pricing.dlc.cta}
              onSelect={() => alert("Marketplace coming soon.")}
            />
            <PricingCard 
              title={t.pricing.arcade.title}
              price={t.pricing.arcade.price}
              features={t.pricing.arcade.features}
              cta={t.pricing.arcade.cta}
              onSelect={() => alert("Payment gateway coming soon.")}
            />
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 relative z-10 bg-black">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
        <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">{t.footer}</p>
      </footer>
    </div>
  );
};

const PricingCard = ({ 
  title, price, features, cta, badge, highlight, primary, onSelect 
}: { 
  title: string, price: string, features: string[], cta: string, badge?: string, highlight?: boolean, primary?: boolean, onSelect: () => void 
}) => (
  <div className={`relative flex flex-col p-8 transition-all duration-500 group ${
    highlight 
      ? 'bg-gray-900/60 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] scale-105 z-10' 
      : 'bg-black/40 border border-white/10 hover:border-white/20 hover:bg-gray-900/20'
  }`}>
    {/* Tech Corners */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/50 transition-colors"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/50 transition-colors"></div>

    {badge && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-900/80 border border-blue-500/30 text-blue-300 text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-lg backdrop-blur-md">
        {badge}
      </div>
    )}
    
    <div className="mb-8 text-center">
      <h3 className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest mb-4">{title}</h3>
      <div className="text-4xl font-serif font-bold text-white">{price}</div>
    </div>
    
    <ul className="flex-1 space-y-4 mb-10">
      {features.map((feat, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
          <Check size={14} className={`shrink-0 mt-0.5 ${highlight ? 'text-blue-400' : 'text-gray-600'}`} />
          <span className="font-light">{feat}</span>
        </li>
      ))}
    </ul>
    
    <button 
      onClick={onSelect}
      className={`w-full py-4 font-bold text-xs font-mono uppercase tracking-widest transition-all duration-300 relative overflow-hidden group/btn ${
        primary 
          ? 'bg-white text-black hover:bg-gray-200' 
          : highlight 
            ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
            : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
      }`}
    >
      <span className="relative z-10">{cta}</span>
      {highlight && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>}
    </button>
  </div>
);

export default LandingPage;
