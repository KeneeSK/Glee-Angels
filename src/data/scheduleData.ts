import { WeeklyScheduleItem, DailyTimeSlot, GalleryItem } from '../types';
import loungeStageImg from '../assets/images/lounge_stage_neon_1786343408212.jpg';
import ktvFamilyRoomImg from '../assets/images/ktv_family_room_1786343421575.jpg';
import signatureCocktailsImg from '../assets/images/signature_cocktails_1786343438551.jpg';

export const weeklySchedule: WeeklyScheduleItem[] = [
  {
    day: 'MON',
    dayFullEn: 'Monday',
    dayFullKo: '월요일',
    band: 'HOTSHOTS',
    solo: 'ANGEL',
    bandGenre: 'Pop Rock & Top 40',
    soloGenre: 'Acoustic Soul',
    bandDescEn: 'Electrifying pop rock anthems and chart-topping hits to kick off your week in high spirits.',
    bandDescKo: '신나는 팝록과 파워풀한 히트곡으로 월요일 밤을 뜨겁게 달구는 라이브 밴드.',
    soloDescEn: 'Soulful acoustic ballads with mesmerizing vocal control by Angel.',
    soloDescKo: '감미롭고 매력적인 음색으로 마음을 사로잡는 솔로 아티스트 엔젤.'
  },
  {
    day: 'TUE',
    dayFullEn: 'Tuesday',
    dayFullKo: '화요일',
    band: 'SHATTERED SILENCE',
    solo: 'RICA',
    bandGenre: 'Alternative & Classic Rock',
    soloGenre: 'RnB & Pop Vocal',
    bandDescEn: 'Raw guitar riffs and legendary rock classics driving an unforgettable atmosphere.',
    bandDescKo: '열정적인 기타 리프와 강렬한 사운드로 몰입감을 선사하는 클래식 록 밴드.',
    soloDescEn: 'Silky smooth RnB grooves and soulful pop vocals by Rica.',
    soloDescKo: '부드러운 알앤비와 팝 보컬의 진수를 보여주는 실력파 보컬 리카.'
  },
  {
    day: 'WED',
    dayFullEn: 'Wednesday',
    dayFullKo: '수요일',
    band: '6TH POWER',
    solo: 'CEEJAY',
    bandGenre: 'Funk, Disco & Groove',
    soloGenre: 'Classic Hits & Pop',
    bandDescEn: 'Non-stop danceable funk grooves, retro disco, and explosive stage presence.',
    bandDescKo: '어깨를 춤추게 만드는 펑크, 디스코와 폭발적인 무대 매너를 가진 밴드.',
    soloDescEn: 'Versatile vocal repertoire covering timeless classics and modern pop.',
    soloDescKo: '시대를 아우르는 명곡과 최신 팝을 넘나드는 올라운더 솔로 씨제이.'
  },
  {
    day: 'THU',
    dayFullEn: 'Thursday',
    dayFullKo: '목요일',
    band: 'STREAMLINE',
    solo: 'JP',
    bandGenre: 'Modern Rock & Indie Pop',
    soloGenre: 'Acoustic Guitar & Vocals',
    bandDescEn: 'Smooth transitions, tight harmonies, and modern indie rock covers.',
    bandDescKo: '세련된 하모니와 모던 록, 인디 팝 커버로 감각적인 무대를 만드는 밴드.',
    soloDescEn: 'Charming acoustic guitar performance with heartfelt vocals by JP.',
    soloDescKo: '감성적인 아쿠스틱 기타와 따뜻한 보컬로 감동을 전하는 제이피.'
  },
  {
    day: 'FRI',
    dayFullEn: 'Friday',
    dayFullKo: '금요일',
    band: 'DIVERSITY',
    solo: 'HEKO',
    bandGenre: 'Multi-Genre Party Anthem',
    soloGenre: 'Soul & Jazz Fusion',
    bandDescEn: 'Friday weekend celebration with high-octane mix of pop, rock, reggae, and K-pop hits!',
    bandDescKo: '불금을 책임지는 다채로운 장르의 축제! 팝, 록, 리듬앤블루스를 넘나드는 최고의 밴드.',
    soloDescEn: 'Deep soulful jazz vocals and magnetic stage charm by Heko.',
    soloDescKo: '깊고 그루브 넘치는 재즈 앤 소울 사운드로 불금의 전주곡을 울리는 헤코.',
    highlight: true
  },
  {
    day: 'SAT',
    dayFullEn: 'Saturday',
    dayFullKo: '토요일',
    band: "KENJI'S HARMONY",
    solo: 'ANGEL',
    bandGenre: 'Stadium Rock & Glam Pop',
    soloGenre: 'Power Vocals & Acoustic',
    bandDescEn: 'Full-spectrum band arrangement, dual lead vocals, and stadium rock energy!',
    bandDescKo: '토요일 밤의 피크타임을 책임지는 최강의 듀얼 보컬 스테디움 록 밴드.',
    soloDescEn: 'Angel returns for Saturday night with acoustic warmth and vocal power.',
    soloDescKo: '토요일 밤 화려하게 귀환하는 엔젤의 파워풀하고 감동적인 라이브 무대.',
    highlight: true
  },
  {
    day: 'SUN',
    dayFullEn: 'Sunday',
    dayFullKo: '일요일',
    band: 'UPSIZE',
    solo: 'RICA',
    bandGenre: '80s-90s Classics & Party Beats',
    soloGenre: 'Chillout Acoustic & RnB',
    bandDescEn: 'Nostalgic 80s & 90s party anthems combined with modern party vibes to wrap up the weekend.',
    bandDescKo: '추억의 8090 팝 히트곡과 신나는 레트로 파티 비트로 일요일 밤을 화려하게 마감.',
    soloDescEn: 'Smooth Sunday vibes with acoustic RnB renditions by Rica.',
    soloDescKo: '일요일 밤을 편안하고 로맨틱하게 감싸주는 리카의 알앤비 라이브.'
  }
];

