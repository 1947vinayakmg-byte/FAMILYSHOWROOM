import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  updateCartQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
}

export default function CartItem({ item, updateCartQuantity, removeFromCart }: CartItemProps) {
  return (
    <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-12 items-center gap-4 relative">
      {/* Cancel button absolute top-3 right-3 on mobile */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="absolute top-4 right-4 text-gray-405 hover:text-red-500 cursor-pointer block md:hidden"
        title="Remove item"
      >
        <Trash2 className="w-4 h-4" />
      </button>

      {/* Specification and Image */}
      <div className="col-span-1 md:col-span-6 flex gap-4 items-center">
        <div className="w-16 h-20 bg-[#FAF7F2] rounded overflow-hidden aspect-[3/4] shrink-0 border border-gray-55 select-none">
          <img
            src={item.product.images[0]}
            alt={item.product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col select-none">
          <span className="text-[9px] font-sans text-[#C5A880] uppercase tracking-widest">{item.product.subcategory}</span>
          <h3 className="text-xs font-serif font-semibold text-gray-900 tracking-wide line-clamp-1">
            <Link to={`/product/${item.product.id}`} className="hover:text-[#D4AF37]">{item.product.name}</Link>
          </h3>
          {/* Color marker tag */}
          <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-450 font-sans uppercase">
            <span>Palette:</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full border border-gray-300" style={{ backgroundColor: item.selectedColor.hex }} />
            <span className="text-gray-650 lowercase">{item.selectedColor.name}</span>
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="col-span-1 md:col-span-2 text-center select-none font-sans text-xs uppercase text-gray-800 font-bold">
        <span className="md:hidden text-[10px] text-gray-400 font-sans font-bold pr-1 block">Size:</span>
        <span className="bg-[#FAF7F2] p-1 px-2.5 border border-gray-150 rounded">{item.selectedSize}</span>
      </div>

      {/* Quantity controls */}
      <div className="col-span-1 md:col-span-2 flex justify-center items-center select-none gap-2">
        <span className="md:hidden text-[10px] text-gray-400 font-sans font-bold pr-1 block">Qty:</span>
        <div className="flex items-center border border-gray-200 rounded px-2.5 py-1 text-xs bg-white font-bold">
          <button
            onClick={() => updateCartQuantity(item.id, -1)}
            className="text-gray-400 hover:text-black px-1.5 focus:outline-none cursor-pointer"
            title="Lower qty"
          >
            -
          </button>
          <span className="w-5 text-center text-black text-xs font-sans">{item.quantity}</span>
          <button
            onClick={() => updateCartQuantity(item.id, 1)}
            className="text-gray-400 hover:text-black px-1.5 focus:outline-none cursor-pointer"
            title="Raise qty"
          >
            +
          </button>
        </div>
      </div>

      {/* Value */}
      <div className="col-span-1 md:col-span-2 text-right select-none flex md:flex-col justify-between items-center md:items-end">
        <span className="md:hidden text-[10px] text-gray-400 font-sans font-bold pr-1 block">Sum:</span>
        <div className="flex flex-col items-end font-sans">
          <span className="text-sm font-serif font-bold text-gray-950">
            ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
          </span>
          <span className="text-[9px] text-gray-400">₹{item.product.price.toLocaleString('en-IN')} each</span>
        </div>

        {/* Trash on desktop */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-1.5 h-fit text-gray-300 hover:text-red-650 transition-colors hidden md:block cursor-pointer mt-1 rounded hover:bg-gray-50"
          title="Delete design link"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
