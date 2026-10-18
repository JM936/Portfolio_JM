import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';
import { getDecodedEmail, getDecodedPhone, getDecodedWhatsApp } from '../utils/obfuscation';
import { trackEvent } from '../utils/analytics';

interface FooterProps {
  currentLanguage: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8 rounded-t-[40px] md:rounded-t-[56px] mt-16 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] relative overflow-hidden px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold mb-6 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-primary after:rounded-full">
              {t('contact_title')}
            </h3>
            <ul className="list-none p-0 m-0 space-y-4">
              <li className="flex items-center gap-3.5 text-slate-300 text-sm sm:text-base">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-primary text-base flex-shrink-0">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <span>Luanda, Angola</span>
              </li>
              <li className="flex items-center gap-3.5 text-slate-300 text-sm sm:text-base">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-emerald-400 text-base flex-shrink-0">
                  <i className="fas fa-phone" />
                </div>
                <span>{getDecodedPhone()}</span>
              </li>
              <li className="flex items-center gap-3.5 text-slate-300 text-sm sm:text-base">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sky-400 text-base flex-shrink-0">
                  <i className="fas fa-envelope" />
                </div>
                <a 
                  href={`mailto:${getDecodedEmail()}`} 
                  onClick={() => trackEvent('contact_click', { contact_type: 'email', location: 'footer' })}
                  className="text-white hover:text-primary transition-colors duration-200 no-underline"
                >
                  {getDecodedEmail()}
                </a>
              </li>
            </ul>

            {/* Ícones Sociais */}
            <div className="flex gap-3.5 mt-8">
              <a
                href="https://www.linkedin.com/in/juliomalo-geotecnia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onClick={() => trackEvent('social_click', { platform: 'linkedin', location: 'footer' })}
                className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-lg text-white transition-all duration-300 hover:bg-primary hover:-translate-y-1 hover:shadow-lg no-underline"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href={getDecodedWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onClick={() => trackEvent('click_whatsapp', { location: 'footer' })}
                className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-lg text-white transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-1 hover:shadow-lg no-underline"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-2xl font-bold mb-6 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-primary after:rounded-full">
              {t('quick_links_title')}
            </h3>
            <ul className="list-none p-0 m-0 space-y-3">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base no-underline flex items-center gap-2"
                >
                  <i className="fas fa-chevron-right text-xs text-primary" />
                  <span>{t('menu_about')}</span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => handleLinkClick(e, 'experience')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base no-underline flex items-center gap-2"
                >
                  <i className="fas fa-chevron-right text-xs text-primary" />
                  <span>{t('menu_experience')}</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, 'projects')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base no-underline flex items-center gap-2"
                >
                  <i className="fas fa-chevron-right text-xs text-primary" />
                  <span>{t('menu_projects')}</span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleLinkClick(e, 'skills')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base no-underline flex items-center gap-2"
                >
                  <i className="fas fa-chevron-right text-xs text-primary" />
                  <span>{t('menu_skills')}</span>
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  onClick={(e) => handleLinkClick(e, 'certifications')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base no-underline flex items-center gap-2"
                >
                  <i className="fas fa-chevron-right text-xs text-primary" />
                  <span>{t('menu_certifications')}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha de Copyright */}
        <div className="pt-6 border-t border-slate-800 text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="m-0">&copy; {new Date().getFullYear()} Júlio Maló. {t('all_rights_reserved')}</p>
          <p className="m-0 text-slate-500">Controle Tecnológico & Geotecnia de Alta Precisão</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
