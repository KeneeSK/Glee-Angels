import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MapPin, Clock, Phone, Mail, MessageCircle, Facebook, Instagram, Youtube, ExternalLink, Copy, Check } from 'lucide-react';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const [copiedKakao, setCopiedKakao] = useState(false);
  const t = translations[lang].location;

  const handleCopyKakao = () => {
    navigator.clipboard.writeText('GleeAngeles');
    setCopiedKakao(true);
    setTimeout(() => setCopiedKakao(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Background Neon Accent Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-lg shadow-cyan-500/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.mainHeading}
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Western Fields Sports Bar, Fields Ave, Angeles City, Philippines, 2009
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-400 mx-auto rounded-full"></div>
        </div>

        {/* 2-Column Grid: Map & Venue Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 shadow-2xl min-h-[380px] lg:min-h-full relative group flex flex-col justify-between">
            <iframe
              title="Glee Angels Music Lounge Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.8365767810255!2d120.58672707588865!3d15.167317062949259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f368a689aeeb%3A0x9e4f3dafd26301c8!2sGlee%20Angels!5e0!3m2!1sko!2sph!4v1786363968478!5m2!1sko!2sph"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full min-h-[380px]"
            ></iframe>

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#090a0f]/95 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white font-mono">Glee Angels Music Lounge</p>
                <p className="text-xs text-cyan-300">Western Fields Sports Bar, Fields Ave, Angeles City</p>
              </div>
              <a
                href="https://maps.google.com/?q=Glee+Angels+Fields+Ave+Angeles+City"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition-colors cursor-pointer shrink-0 flex items-center space-x-1.5"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Venue Info & Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Address & Hours Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Address */}
              <div className="p-5 rounded-2xl glass-panel border border-zinc-800 space-y-2">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{t.addressTitle}</span>
                </div>
                <p className="text-sm text-zinc-300 leading-snug">
                  {lang === 'ko' ? t.addressValueKo : t.addressValueEn}
                </p>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl glass-panel border border-zinc-800 space-y-2">
                <div className="flex items-center space-x-2 text-pink-400 font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-pink-400" />
                  <span>{t.hoursTitle}</span>
                </div>
                <p className="text-sm font-bold text-white font-mono">
                  {t.hoursValue}
                </p>
              </div>
            </div>

            {/* Direct Contact Channels Card */}
            <div className="p-6 rounded-2xl glass-panel border border-purple-500/30 space-y-4">
              <h4 className="text-base font-bold text-white font-mono neon-text-purple flex items-center justify-between">
                <span>{t.contactTitle}</span>
                <span className="text-[10px] text-pink-400 font-normal px-2.5 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/30">OPEN 19:00~03:00</span>
              </h4>

              <div className="grid grid-cols-1 gap-3 text-xs text-zinc-300">
                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-mono text-sm">{t.phone}</span>
                  </div>
                  <a href={`tel:${t.phone}`} className="px-3 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold hover:bg-cyan-500 hover:text-black transition-colors">
                    CALL
                  </a>
                </div>

                {/* KakaoTalk */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-semibold">{t.kakao}</span>
                  </div>
                  <button onClick={handleCopyKakao} className="px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold hover:bg-amber-500 hover:text-black transition-colors cursor-pointer flex items-center space-x-1">
                    {copiedKakao ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <span>COPY ID</span>
                    )}
                  </button>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-semibold">{t.whatsapp}</span>
                  </div>
                  <a href="https://wa.me/639171234567" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold hover:bg-emerald-500 hover:text-black transition-colors">
                    CHAT
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="truncate text-xs font-mono text-zinc-300">{t.email}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center justify-between border-t border-zinc-800/80">
                <span className="text-xs text-zinc-400 font-mono">OFFICIAL SOCIALS:</span>
                <div className="flex items-center space-x-2">
                  <a href="#facebook" className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-cyan-400 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#instagram" className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-pink-400 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#youtube" className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-red-400 transition-colors">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
