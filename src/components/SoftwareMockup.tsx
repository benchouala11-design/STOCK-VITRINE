import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Wifi, 
  Printer, 
  LayoutDashboard,
  ShoppingCart,
  Receipt,
  PieChart,
  Maximize2,
  Package,
  Users,
  UserCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SoftwareMockup: React.FC = () => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'accueil' | 'caisse' | 'produit' | 'facture' | 'bilan' | 'clients' | 'employes'>('accueil');

  const screenshots = {
    accueil: {
      src: '/cpt/acceuil.jpg',
      alt: 'Stock Pro - Tableau de Bord Accueil',
      label: t.mockup.tabs.accueil,
      icon: LayoutDashboard,
      features: t.mockup.tabFeatures.accueil
    },
    caisse: {
      src: '/cpt/caisse.jpg',
      alt: 'Stock Pro - Interface Caisse et Point de Vente',
      label: t.mockup.tabs.caisse,
      icon: ShoppingCart,
      features: t.mockup.tabFeatures.caisse
    },
    produit: {
      src: '/cpt/ficheproduit.jpg',
      alt: 'Stock Pro - Gestion Fiche Produit et Stock',
      label: t.mockup.tabs.produit,
      icon: Package,
      features: t.mockup.tabFeatures.produit
    },
    facture: {
      src: '/cpt/facture.jpg',
      alt: 'Stock Pro - Aperçu Factures et Tickets',
      label: t.mockup.tabs.facture,
      icon: Receipt,
      features: t.mockup.tabFeatures.facture
    },
    bilan: {
      src: '/cpt/bilan.jpg',
      alt: 'Stock Pro - Bilan et Rapports Financiers',
      label: t.mockup.tabs.bilan,
      icon: PieChart,
      features: t.mockup.tabFeatures.bilan
    },
    clients: {
      src: '/cpt/client.jpg',
      alt: 'Stock Pro - Gestion Clients et Dettes',
      label: t.mockup.tabs.clients,
      icon: Users,
      features: t.mockup.tabFeatures.clients
    },
    employes: {
      src: '/cpt/employee.jpg',
      alt: 'Stock Pro - Gestion et Pointage Employés',
      label: t.mockup.tabs.employes,
      icon: UserCheck,
      features: t.mockup.tabFeatures.employes
    }
  };

  const currentTab = screenshots[activeTab];
  const ActiveIcon = currentTab.icon;
  const activeFeatures = currentTab.features;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      
      {/* ================================================================ */}
      {/* 1. TOP INTERACTIVE MODULE TABS SELECTOR                          */}
      {/* ================================================================ */}
      <div className="rounded-2xl bg-slate-950/90 border border-white/10 shadow-xl backdrop-blur-md overflow-hidden">
        <div className="flex items-center justify-center gap-2 px-4 pt-3 pb-1 text-[11px] font-bold text-indigo-200">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400"></span>
          </span>
          <span>{t.mockup.tabHint}</span>
        </div>
        <div role="tablist" aria-label={t.mockup.tabHint} className="flex items-center justify-center gap-2 p-2 pt-1 overflow-x-auto no-scrollbar scroll-smooth">
        {(Object.keys(screenshots) as Array<keyof typeof screenshots>).map((tabKey, idx) => {
          const tab = screenshots[tabKey];
          const Icon = tab.icon;
          const isActive = activeTab === tabKey;
          return (
            <motion.button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              type="button"
              role="tab"
              aria-selected={isActive}
              animate={isActive ? { y: 0, scale: 1.05 } : { y: [0, -2, 0], scale: 1 }}
              transition={isActive ? { duration: 0.25 } : { duration: 0.8, delay: idx * 0.14, repeat: Infinity, repeatDelay: 5 }}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-colors duration-300 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                isActive
                  ? 'text-white bg-gradient-to-r from-indigo-600 to-indigo-700 shadow-lg shadow-indigo-600/30 border border-indigo-400/40 scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-white/10 border border-transparent'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-600'}`} />
              <span className="whitespace-nowrap">{tab.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute -bottom-1 left-3 right-3 h-0.5 bg-amber-400 rounded-full shadow-sm"
                />
              )}
            </motion.button>
          );
        })}
        </div>
      </div>

      {/* ================================================================ */}
      {/* 2. MAIN LAYOUT: CENTER PC MONITOR + DYNAMIC SIDE FEATURES        */}
      {/* ================================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* ================================================================ */}
        {/* CENTER STAGE GIANT PC MONITOR FRAME (8 COLS)                     */}
        {/* ================================================================ */}
        <div className="lg:col-span-8 w-full perspective-1000">
          
          {/* Ambient Wall Spotlights */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/20 via-amber-400/15 to-emerald-500/20 rounded-3xl blur-3xl opacity-75 pointer-events-none -z-10 animate-pulse"></div>

            {/* REALISTIC DESKTOP MONITOR FRAME */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl shadow-2xl shadow-slate-950/25 border border-slate-700/80 overflow-hidden bg-slate-950 text-white"
            >
              
              {/* MONITOR WINDOW TITLE BAR */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800 select-none">
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-sm"></span>
                  </div>
                  
                  <div className="flex items-center gap-2 border-l ltr:border-l rtl:border-r border-slate-800 px-3 py-0.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
                    <span className="text-xs font-extrabold tracking-tight text-white">
                      Stock Pro 2026 — <span className="text-amber-400 font-semibold">{currentTab.label}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                    <Wifi className="w-3 h-3 animate-pulse" />
                    <span>{t.mockup.liveStatus}</span>
                  </span>

                  <a
                    href={currentTab.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-all text-[11px] font-bold border border-slate-700"
                    title="Voir l'image en taille originale"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span className="hidden xs:inline">{lang === 'fr' ? 'Plein écran' : 'تكبير'}</span>
                  </a>
                </div>

              </div>

              {/* SCREENSHOT DISPLAY VIEWPORT (UNZOOMED & CRISP) */}
              <div className="relative w-full bg-slate-950 p-2 sm:p-3 overflow-hidden flex items-center justify-center min-h-[360px] sm:min-h-[460px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex items-center justify-center rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 relative group"
                  >
                    <img
                      src={currentTab.src}
                      alt={currentTab.alt}
                      className="w-full h-auto max-h-[520px] object-contain object-top rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
                    />

                    {/* Active Tab Badge Overlay */}
                    <div className="absolute top-3 ltr:left-3 rtl:right-3 px-3.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-indigo-500/40 text-xs font-extrabold text-white flex items-center gap-2 shadow-xl">
                      <ActiveIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>{currentTab.label}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none rounded-b-2xl"></div>
              </div>

            </motion.div>

            {/* FLOATING CARD: TICKET PRINT */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`absolute -bottom-5 ${lang === 'fr' ? '-left-4' : '-right-4'} hidden sm:flex items-center gap-3.5 p-3.5 rounded-xl glass-panel-light border border-emerald-400/60 shadow-xl backdrop-blur-xl z-20 bg-white/95 text-slate-900`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">{t.mockup.floatingReceiptCard.ticketNumber}</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 text-[9px] font-bold">
                    {t.mockup.floatingReceiptCard.status}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 mt-0.5">
                  <span className="text-xs font-extrabold text-emerald-600">{t.mockup.floatingReceiptCard.totalAmount}</span>
                  <span className="text-[10px] text-slate-500">{t.mockup.floatingReceiptCard.printedAt}</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ================================================================ */}
        {/* DYNAMIC SIDE PANEL: ANIMATED FEATURE HIGHLIGHTS (4 COLS)          */}
        {/* ================================================================ */}
        <div className="lg:col-span-4 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: lang === 'fr' ? 25 : -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: lang === 'fr' ? -25 : 25 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-white/10 shadow-xl shadow-indigo-950/30 space-y-6 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-600 to-amber-500 rounded-full"></div>

              {/* Module Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-400/10 border border-indigo-400/30 text-indigo-200 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{activeFeatures.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {activeFeatures.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {activeFeatures.subtitle}
                </p>
              </div>

              {/* 4 Feature Points Grid */}
              <div className="space-y-3.5 pt-2 border-t border-white/10">
                {activeFeatures.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-white/10 hover:border-indigo-400/30 hover:bg-indigo-400/5 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-white">{pt.title}</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Module CTA link */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl text-xs font-extrabold text-indigo-200 bg-indigo-400/10 hover:bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center gap-2 transition-all group"
                >
                  <span>Demander une démonstration du module {activeTab}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
};
