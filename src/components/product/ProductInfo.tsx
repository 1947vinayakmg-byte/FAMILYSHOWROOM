import React from 'react';
import { Heart, Star, Ruler, MessageSquare, ShoppingBag, Share2 } from 'lucide-react';
import { Product } from '../../types';
import { getPriceForSize } from '../../utils/priceHelper';
import ShareModal from './ShareModal';

interface ProductInfoProps {
  product: Product;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedColor: { name: string; hex: string };
  setSelectedColor: (color: { name: string; hex: string }) => void;
  qty: number;
  setQty: (qty: number) => void;
  discountPercent: number;
  isInSaved: boolean;
  onAddToCart: () => void;
  onToggleWishlist: () => void;
  whatsappQueryUrl: string;
  activeTab: 'fabric' | 'shipping' | 'care';
  setActiveTab: (tab: 'fabric' | 'shipping' | 'care') => void;
  onOpenSizeChart: () => void;
  onBuyNow: () => void;
}

export default function ProductInfo({
  product,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  qty,
  setQty,
  discountPercent,
  isInSaved,
  onAddToCart,
  onToggleWishlist,
  whatsappQueryUrl,
  activeTab,
  setActiveTab,
  onOpenSizeChart,
  onBuyNow
}: ProductInfoProps) {
  const [shareOpen, setShareOpen] = React.useState(false);

  const adjustedPrice = getPriceForSize(product.price, selectedSize);
  const adjustedOriginalPrice = getPriceForSize(product.originalPrice, selectedSize);
  const adjustedDiscountPercent = Math.round(
    ((adjustedOriginalPrice - adjustedPrice) / adjustedOriginalPrice) * 100
  );

  return (
    <div className="flex flex-col justify-between select-none">
      <div>
        {/* Designer Subcategory tag */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-extrabold text-[#C5A880]">
            {product.subcategory}
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-[9px] text-[#A08560] font-sans font-bold uppercase mr-1">Certification: Silk-Mark loom</span>
        </div>

        {/* Title Name */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-900 tracking-wide font-light uppercase leading-tight mb-3">
          {product.name}
        </h1>

        {/* Stars rating panel */}
        <div className="flex items-center gap-1.5 mb-5 select-none pb-4 border-b border-gray-100">
          <div className="flex text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} />
            ))}
          </div>
          <span className="text-xs font-serif text-gray-700 pt-0.5">{product.rating}</span>
          <span className="text-[10px] text-gray-400 font-sans uppercase tracking-widest mt-0.5">({product.reviewsCount} Certified Reviews)</span>
        </div>

        {/* Pricing Section */}
        <div className="flex items-baseline gap-4 mb-6 select-none bg-white p-4 border border-gray-100 rounded shadow-sm">
          <div className="flex flex-col">
            <span className="text-[10px] font-sans tracking-widest text-[#A08560] uppercase">MSRP CURATION VALUE</span>
            <span className="text-xl md:text-2xl font-serif font-black text-black leading-none mt-1">
              ₹{adjustedPrice.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="flex flex-col text-xs text-gray-455">
            <span className="line-through text-gray-400">₹{adjustedOriginalPrice.toLocaleString('en-IN')}</span>
            <span className="text-red-600 font-semibold uppercase tracking-wider text-[9px]">Save {adjustedDiscountPercent}% Exclusive off</span>
          </div>
        </div>

        {/* Short text description */}
        <p className="text-gray-650 font-sans text-xs md:text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Sizing picks panel */}
        <div className="flex flex-col gap-3 mb-6 select-none">
          <div className="flex justify-between items-center text-xs font-sans uppercase font-bold text-gray-500">
            <span className="tracking-wide">Select Couture Sizing</span>
            <button
              onClick={onOpenSizeChart}
              className="flex items-center gap-1 text-[#D4AF37] hover:text-black transition-colors cursor-pointer"
            >
              <Ruler className="w-4 h-4" /> Size Curation Guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-sans uppercase tracking-wider">
            {product.sizes.map((sz) => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`px-4.5 py-2.5 border rounded cursor-pointer font-medium transition-all ${selectedSize === sz
                  ? 'bg-black text-[#D4AF37] border-black font-extrabold shadow-md'
                  : 'bg-white border-gray-205 hover:border-black text-gray-700'
                  }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Color variants selector */}
        <div className="flex flex-col gap-3 mb-6 select-none">
          <span className="text-xs font-sans uppercase font-bold text-gray-505 tracking-wide">
            Bespoke Palette Accents (Handworked fabrics)
          </span>
          <div className="flex gap-3">
            {product.colors.map((col) => (
              <button
                key={col.name}
                onClick={() => setSelectedColor(col)}
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center cursor-pointer transition-transform duration-305 relative ${selectedColor.name === col.name ? 'scale-110 border-black shadow' : 'border-gray-200'
                  }`}
                style={{ backgroundColor: col.hex }}
                title={col.name}
              >
                {selectedColor.name === col.name && (
                  <span className="w-2 h-2 rounded-full bg-white mix-blend-difference" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Picker & Action items */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex flex-col gap-1.5 select-none shrink-0 border border-gray-300 p-2 py-1.5 rounded bg-white">
            <span className="text-[9px] font-sans text-gray-400 text-center uppercase">Qty</span>
            <div className="flex items-center gap-3.5 text-xs font-bold font-sans">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="text-gray-400 hover:text-black text-sm cursor-pointer"
                title="Lower quantity"
              >
                -
              </button>
              <span className="w-5 text-center text-black text-xs">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="text-gray-400 hover:text-black text-sm cursor-pointer"
                title="Raise quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to checkout Bag button */}
          <button
            onClick={onAddToCart}
            className="flex-grow bg-black hover:bg-[#D4AF37] text-white hover:text-black py-4 transition-colors font-sans text-xs uppercase font-bold tracking-[0.25em] text-center shadow-2xl cursor-pointer"
          >
            ADD TO BAG
          </button>

          {/* Quick wishlist selector */}
          <button
            onClick={onToggleWishlist}
            className="p-3.5 bg-white border border-gray-200 hover:border-[#D4AF37] text-gray-700 hover:text-[#D4AF37] rounded shadow-sm hover:shadow-lg transition-all cursor-pointer shrink-0"
            title={`${isInSaved ? 'Logged inside Wishlist' : 'Save inside Wishlist'}`}
          >
            <Heart className={`w-5 h-5 ${isInSaved ? 'fill-[#D4AF37] text-[#D4AF37]' : ''}`} />
          </button>

          {/* Functional Share Button — opens social share modal */}
          <button
            onClick={() => setShareOpen(true)}
            className="p-3.5 bg-white border border-gray-200 hover:border-[#D4AF37] text-gray-700 hover:text-[#D4AF37] rounded shadow-sm hover:shadow-lg transition-all cursor-pointer relative shrink-0"
            title="Share this design"
          >
            <Share2 className="w-5 h-5" />
          </button>

          {/* Social Share Modal */}
          <ShareModal
            isOpen={shareOpen}
            onClose={() => setShareOpen(false)}
            productName={product.name}
            productUrl={window.location.href}
          />
        </div>

        {/* Call to Action: WhatsApp or Buy Now */}
        <div className="mb-8 select-none">
          {product.category === 'wedding' ? (
            <>
              <a
                href={whatsappQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fbc59] text-white py-3.5 text-xs font-sans uppercase font-bold tracking-[0.2em] shadow-md transition-colors"
                id="btn-whatsapp-order"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-current" /> Order Bespoke Custom via WhatsApp
              </a>
              <span className="text-[10px] text-gray-400 text-center uppercase tracking-wide block mt-1.5">
                Speak directly with an expert showroom couturier of DLF Emporio flagship.
              </span>
            </>
          ) : (
            <>
              <button
                onClick={onBuyNow}
                className="w-full flex items-center justify-center gap-2.5 bg-[#D4AF37] hover:bg-black hover:text-[#D4AF37] text-black py-4 text-xs font-sans uppercase font-bold tracking-[0.25em] shadow-lg transition-all duration-300 transform active:scale-[0.98] cursor-pointer"
                id="btn-buy-now"
              >
                <ShoppingBag className="w-4.5 h-4.5" /> BUY NOW
              </button>
              <span className="text-[10px] text-gray-400 text-center uppercase tracking-wide block mt-1.5">
                Immediate checkout with secure Indian & international boutique clearance.
              </span>
            </>
          )}
        </div>

        {/* Editorial tabs */}
        <div className="border border-gray-200 bg-white rounded shadow-sm select-none">
          <div className="grid grid-cols-3 border-b border-gray-100 text-[10px] font-sans uppercase tracking-widest text-center">
            <button
              onClick={() => setActiveTab('fabric')}
              className={`py-3 font-semibold cursor-pointer ${activeTab === 'fabric' ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-black'
                }`}
            >
              Specs & Fabric
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`py-3 font-semibold cursor-pointer ${activeTab === 'shipping' ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-black'
                }`}
            >
              Fitting & Shipping
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={`py-3 font-semibold cursor-pointer ${activeTab === 'care' ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-black'
                }`}
            >
              Heirloom Care
            </button>
          </div>

          <div className="p-4 text-[11px] font-sans leading-relaxed text-gray-600 uppercase tracking-wide">
            {activeTab === 'fabric' && (
              <div className="flex flex-col gap-2">
                <p><strong>Pure Loom Material:</strong> {product.fabric}</p>
                <p><strong>Embellishment Craft:</strong> {product.work}</p>
                <p><strong>Certificate Stamp:</strong> 100% Weave Certified Silk Mark verified</p>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="flex flex-col gap-2">
                <p><strong>White-glove Service:</strong> Home courier trial under 5 days, custom fit tailored within 10 days.</p>
                <p><strong>Returns policy:</strong> Custom tailored pieces are non-refundable, but eligible for unlimited lifetime fitting adjustments.</p>
              </div>
            )}
            {activeTab === 'care' && (
              <div className="flex flex-col gap-2">
                <p><strong>Maintenance:</strong> Dry Clean Only (Professional organic solvent preference).</p>
                <p><strong>Conservation:</strong> {product.care}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
