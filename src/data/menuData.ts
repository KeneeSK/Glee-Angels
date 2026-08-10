import { MenuItem, VIPPackage } from '../types';

export const menuItems: MenuItem[] = [
  // ==========================================
  // 1. SPECIAL SETS & PACKAGES (스페셜 세트 & 패키지)
  // ==========================================
  {
    id: 'set-ktv-a',
    nameEn: 'Glee Angels KTV Set A (Beer Set)',
    nameKo: '글리 엔젤스 KTV 세트 A (맥주 세트)',
    category: 'sets',
    pricePhp: 1550,
    originalPricePhp: 1700,
    priceKrw: 37200,
    descriptionEn: '6 Bottles Beer + 1 Hour Free KTV + 1/2 Fried Chicken + Nachos + Peanuts',
    descriptionKo: '산미구엘 맥주 6병 + KTV 룸 1시간 무료 + 후라이드 치킨 반마리 + 나쵸 + 땅콩',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'set-ktv-b',
    nameEn: 'Glee Angels KTV Set B (Soju Set)',
    nameKo: '글리 엔젤스 KTV 세트 B (소주 세트)',
    category: 'sets',
    pricePhp: 1450,
    originalPricePhp: 1650,
    priceKrw: 34800,
    descriptionEn: '2 Soju + 1 Hour Free KTV + Small Fruit Platter + Sizzling Corn or Fries + Peanuts',
    descriptionKo: '소주 2병 + KTV 룸 1시간 무료 + 계절 과일 안주 (소) + 콘치즈 또는 감자튀김 + 땅콩',
    isPopular: true
  },
  {
    id: 'set-ktv-c',
    nameEn: 'Glee Angels KTV Set C (Soju or Beer Set)',
    nameKo: '글리 엔젤스 KTV 세트 C (소주 / 맥주 스페셜)',
    category: 'sets',
    pricePhp: 1950,
    originalPricePhp: 2250,
    priceKrw: 46800,
    descriptionEn: '2 Soju OR 6 Bottles Beer + 1 Hour Free KTV + Pancit + Sinigang (Shrimp or Pork) + Shanghai Lumpia + Peanuts',
    descriptionKo: '소주 2병 또는 맥주 6병 + KTV 룸 1시간 무료 + 빤싯 + 시니강(새우/포크) + 룸피아 + 땅콩',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'set-soju-filipino',
    nameEn: 'Set Soju + Filipino Feast Package',
    nameKo: '세트 소주 + 필리핀 대표 요리 세트',
    category: 'sets',
    pricePhp: 3000,
    priceKrw: 72000,
    descriptionEn: '2 Soju + Pancit + Pork Sisig + Bulalo + Crispy Pata + Choice of 1 Side (Onion Rings / Egg Roll / Corn Cheese / Fries)',
    descriptionKo: '소주 2병 + 빤싯 + 포크 시식 + 불랄로 + 크리스피 파타 + 선택 안주 1종 (양파링/계란말이/콘치즈/감자튀김)',
    isRecommended: true
  },
  {
    id: 'set-soju-squid-fruit',
    nameEn: 'Set Soju + Dried Squid & Fruit Package',
    nameKo: '세트 소주 + 마른안주 & 과일 세트',
    category: 'sets',
    pricePhp: 2600,
    priceKrw: 62400,
    descriptionEn: '2 Soju + Dried Squid with Peanuts + Big Fruit Platter + Choice of 1 Side (Onion Rings / Egg Roll / Fries / Corn Cheese)',
    descriptionKo: '소주 2병 + 마른 오징어 & 땅콩 + 대형 과일 안주 + 선택 안주 1종 (양파링/계란말이/감자튀김/콘치즈)'
  },
  {
    id: 'set-soju-korean',
    nameEn: 'Set Soju + Golbengi Korean Special',
    nameKo: '세트 소주 + 골뱅이무침 한식 세트',
    category: 'sets',
    pricePhp: 2100,
    priceKrw: 50400,
    descriptionEn: '2 Soju + Golbengi Muchim + Choice of Jjigae (Tuna Kimchi / Spam Kimchi / Denjang) + Choice of 2 Sides',
    descriptionKo: '소주 2병 + 골뱅이무침 + 찌개 1종 선택 (참치김치/스팸김치/된장) + 선택 안주 2종'
  },
  {
    id: 'set-whisky-cuervo',
    nameEn: 'Jose Cuervo Tequila Special Set',
    nameKo: '호세 쿠에르보 데킬라 스페셜 세트',
    category: 'sets',
    pricePhp: 4600,
    originalPricePhp: 5000,
    priceKrw: 110400,
    descriptionEn: 'Jose Cuervo Tequila (700ml) + Fresh Fruit Platter + Dried Squid & Peanuts',
    descriptionKo: '호세 쿠에르보 데킬라 (700ml) 1병 + 신선 과일 안주 + 마른 오징어 & 땅콩',
    isPopular: true
  },
  {
    id: 'set-whisky-jack',
    nameEn: 'Jack Daniel\'s Whisky Special Set',
    nameKo: '잭다니엘 위스키 스페셜 세트',
    category: 'sets',
    pricePhp: 5000,
    originalPricePhp: 5500,
    priceKrw: 120000,
    descriptionEn: 'Jack Daniel\'s Whisky (700ml) + Fresh Fruit Platter + Dried Squid & Peanuts',
    descriptionKo: '잭다니엘 위스키 (700ml) 1병 + 신선 과일 안주 + 마른 오징어 & 땅콩'
  },
  {
    id: 'set-whisky-jwblack',
    nameEn: 'Johnnie Walker Black Label Special Set',
    nameKo: '조니워커 블랙 레이블 스페셜 세트',
    category: 'sets',
    pricePhp: 5000,
    originalPricePhp: 5500,
    priceKrw: 120000,
    descriptionEn: 'Johnnie Walker Black Label (700ml) + Fresh Fruit Platter + Dried Squid & Peanuts',
    descriptionKo: '조니워커 블랙 레이블 (700ml) 1병 + 신선 과일 안주 + 마른 오징어 & 땅콩',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'set-whisky-chivas',
    nameEn: 'Chivas Regal 12 Yrs Special Set',
    nameKo: '시바스 리갈 12년 스페셜 세트',
    category: 'sets',
    pricePhp: 5500,
    originalPricePhp: 6000,
    priceKrw: 132000,
    descriptionEn: 'Chivas Regal 12 Yrs (700ml) + Fresh Fruit Platter + Dried Squid & Peanuts',
    descriptionKo: '시바스 리갈 12년 (700ml) 1병 + 신선 과일 안주 + 마른 오징어 & 땅콩'
  },
  {
    id: 'set-alfonso-promo',
    nameEn: 'Alfonso Brandy Promotion Set',
    nameKo: '알폰소 브랜디 프로모션 세트',
    category: 'sets',
    pricePhp: 1100,
    priceKrw: 26400,
    descriptionEn: '1 Bottle Alfonso Brandy (700ml) + 1 Coca-Cola (1.5L)',
    descriptionKo: '알폰소 브랜디 (700ml) 1병 + 코카콜라 (1.5L) 1병'
  },

  // ==========================================
  // 2. KOREAN FOOD (한식 요리)
  // ==========================================
  {
    id: 'kr-kimbap',
    nameEn: 'Kimbap (Classic Rice Roll)',
    nameKo: '야채 김밥',
    category: 'korean',
    pricePhp: 205,
    priceKrw: 4900,
    descriptionEn: 'Classic Korean seaweed rice roll with fresh vegetables.',
    descriptionKo: '신선한 야채와 고소한 참기름 향이 가득한 정통 김밥.'
  },
  {
    id: 'kr-tuna-cheese-kimbap',
    nameEn: 'Tuna or Cheese Kimbap',
    nameKo: '참치 / 치즈 김밥',
    category: 'korean',
    pricePhp: 275,
    priceKrw: 6600,
    descriptionEn: 'Kimbap filled with savory tuna mayonnaise or rich melted cheese.',
    descriptionKo: '고소한 참치 마요네즈 또는 고소한 치즈가 들어간 인기 김밥.'
  },
  {
    id: 'kr-ramyeon',
    nameEn: 'Shin Ramyeon',
    nameKo: '신라면',
    category: 'korean',
    pricePhp: 175,
    priceKrw: 4200,
    descriptionEn: 'Spicy Korean noodle soup served piping hot.',
    descriptionKo: '매콤하고 시원한 국물의 얼큰한 신라면.'
  },
  {
    id: 'kr-seafood-ramyeon',
    nameEn: 'Seafood Ramyeon',
    nameKo: '해물 라면',
    category: 'korean',
    pricePhp: 255,
    priceKrw: 6100,
    descriptionEn: 'Spicy ramyeon with fresh squid and shrimp.',
    descriptionKo: '오징어와 새우가 들어가 해장으로 최고인 깊은 맛의 해물라면.',
    isPopular: true
  },
  {
    id: 'kr-jappaghetti',
    nameEn: 'Jappaghetti (Black Bean Noodle)',
    nameKo: '짜파게티',
    category: 'korean',
    pricePhp: 225,
    priceKrw: 5400,
    descriptionEn: 'Korean black bean paste instant noodles.',
    descriptionKo: '달콤 짭조름한 풍미의 국물 없는 블랙빈 짜파게티.'
  },
  {
    id: 'kr-tukbokki',
    nameEn: 'Tukbokki (Spicy Rice Cake)',
    nameKo: '매콤 떡볶이',
    category: 'korean',
    pricePhp: 375,
    priceKrw: 9000,
    descriptionEn: 'Chewy rice cakes cooked in sweet and spicy chili sauce with fish cakes.',
    descriptionKo: '쫄깃한 떡과 어묵, 달콤 매콤한 특제 고추장 소스의 대표 분식 요리.',
    isPopular: true
  },
  {
    id: 'kr-denjang-jjigae',
    nameEn: 'Denjang Jjigae (Soybean Paste Stew)',
    nameKo: '된장찌개',
    category: 'korean',
    pricePhp: 375,
    priceKrw: 9000,
    descriptionEn: 'Traditional Korean fermented soybean paste stew with tofu and veggies.',
    descriptionKo: '구수한 전통 재래식 된장과 두부, 야채가 구수하게 어우러진 찌개.'
  },
  {
    id: 'kr-denjang-seafood',
    nameEn: 'Seafood Denjang Jjigae',
    nameKo: '해물 된장찌개',
    category: 'korean',
    pricePhp: 425,
    priceKrw: 10200,
    descriptionEn: 'Rich soybean paste stew filled with fresh seafood mix.',
    descriptionKo: '싱싱한 해산물이 들어가 한층 더 시원하고 깊은 맛을 내는 해물 된장찌개.'
  },
  {
    id: 'kr-kimchi-spam',
    nameEn: 'Spam Kimchi Jjigae',
    nameKo: '스팸 김치찌개',
    category: 'korean',
    pricePhp: 425,
    priceKrw: 10200,
    descriptionEn: 'Aged kimchi stew packed with savory Spam and tofu.',
    descriptionKo: '잘 익은 묵은지와 짭조름한 스팸이 조화로운 대표 얼큰 찌개.',
    isPopular: true
  },
  {
    id: 'kr-kimchi-tuna',
    nameEn: 'Tuna Kimchi Jjigae',
    nameKo: '참치 김치찌개',
    category: 'korean',
    pricePhp: 425,
    priceKrw: 10200,
    descriptionEn: 'Authentic aged kimchi stew cooked with savory tuna chunks.',
    descriptionKo: '담백하고 시원한 국물 맛이 일품인 참치 김치찌개.'
  },
  {
    id: 'kr-jeyuk',
    nameEn: 'Jeyuk Bokum (Spicy Stir-fried Pork)',
    nameKo: '제육볶음',
    category: 'korean',
    pricePhp: 525,
    priceKrw: 12600,
    descriptionEn: 'Sliced pork stir-fried with onions and spicy Korean gochujang sauce.',
    descriptionKo: '매콤한 고추장 양념에 노릇하게 볶아낸 돼지고기 제육볶음 (술안주 최고).',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'kr-kimchijun',
    nameEn: 'Kimchijun (Kimchi Pancake)',
    nameKo: '김치전',
    category: 'korean',
    pricePhp: 425,
    priceKrw: 10200,
    descriptionEn: 'Crispy savory pancake filled with finely chopped kimchi.',
    descriptionKo: '겉은 바삭하고 속은 촉촉한 칼칼하고 고소한 Kimchi Pancake.'
  },
  {
    id: 'kr-dubu-kimchi',
    nameEn: 'Dubu Kimchi (Tofu with Stir-fried Kimchi)',
    nameKo: '두부김치',
    category: 'korean',
    pricePhp: 425,
    priceKrw: 10200,
    descriptionEn: 'Warm sliced tofu served alongside spicy stir-fried kimchi and pork.',
    descriptionKo: '따뜻한 두부와 돼지고기를 넣고 볶은 김치의 조합 (막걸리/소주 궁합).'
  },
  {
    id: 'kr-samgyeopsal',
    nameEn: 'Grilled Samgyeopsal (Pork Belly)',
    nameKo: '삼겹살 구이',
    category: 'korean',
    pricePhp: 355,
    priceKrw: 8520,
    descriptionEn: 'Sizzling grilled pork belly served with dipping sauces.',
    descriptionKo: '고소하고 노릇하게 구워져 깔끔하게 제공되는 삼겹살 요리.'
  },
  {
    id: 'kr-golbengi',
    nameEn: 'Golbengi Muchim (Sea Snail Salad)',
    nameKo: '골뱅이 무침 & 소면',
    category: 'korean',
    pricePhp: 1025,
    priceKrw: 24600,
    descriptionEn: 'Spicy, sweet & sour sea snail salad served with thin noodles.',
    descriptionKo: '쫄깃한 골뱅이와 싱싱한 야채, 소면을 함께 비벼먹는 맥주/소주 안주 끝판왕.',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'kr-bulgogi',
    nameEn: 'Beef Bulgogi',
    nameKo: '소불고기',
    category: 'korean',
    pricePhp: 635,
    priceKrw: 15240,
    descriptionEn: 'Marinated tender beef cooked with sweet garlic soy sauce and glass noodles.',
    descriptionKo: '단짠 단짠 달콤한 특제 간장 양념으로 다듬어낸 부드러운 소불고기.'
  },
  {
    id: 'kr-daktoritang',
    nameEn: 'Daktoritang (Spicy Braised Chicken)',
    nameKo: '닭도리탕 (매운 닭볶음탕)',
    category: 'korean',
    pricePhp: 625,
    priceKrw: 15000,
    descriptionEn: 'Spicy braised chicken with potatoes and vegetables in rich gravy broth.',
    descriptionKo: '푸짐한 닭고기와 감자, 포슬포슬한 야채가 진하게 조려진 매콤한 닭볶음탕.'
  },
  {
    id: 'kr-geranjim',
    nameEn: 'Geranjim (Steamed Egg Pot)',
    nameKo: '부드러운 계란찜',
    category: 'korean',
    pricePhp: 250,
    priceKrw: 6000,
    descriptionEn: 'Fluffy Korean style steamed eggs in hot earthenware pot.',
    descriptionKo: '부드럽고 폭신하게 뚝배기에 끓여낸 담백한 계란찜.'
  },
  {
    id: 'kr-rice',
    nameEn: 'Steamed White Rice',
    nameKo: '공기밥',
    category: 'korean',
    pricePhp: 50,
    priceKrw: 1200,
    descriptionEn: 'Freshly steamed white rice bowl.',
    descriptionKo: '갓 지어낸 따뜻한 공기밥.'
  },

  // ==========================================
  // 3. FILIPINO DISHES (필리핀 시그니처 요리)
  // ==========================================
  {
    id: 'ph-bulalo',
    nameEn: 'Bulalo (Beef Marrow Soup)',
    nameKo: '불랄로 (필리핀식 갈비탕)',
    category: 'filipino',
    pricePhp: 525,
    priceKrw: 12600,
    descriptionEn: 'Famous Filipino beef shank soup with bone marrow and fresh corn.',
    descriptionKo: '소고기 사골과 갈비, 옥수수를 넣어 시원하게 우려낸 필리핀 대표 진국 탕요리.',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'ph-chopsuey',
    nameEn: 'Chopsuey (Stir-fried Vegetables)',
    nameKo: '찹수이 (야채 볶음 요리)',
    category: 'filipino',
    pricePhp: 425,
    priceKrw: 10200,
    descriptionEn: 'Stir-fried mixed vegetables with pork and shrimp in thick savory glaze.',
    descriptionKo: '브로콜리, 피망, 새우, 돼지고기를 굴소스 향으로 볶아낸 아삭한 야채 요리.'
  },
  {
    id: 'ph-pancit',
    nameEn: 'Pancit Bihon / Canton',
    nameKo: '빤싯 비혼 / 깐통 (필리핀 볶음면)',
    category: 'filipino',
    pricePhp: 525,
    priceKrw: 12600,
    descriptionEn: 'Traditional stir-fried noodles with meat, seafood, and vegetables.',
    descriptionKo: '잔치와 파티에 빠지지 않는 짭조름하고 고소한 필리핀 대표 볶음면 요리.'
  },
  {
    id: 'ph-pancit-mix',
    nameEn: 'Pancit Mix Special',
    nameKo: '빤싯 믹스 스페셜',
    category: 'filipino',
    pricePhp: 525,
    priceKrw: 12600,
    descriptionEn: 'Combination of thin rice noodles and egg noodles stir-fried together.',
    descriptionKo: '비혼면과 깐통면 두 가지 면을 믹스하여 볶아낸 찰진 맛의 빤싯.'
  },
  {
    id: 'ph-sinigang-pork',
    nameEn: 'Sinigang Pork',
    nameKo: '포크 시니강 (돼지고기 시니강 탕)',
    category: 'filipino',
    pricePhp: 475,
    priceKrw: 11400,
    descriptionEn: 'Tamarind flavored sour soup with tender pork and local greens.',
    descriptionKo: '타마린드의 상큼하고 칼칼한 국물 맛이 해장에 으뜸인 필리핀 대표 스프 요리.'
  },
  {
    id: 'ph-sinigang-shrimp',
    nameEn: 'Sinigang Shrimp',
    nameKo: '시니강 새우 (새우 시니강 탕)',
    category: 'filipino',
    pricePhp: 475,
    priceKrw: 11400,
    descriptionEn: 'Tamarind sour soup loaded with fresh whole tiger prawns.',
    descriptionKo: '통통한 새우가 푸짐하게 들어가 국물이 시원하고 칼칼한 시니강 새우 탕.',
    isPopular: true
  },
  {
    id: 'ph-adobo-chicken',
    nameEn: 'Chicken Adobo',
    nameKo: '치킨 아도보 (닭고기 조림)',
    category: 'filipino',
    pricePhp: 475,
    priceKrw: 11400,
    descriptionEn: 'Chicken braised in garlic, soy sauce, vinegar, and black peppercorns.',
    descriptionKo: '간장, 식초, 마늘 양념에 조려낸 한국인 입맛에 가장 잘 맞는 필리핀 닭고기 요리.'
  },
  {
    id: 'ph-adobo-pork',
    nameEn: 'Pork Adobo',
    nameKo: '포크 아도보 (돼지고기 조림)',
    category: 'filipino',
    pricePhp: 475,
    priceKrw: 11400,
    descriptionEn: 'Pork shoulder simmered in soy sauce, vinegar, and garlic peppercorns.',
    descriptionKo: '돼지고기를 매콤 단짠 간장 양념에 짭조름하게 조려낸 밥도둑 대표 요리.'
  },
  {
    id: 'ph-lechon-kawali',
    nameEn: 'Lechon Kawali',
    nameKo: '레촌 까왈리 (삼겹살 튀김)',
    category: 'filipino',
    pricePhp: 575,
    priceKrw: 13800,
    descriptionEn: 'Deep-fried crispy pork belly served with liver sauce.',
    descriptionKo: '삶은 돼지 삼겹살을 기밀하게 튀겨내어 겉바속촉 쫄깃함을 자랑하는 요리.',
    isPopular: true
  },
  {
    id: 'ph-pork-sisig',
    nameEn: 'Sizzling Pork Sisig',
    nameKo: '포크 씨직 (Sizzling Sisig)',
    category: 'filipino',
    pricePhp: 405,
    priceKrw: 9720,
    descriptionEn: 'Minced pork served on hot iron plate with chili, onions, and raw egg.',
    descriptionKo: '지글거리는 철판 위에서 노릇하게 익혀낸 앙헬레스 넘버원 대표 맥주 안주.',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'ph-crispy-pata',
    nameEn: 'Crispy Pata (Deep Fried Pork Knuckle)',
    nameKo: '크리스피 빠따 (족발 튀김)',
    category: 'filipino',
    pricePhp: 1025,
    priceKrw: 24600,
    descriptionEn: 'Filipino style deep-fried whole pork leg served with spicy soy vinegar dipping sauce.',
    descriptionKo: '겉은 과자처럼 바삭하고 속은 촉촉한 필리핀 최고 명물 프리미엄 족발 튀김.',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'ph-lumpia',
    nameEn: 'Shanghai Lumpia (Spring Rolls)',
    nameKo: '샹하이 룸피아 (스프링롤)',
    category: 'filipino',
    pricePhp: 425,
    priceKrw: 10200,
    descriptionEn: 'Crispy fried spring rolls stuffed with minced pork and spices.',
    descriptionKo: '다진 고기와 야채를 또띠아 피에 말아 바삭하게 튀겨낸 스위트 칠리 찍어먹는 롤.'
  },
  {
    id: 'ph-garlic-rice',
    nameEn: 'Garlic Fried Rice',
    nameKo: '마늘 볶음밥',
    category: 'filipino',
    pricePhp: 125,
    priceKrw: 3000,
    descriptionEn: 'Fragrant fried rice tossed with crispy golden garlic bits.',
    descriptionKo: '고소한 튀긴 마늘 향이 은은하게 퍼지는 필리핀 필수 볶음밥.'
  },
  {
    id: 'ph-dynamite',
    nameEn: 'Dynamite Chili Sticks',
    nameKo: '다이나마이트 고추튀김',
    category: 'filipino',
    pricePhp: 425,
    priceKrw: 10200,
    descriptionEn: 'Green chilies stuffed with cheese and meat, wrapped and deep fried.',
    descriptionKo: '치즈와 다진 고기를 품은 길쭉한 고추를 바삭하게 튀겨낸 알싸한 맥주 안주.'
  },

  // ==========================================
  // 4. SNACKS & FINGER FOOD (스낵 & 안주 요리)
  // ==========================================
  {
    id: 'snk-fried-chicken-half',
    nameEn: 'Fried Chicken (Half)',
    nameKo: '후라이드 치킨 (반마리)',
    category: 'snacks',
    pricePhp: 475,
    priceKrw: 11400,
    descriptionEn: 'Crispy Korean style golden fried chicken half portion.',
    descriptionKo: '바삭바삭한 크리스피 후라이드 치킨 반마리.'
  },
  {
    id: 'snk-fried-chicken-whole',
    nameEn: 'Fried Chicken (Whole)',
    nameKo: '후라이드 치킨 (한마리)',
    category: 'snacks',
    pricePhp: 725,
    priceKrw: 17400,
    descriptionEn: 'Crispy Korean style golden fried chicken whole portion.',
    descriptionKo: '온 가족 및 단체 추천 바삭한 후라이드 치킨 한마리.',
    isPopular: true
  },
  {
    id: 'snk-calamares',
    nameEn: 'Calamares (Crispy Squid Rings)',
    nameKo: '오징어 튀김 (칼라마리스)',
    category: 'snacks',
    pricePhp: 405,
    priceKrw: 9720,
    descriptionEn: 'Deep fried tender squid rings served with tartar dipping sauce.',
    descriptionKo: '바삭하게 튀겨낸 링 오징어 튀김과 타르타르 소스.'
  },
  {
    id: 'snk-french-fries',
    nameEn: 'French Fries',
    nameKo: '감자튀김',
    category: 'snacks',
    pricePhp: 275,
    priceKrw: 6600,
    descriptionEn: 'Golden crispy potato fries with dip.',
    descriptionKo: '갓 튀겨내어 바삭하고 짭조름한 스탠다드 감자튀김.'
  },
  {
    id: 'snk-nachos',
    nameEn: 'Loaded Nachos Supreme',
    nameKo: '나쵸 슈프림',
    category: 'snacks',
    pricePhp: 425,
    priceKrw: 10200,
    descriptionEn: 'Crispy tortilla chips topped with melted cheese, beef salsa, and jalapeños.',
    descriptionKo: '치즈 소스, 다진 고기, 살사, 할라피뇨가 푸짐하게 올라간 특제 나쵸.',
    isPopular: true
  },
  {
    id: 'snk-onion-rings',
    nameEn: 'Crispy Onion Rings',
    nameKo: '양파링 튀김',
    category: 'snacks',
    pricePhp: 275,
    priceKrw: 6600,
    descriptionEn: 'Sweet onion rings battered and deep fried golden.',
    descriptionKo: '달콤한 양파를 바삭한 튀김옷 입혀 튀겨낸 양파링.'
  },
  {
    id: 'snk-cheese-sticks',
    nameEn: 'Mozzarella Cheese Sticks',
    nameKo: '치즈 스틱',
    category: 'snacks',
    pricePhp: 425,
    priceKrw: 10200,
    descriptionEn: 'Golden fried breaded mozzarella cheese sticks.',
    descriptionKo: '치즈가 쭉 늘어나는 바삭한 모짜렐라 치즈스틱.'
  },
  {
    id: 'snk-buffalo-wings',
    nameEn: 'Hot Buffalo Wings',
    nameKo: '핫 버팔로 윙',
    category: 'snacks',
    pricePhp: 675,
    priceKrw: 16200,
    descriptionEn: 'Spicy tangy buffalo glazed chicken wings.',
    descriptionKo: '매콤 달콤 중독성 있는 버팔로 소스를 버무린 핫윙.',
    isPopular: true
  },
  {
    id: 'snk-chicken-wings',
    nameEn: 'Fried Chicken Wings',
    nameKo: '바삭 닭날개 튀김',
    category: 'snacks',
    pricePhp: 525,
    priceKrw: 12600,
    descriptionEn: 'Crispy fried chicken wing baskets with dipping sauce.',
    descriptionKo: '담백하고 바삭바삭한 닭날개 후라이드 안주.'
  },
  {
    id: 'snk-nuggets-fries',
    nameEn: 'Nuggets & Fries Combo',
    nameKo: '순살 닭튀김 & 감자튀김',
    category: 'snacks',
    pricePhp: 405,
    priceKrw: 9720,
    descriptionEn: 'Crispy chicken nuggets paired with french fries.',
    descriptionKo: '한입 크기 순살 치킨 너겟과 감자튀김 세트.'
  },
  {
    id: 'snk-egg-roll',
    nameEn: 'Classic Egg Roll',
    nameKo: '계란말이',
    category: 'snacks',
    pricePhp: 275,
    priceKrw: 6600,
    descriptionEn: 'Thick rolled omelette with minced vegetables.',
    descriptionKo: '야채를 넣어 도톰하게 말아낸 한국식 계란말이.'
  },
  {
    id: 'snk-egg-roll-cheese',
    nameEn: 'Cheese Egg Roll',
    nameKo: '치즈 계란말이',
    category: 'snacks',
    pricePhp: 325,
    priceKrw: 7800,
    descriptionEn: 'Rolled omelette filled with melted cheese.',
    descriptionKo: '속에 고소한 치즈가 가득 들어있는 대형 치즈 계란말이.'
  },
  {
    id: 'snk-fried-eggs',
    nameEn: 'Fried Eggs (2pcs)',
    nameKo: '계란후라이 (2개)',
    category: 'snacks',
    pricePhp: 75,
    priceKrw: 1800,
    descriptionEn: 'Sunny side up or double fried eggs.',
    descriptionKo: '노른자가 살아있는 반숙/완숙 계란후라이.'
  },
  {
    id: 'snk-spam-eggs',
    nameEn: 'Spam & Eggs Platter',
    nameKo: '후라이 스팸 & 계란',
    category: 'snacks',
    pricePhp: 625,
    priceKrw: 15000,
    descriptionEn: 'Sizzling pan-fried Spam slices served with eggs.',
    descriptionKo: '노릇하게 구워낸 고급 스팸 구이와 계란후라이 세트.'
  },
  {
    id: 'snk-tempura',
    nameEn: 'Ebi Shrimp Tempura',
    nameKo: '바삭 새우튀김 (템푸라)',
    category: 'snacks',
    pricePhp: 525,
    priceKrw: 12600,
    descriptionEn: 'Crispy Japanese style deep-fried prawns.',
    descriptionKo: '통새우를 바삭하게 튀겨낸 프리미엄 템푸라.',
    isRecommended: true
  },
  {
    id: 'snk-corn-cheese',
    nameEn: 'Sizzling Corn Cheese',
    nameKo: '철판 콘치즈',
    category: 'snacks',
    pricePhp: 275,
    priceKrw: 6600,
    descriptionEn: 'Sweet corn kernel baked with mayo and melted cheese on iron plate.',
    descriptionKo: '철판 위에서 옥수수와 모짜렐라 치즈가 지글지글 고소한 인기 안주.',
    isPopular: true
  },
  {
    id: 'snk-round-fish',
    nameEn: 'Round Fish & Peanuts',
    nameKo: '쥐포 & 땅콩',
    category: 'snacks',
    pricePhp: 625,
    priceKrw: 15000,
    descriptionEn: 'Grilled dried fish fillets served with roasted peanuts.',
    descriptionKo: '노릇하게 구운 쥐포와 고소한 땅콩 모둠.'
  },
  {
    id: 'snk-fruit-medium',
    nameEn: 'Fresh Fruit Platter (Medium)',
    nameKo: '과일 안주 (중)',
    category: 'snacks',
    pricePhp: 625,
    priceKrw: 15000,
    descriptionEn: 'Seasonal tropical fruits sliced fresh.',
    descriptionKo: '망고, 수박, 파인애플 등 당도 높은 신선한 계절 과일 모둠 (중).'
  },
  {
    id: 'snk-fruit-large',
    nameEn: 'Fresh Fruit Platter (Large)',
    nameKo: '과일 안주 (대)',
    category: 'snacks',
    pricePhp: 925,
    priceKrw: 22200,
    descriptionEn: 'Large platter loaded with assortment of fresh tropical fruits.',
    descriptionKo: '망고, 파인애플, 멜론, 수박 등 대형 신선 과일 플래터.',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'snk-dried-squid',
    nameEn: 'Dried Squid & Peanuts',
    nameKo: '마른 오징어 & 땅콩 모둠',
    category: 'snacks',
    pricePhp: 1125,
    priceKrw: 27000,
    descriptionEn: 'Premium whole dried squid with mayonnaise dip and peanuts.',
    descriptionKo: '마른 오징어 한마리와 고소한 땅콩, 청양고추 마요네즈 특제 소스.'
  },
  {
    id: 'snk-peanuts',
    nameEn: 'Roasted Peanuts',
    nameKo: '땅콩 안주',
    category: 'snacks',
    pricePhp: 150,
    priceKrw: 3600,
    descriptionEn: 'Crispy salted roasted peanuts.',
    descriptionKo: '고소하고 짭조름한 볶음 땅콩.'
  },
  {
    id: 'snk-sausage',
    nameEn: 'Sausage Platter',
    nameKo: '모둠 소세지 구이',
    category: 'snacks',
    pricePhp: 825,
    priceKrw: 19800,
    descriptionEn: 'Assorted grilled German sausages served with mustard and ketchup.',
    descriptionKo: '칼집 넣어 노릇하게 구워낸 육즙 가득 수제 모둠 소세지.'
  },

  // ==========================================
  // 5. WESTERN & PIZZA (양식 & 피자)
  // ==========================================
  {
    id: 'wst-pizza-premium',
    nameEn: 'Handcrafted Premium Pizza (9 Variants)',
    nameKo: '수제 프리미엄 피자 (All Meat / Supreme / 4Cheese / Pepperoni 등)',
    category: 'western',
    pricePhp: 990,
    priceKrw: 23760,
    descriptionEn: 'Choice of All Meat, Supreme, Double Smoked Bacon, New York White, 4 Cheese, Vegetarian, Pepperoni, Hawaiian, Margherita.',
    descriptionKo: '올미트, 슈프림, 허니 베이컨, 뉴욕 화이트, 4치즈, 페퍼로니, 하와이안 등 도우가 고소한 수제 피자.',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'wst-pizza-combination',
    nameEn: 'Combination Pizza (2 Flavors Half & Half)',
    nameKo: '콤비네이션 2가지 맛 반반 피자',
    category: 'western',
    pricePhp: 1190,
    priceKrw: 28560,
    descriptionEn: 'Select any 2 favorite pizza flavors in one large size pie.',
    descriptionKo: '원하는 프리미엄 피자 맛 2가지를 반반으로 즐기는 수제 콤비네이션 피자.',
    isPopular: true
  },
  {
    id: 'wst-salads',
    nameEn: 'Fresh Gourmet Salad (Greek / Caesar / Grilled / Garden)',
    nameKo: '프레시 고메 샐러드 (리코타 / 시저 / 그릴드 / 가든)',
    category: 'western',
    pricePhp: 400,
    priceKrw: 9600,
    descriptionEn: 'Fresh crisp vegetables tossed in delicious home dressings.',
    descriptionKo: '신선한 야채와 고소한 드레싱이 어우러진 프레시 샐러드.'
  },
  {
    id: 'wst-ribs',
    nameEn: 'Baby Back Ribs (Full Rack)',
    nameKo: '등갈비 바베큐 폭립',
    category: 'western',
    pricePhp: 1200,
    priceKrw: 28800,
    descriptionEn: 'Tender baby back ribs glazed in rich smoky barbecue sauce.',
    descriptionKo: '스모키한 훈제 바베큐 소스가 진하게 밴 부드러운 폭립.',
    isRecommended: true
  },
  {
    id: 'wst-tbone',
    nameEn: 'T-Bone Steak',
    nameKo: 'T본 스테이크',
    category: 'western',
    pricePhp: 800,
    priceKrw: 19200,
    descriptionEn: 'Grilled T-Bone beef steak served with gravy and fries.',
    descriptionKo: '두툼한 T본 소고기 스테이크와 고소한 그레이비 소스.'
  },
  {
    id: 'wst-fish-finger',
    nameEn: 'Fish Finger & Chips',
    nameKo: '순살 피쉬 핑거 & 감자',
    category: 'western',
    pricePhp: 400,
    priceKrw: 9600,
    descriptionEn: 'Crispy fried fish fillet strips with tartar dip.',
    descriptionKo: '바삭하게 튀겨낸 생선 필렛 스틱과 타르타르 소스.'
  },
  {
    id: 'wst-potato-wedge',
    nameEn: 'Seasoned Potato Wedges',
    nameKo: '시즈닝 웨지 감자',
    category: 'western',
    pricePhp: 250,
    priceKrw: 6000,
    descriptionEn: 'Crispy thick-cut seasoned potato wedges.',
    descriptionKo: '겉은 바삭하고 속은 포슬포슬한 웨지 감자튀김.'
  },
  {
    id: 'wst-burrito',
    nameEn: 'Beef or Chicken Burrito',
    nameKo: '소고기 / 치킨 부리또',
    category: 'western',
    pricePhp: 450,
    priceKrw: 10800,
    descriptionEn: 'Mexican style flour tortilla packed with rice, meat, and salsa.',
    descriptionKo: '고기, 밥, 야채, 살사가 또띠아에 꽉 찬 멕시칸 부리또.'
  },
  {
    id: 'wst-quesadilla-beef',
    nameEn: 'Beef Quesadilla',
    nameKo: '소고기 퀘사디아',
    category: 'western',
    pricePhp: 450,
    priceKrw: 10800,
    descriptionEn: 'Grilled tortilla filled with seasoned beef and melted cheese.',
    descriptionKo: '양념 소고기와 녹아내리는 치즈가 가득한 퀘사디아.',
    isPopular: true
  },
  {
    id: 'wst-quesadilla-chicken',
    nameEn: 'Chicken Quesadilla',
    nameKo: '치킨 퀘사디아',
    category: 'western',
    pricePhp: 250,
    priceKrw: 6000,
    descriptionEn: 'Grilled tortilla filled with juicy chicken and melted cheese.',
    descriptionKo: '담백한 치킨과 고소한 치즈가 든 멕시칸 퀘사디아.'
  },
  {
    id: 'wst-quesadilla-cheese',
    nameEn: 'Cheese Quesadilla',
    nameKo: '치즈 퀘사디아',
    category: 'western',
    pricePhp: 230,
    priceKrw: 5520,
    descriptionEn: 'Simple melted 3-cheese tortilla fold.',
    descriptionKo: '치즈 본연의 고소한 풍미를 느끼는 치즈 퀘사디아.'
  },
  {
    id: 'wst-burger-cheese',
    nameEn: 'Classic Cheeseburger',
    nameKo: '클래식 수제 치즈버거',
    category: 'western',
    pricePhp: 400,
    priceKrw: 9600,
    descriptionEn: 'Beef patty topped with cheddar, lettuce, tomato on brioche bun.',
    descriptionKo: '두툼한 소고기 패티와 체다 치즈가 들어간 수제 치즈버거.'
  },
  {
    id: 'wst-burger-chicken',
    nameEn: 'Crispy Chicken Burger',
    nameKo: '크리스피 치킨버거',
    category: 'western',
    pricePhp: 400,
    priceKrw: 9600,
    descriptionEn: 'Crispy fried chicken breast fillet burger.',
    descriptionKo: '바삭한 치킨 패티가 들어간 수제 버거.'
  },
  {
    id: 'wst-burger-fish',
    nameEn: 'Fillet-O-Fish Burger',
    nameKo: '피쉬 필렛 버거',
    category: 'western',
    pricePhp: 400,
    priceKrw: 9600,
    descriptionEn: 'Fried white fish fillet burger with tartar sauce.',
    descriptionKo: '부드러운 생선 튀김 패티와 타르타르 소스 버거.'
  },
  {
    id: 'wst-sandwich-clubhouse',
    nameEn: 'Triple Deck Clubhouse Sandwich',
    nameKo: '클럽하우스 샌드위치',
    category: 'western',
    pricePhp: 450,
    priceKrw: 10800,
    descriptionEn: 'Stacked sandwich with chicken, bacon, egg, cheese, and fries.',
    descriptionKo: '치킨, 베이컨, 계란, 치즈가 겹겹이 들어간 풍성한 샌드위치.'
  },
  {
    id: 'wst-sandwich-blt',
    nameEn: 'BLT Sandwich',
    nameKo: 'BLT 샌드위치',
    category: 'western',
    pricePhp: 380,
    priceKrw: 9120,
    descriptionEn: 'Classic Bacon, Lettuce, and Tomato sandwich.',
    descriptionKo: '바삭한 베이컨, 양상추, 신선한 토마토의 클래식 샌드위치.'
  },
  {
    id: 'wst-sandwich-hamcheese',
    nameEn: 'Ham & Cheese Sandwich',
    nameKo: '햄치즈 샌드위치',
    category: 'western',
    pricePhp: 330,
    priceKrw: 7920,
    descriptionEn: 'Toasted sliced ham and melted cheddar cheese sandwich.',
    descriptionKo: '고소한 슬라이스 햄과 체다 치즈 토스트.'
  },
  {
    id: 'wst-pasta-lasagna',
    nameEn: 'Baked Meat Lasagna',
    nameKo: '베이크드 미트 라자냐',
    category: 'western',
    pricePhp: 500,
    priceKrw: 12000,
    descriptionEn: 'Layered pasta sheets with rich Bolognese sauce and melted mozzarella.',
    descriptionKo: '라구 볼로네제 소스와 치즈가 층층이 들어간 고소한 라자냐.',
    isPopular: true
  },
  {
    id: 'wst-pasta-shrimp-olio',
    nameEn: 'Shrimp Aglio Olio Pasta',
    nameKo: '새우 알리오 올리오 파스타',
    category: 'western',
    pricePhp: 380,
    priceKrw: 9120,
    descriptionEn: 'Sautéed prawns in garlic extra virgin olive oil and chili flakes.',
    descriptionKo: '통통한 새우와 마늘, 페페론치노 올리브 오일 파스타.',
    isRecommended: true
  },
  {
    id: 'wst-pasta-meatball',
    nameEn: 'Meatball Spaghetti',
    nameKo: '미트볼 스파게티',
    category: 'western',
    pricePhp: 380,
    priceKrw: 9120,
    descriptionEn: 'Classic Italian tomato pasta topped with savory beef meatballs.',
    descriptionKo: '새콤달콤 토마토 소스와 두툼한 수제 미트볼 스파게티.'
  },
  {
    id: 'wst-pasta-varieties',
    nameEn: 'Specialty Pasta (Carbonara / Arrabiata / Alfredo / Pesto)',
    nameKo: '스페셜 파스타 (카르보나라 / 아라비아타 / 치킨 알프레도 / 바질 페스토 등)',
    category: 'western',
    pricePhp: 340,
    priceKrw: 8160,
    descriptionEn: 'Choice of Carbonara, Arrabiata, Chicken Olio, Chicken Alfredo, Bolognese, Pesto, or Aglio Olio.',
    descriptionKo: '카르보나라, 매콤 아라비아타, 치킨 알프레도, 바질 페스토 중 선택 가능한 파스타.'
  },

  // ==========================================
  // 6. COCKTAILS & SHOTS (시그니처 칵테일 & 샷)
  // ==========================================
  {
    id: 'cktl-margarita',
    nameEn: 'Classic Margarita',
    nameKo: '클래식 마가리타',
    category: 'cocktails',
    pricePhp: 200,
    priceKrw: 4800,
    descriptionEn: 'Tequila, Cointreau, fresh lime juice with rimmed salt glass.',
    descriptionKo: '데킬라와 라임, 잔 테두리에 소금을 두른 라틴 시그니처.'
  },
  {
    id: 'cktl-frozen-margarita',
    nameEn: 'Frozen Margarita',
    nameKo: '프로즌 마가리타',
    category: 'cocktails',
    pricePhp: 220,
    priceKrw: 5280,
    descriptionEn: 'Blended slush margarita with tequila and lime.',
    descriptionKo: '살얼음과 함께 머리끝까지 시원한 프로즌 마가리타.'
  },
  {
    id: 'cktl-tequila-sunrise',
    nameEn: 'Tequila Sunrise',
    nameKo: '데킬라 선라이즈',
    category: 'cocktails',
    pricePhp: 220,
    priceKrw: 5280,
    descriptionEn: 'Tequila, orange juice, and grenadine syrup sunrise layer.',
    descriptionKo: '붉은 노을 빛깔의 상큼 달콤한 데킬라 칵테일.',
    isPopular: true
  },
  {
    id: 'cktl-jager-bomb',
    nameEn: 'Jägerbomb',
    nameKo: '예거 밤 (Jägerbomb)',
    category: 'cocktails',
    pricePhp: 170,
    priceKrw: 4080,
    descriptionEn: 'Jagermeister dropped into Red Bull energy drink.',
    descriptionKo: '예거마이스터와 레드불 에너지 드링크의 강렬한 조화.',
    isPopular: true
  },
  {
    id: 'cktl-black-russian',
    nameEn: 'Black / White Russian',
    nameKo: '블랙 / 화이트 러시안',
    category: 'cocktails',
    pricePhp: 170,
    priceKrw: 4080,
    descriptionEn: 'Vodka blended with Kahlúa coffee liqueur.',
    descriptionKo: '보드카와 달콤한 커피 리큐르 깔루아의 클래식 믹스.'
  },
  {
    id: 'cktl-pink-lady',
    nameEn: 'Pink Lady',
    nameKo: '핑크 레이디',
    category: 'cocktails',
    pricePhp: 180,
    priceKrw: 4320,
    descriptionEn: 'Gin, grenadine syrup, and cream sweet pink cocktail.',
    descriptionKo: '사랑스러운 핑크 빛깔의 부드럽고 달달한 여성 인기 칵테일.'
  },
  {
    id: 'cktl-kahlua-milk',
    nameEn: 'Kahlúa Milk',
    nameKo: '깔루아 밀크',
    category: 'cocktails',
    pricePhp: 180,
    priceKrw: 4320,
    descriptionEn: 'Kahlúa coffee liqueur over fresh cold milk.',
    descriptionKo: '부드러운 우유와 커피 리큐어 깔루아의 스위트 칵테일.'
  },
  {
    id: 'cktl-long-island',
    nameEn: 'Long Island Iced Tea',
    nameKo: '롱아일랜드 아이스티 (Long Island)',
    category: 'cocktails',
    pricePhp: 220,
    priceKrw: 5280,
    descriptionEn: '5 white spirits blended with sour mix and Coke splash.',
    descriptionKo: '보드카, 럼, 진, 데킬라 독주가 어우러져 취기 오르는 대표 칵테일.',
    isPopular: true
  },
  {
    id: 'cktl-pina-colada',
    nameEn: 'Piña Colada',
    nameKo: '피냐 콜라다',
    category: 'cocktails',
    pricePhp: 220,
    priceKrw: 5280,
    descriptionEn: 'White rum, coconut cream, and pineapple juice.',
    descriptionKo: '코코넛 향과 달콤한 파인애플이 가득한 휴양지 시그니처.',
    isRecommended: true
  },
  {
    id: 'cktl-sex-on-beach',
    nameEn: 'Sex on the Beach',
    nameKo: '섹스 온 더 비치',
    category: 'cocktails',
    pricePhp: 220,
    priceKrw: 5280,
    descriptionEn: 'Vodka, peach schnapps, orange juice, and cranberry juice.',
    descriptionKo: '피치, 크랜베리, 오렌지 주스의 상큼한 화려한 컬러 칵테일.'
  },
  {
    id: 'cktl-screwdriver',
    nameEn: 'Screwdriver',
    nameKo: '스크류드라이버',
    category: 'cocktails',
    pricePhp: 180,
    priceKrw: 4320,
    descriptionEn: 'Vodka mixed with fresh orange juice.',
    descriptionKo: '보드카와 상큼한 오렌지 주스의 깔끔한 시그니처.'
  },
  {
    id: 'cktl-amf',
    nameEn: 'Adios Motherfucker (A.M.F)',
    nameKo: 'A.M.F (아디오스 마더퍼커)',
    category: 'cocktails',
    pricePhp: 220,
    priceKrw: 5280,
    descriptionEn: 'Strong blue cocktail with 5 spirits and Blue Curaçao.',
    descriptionKo: '시원한 푸른 빛깔에 높은 알코올 도수의 도발적인 하이볼.',
    isPopular: true
  },
  {
    id: 'cktl-mai-tai',
    nameEn: 'Mai Tai',
    nameKo: '마이타이 (Mai Tai)',
    category: 'cocktails',
    pricePhp: 180,
    priceKrw: 4320,
    descriptionEn: 'Tropical rum cocktail with lime and curaçao.',
    descriptionKo: '트로피컬 럼 베이스의 과일향 마이타이.'
  },
  {
    id: 'cktl-blue-kamikaze',
    nameEn: 'Blue Kamikaze',
    nameKo: '블루 카미카제',
    category: 'cocktails',
    pricePhp: 200,
    priceKrw: 4800,
    descriptionEn: 'Vodka, Blue Curaçao, and lime juice.',
    descriptionKo: '보드카와 블루 큐라소의 시원하고 상큼한 시각적 재미.'
  },
  {
    id: 'cktl-blue-hawaiian',
    nameEn: 'Blue Hawaiian',
    nameKo: '블루 하와이안',
    category: 'cocktails',
    pricePhp: 220,
    priceKrw: 5280,
    descriptionEn: 'Rum, Blue Curaçao, pineapple juice, and coconut cream.',
    descriptionKo: '에메랄드빛 바다 느낌의 달콤한 열대 칵테일.'
  },
  {
    id: 'cktl-mudslide',
    nameEn: 'Mudslide',
    nameKo: '머드슬라이드',
    category: 'cocktails',
    pricePhp: 190,
    priceKrw: 4560,
    descriptionEn: 'Vodka, Kahlúa, Bailey\'s Irish Cream blend.',
    descriptionKo: '베일리쉬 크림과 깔루아가 들어가 초콜릿 스무디 같은 칵테일.'
  },
  {
    id: 'cktl-weng-weng',
    nameEn: 'Weng Weng',
    nameKo: '웽웽 (Weng Weng)',
    category: 'cocktails',
    pricePhp: 200,
    priceKrw: 4800,
    descriptionEn: 'Philippine legendary high-potency cocktail blend.',
    descriptionKo: '필리핀 명물 고도수 파티 칵테일.'
  },
  {
    id: 'cktl-b52',
    nameEn: 'B52 Layered Shot',
    nameKo: 'B-52 슈터 샷',
    category: 'cocktails',
    pricePhp: 200,
    priceKrw: 4800,
    descriptionEn: 'Layered Kahlúa, Bailey\'s, and Grand Marnier shot.',
    descriptionKo: '3가지 층을 이룬 불타는 시그니처 샷.'
  },
  {
    id: 'cktl-shots-selection',
    nameEn: 'Liquor Shots (Absolut / Jose Cuervo / Jack Daniel\'s / Jagermeister)',
    nameKo: '프리미엄 샷 (호세쿠에르보 / 잭다니엘 / 예거 / 보드카)',
    category: 'cocktails',
    pricePhp: 180,
    priceKrw: 4320,
    descriptionEn: 'Single shot of choice: Jose Cuervo (₱180), Jack Daniel\'s (₱200), Jagermeister (₱180), Absolut (₱170), Bacardi (₱150), Tanduay (₱90).',
    descriptionKo: '호세 쿠에르보(P180), 잭다니엘(P200), 예거마이스터(P180), 아브솔루트(P170), 바카디(P150) 등 단품 샷.'
  },

  // ==========================================
  // 7. BEER & BOTTLED LIQUOR (주류 & 보틀)
  // ==========================================
  {
    id: 'liq-san-miguel',
    nameEn: 'San Miguel Beer (Pale Pilsen / Light / Apple)',
    nameKo: '산미구엘 맥주 (페일 필젠 / 라이트 / 애플)',
    category: 'liquor',
    pricePhp: 120,
    priceKrw: 2880,
    descriptionEn: 'Famous Philippines ice cold San Miguel beer bottle.',
    descriptionKo: '시원한 산미구엘 대표 맥주 1병 (페일필젠/라이트/애플 선택).'
  },
  {
    id: 'liq-red-horse',
    nameEn: 'Red Horse Stallion Beer',
    nameKo: '레드호스 강한 맥주 (Red Horse)',
    category: 'liquor',
    pricePhp: 120,
    priceKrw: 2880,
    descriptionEn: 'High gravity extra strong Filipino lager beer.',
    descriptionKo: '도수가 높고 타격감이 강한 필리핀 대표 고도수 맥주.',
    isPopular: true
  },
  {
    id: 'liq-bucket-sanmig',
    nameEn: 'San Miguel Mix Bucket (6 Bottles)',
    nameKo: '산미구엘 얼음 버킷 (6병 세트)',
    category: 'liquor',
    pricePhp: 650,
    priceKrw: 15600,
    descriptionEn: '6 chilled San Miguel beer bottles served in frozen ice bucket.',
    descriptionKo: '얼음이 가득 채워진 버킷에 제공되는 산미구엘 6병 세트.',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'liq-corona',
    nameEn: 'Corona Extra Bottle',
    nameKo: '코로나 엑스트라 (Corona)',
    category: 'liquor',
    pricePhp: 200,
    priceKrw: 4800,
    descriptionEn: 'Imported Mexican Corona beer served with lime wedge.',
    descriptionKo: '라임 조각을 띄워 마시는 멕시코 대표 맥주.'
  },
  {
    id: 'liq-heineken',
    nameEn: 'Heineken Lager Bottle',
    nameKo: '하이네켄 맥주 (Heineken)',
    category: 'liquor',
    pricePhp: 140,
    priceKrw: 3360,
    descriptionEn: 'Classic Dutch premium lager beer.',
    descriptionKo: '깔끔한 목넘김의 네덜란드 프리미엄 라거.'
  },
  {
    id: 'liq-soju',
    nameEn: 'Korean Soju (Chamisul / Chumchurum / Soju is Back)',
    nameKo: '한국 소주 (참이슬 / 처음처럼 / 진로 이즈백)',
    category: 'liquor',
    pricePhp: 300,
    priceKrw: 7200,
    descriptionEn: 'Chilled Korean original soju bottle.',
    descriptionKo: '차갑게 칠링된 참이슬, 처음처럼, 진로 이즈백 소주.',
    isPopular: true
  },
  {
    id: 'liq-cuervo-700',
    nameEn: 'Jose Cuervo Especial Gold Tequila (700ml)',
    nameKo: '호세 쿠에르보 데킬라 (700ml 보틀)',
    category: 'liquor',
    pricePhp: 3000,
    priceKrw: 72000,
    descriptionEn: 'Served with lemon slices, salt tray, ice, and mixers.',
    descriptionKo: '레몬 슬라이스, 소금 트레이, 얼음 바스켓 기본 제공.'
  },
  {
    id: 'liq-cuervo-1l',
    nameEn: 'Jose Cuervo Especial Gold Tequila (1 Liter)',
    nameKo: '호세 쿠에르보 데킬라 (1 리터 대용량 보틀)',
    category: 'liquor',
    pricePhp: 3800,
    priceKrw: 91200,
    descriptionEn: '1 Liter big bottle with lemon, salt, and ice setup.',
    descriptionKo: '파티 추천 1L 대용량 데킬라 보틀 + 레몬 & 얼음 세트.',
    isPopular: true
  },
  {
    id: 'liq-jack-700',
    nameEn: 'Jack Daniel\'s Old No. 7 (700ml)',
    nameKo: '잭다니엘 위스키 (700ml 보틀)',
    category: 'liquor',
    pricePhp: 3500,
    priceKrw: 84000,
    descriptionEn: 'Tennessee Sour Mash Whisky with ice bucket and 4 Coke mixers.',
    descriptionKo: '테네시 위스키 + 얼음 바스켓 & 콜라 믹서 음료 제공.'
  },
  {
    id: 'liq-jwblack-700',
    nameEn: 'Johnnie Walker Black Label (700ml)',
    nameKo: '조니워커 블랙 레이블 (700ml 보틀)',
    category: 'liquor',
    pricePhp: 3300,
    priceKrw: 79200,
    descriptionEn: 'Aged blended Scotch whisky with ice bucket and soda chasers.',
    descriptionKo: '12년 숙성 스카치 위스키 + 얼음 및 탄산 음료 제공.',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'liq-chivas-1l',
    nameEn: 'Chivas Regal 12 Years Scotch (1 Liter)',
    nameKo: '시바스 리갈 12년 (1 리터 대용량 보틀)',
    category: 'liquor',
    pricePhp: 4000,
    priceKrw: 96000,
    descriptionEn: '1 Liter premium blended Scotch whisky bottle set.',
    descriptionKo: '부드러운 목넘김의 1L 대용량 12년산 스카치 위스키 보틀.'
  },
  {
    id: 'liq-absolut-700',
    nameEn: 'Absolut Vodka Swedish Spirit (700ml)',
    nameKo: '아브솔루트 보드카 (700ml 보틀)',
    category: 'liquor',
    pricePhp: 2000,
    priceKrw: 48000,
    descriptionEn: 'Pure Swedish vodka with ice bucket and juice mixer.',
    descriptionKo: '스웨덴 아브솔루트 보드카 + 얼음 및 주스 믹서 세트.'
  },
  {
    id: 'liq-tequila-rose-750',
    nameEn: 'Tequila Rose Strawberry Cream (750ml)',
    nameKo: '데킬라 로즈 딸기 크림 (750ml 보틀)',
    category: 'liquor',
    pricePhp: 3000,
    priceKrw: 72000,
    descriptionEn: 'Delicious strawberry cream liqueur with tequila.',
    descriptionKo: '달콤한 딸기 우유 맛이 나는 인기가수 선호 데킬라 로즈.'
  },
  {
    id: 'liq-red-wine-175',
    nameEn: 'Premium Red Wine Bottle (1.75L Big Bottle)',
    nameKo: '프리미엄 레드 와인 (1.75L 대형 보틀)',
    category: 'liquor',
    pricePhp: 1800,
    priceKrw: 43200,
    descriptionEn: 'Rich full-bodied red wine in extra large 1.75 Liter bottle.',
    descriptionKo: '깊고 풍부한 바디감의 1.75L 대용량 레드와인.'
  },

  // ==========================================
  // 8. NON-ALCOHOLIC & SHISHA (음료 & 시샤)
  // ==========================================
  {
    id: 'bev-shake',
    nameEn: 'Fresh Tropical Fruit Shake (Banana / Mango)',
    nameKo: '생과일 쉐이크 (망고 / 바나나)',
    category: 'nonalcoholic',
    pricePhp: 180,
    priceKrw: 4320,
    descriptionEn: 'Blended fresh mango or banana smoothie shake.',
    descriptionKo: '생망고 또는 바나나를 가득 넣어 간 스위트 프레시 쉐이크.',
    isPopular: true
  },
  {
    id: 'bev-coke-15',
    nameEn: 'Coke / Sprite Bottle (1.5 Liter)',
    nameKo: '코카콜라 / 스프라이트 (1.5L 대용량)',
    category: 'nonalcoholic',
    pricePhp: 250,
    priceKrw: 6000,
    descriptionEn: 'Large 1.5 Liter soda bottle for sharing.',
    descriptionKo: '단체 테이블 및 보틀 드링크용 1.5L 탄산음료.'
  },
  {
    id: 'bev-water',
    nameEn: 'Chilled Mineral Water',
    nameKo: '시원한 미네랄 생수',
    category: 'nonalcoholic',
    pricePhp: 60,
    priceKrw: 1440,
    descriptionEn: 'Purified bottled drinking water.',
    descriptionKo: '깔끔한 미네랄 생수.'
  },
  {
    id: 'bev-coffee-icetea',
    nameEn: 'Coffee or Ice Tea (Cup / Tumbler)',
    nameKo: '커피 또는 아이스티 (컵 P100 / 텀블러 P300)',
    category: 'nonalcoholic',
    pricePhp: 100,
    priceKrw: 2400,
    descriptionEn: 'Hot/Iced coffee or refreshing ice tea (Cup ₱100, Big Tumbler ₱300).',
    descriptionKo: '갓 내린 커피 또는 얼음 가득 아이스티 (컵 100페소, 대형 텀블러 300페소).'
  },
  {
    id: 'bev-can-sodas',
    nameEn: 'Canned Soda (Coke Zero / Sprite / Royal / Soda / Tonic)',
    nameKo: '캔 음료 (콜라 제로 / 스프라이트 / 환타 / 토닉워터 / 탄산수)',
    category: 'nonalcoholic',
    pricePhp: 110,
    priceKrw: 2640,
    descriptionEn: 'Ice cold canned soft drinks and mixers.',
    descriptionKo: '시원한 캔 음료 및 위스키 믹서용 탄산수/토닉워터.'
  },
  {
    id: 'bev-juices',
    nameEn: 'Chilled Fruit Juice (Mango / Orange / Pineapple)',
    nameKo: '과일 주스 (망고 / 오렌지 / 파인애플)',
    category: 'nonalcoholic',
    pricePhp: 110,
    priceKrw: 2640,
    descriptionEn: 'Chilled sweet fruit juice glass.',
    descriptionKo: '달콤한 과일 주스.'
  },
  {
    id: 'bev-calamansi',
    nameEn: 'Fresh Calamansi Juice',
    nameKo: '신선한 깔라마시 주스',
    category: 'nonalcoholic',
    pricePhp: 130,
    priceKrw: 3120,
    descriptionEn: 'Freshly squeezed Philippine calamansi citrus juice.',
    descriptionKo: '비타민C 가득 필리핀 생 깔라마시 원액 주스.',
    isRecommended: true
  },
  {
    id: 'bev-cranberry-gatorade',
    nameEn: 'Cranberry Juice or Gatorade',
    nameKo: '크랜베리 주스 / 게토레이',
    category: 'nonalcoholic',
    pricePhp: 140,
    priceKrw: 3360,
    descriptionEn: 'Premium cranberry mixer or electrolyte Gatorade drink.',
    descriptionKo: '크랜베리 음료 또는 스포츠 이온 음료 게토레이.'
  },
  {
    id: 'bev-redbull',
    nameEn: 'Red Bull Energy Drink',
    nameKo: '레드불 (Red Bull) 에너지 드링크',
    category: 'nonalcoholic',
    pricePhp: 120,
    priceKrw: 2880,
    descriptionEn: 'Imported energy drink for continuous nightlife stamina.',
    descriptionKo: '밤샘파티 에너지를 불어넣는 레드불 캔.'
  },
  {
    id: 'shisha-regular',
    nameEn: 'Premium Hookah Shisha (Regular Flavors)',
    nameKo: '프리미엄 시샤 후카 (정품 정통 플래버)',
    category: 'nonalcoholic',
    pricePhp: 650,
    priceKrw: 15600,
    descriptionEn: 'Smooth aromatic hookah shisha in mint, apple, peach, or grape flavors.',
    descriptionKo: '민트, 더블애플, 피치, 그레이프 등 그윽한 연기의 프리미엄 시샤 후카.',
    isPopular: true
  },
  {
    id: 'shisha-inhouse',
    nameEn: 'Glee Angels Inhouse Special Mix Shisha',
    nameKo: '글리 엔젤스 인하우스 스페셜 믹스 시샤',
    category: 'nonalcoholic',
    pricePhp: 750,
    priceKrw: 18000,
    descriptionEn: 'Exclusive custom blended multi-flavor fruit hookah mix.',
    descriptionKo: '글리 엔젤스 전용 시크릿 과일 믹스 최고급 시샤 후카.',
    isPopular: true,
    isRecommended: true
  },
  {
    id: 'shisha-change-bowl',
    nameEn: 'Shisha Change Bowl (Regular ₱550 / Inhouse ₱650)',
    nameKo: '시샤 볼 교체 (정품 550페소 / 인하우스 650페소)',
    category: 'nonalcoholic',
    pricePhp: 550,
    priceKrw: 13200,
    descriptionEn: 'Fresh tobacco bowl reload for existing hookah setup.',
    descriptionKo: '기존 시샤 기구의 새로운 플래버 볼 리필 교체.'
  }
];

