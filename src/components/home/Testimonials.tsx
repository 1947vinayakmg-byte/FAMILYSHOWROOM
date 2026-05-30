import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      author: 'Aishwarya Roy Sen',
      role: 'Bride - ITC Grand Bharat Wedding',
      quote: 'The DLF Emporio suite fit for my crimson lehenga was a magical session. The master draper adjusted the zardozi borders within 24 hours. The custom silk is incredibly breathable!'
    },
    {
      author: 'Vikramjit Malhotra',
      role: 'VIP Client - Jubilee Hills Club',
      quote: 'Ordered three bespoke Merino wool Bandhgalas. The fits are Savile Row grade, and the WhatsApp direct styling lines kept me updated daily on thread weaves.'
    },
    {
      author: 'Nisha & Kabir Shah',
      role: 'Family Curation - Bengaluru',
      quote: 'Beautiful velvet dresses for our 6-year-old twins. The cotton lining is extremely soft and did not cause any irritation. DEMO is now our permanent traditional outfit vault.'
    }
  ];

  return (
    <section className="bg-white border-t border-b border-gray-100 py-16" id="home-testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 select-none">
          <p className="text-[11px] font-sans uppercase text-[#C5A880] tracking-[0.35em] font-bold">CUSTOMER REVIEWS & FEEDBACK</p>
          <h2 className="text-2xl md:text-4xl font-display text-gray-900 tracking-wider font-normal mt-1.5 uppercase">
            THE SIGNATURE EXPERIENCE
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3.5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#FAF7F2] p-8 border border-[#EBE3D5] rounded-lg relative hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-6 right-6 text-[#D4AF37]/15">
                <Quote className="w-12 h-12 fill-current" />
              </div>
              <div>
                <div className="flex text-[#D4AF37] gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm md:text-[15px] font-serif italic text-gray-700 tracking-wide leading-relaxed select-text">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 border-t border-[#EBE3D5] pt-4 flex flex-col select-none">
                <span className="text-xs md:text-sm font-display font-medium text-black uppercase tracking-wider">{t.author}</span>
                <span className="text-[9px] text-[#C5A880] font-sans font-bold uppercase tracking-[0.2em] mt-1">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
