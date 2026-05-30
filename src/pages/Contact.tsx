import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, Phone, MapPin, Calendar, Clock, MessageSquare, Check, Send, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const { showToast } = useShop();

  // Contact form inputs
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    outlet: 'delhi',
    service: 'bridal-fit',
    desiredDate: '',
    notes: ''
  });

  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.desiredDate) return;

    // Simulate concierge recording fitting reservation
    showToast(`Fitting appointment recorded. A private stylist will call you to confirm.`, 'success');
    setSubmittedMessage(true);
  };

  const outlets = [
    {
      id: 'delhi',
      name: 'DLF Emporio Flagship Showroom',
      address: 'VIP Ward Suite-104, Second Floor, DLF Emporio, Vasant Kunj, New Delhi, 110070',
      hours: '11:00 AM - 08:30 PM (Mon-Sun)',
      tel: '+91 6360510473',
      landmark: 'Next to Louis Vuitton suite entrance'
    },
    {
      id: 'hyderabad',
      name: 'Jubilee Hills Couture Studio',
      address: 'Road Number 36, Landmark Mansion, Jubilee Hills, Hyderabad, Telangana, 500033',
      hours: '11:00 AM - 09:00 PM (Mon-Sun)',
      tel: '+91 88888 88888',
      landmark: 'Opposite Oakwood private park'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1a1a1a] pb-16 font-sans uppercase" id="contact-view">
      {/* Editorial page header */}
      <section className="bg-white border-b border-gray-100 py-12 md:py-16 text-center px-4 select-none">
        <p className="text-[10px] tracking-[0.35em] text-[#C5A880] font-bold">PRIVATE FITTINGS</p>
        <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-gray-900 mt-2 font-light">
          Book Your private showroom Consultation
        </h1>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* LEFT FLAGS & INFO PANEL (Col 1-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6 select-none">
          <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xs font-sans uppercase tracking-widest font-bold text-black border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-[#C5A880]" /> Grand Flagship Locations
            </h3>

            <div className="flex flex-col gap-8">
              {outlets.map((outletObj) => (
                <div key={outletObj.id} className="flex flex-col gap-2 border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                  <h4 className="text-xs font-serif font-black text-gray-900 leading-snug">{outletObj.name}</h4>
                  <div className="text-[11px] font-sans text-gray-500 lowercase leading-relaxed flex flex-col gap-1.5 mt-1">
                    <span className="flex items-start gap-2 uppercase text-[10px] tracking-wider text-gray-700">
                      <MapPin className="w-4.5 h-4.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{outletObj.address}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Hours: {outletObj.hours}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Direct line: {outletObj.tel}</span>
                    </span>
                    <span className="text-[10px] text-gray-400 pl-6 italic">Landmark: {outletObj.landmark}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Golden VIP assist WhatsApp badge */}
          <div className="bg-black text-white border border-[#D4AF37]/30 p-6 rounded-lg shadow-xl relative overflow-hidden">


            <h3 className="text-xs font-sans tracking-[0.2em] font-extrabold text-[#D4AF37] mb-2">VIP 24/7 Styling Direct Assistance</h3>
            <p className="text-[11px] font-sans lowercase leading-relaxed text-gray-300 mb-5">
              Can't Search a fitting slot that coordinates with your schedule? Or did you wish to inquire about the exact silk wrap swatches or bespoke gold embroidery? Tap below to open custom WhatsApp link.
            </p>
            <a
              href="https://wa.me/919999999999?text=Hello%20DEMO%20Showroom!%20I%20am%20interested%20in%25booking%20a%20private%20designer%20fitting%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 justify-center bg-[#25D366] hover:bg-[#1ebd5d] text-white py-3.5 text-xs font-sans font-bold tracking-[0.2em] transition-colors shadow"
              id="btn-contact-whatsapp"
            >
              <MessageSquare className="w-4.5 h-4.5 fill-current" /> Open Stylist WhatsApp Chat
            </a>
          </div>
        </div>

        {/* RIGHT INTERACTIVE FORM FIELD (Col 6-12) */}
        <div className="lg:col-span-7 flex flex-col gap-6" id="contact-form-block">

          <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-lg shadow-sm">
            <AnimatePresence mode="wait">
              {!submittedMessage ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-4 text-xs font-sans uppercase tracking-wider text-gray-600"
                >
                  <h3 className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-black border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C5A880]" /> Request Fitting slot
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 col-span-2">
                      <label className="font-bold text-gray-500">Patron Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. DEVIKA SEN"
                        className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase tracking-widest text-[#111]"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-gray-500">Contact Telephone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="+91 ...."
                        className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase tracking-widest text-[#111]"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-gray-500">Patron Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="patron@gmail.com"
                        className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase tracking-widest text-[#111]"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-gray-500">Select Flagship Studio Outlet *</label>
                      <select
                        name="outlet"
                        value={form.outlet}
                        onChange={handleInputChange}
                        className="bg-white border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase text-gray-700 font-sans tracking-wide cursor-pointer"
                      >
                        <option value="delhi">DLF Emporio, New Delhi</option>
                        <option value="hyderabad">Jubilee Hills, Hyderabad</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-gray-500">Occasion Curation Required *</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleInputChange}
                        className="bg-white border border-gray-200 outline-none p-3 focus:border-[#D4AF37] uppercase text-gray-700 font-sans tracking-wide cursor-pointer"
                      >
                        <option value="bridal-fit">Bridal Lehenga Fit & Coordination</option>
                        <option value="groom-fit">Groom Regal Sherwani / Suits Fit</option>
                        <option value="family-wear">Family Festive / Handloom Fitting</option>
                        <option value="bespoke-tuxedo">Bespoke Savile Row Tuxedo Tailoring</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5 col-span-2">
                      <label className="font-bold text-gray-500">Desired Consultation Date *</label>
                      <input
                        type="date"
                        name="desiredDate"
                        value={form.desiredDate}
                        onChange={handleInputChange}
                        className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] text-[#111] uppercase select-none font-sans"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 col-span-2">
                      <label className="font-bold text-gray-500">Specific Tailoring Notes or Curation requests</label>
                      <textarea
                        name="notes"
                        rows={4}
                        value={form.notes}
                        onChange={handleInputChange}
                        placeholder="Mention any custom design requirements, neckline extensions, or color schemes..."
                        className="bg-transparent border border-gray-200 outline-none p-3 focus:border-[#D4AF37] text-black uppercase tracking-wider lowercase"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-black hover:bg-[#D4AF37] text-white hover:text-black py-4 text-xs font-sans font-bold uppercase tracking-[0.25em] transition-all shadow-xl mt-2 rounded-none cursor-pointer flex items-center justify-center gap-2"
                  >
                    Register Booking Request <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="appointment-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center flex flex-col items-center gap-4 bg-[#FAF7F2] rounded border border-[#EBE3D5] select-none"
                >
                  <div className="w-12 h-12 bg-black text-[#D4AF37] rounded-full border border-[#D4AF37]/50 flex items-center justify-center shadow">
                    <Check className="w-6 h-6 shrink-0" />
                  </div>
                  <h3 className="text-sm font-serif font-bold text-black uppercase tracking-widest leading-none">
                    Atelier Booking Received
                  </h3>
                  <div className="text-[10px] font-sans text-gray-500 uppercase tracking-widest flex flex-col gap-1">
                    <p>Patron Name: <strong>{form.fullName}</strong></p>
                    <p>Requested Session: <strong>{form.service === 'bridal-fit' ? 'Bridal Lehenga' : 'Groom Sherwani'}</strong></p>
                    <p>Desired Date: <strong>{form.desiredDate}</strong></p>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-sm mt-3 border-t border-gray-200 pt-3">
                    Your request has been logged. Our elite bookings team will verify suite slots at {form.outlet === 'delhi' ? 'DLF Emporio' : 'Jubilee Hills'} and telephone you under 15 minutes to coordinate custom food tastes and boutique configurations. Thank you.
                  </p>
                  <button
                    onClick={() => setSubmittedMessage(false)}
                    className="mt-4 text-[10px] font-bold text-[#D4AF37] hover:text-black hover:underline"
                  >
                    Place Another Booking
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DESIGNER HIGH-FIDELITY MAP PLACEHOLDER */}
          <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm text-center select-none" id="contact-map-mockup">
            <h3 className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-black border-b border-gray-100 pb-3 mb-4 text-center">
              Flagship Map Location (Delhi Vasant Kunj)
            </h3>

            <div className="relative aspect-[16/7] rounded-md overflow-hidden bg-[#FAF7F2] border border-[#EBE3D5] flex flex-col items-center justify-center gap-1">
              <div className="absolute inset-0 bg-cover bg-center bg-[#FAF7F2] opacity-40 blur-[1px]" />
              <MapPin className="relative z-10 w-8 h-8 text-[#D4AF37]" />
              <span className="relative z-10 text-xs font-serif font-black uppercase text-black">DLF Emporio VIP Wing</span>
              <span className="relative z-10 text-[9px] font-sans uppercase tracking-wider text-[#A08560]">Near Nelson Mandela road entry points</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
