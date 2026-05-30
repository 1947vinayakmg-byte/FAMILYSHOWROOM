import React from 'react';

interface PageBannerProps {
  tagline: string;
  title: string;
  description?: string;
}

export default function PageBanner({ tagline, title, description }: PageBannerProps) {
  return (
    <section className="bg-white border-b border-gray-100 py-10 md:py-14 text-center px-4 select-none">
      <p className="text-[11px] font-sans uppercase tracking-[0.3em] font-bold text-[#C5A880]">
        {tagline}
      </p>
      <h1 className="text-3xl md:text-5xl font-serif tracking-tight font-light text-gray-900 mt-2 uppercase">
        {title}
      </h1>
      {description && (
        <p className="text-[11px] md:text-xs text-gray-400 font-sans tracking-wide uppercase max-w-lg mx-auto mt-3 leading-relaxed">
          {description}
        </p>
      )}
    </section>
  );
}
