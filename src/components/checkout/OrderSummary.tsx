import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { CartItem } from '../../types';

interface OrderSummaryProps {
  cart: CartItem[];
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;
  activeCoupon: { code: string; value: number } | null;
}

export default function OrderSummary({
  cart,
  cartSubtotal,
  cartDiscount,
  cartTotal,
  activeCoupon
}: OrderSummaryProps) {
  return (
    <aside className="flex flex-col gap-6 select-none font-sans" id="checkout-summary-column">
      {/* Curation Preview Items */}
      <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm flex flex-col gap-4">
        <h3 className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-black border-b border-gray-100 pb-3 mb-2 text-center">
          Occasion Basket Preview
        </h3>

        <div className="hidden lg:flex flex-col gap-3.5 max-h-[300px] overflow-y-auto border border-gray-150 p-3 rounded bg-[#FAF7F2]">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-3.5 items-center last:border-0 border-b border-gray-100 pb-3">
              <div className="w-10 h-14 rounded overflow-hidden aspect-[3/4] bg-white border border-gray-100 shrink-0">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-grow min-w-0 text-left">
                <h4 className="text-[11px] font-serif font-black text-gray-900 truncate leading-snug">{item.product.name}</h4>
                <p className="text-[10px] text-gray-450 uppercase tracking-wide leading-none mt-0.5">Size: {item.selectedSize} | Qty: {item.quantity}</p>
                <p className="text-[10px] text-[#A08560] font-mono leading-none mt-1">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Invoicing subtotals */}
        <div className="flex flex-col gap-2.5 font-sans text-xs uppercase tracking-wider border-b border-gray-100 pb-4">
          <div className="flex justify-between text-gray-500">
            <span>Couture Subtotal</span>
            <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
          </div>
          
          {activeCoupon ? (
            <div className="flex justify-between text-[#A08560]">
              <span>Applied Promo Coupon</span>
              <span>-₹{cartDiscount.toLocaleString('en-IN')}</span>
            </div>
          ) : (
            <div className="flex justify-between text-gray-400 text-[10px]">
              <span>Applied Promo Coupon</span>
              <span>None active</span>
            </div>
          )}

          <div className="flex justify-between text-gray-500">
            <span>Showroom VIP Courier</span>
            <span className="text-[#25D366] font-bold">COMPLIMENTARY</span>
          </div>
        </div>

        {/* Absolute final total */}
        <div className="flex justify-between items-baseline font-serif mt-2">
          <span className="text-xs uppercase font-sans tracking-widest text-gray-600 font-bold">Total Invoice Value</span>
          <span className="text-lg md:text-xl font-bold text-black font-serif">
            ₹{cartTotal.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Security declarations */}
      <div className="bg-[#FAF7F2] border border-[#EBE3D5] p-5 rounded-lg flex flex-col gap-3 font-sans text-[10px] uppercase text-gray-500 tracking-wider">
        <span className="flex items-center gap-2 font-bold text-black border-b border-gray-100 pb-2"><ShieldCheck className="w-4 h-4 text-[#D4AF37]" />Secure Certification</span>
        <p className="leading-relaxed font-sans text-gray-500">All fabric balances are verified at DLF Emporio storage rooms before shipping dispatch. Refund requests qualify for fitting adjustments managed under lifetime showroom tailoring.</p>
      </div>
    </aside>
  );
}
