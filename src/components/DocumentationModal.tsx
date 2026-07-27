import { X, ExternalLink, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DocumentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentationModal: React.FC<DocumentationModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 text-white"
          >
            
            {/* Modal Top Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800">
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white">
                    Manuel d'Utilisation & Documentation Stock Pro
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Guide complet de prise en main et d'utilisation du logiciel
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <a
                  href="/Manuel_Utilisateur_StockPro.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold border border-slate-700"
                  title="Ouvrir dans une nouvelle fenêtre"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Plein écran</span>
                </a>

                <button
                  onClick={onClose}
                  type="button"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors"
                  title="Fermer la documentation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Embedded Documentation Iframe Frame */}
            <div className="flex-1 w-full bg-white relative">
              <iframe
                src="/Manuel_Utilisateur_StockPro.html"
                title="Documentation Manuel Utilisateur Stock Pro"
                className="w-full h-full border-0"
              />
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};
