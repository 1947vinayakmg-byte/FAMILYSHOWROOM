import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandStory from '../components/home/BrandStory';
import CategorySection from '../components/home/CategorySection';
import PromoBanner from '../components/home/PromoBanner';
import OfferBanner from '../components/home/OfferBanner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CountdownPromo from '../components/home/CountdownPromo';
import Testimonials from '../components/home/Testimonials';
import InstagramSection from '../components/home/InstagramSection';

export default function Home() {
  return (
    <div className="bg-[#FCFAF8] min-h-screen pb-10" id="home-view">
      {/* 1. Hero Dynamic Slider Carousel */}
      <HeroSection />

      {/* 2. Short Brand Story Legacy Pitch */}
      <BrandStory />

      {/* 3. Grid curates pavilions */}
      <CategorySection />

      {/* Seasonal Promo Curation Banner */}
      <PromoBanner />

      {/* 4. Imperial fittings and booking coordinates */}
      <OfferBanner />

      {/* 5. Showcase Trending products card array */}
      <FeaturedProducts />

      {/* Persistent 3-Hour 40% Off Countdown Timer */}
      <CountdownPromo />

      {/* 6. Testimonials reviews from elite family curators */}
      <Testimonials />

      {/* 7. Instagram feed visuals */}
      <InstagramSection />
    </div>
  );
}
