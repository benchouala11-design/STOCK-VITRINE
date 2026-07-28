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
          <Features />
          <DownloadSection />
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
