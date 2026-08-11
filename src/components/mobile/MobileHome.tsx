import React, { useState } from 'react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { dailyEntertainmentSchedule, weeklySchedule } from '../../data/scheduleData';
import { Calendar, Clock, Music, Mic2, Star, Download, X, PlayCircle, ChevronRight, Share, PlusSquare } from 'lucide-react';
import loungeStageImg from '../../assets/images/lounge_stage_neon_1786343408212.jpg';

interface MobileHomeProps {
  lang: Language;
}

export const MobileHome: React.FC<MobileHomeProps> = ({ lang }) => {
  const t = translations[lang];
  const [showInstallBanner, setShowInstallBanner] = useState(true);
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const todayId = days[new Date().getDay()];
  const todaySchedule = weeklySchedule.find(s => s.day === todayId) || weeklySchedule[0];

  return (
    <div className="flex flex-col pb-6">
      {/* PWA Install Banner */}
      {showInstallBanner && (
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-3 flex items-center justify-between shadow-lg z-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-bold leading-tight">
                {lang === 'en' ? 'Install Glee Angels App' : '글리 앙헬레스 앱 설치'}
              </p>
              <p className="text-cyan-100 text-[10px]">
                {lang === 'en' ? 'Add to Home Screen for quick access' : '홈 화면에 추가하여 빠르게 접속하세요'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              className="bg-white text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md active:scale-95 transition-transform"
              onClick={() => setShowInstallGuide(true)}
            >
              {lang === 'en' ? 'INSTALL' : '설치'}
            </button>
            <button onClick={() => setShowInstallBanner(false)}>
              <X className="w-5 h-5 text-cyan-200" />
            </button>
          </div>
        </div>
      )}

      {/* Install Guide Modal */}
      {showInstallGuide && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#12141c] border border-cyan-500/40 rounded-3xl p-6 max-w-sm w-full space-y-4 text-center relative shadow-2xl animate-in zoom-in-95">
            <button 
              onClick={() => setShowInstallGuide(false)}
              className="absolute top-4 right-4 p-1 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/50 rounded-2xl flex items-center justify-center mx-auto text-cyan-400">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              {lang === 'ko' ? '앱 홈 화면에 추가' : 'Add to Home Screen'}
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {lang === 'ko' 
                ? '브라우저 하단 또는 상단의 [공유] 버튼을 누른 후 [홈 화면에 추가]를 선택하면 언제든지 빠르게 모바일 앱에 접속할 수 있습니다.'
                : 'Tap the [Share] button in your mobile browser menu, then select [Add to Home Screen] for instant 1-tap access.'
              }
            </p>
            <div className="flex items-center justify-center space-x-4 pt-2 text-xs font-semibold text-cyan-300">
              <div className="flex items-center space-x-1">
                <Share className="w-4 h-4 text-pink-400" />
                <span>1. Share</span>
              </div>
              <div className="flex items-center space-x-1">
                <PlusSquare className="w-4 h-4 text-cyan-400" />
                <span>2. Add to Home Screen</span>
              </div>
            </div>
            <button
              onClick={() => setShowInstallGuide(false)}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-xs shadow-lg mt-2"
            >
              {lang === 'ko' ? '확인' : 'Got it'}
            </button>
          </div>
        </div>
      )}

      {/* Modern App Hero */}
      <div className="relative w-full h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/40 via-purple-900/60 to-blue-900/40 z-10 mix-blend-overlay"></div>
        <img
          src={loungeStageImg}
          alt="Lounge Stage"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/60 to-transparent z-10" />
        
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <div className="inline-flex items-center space-x-1 px-2.5 py-1 bg-pink-500/20 border border-pink-500/50 rounded-full text-[10px] text-pink-300 font-bold mb-3 backdrop-blur-md uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></span>
            <span>{t.hero.badge}</span>
          </div>
          <h1 className="text-4xl font-black text-white font-mono leading-none tracking-tighter mb-2">
            NIGHTLIFE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              REDEFINED
            </span>
          </h1>
          <p className="text-zinc-300 text-xs font-medium">
            {t.hero.slogan}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-4 -mt-2 relative z-30 space-y-8">
        
        {/* Today's Lineup Card */}
        <div className="bg-[#12141d]/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-5 shadow-2xl shadow-black">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold text-white tracking-tight">
                {t.performance.todayBadge}
              </h2>
            </div>
            <span className="bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-lg text-xs font-bold border border-amber-500/20">
              {lang === 'en' ? todaySchedule.dayFullEn : todaySchedule.dayFullKo}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase mb-0.5 block">
                  {lang === 'en' ? 'Main Band' : '메인 밴드'}
                </span>
                <h3 className="text-xl font-black text-white leading-none mb-1">{todaySchedule.band}</h3>
                <p className="text-xs text-zinc-400">{todaySchedule.bandGenre}</p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-pink-500/20">
                <Mic2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-pink-400 tracking-wider uppercase mb-0.5 block">
                  {lang === 'en' ? 'Solo Artist' : '솔로 아티스트'}
                </span>
                <h3 className="text-xl font-black text-white leading-none mb-1">{todaySchedule.solo}</h3>
                <p className="text-xs text-zinc-400">{todaySchedule.soloGenre}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Schedule */}
        <div>
          <div className="flex items-center space-x-2 mb-5 px-1">
            <Clock className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              {t.performance.dailyTab}
            </h2>
          </div>

          <div className="relative border-l-2 border-zinc-800 ml-4 space-y-6">
            {dailyEntertainmentSchedule.map((slot, idx) => (
              <div key={idx} className="relative pl-6">
                {/* Timeline Dot */}
                <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-[#090a0f] ${
                  slot.performerType.includes('Band') ? 'bg-cyan-400' :
                  slot.performerType.includes('Dance') ? 'bg-pink-400' :
                  slot.performerType.includes('Solo') ? 'bg-purple-400' : 'bg-zinc-500'
                }`}></div>
                
                <div className="bg-zinc-900/40 rounded-xl p-3 border border-zinc-800/50">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-sm font-bold text-zinc-200">{slot.time}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      slot.performerType.includes('Band') ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                      slot.performerType.includes('Dance') ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' :
                      slot.performerType.includes('Solo') ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 
                      'bg-zinc-700/50 text-zinc-300'
                    }`}>
                      {lang === 'en' ? slot.performerType : slot.performerTypeKo}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {lang === 'en' ? slot.descriptionEn : slot.descriptionKo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Preview */}
        <div>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-lg font-bold text-white tracking-tight">
              {t.performance.weeklyTab}
            </h2>
          </div>
          
          <div className="flex overflow-x-auto space-x-3 pb-4 snap-x hide-scrollbar">
            {weeklySchedule.map((day) => (
              <div key={day.day} className={`snap-start shrink-0 w-[80vw] sm:w-[300px] p-4 rounded-2xl border ${
                day.day === todayId 
                  ? 'bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-cyan-500/50 shadow-lg shadow-cyan-900/20' 
                  : 'bg-zinc-900/60 border-zinc-800'
              }`}>
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-sm font-bold ${day.day === todayId ? 'text-cyan-400' : 'text-zinc-300'}`}>
                    {lang === 'en' ? day.dayFullEn : dayFullKoToShort(day.dayFullKo)}
                  </span>
                  {day.highlight && (
                    <span className="text-[10px] bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded-full border border-pink-500/30 font-bold uppercase">
                      Special
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Music className="w-4 h-4 text-zinc-500" />
                    <span className="text-sm font-bold text-white">{day.band}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mic2 className="w-4 h-4 text-zinc-500" />
                    <span className="text-sm font-medium text-zinc-400">{day.solo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

function dayFullKoToShort(dayFull: string) {
  return dayFull;
}