export const dailyEntertainmentSchedule: DailyTimeSlot[] = [
  {
    time: '5:00 - 7:00 PM',
    performerType: 'Free & Karaoke Time',
    performerTypeKo: '프리 & 가라오케 타임',
    descriptionEn: 'Lounge opens! Enjoy food and drinks while listening to music. Guests are welcome to use the open karaoke machine before the live bands begin.',
    descriptionKo: '매장 오픈! 음악과 함께 맛있는 주류와 안주를 즐기며 자유롭게 노래방 기기를 이용할 수 있는 프리 오픈 타임입니다.',
    graphicType: 'vocal'
  },
  {
    time: '7:00 - 8:30 PM',
    performerType: 'Solo',
    performerTypeKo: '솔로 보컬 / 아쿠스틱',
    descriptionEn: 'Warm acoustic opener setting a relaxed lounge atmosphere as guests arrive.',
    descriptionKo: '은은한 감성 아쿠스틱 기타와 연주로 분위기를 여는 오픈 스테이지.',
    graphicType: 'acoustic'
  },
  {
    time: '8:30 - 10:00 PM',
    performerType: 'Band',
    performerTypeKo: '메인 라이브 밴드 SET 1',
    descriptionEn: 'First high-energy live band set with iconic hits, pop, and rock anthems.',
    descriptionKo: '오늘의 메인 라이브 밴드가 선사하는 첫 번째 라이브 스테이지.',
    graphicType: 'rock'
  },
  {
    time: '10:00 - 10:10 PM',
    performerType: 'Dance',
    performerTypeKo: '스페셜 댄스 퍼포먼스',
    descriptionEn: 'Electrifying 10-minute neon dance performance & visual show.',
    descriptionKo: '화려한 네온 조명 아래 펼쳐지는 스펙터클한 댄스 퍼포먼스.',
    graphicType: 'dance'
  },
  {
    time: '10:10 - 11:30 PM',
    performerType: 'Solo',
    performerTypeKo: '솔로 아티스트 & 게스트',
    descriptionEn: 'Featured soloist showcasing powerful vocal range and guest artist sets.',
    descriptionKo: '솔로 대표 아티스트의 파워풀한 가창력과 고객 신청곡 라이브.',
    graphicType: 'vocal'
  },
  {
    time: '11:30 - 1:00 AM',
    performerType: 'Band',
    performerTypeKo: '메인 라이브 밴드 SET 2 (피크타임)',
    descriptionEn: 'Peak hour band explosion! Crowds singing along and dancing on stage front.',
    descriptionKo: '피크타임을 집어삼키는 메인 밴드의 두 번째 피크타임 파티 세트!',
    graphicType: 'rock'
  },
  {
    time: '1:00 - 2:30 AM',
    performerType: 'Solo',
    performerTypeKo: '심야 솔로 라이브',
    descriptionEn: 'Late-night chill lounge session with soul and acoustic melodies.',
    descriptionKo: '심야의 깊은 감성을 채워주는 어쿠스틱 & 소울 메들리.',
    graphicType: 'acoustic'
  },
  {
    time: '2:30 - 4:00 AM',
    performerType: 'Band',
    performerTypeKo: '미드나잇 파이널 밴드 세트',
    descriptionEn: 'Grand finale party set rocking the house until closing time at 4 AM.',
    descriptionKo: '새벽 4시 마감까지 라운지를 열광의 도가니로 만드는 파이널 록 세트.',
    graphicType: 'dj'
  }
];

