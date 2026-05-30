import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import ProductCard from '../product/ProductCard';

export default function FeaturedProducts() {
  const { products } = useShop();
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  // Safely get initial featured products
  const initialFeatured = products && products.length > 8 
    ? [products[0], products[1], products[2], products[8]]
    : products || [];

  // Filter out the initial featured products to get the remaining ones
  const featuredIds = initialFeatured.map(p => p.id);
  const remaining = products 
    ? products.filter(p => !featuredIds.includes(p.id))
    : [];

  const displayProducts = hasLoadedMore 
    ? [...initialFeatured, ...remaining]
    : initialFeatured;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16" id="home-featured-products">
      <div className="text-center mb-12 select-none">
        <p className="text-[11px] font-sans uppercase text-[#C5A880] tracking-[0.35em] font-bold">EXCLUSIVE CURATIONS</p>
        <h2 className="text-2xl md:text-4xl font-display text-gray-900 tracking-wider font-normal mt-1.5 uppercase">
          Trending Masterpieces
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3.5" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>

      {remaining.length > 0 && (
        <div className="text-center mt-12 flex flex-col items-center gap-4">
          {!hasLoadedMore ? (
            <button
              onClick={() => setHasLoadedMore(true)}
              className="px-10 py-4 border border-black text-black hover:bg-black hover:text-[#D4AF37] text-[11px] font-sans font-semibold uppercase tracking-[0.25em] transition-all duration-300 rounded-none cursor-pointer"
            >
              Load More
            </button>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <p className="text-[10px] font-sans text-gray-400 tracking-widest uppercase">
                All Curated Showroom Creations Loaded
              </p>
              <button
                onClick={() => {
                  setHasLoadedMore(false);
                  document.getElementById('home-featured-products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-4 border border-black text-black hover:bg-black hover:text-[#D4AF37] text-[11px] font-sans font-semibold uppercase tracking-[0.25em] transition-all duration-300 rounded-none cursor-pointer"
              >
                Load Less
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
