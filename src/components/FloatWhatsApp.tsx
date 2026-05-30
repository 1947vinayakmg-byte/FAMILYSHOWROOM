import React, { useState } from 'react';
import { MessageSquare, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const triggerScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3" id="floating-actions-container">
      {/* Scroll to Top */}
      <button
        onClick={triggerScrollTop}
        className="p-3 bg-white hover:bg-black text-black hover:text-white border border-gray-200 shadow-xl transition-all duration-300 rounded cursor-pointer group"
        id="btn-back-to-top"
        title="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </button>

      {/* WhatsApp VIP Agent */}
      <div className="relative flex items-center">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="mr-3 bg-black/95 text-white border border-[#D4AF37]/30 px-4 py-2.5 shadow-2xl relative max-w-[200px] rounded"
              id="whatsapp-tooltip-box"
            >
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-1 right-1 text-gray-400 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
              <h4 className="text-[10px] font-sans text-[#D4AF37] uppercase tracking-wider font-bold mb-0.5">
                VIP Boutique Stylist
              </h4>
              <p className="text-[9px] font-sans text-gray-300 leading-tight">
                Online now. Tap for bespoke sizing, bridal custom curation or virtual showrooms.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href="https://wa.me/919999999999?text=Hello%20DEMO%20Showroom!%20I%20am%20interested%20in%20customizing%20a%20bridal/wedding%20outfit."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1ebd5d] transition-transform hover:scale-110 duration-300"
          id="btn-whatsapp-float"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>
      </div>
    </div>
  );
}
