import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Language } from '../../types';
import { menuItems } from '../../data/menuData';
import { dailyEntertainmentSchedule } from '../../data/scheduleData';

export const MobileSearch: React.FC<{ lang: Language }> = ({ lang }) => {
  const [query, setQuery] = useState('');

  const searchResults = () => {
    if (!query) return null;
    
    const lowerQuery = query.toLowerCase();
    
    // Search Menu
    const foundMenu = menuItems.filter(item => 
      item.nameEn.toLowerCase().includes(lowerQuery) || 
      item.nameKo.toLowerCase().includes(lowerQuery) ||
      item.descriptionEn.toLowerCase().includes(lowerQuery) ||
      item.descriptionKo.toLowerCase().includes(lowerQuery)
    );

    // Search Schedule
    const foundSchedule = dailyEntertainmentSchedule.filter(slot =>
      slot.descriptionEn.toLowerCase().includes(lowerQuery) ||
      slot.descriptionKo.toLowerCase().includes(lowerQuery) ||
      slot.performerType.toLowerCase().includes(lowerQuery) ||
      slot.performerTypeKo.toLowerCase().includes(lowerQuery)
    );

    return (
      <div className="space-y-6 mt-4">
        {foundMenu.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-amber-400 mb-3 uppercase tracking-wider">
              {lang === 'ko' ? '메뉴 검색 결과' : 'Menu Results'}
            </h3>
            <div className="space-y-3">
              {foundMenu.map(item => (
                <div key={item.id} className="bg-zinc-900/40 p-3 rounded-xl border border-zinc-800/50">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm text-zinc-100">
                      {lang === 'en' ? item.nameEn : item.nameKo}
                    </h4>
                    <span className="text-pink-400 font-mono font-bold text-sm shrink-0 ml-2">
                      ₱{item.pricePhp.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-1">
                    {lang === 'en' ? item.descriptionEn : item.descriptionKo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {foundSchedule.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-cyan-400 mb-3 uppercase tracking-wider">
              {lang === 'ko' ? '공연 검색 결과' : 'Show Results'}
            </h3>
            <div className="space-y-3">
              {foundSchedule.map((slot, idx) => (
                <div key={idx} className="bg-zinc-900/60 rounded-xl p-3 border border-zinc-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sm font-mono text-pink-400">{slot.time}</span>
                    <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-300 font-bold">
                      {lang === 'en' ? slot.performerType : slot.performerTypeKo}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300">
                    {lang === 'en' ? slot.descriptionEn : slot.descriptionKo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {foundMenu.length === 0 && foundSchedule.length === 0 && (
          <div className="text-center py-10 text-zinc-500 text-sm">
            {lang === 'ko' ? '검색 결과가 없습니다.' : 'No results found.'}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col p-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold font-mono neon-text-blue mb-1">
          {lang === 'ko' ? '빠른 검색' : 'Quick Search'}
        </h2>
        <p className="text-sm text-zinc-400">
          {lang === 'ko' ? '메뉴와 공연 정보를 검색하세요.' : 'Search menus and shows.'}
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-zinc-500" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={lang === 'ko' ? "검색어를 입력하세요..." : "Type to search..."}
          className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
        />
      </div>

      {query ? (
        searchResults()
      ) : (
        <div className="mt-8 space-y-4">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
            {lang === 'ko' ? '추천 검색어' : 'Suggested Searches'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {['VIP', 'Cocktail', 'Band', 'KTV', 'Pizza'].map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm text-zinc-300 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
