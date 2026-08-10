export type Language = 'ko' | 'en';

export type DayOfWeek = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';

export interface WeeklyScheduleItem {
  day: DayOfWeek;
  dayFullEn: string;
  dayFullKo: string;
  band: string;
  solo: string;
  bandGenre: string;
  soloGenre: string;
  bandDescEn: string;
  bandDescKo: string;
  soloDescEn: string;
  soloDescKo: string;
  highlight?: boolean;
}

export interface DailyTimeSlot {
  time: string;
  performerType: 'Solo' | 'Band' | 'Dance' | 'Free & Karaoke Time';
  performerTypeKo: string;
  descriptionEn: string;
  descriptionKo: string;
  graphicType: 'acoustic' | 'rock' | 'dance' | 'vocal' | 'dj';
}

export type MenuCategory = 
  | 'sets'
  | 'korean'
  | 'filipino'
  | 'snacks'
  | 'western'
  | 'cocktails'
  | 'liquor'
  | 'nonalcoholic';

export interface MenuItem {
  id: string;
  nameEn: string;
  nameKo: string;
  category: MenuCategory;
  pricePhp: number;
  priceKrw: number;
  originalPricePhp?: number;
  descriptionEn: string;
  descriptionKo: string;
  isPopular?: boolean;
  isRecommended?: boolean;
  image?: string;
}

export interface VIPPackage {
  id: string;
  floor: '1F' | '2F';
  titleEn: string;
  titleKo: string;
  subtitleEn: string;
  subtitleKo: string;
  capacityEn: string;
  capacityKo: string;
  pricePhp: number;
  priceKrw: number;
  includesEn: string[];
  includesKo: string[];
  image: string;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleKo: string;
  category: 'all' | '1f' | '2f' | 'bands' | 'menu';
  image: string;
  captionEn: string;
  captionKo: string;
}

export interface ReservationFormData {
  floor: '1F' | '2F';
  date: string;
  time: string;
  partySize: number;
  name: string;
  contactNumber: string;
  contactType: 'KakaoTalk' | 'WhatsApp' | 'Phone' | 'Email';
  packageId?: string;
  specialRequests?: string;
}
