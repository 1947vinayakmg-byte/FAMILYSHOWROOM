import React, { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import RelatedProducts from '../components/product/RelatedProducts';
import ProductBadgesAndReviews from '../components/product/ProductBadgesAndReviews';
import { generateWhatsAppLink } from '../utils/generateWhatsAppLink';
import { getPriceForSize } from '../utils/priceHelper';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, isInWishlist } = useShop();

  // Find target product
  const product = useMemo(() => {
    return products.find((p) => p.id === id);
  }, [products, id]);

  if (!product) {
    return (
      <div className="bg-[#FAF7F2] min-h-screen flex flex-col items-center justify-center p-6 text-center select-none">
        <h2 className="text-xl md:text-2xl font-serif text-gray-800 uppercase tracking-widest mb-3">
          Couture Fragment Missing
        </h2>
        <p className="text-xs text-gray-550 font-sans uppercase mb-6 max-w-sm">
          The requested luxury garment is currently unavailable or being restored in our vaults.
        </p>
        <Link to="/collection" className="bg-black text-[#D4AF37] px-8 py-3.5 text-xs font-sans uppercase font-bold tracking-widest hover:bg-gray-900 transition-colors">
          Browse Active Weaves
        </Link>
      </div>
    );
  }

  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string }>(
    product.colors[0] || { name: 'Gold', hex: '#D4AF37' }
  );
  const [qty, setQty] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'fabric' | 'shipping' | 'care'>('fabric');
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  const adjustedPrice = useMemo(() => {
    return getPriceForSize(product.price, selectedSize);
  }, [product.price, selectedSize]);

  const adjustedOriginalPrice = useMemo(() => {
    return getPriceForSize(product.originalPrice, selectedSize);
  }, [product.originalPrice, selectedSize]);

  // Compute discount percent
  const discountPercent = useMemo(() => {
    return Math.round(
      ((adjustedOriginalPrice - adjustedPrice) / adjustedOriginalPrice) * 100
    );
  }, [adjustedOriginalPrice, adjustedPrice]);

  const isInSaved = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, qty);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, qty);
    navigate('/checkout');
  };

  // WhatsApp concierge message using utility
  const whatsappQueryUrl = useMemo(() => {
    const text = `Hello DEMO Showroom! I am looking to place an active custom order for:\n\n*Product:* ${product.name}\n*Price:* ₹${adjustedPrice.toLocaleString('en-IN')}\n*Size Required:* ${selectedSize}\n*Color Tone:* ${selectedColor.name}\n\nPlease advise your DLF Emporio master tailor on fitting slots.`;
    return generateWhatsAppLink(text);
  }, [product, selectedSize, selectedColor, adjustedPrice]);

  // Recommendations
  const relatedProducts = useMemo(() => {
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 10);
  }, [products, product]);

  return (
    <div className="bg-[#FCFAF8] min-h-screen text-[#1a1a1a] pb-16" id="product-detail-view">

      {/* Editorial breadcrumbs trail line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-2.5 flex items-center justify-between text-[10px] font-sans text-gray-400 uppercase tracking-widest border-b border-gray-100 flex-wrap gap-3">
        <div className="flex items-center gap-1.5">
          <Link to="/" className="hover:text-black transition-colors">Atelier</Link>
          <ChevronRight className="w-3 h-3 text-gray-300" />
          <Link to="/collection" className="hover:text-black transition-colors">Showroom Couture</Link>
          <ChevronRight className="w-3 h-3 text-gray-300" />
          <span className="text-gray-700">{product.subcategory}</span>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 hover:text-black transition-colors pr-1 cursor-pointer font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Catalog
        </button>
      </div>

      {/* Product Details Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">

        {/* Left Gallery (7 columns) */}
        <div className="lg:col-span-7">
          <ProductGallery
            images={product.images}
            productName={product.name}
            isWeddingCollection={product.isWeddingCollection}
            activeImageIndex={activeImageIndex}
            setActiveImageIndex={setActiveImageIndex}
          />
        </div>

        {/* Right Info (5 columns) */}
        <div className="lg:col-span-5">
          <ProductInfo
            product={product}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            qty={qty}
            setQty={setQty}
            discountPercent={discountPercent}
            isInSaved={isInSaved}
            onAddToCart={handleAddToCart}
            onToggleWishlist={() => toggleWishlist(product)}
            whatsappQueryUrl={whatsappQueryUrl}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onOpenSizeChart={() => setIsSizeChartOpen(true)}
            onBuyNow={handleBuyNow}
          />
        </div>

      </div>

      {/* 3D Badges and Certified Customer Reviews */}
      <ProductBadgesAndReviews product={product} />

      {/* Matching Ensembles */}
      <RelatedProducts products={relatedProducts} />

      {/* SIZING CHART POPUP DIALOG */}
      <AnimatePresence>
        {isSizeChartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSizeChartOpen(false)}
              className="fixed inset-0 bg-black/75 z-50 pointer-events-auto"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-x-4 max-w-lg mx-auto top-1/2 -translate-y-1/2 bg-white z-50 p-6 rounded-lg shadow-2xl overflow-hidden"
              id="dialog-size-chart"
            >
              <div className="flex justify-between items-center pb-3 border-b border-gray-100 mb-4 select-none font-sans">
                <span className="text-sm font-sans uppercase font-bold tracking-widest text-[#0D0D0D]">Bespoke Sizing Parameters</span>
                <button
                  type="button"
                  onClick={() => setIsSizeChartOpen(false)}
                  className="p-1 text-gray-400 hover:text-black cursor-pointer text-xs font-bold"
                >
                  Size Chart Close
                </button>
              </div>

              <div className="overflow-x-auto select-none mt-2">
                <table className="w-full text-[10px] font-sans uppercase text-center border-collapse">
                  <thead>
                    <tr className="bg-[#FAF7F2] text-gray-500 border-b border-gray-100">
                      <th className="py-2.5 px-3">Atelier Size</th>
                      <th className="py-2.5 px-3">Chest (in)</th>
                      <th className="py-2.5 px-3">Waist (in)</th>
                      <th className="py-2.5 px-3">Shoulder (in)</th>
                      <th className="py-2.5 px-3">Fitting Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 divide-y divide-gray-100">
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-black bg-[#FAF7F2]">S</td>
                      <td className="py-2.5 px-3">36 - 38</td>
                      <td className="py-2.5 px-3">30 - 32</td>
                      <td className="py-2.5 px-3">16.5</td>
                      <td className="py-2.5 px-3 text-gray-400">Regular</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-black bg-[#FAF7F2]">M</td>
                      <td className="py-2.5 px-3">38 - 40</td>
                      <td className="py-2.5 px-3">32 - 34</td>
                      <td className="py-2.5 px-3">17.5</td>
                      <td className="py-2.5 px-3 text-gray-400">Regular</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-black bg-[#FAF7F2]">L</td>
                      <td className="py-2.5 px-3">40 - 42</td>
                      <td className="py-2.5 px-3">34 - 36</td>
                      <td className="py-2.5 px-3">18.5</td>
                      <td className="py-2.5 px-3 text-gray-400">Loose Fit</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-black bg-[#FAF7F2]">XL</td>
                      <td className="py-2.5 px-3">42 - 44</td>
                      <td className="py-2.5 px-3">36 - 38</td>
                      <td className="py-2.5 px-3">19.5</td>
                      <td className="py-2.5 px-3 text-gray-400">Loose Fit</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-[#D4AF37] bg-black">Custom</td>
                      <td colSpan={4} className="py-2.5 px-3 italic lowercase text-gray-500 font-sans tracking-wide">
                        our master drapes call to stitch to your exact body specifications.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-4 border-t border-gray-100 bg-[#FAF7F2] p-4 text-[10px] font-sans leading-relaxed text-[#A08560] uppercase mt-4 select-none">
                <p><strong>Note:</strong> We allow comprehensive free lifetime sleeve hemming, neck modifications, and waist expansion limits on all custom-checked attire orders.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
