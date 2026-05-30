import React from 'react';
import { Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OrderDetails } from '../../types';

interface PaymentMethodsProps {
  form: OrderDetails;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  setForm: React.Dispatch<React.SetStateAction<OrderDetails>>;
}

export default function PaymentMethods({ form, onChange, setForm }: PaymentMethodsProps) {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm font-sans text-xs">
      <h3 className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-black border-b border-gray-100 pb-3 mb-5 flex items-center gap-2">
        <Landmark className="w-4 h-4 text-[#C5A880]" /> 2. Selected Financing Gateway
      </h3>

      {/* Methods selectors */}
      <div className="flex gap-4 mb-5 text-[11px] font-sans uppercase tracking-widest font-semibold">
        <button
          type="button"
          onClick={() => setForm((p) => ({ ...p, paymentMethod: 'cod' }))}
          className={`flex-grow p-4 border text-center transition-colors rounded cursor-pointer ${
            form.paymentMethod === 'cod'
              ? 'border-black bg-black text-[#D4AF37] font-bold shadow'
              : 'border-gray-200 hover:border-black text-gray-700 bg-white'
          }`}
        >
          Cash on Premium Delivery (COD)
        </button>
        <button
          type="button"
          onClick={() => setForm((p) => ({ ...p, paymentMethod: 'online' }))}
          className={`flex-grow p-4 border text-center transition-colors rounded cursor-pointer ${
            form.paymentMethod === 'online'
              ? 'border-black bg-black text-[#D4AF37] font-bold shadow'
              : 'border-gray-200 hover:border-black text-gray-700 bg-white'
          }`}
        >
          Razorpay Card Vault Brokerage
        </button>
      </div>

      {/* Conditional Online Form details */}
      <AnimatePresence>
        {form.paymentMethod === 'online' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-[#FAF7F2] p-4 mb-2 border border-[#EBE3D5] rounded flex flex-col gap-4 text-xs font-sans uppercase"
          >
            <p className="text-[10px] text-gray-400 tracking-wider">Online transaction partner checkout gateway certified sandbox simulation</p>

            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-gray-500 tracking-wider">Cardholder Full Name</label>
              <input
                type="text"
                name="cardName"
                value={form.cardName}
                onChange={onChange}
                placeholder="e.g. M. GAJENDRA"
                className="bg-white border border-gray-200 outline-none p-2.5 focus:border-[#D4AF37] uppercase tracking-widest text-black font-semibold"
                required={form.paymentMethod === 'online'}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-gray-500 tracking-wider">Secure Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={form.cardNumber}
                onChange={onChange}
                placeholder="4111 2222 3333 4444"
                maxLength={19}
                className="bg-white border border-gray-200 outline-none p-2.5 focus:border-[#D4AF37] text-black tracking-[0.2em]"
                required={form.paymentMethod === 'online'}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-500 tracking-wider">Expiry Month/Yr</label>
                <input
                  type="text"
                  name="cardExpiry"
                  value={form.cardExpiry}
                  onChange={onChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="bg-white border border-gray-200 outline-none p-2.5 focus:border-[#D4AF37] text-center text-black font-bold"
                  required={form.paymentMethod === 'online'}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-500 tracking-wider">Security CVV Code</label>
                <input
                  type="password"
                  name="cardCvv"
                  value={form.cardCvv}
                  onChange={onChange}
                  placeholder="***"
                  maxLength={4}
                  className="bg-white border border-gray-200 outline-none p-2.5 focus:border-[#D4AF37] text-center text-black tracking-[0.3em]"
                  required={form.paymentMethod === 'online'}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <span className="text-[10px] text-gray-400 font-sans uppercase block leading-tight mt-2 pb-1 text-center">
        * By clicking submit, you authorize our DLF Emporio design team to coordinate fitting alterations.
      </span>
    </div>
  );
}
