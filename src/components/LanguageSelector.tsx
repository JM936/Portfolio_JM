import React from 'react';
import type { Language } from '../data/translations';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const languages: { code: Language; label: string; title: string }[] = [
    { code: 'pt', label: 'PT', title: 'Português' },
    { code: 'en', label: 'EN', title: 'English' },
    { code: 'fr', label: 'FR', title: 'Français' },
  ];

  return (
    <aside 
      aria-label="Language selector"
      className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-white/85 backdrop-blur-md border border-slate-200/80 rounded-full shadow-lg p-1.5 transition-all duration-300 hover:shadow-xl"
    >
      <div className="pl-2 pr-1 text-slate-400 text-xs hidden sm:block">
        <i className="fas fa-globe" />
      </div>
      {languages.map((lang) => {
        const isCurrent = currentLanguage === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onLanguageChange(lang.code)}
            title={lang.title}
            aria-label={`Mudar idioma para ${lang.title}`}
            aria-pressed={isCurrent}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm cursor-pointer border-none transition-all duration-200 ${
              isCurrent
                ? 'bg-primary text-white shadow-sm scale-105'
                : 'bg-transparent text-slate-600 hover:text-primary hover:bg-primary/10'
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </aside>
  );
};

export default LanguageSelector;
