import React from 'react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { dailyEntertainmentSchedule } from '../../data/scheduleData';
import { Clock, Mic2, Users, Disc, Music } from 'lucide-react';

export const MobileSchedule: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="flex flex-col p-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold font-mono neon-text-blue mb-1">{t.performance.sectionTitle}</h2>
        <p className="text-sm text-zinc-400">{t.performance.mainHeading}</p>
      </div>

      <div className="space-y-4">
        {dailyEntertainmentSchedule.map((slot, idx) => (
          <div key={idx} className={`bg-zinc-900/60 rounded-xl p-4 border border-zinc-800`}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-2 text-pink-400">
                <Clock className="w-4 h-4" />
                <span className="font-bold text-sm font-mono">{slot.time}</span>
              </div>
              <div className="px-2 py-1 bg-zinc-800 rounded text-[10px] font-bold text-zinc-300">
                {lang === 'en' ? slot.performerType : slot.performerTypeKo}
              </div>
            </div>
            <p className="text-sm text-zinc-300">
              {lang === 'en' ? slot.descriptionEn : slot.descriptionKo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
