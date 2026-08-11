import React, { useState } from 'react';
import { Home, Wine, MapPin, Search } from 'lucide-react';
import { Language } from '../types';
import { MobileHome } from './mobile/MobileHome';
import { MobileMenu } from './mobile/MobileMenu';
import { MobileInfo } from './mobile/MobileInfo';
import { MobileSearch } from './mobile/MobileSearch';

export const MobileApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'search' | 'menu' | 'info'>('home');
  const [lang, setLang] = useState<Language>('en');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <MobileHome lang={lang} />;
      case 'search': return <MobileSearch lang={lang} />;
      case 'menu': return <MobileMenu lang={lang} />;
      case 'info': return <MobileInfo lang={lang} />;
    }
  };

  return (
    <div className="flex flex-col h-screen h-[100dvh] w-full bg-[#090a0f] text-white overflow-hidden relative">
      {/* Top App Bar */}
      <div className="h-14 shrink-0 bg-[#0c0e14] border-b border-zinc-800 flex items-center justify-between px-4 z-50 shadow-md">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <div className="font-black text-lg neon-text-cyan font-mono tracking-tighter">
            GLEE ANGELS
          </div>
        </div>
        <div className="flex items-center space-x-1 bg-zinc-900/90 rounded-lg p-1 border border-zinc-800">
          <button
            onClick={() => setLang('en')}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all ${
              lang === 'en' ? 'bg-cyan-500 text-white shadow-sm shadow-cyan-500/50' : 'text-zinc-400 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('ko')}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all ${
              lang === 'ko' ? 'bg-cyan-500 text-white shadow-sm shadow-cyan-500/50' : 'text-zinc-400 hover:text-white'
            }`}
          >
            KR
          </button>
        </div>
      </div>

      {/* Main Content Area (Scrollable) */}
      <div className="flex-1 overflow-y-auto pb-24 scroll-smooth">
        {renderContent()}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-[#0c0e14]/95 backdrop-blur-xl border-t border-zinc-800 flex items-center justify-around px-2 z-50 shadow-[0_-10px_25px_rgba(0,0,0,0.8)] pb-[env(safe-area-inset-bottom,0px)]">
        <button 
          onClick={() => setActiveTab('home')} 
          className={`flex flex-col items-center justify-center w-1/4 h-full relative transition-all active:scale-95 ${
            activeTab === 'home' ? 'text-cyan-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {activeTab === 'home' && <span className="absolute top-0 w-8 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />}
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold">{lang === 'ko' ? '홈' : 'Home'}</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('search')} 
          className={`flex flex-col items-center justify-center w-1/4 h-full relative transition-all active:scale-95 ${
            activeTab === 'search' ? 'text-pink-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {activeTab === 'search' && <span className="absolute top-0 w-8 h-0.5 bg-pink-400 rounded-full shadow-[0_0_8px_#f472b6]" />}
          <Search className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold">{lang === 'ko' ? '검색' : 'Search'}</span>
        </button>

        <button 
          onClick={() => setActiveTab('menu')} 
          className={`flex flex-col items-center justify-center w-1/4 h-full relative transition-all active:scale-95 ${
            activeTab === 'menu' ? 'text-amber-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {activeTab === 'menu' && <span className="absolute top-0 w-8 h-0.5 bg-amber-400 rounded-full shadow-[0_0_8px_#fbbf24]" />}
          <Wine className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold">{lang === 'ko' ? '메뉴' : 'Menu'}</span>
        </button>

        <button 
          onClick={() => setActiveTab('info')} 
          className={`flex flex-col items-center justify-center w-1/4 h-full relative transition-all active:scale-95 ${
            activeTab === 'info' ? 'text-purple-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {activeTab === 'info' && <span className="absolute top-0 w-8 h-0.5 bg-purple-400 rounded-full shadow-[0_0_8px_#c084fc]" />}
          <MapPin className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold">{lang === 'ko' ? '위치' : 'Location'}</span>
        </button>
      </div>
    </div>
  );
};
