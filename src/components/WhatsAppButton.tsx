import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';
import { getWhatsAppPhone } from '../utils/obfuscation';
import { trackEvent } from '../utils/analytics';

interface WhatsAppButtonProps {
  currentLanguage: Language;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  const phone = getWhatsAppPhone();
  const message = t('whatsapp_message');
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackEvent('click_whatsapp', { language: currentLanguage });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group font-body">
      {/* Tooltip moderno à esquerda do botão */}
      <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 bg-slate-900/90 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-md border border-white/10 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        <span>{t('whatsapp_tooltip')}</span>
        <div className="w-2 h-2 bg-slate-900/90 rotate-45 absolute -right-1 border-t border-r border-white/10" />
      </div>

      {/* Botão Flutuante */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('whatsapp_tooltip')}
        onClick={handleClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-colors duration-200 focus-visible:ring-4 focus-visible:ring-[#25D366]/40 outline-none cursor-pointer no-underline"
      >
        {/* Efeito de pulso de atenção sutil */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        {/* Ícone oficial do WhatsApp */}
        <i className="fab fa-whatsapp text-2xl sm:text-3xl relative z-10" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
