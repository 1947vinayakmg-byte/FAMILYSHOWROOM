import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { AnimatePresence } from 'motion/react';
import EmptyCart from '../components/cart/EmptyCart';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

export default function Cart() {
  const {
    cart,
    updateCartQuantity,
    removeFromCart,
    cartCount,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    activeCoupon,
    applyCoupon,
    removeCoupon
  } = useShop();

  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode) return;
    const ok = applyCoupon(couponCode);
    if (ok) {
      setCouponCode('');
    }
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1a1a1a] pb-16" id="cart-view">
      {/* Dynamic boutique sub header */}
      <section className="bg-white border-b border-gray-100 py-8 text-center px-4 select-none">
        <h1 className="text-2xl md:text-3xl font-serif tracking-tight text-gray-900 uppercase">
          Your Boutique Selection ({cartCount} items)
        </h1>
        <p className="text-[10px] md:text-xs text-gray-400 font-sans tracking-widest uppercase mt-1">
          Holds active bookings for DLF Emporio fittings and home white-glove custom trials.
        </p>
      </section>

      {/* Primary Layout splits */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left lists of items selected */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="hidden md:grid grid-cols-12 text-[10px] uppercase tracking-widest text-gray-400 font-sans font-bold px-4 mb-2 select-none">
            <div className="col-span-6">Apparel Design Specifications</div>
            <div className="col-span-2 text-center">Size</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Sum valuation</div>
          </div>

          <div className="flex flex-col gap-4">
            <AnimatePresence>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateCartQuantity={updateCartQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right aside billing totals summaries */}
        <div className="lg:col-span-4">
          <CartSummary
            cartSubtotal={cartSubtotal}
            cartDiscount={cartDiscount}
            cartTotal={cartTotal}
            activeCoupon={activeCoupon}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            onApplyCoupon={handleApplyCouponSubmit}
            onRemoveCoupon={removeCoupon}
            onCheckout={() => navigate('/checkout')}
          />
        </div>

      </div>
    </div>
  );
}
