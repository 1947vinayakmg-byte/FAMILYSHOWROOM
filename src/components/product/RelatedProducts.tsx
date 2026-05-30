import React, { useRef, useState, useEffect } from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      // Wait a moment for images to load and recalculate layout
      const timer = setTimeout(checkScroll, 500);
      window.addEventListener('resize', checkScroll);

      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(timer);
      };
    }
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const cardWidth = 324; // 300px card width + 24px gap
      const visibleCards = Math.max(1, Math.floor(el.clientWidth / cardWidth));
      const scrollAmount = direction === 'left' ? -cardWidth * visibleCards : cardWidth * visibleCards;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-gray-200 mt-10">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="text-center mb-10 select-none">
        <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#C5A880] font-bold">MATCHING ENSEMBLES</p>
        <h2 className="text-xl md:text-2xl font-serif text-gray-900 tracking-wide mt-1 uppercase font-light">
          Weave Recommendations
        </h2>
        <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
      </div>

      <div className="relative group" id="related-products-slider-wrapper">
        {/* Left Arrow Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/95 text-[#1a1a1a] border border-[#EBE3D5] hover:border-[#D4AF37] p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
          id="product-recommendations-grid"
        >
          {products.map((relatedP) => (
            <div key={relatedP.id} className="w-[280px] sm:w-[300px] shrink-0">
              <ProductCard product={relatedP} />
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/95 text-[#1a1a1a] border border-[#EBE3D5] hover:border-[#D4AF37] p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        )}
      </div>
    </section>
  );
}

