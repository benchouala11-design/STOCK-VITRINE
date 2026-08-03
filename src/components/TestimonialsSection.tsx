import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative bg-slate-900 overflow-hidden text-white">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{t.testimonials.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <span>{t.testimonials.title}</span>
            <span className="text-gradient-indigo-light block sm:inline">
              {t.testimonials.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {t.testimonials.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/50 shadow-xl relative flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-indigo-500/30 group-hover:text-indigo-500/60 transition-colors" />
                </div>

                {/* Review Text (Authentic Algerian Darija) */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-indigo-300 font-medium">{item.role}</p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>{item.city}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