export const vipPackages: VIPPackage[] = [
  {
    id: 'pkg-1f-vip',
    floor: '1F',
    titleEn: '1F Stage Front VIP Table Package',
    titleKo: '1층 스테이지 프런트 VIP 테이블 세트',
    subtitleEn: 'Prime front-row view of the live band performance',
    subtitleKo: '메인 무대 바로 앞 최상의 관람석 & VIP 풀 케어',
    capacityEn: '4 - 8 Guests',
    capacityKo: '4인 ~ 8인 이용 추천',
    pricePhp: 8800,
    priceKrw: 210000,
    includesEn: [
      'Choice of 1 Premium Spirit (Johnnie Walker Black / Jose Cuervo)',
      '1 Fresh Tropical Fruit Platter or Crispy Pata',
      '4 Mixers of choice + Unlimited Ice setup',
      'Dedicated VIP waiter & table service'
    ],
    includesKo: [
      '프리미엄 보틀 1병 선택 (조니워커 블랙 또는 호세쿠에르보)',
      '신선한 계절 과일 안주 또는 크리스피 파타 메인 요리 1종',
      '믹서 음료 4캔 및 무제한 얼음 셋팅',
      'VIP 전담 웨이터 1:1 케어 서비스'
    ],
    image: '/src/assets/images/lounge_stage_neon_1786343408212.jpg',
    isPopular: true
  },
  {
    id: 'pkg-2f-standard',
    floor: '2F',
    titleEn: '2F Family KTV Deluxe Room',
    titleKo: '2층 패밀리 KTV 디럭스 룸 (소/중형)',
    subtitleEn: 'Soundproof private room with dynamic disco lighting',
    subtitleKo: '독립 방음 설계 및 다이내믹 디스코 네온 조명',
    capacityEn: '4 - 8 Guests',
    capacityKo: '4인 ~ 8인 이용 추천',
    pricePhp: 7500,
    priceKrw: 180000,
    includesEn: [
      '3 Hours KTV Room Usage',
      'Choice of 1 Spirit bottle or 1 Bucket of San Miguel Beer (6 bottles)',
      '1 Gourmet Snack Platter (Sizzling Sisig or Nachos Supreme)',
      'Full Korean/English Karaoke Song Database'
    ],
    includesKo: [
      'KTV 프라이빗 룸 3시간 무료 이용',
      '보틀 1병 또는 산미구엘 맥주 버킷(6병) 선택',
      '인기 안주 1종 선택 (철판 씨직 또는 나쵸 슈프림)',
      '한국어/영어 최신곡 반주기 및 마이크 위생 커버'
    ],
    image: '/src/assets/images/ktv_family_room_1786343421575.jpg'
  },
  {
    id: 'pkg-2f-presidential',
    floor: '2F',
    titleEn: '2F Family KTV Presidential VIP Suite',
    titleKo: '2층 패밀리 KTV 프레지덴셜 VIP 대형 룸',
    subtitleEn: 'Spacious luxury suite with private bar and extra large screen',
    subtitleKo: '대형 모니터, 고급 소파, 프라이빗 공간의 최고급 룸',
    capacityEn: '10 - 20 Guests',
    capacityKo: '10인 ~ 20인 대형 단체 추천',
    pricePhp: 16500,
    priceKrw: 396000,
    includesEn: [
      '4 Hours KTV Room Usage',
      'Choice of 2 Premium Spirit bottles (Johnnie Walker / Hennessy / Macallan)',
      '2 Gourmet Food Platters (Crispy Pata + Fruit Platter)',
      'Unlimited Mixers & Ice',
      'Private Butler & Dedicated Server'
    ],
    includesKo: [
      'KTV 프레지덴셜 룸 4시간 무료 이용',
      '프리미엄 위스키/코냑 2병 선택 (조니워커, 헤네시 등)',
      '메인 안주 2종 (크리스피 파타 + 계절 과일 화채/모둠)',
      '무제한 믹서 음료 및 얼음 세트',
      '전담 버틀러 1:1 맞춤 서비스'
    ],
    image: '/src/assets/images/ktv_family_room_1786343421575.jpg',
    isPopular: true
  }
];
