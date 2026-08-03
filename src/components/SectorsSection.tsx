import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShoppingBag, 
  Shirt, 
  Smartphone, 
  Sparkles, 
  Hammer, 
  Warehouse 
} from 'lucide-react';
import { motion } from 'framer-motion';

export const SectorsSection: React.FC = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    ShoppingBag,
    Shirt,
    Smartphone,
    Sparkles,
    Hammer,
    Warehouse,
  };

  const colorStyles: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
    emerald: {
      bg: 'hover:bg-emerald-50/50',
      text: 'text-emerald-700',
      border: 'hover:border-emerald-300',
      iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200'
    },
    indigo: {
      bg: 'hover:bg-indigo-50/50',
      text: 'text-indigo-700',
      border: 'hover:border-indigo-300',
      iconBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-200'
    },
    cyan: {
      bg: 'hover:bg-cyan-50/50',
      text: 'text-cyan-700',
      border: 'hover:border-cyan-300',
      iconBg: 'bg-cyan-500/10 text-cyan-600 border-cyan-200'
    },
    rose: {
      bg: 'hover:bg-rose-50/50',
      text: 'text-rose-700',
      border: 'hover:border-rose-300',
      iconBg: 'bg-rose-500/10 text-rose-600 border-rose-200'
    },
    amber: {
      bg: 'hover:bg-amber-50/50',
      text: 'text-amber-700',
      border: 'hover:border-amber-300',
      iconBg: 'bg-amber-500/10 text-amber-600 border-amber-200'
    },
    violet: {
      bg: 'hover:bg-violet-50/50',
      text: 'text-violet-700',
      border: 'hover:border-violet-300',
      iconBg: 'bg-violet-500/10 text-violet-600 border-violet-200'
    }
  };

  return (
    <section id="sectors" className="py-16 sm:py-24 relative bg-[#f8fafc] overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold shadow-sm">
            <span>{t.sectors.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            <span>{t.sectors.title}</span>
            <span className="text-gradient-indigo-light block sm:inline">
              {t.sectors.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {t.sectors.subtitle}
          </p>
        </div>

        {/* SECTORS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {t.sectors.items.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ShoppingBag;
            const style = colorStyles[item.color] || colorStyles.indigo;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 ${style.border} ${style.bg} shadow-lg shadow-slate-900/5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl ${style.iconBg} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full bg-slate-100 ${style.text}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mt-5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-slate-700">
                  <span>Configuration Prête</span>
                  <span className="text-emerald-600 font-bold">100% Compatible</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
