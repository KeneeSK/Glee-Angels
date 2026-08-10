import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { LivePerformancesSection } from './components/LivePerformancesSection';
import { MenuSection } from './components/MenuSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { AudioSynthesizerBar } from './components/AudioSynthesizerBar';
import { useMediaQuery } from './hooks/useMediaQuery';
import { MobileApp } from './components/MobileApp';

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [reservationModalOpen, setReservationModalOpen] = useState<boolean>(false);
  const [reservationFloor, setReservationFloor] = useState<'1F' | '2F'>('1F');
  const [reservationPackageId, setReservationPackageId] = useState<string>('');
  
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return <MobileApp />;
  }

  const handleOpenReservation = (floor: '1F' | '2F' = '1F', packageId: string = '') => {
    setReservationFloor(floor);
    setReservationPackageId(packageId);
    setReservationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 font-sans selection:bg-pink-500 selection:text-white antialiased">
      {/* Sticky Header Nav */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenReservation={handleOpenReservation}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section pinned in background (sticky top-0 h-screen) */}
        <HeroSection
          lang={lang}
          onOpenReservation={handleOpenReservation}
        />

        {/* Content sections sliding over HeroSection on scroll */}
        <div className="relative z-10 bg-[#090a0f] shadow-[0_-30px_60px_rgba(0,0,0,0.95)] border-t border-cyan-500/20">
          {/* About Us Section */}
          <AboutSection
            lang={lang}
            onOpenReservation={handleOpenReservation}
          />

          {/* Live Performances & Daily Schedule Section */}
          <LivePerformancesSection
            lang={lang}
            onOpenReservation={handleOpenReservation}
          />

          {/* Menu & VIP Packages Section */}
          <MenuSection
            lang={lang}
            onOpenReservation={handleOpenReservation}
          />

          {/* Location & Contact Section */}
          <LocationSection lang={lang} />
        </div>
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive Stage Ambient Synth Bar */}
      <AudioSynthesizerBar />

      {/* Reservation System Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        lang={lang}
        initialFloor={reservationFloor}
        initialPackageId={reservationPackageId}
      />
    </div>
  );
}
