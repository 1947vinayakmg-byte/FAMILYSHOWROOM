import React from 'react';
import { useShop } from '../context/ShopContext';
import ProductCatalogLayout from '../components/product/ProductCatalogLayout';
import { Globe, Heart, ShieldCheck } from 'lucide-react';
import sherwaniHero from '../../assets/banners/sherwani.jpg';
export default function Sherwanis() {
  const { products } = useShop();

  // Filter for Groom Sherwanis or products containing "sherwani"
  const sherwaniProducts = products.filter(
    (p) =>
      p.subcategory.toLowerCase().includes('sherwani') ||
      p.name.toLowerCase().includes('sherwani')
  );

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1a1a1a] pb-16 font-sans">
      {/* Luxury Editorial Hero */}
      <section className="relative h-[45vh] bg-black overflow-hidden flex items-center justify-center select-none">
        <div className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: `url(${sherwaniHero})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center gap-3 text-white">
          <p className="text-[10px] md:text-xs tracking-[0.45em] text-[#D4AF37] font-bold uppercase font-sans">
            IMPERIAL GROOM CEREMONY
          </p>
          <h1 className="text-3xl md:text-5.5xl font-display tracking-widest text-white leading-none uppercase">
            ROYAL SHERWANIS
          </h1>
          <div className="w-16 h-0.5 bg-[#D4AF37] my-2" />
          <p className="text-xs md:text-sm text-gray-255 font-serif italic tracking-wide max-w-lg leading-relaxed select-text">
            Experience majestic tone-on-tone resham embroidery, 24k gold zari temple-weaves, and hand-done zardozi seed-pearl framing for monarch postures.
          </p>
        </div>
      </section>

      {/* Main Catalog View with search/filter/sort */}
      <ProductCatalogLayout initialProducts={sherwaniProducts} categoryKey="men" />

      {/* Small trust assertions bottom strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 select-none">
        <div className="mt-16 bg-white max-w-3xl mx-auto p-6 border border-[#EBE3D5] rounded shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-[10px] tracking-widest text-[#A08560] uppercase">
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
            <span>AUTHENTIC BANARASI SILKS</span>
          </div>
          <div className="flex flex-col items-center gap-2 border-y md:border-y-0 md:border-x border-gray-100 py-4 md:py-0">
            <Globe className="w-6 h-6 text-[#D4AF37]" />
            <span>WHITE-GLOVE SHIPPING</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Heart className="w-6 h-6 text-[#D4AF37]" />
            <span>TAILORED MASTER MEASURE LEDGER</span>
          </div>
        </div>
      </div>
    </div>
  );
}
