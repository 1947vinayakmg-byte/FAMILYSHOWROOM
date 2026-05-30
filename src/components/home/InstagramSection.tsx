import React from 'react';
import { Camera } from 'lucide-react';

export default function InstagramSection() {
  const instagramFeed = [
    'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16" id="home-instagram">
      <div className="text-center mb-10 select-none">
        <p className="text-[11px] font-sans uppercase text-[#C5A880] tracking-[0.3em] font-bold">THE ATELIER GRID</p>
        <h2 className="text-2xl md:text-4xl font-serif text-gray-900 tracking-wide font-light mt-1.5 uppercase">
          Client Fitting Chronicles
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3.5" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {instagramFeed.map((imgUrl, i) => (
          <div
            key={i}
            className="aspect-square bg-gray-150 border border-gray-200 rounded-lg overflow-hidden group relative cursor-pointer shadow"
          >
            <img
              src={imgUrl}
              alt={`Client Fitting Share ${i + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Soft Hover Mask */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-1 font-sans">
              <Camera className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[9px] uppercase tracking-widest font-bold">@DEMO</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
