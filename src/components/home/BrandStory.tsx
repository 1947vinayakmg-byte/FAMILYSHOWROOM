import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function BrandStory() {
  const navigate = useNavigate();

  const tickerItems = [
    { text: "Up to 30% off on all products", icon: "🎁" },
    { text: "Free delivery on orders above ₹5,000", icon: "🚚" },
    { text: "COD available", icon: "📦" },
    { text: "Easy Returns & Exchanges", icon: "🔄" },
    { text: "24/7 Customer Support", icon: "📞" },
    { text: "100% Authentic Silk", icon: "🧵" },
    { text: "Handloom Mark Certified", icon: "🕉️" },
    { text: "Pan-India Shipping & Fittings", icon: "📍" },
    { text: "OFFER CLOSES SOON ", icon: "⏳" },
  ];

  return (
    <>
    {/* This line is intentionally left blank to maintain the layout */}
      <section className="bg-[#FAF7F2] pt-16 pb-12 px-6 md:px-12" id="home-brand-manifesto">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-5 select-none">
          <span className="text-2xl md:text-3.5xl font-script text-[#C5A880] tracking-wide select-none lowercase">Three Generations of Weaving Memoirs</span>
          <p className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.45em] text-gray-400 font-bold -mt-3">
            ESTABLISHED 1976
          </p>

          <h3 className="text-2xl md:text-4.5xl font-display text-gray-900 leading-[1.2] tracking-wide font-normal max-w-3xl mt-2 select-none uppercase">
            We Partner Directly With State-Supported Weaver Chambers to Keep Silks Pure
          </h3>

          <p className="text-xs md:text-base font-serif italic tracking-wide text-gray-600 max-w-2xl leading-relaxed mt-2 select-none">
            From grandfather's wooden Varanasi handloom chamber in 1976 to our double-warp temple silks in Kanchipuram, our family rejects cheap synthetics and mass-produced automation. Each lehenga and sherwani is verified with Silk Mark credentials.
          </p>

          <button
            onClick={() => navigate('/about')}
            className="mt-2 text-xs font-serif font-black text-[#D4AF37] hover:text-black tracking-widest uppercase hover:underline transition-colors cursor-pointer"
          >
            Read Complete Chronicles
          </button>
        </div>
      </section>

      {/* Luxury Inset Infinite Looping Card replacing the boring static line */}
      <div className="w-full bg-[#FAF7F2] pb-6 border-b border-gray-100/30 overflow-hidden" id="marquee-divider-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative w-full overflow-hidden bg-white hover:bg-[#FAF7F2] border border-[#C5A880]/20 rounded-xl py-4 px-2 shadow-sm transition-all duration-300 group/marquee">
            {/* Soft gradient blur overlays on left and right */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white group-hover/marquee:from-[#FAF7F2] to-transparent z-10 pointer-events-none transition-colors duration-300" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white group-hover/marquee:from-[#FAF7F2] to-transparent z-10 pointer-events-none transition-colors duration-300" />
            
            <div className="animate-marquee flex gap-16 items-center">
              {/* Set 1 */}
              <div className="flex shrink-0 items-center gap-16">
                {tickerItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-[#C5A880] text-sm filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">{item.icon}</span>
                    <span className="text-[10px] md:text-xs font-sans font-semibold tracking-[0.2em] text-gray-700 uppercase whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              {/* Set 2 (Duplicate for continuous loop) */}
              <div className="flex shrink-0 items-center gap-16" aria-hidden="true">
                {tickerItems.map((item, idx) => (
                  <div key={`dup-${idx}`} className="flex items-center gap-3">
                    <span className="text-[#C5A880] text-sm filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">{item.icon}</span>
                    <span className="text-[10px] md:text-xs font-sans font-semibold tracking-[0.2em] text-gray-700 uppercase whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
