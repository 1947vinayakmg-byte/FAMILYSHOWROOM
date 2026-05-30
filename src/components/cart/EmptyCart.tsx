import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function EmptyCart() {
  return (
    <div className="bg-[#FAF7F2] min-h-[60vh] flex flex-col items-center justify-center p-6 text-center select-none" id="cart-view-empty">
      <div className="p-4 bg-white border border-gray-100 rounded-full text-[#C5A880] mb-4 shadow">
        <ShoppingBag className="w-10 h-10" />
      </div>
      <h2 className="text-xl md:text-2xl font-serif text-gray-800 uppercase tracking-widest mb-2 font-light">
        Your Atelier Basket is Open
      </h2>
      <p className="text-xs text-gray-400 font-sans uppercase mb-6 max-w-sm tracking-wide leading-relaxed">
        You haven't held any premium weaves or bridal wedding options in your active bag yet. Explore our royal catalogues to reserve yours.
      </p>
      <Link
        to="/collection"
        className="bg-black hover:bg-[#D4AF37] text-white hover:text-black px-10 py-3.5 text-xs font-sans uppercase font-bold tracking-[0.2em] transition-all rounded-none shadow-md"
      >
        Discover Couture Garments
      </Link>
    </div>
  );
}
