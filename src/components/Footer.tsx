import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Music, MapPin, Phone, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050609] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-800">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-pink-500/30">
                <div className="w-full h-full bg-[#090a0f] rounded-full flex items-center justify-center">
                  <Music className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-wider text-white font-mono">
                  GLEE ANGELS
                </span>
                <p className="text-[10px] text-zinc-500 tracking-widest uppercase font-semibold">
                  Music Lounge & Family KTV
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              {t.about}
            </p>

            <div className="flex items-center space-x-2 text-xs text-cyan-400 font-mono">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Western Fields Sports Bar, Fields Ave, Angeles City, Philippines, 2009</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  {lang === 'ko' ? '1F 라이브 밴드 라운지 & 2F 노래방' : '1F Live Band Lounge & 2F KTV'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('performances')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Weekly Live Band Schedule
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu-vip')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Cocktails, Drinks & VIP Packages
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('location')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Location & Map Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Concierge Info */}
          <div>
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-4">
              {t.contact}
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>+63 917 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>KakaoTalk: GleeAngeles</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: +63 917 123 4567</span>
              </li>
              <li className="text-[11px] text-zinc-500 pt-1">
                Open Daily: 7:00 PM - 3:00 AM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} {t.rights}</p>
          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
            <span>for Angeles City Nightlife</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
