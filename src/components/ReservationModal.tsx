import React, { useState } from 'react';
import { Language, ReservationFormData } from '../types';
import { translations } from '../data/translations';
import { vipPackages } from '../data/menuData';
import { X, Calendar, Clock, Users, Mic, Disc, CheckCircle, Copy, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialFloor?: '1F' | '2F';
  initialPackageId?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialFloor = '1F',
  initialPackageId = ''
}) => {
  const t = translations[lang].reservation;

  const [floor, setFloor] = useState<'1F' | '2F'>(initialFloor);
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState<string>('20:00');
  const [partySize, setPartySize] = useState<number>(4);
  const [name, setName] = useState<string>('');
  const [contactType, setContactType] = useState<'KakaoTalk' | 'WhatsApp' | 'Phone' | 'Email'>('KakaoTalk');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [packageId, setPackageId] = useState<string>(initialPackageId);
  const [specialRequests, setSpecialRequests] = useState<string>('');
  
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'GA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setSubmitted(true);
  };

  const selectedPkg = vipPackages.find((p) => p.id === packageId);

  const getSummaryText = () => {
    return `[Glee Angels Reservation Request]
Ref: ${bookingRef}
Name: ${name}
Floor: ${floor} (${floor === '1F' ? 'Live Band Lounge' : 'Family KTV'})
Date/Time: ${date} @ ${time}
Party: ${partySize} Guests
Contact: ${contactType} - ${contactNumber}
Package: ${selectedPkg ? selectedPkg.titleEn : 'A La Carte / Standard Table'}
Notes: ${specialRequests || 'None'}`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openKakaoChat = () => {
    window.open(`https://open.kakao.com/me/GleeAngeles`, '_blank');
  };

  const openWhatsAppChat = () => {
    const text = encodeURIComponent(getSummaryText());
    window.open(`https://wa.me/639171234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl glass-panel border border-cyan-500/40 rounded-3xl p-6 sm:p-8 my-8 shadow-2xl neon-border-blue animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-pink-500 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>REAL-TIME BOOKING CONCIERGE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-mono">
                {t.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                {t.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Floor Selection */}
              <div>
                <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
                  {t.step1}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFloor('1F')}
                    className={`p-4 rounded-xl border text-left flex items-center space-x-3 transition-all cursor-pointer ${
                      floor === '1F'
                        ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-md shadow-cyan-500/20'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <Mic className={`w-6 h-6 ${floor === '1F' ? 'text-cyan-400' : 'text-zinc-500'}`} />
                    <div>
                      <p className="font-bold text-sm">{lang === 'ko' ? '1F 라이브 밴드 라운지' : '1F Live Band Lounge'}</p>
                      <p className="text-[10px] text-zinc-400">{lang === 'ko' ? '메인 홀 및 라이브 스테이지' : 'Main Hall & Live Stage'}</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFloor('2F')}
                    className={`p-4 rounded-xl border text-left flex items-center space-x-3 transition-all cursor-pointer ${
                      floor === '2F'
                        ? 'bg-pink-950/80 border-pink-400 text-white shadow-md shadow-pink-500/20'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <Disc className={`w-6 h-6 ${floor === '2F' ? 'text-pink-400' : 'text-zinc-500'}`} />
                    <div>
                      <p className="font-bold text-sm">{lang === 'ko' ? '2F 노래방 (패밀리 KTV)' : '2F Family KTV'}</p>
                      <p className="text-[10px] text-zinc-400">{lang === 'ko' ? '프라이빗 룸' : 'Private Karaoke Room'}</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 2: Date, Time & Guests */}
              <div>
                <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
                  {t.step2}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] text-zinc-400 mb-1 block">{t.dateLabel}</label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-zinc-400 mb-1 block">{t.timeLabel}</label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="19:00">07:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="21:00">09:00 PM</option>
                      <option value="22:00">10:00 PM</option>
                      <option value="23:00">11:00 PM</option>
                      <option value="00:00">12:00 AM Midnight</option>
                      <option value="01:00">01:00 AM</option>
                      <option value="02:00">02:00 AM</option>
                      <option value="03:00">03:00 AM</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] text-zinc-400 mb-1 block">{t.partyLabel}</label>
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(Number(e.target.value))}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                        <option key={num} value={num}>
                          {num} Guests ({num}명)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Package Selection */}
              <div>
                <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
                  VIP Package (Optional)
                </label>
                <select
                  value={packageId}
                  onChange={(e) => setPackageId(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="">Standard Table / Room (A La Carte Ordering)</option>
                  {vipPackages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      [{pkg.floor}] {pkg.titleEn} - ₱{pkg.pricePhp.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Contact Info */}
              <div>
                <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
                  {t.step3}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-[11px] text-zinc-400 mb-1 block">{t.nameLabel}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kim Min-jun / John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-zinc-400 mb-1 block">{t.contactTypeLabel}</label>
                    <select
                      value={contactType}
                      onChange={(e) => setContactType(e.target.value as any)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="KakaoTalk">KakaoTalk (카카오톡)</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone">Phone Call / SMS</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 mb-1 block">{t.contactNumberLabel}</label>
                  <input
                    type="text"
                    required
                    placeholder="KakaoTalk ID or Phone Number (+63 or +82)"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-[11px] text-zinc-400 mb-1 block">{t.requestsLabel}</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Birthday celebration cake setup, song request, preferred table position"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 hover:from-pink-500 hover:to-cyan-400 text-white font-bold text-base shadow-lg shadow-pink-500/30 transition-all cursor-pointer"
              >
                {t.submit}
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Receipt View */
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white font-mono neon-text-blue">
                {t.successTitle}
              </h3>
              <p className="text-xs text-zinc-300 mt-1 max-w-md mx-auto">
                {t.successDesc}
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-cyan-500/30 text-left space-y-2 font-mono text-xs text-zinc-300">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">{t.refNo}:</span>
                <span className="font-bold text-pink-400">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Name:</span>
                <span className="text-white font-bold">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Floor & Area:</span>
                <span className="text-cyan-300 font-bold">{floor} ({floor === '1F' ? (lang === 'ko' ? '라이브 밴드 라운지' : 'Live Band Lounge') : (lang === 'ko' ? '노래방 (패밀리 KTV)' : 'Family KTV')})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Date & Time:</span>
                <span className="text-white">{date} @ {time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Guests:</span>
                <span className="text-white">{partySize} Persons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Contact:</span>
                <span className="text-white">{contactType}: {contactNumber}</span>
              </div>
              {selectedPkg && (
                <div className="flex justify-between pt-2 border-t border-zinc-800">
                  <span className="text-zinc-500">Package:</span>
                  <span className="text-amber-400 font-bold">{selectedPkg.titleEn}</span>
                </div>
              )}
            </div>

            {/* Quick Messaging Actions */}
            <div className="space-y-3 pt-2">
              <p className="text-xs text-zinc-400">
                빠른 확인을 위해 카카오톡 또는 WhatsApp으로 메세지를 바로 보내실 수 있습니다:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={openKakaoChat}
                  className="py-3 px-4 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] text-[#3c1e1e] font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#3c1e1e]" />
                  <span>{t.quickKakao}</span>
                </button>

                <button
                  onClick={openWhatsAppChat}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>{t.quickWhatsapp}</span>
                </button>
              </div>

              <button
                onClick={handleCopySummary}
                className="w-full py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-cyan-400 text-zinc-300 hover:text-white text-xs font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5 text-cyan-400" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Reservation Summary'}</span>
              </button>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs cursor-pointer mt-4"
            >
              {t.close}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
