import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {  ArrowRight, ShieldCheck } from 'lucide-react';

interface WelcomeCoverProps {
  onEnter: () => void;
}

export default function WelcomeCover({ onEnter }: WelcomeCoverProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnterClick = () => {
    setIsExiting(true);
    // Smooth transition buffer before dismissing the gateway screen
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100vh' }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.85 }}
          className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden"
          id="boutique-entrance-gate"
        >
          {/* Full-bleed, atmospheric royal wedding drape background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-45 pointer-events-none scale-105 animate-pulse-slow" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1800&q=80')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-transparent to-[#0A0A0A]" />
          </div>

          {/* Top border decor */}
          <div className="relative z-10 w-full flex justify-center items-center text-[9px] text-[#C5A880] tracking-[0.4em] uppercase font-sans border-b border-[#D4AF37]/20 pb-4">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Silk Mark Certified Heritage</span>
            </div>
          </div>

          {/* Central Sovereign Branding Monogram */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto max-w-2xl mx-auto gap-4">
            
            {/* Crown emblem flourish */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="w-16 h-16 border border-[#D4AF37] rounded-full flex items-center justify-center p-3 text-[#D4AF37] mb-2"
            >
              <img
                src="/logo.png"
                alt="Company Logo"
                className="w-20 h-20 object-contain"
              />
            </motion.div>

            {/* Welcome text */}
            <span className="text-xl md:text-2xl font-script text-[#C5A880] lowercase tracking-widest select-none">
              Welcome to the World of
            </span>

            {/* Giant Luxury DEMO Name */}
            <motion.h1
              initial={{ letterSpacing: '0.1em', opacity: 0 }}
              animate={{ letterSpacing: '0.28em', opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
              className="text-5xl md:text-8xl font-display text-white leading-none font-normal uppercase drop-shadow-[0_4px_12px_rgba(212,175,55,0.15)] ml-4"
            >
              DEMO
            </motion.h1>

            <span className="text-[10px] md:text-xs font-sans tracking-[0.45em] text-[#C5A880] uppercase mt-2 font-bold">
              ATELIER &amp; HERITAGE FAMILY SHOWROOM
            </span>

            <p className="text-xs text-gray-300 font-serif italic max-w-md mt-6 leading-relaxed">
              Weaving three generations of high-society memoirs across luxury bridal lehengas, monarch groom sherwanis, and fine children silk brocades.
            </p>

            {/* Glowing Golden entrance key button */}
            <motion.button
              onClick={handleEnterClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 px-10 py-4.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black font-sans font-bold uppercase tracking-[0.25em] text-[10px] shadow-2xl transition-all rounded-none cursor-pointer flex items-center gap-2 group/btn relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Enter The Atelier <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity" />
            </motion.button>

          </div>

          {/* Footer credentials info */}
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-center items-center gap-3 text-[8px] text-[#A08560] tracking-[0.3em] uppercase font-sans border-t border-[#D4AF37]/20 pt-4 text-center">
            <span className="md:absolute md:left-0">Est. 1976 &bull; Handwoven in India</span>
            <span className="font-semibold text-[#D4AF37]">Three Generations of Master-Weaver Memoirs</span>
            <span className="md:absolute md:right-0">Bagalkot</span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
