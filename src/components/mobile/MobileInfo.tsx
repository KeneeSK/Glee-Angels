import React from 'react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';

export const MobileInfo: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="flex flex-col p-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold font-mono neon-text-purple mb-1">{t.location.sectionTitle}</h2>
        <p className="text-sm text-zinc-400">{t.location.mainHeading}</p>
      </div>

      <div className="space-y-4">
        <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
          <div className="flex items-center space-x-3 mb-2">
            <MapPin className="w-5 h-5 text-purple-400" />
            <h3 className="font-bold text-white">{t.location.addressTitle}</h3>
          </div>
          <p className="text-sm text-zinc-300 pl-8">
            {lang === 'en' ? t.location.addressValueEn : t.location.addressValueKo}
          </p>
        </div>

        <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
          <div className="flex items-center space-x-3 mb-2">
            <Clock className="w-5 h-5 text-purple-400" />
            <h3 className="font-bold text-white">{t.location.hoursTitle}</h3>
          </div>
          <p className="text-sm text-zinc-300 pl-8">
            {t.location.hoursValue}
          </p>
        </div>

        <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="w-5 h-5 text-purple-400" />
            <h3 className="font-bold text-white">{t.location.contactTitle}</h3>
          </div>
          <div className="space-y-3 pl-8">
            <a href={`tel:${t.location.phone}`} className="flex items-center space-x-2 text-sm text-zinc-300 hover:text-white">
              <Phone className="w-4 h-4 text-zinc-500" />
              <span>{t.location.phone}</span>
            </a>
            <div className="flex items-center space-x-2 text-sm text-zinc-300">
              <MessageCircle className="w-4 h-4 text-yellow-400" />
              <span>{t.location.kakao}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-zinc-300">
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>{t.location.whatsapp}</span>
            </div>
            <a href={`mailto:${t.location.email}`} className="flex items-center space-x-2 text-sm text-zinc-300 hover:text-white">
              <Mail className="w-4 h-4 text-zinc-500" />
              <span>{t.location.email}</span>
            </a>
          </div>
        </div>

        {/* Embedded Map with Quick Action Button */}
        <div className="rounded-2xl overflow-hidden h-64 border border-zinc-800 mt-6 relative shadow-lg">
          <iframe
            title="Glee Angels Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.8365767810255!2d120.58672707588865!3d15.167317062949259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f368a689aeeb%3A0x9e4f3dafd26301c8!2sGlee%20Angels!5e0!3m2!1sko!2sph!4v1786363968478!5m2!1sko!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-purple-500/30 flex items-center justify-between">
            <span className="text-sm font-bold text-white">Fields Ave, Angeles City</span>
            <a
              href="https://maps.google.com/?q=Glee+Angels+Fields+Ave+Angeles+City"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 bg-purple-500 hover:bg-purple-400 text-white font-bold text-sm rounded-lg shadow-md transition-colors"
            >
              {lang === 'ko' ? '지도 앱으로 열기' : 'Open in Maps'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
