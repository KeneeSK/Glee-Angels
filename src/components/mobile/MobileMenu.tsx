import React from 'react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { menuItems } from '../../data/menuData';

export const MobileMenu: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];

  // Group items by category
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="flex flex-col p-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold font-mono neon-text-amber mb-1">{t.menu.sectionTitle}</h2>
        <p className="text-sm text-zinc-400">{t.menu.mainHeading}</p>
      </div>

      <div className="space-y-8">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="text-lg font-bold text-amber-400 mb-4 sticky top-0 bg-[#090a0f]/90 py-2 backdrop-blur-md z-10">
              {cat === 'sets' ? t.menu.catSets : 
               cat === 'korean' ? t.menu.catKorean : 
               cat === 'filipino' ? t.menu.catFilipino : 
               cat === 'snacks' ? t.menu.catSnacks : 
               cat === 'western' ? t.menu.catWestern : 
               cat === 'cocktails' ? t.menu.catCocktails : 
               cat === 'liquor' ? t.menu.catLiquor : 
               t.menu.catNonalcoholic}
            </h3>
            <div className="space-y-4">
              {menuItems.filter(item => item.category === cat).map(item => (
                <div key={item.id} className="bg-zinc-900/40 p-3 rounded-xl border border-zinc-800/50 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm text-zinc-100">
                      {lang === 'en' ? item.nameEn : item.nameKo}
                    </h4>
                    <span className="text-pink-400 font-mono font-bold text-sm shrink-0 ml-2">
                      ₱{item.pricePhp.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {lang === 'en' ? item.descriptionEn : item.descriptionKo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
