import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tag, } from 'lucide-react';
import menBanner from '@/assets/banners/men-banner.jpg';

export default function CountdownPromo() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10800); // 3 hours in seconds

  useEffect(() => {
    // Persistent timer using localStorage
    const key = 'luxury_promo_end_time';
    const savedEndTime = localStorage.getItem(key);
    let endTime: number;

    if (savedEndTime) {
      endTime = parseInt(savedEndTime, 10);
    } else {
      endTime = Date.now() + 3 * 60 * 60 * 1000;
      localStorage.setItem(key, endTime.toString());
    }

    // Set initial state
    const initialDiff = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    setTimeLeft(initialDiff);

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((endTime - now) / 1000));
      setTimeLeft(diff);
      
      if (diff === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format seconds to hh, mm, ss
  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return {
      hrs: String(hrs).padStart(2, '0'),
      mins: String(mins).padStart(2, '0'),
      secs: String(secs).padStart(2, '0'),
    };
  };

  const { hrs, mins, secs } = formatTime(timeLeft);

  return (
    <section className="relative w-full pt-10 pb-0 select-none overflow-hidden" id="countdown-promo-banner">
      {/* 1. Header Timer Section - Placed ABOVE the banner image card */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center mb-8 gap-3">
        <div className="inline-flex items-center gap-3 text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
          
          <span>{timeLeft > 0 ? 'Limited-Time Atelier Privilege Countdown' : 'Exclusive Privilege Notice'}</span>
         
        </div>
        
        {timeLeft > 0 ? (
          /* Clean, Attractive borderless timer text digits */
          <div className="flex items-center gap-4 md:gap-6 p-1">
            <div className="flex flex-col items-center min-w-[50px]">
              <span className="text-3xl md:text-5xl font-serif font-black text-[#000000] tracking-widest">{hrs}</span>
              <span className="text-[8px] md:text-[9px] font-sans text-gray-500 uppercase tracking-widest mt-1">Hours</span>
            </div>
            <span className="text-xl md:text-2xl text-[#27e220] font-bold pb-4 select-none animate-pulse">:</span>
            <div className="flex flex-col items-center min-w-[50px]">
              <span className="text-3xl md:text-5xl font-serif font-bold text-[#050505] tracking-widest">{mins}</span>  
              <span className="text-[8px] md:text-[9px] font-sans text-gray-500 uppercase tracking-widest mt-1">Minutes</span>
            </div>
            <span className="text-xl md:text-2xl text-[#27e220] font-bold pb-4 select-none animate-pulse">:</span>
            <div className="flex flex-col items-center min-w-[50px]">
              <span className="text-3xl md:text-5xl font-serif font-bold text-red-500 tracking-widest animate-pulse">{secs}</span>
              <span className="text-[8px] md:text-[9px] font-sans text-gray-500 uppercase tracking-widest mt-1 text-red-500/80">Seconds</span>
            </div>
          </div>
        ) : (
          <div className="py-2 text-center">
            <span className="text-lg md:text-2xl font-serif font-bold text-red-500 tracking-[0.25em] uppercase animate-pulse flex items-center justify-center gap-2">
              ✦ THIS EXCLUSIVE ATELIER OFFER HAS ENDED ✦
            </span>
          </div>
        )}
      </div>

      {/* 2. Full-Width Banner Image Card - Edge to Edge, side to side */}
      <div className="relative border-t border-b border-[#D4AF37]/20 bg-black min-h-[380px] md:min-h-[480px] flex flex-col justify-between p-8 md:p-14 px-6 md:px-16 lg:px-24">
        
        {/* Background Image - Men Banner - Clear and interactive */}
        <div className="absolute inset-0 bg-cover bg-center pointer-events-none transition-transform duration-[10s] hover:scale-105"
          style={{ backgroundImage: `url(${menBanner})` }}
        />

        {/* Gradient overlay for clear text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/25 to-black/60 z-10 pointer-events-none" />

        {/* Top Section inside card: Just the Sales Pitch Text */}
        <div className="relative z-20 flex justify-start w-full">
          <div className="max-w-md text-left space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Atelier Couture Special
            </div>
            <h2 className="text-2xl md:text-4xl font-serif text-white tracking-wider uppercase font-light leading-tight">
              {timeLeft > 0 ? 'EXCLUSIVE ATELIER DISCOUNTS' : 'ATELIER OFFER EXPIRED'}
            </h2>
            <p className="text-xs md:text-sm text-gray-300 font-sans tracking-wide leading-relaxed">
              {timeLeft > 0 ? (
                <>Unlock an unprecedented <span className="text-white font-bold underline decoration-[#D4AF37] decoration-2">40% Atelier Discount</span> on our entire curated showroom masterworks.</>
              ) : (
                <>This private boutique pricing event has closed. Explore our standard curated selections below.</>
              )}
            </p>
          </div>
        </div>

        {/* Bottom Section inside card: CTA button */}
        <div className="relative z-20 flex justify-start w-full">
          <button
            onClick={() => {
              if (timeLeft > 0) {
                navigate('/collection');
              }
            }}
            disabled={timeLeft === 0}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl text-center text-[10px] md:text-xs uppercase tracking-[0.25em] font-sans font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 border ${
              timeLeft > 0
                ? 'bg-white hover:bg-[#D4AF37] text-black hover:text-black hover:shadow-2xl border-white hover:border-[#D4AF37] transform active:scale-95 cursor-pointer'
                : 'bg-[#1C1C1C] text-zinc-500 border-zinc-800 cursor-not-allowed shadow-none'
            }`}
          >
            <Tag className="w-3.5 h-3.5 text-zinc-500" />
            {timeLeft > 0 ? 'Claim 40% Off Couture' : 'Atelier Offer Closed'}
          </button>
        </div>

      </div>
    </section>
  );
}
