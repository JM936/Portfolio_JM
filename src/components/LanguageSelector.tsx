import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Language } from '../data/translations';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; title: string; flag: string }[] = [
    { code: 'pt', label: 'PT', title: 'Português', flag: '🇦🇴' },
    { code: 'en', label: 'EN', title: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'FR', title: 'Français', flag: '🇫🇷' },
  ];

  const currentLangObj = languages.find((l) => l.code === currentLanguage) || languages[0];

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (code: Language) => {
    onLanguageChange(code);
    setIsOpen(false);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed top-4 right-4 z-50 font-body"
    >
      {/* Botão Trigger Compacto (Não atrapalha o menu) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Selecionar idioma"
        className="flex items-center gap-2 h-10 px-3.5 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-slate-700 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary"
      >
        <i className="fas fa-globe text-primary text-sm" />
        <span className="font-bold text-xs sm:text-sm tracking-wide">{currentLangObj.label}</span>
        <motion.i 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="fas fa-chevron-down text-[10px] text-slate-400"
        />
      </button>

      {/* Menu Expansível com AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-44 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xl overflow-hidden p-1.5 z-50"
          >
            <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
              Idioma / Language
            </div>
            
            <div className="mt-1 flex flex-col gap-0.5">
              {languages.map((lang) => {
                const isSelected = currentLanguage === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-150 cursor-pointer border-none text-left ${
                      isSelected
                        ? 'bg-primary/10 text-primary font-bold'
                        : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{lang.flag}</span>
                      <span>{lang.title}</span>
                    </span>
                    {isSelected && (
                      <i className="fas fa-check text-xs text-primary" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
