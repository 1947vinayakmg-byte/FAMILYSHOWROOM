import React from 'react';
import { Award, Landmark, MapPin, ShieldCheck, Globe, Heart, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const milestones = [
    {
      year: '1976',
      title: 'Modest Handloom Roots',
      desc: 'Our grandfather establishes a private wooden weaving chamber in Varanasi, gathering four master craftspersons to restore fine gold-hemmed pure silks.'
    },
    {
      year: '1998',
      title: 'South India Loom Integration',
      desc: 'Expanded alliance with master temple weavers of Kanchipuram, integrating original double-warp silver thread handlooms into our family vault.'
    },
    {
      year: '2012',
      title: 'DLF Emporio Flagship Launch',
      desc: 'Opening of our majestic VIP ward showroom in DLF Emporio, New Delhi, serving diplomatic circles, industrialist families, and premium weddings.'
    },
    {
      year: '2026',
      title: 'Digital Atelier & White-Glove Trials',
      desc: 'Unveiling of our online curated catalog linked to pan-India home fittings and direct digital bespoke coordination via expert styling managers on WhatsApp.'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1a1a1a] pb-16 font-sans" id="about-heritage-view">
      {/* Editorial page banner */}
      <section className="bg-white border-b border-gray-100 py-12 md:py-16 text-center px-4 select-none">
        <p className="text-[10px] tracking-[0.35em] text-[#C5A880] font-bold uppercase font-sans">OUR CHRONICLES</p>
        <h1 className="text-3xl md:text-5.5xl font-display tracking-wide text-gray-900 mt-2 font-normal select-none">
          Three Generations of Weaving Memoirs
        </h1>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
      </section>

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Story tell text (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4 text-left select-none">
          <p className="text-[#C5A880] text-[10px] uppercase font-bold tracking-[0.3em] font-sans">Brand Manifesto</p>
          <h2 className="text-xl md:text-3.5xl font-display text-gray-900 tracking-wide font-normal uppercase leading-tight">
            We do not sell garments. We compile heritage memories.
          </h2>
          <div className="h-[2px] w-12 bg-[#D4AF37] mt-1" />

          <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-serif italic mt-3 select-text">
            At DEMO, each gold thread is verified, each seam is hemmed by hand, and each client is treated as family. We partner directly with state-supported weaver chambers of India to ensure our silk mark credentials are pure and authentic. No cheap synthetics, no automated duplicates.
          </p>

          <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-serif italic select-text">
            Our master tailor logs date back half a century. Whether you reside in Delhi, Hyderabad, or New York, our dedicated WhatsApp styling concierge ensures your bridal custom lengths and gown measurements are preserved down to the millimeter.
          </p>

          <div className="bg-white p-4 border border-[#EBE3D5] shadow-sm rounded-lg flex items-center gap-3 w-full text-xs text-gray-700 mt-2">
            <Award className="w-8 h-8 text-[#D4AF37] shrink-0" />
            <div>
              <p className="font-bold text-black uppercase tracking-wider font-sans">Authentic Silk Mark Sourcing</p>
              <p className="text-gray-500 font-serif italic text-xs mt-0.5">Direct linkages with Varanasi and Kanchipuram loom houses</p>
            </div>
          </div>
        </div>

        {/* Story Illustration side (7 columns) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-[3/4] rounded-lg overflow-hidden border border-gray-200 shadow-xl relative leading-none">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80"
              alt="Silk weaving gold thread representation"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-black text-[#D4AF37] border border-[#D4AF37]/50 text-[9px] font-sans font-bold tracking-widest uppercase p-2 py-1 rounded">
              Zardozi hand-drawn stitching
            </span>
          </div>

          <div className="aspect-[3/4] rounded-lg overflow-hidden border border-gray-200 shadow-xl relative leading-none hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=700&q=80"
              alt="Bespoke Suit cutting represent"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-black text-white border border-gray-800 text-[9px] font-sans font-bold tracking-widest uppercase p-2 py-1 rounded">
              Savile row bespoke wool-cut room
            </span>
          </div>
        </div>

      </div>

      {/* HISTORICAL TIMELINE */}
      <section className="bg-white border-t border-b border-gray-100 py-16" id="about-timeline-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 select-none">
            <p className="text-[10px] tracking-widest text-[#C5A880] font-bold uppercase">THE ATELIER TIMELINE</p>
            <h2 className="text-xl md:text-3xl font-display text-gray-900 tracking-wider font-normal uppercase mt-1">
              Decades of Opulent Stewardship
            </h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 select-none leading-relaxed">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#FAF7F2] border border-[#EBE3D5] p-6 rounded-lg relative hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl md:text-3xl font-display text-[#D4AF37] font-normal block mb-2">{m.year}</span>
                  <h4 className="text-xs md:text-sm font-display font-medium text-black mb-2 uppercase tracking-wider">{m.title}</h4>
                  <p className="text-xs font-serif italic text-gray-600 leading-relaxed select-text">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values block */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 select-none" id="about-core-values">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white border border-[#EBE3D5] rounded-lg shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#D4AF37] mb-3" />
            <h3 className="text-xs md:text-sm font-display font-medium text-black uppercase tracking-wider mb-2">Uncompromising Quality</h3>
            <p className="text-xs font-serif italic text-gray-600 leading-relaxed select-text">Every silk weave is stamped under official Central Silk Board guidelines to guarantee genuine mulberry threads.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white border border-[#EBE3D5] rounded-lg shadow-sm">
            <Globe className="w-8 h-8 text-[#D4AF37] mb-3" />
            <h3 className="text-xs md:text-sm font-display font-medium text-black uppercase tracking-wider mb-2">Decentralized Loom Alliance</h3>
            <p className="text-xs font-serif italic text-gray-600 leading-relaxed select-text">We provide direct pension contributions and healthcare support to 80+ elderly weaving households in handloom hubs.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white border border-[#EBE3D5] rounded-lg shadow-sm">
            {/* Added standard styling icon for consistency */}
            <Landmark className="w-8 h-8 text-[#D4AF37] mb-3" />
            <h3 className="text-xs md:text-sm font-display font-medium text-black uppercase tracking-wider mb-2">Bespoke Fitting Ledger</h3>
            <p className="text-xs font-serif italic text-gray-600 leading-relaxed select-text">Our master tailor archives physical measure journals for generations of client families, ensuring zero errors in custom outfits.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
