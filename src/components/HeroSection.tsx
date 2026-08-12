import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Music, Calendar, Sparkles, MapPin, ChevronDown, Mic, Disc } from 'lucide-react';
import gleeAngelsStageMobileImg from '../assets/images/glee_angels_stage_mobile_1786532891279.jpg';

interface HeroSectionProps {
  lang: Language;
  
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = translations[lang].hero;

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      const topOffset = elem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: Math.max(0, topOffset),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#090a0f] z-0">
      {/* Background Stage Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={gleeAngelsStageMobileImg}
          alt="Glee Angels Stage"
          className="w-full h-full object-cover object-center opacity-45 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/75 to-[#090a0f]/60" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Lightweight Gradient Overlays for readability without blocking the 3D visual */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#090a0f] via-[#090a0f]/60 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/75 to-transparent pointer-events-none z-10" />

      {/* Content Container positioned cleanly inside 100vh */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-between min-h-screen pt-24 pb-8 w-full pointer-events-none">
        {/* Top Header Block: Badge, Title & Subtitle */}
        <div className="pt-2 flex flex-col items-center pointer-events-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wide text-cyan-300">
              {t.badge}
            </span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-pink-400 to-purple-400 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] font-mono">
            GLEE ANGELS
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-zinc-200 max-w-2xl mx-auto font-medium leading-relaxed px-5 py-2.5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 shadow-xl">
            {t.subtitle}
          </p>
        </div>

        {/* Center flexible space allowing Spline 3D canvas visual to shine through */}
        <div className="flex-1 pointer-events-none min-h-[100px]" />

        {/* Bottom Hero Controls & Information Overlay */}
        <div className="pointer-events-auto space-y-4">
          {/* 1F / 2F Highlights Pill Bar */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs font-semibold">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 backdrop-blur-md shadow-md shadow-cyan-500/20">
              <Mic className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'ko' ? '1F 라이브 밴드 라운지' : '1F Live Band Lounge'}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-pink-950/80 border border-pink-500/50 text-pink-300 backdrop-blur-md shadow-md shadow-pink-500/20">
              <Disc className="w-3.5 h-3.5 text-pink-400" />
              <span>{lang === 'ko' ? '2F 노래방 (패밀리 KTV)' : '2F Family KTV'}</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-950/80 border border-purple-500/50 text-purple-300 backdrop-blur-md shadow-md shadow-purple-500/20">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Angeles City, Philippines</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto pt-1">
            <button
              onClick={() => scrollToSection('performances')}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm border border-cyan-300/40 shadow-lg shadow-cyan-500/30 flex items-center justify-center space-x-2 cursor-pointer transition-all hover:scale-105"
            >
              <Music className="w-4 h-4 text-white" />
              <span>{t.ctaSchedule}</span>
            </button>
          </div>

          {/* Stats Grid Overlay */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 w-full max-w-4xl mx-auto text-center pt-2">
            <div className="p-2.5 sm:p-3 rounded-xl bg-black/60 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-500/60 transition-all">
              <p className="text-lg sm:text-xl font-black neon-text-blue font-mono">7 BANDS</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{t.statBands}</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-black/60 backdrop-blur-md border border-pink-500/30 hover:border-pink-500/60 transition-all">
              <p className="text-lg sm:text-xl font-black neon-text-pink font-mono">1F LOUNGE</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{t.statFloor1}</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-black/60 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <p className="text-lg sm:text-xl font-black neon-text-purple font-mono">2F KTV</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{t.statFloor2}</p>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-black/60 backdrop-blur-md border border-amber-500/30 hover:border-amber-500/60 transition-all">
              <p className="text-lg sm:text-xl font-black neon-text-gold font-mono">5PM - 4AM</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{t.statHours}</p>
            </div>
          </div>

          {/* Down Scroll Indicator */}
          <div className="flex justify-center pt-1">
            <button
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer animate-bounce"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
