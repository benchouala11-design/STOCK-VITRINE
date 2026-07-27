import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenDoc: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDoc }) => {
  const { t } = useLanguage();

  return (
    <footer className="py-10 bg-slate-950 text-slate-400 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
            SP
          </div>
          <span className="font-bold text-white text-sm">Stock Pro</span>
          <span className="text-slate-500">— {t.footer.tagline}</span>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <button 
            onClick={onOpenDoc}
            type="button"
            className="hover:text-white transition-colors cursor-pointer text-indigo-400 hover:underline"
          >
            {t.nav.documentation}
          </button>
          <a href="#features" className="hover:text-white transition-colors">
            {t.nav.features}
          </a>
          <a href="#download" className="hover:text-white transition-colors">
            {t.nav.download}
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            {t.nav.contact}
          </a>
        </div>

        <div className="text-slate-500">
          © {new Date().getFullYear()} Stock Pro. {t.footer.rights}
        </div>

      </div>
    </footer>
  );
};
