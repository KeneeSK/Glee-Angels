import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MapPin, Clock, Phone, Mail, MessageCircle, Send, CheckCircle2, Facebook, Instagram, Youtube } from 'lucide-react';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const t = translations[lang].location;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormEmail('');
      setFormMsg('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="location" className="py-24 bg-[#090a0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.mainHeading}
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Western Fields Sports Bar, Fields Ave, Angeles City, Philippines, 2009
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Google Maps & Store Info */}
          <div className="space-y-6">
            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 shadow-2xl h-80 sm:h-96 relative">
              <iframe
                title="Glee Angels Music Lounge Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.8365767810255!2d120.58672707588865!3d15.167317062949259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f368a689aeeb%3A0x9e4f3dafd26301c8!2sGlee%20Angels!5e0!3m2!1sko!2sph!4v1786363968478!5m2!1sko!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#090a0f]/90 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white font-mono">Glee Angels Music Lounge</p>
                  <p className="text-[10px] text-cyan-300">Western Fields Sports Bar, Fields Ave, Angeles City</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Glee+Angels+Fields+Ave+Angeles+City"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-lg bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition-colors cursor-pointer shrink-0"
                >
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="p-5 rounded-2xl glass-panel border border-zinc-800 space-y-2">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{t.addressTitle}</span>
                </div>
                <p className="text-sm text-zinc-200 leading-snug">
                  {lang === 'ko' ? t.addressValueKo : t.addressValueEn}
                </p>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl glass-panel border border-zinc-800 space-y-2">
                <div className="flex items-center space-x-2 text-pink-400 font-bold text-xs uppercase">
                  <Clock className="w-4 h-4 text-pink-400" />
                  <span>{t.hoursTitle}</span>
                </div>
                <p className="text-sm font-bold text-white font-mono">
                  {t.hoursValue}
                </p>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="p-6 rounded-2xl glass-panel border border-purple-500/30 space-y-4">
              <h4 className="text-lg font-bold text-white font-mono neon-text-purple">
                {t.contactTitle}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{t.phone}</span>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                  <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t.kakao}</span>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.whatsapp}</span>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                  <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="truncate">{t.email}</span>
                </div>
              </div>

              {/* Social Handles */}
              <div className="pt-2 flex items-center space-x-3">
                <span className="text-xs text-zinc-400 font-mono">FOLLOW US:</span>
                <a href="#facebook" className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-cyan-400 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#instagram" className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-pink-400 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#youtube" className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-red-400 transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 neon-border-blue">
            <h3 className="text-2xl font-black text-white font-mono mb-2">
              {t.formTitle}
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Have questions about VIP table rates, band schedules, or private event rentals? Drop us a note.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <p className="text-sm font-bold text-white">
                  {t.formSuccess}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-zinc-300 mb-1 block">
                    {t.formName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Your Name / 성함"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-300 mb-1 block">
                    {t.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-300 mb-1 block">
                    {t.formMessage}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    placeholder="How can we help you? / 문의하실 내용을 작성해 주세요."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-md shadow-cyan-500/20 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.formSubmit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
