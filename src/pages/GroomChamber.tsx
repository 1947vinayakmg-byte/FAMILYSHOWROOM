import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Send, Star, ShieldCheck, Trophy, Landmark, Filter, X, Eye } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductFilter from '../components/product/ProductFilter';
import ProductSort from '../components/product/ProductSort';
import ProductSearch from '../components/product/ProductSearch';
import { motion, AnimatePresence } from 'motion/react';

interface KingProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  desc: string;
  specs: string[];
}

export default function GroomChamber() {
  const navigate = useNavigate();
  const [sparks, setSparks] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  // Generate 35 dynamic golden sparks with randomized delays, sizes, offsets, and glowing parameters
  useEffect(() => {
    const generated = Array.from({ length: 35 }).map((_, idx) => {
      const size = Math.random() * 8 + 4; // 4px to 12px
      const left = Math.random() * 100; // 0% to 100%
      const delay = Math.random() * 10; // 0s to 10s
      const duration = Math.random() * 8 + 8; // 8s to 16s
      const color = idx % 2 === 0 ? '#D4AF37' : '#C5A880'; // Alternating classic gold shades

      return {
        id: idx,
        style: {
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: color,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        },
      };
    });
    setSparks(generated);
  }, []);

  const { products, searchKeyword, setSearchKeyword } = useShop();

  const kingProducts: KingProduct[] = useMemo(() => {
    const groomSherwanis = products.filter(
      (p) => p.subcategory === 'Groom Sherwanis'
    );

    return groomSherwanis.map((p) => ({
      id: p.id,
      name: p.name,
      price: `₹${p.price.toLocaleString('en-IN')}`,
      image: p.images[0] || '',
      category: 'Imperial Groom Ceremonial',
      desc: p.description,
      specs: [
        `Fabric: ${p.fabric}`,
        `Embroidery: ${p.work}`,
        `Care: ${p.care}`
      ]
    }));
  }, [products]);

  // Filters State
  const [fabric, setFabric] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<number>(300000);

  // Parse price helper for sorting/filtering
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
  };

  const maxPrice = useMemo(() => {
    return Math.max(...kingProducts.map(p => parsePrice(p.price)));
  }, [kingProducts]);

  useEffect(() => {
    if (maxPrice > 1000) {
      setPriceRange(maxPrice);
    }
  }, [maxPrice]);

  const filteredKingProducts = useMemo(() => {
    let list = [...kingProducts];

    // Filter by fabric
    if (fabric !== 'all') {
      list = list.filter((p) => 
        p.desc.toLowerCase().includes(fabric.toLowerCase()) || 
        p.specs.some(s => s.toLowerCase().includes(fabric.toLowerCase()))
      );
    }

    // Filter by price range
    list = list.filter((p) => parsePrice(p.price) <= priceRange);

    // Filter by search keyword
    if (searchKeyword.trim() !== '') {
      const keyword = searchKeyword.toLowerCase();
      list = list.filter((p) => 
        p.name.toLowerCase().includes(keyword) || 
        p.desc.toLowerCase().includes(keyword) ||
        p.category.toLowerCase().includes(keyword)
      );
    }

    // Sort by options
    if (sortBy === 'price-low') {
      list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return list;
  }, [kingProducts, fabric, priceRange, searchKeyword, sortBy]);

  const handleConciergeInquiry = (prodName: string) => {
    const text = encodeURIComponent(`Salutations, I am inquiring about the highly exclusive monarch wedding masterpiece "${prodName}" from the Monarch Groom Chamber. Please coordinate with a Senior Groom Styling Consultant to arrange a private DLF Emporio showroom viewing for my ceremony wardrobe.`);
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#111612] min-h-screen text-white pb-24 relative overflow-hidden font-sans">
      
      {/* Dynamic Falling Golden Sparks */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {sparks.map((spark) => (
          <div key={spark.id} style={spark.style} className="spark-particle" />
        ))}
      </div>

      {/* Fairytale King Chamber Banner */}
      <section className="relative h-[65vh] bg-black overflow-hidden flex items-center justify-center select-none">
        
        {/* Regal gold & emerald wedding background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1800&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#111612] via-black/50 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center gap-4 text-white">
          <p className="text-[10px] md:text-xs tracking-[0.45em] text-[#D4AF37] font-bold uppercase font-sans flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            THE MONARCH SUITE
            <Trophy className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          </p>
          
          <h1 className="text-4xl md:text-6xl font-display tracking-widest text-white leading-none uppercase drop-shadow-md">
            Groom Chamber
          </h1>
          
          <div className="w-24 h-0.5 bg-[#D4AF37] my-1" />
          
          <p className="text-xs md:text-base text-gray-300 font-serif italic tracking-wide max-w-2xl leading-relaxed select-text">
            Enter the Sanctuary of Sovereign Men. Woven with 24k gold zari metal threads, structured velvet Bandhgalas, and pure Pashmina doshala wraps crafted for monarch postures.
          </p>

          {/* Majestic switch button below the headline to navigate back to Princess Wedding Pavilion */}
          <div className="mt-4 flex items-center gap-4 relative z-40 select-none">
            <button
              onClick={() => navigate('/wedding-pavilion')}
              className="px-6 py-2.5 bg-transparent border border-white/30 hover:border-[#D4AF37] text-white font-sans uppercase tracking-[0.2em] text-[9px] transition-all duration-300 hover:scale-105 cursor-pointer rounded"
            >
              ← Enter Princess Pavilion (Empress Suite)
            </button>
            <button
              className="px-6 py-2.5 bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] font-sans uppercase tracking-[0.2em] text-[9px] cursor-default rounded"
              disabled
            >
              Monarch Groom Chamber (Active Room)
            </button>
          </div>
        </div>
      </section>

      {/* Main Luxury Catalog Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
        
        {/* Curated introduction statement */}
        <div className="text-center mb-12 select-none max-w-xl mx-auto">
          <span className="text-sm font-script text-[#D4AF37] text-2xl lowercase">Crafted for Monarch Postures</span>
          <h2 className="text-2xl md:text-4xl font-display text-white tracking-wider font-normal mt-2 uppercase">
            The Sovereign Groom Vault
          </h2>
          <p className="text-xs text-gray-400 font-serif italic mt-3 leading-relaxed">
            Reserved exclusively for high-society affairs and diplomatic celebrations. Tailored down to the millimeter under physical master cutter ledgers.
          </p>
        </div>

        {/* Top sorting & search analytics indicators */}
        <div className="bg-[#111612]/85 border border-[#D4AF37]/35 p-4 py-3 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 select-none mb-12">
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
            {/* Sleek Floating Curation Filter trigger on the left */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded text-[11px] font-sans font-semibold uppercase tracking-wider transition-colors cursor-pointer bg-transparent text-white shrink-0"
              title="Filter Curation Drawer"
            >
              <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Filter Product</span>
            </button>

            <span className="text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
              We found <strong>{filteredKingProducts.length}</strong> matching creations
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end text-black">
            <ProductSearch searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
            <ProductSort sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>

        {/* 6 Custom Ultra-Luxury King Masterpieces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {filteredKingProducts.map((prod) => (
            <div 
              key={prod.id} 
              className="bg-[#000F08]/85 backdrop-blur-md border border-[#D4AF37]/35 hover:border-[#D4AF37] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col group relative hover:shadow-[#D4AF37]/10 hover:-translate-y-2"
            >
              {/* Product Category badge */}
              <div className="absolute top-4 left-4 z-20 bg-black text-[#D4AF37] border border-[#D4AF37]/50 text-[9px] font-sans font-bold tracking-widest uppercase p-2 py-1 rounded shadow-md">
                {prod.category}
              </div>

              {/* Breathtaking Zoom Image */}
              <div 
                onClick={() => navigate(`/product/${prod.id}`)}
                className="aspect-[4/3] w-full overflow-hidden relative border-b border-[#D4AF37]/20 cursor-pointer"
              >
                <img 
                  src={prod.image} 
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 object-top brightness-90 group-hover:brightness-100" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="bg-[#D4AF37] text-black px-4.5 py-2 text-[10px] font-sans font-bold uppercase tracking-[0.15em] rounded flex items-center gap-1.5 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
                    <Eye className="w-3.5 h-3.5" /> Explore Masterpiece
                  </span>
                </div>
              </div>

              {/* Elaborate Details & Specifications */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 
                      onClick={() => navigate(`/product/${prod.id}`)}
                      className="text-xl font-display text-white uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
                    >
                      {prod.name}
                    </h3>
                    <span className="text-lg font-display text-[#D4AF37] font-semibold whitespace-nowrap">
                      {prod.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-350 text-xs md:text-sm font-serif italic leading-relaxed mt-4 line-clamp-3">
                    {prod.desc}
                  </p>

                  {/* Gold star bullets specs */}
                  <ul className="mt-6 flex flex-col gap-2.5 text-xs text-gray-300 select-none">
                    {prod.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                        <span className="font-sans uppercase tracking-wider text-[10px] text-gray-400">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inquire Action Buttons: Specs & WhatsApp Inquiry */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <button 
                    onClick={() => navigate(`/product/${prod.id}`)}
                    className="bg-transparent border border-white/25 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] py-4 px-5 text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 shadow"
                  >
                    <Eye className="w-3.5 h-3.5" /> Specs
                  </button>

                  <button 
                    onClick={() => handleConciergeInquiry(prod.name)}
                    className="flex-grow bg-[#D4AF37] hover:bg-white text-black py-4 px-6 text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-none shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 rotate-45" />
                    Coordinate Fitting Slot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Trust Seal Assurances */}
        <div className="mt-20 bg-black/30 max-w-4xl mx-auto p-8 border border-[#D4AF37]/20 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 text-center select-none text-[11px] tracking-widest text-[#D4AF37] uppercase">
          <div className="flex flex-col items-center gap-2.5">
            <Landmark className="w-7 h-7 text-[#D4AF37]" />
            <span className="font-bold text-white text-xs font-display">Landmark Heritage Craft</span>
            <span className="text-[10px] text-gray-400 lowercase leading-relaxed">Direct links to Varanasi and Jammu Pashmina loom hubs</span>
          </div>
          <div className="flex flex-col items-center gap-2.5 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0">
            <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />
            <span className="font-bold text-white text-xs font-display">Silk &amp; Wool Credentials</span>
            <span className="text-[10px] text-gray-400 lowercase leading-relaxed">Genuine certified raw silks &amp; solid gold thread markings</span>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <Heart className="w-7 h-7 text-[#D4AF37]" />
            <span className="font-bold text-white text-xs font-display">King's Fittings Suite</span>
            <span className="text-[10px] text-gray-400 lowercase leading-relaxed">Designated fitting rooms with master tailors at DLF Emporio</span>
          </div>
        </div>

      </div>

      {/* SEPARATE FILTERING DRAWER FOR DECOUPLED INDEPENDENT SCROLL */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Dark glassmorphic backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-45"
            />

            {/* Slide-out Refine drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-80 md:w-96 bg-white shadow-2xl z-50 p-6 flex flex-col border-l border-[#D4AF37]/30 text-black"
              id="filter-drawer-overlay"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-150 mb-4 select-none">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-sm font-sans uppercase font-bold text-gray-900 tracking-wider">
                    Refine Swatches
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-1.5 text-gray-400 hover:text-black hover:bg-gray-50 rounded transition-colors cursor-pointer animate-none"
                    title="Close filters"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable filters wrapper */}
              <div className="flex-grow overflow-y-auto pr-1">
                <ProductFilter
                  category="men"
                  fabric={fabric}
                  setFabric={setFabric}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  maxPrice={maxPrice}
                />
              </div>

              {/* Drawer Footer CTA */}
              <div className="pt-4 border-t border-gray-150 mt-4 select-none">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-black text-[#D4AF37] hover:text-white py-3 text-xs font-sans uppercase font-bold tracking-widest text-center transition-colors cursor-pointer"
                >
                  Apply Curation Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
