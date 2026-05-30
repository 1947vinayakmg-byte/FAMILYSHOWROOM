import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  isWeddingCollection?: boolean;
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
}

export default function ProductGallery({
  images,
  productName,
  isWeddingCollection,
  activeImageIndex,
  setActiveImageIndex
}: ProductGalleryProps) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Dynamic window resizing checker to classify Desktop vs Mobile devices
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop Hover Magnification States
  const [heroZoomPos, setHeroZoomPos] = useState({ x: 50, y: 50 });
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [isHoveringControl, setIsHoveringControl] = useState(false); // Controls overlay button mouse tracking

  // Desktop Hover Mouse Move Handler
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setHeroZoomPos({ x, y });
  };

  // Lightbox Modal Toggle (Available on both desktop and mobile)
  const handleOpenZoom = () => {
    setIsZoomOpen(true);
  };

  const handleCloseZoom = () => {
    setIsZoomOpen(false);
  };

  // Navigation handlers
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setActiveImageIndex(activeImageIndex === 0 ? images.length - 1 : activeImageIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setActiveImageIndex(activeImageIndex === images.length - 1 ? 0 : activeImageIndex + 1);
  };

  const currentImage = images[activeImageIndex] || images[0];
  const shouldZoom = isDesktop && isHeroHovered && !isHoveringControl;

  return (
    <div className="flex flex-col md:flex-row gap-4 relative">
      
      {/* 1. Vertical thumbnails array */}
      <div className="flex md:flex-col gap-3 order-2 md:order-1 justify-center md:justify-start">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImageIndex(i)}
            className={`w-14 h-18 md:w-16 md:h-22 rounded overflow-hidden aspect-[3/4] border bg-[#FAF7F2] transition-all duration-300 cursor-pointer ${
              i === activeImageIndex
                ? 'border-[#D4AF37] ring-1 ring-[#D4AF37] scale-105 shadow-md'
                : 'border-gray-200 opacity-60 hover:opacity-100 hover:scale-102'
            }`}
            title={`Swatches thumbnail ${i + 1}`}
          >
            <img
              src={img}
              alt={productName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </button>
        ))}
      </div>

      {/* 2. Main Hero Display Frame (Desktop: Inline Hover Zoom | Mobile/Click: Tap to Lightbox) */}
      <div 
        className={`group/hero flex-grow aspect-[3/4] max-h-[640px] bg-[#FAF7F2] order-1 md:order-2 rounded-lg border border-gray-100 shadow-sm relative overflow-hidden select-none ${
          isDesktop ? (isHoveringControl ? 'cursor-default' : 'cursor-crosshair') : 'cursor-pointer'
        }`}
        onMouseMove={handleHeroMouseMove}
        onMouseEnter={() => isDesktop && setIsHeroHovered(true)}
        onMouseLeave={() => {
          if (isDesktop) {
            setIsHeroHovered(false);
            setHeroZoomPos({ x: 50, y: 50 });
          }
        }}
        onClick={handleOpenZoom}
      >
        
        {/* Heritage Label */}
        {isWeddingCollection && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-black text-[#D4AF37] border border-[#D4AF37]/50 text-[9px] font-sans font-bold tracking-[0.25em] p-2 py-1.5 uppercase leading-none shadow-xl">
            Heritage Pavilion Couture
          </div>
        )}

        {/* View Full Screen Trigger (Functional on both desktop and mobile!) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOpenZoom();
          }}
          onMouseEnter={() => setIsHoveringControl(true)}
          onMouseLeave={() => setIsHoveringControl(false)}
          className="absolute top-4 right-4 z-10 p-3 bg-black/65 hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 hover:border-black rounded-full shadow-lg transition-all duration-300 cursor-pointer"
          title="View Full Screen"
        >
          <Maximize2 className="w-4.5 h-4.5" />
        </button>

        {/* Left Arrow Navigation Overlay Button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            onMouseEnter={() => setIsHoveringControl(true)}
            onMouseLeave={() => setIsHoveringControl(false)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/40 hover:bg-black/85 border border-white/10 text-[#D4AF37] hover:text-white rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover/hero:opacity-100 cursor-pointer"
            title="Previous Image"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
        )}

        {/* Right Arrow Navigation Overlay Button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            onMouseEnter={() => setIsHoveringControl(true)}
            onMouseLeave={() => setIsHoveringControl(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/40 hover:bg-black/85 border border-white/10 text-[#D4AF37] hover:text-white rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover/hero:opacity-100 cursor-pointer"
            title="Next Image"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        )}

        {/* Main Product Image Visual (Desktop: Hover pan-scale zoom | Mobile: Normal fit) */}
        <img
          src={currentImage}
          alt={productName}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top pointer-events-none"
          style={{
            transformOrigin: shouldZoom ? `${heroZoomPos.x}% ${heroZoomPos.y}%` : 'center center',
            transform: shouldZoom ? 'scale(2)' : 'scale(1)',
            // High refresh fluid 0.03s translation response during hover tracking on desktop
            transition: shouldZoom ? 'transform-origin 0.03s ease-out, transform 0.25s ease-out' : 'transform 0.25s ease-out'
          }}
        />

        {/* Dynamic Helper Hint Message */}
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center pointer-events-none">
          {/* Maintained clean overlay layout without text cards */}
        </div>

      </div>

      {/* 3. MINIMAL COUTURE LIGHTBOX THEATER OVERLAY (Desktop & Mobile) */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4 select-none"
          >
            
            {/* Absolute Close (X) Button (Top-Right Overlay) */}
            <button
              onClick={handleCloseZoom}
              className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 hover:border-black rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:scale-105"
              title="Exit Full Screen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Navigation Overlay Arrow */}
            {images.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-50 p-4 bg-black/45 hover:bg-[#D4AF37] border border-white/5 hover:border-black text-[#D4AF37] hover:text-black rounded-full shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                title="Previous Image"
              >
                <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
              </button>
            )}

            {/* Right Navigation Overlay Arrow */}
            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-50 p-4 bg-black/45 hover:bg-[#D4AF37] border border-white/5 hover:border-black text-[#D4AF37] hover:text-black rounded-full shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                title="Next Image"
              >
                <ChevronRight className="w-7 h-7 stroke-[2.5]" />
              </button>
            )}

            {/* Maximized Image Viewport Container */}
            <div className="w-full h-full flex items-center justify-center max-w-[90vw] max-h-[85vh]">
              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={currentImage}
                alt={productName}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
