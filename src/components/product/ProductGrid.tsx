import React from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="bg-white border border-gray-100 p-12 text-center rounded-lg shadow-sm flex flex-col items-center justify-center select-none col-span-full">
        <h3 className="text-sm font-serif font-black text-gray-800 uppercase tracking-widest mb-1.5">
          No curations match filters
        </h3>
        <p className="text-[10px] text-gray-400 font-sans uppercase max-w-xs leading-relaxed">
          Try expanding your budget parameters or looking for another fabric loom variant.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="collections-catalogue-grid">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
