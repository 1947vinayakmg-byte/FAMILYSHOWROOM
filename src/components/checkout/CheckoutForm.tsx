import React from 'react';
import { ClipboardList } from 'lucide-react';
import { OrderDetails } from '../../types';

interface CheckoutFormProps {
  form: OrderDetails;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function CheckoutForm({ form, onChange }: CheckoutFormProps) {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm font-sans text-xs">
      <h3 className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-black border-b border-gray-100 pb-3 mb-5 flex items-center gap-2">
        <ClipboardList className="w-4 h-4 text-[#C5A880]" /> 1. Billing & Shipping Consignee
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="uppercase font-bold text-gray-500 tracking-wider">Client Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={onChange}
            className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase tracking-wider text-black font-medium"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="uppercase font-bold text-gray-500 tracking-wider">Contact Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="e.g. +91 6360510473"
            className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase tracking-wider text-black font-medium"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="uppercase font-bold text-gray-500 tracking-wider">Notification Delivery Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase tracking-wider text-black font-medium"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="uppercase font-bold text-gray-500 tracking-wider">Showroom Fitting / Shipping Address *</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={onChange}
            placeholder="Suite/Apartment Number, Private Street, landmark details"
            className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase tracking-wider text-black font-medium"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="uppercase font-bold text-gray-500 tracking-wider">City of Residence *</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={onChange}
            className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase tracking-wider text-black font-medium"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="uppercase font-bold text-gray-500 tracking-wider">Region / Province State *</label>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={onChange}
            className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase tracking-wider text-black font-medium"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="uppercase font-bold text-gray-550 tracking-wider">Postal Pin-Code *</label>
          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={onChange}
            className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase tracking-wider text-black font-medium"
            required
          />
        </div>
      </div>
    </div>
  );
}
