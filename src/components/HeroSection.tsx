import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Music, Calendar, Sparkles, MapPin, ChevronDown, Mic, Disc } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = translations[lang].hero;

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-[#090a0f] z-0">
      {/* Required Spline 3D Embed Canvas Background (Absolute inside sticky container) */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-80 pointer-events-auto bg-[#090a0f]">
        <iframe
          src="https://my.spline.design/motiontrails-ctY4XGFXli9ZphuULM8xImuj/?v=refresh2026"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Glee Angels Spline Motion Trails"
          allow="autoplay; fullscreen"
          className="w-full h-full pointer-events-auto border-0"
        ></iframe>
      </div>

      {/* Dark Ambient Gradient Overlays for optimal typography readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/50 to-[#090a0f]/40 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-[#090a0f] pointer-events-none z-10" />

      {/* Content Container positioned cleanly inside 100vh */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-between h-full pt-20 pb-6 w-full pointer-events-none">
        {/* Top Badge */}
        <div className="pt-2 flex justify-center pointer-events-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/40 shadow-lg shadow-cyan-500/20 animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-300">
              {t.badge}
            </span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
          </div>
        </div>

        {/* Center flexible space so Spline 3D animated title is completely clear */}
        <div className="flex-1 pointer-events-none" />

        {/* Bottom Hero Controls & Information Overlay */}
        <div className="pointer-events-auto space-y-4 pb-2">
          {/* Slogan & Subtitle */}
          <p className="text-xs sm:text-base md:text-lg text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed px-2 drop-shadow-md">
            {t.subtitle}
          </p>

          {/* 1F / 2F Highlights Pill Bar */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs font-semibold">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/70 border border-cyan-500/50 text-cyan-300 backdrop-blur-md shadow-md shadow-cyan-500/20">
              <Mic className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'ko' ? '1F 라이브 밴드 라운지' : '1F Live Band Lounge'}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-pink-950/70 border border-pink-500/50 text-pink-300 backdrop-blur-md shadow-md shadow-pink-500/20">
              <Disc className="w-3.5 h-3.5 text-pink-400" />
              <span>{lang === 'ko' ? '2F 노래방 (패밀리 KTV)' : '2F Family KTV'}</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-950/70 border border-purple-500/50 text-purple-300 backdrop-blur-md shadow-md shadow-purple-500/20">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Angeles City, Philippines</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto pt-1">
            <button
              onClick={() => scrollToSection('performances')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl glass-panel glass-panel-hover text-zinc-200 hover:text-white font-bold text-sm border border-cyan-500/30 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Music className="w-4 h-4 text-cyan-400" />
              <span>{t.ctaSchedule}</span>
            </button>
          </div>

          {/* Stats Grid Overlay */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 w-full max-w-4xl mx-auto text-center pt-2">
            <div className="p-2.5 sm:p-3 rounded-xl glass-panel border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <p className="text-lg sm:text-xl font-black neon-text-blue font-mono">7 BANDS</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{t.statBands}</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl glass-panel border border-pink-500/20 hover:border-pink-500/50 transition-all">
              <p className="text-lg sm:text-xl font-black neon-text-pink font-mono">1F LOUNGE</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{t.statFloor1}</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl glass-panel border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <p className="text-lg sm:text-xl font-black neon-text-purple font-mono">2F KTV</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{t.statFloor2}</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl glass-panel border border-amber-500/20 hover:border-amber-500/50 transition-all">
              <p className="text-lg sm:text-xl font-black neon-text-gold font-mono">7PM - 3AM</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{t.statHours}</p>
            </div>
          </div>

          {/* Down Scroll Indicator */}
          <div className="flex justify-center pt-1">
            <button
              onClick={() => scrollToSection('about')}
              className="p-1.5 rounded-full glass-panel border border-zinc-700 text-zinc-400 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer animate-pulse"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
