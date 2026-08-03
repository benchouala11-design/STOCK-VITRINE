import { useLanguage } from '../context/LanguageContext';
import { DOWNLOAD_URL } from '../locales/translations';
import { Download, PlayCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SoftwareMockup } from './SoftwareMockup';
import { FeatureBadges } from './FeatureBadges';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative flex flex-col pt-24 pb-8 sm:pt-28 sm:pb-10 overflow-hidden bg-slate-100"
    >
      {/* BACKGROUND GRAPHICS: DISCREET GRID */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-60 pointer-events-none -z-10"></div>
      
      {/* SIDE WALL PROJECTOR SPOTLIGHTS */}
      <div className="absolute top-0 -left-20 w-[600px] h-[800px] projector-left-indigo pointer-events-none -z-10 blur-xl"></div>
      <div className="absolute top-10 -right-20 w-[600px] h-[800px] projector-right-amber pointer-events-none -z-10 blur-xl"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] projector-center-cyan pointer-events-none -z-10 blur-2xl"></div>

      {/* ================================================================ */}
      {/* TOP: CENTERED HEADLINE + CTA (COMPACT)                           */}
      {/* ================================================================ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-5">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs sm:text-sm font-bold shadow-sm backdrop-blur-md hover:border-indigo-300 transition-colors mx-auto"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span>{t.hero.badge}</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
        >
          <span>{t.hero.titleMain}</span>
          <span className="text-gradient-indigo-light">{t.hero.titleHighlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          {/* Primary Animated Green Download CTA */}
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-emerald-500 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 border border-emerald-300/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden text-center cursor-pointer"
          >
            <span className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl opacity-30 blur-sm group-hover:opacity-60 transition-opacity"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <span className="flex h-2.5 w-2.5 relative ltr:mr-2.5 rtl:ml-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <Download className="w-5 h-5 ltr:mr-2 rtl:ml-2 text-white group-hover:scale-110 transition-transform" />
            <span>{t.hero.primaryCta}</span>
          </a>

          {/* Secondary Demo CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-sm backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center group"
          >
            <PlayCircle className="w-5 h-5 ltr:mr-2.5 rtl:ml-2.5 text-slate-500 group-hover:text-amber-500 transition-colors" />
            <span>{t.hero.secondaryCta}</span>
          </a>
        </motion.div>

        {/* CHECKMARKS */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-2 text-slate-700 font-semibold">
            <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <span>{t.hero.benefits.offline}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-semibold">
            <div className="w-5 h-5 rounded-full bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-600 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <span>{t.hero.benefits.bilingual}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-semibold">
            <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <span>{t.hero.benefits.trial}</span>
          </div>
        </motion.div>

      </div>

      {/* ================================================================ */}
      {/* FULL-WIDTH GIANT MOCKUP (CENTER STAGE)                            */}
      {/* ================================================================ */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12"
      >
        <SoftwareMockup />
      </motion.div>

      {/* BOTTOM FEATURE BADGES ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <FeatureBadges />
      </div>

    </section>
  );
};
