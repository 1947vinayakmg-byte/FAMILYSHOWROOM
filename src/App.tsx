/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Toast from './components/Toast';
import Loader from './components/common/Loader';
import WelcomeCover from './components/common/WelcomeCover';

// Pages
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import Wishlist from './pages/Wishlist';
import About from './pages/About';
import Contact from './pages/Contact';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Sherwanis from './pages/Sherwanis';
import BridalLehengas from './pages/BridalLehengas';
import WeddingPavilion from './pages/WeddingPavilion';
import GroomChamber from './pages/GroomChamber';

// Scroll Restoration Utility
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [initLoader, setInitLoader] = useState(true);
  const [hasEntered, setHasEntered] = useState(() => {
    return sessionStorage.getItem('atelier_welcome_entered') === 'true';
  });

  const handleEnterBoutique = () => {
    setHasEntered(true);
    sessionStorage.setItem('atelier_welcome_entered', 'true');
  };

  // Elite 1.5 seconds monogram entrance sequence on initial visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitLoader(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ShopProvider>
      <BrowserRouter>
        {/* Helper to snap coordinates back to top index */}
        <ScrollToTop />
        
        {/* Luxury circular monogram drawing micro-loader */}
        {initLoader && <Loader />}

        {/* Breathtaking Fading Welcome Cover Screen Gate */}
        {!hasEntered && <WelcomeCover onEnter={handleEnterBoutique} />}

        <div className="min-h-screen flex flex-col justify-between selection:bg-[#D4AF37]/25 selection:text-black" id="applet-viewport">
          <div>
            <Navbar />
            
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/men" element={<Men />} />
                <Route path="/women" element={<Women />} />
                <Route path="/kids" element={<Kids />} />
                <Route path="/sherwanis" element={<Sherwanis />} />
                <Route path="/bridal-lehengas" element={<BridalLehengas />} />
                <Route path="/wedding-pavilion" element={<WeddingPavilion />} />
                <Route path="/groom-chamber" element={<GroomChamber />} />
              </Routes>
            </main>
          </div>

          <Footer />
          
          {/* Universal spring notification slides */}
          <Toast />
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}
