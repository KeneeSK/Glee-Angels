import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { LivePerformancesSection } from './components/LivePerformancesSection';
import { MenuSection } from './components/MenuSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { AudioSynthesizerBar } from './components/AudioSynthesizerBar';
import { useMediaQuery } from './hooks/useMediaQuery';
import { MobileApp } from './components/MobileApp';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return <MobileApp />;
  }

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 font-sans selection:bg-pink-500 selection:text-white antialiased">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <HeroSection lang={lang} />
        <div className="relative z-10 bg-[#090a0f] shadow-[0_-30px_60px_rgba(0,0,0,0.95)] border-t border-cyan-500/20">
          <AboutSection lang={lang} />
          <LivePerformancesSection lang={lang} />
          <MenuSection lang={lang} />
          <LocationSection lang={lang} />
        </div>
      </main>
      <Footer lang={lang} />
      <AudioSynthesizerBar />
    </div>
  );
}
