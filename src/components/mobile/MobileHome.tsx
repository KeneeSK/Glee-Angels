import React, { useState } from 'react';
import { Language, WeeklyScheduleItem } from '../../types';
import { translations } from '../../data/translations';
import { dailyEntertainmentSchedule, weeklySchedule } from '../../data/scheduleData';
import { Calendar, Clock, Music, Mic2, Star, ChevronRight, Table, CalendarDays, Flame, Sparkles, Info, X } from 'lucide-react';
import { motion } from 'motion/react';
import loungeStageImg from '../../assets/images/lounge_stage_neon_1786343408212.jpg';
import gleeAngelsStageMobileImg from '../../assets/images/glee_angels_stage_mobile_1786532891279.jpg';

interface MobileHomeProps {
  lang: Language;
}

export const MobileHome: React.FC<MobileHomeProps> = ({ lang }) => {
  const t = translations[lang];

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const todayId = days[new Date().getDay()];
  const todaySchedule = weeklySchedule.find(s => s.day === todayId) || weeklySchedule[0];

  const [scheduleViewMode, setScheduleViewMode] = useState<'table' | 'day' | 'cards'>('table');
  const [selectedDayId, setSelectedDayId] = useState<string>(todayId);
  const [detailModalItem, setDetailModalItem] = useState<WeeklyScheduleItem | null>(null);

  const selectedDaySchedule = weeklySchedule.find(s => s.day === selectedDayId) || todaySchedule;

  return (
    <div className="flex flex-col pb-6">
      {/* Modern App Hero */}
      <div className="relative w-full h-[45vh] overflow-hidden">
        <img
          src={gleeAngelsStageMobileImg}
          alt="Glee Angels Stage"
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/50 to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/30 via-transparent to-cyan-900/30 z-10 mix-blend-overlay" />
        
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-1 px-2.5 py-1 bg-pink-500/20 border border-pink-500/50 rounded-full text-[10px] text-pink-300 font-bold mb-2.5 backdrop-blur-md uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></span>
            <span>{t.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black font-mono leading-none tracking-tight mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
          >
            <span className="text-white block">GLEE ANGELS</span>
            <motion.span
              animate={{
                filter: [
                  'drop-shadow(0 0 8px rgba(34, 211, 238, 0.8))',
                  'drop-shadow(0 0 18px rgba(236, 72, 153, 0.9))',
                  'drop-shadow(0 0 8px rgba(34, 211, 238, 0.8))'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-pink-400 to-amber-300 block text-2xl sm:text-3xl font-extrabold tracking-widest mt-1"
            >
              MUSIC LOUNGE
            </motion.span>
          </motion.h1>

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

        {/* Upgraded Weekly Live Schedule Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
            <div className="flex items-center space-x-2">
              <CalendarDays className="w-5 h-5 text-pink-400" />
              <h2 className="text-lg font-bold text-white tracking-tight">
                {lang === 'ko' ? '주간 라이브 스케줄' : 'Weekly Live Schedule'}
              </h2>
            </div>

            {/* Mode Switcher Buttons */}
            <div className="flex items-center bg-zinc-900/90 p-1 rounded-xl border border-zinc-800 self-start">
              <button
                onClick={() => setScheduleViewMode('table')}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  scheduleViewMode === 'table'
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '표' : 'Table'}</span>
              </button>
              <button
                onClick={() => setScheduleViewMode('day')}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  scheduleViewMode === 'day'
                    ? 'bg-pink-500 text-white shadow-md shadow-pink-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '요일별' : 'By Day'}</span>
              </button>
              <button
                onClick={() => setScheduleViewMode('cards')}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  scheduleViewMode === 'cards'
                    ? 'bg-purple-500 text-white shadow-md shadow-purple-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '카드' : 'Cards'}</span>
              </button>
            </div>
          </div>

          {/* VIEW MODE 1: SLEEK NEON TABLE */}
          {scheduleViewMode === 'table' && (
            <div className="bg-[#10121a] rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[340px]">
                  <thead>
                    <tr className="bg-zinc-900/80 border-b border-zinc-800 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      <th className="py-3 px-3 w-20 text-center">{lang === 'ko' ? '요일' : 'Day'}</th>
                      <th className="py-3 px-3">{lang === 'ko' ? '메인 밴드' : 'Main Band'}</th>
                      <th className="py-3 px-3">{lang === 'ko' ? '솔로 보컬' : 'Solo Vocal'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60 text-xs">
                    {weeklySchedule.map((item) => {
                      const isToday = item.day === todayId;
                      return (
                        <tr
                          key={item.day}
                          onClick={() => setDetailModalItem(item)}
                          className={`cursor-pointer transition-colors ${
                            isToday
                              ? 'bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-purple-950/20 border-l-4 border-cyan-400'
                              : 'hover:bg-zinc-800/40'
                          }`}
                        >
                          {/* Day Column */}
                          <td className="py-3.5 px-3 text-center align-middle">
                            <div className="flex flex-col items-center">
                              <span className={`font-black font-mono text-xs ${
                                isToday ? 'text-cyan-400' : item.highlight ? 'text-pink-400' : 'text-zinc-300'
                              }`}>
                                {lang === 'ko' ? item.dayFullKo.replace('요일', '') : item.day}
                              </span>
                              {isToday && (
                                <span className="bg-cyan-400 text-black text-[9px] font-extrabold px-1.5 py-0.2 rounded-full mt-0.5 animate-pulse">
                                  TODAY
                                </span>
                              )}
                              {item.highlight && !isToday && (
                                <span className="bg-pink-500/20 text-pink-400 text-[9px] font-bold px-1 rounded mt-0.5 flex items-center">
                                  <Flame className="w-2.5 h-2.5 mr-0.5" /> HOT
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Band Column */}
                          <td className="py-3.5 px-3 align-middle">
                            <div className="font-bold text-white text-sm flex items-center gap-1.5">
                              <Music className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <span className="truncate">{item.band}</span>
                            </div>
                            <div className="text-[10px] text-zinc-400 truncate mt-0.5 font-sans">
                              {item.bandGenre}
                            </div>
                          </td>

                          {/* Solo Column */}
                          <td className="py-3.5 px-3 align-middle">
                            <div className="font-bold text-pink-300 text-sm flex items-center gap-1.5">
                              <Mic2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                              <span className="truncate">{item.solo}</span>
                            </div>
                            <div className="text-[10px] text-zinc-400 truncate mt-0.5 font-sans">
                              {item.soloGenre}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="p-2.5 bg-zinc-900/60 text-center border-t border-zinc-800 text-[10px] text-zinc-400 flex items-center justify-center gap-1">
                <Info className="w-3 h-3 text-cyan-400" />
                <span>{lang === 'ko' ? '행을 누르면 상세 설명 및 라인업 정보를 볼 수 있습니다' : 'Tap any row for full lineup descriptions'}</span>
              </div>
            </div>
          )}

          {/* VIEW MODE 2: DAY TABS WITH ANIMATED CARD */}
          {scheduleViewMode === 'day' && (
            <div className="space-y-4">
              {/* Day Selector Chips */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 hide-scrollbar">
                {weeklySchedule.map((item) => {
                  const isSelected = item.day === selectedDayId;
                  const isToday = item.day === todayId;
                  return (
                    <button
                      key={item.day}
                      onClick={() => setSelectedDayId(item.day)}
                      className={`shrink-0 flex flex-col items-center py-2 px-3 rounded-xl transition-all border ${
                        isSelected
                          ? 'bg-gradient-to-b from-pink-600 to-purple-700 text-white border-pink-400 shadow-lg shadow-pink-500/20 scale-105'
                          : isToday
                          ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/50'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                      }`}
                    >
                      <span className="text-[10px] font-bold font-mono uppercase">
                        {lang === 'ko' ? item.dayFullKo.replace('요일', '') : item.day}
                      </span>
                      {isToday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 animate-ping"></span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected Day Card */}
              <div className="bg-[#12141e] rounded-2xl border border-pink-500/30 p-5 shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-black text-white font-mono">
                      {lang === 'ko' ? selectedDaySchedule.dayFullKo : selectedDaySchedule.dayFullEn}
                    </span>
                    {selectedDaySchedule.day === todayId && (
                      <span className="bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                        {lang === 'ko' ? '오늘의 공연' : 'TODAY'}
                      </span>
                    )}
                    {selectedDaySchedule.highlight && (
                      <span className="bg-pink-500/20 border border-pink-400/50 text-pink-300 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        <Flame className="w-3 h-3 text-pink-400" /> Weekend Special
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Main Band Block */}
                  <div className="bg-zinc-900/80 p-4 rounded-xl border border-cyan-500/20 relative">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                        <Music className="w-3.5 h-3.5" /> {lang === 'ko' ? '메인 밴드' : 'Main Band'}
                      </span>
                      <span className="text-[10px] font-bold bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded-md border border-cyan-500/30">
                        {selectedDaySchedule.bandGenre}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">{selectedDaySchedule.band}</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {lang === 'ko' ? selectedDaySchedule.bandDescKo : selectedDaySchedule.bandDescEn}
                    </p>
                  </div>

                  {/* Solo Vocal Block */}
                  <div className="bg-zinc-900/80 p-4 rounded-xl border border-pink-500/20 relative">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-pink-400 uppercase tracking-wider flex items-center gap-1">
                        <Mic2 className="w-3.5 h-3.5" /> {lang === 'ko' ? '솔로 보컬' : 'Solo Vocal'}
                      </span>
                      <span className="text-[10px] font-bold bg-pink-500/10 text-pink-300 px-2 py-0.5 rounded-md border border-pink-500/30">
                        {selectedDaySchedule.soloGenre}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">{selectedDaySchedule.solo}</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {lang === 'ko' ? selectedDaySchedule.soloDescKo : selectedDaySchedule.soloDescEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW MODE 3: VERTICAL CARDS */}
          {scheduleViewMode === 'cards' && (
            <div className="space-y-3">
              {weeklySchedule.map((item) => {
                const isToday = item.day === todayId;
                return (
                  <div
                    key={item.day}
                    onClick={() => setDetailModalItem(item)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isToday
                        ? 'bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-purple-950/30 border-cyan-400 shadow-xl shadow-cyan-950/30'
                        : 'bg-zinc-900/70 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-black font-mono ${isToday ? 'text-cyan-400' : 'text-white'}`}>
                          {lang === 'ko' ? item.dayFullKo : item.dayFullEn}
                        </span>
                        {isToday && (
                          <span className="text-[9px] bg-cyan-400 text-black font-extrabold px-2 py-0.5 rounded-full">
                            TODAY
                          </span>
                        )}
                        {item.highlight && !isToday && (
                          <span className="text-[9px] bg-pink-500/20 text-pink-400 border border-pink-500/30 font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                            <Flame className="w-2.5 h-2.5" /> Weekend
                          </span>
                        )}
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-500" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1 border-t border-zinc-800/60">
                      <div>
                        <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                          <Music className="w-3 h-3" /> Band
                        </div>
                        <div className="font-bold text-xs text-white truncate">{item.band}</div>
                        <div className="text-[10px] text-zinc-400 truncate">{item.bandGenre}</div>
                      </div>

                      <div>
                        <div className="text-[10px] font-bold text-pink-400 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                          <Mic2 className="w-3 h-3" /> Solo
                        </div>
                        <div className="font-bold text-xs text-white truncate">{item.solo}</div>
                        <div className="text-[10px] text-zinc-400 truncate">{item.soloGenre}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

      {/* DETAIL MODAL FOR SCHEDULE ITEM */}
      {detailModalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#12141f] border border-cyan-500/40 rounded-3xl p-6 max-w-sm w-full space-y-4 relative shadow-2xl animate-in zoom-in-95">
            <button
              onClick={() => setDetailModalItem(null)}
              className="absolute top-4 right-4 p-1 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-xl font-black text-white font-mono">
                {lang === 'ko' ? detailModalItem.dayFullKo : detailModalItem.dayFullEn}
              </span>
              {detailModalItem.day === todayId && (
                <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  TODAY
                </span>
              )}
            </div>

            <div className="space-y-3 pt-1">
              <div className="bg-zinc-900/90 p-3.5 rounded-xl border border-cyan-500/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                    <Music className="w-3 h-3" /> {lang === 'ko' ? '메인 밴드' : 'Main Band'}
                  </span>
                  <span className="text-[10px] text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded">
                    {detailModalItem.bandGenre}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{detailModalItem.band}</h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {lang === 'ko' ? detailModalItem.bandDescKo : detailModalItem.bandDescEn}
                </p>
              </div>

              <div className="bg-zinc-900/90 p-3.5 rounded-xl border border-pink-500/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider flex items-center gap-1">
                    <Mic2 className="w-3 h-3" /> {lang === 'ko' ? '솔로 아티스트' : 'Solo Artist'}
                  </span>
                  <span className="text-[10px] text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded">
                    {detailModalItem.soloGenre}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{detailModalItem.solo}</h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {lang === 'ko' ? detailModalItem.soloDescKo : detailModalItem.soloDescEn}
                </p>
              </div>
            </div>

            <button
              onClick={() => setDetailModalItem(null)}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-xs shadow-md"
            >
              {lang === 'ko' ? '확인' : 'Close'}
            </button>
          </div>
        </div>
      )}

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

