import React from 'react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { Mic, Disc, ArrowRight, Music, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface MobileHomeProps {
  lang: Language;
  onOpenReservation: (floor?: '1F' | '2F') => void;
}

export const MobileHome: React.FC<MobileHomeProps> = ({ lang, onOpenReservation }) => {
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

      {/* Quick Reserve Buttons */}
      <div className="px-4 py-6 space-y-3">
        <button
          onClick={() => onOpenReservation('1F')}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl p-4 flex items-center justify-between shadow-lg shadow-cyan-900/20 border border-cyan-500/30"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-cyan-900/50 p-2 rounded-lg">
              <Mic className="w-6 h-6 text-cyan-300" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-sm">{t.about.f1Reserve}</h3>
              <p className="text-xs text-cyan-200 mt-0.5">{t.about.f1Title}</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-cyan-300" />
        </button>

        <button
          onClick={() => onOpenReservation('2F')}
          className="w-full bg-gradient-to-r from-pink-600 to-purple-700 rounded-xl p-4 flex items-center justify-between shadow-lg shadow-pink-900/20 border border-pink-500/30"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-pink-900/50 p-2 rounded-lg">
              <Disc className="w-6 h-6 text-pink-300" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-sm">{t.about.f2Reserve}</h3>
              <p className="text-xs text-pink-200 mt-0.5">{t.about.f2Title}</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-pink-300" />
        </button>
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
