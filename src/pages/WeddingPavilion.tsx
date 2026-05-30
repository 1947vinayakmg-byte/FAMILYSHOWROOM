import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Send, Star, ShieldCheck, Award, Eye, Filter, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductFilter from '../components/product/ProductFilter';
import ProductSort from '../components/product/ProductSort';
import ProductSearch from '../components/product/ProductSearch';
import { motion, AnimatePresence } from 'motion/react';

export default function WeddingPavilion() {
  const navigate = useNavigate();
  const [petals, setPetals] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  // Generate 35 dynamic colorful flower petals with randomized delays, sizes, offsets, and pastel shades
  useEffect(() => {
    const shades = [
      'radial-gradient(circle, #FB3640 0%, #a81c25 100%)', // Brilliant Princess Ruby Red
      'radial-gradient(circle, #ffe4a3 0%, #ffd061 100%)', // Royal Gold Blossom
      'radial-gradient(circle, #ffffff 0%, #f0f0f0 100%)', // Celestial White
      'radial-gradient(circle, #ffb6c1 0%, #ff69b4 100%)', // Rose Pink
    ];

    const generated = Array.from({ length: 35 }).map((_, idx) => {
      const size = Math.random() * 14 + 10; // 10px to 24px
      const left = Math.random() * 100; // 0% to 100%
      const delay = Math.random() * 10; // 0s to 10s
      const duration = Math.random() * 8 + 8; // 8s to 16s
      const shade = shades[Math.floor(Math.random() * shades.length)];

      return {
        id: idx,
        style: {
          left: `${left}%`,
          width: `${size}px`,
          height: `${size * 1.3}px`,
          background: shade,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        },
      };
    });
    setPetals(generated);
  }, []);

  const { products, searchKeyword, setSearchKeyword } = useShop();
  
  // Filter products for category 'wedding'
  const weddingProducts = useMemo(() => {
    return products.filter((p) => p.category === 'wedding');
  }, [products]);

  // Filters State
  const [fabric, setFabric] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // Max price cap computed automatically from catalog
  const maxPrice = useMemo(() => {
    if (weddingProducts.length === 0) return 300000;
    return Math.max(...weddingProducts.map((p) => p.price));
  }, [weddingProducts]);

  const [priceRange, setPriceRange] = useState<number>(300000);

  // Auto-sync priceRange cap when products load
  useEffect(() => {
    if (maxPrice > 1000) {
      setPriceRange(maxPrice);
    }
  }, [maxPrice]);

  const filteredProducts = useMemo(() => {
    let list = [...weddingProducts];

    // Filter by Fabric Accents
    if (fabric !== 'all') {
      list = list.filter((p) => p.fabric === fabric);
    }

    // Filter by Price range
    list = list.filter((p) => p.price <= priceRange);

    // Filter by live input search word
    if (searchKeyword.trim() !== '') {
      const keyword = searchKeyword.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(keyword) ||
          p.subcategory.toLowerCase().includes(keyword) ||
          p.description.toLowerCase().includes(keyword)
      );
    }

    // Sort by options
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'trending') {
      list.sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0));
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [weddingProducts, fabric, priceRange, searchKeyword, sortBy]);

  const handleConciergeInquiry = (prodName: string) => {
    const text = encodeURIComponent(`Salutations, I am inquiring about the exclusive heirloom masterpiece "${prodName}" displayed inside the Princess Wedding Pavilion. Please coordinate with a Senior Styling Advisor to arrange a private DLF Emporio showroom viewing for my wedding planning wardrobe.`);
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-[#000F08] via-[#0b0c10] to-[#000F08] min-h-screen text-white pb-24 relative overflow-hidden font-sans">
      
      {/* Royal Princess atmospheric glowing light fields */}
      <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] bg-[#FB3640]/[0.15] rounded-full blur-[160px] pointer-events-none z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#FB3640]/[0.1] rounded-full blur-[200px] pointer-events-none z-10" />
      <div className="absolute top-[45%] left-[25%] w-[450px] h-[450px] bg-[#D4AF37]/[0.06] rounded-full blur-[140px] pointer-events-none z-10" />

      {/* Dynamic Falling Rose and Lavender Flower Petals */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {petals.map((petal) => (
          <div key={petal.id} style={petal.style} className="petal-particle" />
        ))}
      </div>

      {/* Fairytale Princess Pavilion Banner */}
      <section className="relative h-[65vh] bg-[#000F08] overflow-hidden flex items-center justify-center select-none border-b border-[#D4AF37]/20">
        
        {/* Dreamy spring botanical wedding background with majestic blend */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1800&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#000F08] via-[#000F08]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center gap-3 text-white">
          <p className="text-[10px] md:text-xs tracking-[0.45em] text-[#FB3640] font-black uppercase font-sans flex items-center gap-2">
            ♛ THE PRINCESS COLLECTION ♛
          </p>
          
          <h1 className="text-4xl md:text-6xl font-serif tracking-widest text-white leading-none uppercase drop-shadow-md font-light">
            Wedding Pavilion
          </h1>
          
          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2" />
          
          <p className="text-xs md:text-base text-gray-300 font-serif italic tracking-wide max-w-2xl leading-relaxed select-text">
            Enter the Imperial Garden of Eternal Romance. Every gown is a fairytale woven in gold threads, custom draped with hand-painted crimson blossoms, sweeping royal trains, and pure silver Gota borders.
          </p>

          {/* Switcher buttons under the headline to enter the Groom Chamber */}
          <div className="mt-6 flex items-center gap-4 relative z-40 select-none">
            <button
              className="px-6 py-2.5 bg-gradient-to-r from-[#FB3640]/25 to-[#FB3640]/10 border border-[#FB3640] text-[#FB3640] font-sans uppercase tracking-[0.2em] text-[9px] cursor-default rounded-full font-bold shadow-lg shadow-[#FB3640]/10"
              disabled
            >
              Princess Pavilion (Active Chamber)
            </button>
            <button
              onClick={() => navigate('/groom-chamber')}
              className="px-6 py-2.5 bg-transparent border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-sans uppercase tracking-[0.2em] text-[9px] transition-all duration-300 hover:scale-105 cursor-pointer rounded-full flex items-center gap-1"
            >
              Enter Groom Chamber (Monarch Suite) →
            </button>
          </div>
        </div>
      </section>

      {/* Main Luxury Catalog Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
        
        {/* Curated introduction statement */}
        <div className="text-center mb-12 select-none max-w-xl mx-auto">
          <span className="text-sm font-script text-[#FB3640] text-2xl lowercase">A Fairytale Spelled in Gold Threads</span>
          <h2 className="text-2xl md:text-4xl font-serif text-white tracking-wider font-light mt-2 uppercase">
            The Sovereign Princess Vault
          </h2>
          <p className="text-xs text-gray-400 font-serif italic mt-3 leading-relaxed">
            Directly empanelled with Varanasi and Kanchipuram loom chambers, these products represent the absolute pinnacle of luxury wedding art. Available strictly via private VIP concierge bookings.
          </p>
        </div>

        {/* Top sorting & search analytics indicators */}
        <div className="bg-[#000F08]/85 border border-[#D4AF37]/35 p-4 py-3 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 select-none mb-12">
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
              We found <strong>{filteredProducts.length}</strong> matching creations
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end text-black">
            <ProductSearch searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
            <ProductSort sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>

        {/* Live Dynamic Wedding Masterpieces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {filteredProducts.map((prod) => {
            const specs = [
              `Fabric: ${prod.fabric || 'Pure Silk Loom'}`,
              `Embroidery: ${prod.work || 'Handwork Zardozi'}`,
              `Care: ${prod.care || 'Dry Clean Only'}`
            ];

            return (
              <div 
                key={prod.id} 
                className="bg-[#000F08]/85 backdrop-blur-md border border-[#D4AF37]/30 hover:border-[#FB3640]/60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col group relative hover:shadow-[#FB3640]/10 hover:-translate-y-2"
              >
                {/* Product Category badge and subcategory floating */}
                <div className="absolute top-4 left-4 z-20 bg-black text-[#D4AF37] border border-[#D4AF37]/50 text-[9px] font-sans font-bold tracking-widest uppercase p-2 py-1 rounded shadow-md">
                  {prod.subcategory || 'Imperial Heirloom'}
                </div>

                {/* Breathtaking Zoom Image - Clickable to Detail Page */}
                <div 
                  onClick={() => navigate(`/product/${prod.id}`)}
                  className="aspect-[4/3] w-full overflow-hidden relative border-b border-[#D4AF37]/20 cursor-pointer"
                >
                  <img 
                    src={prod.images && prod.images[0] ? prod.images[0] : 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80'} 
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 object-top" 
                  />
                  <div className="absolute inset-0 bg-[#000F08]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
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
                        className="text-xl font-serif text-white uppercase tracking-wider group-hover:text-[#FB3640] transition-colors duration-300 cursor-pointer"
                      >
                        {prod.name}
                      </h3>
                      <span className="text-lg font-serif text-[#D4AF37] font-semibold whitespace-nowrap">
                        ₹{prod.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-xs md:text-sm font-serif italic leading-relaxed mt-4 line-clamp-3">
                      {prod.description}
                    </p>

                    {/* Gold star bullets specs */}
                    <ul className="mt-6 flex flex-col gap-2.5 text-xs text-gray-700 select-none">
                      {specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                          <span className="font-sans uppercase tracking-wider text-[10px] text-gray-400">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons: Details & Concierge Inquiry */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                    <button 
                      onClick={() => navigate(`/product/${prod.id}`)}
                      className="bg-transparent border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] py-4 px-5 text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 shadow"
                    >
                      <Eye className="w-3.5 h-3.5" /> Specs
                    </button>
                    
                    <button 
                      onClick={() => handleConciergeInquiry(prod.name)}
                      className="flex-grow bg-white hover:bg-[#FB3640] text-black hover:text-white py-4 px-6 text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 transform active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5 rotate-45" />
                      Reserve Concierge
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Trust Seal Assurances */}
        <div className="mt-20 bg-[#000F08]/90 backdrop-blur-md max-w-4xl mx-auto p-8 border border-[#D4AF37]/30 rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center select-none text-[11px] tracking-widest text-[#D4AF37] uppercase">
          <div className="flex flex-col items-center gap-2.5">
            <Award className="w-7 h-7 text-[#D4AF37]" />
            <span className="font-bold text-white text-xs font-serif">Sovereign Craftsmanship</span>
            <span className="text-[10px] text-gray-400 lowercase leading-relaxed">Direct links to Varanasi &amp; Kanchipuram master looms</span>
          </div>
          <div className="flex flex-col items-center gap-2.5 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0">
            <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />
            <span className="font-bold text-white text-xs font-serif">Silk Mark Credentials</span>
            <span className="text-[10px] text-gray-400 lowercase leading-relaxed">Genuine certified mulberry fabrics &amp; metal threads</span>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <Heart className="w-7 h-7 text-[#D4AF37]" />
            <span className="font-bold text-white text-xs font-serif">Princess Fittings Suite</span>
            <span className="text-[10px] text-gray-400 lowercase leading-relaxed">Designated fitting rooms with complimentary refreshments</span>
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
                  category="wedding"
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
