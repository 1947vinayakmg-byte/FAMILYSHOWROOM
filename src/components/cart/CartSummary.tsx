import React from 'react';
import { Tag, Award, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

interface CartSummaryProps {
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;
  activeCoupon: { code: string; value: number; description: string } | null;
  couponCode: string;
  setCouponCode: (code: string) => void;
  onApplyCoupon: (e: React.FormEvent) => void;
  onRemoveCoupon: () => void;
  onCheckout: () => void;
}

export default function CartSummary({
  cartSubtotal,
  cartDiscount,
  cartTotal,
  activeCoupon,
  couponCode,
  setCouponCode,
  onApplyCoupon,
  onRemoveCoupon,
  onCheckout
}: CartSummaryProps) {
  return (
    <aside className="flex flex-col gap-6 font-sans">
      <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm h-fit">
        <h3 className="text-[12px] font-sans uppercase font-bold tracking-[0.2em] border-b border-gray-100 pb-3 mb-4 text-black text-center">
          Atelier Summary Value
        </h3>

        {/* Calculations */}
        <div className="flex flex-col gap-3 font-sans text-xs uppercase tracking-wider pb-4 mb-4 border-b border-gray-50">
          <div className="flex justify-between text-gray-500">
            <span>Sub-Apparel Sum</span>
            <span className="text-black font-semibold">₹{cartSubtotal.toLocaleString('en-IN')}</span>
          </div>

          {/* Promo discounts */}
          {activeCoupon ? (
            <div className="flex justify-between text-[#A08560]">
              <span className="flex items-center gap-1 font-semibold">
                <Tag className="w-3.5 h-3.5 text-[#D4AF37]" /> Code: {activeCoupon.code} ({activeCoupon.value}% Off)
              </span>
              <span className="font-bold">-₹{cartDiscount.toLocaleString('en-IN')}</span>
            </div>
          ) : (
            <div className="flex justify-between text-gray-400 text-[10px]">
              <span>Atelier Promo Discount</span>
              <span>No ACTIVE promo</span>
            </div>
          )}

          <div className="flex justify-between text-gray-500">
            <span>Showroom Fitting & Courier</span>
            <span className="text-[#25D366] font-bold">VIP COMPLIMENTARY</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-baseline border-b border-gray-100 pb-4 mb-5">
          <span className="text-xs text-gray-700 uppercase font-sans tracking-widest font-bold">Total Invoice</span>
          <span className="text-xl font-bold text-black font-serif">
            ₹{cartTotal.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Coupon Form */}
        <div className="mb-5 select-none font-sans">
          {activeCoupon ? (
            <div className="bg-[#FAF7F2] p-3.5 rounded border border-[#D4AF37]/25 flex justify-between items-center text-[10px] tracking-wider uppercase text-[#A08560] font-sans font-bold">
              <div>
                <p>Applied: <strong>{activeCoupon.code}</strong></p>
                <p className="text-[9px] text-gray-400 font-normal leading-tight mt-0.5">{activeCoupon.description}</p>
              </div>
              <button
                onClick={onRemoveCoupon}
                className="p-1 text-gray-500 hover:text-black border border-gray-200 bg-white shadow-sm rounded cursor-pointer uppercase text-[8px]"
              >
                Discard
              </button>
            </div>
          ) : (
            <form onSubmit={onApplyCoupon} className="flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="ENTER ATELIER CODES (DEMO10)"
                className="flex-grow bg-black text-white placeholder-gray-600 p-2 text-[10px] tracking-widest uppercase border border-gray-800 outline-none focus:border-[#D4AF37] font-sans"
                required
              />
              <button
                type="submit"
                className="bg-[#D4AF37] hover:bg-black text-black hover:text-[#D4AF37] border border-[#D4AF37] px-4 py-2 text-[10px] uppercase font-bold tracking-widest cursor-pointer transition-colors"
              >
                Apply
              </button>
            </form>
          )}
        </div>

        {/* Checkout actions */}
        <button
          onClick={onCheckout}
          className="w-full bg-[#111] hover:bg-black text-[#D4AF37] py-4 text-xs font-sans uppercase font-bold tracking-[0.25em] transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
        >
          Express Checkout <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
        </button>
      </div>

      {/* Security assertions */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-50 flex flex-col gap-3 font-sans text-[10px] uppercase tracking-wider text-gray-505">
        <span className="flex items-center gap-2"><Award className="w-4 h-4 text-[#D4AF37]" /> Three-generational Showroom Fit Guarantees</span>
        <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Razorpay partnered live billing vault encryption</span>
        <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> Reserved garment holds valid for only 60 minutes.</span>
      </div>
    </aside>
  );
}
