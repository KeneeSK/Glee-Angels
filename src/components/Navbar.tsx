import React, { useState, useEffect } from 'react';
import { Music, Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: Math.max(0, topOffset),
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-black/50 py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-pink-500/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090a0f] rounded-full flex items-center justify-center">
                <Music className="w-5 h-5 text-cyan-400 group-hover:text-pink-400 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-extrabold text-lg tracking-wider text-white font-mono group-hover:text-cyan-400 transition-colors">
                  GLEE ANGELS
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-400 border border-pink-500/40 font-bold">
                  LIVE
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 tracking-widest uppercase font-semibold">
                Music Lounge & Family KTV
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('performances')}
              className="text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center space-x-1.5"
            >
              <span>{t.performances}</span>
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
            </button>
            <button
              onClick={() => scrollToSection('menu-vip')}
              className="text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {t.menuVip}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {t.location}
            </button>
          </div>

          {/* Right Actions: Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Live Indicator */}
            <div className="hidden xl:flex items-center space-x-2 bg-zinc-900/80 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{t.nowLive}</span>
            </div>
            
            {/* Language Toggle Button */}
            <div className="bg-zinc-900 border border-zinc-800 p-1 rounded-full flex items-center space-x-1">
              <button
                onClick={() => setLang('ko')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  lang === 'ko'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                KO
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Language Toggle Mobile */}
            <button
              onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
              className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 text-xs font-bold flex items-center space-x-1"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-pink-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e17] border-b border-cyan-500/20 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-200 hover:bg-zinc-800/80 hover:text-cyan-400"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('performances')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-200 hover:bg-zinc-800/80 hover:text-cyan-400 flex items-center justify-between"
            >
              <span>{t.performances}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-pink-500/20 text-pink-400 font-bold border border-pink-500/30">
                DAILY SHOWS
              </span>
            </button>
            <button
              onClick={() => scrollToSection('menu-vip')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-200 hover:bg-zinc-800/80 hover:text-cyan-400"
            >
              {t.menuVip}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-200 hover:bg-zinc-800/80 hover:text-cyan-400"
            >
              {t.location}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
