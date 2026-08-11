import React from 'react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { ArrowRight, Music, ShieldCheck, Sparkles, Award, Calendar, Wine } from 'lucide-react';

interface MobileHomeProps {
  lang: Language;
}

export const MobileHome: React.FC<MobileHomeProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="relative h-64 w-full">
        <img
          src="/src/assets/images/lounge_stage_neon_1786343408212.jpg"
          alt="Lounge Stage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/60 to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-block px-2 py-1 bg-pink-500/20 border border-pink-500/50 rounded text-[10px] text-pink-300 font-bold mb-2">
            {t.hero.badge}
          </div>
          <h1 className="text-3xl font-black text-white font-mono leading-none tracking-tight">
            GLEE ANGELS<br />
            <span className="text-pink-400">MUSIC LOUNGE</span>
          </h1>
        </div>
      </div>

      {/* Quick Info Alerts/Banners */}
      <div className="px-4 py-6 space-y-3">
        <div className="w-full bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-xl p-4 flex flex-col justify-between shadow-lg border border-cyan-500/30">
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-cyan-900/50 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-cyan-300" />
            </div>
            <h3 className="font-bold text-white text-sm">{t.performance.sectionTitle}</h3>
          </div>
          <p className="text-xs text-cyan-200 mt-1">{t.hero.statBands}</p>
        </div>

        <div className="w-full bg-gradient-to-r from-pink-900/40 to-purple-900/40 rounded-xl p-4 flex flex-col justify-between shadow-lg border border-pink-500/30">
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-pink-900/50 p-2 rounded-lg">
              <Wine className="w-5 h-5 text-pink-300" />
            </div>
            <h3 className="font-bold text-white text-sm">{t.menu.sectionTitle}</h3>
          </div>
          <p className="text-xs text-pink-200 mt-1">{t.hero.statFloor1} & {t.hero.statFloor2}</p>
        </div>
      </div>

      {/* Features */}
      <div className="px-4 pb-6">
        <h2 className="text-lg font-bold mb-4">{t.about.sectionTitle}</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
            <Music className="w-5 h-5 text-cyan-400 mb-2" />
            <h4 className="font-bold text-xs text-white mb-1">{t.about.grid1Title}</h4>
          </div>
          <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
            <Sparkles className="w-5 h-5 text-pink-400 mb-2" />
            <h4 className="font-bold text-xs text-white mb-1">{t.about.grid2Title}</h4>
          </div>
          <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
            <Award className="w-5 h-5 text-amber-400 mb-2" />
            <h4 className="font-bold text-xs text-white mb-1">{t.about.grid3Title}</h4>
          </div>
          <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
            <ShieldCheck className="w-5 h-5 text-purple-400 mb-2" />
            <h4 className="font-bold text-xs text-white mb-1">{t.about.grid4Title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