export const venueGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    titleEn: 'Main Stage Live Band',
    titleKo: '1층 메인 무대 라이브 밴드',
    category: '1f',
    image: loungeStageImg,
    captionEn: 'Vibrant concert lighting and dynamic audio acoustic setup at 1F Lounge.',
    captionKo: '화려한 레트로 네온 조명과 콘서트급 음향 시설을 갖춘 1층 라이브 무대.'
  },
  {
    id: 'gal-2',
    titleEn: 'Family KTV Deluxe Suite',
    titleKo: '2층 패밀리 KTV 프라이빗 룸',
    category: '2f',
    image: ktvFamilyRoomImg,
    captionEn: 'Soundproof luxury KTV room equipped with disco lighting and karaoke systems.',
    captionKo: '독립된 방음 설비와 최신 반주기, 화려한 미러볼이 갖춰진 2층 KTV 룸.'
  },
  {
    id: 'gal-3',
    titleEn: 'Signature Neon Cocktails',
    titleKo: '시그니처 네온 칵테일 & 위스키',
    category: 'menu',
    image: signatureCocktailsImg,
    captionEn: 'Handcrafted signature cocktails and premium spirit selections.',
    captionKo: '전문 바텐더가 제조하는 시그니처 네온 칵테일과 고급 위스키 라인업.'
  },
  {
    id: 'gal-4',
    titleEn: 'Electric Guitar Solo Performance',
    titleKo: '열정적인 일렉기타 솔로 연주',
    category: 'bands',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Virtuoso guitarists delivering electrifying classic rock covers every night.',
    captionKo: '매일 밤 펼쳐지는 보컬과 핑거링이 빛나는 기타리스트의 라이브 연주.'
  },
  {
    id: 'gal-5',
    titleEn: 'VIP Lounge Table Seating',
    titleKo: '1층 VIP 라운지 테이블',
    category: '1f',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Front-row VIP table experience right in front of the live music performance.',
    captionKo: '무대를 바로 앞에서 관람하며 보틀 서비스 및 서빙을 받는 VIP 테이블.'
  },
  {
    id: 'gal-6',
    titleEn: 'Nightlife Atmosphere & Crowd',
    titleKo: '활기찬 라운지 파티 분위기',
    category: 'all',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Unforgettable party atmosphere filled with glowing music & laughter.',
    captionKo: '앙헬레스 최고의 열기로 가득 찬 세련되고 안전한 나이트라이프 공간.'
  }
];
