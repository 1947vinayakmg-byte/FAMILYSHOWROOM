import React from 'react';
import { User, Mail, Lock } from 'lucide-react';

interface RegisterFormProps {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function RegisterForm({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit
}: RegisterFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 text-xs font-sans uppercase tracking-wider text-gray-600">
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="font-bold text-gray-500">First / Patron Name *</label>
        <div className="relative flex items-center bg-transparent border border-gray-200 focus-within:border-[#D4AF37] rounded overflow-hidden">
          <User className="absolute left-3 w-4 h-4 text-gray-400 shrink-0" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. PATRON SINGH"
            className="w-full bg-transparent pl-10 p-3 outline-none text-[#111] uppercase tracking-widest font-sans"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="font-bold text-gray-500">Client Email Address *</label>
        <div className="relative flex items-center bg-transparent border border-gray-200 focus-within:border-[#D4AF37] rounded overflow-hidden">
          <Mail className="absolute left-3 w-4 h-4 text-gray-400 shrink-0" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="conclierge@DEMO.com"
            className="w-full bg-transparent pl-10 p-3 outline-none text-[#111] uppercase tracking-widest font-sans"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <label className="font-bold text-gray-500">Secret Security Password *</label>
        <div className="relative flex items-center bg-transparent border border-gray-200 focus-within:border-[#D4AF37] rounded overflow-hidden">
          <Lock className="absolute left-3 w-4 h-4 text-gray-400 shrink-0" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="w-full bg-transparent pl-10 p-3 outline-none text-[#111] tracking-widest font-sans"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-black hover:bg-[#D4AF37] text-white hover:text-black py-3 text-xs tracking-[0.25em] font-extrabold uppercase transition-all mt-3 rounded-none shadow-xl cursor-pointer"
      >
        Register Profile
      </button>
    </form>
  );
}
