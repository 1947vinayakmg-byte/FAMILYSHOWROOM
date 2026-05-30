import React, { useState } from 'react';
import { RotateCcw, Truck, Award, Star, Check, User, Plus, MessageSquare } from 'lucide-react';
import { Product, Review } from '../../types';
import { useShop } from '../../context/ShopContext';

interface ProductBadgesAndReviewsProps {
  product: Product;
}

export default function ProductBadgesAndReviews({ product }: ProductBadgesAndReviewsProps) {
  const { showToast } = useShop();
  
  // Manage reviews list locally so that users can interactively add their reviews live!
  const [reviewsList, setReviewsList] = useState<Review[]>(product.reviews || []);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [newComment, setNewComment] = useState('');

  // Compute stats
  const totalReviews = reviewsList.length;
  const averageRating = totalReviews > 0
    ? Number((reviewsList.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1))
    : product.rating;

  // Breakdown count
  const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviewsList.forEach(r => {
    const star = Math.round(r.rating) as 1 | 2 | 3 | 4 | 5;
    if (breakdown[star] !== undefined) {
      breakdown[star]++;
    }
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) {
      showToast('Please fill out all fields to submit your review.', 'error');
      return;
    }

    const newReview: Review = {
      id: `rev-custom-${Date.now()}`,
      author: newAuthor.trim(),
      rating: newRating,
      comment: newComment.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    setReviewsList([newReview, ...reviewsList]);
    showToast('Your luxurious review has been registered with the atelier!', 'success');
    
    // Reset Form
    setNewAuthor('');
    setNewRating(5);
    setNewComment('');
    setShowAddForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 mt-4 border-t border-gray-150 select-none">
      
      {/* SECTION 1: 3D 8K STYLE LUXURY BADGES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        {/* Badge 1: 7-Days Easy Return */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-[#1E1E1E] to-[#0A0A0A] border border-[#D4AF37]/30 hover:border-[#D4AF37] p-6 rounded-xl shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 transform hover:-translate-y-1.5 flex items-center gap-5">
          {/* Shimmer Effect */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          
          <div className="relative flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] rounded-full flex items-center justify-center p-[2px] shadow-[0_0_15px_rgba(212,175,55,0.4)] animate-[float_3s_ease-in-out_infinite]">
            <div className="w-full h-full bg-[#111111] rounded-full flex items-center justify-center">
              <RotateCcw className="w-6 h-6 text-[#D4AF37] group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </div>
          <div>
            <h4 className="font-serif text-sm tracking-widest text-[#D4AF37] uppercase font-bold group-hover:text-white transition-colors">7-Days Easy Return</h4>
            <p className="text-[10px] font-sans text-gray-400 uppercase tracking-wider mt-1 leading-relaxed">
              Complimentary hassle-free returns or bespoke adjustments.
            </p>
          </div>
        </div>

        {/* Badge 2: Cash On Delivery */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-[#1E1E1E] to-[#0A0A0A] border border-[#D4AF37]/30 hover:border-[#D4AF37] p-6 rounded-xl shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 transform hover:-translate-y-1.5 flex items-center gap-5">
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          
          <div className="relative flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] rounded-full flex items-center justify-center p-[2px] shadow-[0_0_15px_rgba(212,175,55,0.4)] animate-[float_3s_ease-in-out_infinite_0.5s]">
            <div className="w-full h-full bg-[#111111] rounded-full flex items-center justify-center">
              <Truck className="w-6 h-6 text-[#D4AF37]" />
            </div>
          </div>
          <div>
            <h4 className="font-serif text-sm tracking-widest text-[#D4AF37] uppercase font-bold group-hover:text-white transition-colors">Cash On Delivery</h4>
            <p className="text-[10px] font-sans text-gray-400 uppercase tracking-wider mt-1 leading-relaxed">
              Pay upon home arrival & premium white-glove unboxing.
            </p>
          </div>
        </div>

        {/* Badge 3: Best Price Guarantee */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-[#1E1E1E] to-[#0A0A0A] border border-[#D4AF37]/30 hover:border-[#D4AF37] p-6 rounded-xl shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 transform hover:-translate-y-1.5 flex items-center gap-5">
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          
          <div className="relative flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] rounded-full flex items-center justify-center p-[2px] shadow-[0_0_15px_rgba(212,175,55,0.4)] animate-[float_3s_ease-in-out_infinite_1s]">
            <div className="w-full h-full bg-[#111111] rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-[#D4AF37]" />
            </div>
          </div>
          <div>
            <h4 className="font-serif text-sm tracking-widest text-[#D4AF37] uppercase font-bold group-hover:text-white transition-colors">Best Price Guarantee</h4>
            <p className="text-[10px] font-sans text-gray-400 uppercase tracking-wider mt-1 leading-relaxed">
              Unrivaled direct-from-loom pricing for luxury couture.
            </p>
          </div>
        </div>

      </div>

      {/* SECTION 2: LUXURIOUS REVIEWS SECTION */}
      <div className="bg-[#FAF7F2] border border-[#EBE3D5] rounded-2xl p-6 md:p-10 shadow-sm">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#EBE3D5] mb-10">
          <div>
            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C5A880] font-bold">CLIENT SATISFACTION</p>
            <h3 className="text-xl md:text-2xl font-serif uppercase tracking-widest text-gray-900 mt-1">Verified Appraisals</h3>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-black hover:bg-[#D4AF37] text-white hover:text-black px-6 py-3 text-[11px] font-sans uppercase font-bold tracking-widest transition-all duration-300 rounded-none shadow-md cursor-pointer"
          >
            <Plus className="w-4 h-4" /> {showAddForm ? 'Close Atelier Desk' : 'Write Atelier Review'}
          </button>
        </div>

        {/* Dashboard grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 pb-8 border-b border-[#EBE3D5]/60">
          
          {/* Left panel: average */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center bg-white border border-[#EBE3D5]/50 p-6 rounded-xl text-center select-none shadow-sm">
            <span className="text-5xl font-serif text-black font-extrabold">{averageRating}</span>
            <div className="flex text-[#D4AF37] mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'fill-current' : 'text-gray-200'}`} />
              ))}
            </div>
            <span className="text-[11px] font-sans text-gray-450 uppercase tracking-widest mt-3">
              Based on {totalReviews} certified notes
            </span>
          </div>

          {/* Right panel: breakdown bar */}
          <div className="lg:col-span-8 flex flex-col gap-2.5 justify-center">
            {[5, 4, 3, 2, 1].map(stars => {
              const count = breakdown[stars as 1|2|3|4|5] || 0;
              const pct = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
              return (
                <div key={stars} className="flex items-center gap-3.5 text-xs font-sans text-gray-600">
                  <span className="w-10 text-right uppercase tracking-wider font-bold">{stars} Star</span>
                  <div className="flex-grow h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#F3E5AB] rounded-full transition-all duration-500" 
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-left text-gray-400 font-bold">{count}</span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Form panel */}
        {showAddForm && (
          <div className="bg-white border border-[#D4AF37]/30 p-6 md:p-8 rounded-xl mb-12 shadow-lg animate-[fadeIn_0.4s_ease-out]">
            <h4 className="font-serif text-base uppercase tracking-widest text-[#0D0D0D] border-b border-gray-100 pb-3 mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#D4AF37]" /> Log Your Couture Experience
            </h4>
            <form onSubmit={handleAddReview} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-widest text-gray-500 mb-1.5 font-bold">Your Noble Name</label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. Princess Aditi Singhania"
                    className="w-full bg-[#FCFAF8] border border-gray-200 focus:border-[#D4AF37] outline-none p-3 text-xs font-sans rounded-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-widest text-gray-500 mb-1.5 font-bold font-sans">Garment Appraisal Rating</label>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 cursor-pointer transition-transform hover:scale-125"
                      >
                        <Star 
                          className={`w-6 h-6 transition-colors ${
                            star <= (hoverRating || newRating) 
                              ? 'fill-[#D4AF37] text-[#D4AF37]' 
                              : 'text-gray-200'
                          }`} 
                        />
                      </button>
                    ))}
                    <span className="text-xs text-gray-400 ml-3 uppercase font-sans tracking-wider font-bold">({hoverRating || newRating} / 5)</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-sans uppercase tracking-widest text-gray-500 mb-1.5 font-bold">Client Chronicle Narrative</label>
                <textarea
                  rows={4}
                  required
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your detailed fitting, zardozi weight, or loom drape feedback with other elite collectors..."
                  className="w-full bg-[#FCFAF8] border border-gray-200 focus:border-[#D4AF37] outline-none p-3 text-xs font-sans rounded-none transition-colors"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black hover:bg-[#D4AF37] text-white hover:text-black px-8 py-3.5 text-[11px] font-sans uppercase font-bold tracking-widest transition-colors shadow"
                >
                  Deliver Curation Review
                </button>
              </div>

            </form>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {reviewsList.length === 0 ? (
            <div className="text-center py-10 bg-white border border-[#EBE3D5]/40 p-6 rounded-xl select-none">
              <p className="text-xs text-gray-400 font-sans uppercase tracking-widest">
                No couture appraisal records registered for this weave yet.
              </p>
              <p className="text-[10px] text-gray-300 font-sans uppercase tracking-widest mt-1">
                Be the first elite curator to write a testimonial.
              </p>
            </div>
          ) : (
            reviewsList.map((rev) => {
              const initial = rev.author ? rev.author.charAt(0).toUpperCase() : 'C';
              return (
                <div key={rev.id} className="group bg-white border border-[#EBE3D5]/60 hover:border-[#D4AF37]/50 rounded-xl p-5 md:p-6 shadow-sm transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-3.5">
                    
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 bg-[#FAF7F2] border border-[#EBE3D5] text-[#D4AF37] font-serif rounded-full flex items-center justify-center font-bold text-sm shadow-inner uppercase">
                        {initial}
                      </div>
                      <div>
                        <h5 className="text-xs font-serif text-gray-900 tracking-wider uppercase font-bold">{rev.author}</h5>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="flex text-[#D4AF37]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < rev.rating ? 'fill-current' : 'text-gray-200'}`} />
                            ))}
                          </div>
                          <span className="text-[9px] text-gray-400 font-mono">{rev.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-[#25D366]/10 text-[#1fbc59] px-2.5 py-1 rounded-full text-[9px] font-sans font-bold tracking-widest uppercase shadow-sm">
                      <Check className="w-3 h-3 stroke-[3]" /> Verified Buyer
                    </div>

                  </div>

                  <p className="text-gray-700 font-sans text-xs md:text-sm leading-relaxed pl-13 uppercase tracking-wide">
                    {rev.comment}
                  </p>
                </div>
              );
            })
          )}
        </div>

      </div>

      {/* Embedded Animations Styling */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.02); }
        }
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
    </div>
  );
}
