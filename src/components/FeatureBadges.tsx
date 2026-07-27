import { useLanguage } from '../context/LanguageContext';
import { WifiOff, Monitor, Sparkles, Zap, FileSpreadsheet, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeatureBadges: React.FC = () => {
  const { t } = useLanguage();

  const badgesList = [
    {
      icon: WifiOff,
      text: t.badges.offline,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200/90 hover:border-emerald-300",
      glow: "hover:shadow-emerald-500/10",
      iconColor: "text-emerald-600"
    },
    {
      icon: Monitor,
      text: t.badges.multiDevice,
      color: "bg-indigo-50 text-indigo-800 border-indigo-200/90 hover:border-indigo-300",
      glow: "hover:shadow-indigo-500/10",
      iconColor: "text-indigo-600"
    },
    {
      icon: Sparkles,
      text: t.badges.aiImport,
      color: "bg-amber-50 text-amber-900 border-amber-200/90 hover:border-amber-300",
      glow: "hover:shadow-amber-500/10",
      iconColor: "text-amber-600"
    },
    {
      icon: Zap,
      text: t.badges.fastPrint,
      color: "bg-sky-50 text-sky-900 border-sky-200/90 hover:border-sky-300",
      glow: "hover:shadow-sky-500/10",
      iconColor: "text-sky-600"
    },
    {
      icon: FileSpreadsheet,
      text: t.badges.exportExcelPdf,
      color: "bg-teal-50 text-teal-900 border-teal-200/90 hover:border-teal-300",
      glow: "hover:shadow-teal-500/10",
      iconColor: "text-teal-600"
    },
    {
      icon: Languages,
      text: t.badges.bilingual,
      color: "bg-purple-50 text-purple-900 border-purple-200/90 hover:border-purple-300",
      glow: "hover:shadow-purple-500/10",
      iconColor: "text-purple-600"
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full max-w-6xl mx-auto mt-14 sm:mt-16 pt-8 border-t border-slate-200"
    >
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {badgesList.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div
              key={idx}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full ${badge.color} border shadow-sm hover:shadow-md ${badge.glow} hover:scale-105 transition-all duration-300 cursor-default text-xs sm:text-sm font-bold group`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${badge.iconColor} group-hover:scale-110 transition-transform`} />
              <span>{badge.text}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
