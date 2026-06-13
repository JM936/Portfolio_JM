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
  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <div className="fixed top-5 right-5 z-[1000] flex gap-2 bg-white rounded-[50px] shadow-md p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`w-10 h-10 md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center font-semibold cursor-pointer border-none text-sm transition-all duration-300 ${
            currentLanguage === lang.code
              ? 'bg-primary text-white shadow-sm scale-105'
              : 'bg-transparent text-grayCustom hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
export default LanguageSelector;
