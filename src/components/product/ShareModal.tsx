import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Copy, Check, ExternalLink } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productUrl: string;
}

const SHARE_CHANNELS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    color: '#25D366',
    hoverColor: '#1ebe5a',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    getUrl: (url: string, name: string) =>
      `https://wa.me/?text=${encodeURIComponent(`✨ Check out this luxury piece: *${name}*\n${url}`)}`,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    color: '#E1306C',
    hoverColor: '#c12260',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    getUrl: (url: string, name: string) =>
      `https://www.instagram.com/`,
    note: 'Copy the link and paste it in your Instagram story or DM.',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    color: '#1877F2',
    hoverColor: '#0c66d4',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    getUrl: (url: string, _name: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    color: '#000000',
    hoverColor: '#1a1a1a',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    getUrl: (url: string, name: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(`✨ ${name}`)}&url=${encodeURIComponent(url)}`,
  },
  {
    id: 'pinterest',
    label: 'Pinterest',
    color: '#E60023',
    hoverColor: '#c0001e',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
    getUrl: (url: string, name: string) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(name)}`,
  },
];

export default function ShareModal({ isOpen, onClose, productName, productUrl }: ShareModalProps) {
  const [copied, setCopied] = React.useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(productUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = productUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed z-50 inset-x-4 mx-auto max-w-sm"
            style={{ top: '50%', transform: 'translate(0, -50%)' }}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#FAF7F2]">
                <div>
                  <p className="text-[9px] font-sans uppercase tracking-[0.35em] text-[#C5A880] font-extrabold mb-0.5">
                    Share This Design
                  </p>
                  <h3 className="text-sm font-serif text-gray-900 uppercase tracking-wider font-light leading-tight max-w-[220px] truncate">
                    {productName}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-colors cursor-pointer shrink-0"
                  aria-label="Close share modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Share Channels Grid */}
              <div className="p-6 space-y-3">
                <div className="grid grid-cols-1 gap-2.5">
                  {SHARE_CHANNELS.map((ch) => (
                    <a
                      key={ch.id}
                      href={ch.getUrl(productUrl, productName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={ch.id === 'instagram' ? (e) => { e.preventDefault(); handleCopy(); } : undefined}
                      className="flex items-center gap-4 px-4 py-3 rounded-xl border border-gray-100 hover:shadow-md transition-all group cursor-pointer"
                      style={{ '--ch-color': ch.color } as React.CSSProperties}
                    >
                      {/* Icon bubble */}
                      <span
                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-white transition-transform group-hover:scale-110"
                        style={{ backgroundColor: ch.color }}
                      >
                        {ch.icon}
                      </span>

                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-sans font-bold text-gray-800 uppercase tracking-wide">{ch.label}</p>
                        {ch.note && (
                          <p className="text-[10px] text-gray-400 font-sans leading-tight mt-0.5">{ch.note}</p>
                        )}
                      </div>

                      <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition-colors shrink-0" />
                    </a>
                  ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 py-1">
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-[9px] font-sans uppercase tracking-widest text-gray-300">or copy link</span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>

                {/* Copy Link Row */}
                <div className="flex items-center gap-2 bg-[#FAF7F2] rounded-xl border border-gray-200 px-3 py-2.5">
                  <span className="flex-1 text-[11px] font-mono text-gray-500 truncate">{productUrl}</span>
                  <button
                    onClick={handleCopy}
                    className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-black hover:bg-[#D4AF37] text-white hover:text-black rounded-lg text-[10px] font-sans font-bold uppercase tracking-widest transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Footer Note */}
              <div className="px-6 pb-5 text-center">
                <p className="text-[9px] font-sans uppercase text-gray-300 tracking-widest">
                  Share luxury. Spread elegance.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
