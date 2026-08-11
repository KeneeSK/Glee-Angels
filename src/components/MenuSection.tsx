import React, { useState, useMemo } from 'react';
import { Language, MenuItem, MenuCategory } from '../types';
import { translations } from '../data/translations';
import { menuItems } from '../data/menuData';
import {
  Wine,
  Utensils,
  GlassWater,
  Crown,
  Search,
  Sparkles,
  Flame,
  X,
  CalendarCheck,
  Info,
  CheckCircle2,
  Beer,
  Pizza,
  Coffee,
  Soup
} from 'lucide-react';

interface MenuSectionProps {
  lang: Language;
  
}

export const MenuSection: React.FC<MenuSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'highlights'>('sets');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'popular' | 'recommended'>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const t = translations[lang].menu;

  // Counts for each category
  const counts = useMemo(() => {
    return {
      sets: menuItems.filter((i) => i.category === 'sets').length,
      korean: menuItems.filter((i) => i.category === 'korean').length,
      filipino: menuItems.filter((i) => i.category === 'filipino').length,
      snacks: menuItems.filter((i) => i.category === 'snacks').length,
      western: menuItems.filter((i) => i.category === 'western').length,
      cocktails: menuItems.filter((i) => i.category === 'cocktails').length,
      liquor: menuItems.filter((i) => i.category === 'liquor').length,
      nonalcoholic: menuItems.filter((i) => i.category === 'nonalcoholic').length,
      highlights: menuItems.filter((i) => i.isPopular || i.isRecommended).length,
    };
  }, []);

  // Filter items based on activeCategory, searchQuery, and filterType
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category match
      if (activeCategory !== 'highlights') {
        if (item.category !== activeCategory) return false;
      } else {
        if (!item.isPopular && !item.isRecommended) return false;
      }

      // Filter type match
      if (filterType === 'popular' && !item.isPopular) return false;
      if (filterType === 'recommended' && !item.isRecommended) return false;

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchEn = item.nameEn.toLowerCase().includes(query) || item.descriptionEn.toLowerCase().includes(query);
        const matchKo = item.nameKo.toLowerCase().includes(query) || item.descriptionKo.toLowerCase().includes(query);
        if (!matchEn && !matchKo) return false;
      }

      return true;
    });
  }, [activeCategory, filterType, searchQuery]);

  const getCategoryBadge = (cat: MenuCategory) => {
    switch (cat) {
      case 'sets':
        return {
          label: lang === 'ko' ? '스페셜 세트' : 'Special Set',
          style: 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
        };
      case 'korean':
        return {
          label: lang === 'ko' ? '한식 요리' : 'Korean Food',
          style: 'bg-red-500/15 text-red-400 border border-red-500/30'
        };
      case 'filipino':
        return {
          label: lang === 'ko' ? '필리핀 요리' : 'Filipino Dish',
          style: 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30'
        };
      case 'snacks':
        return {
          label: lang === 'ko' ? '스낵 & 안주' : 'Snacks & Bites',
          style: 'bg-orange-500/15 text-orange-400 border border-orange-500/30'
        };
      case 'western':
        return {
          label: lang === 'ko' ? '양식 & 피자' : 'Western & Pizza',
          style: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
        };
      case 'cocktails':
        return {
          label: lang === 'ko' ? '시그니처 칵테일' : 'Cocktail',
          style: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
        };
      case 'liquor':
        return {
          label: lang === 'ko' ? '맥주 & 보틀' : 'Beer & Spirit',
          style: 'bg-purple-500/15 text-purple-400 border border-purple-500/30'
        };
      case 'nonalcoholic':
        return {
          label: lang === 'ko' ? '음료 & 시샤' : 'Beverage & Shisha',
          style: 'bg-teal-500/15 text-teal-400 border border-teal-500/30'
        };
    }
  };

  return (
    <section id="menu-vip" className="py-20 sm:py-28 bg-[#090a0f] relative overflow-hidden">
      {/* Background Neon Blurs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/3 w-80 h-80 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>{t.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Glee Angels Lounge Menu
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base font-light">
            {lang === 'ko'
              ? '스페셜 할인 세트, 시그니처 네온 칵테일, 정통 한식 & 필리핀 안주부터 수제 피자까지!'
              : 'Special discount sets, signature cocktails, authentic Korean & Filipino bar bites & gourmet pizzas'}
          </p>
          <div className="mt-4 h-1 w-28 bg-gradient-to-r from-amber-400 via-pink-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Feature Hero Card */}
        <div className="mb-12 relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-zinc-900/90 to-purple-950/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-amber-400 transition-all duration-300">
          <div className="md:w-1/2 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5" />
              <span>{lang === 'ko' ? '🔥 앙헬레스 최고의 가성비 스페셜 세트' : '🔥 Best Value Special Sets'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {lang === 'ko'
                ? 'KTV 1시간 무료 + 보틀 & 메인 안주 결합 세트'
                : 'Free KTV 1 Hr + Premium Bottles & Main Dishes Set'}
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              {lang === 'ko'
                ? '소주/맥주/위스키 보틀과 대표 인기 안주(치킨, 과일, 시식, 족발)를 합리적인 할인가로 즐기세요. KTV 룸 1시간 무료 혜택까지 동시 제공됩니다.'
                : 'Enjoy premium spirit bottles paired with our top signature dishes (Fried Chicken, Sisig, Crispy Pata, Fruit Platter) with complementary KTV room hours.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center space-x-1.5 text-amber-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Save Up To ₱500 per Set</span>
              </span>
              <span className="flex items-center space-x-1.5 text-cyan-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>{lang === 'ko' ? '페소(PHP) 가격 적용' : 'All Prices in PHP (₱)'}</span>
              </span>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-56 sm:h-64 rounded-2xl overflow-hidden relative border border-zinc-800 shadow-inner group">
            <img
              src="/src/assets/images/signature_cocktails_1786343438551.jpg"
              alt="Glee Angels Special Sets"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-amber-500/30 flex items-center justify-between">
              <div>
                <p className="text-xs text-amber-400 font-extrabold tracking-wider uppercase">SPECIAL PACKAGES</p>
                <p className="text-xs text-white font-medium">{lang === 'ko' ? '1F 라이브 스테이지 테이블 & 2F KTV 룸' : '1F Live Stage Tables & 2F KTV Rooms'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-zinc-900/90 p-2 rounded-2xl border border-zinc-800/80 flex flex-wrap justify-center gap-1.5 sm:gap-2 shadow-xl backdrop-blur-lg max-w-5xl">
            {/* SPECIAL SETS (HIGHLIGHTED) */}

            {/* KOREAN FOOD */}

            {/* FILIPINO FOOD */}

            {/* SNACKS & BITES */}

            {/* WESTERN & PIZZA */}

            {/* COCKTAILS */}

            {/* BEER & LIQUOR */}

            {/* BEVERAGE & SHISHA */}

            {/* HIGHLIGHTS */}
          </div>
        </div>

        {/* Search & Sub-filters Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'ko' ? '메뉴명, 주류, 요리, 시샤 검색...' : 'Search menu, drinks, dishes...'}
              className="w-full bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-500 text-xs sm:text-sm rounded-xl pl-10 pr-9 py-2.5 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-zinc-500 hover:text-zinc-300">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Filter Badges */}
          <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">


          </div>
        </div>

        {/* Special Banner when Sets filter is active */}
        {activeCategory === 'sets' && (
          <div className="mb-8 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-center text-amber-300 text-xs sm:text-sm font-semibold animate-fadeIn">
            ✨ {lang === 'ko' ? '스페셜 세트 메뉴 이용 시 2층 KTV 룸 이용 고객에게는 무료 룸 이용시간 혜택이 적용됩니다.' : 'Special Set orders include complementary free KTV room usage for 2F guests.'}
          </div>
        )}

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl max-w-xl mx-auto">
            <Info className="w-10 h-10 text-zinc-500 mx-auto mb-3" />
            <p className="text-zinc-300 text-base font-semibold">
              {lang === 'ko' ? '검색 결과가 없습니다.' : 'No menu items found'}
            </p>
            <p className="text-zinc-500 text-xs mt-1">
              {lang === 'ko' ? '검색어나 카테고리 필터를 변경해 보세요.' : 'Try adjusting your search or category filter.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const badge = getCategoryBadge(item.category);
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`p-6 rounded-2xl backdrop-blur-md border transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                    item.category === 'sets'
                      ? 'bg-zinc-900/95 border-amber-500/50 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]'
                      : 'bg-zinc-900/80 border-zinc-800/90 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                  }`}
                >
                  {/* Subtle Card Glow Highlight */}
                  <div className={`absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl transition-all ${
                    item.category === 'sets' ? 'bg-amber-500/15 group-hover:bg-amber-500/30' : 'bg-cyan-500/5 group-hover:bg-cyan-500/15'
                  }`} />

                  <div>
                    {/* Category Tag & Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider ${badge.style}`}>
                        {badge.label}
                      </span>

                      <div className="flex items-center space-x-1">
                        {item.isPopular && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-pink-500/20 text-pink-400 border border-pink-500/30 flex items-center space-x-1">
                            <Flame className="w-3 h-3 text-pink-400" />
                            <span>HOT</span>
                          </span>
                        )}
                        {item.isRecommended && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center space-x-1">
                            <Sparkles className="w-3 h-3 text-amber-300" />
                            <span>RECOMMENDED</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-3">
                      <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {lang === 'ko' ? item.nameKo : item.nameEn}
                      </h4>
                      <p className="text-xs text-zinc-400 font-sans mt-0.5">
                        {lang === 'ko' ? item.nameEn : item.nameKo}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-zinc-300/90 font-light leading-relaxed mb-6 line-clamp-3">
                      {lang === 'ko' ? item.descriptionKo : item.descriptionEn}
                    </p>
                  </div>

                  {/* Footer: Pricing & Action */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <div>
                      {item.originalPricePhp && (
                        <span className="text-xs text-zinc-500 line-through font-mono mr-2">
                          ₱{item.originalPricePhp.toLocaleString()}
                        </span>
                      )}
                      <span className="text-xl font-black text-amber-400 font-mono tracking-tight">
                        ₱{item.pricePhp.toLocaleString()}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold text-cyan-400 group-hover:text-amber-300 flex items-center space-x-1 underline decoration-cyan-500/30 underline-offset-4">
                      <span>{lang === 'ko' ? '상세' : 'Details'}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Item Details Quick View Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#12141c] border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-6">
            {/* Close Button */}

            {/* Modal Header */}
            <div>
              <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider inline-block mb-3 ${getCategoryBadge(selectedItem.category).style}`}>
                {getCategoryBadge(selectedItem.category).label}
              </span>

              <h3 className="text-2xl font-black text-white">
                {lang === 'ko' ? selectedItem.nameKo : selectedItem.nameEn}
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                {lang === 'ko' ? selectedItem.nameEn : selectedItem.nameKo}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400 font-medium">{lang === 'ko' ? '가격' : 'Price'}</p>
                <div className="flex items-baseline space-x-2">
                  {selectedItem.originalPricePhp && (
                    <span className="text-sm text-zinc-500 line-through font-mono">
                      ₱{selectedItem.originalPricePhp.toLocaleString()}
                    </span>
                  )}
                  <span className="text-2xl font-black text-amber-400 font-mono">
                    ₱{selectedItem.pricePhp.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Description Details */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                {lang === 'ko' ? '메뉴 설명 & 구성' : 'Description & Composition'}
              </h4>
              <p className="text-sm text-zinc-200 font-light leading-relaxed">
                {lang === 'ko' ? selectedItem.descriptionKo : selectedItem.descriptionEn}
              </p>
              <p className="text-xs text-zinc-400 font-light leading-relaxed pt-1">
                {lang === 'ko' ? selectedItem.descriptionEn : selectedItem.descriptionKo}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {selectedItem.isPopular && (
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30 flex items-center space-x-1">
                  <Flame className="w-3.5 h-3.5 text-pink-400" />
                  <span>Popular Choice</span>
                </span>
              )}
              {selectedItem.isRecommended && (
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Recommended</span>
                </span>
              )}
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-zinc-800 flex items-center gap-3"><button onClick={() => setSelectedItem(null)} className="flex-1 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition-colors cursor-pointer text-center">{lang === "ko" ? "닫기" : "Close"}</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
