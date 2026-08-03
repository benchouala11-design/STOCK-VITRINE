import { useLanguage } from '../context/LanguageContext';
import { DOWNLOAD_URL } from '../locales/translations';
import { Download, ShieldCheck, CheckCircle2, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

export const DownloadSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-16 sm:py-20 relative bg-gradient-to-br from-indigo-50 via-violet-50 to-amber-50 overflow-hidden">
      {/* Top colored divider band */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500"></div>
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-violet-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold shadow-sm">
            <span>{t.download.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            <span>{t.download.title}</span>
            <span className="text-gradient-indigo-light block sm:inline">
              {t.download.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {t.download.subtitle}
          </p>
        </div>

        {/* DOWNLOAD CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-indigo-500/10 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">{t.download.cardTitle}</h3>
                  <p className="text-xs text-slate-500 font-medium">{t.download.cardVersion}</p>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 py-2 border-y border-slate-100">
                {t.download.specs.map((spec, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-xs text-slate-400 font-medium block">{spec.label}</span>
                    <span className="text-sm font-extrabold text-slate-800">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3.5 py-2 rounded-xl w-fit">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.download.subNote}</span>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-5">
              
              <div className="space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 block">Essai Gratuit 2 Jours</span>
                <h4 className="text-lg font-bold text-slate-900">Commencez dès maintenant</h4>
              </div>

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full py-4 px-6 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-emerald-500 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 border border-emerald-300/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 overflow-hidden cursor-pointer"
              >
                {/* Shine animation */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                {/* Green Pulsing Indicator Dot */}
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </span>

                <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>{t.download.ctaBtn}</span>
              </a>

              <div className="space-y-2 text-left rtl:text-right w-full text-xs text-slate-600 font-medium pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Installation rapide en 60 secondes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Assistance gratuite à l'installation</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
