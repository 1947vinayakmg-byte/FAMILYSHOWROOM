import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ClipboardList, Landmark, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { OrderDetails } from '../types';
import CheckoutForm from '../components/checkout/CheckoutForm';
import PaymentMethods from '../components/checkout/PaymentMethods';
import OrderSummary from '../components/checkout/OrderSummary';

export default function Checkout() {
  const { cart, cartSubtotal, cartDiscount, cartTotal, activeCoupon, clearCart, authUser } = useShop();
  const navigate = useNavigate();

  // Address and payment states
  const [form, setForm] = useState<OrderDetails>({
    fullName: authUser?.name || '',
    email: authUser?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const [orderFinalizedId, setOrderFinalizedId] = useState<string | null>(null);
  const [isPaying, setIsPaying] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsPaying(true);

    // Simulate transaction delay
    setTimeout(() => {
      setIsPaying(false);
      const generatedId = `LX-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderFinalizedId(generatedId);
      clearCart(); // Flush bag contents
    }, 2500);
  };

  // SUCCESS OVERLAY SCREEN
  if (orderFinalizedId) {
    return (
      <div className="bg-[#FAF7F2] min-h-screen flex items-center justify-center p-6 select-none" id="checkout-success-view">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-[#D4AF37]/40 max-w-xl w-full p-8 text-center rounded-lg shadow-2xl flex flex-col items-center gap-5 font-sans"
        >
          <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full border border-[#25D366] flex items-center justify-center">
            <CheckCircle className="w-8 h-8 fill-current text-[#25D366]" />
          </div>

          <h1 className="text-xl md:text-3xl font-serif text-black font-semibold uppercase tracking-wide">
            Order Securely Registered
          </h1>
          
          <div className="bg-[#FAF7F2] p-4 py-3 rounded-lg border border-[#EBE3D5] text-xs font-mono uppercase tracking-wider text-gray-700 w-full text-left flex flex-col gap-1.5">
            <p className="flex justify-between border-b border-gray-100 pb-1"><span>Invoice Record ID:</span> <strong className="text-black">{orderFinalizedId}</strong></p>
            <p className="flex justify-between border-b border-gray-100 pb-1"><span>Consignee:</span> <strong className="text-black">{form.fullName}</strong></p>
            <p className="flex justify-between border-b border-gray-100 pb-1"><span>Destination city:</span> <strong className="text-black">{form.city}, {form.state}</strong></p>
            <p className="flex justify-between border-b border-gray-100 pb-1"><span>Method chosen:</span> <strong className="text-black">{form.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Merchant Wallet'}</strong></p>
            <p className="flex justify-between pt-1"><span>Total sum:</span> <strong className="text-black text-sm">₹{cartTotal.toLocaleString('en-IN')}</strong></p>
          </div>

          <p className="text-xs text-gray-400 font-sans uppercase leading-relaxed tracking-wide mt-2">
            Our luxury DLF Emporio flagship packing manager is currently selecting your custom attire. A WhatsApp representative will reach out in the next 30 minutes to finalize exact sleeve lengths and tailoring options. Thank you.
          </p>

          <div className="flex flex-col gap-2.5 w-full mt-4">
            <Link
              to="/collection"
              className="bg-black hover:bg-[#D4AF37] text-white hover:text-black py-3.5 text-xs font-sans uppercase font-bold tracking-widest transition-colors w-full text-center"
            >
              Examine More Couture Catalogues
            </Link>
            <Link
              to="/"
              className="text-[10px] font-sans text-gray-405 hover:text-black uppercase tracking-widest text-center"
            >
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1a1a1a] pb-16" id="checkout-view">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-2 border-b border-gray-100 flex items-center gap-1.5 text-[10px] font-sans uppercase text-gray-400 select-none">
        <Link to="/cart" className="hover:text-black font-semibold">Shopping Bag</Link>
        <span>/</span>
        <span className="text-gray-750">Billing Curation & Payment</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Inputs (7 columns) */}
        <form onSubmit={handlePaymentSubmit} className="lg:col-span-7 flex flex-col gap-6" id="checkout-form-container">
          <CheckoutForm
            form={form}
            onChange={handleInputChange}
          />
          
          <PaymentMethods
            form={form}
            onChange={handleInputChange}
            setForm={setForm}
          />

          <button
            type="submit"
            disabled={isPaying || cart.length === 0}
            className={`py-4 font-sans text-xs uppercase tracking-[0.25em] font-extrabold text-center transition-all ${
              isPaying
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-black hover:bg-[#D4AF37] text-white hover:text-black shadow-xl cursor-pointer'
            }`}
          >
            {isPaying ? 'Authenticating secure vault payment...' : 'Register Bespoke Showroom Order'}
          </button>
        </form>

        {/* Right Summary Column (5 columns) */}
        <div className="lg:col-span-5">
          <OrderSummary
            cart={cart}
            cartSubtotal={cartSubtotal}
            cartDiscount={cartDiscount}
            cartTotal={cartTotal}
            activeCoupon={activeCoupon}
          />
        </div>

      </div>
    </div>
  );
}
