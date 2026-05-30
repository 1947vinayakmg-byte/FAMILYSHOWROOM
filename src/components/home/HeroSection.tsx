import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { motion, AnimatePresence } from 'motion/react';

// ── Admin Banner bridge ──────────────────────────────────────────────────────
// Admin panel saves banners to localStorage under 'luxury_db_banners' with:
//   { id, imageUrl, title, subtitle, link, active, position }
// We read those here so admin changes are instantly reflected in the hero slider.
interface AdminBanner {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
  link: string;
  active: boolean;
  position: number;
}

import lehenga3 from '@/assets/lehengas/lehenga-3.jpg';
import kids5 from '@/assets/kids/kids-5.jpg';
import formal from '@/assets/mens/formal.jpg';
import sherwani3 from '@/assets/sherwanis/sherwani-3.jpg';

const FALLBACK_SLIDES = [
  {
    image: lehenga3,
    tag: 'HEIRLOOM BRIDAL COLLECTION',
    title: 'The Maharani Regal Heritage',
    subtitle: 'Indulge in pure Banarasi handlooms, intricate crimson velvet Zardosis, and hand-spun gold-capped weaves, tailored for high-society affairs.',
    cta: 'Explore Bridalwear',
    link: '/collection',
  },
  {
    image: kids5,
    tag: 'KIDS ROYAL SUITES',
    title: 'Velvet Brocade for Little Princes',
    subtitle: 'Delicate, non-itchy silk inner layered ethnic collections designed for child comfort without sacrificing traditional, opulent aesthetics.',
    cta: 'Shop Kids Boutique',
    link: '/kids',
  },
  {
    image: formal,
    tag: 'KINGS MANNERS & SUITS',
    title: 'Bespoke Italian Cut Suits',
    subtitle: 'Sovereign styles tailored out of English Merino cashmere, ensuring majestic postures and deep presence.',
    cta: 'Discover Men Regal',
    link: '/men',
  },
  {
    image: sherwani3,
    tag: 'ROYAL GROOM COUTURE',
    title: 'Monarch Raw Silk Sherwanis',
    subtitle: 'Imperial ivory and pastel Sherwanis adorned with hand-embroidered Zardosi, tailored for majestic wedding presence.',
    cta: 'Explore Sherwanis',
    link: '/men',
  },
];

function getLocalImageForPath(imgPath: string): string {
  if (!imgPath) return '';
  if (imgPath.includes('lehenga-3.jpg') || imgPath.includes('1595777457583-95e059d581b8')) return lehenga3;
  if (imgPath.includes('kids-5.jpg') || imgPath.includes('1605518216938-7c31b7b14ad0')) return kids5;
  if (imgPath.includes('formal.jpg') || imgPath.includes('1610030469983-98e550d6193c')) return formal;
  if (imgPath.includes('sherwani-3.jpg')) return sherwani3;
  return imgPath;
}

function getAdminBannerSlides() {
  try {
    const raw = localStorage.getItem('luxury_db_banners');
    if (!raw) return null;

    // Reset local storage if it contains old unsplash photos
    if (raw.includes('unsplash.com')) {
      localStorage.removeItem('luxury_db_banners');
      return null;
    }

    const banners: AdminBanner[] = JSON.parse(raw);
    const active = banners
      .filter((b) => b.active)
      .sort((a, b) => a.position - b.position);
    if (active.length === 0) return null;
    return active.map((b) => ({
      image: getLocalImageForPath(b.imageUrl),
      tag: 'LUXURY COLLECTION',
      title: b.title,
      subtitle: b.subtitle ?? '',
      cta: 'Explore Collection',
      link: b.link || '/collection',
    }));
  } catch {
    return null;
  }
}

export default function HeroSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Load slides: admin banners (if any active) → fallback static slides
  const [heroSlides, setHeroSlides] = useState(() => getAdminBannerSlides() ?? FALLBACK_SLIDES);

  // Re-read banners when tab regains focus (admin may have changed them)
  useEffect(() => {
    const onFocus = () => {
      const dynamic = getAdminBannerSlides();
      if (dynamic) {
        setHeroSlides(dynamic);
        setCurrentSlide(0);
      } else {
        setHeroSlides(FALLBACK_SLIDES);
      }
    };

    // focus → re-read when user switches back from admin tab
    window.addEventListener('focus', onFocus);

    // storage event → instant update when admin changes banners in another tab
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'luxury_db_banners') onFocus();
    };
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative h-[85vh] md:h-[90vh] bg-black overflow-hidden flex items-center justify-center pt-8" id="home-hero-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          {/* Blurred background copy for immersive color glow */}
          <img
            src={heroSlides[currentSlide].image}
            alt="Immersive Backdrop Glow"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-35 scale-110 pointer-events-none select-none"
          />

          {/* Soft dark vignette and gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-black/65 z-10 pointer-events-none" />

          {/* Main uncropped full image centered */}
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain object-center relative z-0 pointer-events-none select-none"
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating text context */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col items-start text-white gap-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <span className="text-[10px] md:text-xs font-sans tracking-[0.35em] uppercase text-[#D4AF37] font-semibold">
            {heroSlides[currentSlide].tag}
          </span>
        </motion.div>

        {/* Luxury Main Title */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl md:text-6.5xl font-display tracking-wider leading-[1.1] max-w-3xl font-normal text-white"
        >
          {heroSlides[currentSlide].title}
        </motion.h2>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-sm md:text-lg font-serif italic tracking-wide text-gray-200/95 max-w-xl leading-relaxed mt-2"
        >
          {heroSlides[currentSlide].subtitle}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap items-center gap-4 mt-6"
        >
          <button
            onClick={() => navigate(heroSlides[currentSlide].link || '/collection')}
            className="px-8 py-3.5 bg-[#D4AF37] hover:bg-white text-black font-sans uppercase font-bold tracking-[0.2em] text-[10px] md:text-xs transition-colors duration-300 shadow-xl cursor-pointer"
          >
            {heroSlides[currentSlide].cta}
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3.5 bg-black/40 hover:bg-black text-white border border-white/50 hover:border-[#D4AF37] font-sans uppercase tracking-[0.2em] text-[10px] md:text-xs transition-colors duration-300 backdrop-blur-md rounded-none cursor-pointer"
          >
            Book Fitting Appointment
          </button>
        </motion.div>
      </div>

      {/* Sliders navigation controls dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2.5 h-2.5 rounded-full border border-white transition-all cursor-pointer ${i === currentSlide ? 'bg-[#D4AF37] w-6' : 'bg-transparent'
              }`}
            title={`Skip to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
