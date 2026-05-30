import React from 'react';
import { useShop } from '../context/ShopContext';
import WishlistItem from '../components/wishlist/WishlistItem';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const { wishlist } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="bg-[#FAF7F2] min-h-[60vh] flex flex-col items-center justify-center p-6 text-center select-none" id="wishlist-empty-view">
        <div className="p-4 bg-white border border-gray-100 rounded-full text-gray-300 mb-4 shadow">
          <Heart className="w-10 h-10" />
        </div>
        <h2 className="text-xl md:text-2xl font-serif text-gray-800 uppercase tracking-widest mb-2 font-light">
          Your saved curation is blank
        </h2>
        <p className="text-xs text-gray-400 font-sans uppercase mb-6 max-w-sm tracking-wide leading-relaxed">
          You haven't flagged any handlooms, bridal lehengas, or royal sherwanis yet. Browse our DLF Emporio portfolios to save options.
        </p>
        <Link
          to="/collection"
          className="bg-black hover:bg-[#D4AF37] text-white hover:text-black px-10 py-3.5 text-xs font-sans uppercase font-bold tracking-[0.2em] transition-all cursor-pointer rounded-none animate-pulse text-center"
        >
          Inspect Luxury Swatches
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1a1a1a] pb-16" id="wishlist-view">
      {/* Heading banner */}
      <section className="bg-white border-b border-gray-100 py-10 text-center px-4 select-none">
        <p className="text-[10px] font-sans uppercase text-[#C5A880] tracking-[0.3em] font-bold">PRIVATE BOUTIQUE SLATE</p>
        <h1 className="text-2xl md:text-3xl font-serif tracking-tight text-gray-900 uppercase mt-1">
          Noble Wishlist Curations ({wishlist.length} Items)
        </h1>
        <p className="text-[10px] md:text-xs text-gray-400 font-sans tracking-widest uppercase mt-1">
          Guarantees active tracking of limited boutique stocks for upcoming family fittings.
        </p>
      </section>

      {/* Main Grid Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10" id="wishlist-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map((item) => (
            <WishlistItem key={item.id} product={item} />
          ))}
        </div>

        {/* Small trust assertions bottom strip */}
        <div className="mt-12 bg-white max-w-2xl mx-auto p-4 py-3 text-[10px] font-sans uppercase tracking-widest text-[#A08560] border border-[#EBE3D5] rounded shadow-sm text-center select-none">
          <p>★ Wishlisted items are automatically shared with your designated 1-on-1 DLF Emporio styling manager.</p>
        </div>
      </div>
    </div>
  );
}
