import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toggleWishlist, isInWishlist, addToCart } = useShop();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const navigate = useNavigate();
  
  const saved = isInWishlist(product.id);

  // Fallback default image
  const displayImage = product.images[currentImgIndex] || 'https://images.unsplash.com/photo-1595777457583-95e059d581b8';

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    // Use default size and color
    const defaultSize = product.sizes[0] || 'Standard';
    const defaultColor = product.colors[0] || { name: 'Gold', hex: '#D4AF37' };
    addToCart(product, defaultSize, defaultColor, 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => product.images.length > 1 && setCurrentImgIndex(1)}
      onMouseLeave={() => setCurrentImgIndex(0)}
      className="group relative bg-white flex flex-col justify-between border border-gray-100 hover:shadow-xl transition-all duration-500 rounded-lg overflow-hidden h-full"
    >
      {/* Upper image container */}
      <div className="relative overflow-hidden bg-[#FAF7F2] aspect-[3/4] select-none cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
        {/* Labels/Sticker panel */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
          {product.isWeddingCollection && (
            <span className="text-[9px] font-sans uppercase font-bold tracking-widest bg-black text-[#D4AF37] border border-[#D4AF37] px-2.5 py-1 shadow-md">
              Wedding Couture
            </span>
          )}
          {product.isNew && (
            <span className="text-[9px] font-sans uppercase font-bold tracking-widest bg-[#FAF7F2] text-[#8B6E4E] border border-[#8B6E4E]/30 px-2.5 py-1">
              New Arrival
            </span>
          )}
          {product.isTrending && (
            <span className="text-[9px] font-sans uppercase font-bold tracking-widest bg-[#D4AF37] text-black font-extrabold px-2.5 py-1 shadow-sm">
              Trending
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 z-10 p-2.5 bg-white/90 hover:bg-white text-gray-700 hover:text-[#D4AF37] shadow-lg rounded-full transition-transform hover:scale-110 duration-200 cursor-pointer"
          title="Save to Wishlist"
        >
          <Heart className={`w-4 h-4 transition-colors ${saved ? 'fill-[#D4AF37] text-[#D4AF37]' : ''}`} />
        </button>

        {/* Main Product Image */}
        <img
          src={displayImage}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-all duration-700 ease-out"
        />

        {/* Hover quick views action */}
        <div className="absolute inset-x-0 bottom-0 bg-black/75 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3.5 flex justify-center gap-3">
          <Link
            to={`/product/${product.id}`}
            className="flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-widest text-[#D4AF37] hover:text-white uppercase transition-colors"
          >
            <Eye className="w-3.5 h-3.5" /> Inspect Specs
          </Link>
          <span className="text-gray-600">|</span>
          <button
            onClick={handleQuickAdd}
            className="flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-widest text-white hover:text-[#D4AF37] uppercase transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Buy Couture
          </button>
        </div>
      </div>

      {/* Info Panel block */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          {/* Subcategory */}
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C5A880] mb-0.5">{product.subcategory}</p>
          
          {/* Product Name */}
          <h3 className="text-xs md:text-sm font-serif text-gray-900 group-hover:text-[#D4AF37] transition-colors line-clamp-2 min-h-[36px] tracking-wide font-normal leading-tight">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1.5">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} />
              ))}
            </div>
            <span className="text-[10px] text-gray-400 font-sans mt-0.5">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Pricing & Add Quick panel */}
        <div className="flex justify-between items-baseline mt-3 pt-3 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            <span className="text-sm md:text-base text-black font-semibold font-serif">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>
          
          <button
            onClick={handleQuickAdd}
            className="p-2.5 bg-[#FAF7F2] hover:bg-black text-[#A08560] hover:text-white transition-all duration-300 rounded border border-[#EBE3D5] hover:border-black group/button cursor-pointer"
            title="Express Checkout Add"
          >
            <ShoppingBag className="w-4 h-4 group-hover/button:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
