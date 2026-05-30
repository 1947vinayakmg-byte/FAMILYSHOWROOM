import React from 'react';

interface ProductSortProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export default function ProductSort({ sortBy, setSortBy }: ProductSortProps) {
  return (
    <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-gray-500">
      <span className="font-bold shrink-0">Sort By:</span>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-white border border-gray-200 outline-none p-2 py-1.5 focus:border-[#D4AF37] uppercase text-gray-700 font-sans tracking-wide cursor-pointer rounded"
      >
        <option value="featured">Featured Curations</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="trending">Popularity: Trending</option>
        <option value="rating">Rating: Star Grade</option>
      </select>
    </div>
  );
}
