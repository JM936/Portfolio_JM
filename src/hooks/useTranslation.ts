import { translations } from '../data/translations';
import type { Language, TranslationKeys } from '../data/translations';

// Hook personalizado para gerenciar traduções de forma declarativa e tipada no React
export const useTranslation = (lang: Language) => {
  const t = (key: TranslationKeys): string => {
    return translations[lang]?.[key] || translations['en']?.[key] || String(key);
  };

  return { t, lang };
};
