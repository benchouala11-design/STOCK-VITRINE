import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DownloadSection } from './components/DownloadSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DocumentationModal } from './components/DocumentationModal';

export function App() {
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-900 overflow-x-hidden">
        {/* Sleek top ambient glow line */}
        <div className="h-1 w-full bg-gradient-to-r from-indigo-600 via-amber-500 to-emerald-500 fixed top-0 left-0 right-0 z-50"></div>
        
        {/* Navigation Bar */}
        <Navbar onOpenDoc={() => setIsDocModalOpen(true)} />
        
        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <Hero />
          
          {/* ── Wave Divider: Light → Dark (Hero → Features) ── */}
          <div className="relative -mt-1">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-14 sm:h-20 block" preserveAspectRatio="none">
              <path d="M0 40L48 35C96 30 192 20 288 18.7C384 17.3 480 24.7 576 30C672 35.3 768 38.7 864 36.7C960 34.7 1056 27.3 1152 25.3C1248 23.3 1344 26.7 1392 28.3L1440 30V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z" fill="#0f172a"/>
            </svg>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-600 via-violet-500 to-sky-400"></div>
          </div>

          <Features />
          
          {/* ── Wave Divider: Dark → Warm (Features → Download) ── */}
          <div className="relative -mt-1">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-14 sm:h-20 block" preserveAspectRatio="none">
              <path d="M0 30L60 28C120 26 240 22 360 25.3C480 28.7 600 39.3 720 40C840 40.7 960 31.3 1080 26.7C1200 22 1320 22 1380 22L1440 22V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V30Z" fill="#0f172a"/>
              <path d="M0 80L60 75C120 70 240 60 360 58.7C480 57.3 600 64.7 720 68C840 71.3 960 70.7 1080 66.7C1200 62.7 1320 55.3 1380 51.7L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V80Z" fill="#eef2ff"/>
            </svg>
            <div className="absolute inset-x-0 top-1/2 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500"></div>
          </div>

          <DownloadSection />
          
          {/* ── Wave Divider: Warm → Dark (Download → Contact) ── */}
          <div className="relative -mt-1">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-14 sm:h-20 block" preserveAspectRatio="none">
              <path d="M0 45L48 42C96 39 192 33 288 30C384 27 480 27 576 31.7C672 36.3 768 45.7 864 48.3C960 51 1056 47 1152 42C1248 37 1344 31 1392 28L1440 25V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V45Z" fill="#0f172a"/>
            </svg>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
          </div>

          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenDoc={() => setIsDocModalOpen(true)} />

        {/* Inline Documentation Modal (Manuel_Utilisateur_StockPro.html embedded inside the app) */}
        <DocumentationModal 
          isOpen={isDocModalOpen} 
          onClose={() => setIsDocModalOpen(false)} 
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
