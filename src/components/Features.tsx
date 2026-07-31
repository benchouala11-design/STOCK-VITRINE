import { useLanguage } from '../context/LanguageContext';
import { WifiOff, ShoppingCart, Package, Sparkles, TrendingUp, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    WifiOff,
    ShoppingCart,
    Package,
    Sparkles,
    TrendingUp,
    Layers,
  };

  return (
    <section id="features" className="py-16 sm:py-20 relative bg-slate-900 overflow-hidden">
      
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-400/10 border border-indigo-400/30 text-indigo-200 text-xs font-bold shadow-sm">
            <span>{t.features.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            <span>{t.features.title}</span>
            <span className="text-gradient-indigo-light block sm:inline">
              {t.features.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            {t.features.subtitle}
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12">
          {t.features.items.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Package;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 hover:border-indigo-400/50 hover:bg-slate-950 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100/80 text-indigo-700 border border-indigo-200">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-indigo-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                  <span>En savoir plus</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
