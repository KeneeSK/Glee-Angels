import React, { useState } from 'react';
import { Home, Calendar, Wine, MapPin, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { MobileHome } from './mobile/MobileHome';
import { MobileSchedule } from './mobile/MobileSchedule';
import { MobileMenu } from './mobile/MobileMenu';
import { MobileInfo } from './mobile/MobileInfo';
import { ReservationModal } from './ReservationModal';

export const MobileApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'schedule' | 'menu' | 'info'>('home');
  const [lang, setLang] = useState<Language>('ko');
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [reservationFloor, setReservationFloor] = useState<'1F' | '2F'>('1F');

  const handleOpenReservation = (floor: '1F' | '2F' = '1F') => {
    setReservationFloor(floor);
    setReservationModalOpen(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <MobileHome lang={lang} onOpenReservation={handleOpenReservation} />;
      case 'schedule': return <MobileSchedule lang={lang} />;
      case 'menu': return <MobileMenu lang={lang} />;
      case 'info': return <MobileInfo lang={lang} />;
    }
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-[#090a0f] text-white overflow-hidden relative">
      {/* Top App Bar */}
      <div className="h-14 shrink-0 bg-[#0c0e14] border-b border-zinc-800 flex items-center justify-between px-4 z-50">
        <div className="font-black text-lg neon-text-pink font-mono tracking-tighter">
          GLEE ANGELS
        </div>
        <div className="flex items-center space-x-1 bg-zinc-900 rounded-lg p-1 border border-zinc-800">
          <button
            onClick={() => setLang('en')}
            className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all ${
              lang === 'en' ? 'bg-cyan-500 text-white' : 'text-zinc-400'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('ko')}
            className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all ${
              lang === 'ko' ? 'bg-cyan-500 text-white' : 'text-zinc-400'
            }`}
          >
            KR
          </button>
        </div>
      </div>

      {/* Main Content Area (Scrollable) */}
      <div className="flex-1 overflow-y-auto pb-20">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0c0e14]/95 backdrop-blur-md border-t border-zinc-800 flex items-center justify-around px-2 z-50">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center justify-center w-16 h-full ${activeTab === 'home' ? 'text-pink-400' : 'text-zinc-500'}`}>
          <Home className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold">{lang === 'ko' ? '홈' : 'Home'}</span>
        </button>
        <button onClick={() => setActiveTab('schedule')} className={`flex flex-col items-center justify-center w-16 h-full ${activeTab === 'schedule' ? 'text-cyan-400' : 'text-zinc-500'}`}>
          <Calendar className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold">{lang === 'ko' ? '스케줄' : 'Shows'}</span>
        </button>
        
        {/* Center Floating Action Button equivalent */}
        <div className="relative -top-5">
          <button onClick={() => handleOpenReservation('1F')} className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-pink-500/40 flex items-center justify-center text-white border-4 border-[#0c0e14]">
            <MessageCircle className="w-6 h-6" />
          </button>
          <div className="absolute -bottom-5 w-full text-center">
            <span className="text-[10px] font-bold text-pink-400">{lang === 'ko' ? '예약' : 'Book'}</span>
          </div>
        </div>

        <button onClick={() => setActiveTab('menu')} className={`flex flex-col items-center justify-center w-16 h-full ${activeTab === 'menu' ? 'text-amber-400' : 'text-zinc-500'}`}>
          <Wine className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold">{lang === 'ko' ? '메뉴' : 'Menu'}</span>
        </button>
        <button onClick={() => setActiveTab('info')} className={`flex flex-col items-center justify-center w-16 h-full ${activeTab === 'info' ? 'text-green-400' : 'text-zinc-500'}`}>
          <MapPin className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold">{lang === 'ko' ? '위치' : 'Location'}</span>
        </button>
      </div>

      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        lang={lang}
        initialFloor={reservationFloor}
      />
    </div>
  );
};
