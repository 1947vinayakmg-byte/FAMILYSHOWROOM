import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

interface SearchBarProps {
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function SearchBar({
  searchKeyword,
  setSearchKeyword,
  onSubmit
}: SearchBarProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-[#FAF7F2] border-b border-[#D4AF37]/20 px-4 md:px-12 py-5 overflow-hidden"
      id="search-overlay-bar"
    >
      <form onSubmit={onSubmit} className="max-w-3xl mx-auto flex items-center gap-3">
        <Search className="w-5 h-5 text-gray-400 shrink-0" />
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="EXECUTIVE DESIGNERS: SEARCH BRIDAL LEHENGAS, ROYAL SHERWANIS, PURE SAREES..."
          className="w-full bg-transparent border-b border-gray-300 py-2 text-xs md:text-sm font-sans tracking-widest uppercase outline-none focus:border-black text-gray-800"
          autoFocus
        />
        {searchKeyword && (
          <button
            type="button"
            onClick={() => setSearchKeyword('')}
            className="text-xs text-gray-400 hover:text-black uppercase tracking-wider font-sans"
          >
            Clear
          </button>
        )}
        <button
          type="submit"
          className="bg-black hover:bg-[#D4AF37] text-white px-5 py-2 text-[10px] font-sans uppercase tracking-[0.2em] transition-colors shrink-0 rounded-none cursor-pointer"
        >
          Search
        </button>
      </form>
    </motion.div>
  );
}
