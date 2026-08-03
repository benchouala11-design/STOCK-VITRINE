import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Store, MapPin, Receipt, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

export const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    Store,
    MapPin,
    Receipt,
    Smile
  };

  return (
    <section id="stats" className="py-16 sm:py-20 relative bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 text-white border-y border-indigo-500/20 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.stats.items.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Store;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/40 backdrop-blur-md text-center space-y-2 group transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-amber-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-mono pt-2">
                  <span className="text-gradient-indigo-light">{stat.value}</span>
                </div>

                <h4 className="text-sm sm:text-base font-extrabold text-slate-100">
                  {stat.label}
                </h4>

                <p className="text-xs text-slate-400 font-medium max-w-xs mx-auto">
                  {stat.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
