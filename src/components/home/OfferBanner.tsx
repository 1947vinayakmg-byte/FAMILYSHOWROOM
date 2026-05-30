import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, Trophy } from 'lucide-react';

export default function OfferBanner() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-[#171410] to-[#0A0A0A] text-white py-20 px-6 md:px-12 relative overflow-hidden" id="home-wedding-banner">
      {/* Soft background luxury gold pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-3/5 flex flex-col items-start gap-5 select-none">
          <div className="flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/45 px-3.5 py-1.5 rounded">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]/20 animate-pulse" />
            <span className="text-[9px] font-sans tracking-[0.25em] text-[#D4AF37] font-bold uppercase">
              10,000+ Happy Families &amp; Grand Weddings Served
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display tracking-wider text-white leading-tight font-normal uppercase">
            Vows of Grandeur: Draping Our Celebrated Families
          </h2>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl font-serif italic">
            From majestic royal palaces to elite high-society hotel ballrooms, we have been profoundly honored to weave standard-setting memories for over 10,000+ happy couples. Every stitch in our custom lehengas and royal sherwanis carries a lifetime of family joy, pure silk credentials, and traditional master-weaver heritage.
          </p>

          {/* Luxury Metrics block */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4 font-mono text-[10px] text-[#C5A880] uppercase tracking-wider">
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#D4AF37]/40 transition-colors flex flex-col items-center gap-1 text-center">
              <Trophy className="w-5 h-5 text-[#D4AF37] mb-1" />
              <span className="block text-white text-lg font-display font-medium">10,000+</span>
              <span>Happy Brides &amp; Grooms</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#D4AF37]/40 transition-colors flex flex-col items-center gap-1 text-center">
             
              <span className="block text-white text-lg font-display font-medium">99.8%</span>
              <span>Flawless Custom Fit</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#D4AF37]/40 transition-colors flex flex-col items-center gap-1 text-center">
              <Star className="w-5 h-5 text-[#D4AF37] mb-1" />
              <span className="block text-white text-lg font-display font-medium">45+</span>
              <span>Global Cities Served</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#D4AF37]/40 transition-colors flex flex-col items-center gap-1 text-center">
              <Heart className="w-5 h-5 text-[#D4AF37] mb-1" />
              <span className="block text-white text-lg font-display font-medium">3 Gen</span>
              <span>Legacy of Trust</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4 w-full">
            <button
              onClick={() => navigate('/wedding-pavilion')}
              className="px-8 py-3.5 bg-white hover:bg-[#D4AF37] text-black font-semibold font-sans uppercase tracking-[0.2em] text-[11px] transition-colors duration-300 rounded-none shadow-xl cursor-pointer"
            >
              Explore Wedding Pavilion
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-black/40 hover:bg-black text-white border border-white/30 hover:border-[#D4AF37] font-sans uppercase tracking-[0.2em] text-[11px] transition-colors duration-300 backdrop-blur-md rounded-none cursor-pointer"
            >
              Book fitting Suite
            </button>
          </div>
        </div>

        {/* Right Side Overlapping Happy Customer Collage */}
        <div className="w-full lg:w-2/5 flex items-center justify-center min-h-[380px] md:min-h-[420px] relative mt-10 lg:mt-0">
          
          {/* Card 1: Main background, tilted left */}
          <div className="absolute w-[220px] md:w-[260px] aspect-[3/4] rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-[-8deg] -translate-x-12 translate-y-[-10px] hover:rotate-0 hover:z-30 transition-all duration-500 hover:scale-105 group/card1">
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80"
              alt="Elite Indian Bride and Groom Smiling"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[20%] group-hover/card1:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-3 left-3 text-[8px] font-sans font-bold tracking-widest text-[#D4AF37] bg-black/85 border border-[#D4AF37]/30 px-2 py-0.5 rounded uppercase">
              Shreya &amp; Rohan
            </span>
          </div>

          {/* Card 2: Foreground overlay, tilted right */}
          <div className="absolute w-[210px] md:w-[250px] aspect-[3/4] rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-[6deg] translate-x-16 translate-y-[30px] z-20 hover:rotate-0 hover:z-30 transition-all duration-500 hover:scale-105 group/card2">
            <img
              src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=600&q=80"
              alt="Opulent Royal Indian Couple laughing"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover/card2:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-3 left-3 text-[8px] font-sans font-bold tracking-widest text-[#D4AF37] bg-black/85 border border-[#D4AF37]/30 px-2 py-0.5 rounded uppercase">
              Aditi &amp; Vikram
            </span>
          </div>

          {/* Card 3: Small focal point overlay */}
          <div className="absolute w-[120px] md:w-[140px] aspect-square rounded-full overflow-hidden border-4 border-[#171410] shadow-2xl z-30 translate-x-[-70px] translate-y-[110px] hover:scale-110 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
              alt="Happy customer close-up detail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Gold Seal stamp */}
          <div className="absolute bottom-[-10px] right-[-10px] md:right-[10px] z-30 bg-[#D4AF37] text-black w-20 h-20 rounded-full flex flex-col items-center justify-center p-2 text-center shadow-2xl animate-spin-slow border-2 border-white/20 select-none">
            <span className="text-[7px] font-sans font-black tracking-widest leading-none uppercase">100% WEAVE</span>
            <span className="text-[8px] font-serif font-bold my-0.5">CERTIFIED</span>
            <span className="text-[6px] font-sans font-semibold tracking-widest leading-none uppercase text-black/70">SILK MARK</span>
          </div>

        </div>

      </div>
    </section>
  );
}
