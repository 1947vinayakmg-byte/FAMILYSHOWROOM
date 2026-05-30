import { useNavigate } from 'react-router-dom';
import { PAVILIONS, FABRICS } from '../../utils/constants';

interface ProductFilterProps {
  category: string;
  setCategory?: (cat: string) => void;
  fabric: string;
  setFabric: (fabric: string) => void;
  priceRange: number;
  setPriceRange: (range: number) => void;
  maxPrice: number;
}

export default function ProductFilter({
  category,
  setCategory,
  fabric,
  setFabric,
  priceRange,
  setPriceRange,
  maxPrice
}: ProductFilterProps) {
  const navigate = useNavigate();

  const handleCategoryClick = (pavName: string) => {
    if (setCategory) {
      setCategory(pavName);
    }
    // Navigate to the correct page
    if (pavName === 'all') {
      navigate('/collection');
    } else if (pavName === 'wedding') {
      navigate('/wedding-pavilion');
    } else if (pavName === 'women') {
      navigate('/women');
    } else if (pavName === 'men') {
      navigate('/men');
    } else if (pavName === 'kids') {
      navigate('/kids');
    }
  };

  return (
    <div className="flex flex-col gap-6 select-none text-black">

      {/* Occasion/Pavilion Curation Filter */}
      <div className="flex flex-col gap-3.5">
        <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-400">Occasion Pavilion</label>
        <div className="flex flex-col gap-1 text-[11px] font-sans uppercase tracking-wide">
          {PAVILIONS.map((pav) => (
            <button
              key={pav.name}
              onClick={() => handleCategoryClick(pav.name)}
              className={`text-left py-2 px-3 transition-colors rounded cursor-pointer ${
                category === pav.name
                  ? 'bg-black text-[#D4AF37] font-bold'
                  : 'hover:bg-[#FAF7F2] text-gray-700'
              }`}
            >
              {pav.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loom/Fabric Accents Filter */}
      <div className="flex flex-col gap-2.5">
        <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-400">Loom / Fabric Accents</label>
        <div className="flex flex-wrap gap-1.5 text-[10px] font-sans uppercase tracking-widest font-semibold">
          {FABRICS.map((fb) => (
            <button
              key={fb}
              onClick={() => setFabric(fb)}
              className={`p-2 px-3.5 border rounded cursor-pointer transition-all ${
                fabric === fb
                  ? 'bg-black border-black text-[#D4AF37]'
                  : 'bg-transparent border-gray-200 text-gray-600 hover:border-black'
              }`}
            >
              {fb}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cap slider */}
      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between items-baseline text-[10px] font-sans font-bold uppercase tracking-wider text-gray-400">
          <span>Max Price Cap</span>
          <span className="text-[#A08560]">₹{priceRange.toLocaleString('en-IN')}</span>
        </div>
        <input
          type="range"
          min="1000"
          max={maxPrice}
          step="5000"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-1 bg-[#FAF7F2] rounded-lg appearance-none cursor-pointer accent-black border border-gray-100"
        />
        <div className="flex justify-between text-[9px] font-mono text-gray-400">
          <span>₹1,000</span>
          <span>₹{maxPrice.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}
