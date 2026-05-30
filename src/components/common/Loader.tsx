import React from 'react';
import { motion } from 'motion/react';

export default function Loader() {
  return (
    <div
      className="fixed inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center z-50 pointer-events-none"
      id="global-luxury-loader"
    >
      <div className="relative flex flex-col items-center overflow-hidden">
        {/* Decorative Luxury Frame */}
        <motion.div
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: [0, 0.4, 0.8, 0.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 border border-dashed border-[#D4AF37]/50 rounded-full flex items-center justify-center p-2 mb-4"
        />

        {/* Brand Text Entrance */}
        <div className="absolute inset-x-0 top-7 flex justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-lg font-sans tracking-[0.25em] text-[#D4AF37] font-medium uppercase"
          >
            DEMO
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 1, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[9px] font-sans tracking-[0.3em] text-[#C5A880] uppercase mt-2"
        >
          Curating Elegance
        </motion.p>
      </div>
    </div>
  );
}
