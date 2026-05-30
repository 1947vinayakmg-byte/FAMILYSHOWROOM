import React, { useState, useMemo, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import ProductFilter from './ProductFilter';
import ProductSort from './ProductSort';
import ProductSearch from './ProductSearch';
import ProductGrid from './ProductGrid';
import { Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../../types';

interface ProductCatalogLayoutProps {
  initialProducts: Product[];
  categoryKey: string; // 'all' | 'men' | 'women' | 'kids' | 'wedding'
  darkTheme?: boolean;
}

export default function ProductCatalogLayout({
  initialProducts,
  categoryKey,
  darkTheme = false,
}: ProductCatalogLayoutProps) {
  const { searchKeyword, setSearchKeyword } = useShop();

  // Filters State
  const [fabric, setFabric] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // Max price cap computed automatically from catalog
  const maxPrice = useMemo(() => {
    if (initialProducts.length === 0) return 300000;
    return Math.max(...initialProducts.map((p) => p.price));
  }, [initialProducts]);

  const [priceRange, setPriceRange] = useState<number>(300000);

  // Auto-sync priceRange cap when initialProducts change
  useEffect(() => {
    if (maxPrice > 1000) {
      setPriceRange(maxPrice);
    }
  }, [maxPrice]);

  // Clean subcategories based on initialProducts
  const activeSubcategories = useMemo(() => {
    return Array.from(new Set(initialProducts.map((p) => p.subcategory)));
  }, [initialProducts]);

  // Main Filtered items array
  const filteredProducts = useMemo(() => {
    let list = [...initialProducts];

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
  }, [initialProducts, fabric, priceRange, searchKeyword, sortBy]);

  return (
    <div className="w-full">

      {/* Main filter-catalogue split area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10" id="collection-grid-container">
        <div className="flex flex-col gap-6">
          {/* Top sorting & search analytics indicators */}
          <div className={`p-4 py-3 border rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 select-none ${darkTheme ? 'bg-[#000F08]/85 border-white/10' : 'bg-white border-gray-100'}`}>
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
              {/* Sleek Floating Curation Filter trigger on the left */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className={`flex items-center gap-2 px-4 py-2 border rounded text-[11px] font-sans font-semibold uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${darkTheme ? 'bg-transparent border-white/20 text-white hover:border-[#D4AF37]' : 'bg-white border-gray-200 text-black hover:border-black'}`}
                title="Filter Curation Drawer"
              >
                <Filter className="w-3.5 h-3.5 text-[#A08560]" />
                <span>Filter Product</span>
              </button>

              <span className="text-[10px] font-sans uppercase tracking-widest text-[#A08560] font-semibold">
                We found <strong>{filteredProducts.length}</strong> matching creations
              </span>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <ProductSearch searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
              <ProductSort sortBy={sortBy} setSortBy={setSortBy} />
            </div>
          </div>

          {/* Core Catalogue Product Card Grids */}
          <main className="w-full">
            <ProductGrid products={filteredProducts} />
          </main>
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
                  category={categoryKey}
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
