import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppWidget: React.FC = () => {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const rawPhoneNumber = "213668537167";
  const formattedPhoneNumber = "0668537167";
  const whatsappUrl = `https://wa.me/${rawPhoneNumber}?text=${encodeURIComponent(
    lang === 'fr' 
      ? 'Bonjour, je souhaite obtenir des informations et demander une démonstration du logiciel Stock Pro.'
      : 'مرحباً، أود الحصول على معلومات وتجربة برنامج ستوك برو.'
  )}`;

  return (
    <div className="fixed bottom-5 ltr:right-5 rtl:left-5 z-50 flex flex-col items-end">
      
      {/* EXPANDABLE WHATSAPP CARD */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-80 sm:w-96 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white p-5 border border-emerald-500/40 shadow-2xl shadow-emerald-950/60 overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="absolute top-3.5 ltr:right-3.5 rtl:left-3.5 w-7 h-7 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.26-1.116z" />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
                  <span>{t.whatsappWidget.status}</span>
                </div>
                <h4 className="text-base font-extrabold text-white mt-0.5">
                  {t.whatsappWidget.header}
                </h4>
              </div>
            </div>

            {/* Subtitle & Number */}
            <p className="text-xs text-slate-300 leading-relaxed mt-3">
              {t.whatsappWidget.subtitle}
            </p>

            <div className="mt-3.5 p-3 rounded-2xl bg-white/10 border border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#25D366]" />
                <span className="text-sm font-black font-mono tracking-wider text-white">
                  {formattedPhoneNumber}
                </span>
              </div>
              <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
                Support Pro
              </span>
            </div>

            {/* Direct Link Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-3 px-4 rounded-xl text-xs font-extrabold text-slate-950 bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.whatsappWidget.btnText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Assistance & Installation à distance gratuites</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING TRIGGER BADGE */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-[#25D366]/40 border border-emerald-300/40 cursor-pointer overflow-hidden"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>

        <svg className="w-6 h-6 fill-current shrink-0 relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.26-1.116z" />
        </svg>

        <div className="hidden sm:flex flex-col items-start text-left rtl:text-right relative z-10 leading-tight">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>En ligne</span>
          </span>
          <span className="text-xs font-extrabold text-white">0668537167</span>
        </div>

      </motion.button>

    </div>
  );
};
