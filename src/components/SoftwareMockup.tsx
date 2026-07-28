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
  Sparkles
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
      icon: LayoutDashboard
    },
    caisse: {
      src: '/cpt/caisse.jpg',
      alt: 'Stock Pro - Interface Caisse et Point de Vente',
      label: t.mockup.tabs.caisse,
      icon: ShoppingCart
    },
    produit: {
      src: '/cpt/ficheproduit.jpg',
      alt: 'Stock Pro - Gestion Fiche Produit et Stock',
      label: t.mockup.tabs.produit,
      icon: Package
    },
    facture: {
      src: '/cpt/facture.jpg',
      alt: 'Stock Pro - Aperçu Factures et Tickets',
      label: t.mockup.tabs.facture,
      icon: Receipt
    },
    bilan: {
      src: '/cpt/bilan.jpg',
      alt: 'Stock Pro - Bilan et Rapports Financiers',
      label: t.mockup.tabs.bilan,
      icon: PieChart
    },
    clients: {
      src: '/cpt/client.jpg',
      alt: 'Stock Pro - Gestion Clients et Dettes',
      label: t.mockup.tabs.clients,
      icon: Users
    },
    employes: {
      src: '/cpt/employee.jpg',
      alt: 'Stock Pro - Gestion et Pointage Employés',
      label: t.mockup.tabs.employes,
      icon: UserCheck
    }
  };

  return (
    <div className="relative w-full max-w-2xl lg:max-w-none mx-auto perspective-1000">
      
      {/* AMBIENT PROJECTOR SPOTLIGHTS BEHIND MOCKUP */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/30 via-sky-400/20 to-amber-500/25 rounded-3xl blur-3xl opacity-75 pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* MAIN CONTAINER WITH REALISTIC DESKTOP FRAME */}
      <motion.div 
        initial={{ opacity: 0, y: 30, rotateX: 3, rotateY: lang === 'fr' ? -2 : 2 }}
        animate={{ opacity: 1, y: 0, rotateX: 1, rotateY: lang === 'fr' ? -0.5 : 0.5 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl shadow-2xl shadow-slate-900/30 border border-slate-700/80 overflow-hidden transform-style-3d bg-slate-950 text-white"
      >
        
        {/* PREMIUM MAC/WINDOWS APPLICATION TITLEBAR */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800/90 select-none">
          
          {/* Left: Window Controls & Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block shadow-sm"></span>
            </div>
            
            <div className="flex items-center gap-2 border-l ltr:border-l rtl:border-r border-slate-800 px-3 py-0.5">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></div>
              <span className="text-xs font-bold tracking-tight text-white">
                Stock Pro <span className="text-[10px] text-indigo-400 font-mono font-normal">v4.2 PRO</span>
              </span>
            </div>
          </div>

          {/* Right: Status Pill & Fullscreen CTA */}
          <div className="flex items-center gap-2.5">
            <span className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold">
              <Wifi className="w-3 h-3 animate-pulse" />
              <span>{t.mockup.liveStatus}</span>
            </span>

            <a
              href={screenshots[activeTab].src}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white transition-all text-[11px] font-medium border border-slate-700"
              title="Voir l'image en plein écran"
            >
              <Maximize2 className="w-3 h-3" />
              <span className="hidden xs:inline">{lang === 'fr' ? 'Plein écran' : 'تكبير'}</span>
            </a>
          </div>

        </div>

        {/* REALISTIC APPLICATION TABS BAR (SHOWING ALL TABS WITH SMOOTH SWITCHING) */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/90 border-b border-slate-800/90 overflow-x-auto no-scrollbar scroll-smooth">
          {(Object.keys(screenshots) as Array<keyof typeof screenshots>).map((tabKey) => {
            const tab = screenshots[tabKey];
            const Icon = tab.icon;
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                type="button"
                className={`relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-white bg-indigo-600 shadow-md shadow-indigo-600/30 border border-indigo-400/40'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span className="whitespace-nowrap">{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-indigo-400 rounded-full shadow-sm shadow-indigo-400"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* REAL SCREENSHOT DISPLAY FRAME - UNZOOMED & CLEAR */}
        <div className="relative w-full bg-slate-950 p-2 sm:p-3 overflow-hidden flex items-center justify-center min-h-[340px] sm:min-h-[440px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.015 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full flex items-center justify-center rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 relative group"
            >
              <img
                src={screenshots[activeTab].src}
                alt={screenshots[activeTab].alt}
                className="w-full h-auto max-h-[500px] object-contain object-top rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Active Tab Label Overlay Badge */}
              <div className="absolute top-3 ltr:left-3 rtl:right-3 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-bold text-white flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{screenshots[activeTab].label}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Subtle overlay border ring */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none rounded-b-2xl"></div>
        </div>

      </motion.div>

      {/* FLOATING CARD: INSTANT RECEIPT TICKET */}
      <motion.div 
        initial={{ opacity: 0, x: lang === 'fr' ? -30 : 30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`absolute -bottom-5 ${lang === 'fr' ? '-left-5' : '-right-5'} hidden sm:flex items-center gap-3.5 p-4 rounded-xl glass-panel-light border border-emerald-400/60 shadow-2xl shadow-slate-900/10 backdrop-blur-xl z-20 hover:scale-105 transition-transform duration-300 bg-white/95 text-slate-900`}
      >
        <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
          <Printer className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-900">{t.mockup.floatingReceiptCard.ticketNumber}</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 text-[9px] font-bold">
              {t.mockup.floatingReceiptCard.status}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4 mt-1">
            <span className="text-sm font-extrabold text-emerald-600">{t.mockup.floatingReceiptCard.totalAmount}</span>
            <span className="text-[10px] text-slate-500">{t.mockup.floatingReceiptCard.printedAt}</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
};
