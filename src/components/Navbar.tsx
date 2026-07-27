import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, Globe, Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenDoc: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDoc }) => {
  const { lang, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home', isDoc: false },
    { name: t.nav.features, href: '#features', isDoc: false },
    { name: t.nav.download, href: '#download', isDoc: false },
    { name: t.nav.documentation, href: '#docs', isDoc: true },
    { name: t.nav.contact, href: '#contact', isDoc: false },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, isDoc: boolean) => {
    if (isDoc) {
      e.preventDefault();
      onOpenDoc();
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav-light py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-amber-500 p-[1px] shadow-md shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center relative overflow-hidden">
                <div className="flex items-center gap-0.5">
                  <div className="w-2.5 h-4 bg-indigo-500 rounded-sm transform -skew-x-12"></div>
                  <div className="w-2.5 h-5 bg-amber-500 rounded-sm transform -skew-x-12"></div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Stock Pro
                </span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700 border border-indigo-200 tracking-wider">
                  POS
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider">
                {lang === 'fr' ? 'Gestion Commerciale' : 'إدارة التجارة والمخزون'}
              </span>
            </div>
          </a>

          {/* NAV LINKS (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.isDoc)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  link.isDoc
                    ? 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                {link.isDoc && <BookOpen className="w-3.5 h-3.5" />}
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS: LANG TOGGLE & DOWNLOAD CTA */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Switcher Button (FR | العربية) */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 cursor-pointer shadow-sm"
              title="Changer la langue / تغيير اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <div className="flex items-center gap-1.5">
                <span className={lang === 'fr' ? 'text-indigo-600 font-extrabold' : 'opacity-60'}>
                  FR
                </span>
                <span className="text-slate-300">|</span>
                <span className={lang === 'ar' ? 'text-amber-600 font-extrabold' : 'opacity-60'}>
                  العربية
                </span>
              </div>
            </button>

            {/* Download CTA Button */}
            <a
              href="#download"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 border border-indigo-400/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <Download className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2 text-indigo-100 group-hover:scale-110 transition-transform" />
              <span>{t.nav.downloadBtn}</span>
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              type="button"
              className="p-2 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800"
            >
              {lang === 'fr' ? 'AR' : 'FR'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden glass-panel-light border-t border-slate-200 overflow-hidden bg-white/95"
          >
            <div className="px-4 py-6 space-y-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.isDoc)}
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-2"
                  >
                    {link.isDoc && <BookOpen className="w-4 h-4 text-indigo-600" />}
                    <span>{link.name}</span>
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <a
                  href="#download"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-md shadow-indigo-600/30"
                >
                  <Download className="w-4 h-4" />
                  {t.nav.downloadBtn}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
