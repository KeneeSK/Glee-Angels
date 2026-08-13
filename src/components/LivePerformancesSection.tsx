import React, { useState } from 'react';
import { Language, DayOfWeek, GalleryItem } from '../types';
import { translations } from '../data/translations';
import { weeklySchedule, dailyEntertainmentSchedule, venueGallery } from '../data/scheduleData';
import { Music, Mic, Users, Calendar, Clock, Flame, Sparkles, Radio, Play, Pause, Volume2, X, ZoomIn } from 'lucide-react';

interface LivePerformancesSectionProps {
  lang: Language;
  
}

export const LivePerformancesSection: React.FC<LivePerformancesSectionProps> = ({ lang }) => {
  const getTodayDayCode = (): DayOfWeek => {
    const days: DayOfWeek[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayIndex = new Date().getDay();
    return days[dayIndex];
  };

  const todayCode = getTodayDayCode();
  const [activeTab, setActiveTab] = useState<'weekly' | 'daily' | 'gallery'>('weekly');
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>(() => todayCode);
  const [galleryFilter, setGalleryFilter] = useState<'all' | '1f' | '2f' | 'bands' | 'menu'>('all');
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryItem | null>(null);

  const t = translations[lang].performance;

  // Find active schedule item for selected day
  const currentSchedule = weeklySchedule.find((item) => item.day === selectedDay) || weeklySchedule[0];

  // Filter gallery
  const filteredGallery = galleryFilter === 'all'
    ? venueGallery
    : venueGallery.filter((item) => item.category === galleryFilter);

  return (
    <section id="performances" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Background Neon Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-950/80 border border-pink-500/30 text-pink-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse text-pink-400" />
            <span>{t.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.mainHeading}
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Glee Angels Music Lounge daily lineup & entertainment schedule
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* View Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900/90 p-1.5 rounded-2xl border border-zinc-800 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab('weekly')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                activeTab === 'weekly'
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/30 border border-pink-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{t.weeklyTab}</span>
            </button>

            <button
              onClick={() => setActiveTab('daily')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                activeTab === 'daily'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{t.dailyTab}</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 border border-purple-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.galleryTab}</span>
            </button>
          </div>
        </div>

        {/* TAB 1: WEEKLY PERFORMANCE SCHEDULE (Matching Image 3) */}
        {activeTab === 'weekly' && (
          <div className="space-y-8">
            {/* Day Selector Buttons with TODAY indicator */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
              {weeklySchedule.map((item) => {
                const isSelected = item.day === selectedDay;
                const isToday = item.day === todayCode;
                return (
                  <button
                    key={item.day}
                    onClick={() => setSelectedDay(item.day)}
                    className={`py-3 px-1 sm:px-2 rounded-xl text-center transition-all cursor-pointer border relative flex flex-col items-center justify-center ${
                      isSelected
                        ? 'bg-gradient-to-b from-pink-600 to-purple-800 border-pink-400 text-white shadow-lg shadow-pink-500/30 font-black scale-[1.02]'
                        : isToday
                        ? 'bg-cyan-950/70 border-cyan-500/60 text-cyan-300 hover:border-cyan-400'
                        : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    {isToday && (
                      <span className="mb-1 px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-cyan-400 text-black uppercase tracking-tight shadow-sm animate-pulse">
                        {lang === 'ko' ? '오늘' : 'TODAY'}
                      </span>
                    )}
                    <p className="text-xs sm:text-sm font-mono font-bold tracking-wider">{item.day}</p>
                    <p className="text-[10px] mt-0.5 opacity-80 hidden sm:block">
                      {lang === 'ko' ? item.dayFullKo : item.dayFullEn}
                    </p>
                    {item.highlight && !isToday && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-400 mt-1 animate-ping"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Day Showcase Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-pink-500/30 neon-border-pink">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-pink-500/20 text-pink-400 font-mono font-extrabold text-sm border border-pink-500/40">
                      {currentSchedule.day} - {lang === 'ko' ? currentSchedule.dayFullKo : currentSchedule.dayFullEn}
                    </span>
                    {currentSchedule.day === todayCode && (
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-black border border-cyan-500/50 flex items-center space-x-1 animate-pulse">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{lang === 'ko' ? '오늘의 스케줄' : "TODAY'S LINEUP"}</span>
                      </span>
                    )}
                    {currentSchedule.highlight && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 flex items-center space-x-1">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        <span>WEEKEND PEAK SHOW</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-2 font-mono">
                    {lang === 'ko' ? currentSchedule.dayFullKo : currentSchedule.dayFullEn} LIVE LINEUP
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {selectedDay !== todayCode && (
                    <button
                      onClick={() => setSelectedDay(todayCode)}
                      className="px-4 py-2.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/50 text-cyan-300 text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{lang === 'ko' ? '오늘 공연 보기' : 'View Today'} ({todayCode})</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Band & Solo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {/* Band Card */}
                <div className="p-6 rounded-2xl bg-zinc-950/80 border border-cyan-500/30 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-24 h-24 text-cyan-400" />
                  </div>
                  <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span>{t.bandTitle}</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white font-mono neon-text-blue mb-1">
                    {currentSchedule.band}
                  </h4>
                  <p className="text-xs font-bold text-cyan-300/80 mb-3">
                    Genre: {currentSchedule.bandGenre}
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {lang === 'ko' ? currentSchedule.bandDescKo : currentSchedule.bandDescEn}
                  </p>
                </div>

                {/* Solo Card */}
                <div className="p-6 rounded-2xl bg-zinc-950/80 border border-pink-500/30 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Mic className="w-24 h-24 text-pink-400" />
                  </div>
                  <div className="flex items-center space-x-2 text-pink-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <Mic className="w-4 h-4 text-pink-400" />
                    <span>{t.soloTitle}</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white font-mono neon-text-pink mb-1">
                    {currentSchedule.solo}
                  </h4>
                  <p className="text-xs font-bold text-pink-300/80 mb-3">
                    Genre: {currentSchedule.soloGenre}
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {lang === 'ko' ? currentSchedule.soloDescKo : currentSchedule.soloDescEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Weekly Overview Matrix Table (Exact values from Image 3) */}
            <div className="overflow-x-auto rounded-2xl border border-zinc-800 glass-panel">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-900/90 text-zinc-400 text-xs font-mono uppercase border-b border-zinc-800">
                    <th className="py-4 px-6 font-bold">Day (요일)</th>
                    <th className="py-4 px-6 font-bold text-cyan-400">Band (밴드)</th>
                    <th className="py-4 px-6 font-bold text-pink-400 text-right">Solo Vocal (솔로)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 text-sm">
                  {weeklySchedule.map((item) => {
                    const isTodayRow = item.day === todayCode;
                    return (
                      <tr
                        key={item.day}
                        onClick={() => setSelectedDay(item.day)}
                        className={`hover:bg-zinc-800/50 transition-colors cursor-pointer ${
                          item.day === selectedDay ? 'bg-pink-950/20' : ''
                        }`}
                      >
                        <td className="py-4 px-6 font-bold text-white font-mono flex items-center space-x-2">
                          <span className={`w-2 h-2 rounded-full ${item.day === selectedDay ? 'bg-pink-500' : isTodayRow ? 'bg-cyan-400' : 'bg-zinc-700'}`} />
                          <span>{item.day} ({lang === 'ko' ? item.dayFullKo : item.dayFullEn})</span>
                          {isTodayRow && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-cyan-400 text-black uppercase tracking-tight ml-2">
                              {lang === 'ko' ? '오늘' : 'TODAY'}
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-6 font-bold text-cyan-300 font-mono">
                          {item.band}
                        </td>
                        <td className="py-4 px-6 font-bold text-pink-300 font-mono text-right">
                          {item.solo}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: DAILY ENTERTAINMENT TIME SCHEDULE (Matching Image 4) */}
        {activeTab === 'daily' && (
          <div className="space-y-8">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 neon-border-blue">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-4 border-b border-zinc-800">
                <div>
                  <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold">
                    <Clock className="w-4 h-4" />
                    <span>DAILY ENTERTAINMENT SHOWROOM</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-mono mt-1">
                    GLEE DAILY ENTERTAINMENT SCHEDULE
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Every night from 7:00 PM to 3:00 AM in Angeles City
                  </p>
                </div>

                <div className="mt-4 md:mt-0 px-4 py-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold">
                  8 HOURS NON-STOP ENTERTAINMENT
                </div>
              </div>

              {/* Time Slots Timeline Grid */}
              <div className="space-y-4">
                {dailyEntertainmentSchedule.map((slot, index) => {
                  let badgeBg = 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
                  if (slot.performerType === 'Band') badgeBg = 'bg-pink-500/20 text-pink-300 border-pink-500/40';
                  if (slot.performerType === 'Dance') badgeBg = 'bg-purple-500/20 text-purple-300 border-purple-500/40';

                  return (
                    <div
                      key={index}
                      className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800 hover:border-cyan-500/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0 group-hover:border-cyan-400 transition-colors">
                          <Clock className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-black text-white font-mono">
                              {slot.time}
                            </span>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeBg}`}>
                              {slot.performerType}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-zinc-300 mt-0.5">
                            {lang === 'ko' ? slot.performerTypeKo : slot.performerType}
                          </p>
                        </div>
                      </div>

                      <div className="text-xs text-zinc-400 max-w-md sm:text-right">
                        <p>{lang === 'ko' ? slot.descriptionKo : slot.descriptionEn}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GALLERY & LIGHTBOX */}
        {activeTab === 'gallery' && (
          <div className="space-y-8">
            {/* Gallery Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {[
                { id: 'all', label: lang === 'ko' ? '전체 사진' : 'All Photos' },
                { id: '1f', label: lang === 'ko' ? '1F 라이브 밴드 라운지' : '1F Live Lounge' },
                { id: '2f', label: lang === 'ko' ? '2F 노래방 (패밀리 KTV)' : '2F Family KTV' },
                { id: 'bands', label: lang === 'ko' ? '공연 및 스테이지' : 'Performers & Stage' },
                { id: 'menu', label: lang === 'ko' ? '칵테일 & 푸드' : 'Cocktails & Food' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setGalleryFilter(cat.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    galleryFilter === cat.id
                      ? 'bg-cyan-500 text-black font-extrabold shadow-md shadow-cyan-500/20'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveLightboxImage(item)}
                  className="group relative rounded-2xl overflow-hidden glass-panel border border-zinc-800 hover:border-cyan-500/50 transition-all cursor-pointer shadow-xl"
                >
                  <div className="aspect-video w-full overflow-hidden bg-zinc-950">
                    <img
                      src={item.image}
                      alt={item.titleEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs text-cyan-400 font-mono font-bold uppercase tracking-wider mb-1">
                      {lang === 'ko' ? item.titleKo : item.titleEn}
                    </p>
                    <p className="text-xs text-zinc-300 line-clamp-2">
                      {lang === 'ko' ? item.captionKo : item.captionEn}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full glass-panel border border-cyan-500/40 rounded-3xl overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-zinc-300 hover:text-white border border-zinc-700 hover:border-pink-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeLightboxImage.image}
              alt={activeLightboxImage.titleEn}
              referrerPolicy="no-referrer"
              className="w-full max-h-[70vh] object-contain bg-black"
            />
            <div className="p-6 bg-[#090a0f]">
              <h4 className="text-xl font-extrabold text-white font-mono neon-text-blue">
                {lang === 'ko' ? activeLightboxImage.titleKo : activeLightboxImage.titleEn}
              </h4>
              <p className="text-sm text-zinc-300 mt-2">
                {lang === 'ko' ? activeLightboxImage.captionKo : activeLightboxImage.captionEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
