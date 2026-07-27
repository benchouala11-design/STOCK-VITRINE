import { useLanguage } from '../context/LanguageContext';
import { Download, PlayCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SoftwareMockup } from './SoftwareMockup';
import { FeatureBadges } from './FeatureBadges';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden bg-[#f8fafc]"
    >
      {/* BACKGROUND GRAPHICS: DISCREET GRID */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-60 pointer-events-none -z-10"></div>
      
      {/* SIDE WALL PROJECTOR SPOTLIGHTS (Projecteurs muraux latéraux colorés) */}
      
      {/* Left Wall Projector (Indigo/Purple Beam) */}
      <div className="absolute top-0 -left-20 w-[600px] h-[800px] projector-left-indigo pointer-events-none -z-10 blur-xl"></div>
      
      {/* Right Wall Projector (Amber/Gold Beam) */}
      <div className="absolute top-10 -right-20 w-[600px] h-[800px] projector-right-amber pointer-events-none -z-10 blur-xl"></div>

      {/* Top Center Cyan Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] projector-center-cyan pointer-events-none -z-10 blur-2xl"></div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================================================================ */}
          {/* LEFT PART: HEADLINE, SUBTITLE, CTAS & CHECKMARKS                  */}
          {/* ================================================================ */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start space-y-6 text-left ltr:text-left rtl:text-right rtl:items-start"
          >
            
            {/* Animated Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs sm:text-sm font-bold shadow-sm backdrop-blur-md hover:border-indigo-300 transition-colors"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Massive Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.1]">
              <span>{t.hero.titleMain}</span>
              <span className="text-gradient-indigo-light block sm:inline mt-1 sm:mt-0">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* CTA BUTTONS */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              
              {/* Primary Download CTA */}
              <a
                href="#download"
                className="relative group inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 border border-indigo-400/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden text-center"
              >
                {/* Shine animation */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <Download className="w-5 h-5 ltr:mr-2.5 rtl:ml-2.5 text-indigo-100 group-hover:scale-110 transition-transform" />
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

            </div>

            {/* CHECKMARKS BELOW BUTTONS */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full border-t border-slate-200 mt-4 text-xs sm:text-sm">
              
              {/* Checkmark 1 */}
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{t.hero.benefits.offline}</span>
              </div>

              {/* Checkmark 2 */}
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <div className="w-5 h-5 rounded-full bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-600 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{t.hero.benefits.bilingual}</span>
              </div>

              {/* Checkmark 3 */}
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{t.hero.benefits.trial}</span>
              </div>

            </div>

          </motion.div>

          {/* ================================================================ */}
          {/* RIGHT PART: 3D HIGH-END MOCKUP WITH REAL SCREENSHOTS             */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 w-full flex justify-center items-center mt-6 lg:mt-0">
            <SoftwareMockup />
          </div>

        </div>

        {/* BOTTOM FEATURE BADGES ROW */}
        <FeatureBadges />

      </div>
    </section>
  );
};
