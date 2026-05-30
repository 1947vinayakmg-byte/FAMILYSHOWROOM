import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import lehengas1 from '@/assets/lehengas/lehengas-1.jpg';

export default function CategorySection() {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Wedding Pavilion',
      count: 'Exclusive wedding Couture',
      image: lehengas1,
      badge: 'Kalyanam'
    },
    {
      name: 'Heritage Women',
      count: 'Sarees, Anarkalis & Lehengas',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      badge: 'Weaves of India'
    },
    {
      name: 'Regal Men',
      count: 'Sherwanis, Bandhgalas & Suits',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      badge: 'Savile Row Grade'
    },
    {
      name: 'DEMO Kids',
      count: 'Ethic Silk Brocades & Velvets',
      image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80',
      badge: 'KIDS'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16" id="home-categories-grid">
      <div className="text-center mb-12 select-none">
        <p className="text-[11px] font-sans uppercase text-[#C5A880] tracking-[0.35em] font-bold">STATED STYLING DOMAINS</p>
        <h2 className="text-2xl md:text-4xl font-display text-gray-900 tracking-wider font-normal mt-1.5 uppercase">
          Curated Showroom Pavilions
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3.5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            onClick={() => {
              if (cat.name === 'Wedding Pavilion') {
                navigate('/wedding-pavilion');
              } else if (cat.name === 'Heritage Women') {
                navigate('/women');
              } else if (cat.name === 'Regal Men') {
                navigate('/men');
              } else if (cat.name === 'DEMO Kids') {
                navigate('/kids');
              } else {
                navigate('/collection');
              }
            }}
            className="group relative cursor-pointer overflow-hidden rounded-lg aspect-[4/5] shadow-lg bg-black"
          >
            <img
              src={cat.image}
              alt={cat.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-60 scale-100 group-hover:scale-105 transition-all duration-700"
            />
            {/* Gradient cover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/35 z-10" />

            <span className="absolute top-4 left-4 z-20 bg-white/95 text-black text-[9px] font-sans font-extrabold uppercase py-1 px-2.5 shadow-sm rounded">
              {cat.badge}
            </span>

            {/* Title / details */}
            <div className="absolute bottom-6 left-6 right-6 z-20 text-white flex justify-between items-end">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-base md:text-lg font-display tracking-wider text-white group-hover:text-[#D4AF37] transition-all">{cat.name}</h3>
                <p className="text-[11px] text-gray-200 font-serif italic tracking-wide mt-0.5 leading-tight">{cat.count}</p>
              </div>
              <div className="p-1 px-2.5 bg-[#D4AF37] text-black hover:bg-white rounded transition-colors">
                <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
