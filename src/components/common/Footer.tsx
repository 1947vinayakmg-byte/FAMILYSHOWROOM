import React, { useState } from 'react';
import { Mail, Phone, MapPin, Landmark, Award, ShieldCheck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function Footer() {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    showToast(`Your email (${email}) has been logged in our VIP styling database.`, 'success');
    setEmail('');
  };

  return (
    <footer className="bg-[#0D0D0D] text-gray-400 font-sans text-xs pt-16 pb-24 md:pb-12 border-t border-[#D4AF37]/20" id="showroom-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Column 1: Heritage Brand Pitch */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="flex flex-col select-none">
            <span className="text-xs md:text-sm font-script text-[#D4AF37] lowercase tracking-widest -mb-1.5">atelier</span>
            <span className="text-2xl md:text-3.5xl font-display tracking-[0.22em] text-[#D4AF37] font-normal leading-none">DEMO</span>
            <span className="text-[7px] md:text-[8px] font-sans tracking-[0.45em] text-gray-400 uppercase mt-0.5 font-bold">FAMILY SHOWROOM</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-[11px] max-w-sm">
            For three generations, compiling fine looms and weaving imperial memories. We celebrate family occasions, bridal grandeur, luxury tailored tuxedos, and opulent kid festive apparel with absolute bespoke care.
          </p>
          <div className="flex flex-col gap-2 mt-2 text-[11px] text-gray-300">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#C5A880]" /> Flagship Store: Bagalkot, Karnataka, INDIA</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#C5A880]" /> +91 6360510473</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#C5A880]" /> [EMAIL_ADDRESS]</span>
          </div>
        </div>

        {/* Column 2: Portfolios */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs tracking-[0.25em] uppercase font-bold border-b border-gray-800 pb-2">The Catalogues</h4>
          <ul className="flex flex-col gap-2.5 text-gray-400 text-[11px]">
            <li className="hover:text-[#D4AF37] transition-colors"><a href="/collection">Bridal Silk Sarees</a></li>
            <li className="hover:text-[#D4AF37] transition-colors"><a href="/collection">Handcrafted Lehengas</a></li>
            <li className="hover:text-[#D4AF37] transition-colors"><a href="/collection">Royal Grooms Sherwanis</a></li>
            <li className="hover:text-[#D4AF37] transition-colors"><a href="/collection">Italian Men Suits</a></li>
            <li className="hover:text-[#D4AF37] transition-colors"><a href="/collection">Kids Silk Brocades</a></li>
            <li className="hover:text-[#D4AF37] transition-colors"><a href="/collection">Wedding Heritage Troussau</a></li>
          </ul>
        </div>

        {/* Column 3: Flagships Locations */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs tracking-[0.25em] uppercase font-bold border-b border-gray-800 pb-2">THE FAMILY</h4>
          <ul className="flex flex-col gap-2.5 text-gray-400 text-[11px]">
            <li>BAGALKOT, KARNATAKA</li>
            <li className="text-[#C5A880]">Virtual VR Showrooms (By Booking)</li>
          </ul>
        </div>

        {/* Column 4: Newsletter Sign-up */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs tracking-[0.25em] uppercase font-bold border-b border-gray-800 pb-2">WEDDING CURATION</h4>
          <p className="text-[11px] leading-relaxed text-gray-400">
            Sign up to receive limited access notifications, couture previews, and invitations to showroom fits.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER CLIENT EMAIL"
              className="bg-black border border-gray-800 text-white placeholder-gray-600 p-2.5 outline-none focus:border-[#D4AF37] text-[10px] tracking-wider uppercase font-sans"
              required
            />
            <button
              type="submit"
              className="bg-[#D4AF37] hover:bg-white text-black py-2.5 text-[10px] tracking-[0.25em] uppercase font-bold transition-colors cursor-pointer"
            >
              Request Access
            </button>
          </form>
        </div>
      </div>

      {/* Decorative Golden Line Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 my-10">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent shadow-sm" />
      </div>

      {/* Trust Signups and Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Small trust assertions */}
        <div className="flex flex-wrap items-center gap-6 text-[10px] text-gray-500 font-sans tracking-wider uppercase">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Razorpay Partner Encrypted Gateway</span>
          <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[#D4AF37]" /> 100% Weave Certified Silk Mark</span>
          <span className="flex items-center gap-1.5"><Landmark className="w-4 h-4 text-[#D4AF37]" /> Heritage Showroom of the Year Winner</span>
        </div>

        {/* Copyright claims */}
        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-sans text-center md:text-right flex flex-col gap-1">
          <span>&copy; {new Date().getFullYear()} DEMO Ltd. All Rights Reserved.</span>
          <span className="text-[9px] text-gray-600">Handcrafted Bridal & Ceremonial Wear for Discerning Families.</span>
        </div>
      </div>
    </footer>
  );
}
