import React, { useState } from 'react';
import { Language, MenuItem } from '../../types';
import { translations } from '../../data/translations';
import { menuItems } from '../../data/menuData';
import { Flame, Sparkles, X } from 'lucide-react';

export const MobileMenu: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  const getCatLabel = (cat: string) => {
    switch (cat) {
      case 'sets': return t.menu.catSets;
      case 'korean': return t.menu.catKorean;
      case 'filipino': return t.menu.catFilipino;
      case 'snacks': return t.menu.catSnacks;
      case 'western': return t.menu.catWestern;
      case 'cocktails': return t.menu.catCocktails;
      case 'liquor': return t.menu.catLiquor;
      default: return t.menu.catNonalcoholic;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? categories
    : categories.filter(c => c === selectedCategory);

  return (
    <div className="flex flex-col p-4 pb-12">
      <div className="mb-4">
        <h2 className="text-xl font-bold font-mono neon-text-amber mb-1">{t.menu.sectionTitle}</h2>
        <p className="text-sm text-zinc-400">{t.menu.mainHeading}</p>
      </div>

      {/* Horizontal Category Selector Chips */}
      <div className="flex overflow-x-auto gap-2 pb-3 mb-4 hide-scrollbar -mx-4 px-4 sticky top-0 bg-[#090a0f]/95 z-20 py-2 backdrop-blur-md">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
            selectedCategory === 'all'
              ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
              : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
          }`}
        >
          {lang === 'ko' ? '전체' : 'All'}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
            }`}
          >
            {getCatLabel(cat)}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredCategories.map((cat) => (
          <div key={cat}>
            <h3 className="text-sm font-bold text-amber-400 mb-3 uppercase tracking-wider">
              {getCatLabel(cat)}
            </h3>
            <div className="space-y-3">
              {menuItems.filter(item => item.category === cat).map(item => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="bg-zinc-900/60 p-3.5 rounded-xl border border-zinc-800/80 active:bg-zinc-800/80 transition-colors flex flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-sm text-zinc-100">
                        {lang === 'en' ? item.nameEn : item.nameKo}
                      </h4>
                      {item.isPopular && (
                        <span className="bg-pink-500/20 text-pink-400 text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <Flame className="w-2.5 h-2.5" /> HOT
                        </span>
                      )}
                      {item.isRecommended && (
                        <span className="bg-amber-500/20 text-amber-300 text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <Sparkles className="w-2.5 h-2.5" /> REC
                        </span>
                      )}
                    </div>
                    <span className="text-pink-400 font-mono font-bold text-sm shrink-0 ml-2">
                      ₱{item.pricePhp.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {lang === 'en' ? item.descriptionEn : item.descriptionKo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Item Details Popup */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#12141d] border border-amber-500/40 rounded-3xl p-6 max-w-sm w-full space-y-4 relative shadow-2xl animate-in zoom-in-95">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-1 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                {getCatLabel(selectedItem.category)}
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                {lang === 'ko' ? selectedItem.nameKo : selectedItem.nameEn}
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {lang === 'ko' ? selectedItem.nameEn : selectedItem.nameKo}
              </p>
            </div>

            <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex justify-between items-center">
              <span className="text-xs text-zinc-400">{lang === 'ko' ? '가격' : 'Price'}</span>
              <div className="flex items-baseline space-x-2">
                {selectedItem.originalPricePhp && (
                  <span className="text-xs text-zinc-500 line-through font-mono">
                    ₱{selectedItem.originalPricePhp.toLocaleString()}
                  </span>
                )}
                <span className="text-xl font-mono font-extrabold text-amber-400">
                  ₱{selectedItem.pricePhp.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-bold text-zinc-400">{lang === 'ko' ? '설명' : 'Description'}</p>
              <p className="text-xs text-zinc-200 leading-relaxed">
                {lang === 'ko' ? selectedItem.descriptionKo : selectedItem.descriptionEn}
              </p>
            </div>

            <button
              onClick={() => setSelectedItem(null)}
              className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-bold text-xs"
            >
              {lang === 'ko' ? '닫기' : 'Close'}
            </button>
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
