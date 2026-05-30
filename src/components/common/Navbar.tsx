import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X, MapPin, Globe } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const { cartCount, wishlist, authUser, logout, searchKeyword, setSearchKeyword } = useShop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchOpen(false);
    navigate('/collection');
  };

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'Couture Collections', path: '/collection' },
    { label: 'Our Heritage', path: '/about' },
    { label: 'Private Fitting', path: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100" id="showroom-header">
        {/* Luxury Announcement Banner */}
        <div className="bg-[#0D0D0D] text-[#D4AF37] text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] py-2 px-4 flex justify-between items-center overflow-hidden">
          <div className="flex items-center gap-1.5 mx-auto animate-pulse">
            <span>: USE PROMO CODE <strong className="text-white hover:underline cursor-pointer">DEMO10</strong> FOR 10% OFF :  </span>
          </div>
        </div>

        {/* Top Header info */}
        <div className="hidden lg:flex justify-between items-center px-12 py-1.5 bg-[#FAF7F2] border-b border-gray-100 text-[10px] text-gray-500 uppercase tracking-widest font-sans">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#C5A880]" /> Flagship Store: Bagalkot, Karnataka, INDIA</span>
            <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-[#C5A880]" /> Pan-India Shipping</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Customer Concierge: +91 6360510473</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-4 md:px-12 py-4 md:py-5 bg-white relative">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-[#D4AF37] cursor-pointer"
              title="Menu"
              id="global-menu-burger"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Category Navigation */}
            <nav className="hidden lg:flex items-center gap-5 ml-6" id="desktop-category-nav">
              {[
                { label: 'MEN', path: '/men' },
                { label: 'WOMEN', path: '/women' },
                { label: 'KIDS', path: '/kids' },
                { label: 'SHERWANIS', path: '/sherwanis' },
                { label: 'BRIDAL LEHENGAS', path: '/bridal-lehengas' }
              ].map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[10px] font-sans font-semibold uppercase tracking-[0.2em] transition-all hover:text-[#D4AF37] cursor-pointer py-1 ${isActive
                      ? 'text-[#D4AF37] border-b border-[#D4AF37]/50'
                      : 'text-gray-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Logo center */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center select-none cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-xs md:text-sm font-script text-[#C5A880] lowercase tracking-widest -mb-1.5 select-none">atelier</span>
            <span className="text-2xl md:text-3.5xl font-display tracking-[0.22em] text-[#0A0A0A] font-normal leading-none select-none">DEMO</span>
            <span className="text-[7px] md:text-[8px] font-sans tracking-[0.45em] text-[#C5A880] uppercase mt-0.5 font-bold select-none">FAMILY SHOWROOM</span>
          </div>

          {/* Utilities */}
          <div className="flex items-center gap-1.5 md:gap-4 pr-1" id="utilities-nav-bar">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-[#D4AF37] transition-colors relative cursor-pointer"
              title="Search Bridalwear"
              id="btn-navbar-search-toggle"
            >
              <Search className="w-5 h-5" />
            </button>

            {authUser ? (
              <div className="relative group hidden sm:block">
                <button className="flex items-center gap-1 p-2 text-[#D4AF37] hover:text-black font-sans text-xs tracking-wider uppercase font-medium cursor-pointer">
                  <User className="w-5 h-5 text-[#C5A880]" />
                  <span className="max-w-[70px] truncate">{authUser.name}</span>
                </button>
                <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-gray-200 shadow-2xl py-2 hidden group-hover:block rounded z-50">
                  <div className="px-4 py-1.5 border-b border-gray-100 mb-1">
                    <p className="text-[10px] text-gray-400 font-sans uppercase">Signed In As</p>
                    <p className="text-xs font-serif font-semibold text-gray-800 truncate">{authUser.name}</p>
                  </div>
                  <Link to="/wishlist" className="block px-4 py-1.5 text-xs text-gray-700 hover:bg-[#FAF7F2] hover:text-[#D4AF37] font-sans uppercase tracking-wider">My Wishlist</Link>
                  <Link to="/cart" className="block px-4 py-1.5 text-xs text-gray-700 hover:bg-[#FAF7F2] hover:text-[#D4AF37] font-sans uppercase tracking-wider">My Cart</Link>
                  <button
                    onClick={logout}
                    className="w-full text-left block px-4 py-1.5 text-xs text-red-650 hover:bg-red-50 font-sans uppercase tracking-wider border-t border-gray-100 cursor-pointer"
                  >
                    Atelier Exit
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/auth"
                className="p-2 text-gray-700 hover:text-[#D4AF37] hidden sm:block"
                title="Client Login"
              >
                <User className="w-5 h-5" />
              </Link>
            )}

            <Link
              to="/wishlist"
              className="p-2 text-gray-700 hover:text-[#D4AF37] relative hidden sm:block"
              title="My Atelier Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#D4AF37] text-white text-[8px] font-sans flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="p-2 text-gray-700 hover:text-[#D4AF37] relative"
              title="Atelier Cart Bag"
              id="navbar-bag-link"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-black text-[#D4AF37] text-[8px] font-sans border border-[#D4AF37] flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Category Navigation Bar - Horizontal Scroll (visible only on mobile) */}
        <div className="lg:hidden flex items-center justify-start gap-4 overflow-x-auto whitespace-nowrap px-4 py-2.5 bg-[#FAF7F2] border-t border-gray-100 no-scrollbar" id="mobile-category-bar">
          <style>{`
            #mobile-category-bar::-webkit-scrollbar {
              display: none;
            }
            #mobile-category-bar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          {[
            { label: 'MEN', path: '/men' },
            { label: 'WOMEN', path: '/women' },
            { label: 'KIDS', path: '/kids' },
            { label: 'SHERWANIS', path: '/sherwanis' },
            { label: 'BRIDAL LEHENGAS', path: '/bridal-lehengas' }
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `text-[9px] font-sans font-bold uppercase tracking-[0.18em] transition-all hover:text-[#D4AF37] cursor-pointer py-1 px-2 shrink-0 ${isActive
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                  : 'text-gray-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Search overlays */}
        {isSearchOpen && (
          <SearchBar
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            onSubmit={handleSearchSubmit}
          />
        )}
      </header>

      {/* Mobile left menus */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        authUser={authUser}
        logout={logout}
      />

      {/* App-like Mobile Bottom Dock */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 z-40 grid grid-cols-5 py-2 shadow-2xl" id="mobile-app-bottom-dock">
        <Link to="/" className="flex flex-col items-center justify-center text-gray-600 hover:text-[#D4AF37] transition-colors font-sans text-[9px] uppercase tracking-wider">
          <Globe className="w-5 h-5 mb-0.5" />
          <span>Atelier</span>
        </Link>
        <Link to="/collection" className="flex flex-col items-center justify-center text-gray-600 hover:text-[#D4AF37] transition-colors font-sans text-[9px] uppercase tracking-wider">
          <Search className="w-5 h-5 mb-0.5" />
          <span>Couture</span>
        </Link>
        <Link to="/wishlist" className="flex flex-col items-center justify-center text-gray-600 hover:text-[#D4AF37] transition-colors relative font-sans text-[9px] uppercase tracking-wider">
          <Heart className="w-5 h-5 mb-0.5" />
          {wishlist.length > 0 && (
            <span className="absolute top-0 right-3 bg-[#D4AF37] text-white w-3.5 h-3.5 rounded-full text-[8px] flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
          <span>Wishlist</span>
        </Link>
        <Link to="/auth" className="flex flex-col items-center justify-center text-gray-600 hover:text-[#D4AF37] transition-colors font-sans text-[9px] uppercase tracking-wider">
          <User className="w-5 h-5 mb-0.5" />
          <span>Profile</span>
        </Link>
        <Link to="/cart" className="flex flex-col items-center justify-center text-gray-600 hover:text-[#D4AF37] transition-colors relative font-sans text-[9px] uppercase tracking-wider">
          <ShoppingBag className="w-5 h-5 mb-0.5" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-3 bg-black text-[#D4AF37] w-3.5 h-3.5 rounded-full text-[8px] flex items-center justify-center border border-[#D4AF37]">
              {cartCount}
            </span>
          )}
          <span>Bag</span>
        </Link>
      </div>
    </>
  );
}
