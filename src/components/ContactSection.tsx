import { useLanguage } from '../context/LanguageContext';
import { PhoneCall, MessageCircle, MonitorPlay, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const rawPhoneNumber = "213668537167";
  const formattedPhoneNumber = "0668537167";
  const whatsappUrl = `https://wa.me/${rawPhoneNumber}?text=${encodeURIComponent(
    lang === 'fr' 
      ? 'Bonjour, je souhaite obtenir des informations et essayer le logiciel Stock Pro.'
      : 'مرحباً، أود الحصول على معلومات وتجربة برنامج ستوك برو.'
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-20 relative bg-slate-900 overflow-hidden">
      
      {/* Background Spotlights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-200 text-xs font-bold shadow-sm">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            <span>{t.contact.title}</span>
            <span className="text-emerald-600 block sm:inline">
              {t.contact.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            {t.contact.subtitle}
          </p>
        </div>

        {/* PROMINENT WHATSAPP CARD (GRAND BOUTON WHATSAPP ET NUMERO 0668537167) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 text-white border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 relative overflow-hidden group"
        >
          {/* Subtle glowing halo */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Col: WhatsApp Icon & Big Phone Number */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-4">
                {/* Official WhatsApp Giant Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 shrink-0 transform group-hover:scale-105 transition-transform">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.26-1.116z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {t.contact.whatsappCalloutTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-200/90 mt-1">
                    {t.contact.whatsappCalloutSubtitle}
                  </p>
                </div>
              </div>

              {/* Big Phone Number Display */}
              <div className="p-4 rounded-2xl bg-white/10 border border-emerald-400/20 backdrop-blur-md inline-flex items-center gap-3">
                <PhoneCall className="w-6 h-6 text-[#25D366] animate-pulse" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-emerald-300 font-semibold uppercase tracking-wider">
                    {lang === 'fr' ? 'Numéro Direct WhatsApp' : 'رقم الواتساب المباشر'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-widest font-mono">
                    {formattedPhoneNumber}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-emerald-200 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#25D366]" />
                  <span>7j/7 — Réponse Rapide</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                  <span>Support Technique Gratuit</span>
                </span>
              </div>

            </div>

            {/* Right Col: WhatsApp Action CTA Button */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl text-base font-extrabold text-slate-950 bg-[#25D366] hover:bg-[#20bd5a] shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 text-center"
              >
                <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.26-1.116z" />
                </svg>
                <span>{t.contact.whatsappBtn}</span>
                <ArrowRight className="w-5 h-5 ltr:inline-block rtl:hidden" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2 text-center"
              >
                <MonitorPlay className="w-4 h-4 text-emerald-400" />
                <span>{t.contact.quickMsgBtn}</span>
              </a>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
