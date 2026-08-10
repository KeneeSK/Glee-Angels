import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Music, Mic, Disc, Award, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onOpenReservation: (floor?: '1F' | '2F') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenReservation }) => {
  const [activeFloor, setActiveFloor] = useState<'1F' | '2F'>('1F');
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Glow Background Blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.mainHeading}
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Intro Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-zinc-300 leading-relaxed">
          <div className="p-6 rounded-2xl glass-panel border border-cyan-500/20">
            <p className="text-base sm:text-lg font-light text-zinc-200">
              {t.description1}
            </p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-pink-500/20">
            <p className="text-base sm:text-lg font-light text-zinc-200">
              {t.description2}
            </p>
          </div>
        </div>

        {/* Floor 1 & Floor 2 Interactive Showcase (Matching Image 1) */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-zinc-900/90 p-1.5 rounded-2xl border border-zinc-800 flex space-x-2">
              <button
                onClick={() => setActiveFloor('1F')}
                className={`px-6 py-3 rounded-xl font-bold text-sm sm:text-base flex items-center space-x-2 transition-all cursor-pointer ${
                  activeFloor === '1F'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Mic className="w-5 h-5 text-cyan-300" />
                <span>{lang === 'ko' ? '1F 라이브 밴드 라운지' : '1F LIVE BAND LOUNGE'}</span>
              </button>
              <button
                onClick={() => setActiveFloor('2F')}
                className={`px-6 py-3 rounded-xl font-bold text-sm sm:text-base flex items-center space-x-2 transition-all cursor-pointer ${
                  activeFloor === '2F'
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/30 border border-pink-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Disc className="w-5 h-5 text-pink-300" />
                <span>{lang === 'ko' ? '2F 노래방 (패밀리 KTV)' : '2F FAMILY KTV'}</span>
              </button>
            </div>
          </div>

          {/* Active Floor Content Display */}
          {activeFloor === '1F' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center glass-panel rounded-3xl p-8 border border-cyan-500/30 neon-border-blue">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-md bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-mono text-xs font-bold">
                  1st FLOOR EXPERIENCE
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-mono neon-text-blue">
                  {t.f1Title}
                </h3>
                <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                  {t.f1Desc}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-zinc-200">{t.feat1}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-zinc-200">{t.feat2}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-zinc-200">{t.feat4}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenReservation('1F')}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-md shadow-cyan-500/30 flex items-center space-x-2 cursor-pointer"
                  >
                    <span>{t.f1Reserve}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30 group">
                <img
                  src="/src/assets/images/lounge_stage_neon_1786343408212.jpg"
                  alt="1F Live Band Lounge Stage"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-cyan-500/30">
                  <p className="text-xs text-cyan-300 font-mono font-bold uppercase tracking-wider">
                    Concert-grade Acoustics
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Live Bands Performing Every Night (5:00 PM - 4:00 AM)
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center glass-panel rounded-3xl p-8 border border-pink-500/30 neon-border-pink">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-md bg-pink-500/20 border border-pink-400 text-pink-300 font-mono text-xs font-bold">
                  2nd FLOOR EXPERIENCE
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-mono neon-text-pink">
                  {t.f2Title}
                </h3>
                <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                  {t.f2Desc}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-zinc-200">{t.feat3}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-zinc-200">{t.feat5}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-zinc-200">{t.feat6}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenReservation('2F')}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-sm shadow-md shadow-pink-500/30 flex items-center space-x-2 cursor-pointer"
                  >
                    <span>{t.f2Reserve}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-pink-500/30 group">
                <img
                  src="/src/assets/images/ktv_family_room_1786343421575.jpg"
                  alt="2F Family KTV Private Room"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-pink-500/30">
                  <p className="text-xs text-pink-300 font-mono font-bold uppercase tracking-wider">
                    Soundproof Family KTV
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Deluxe Rooms Available for Small Groups to 20+ Person VIP Parties
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Feature Grid Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-zinc-800 hover:border-cyan-500/40 transition-all">
            <Music className="w-8 h-8 text-cyan-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">{t.grid1Title}</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.grid1Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-zinc-800 hover:border-pink-500/40 transition-all">
            <Disc className="w-8 h-8 text-pink-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">{t.grid2Title}</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.grid2Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-zinc-800 hover:border-amber-500/40 transition-all">
            <Award className="w-8 h-8 text-amber-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">{t.grid3Title}</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.grid3Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-zinc-800 hover:border-purple-500/40 transition-all">
            <ShieldCheck className="w-8 h-8 text-purple-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">{t.grid4Title}</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.grid4Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
