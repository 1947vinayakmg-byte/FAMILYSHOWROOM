import React from 'react';
import { Search } from 'lucide-react';

interface ProductSearchProps {
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
}

export default function ProductSearch({ searchKeyword, setSearchKeyword }: ProductSearchProps) {
  return (
    <div className="relative flex items-center bg-white border border-gray-200 focus-within:border-[#D4AF37] rounded overflow-hidden w-full max-w-sm shadow-sm select-none">
      <Search className="absolute left-3 w-4 h-4 text-gray-400 shrink-0 pointer-events-none" />
      <input
        type="text"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        placeholder="Inspect particular weave..."
        className="w-full bg-transparent pl-10 p-2.5 outline-none text-xs font-sans uppercase tracking-widest text-[#111]"
      />
      {searchKeyword && (
        <button
          onClick={() => setSearchKeyword('')}
          className="absolute right-3 text-[10px] text-gray-400 hover:text-black uppercase tracking-wider font-sans font-bold"
        >
          Clear
        </button>
      )}
    </div>
  );
}
