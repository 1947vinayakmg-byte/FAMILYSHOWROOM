import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  authUser: { email: string; name: string } | null;
  logout: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  authUser,
  logout
}: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const menAccessories = [
    'Watches', 'Wallets', 'Belts', 'Sunglasses', 'Jewellery', 'Bags',
    'Caps & Hats', 'Scarves', 'Ties', 'Cufflinks', 'Keychains',
    'Grooming Kits', 'Gift Sets', 'Leather', 'Formal'
  ];

  const womenAccessories = [
    'Handbags', 'Jewellery', 'Watches', 'Sunglasses', 'Scarves & Shawls',
    'Perfumes', 'Footwear', 'Hair Accessories', 'Belts', 'Wallets & Clutches',
    'Cosmetics', 'Gift Sets'
  ];

  const kidsAccessories = [
    'Hairbands', 'Mini Bags', 'Watches', 'Caps & Hats', 'Belts',
    'Socks & Booties', 'Sunglasses', 'Bow Ties', 'Jewellery Kits', 'Toys & Gifts'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-45"
          />

          {/* Menu Body */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-80 bg-white shadow-2xl z-50 flex flex-col p-6 border-r border-[#D4AF37]/30"
            id="mobile-drawer-overlay"
          >
            <div className="flex justify-between items-center pb-6 border-b border-gray-100 mb-6">
              <div className="flex flex-col select-none">
                <span className="text-lg font-serif tracking-[0.25em] text-black">DEMO</span>
                <span className="text-[7px] font-sans tracking-widest text-[#C5A880] uppercase">FAMILY SHOWROOM</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-700 hover:text-[#D4AF37] cursor-pointer"
                title="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main routing list */}
            <nav className="flex flex-col gap-5 text-sm uppercase tracking-widest font-sans font-semibold mb-8 pl-2">
              <Link to="/" onClick={onClose} className="hover:text-[#D4AF37] transition-colors py-1 border-b border-gray-50">HOME</Link>
              <Link to="/collection" onClick={onClose} className="hover:text-[#D4AF37] transition-colors py-1 border-b border-gray-50">Couture Collections</Link>
              <Link to="/about" onClick={onClose} className="hover:text-[#D4AF37] transition-colors py-1 border-b border-gray-50">Our Heritage</Link>
              <Link to="/contact" onClick={onClose} className="hover:text-[#D4AF37] transition-colors py-1 border-b border-gray-50">Private Fitting</Link>
            </nav>

            {/* Collections Accordion Segment */}
            <div className="mb-8 pl-2 overflow-y-auto max-h-[45vh] pr-1 select-none scrollbar-thin">
              <h4 className="text-[10px] font-sans font-bold text-gray-400 tracking-[0.25em] uppercase mb-4">Atelier Collections</h4>

              <div className="flex flex-col gap-3">

                {/* 1. Bridal Couture */}
                <div className="border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('bridal')}
                    className="w-full bg-[#FAF7F2] p-3 text-left text-xs uppercase tracking-wider font-sans font-bold text-gray-800 hover:text-[#D4AF37] flex justify-between items-center cursor-pointer"
                  >
                    <span>Bridal Couture</span>
                    {expandedSection === 'bridal' ? <ChevronUp className="w-3.5 h-3.5 text-[#D4AF37]" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                  {expandedSection === 'bridal' && (
                    <div className="bg-white p-3 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-wider text-gray-600 font-sans border-t border-gray-100">
                      {['Lehengas', 'Sarees', 'Anarkalis', 'Gowns', 'Heritage Jewellery'].map((item) => (
                        <Link
                          key={item}
                          to="/collection"
                          onClick={onClose}
                          className="hover:text-[#D4AF37] hover:underline p-1 block"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Men Accessories */}
                <div className="border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('men')}
                    className="w-full bg-[#FAF7F2] p-3 text-left text-xs uppercase tracking-wider font-sans font-bold text-gray-800 hover:text-[#D4AF37] flex justify-between items-center cursor-pointer"
                  >
                    <span>Men Accessories</span>
                    {expandedSection === 'men' ? <ChevronUp className="w-3.5 h-3.5 text-[#D4AF37]" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                  {expandedSection === 'men' && (
                    <div className="bg-white p-3 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-wider text-gray-600 font-sans border-t border-gray-100">
                      {menAccessories.map((item) => (
                        <Link
                          key={item}
                          to="/collection"
                          onClick={onClose}
                          className="hover:text-[#D4AF37] hover:underline p-1 block"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. Women Accessories */}
                <div className="border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('women')}
                    className="w-full bg-[#FAF7F2] p-3 text-left text-xs uppercase tracking-wider font-sans font-bold text-gray-800 hover:text-[#D4AF37] flex justify-between items-center cursor-pointer"
                  >
                    <span>Women Accessories</span>
                    {expandedSection === 'women' ? <ChevronUp className="w-3.5 h-3.5 text-[#D4AF37]" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                  {expandedSection === 'women' && (
                    <div className="bg-white p-3 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-wider text-gray-600 font-sans border-t border-gray-100">
                      {womenAccessories.map((item) => (
                        <Link
                          key={item}
                          to="/collection"
                          onClick={onClose}
                          className="hover:text-[#D4AF37] hover:underline p-1 block"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 4. Kids Accessories */}
                <div className="border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('kids')}
                    className="w-full bg-[#FAF7F2] p-3 text-left text-xs uppercase tracking-wider font-sans font-bold text-gray-800 hover:text-[#D4AF37] flex justify-between items-center cursor-pointer"
                  >
                    <span>Kids Accessories</span>
                    {expandedSection === 'kids' ? <ChevronUp className="w-3.5 h-3.5 text-[#D4AF37]" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                  {expandedSection === 'kids' && (
                    <div className="bg-white p-3 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-wider text-gray-600 font-sans border-t border-gray-100">
                      {kidsAccessories.map((item) => (
                        <Link
                          key={item}
                          to="/collection"
                          onClick={onClose}
                          className="hover:text-[#D4AF37] hover:underline p-1 block"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Signout/Signin context */}
            <div className="mt-auto border-t border-gray-100 pt-6">
              {authUser ? (
                <div className="flex flex-col gap-3 font-sans">
                  <p className="text-[11px] text-gray-450 uppercase">Curating for: <strong>{authUser.name}</strong></p>
                  <button
                    onClick={() => {
                      onClose();
                      logout();
                    }}
                    className="w-full bg-[#111] text-[#D4AF37] border border-[#D4AF37] py-2.5 text-xs font-sans uppercase tracking-[0.2em] rounded-none hover:bg-red-550 hover:text-red-500 cursor-pointer"
                  >
                    Exit Boutique App
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  onClick={onClose}
                  className="block text-center w-full bg-black text-[#D4AF37] py-2.5 text-xs font-sans uppercase tracking-[0.2em]"
                >
                  LOGIN
                </Link>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
