import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Info, AlertTriangle, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Toast() {
  const { toast, hideToast } = useShop();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed top-24 right-4 md:right-8 z-50 flex items-center gap-3 bg-[#111] text-white px-5 py-3.5 shadow-2xl border border-[#D4AF37]/30 backdrop-blur-md max-w-sm rounded"
          id="toast-container"
        >
          {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-[#C5A880] shrink-0" />}
          {toast.type === 'error' && <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />}
          
          <p className="text-xs font-sans tracking-wide text-gray-200">{toast.message}</p>
          
          <button
            onClick={hideToast}
            className="text-gray-400 hover:text-white transition-colors duration-200 ml-2"
            id="toast-close-btn"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
