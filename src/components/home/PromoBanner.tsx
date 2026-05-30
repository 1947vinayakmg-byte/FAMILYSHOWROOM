import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Percent } from 'lucide-react';
import { motion } from 'motion/react';
import demo1 from '@/assets/banners/DEMO-1.JPG';

export default function PromoBanner() {
  return (
    <>
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-10 select-none overflow-hidden pb-4">
        {/* Container with golden luxury styling and abstract backdrop */}
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-black min-h-[220px] sm:min-h-[350px] md:min-h-[520px] flex items-end p-5 sm:p-8 md:p-12">
          
          {/* Glamorous ambient light background overlays - Now clear and full opacity */}
          <div className="absolute inset-0 bg-cover bg-center pointer-events-none transition-transform duration-[10s] hover:scale-105"
            style={{ backgroundImage: `url(${demo1})` }}
          />
          
          {/* Ambient radial glow/shadow just at the bottom to give contrast to the button */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

          {/* Call to action button positioned at the bottom left corner */}
          <Link
            to="/collection"
            className="relative z-20 w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-4 bg-white hover:bg-[#D4AF37] text-black hover:text-black rounded-xl text-center text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] font-sans font-bold transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 transform active:scale-95 border border-white hover:border-[#D4AF37]"
          >
            UNLOCK COUTURE COLLECTION <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Premium Infinite Looping Ticker Bar - Full Width, Edge-to-Edge */}
      <div className="relative w-full overflow-hidden bg-[#0A0A0A] py-5 border-y border-[#D4AF37]/30 select-none shadow-[0_0_20px_rgba(212,175,55,0.05)] my-10">
        <style>{`
          @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-marquee-loop {
            animation: marquee 28s linear infinite;
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }
        `}</style>

        <div className="flex whitespace-nowrap animate-marquee-loop text-white select-none items-center">
          {/* Loop Content Block 1 */}
          <div className="inline-flex items-center gap-16 px-8 text-xs md:text-sm font-serif uppercase tracking-[0.3em]">
            <span className="text-[#D4AF37] font-bold flex items-center gap-3">
              <span className="inline-block animate-spin-slow text-[#D4AF37]">✦</span> HURRY UP! ONLY FEW LEFT
            </span>
            <span className="text-white font-light flex items-center gap-3">
              <span className="text-[#D4AF37]/60">✧</span> SECURE YOUR EXCLUSIVE ATELIER WEAVES
            </span>
            <span className="text-[#E53E3E] font-medium flex items-center gap-3">
              <span className="inline-block animate-spin-slow text-[#E53E3E]">✦</span> HIGH DEMAND: SELLING OUT RAPIDLY
            </span>
            <span className="text-[#D4AF37] font-bold flex items-center gap-3">
              <span className="text-[#D4AF37]/60">✧</span> LIMITED LUXURY DISCOUNTS END SOON
            </span>
          </div>
          {/* Loop Content Block 2 */}
          <div className="inline-flex items-center gap-16 px-8 text-xs md:text-sm font-serif uppercase tracking-[0.3em]" aria-hidden="true">
            <span className="text-[#D4AF37] font-bold flex items-center gap-3">
              <span className="inline-block animate-spin-slow text-[#D4AF37]">✦</span> HURRY UP! ONLY FEW LEFT
            </span>
            <span className="text-white font-light flex items-center gap-3">
              <span className="text-[#D4AF37]/60">✧</span> SECURE YOUR EXCLUSIVE ATELIER WEAVES
            </span>
            <span className="text-[#E53E3E] font-medium flex items-center gap-3">
              <span className="inline-block animate-spin-slow text-[#E53E3E]">✦</span> HIGH DEMAND: SELLING OUT RAPIDLY
            </span>
            <span className="text-[#D4AF37] font-bold flex items-center gap-3">
              <span className="text-[#D4AF37]/60">✧</span> LIMITED LUXURY DISCOUNTS END SOON
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
