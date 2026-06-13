import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';
import { getDecodedEmail, getDecodedPhone, getDecodedWhatsApp } from '../utils/obfuscation';

interface FooterProps {
  currentLanguage: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-secondary text-white pt-16 pb-6 rounded-t-[50px] mt-12 shadow-[0_-10px_30px_rgba(0,0,0,0.2)] relative overflow-hidden px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          
          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-bold mb-6 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-primary after:rounded">
              {t('contact_title')}
            </h3>
            <ul className="list-none p-0 m-0 space-y-4">
              <li className="flex items-center gap-3 text-base">
                <i className="fas fa-map-marker-alt text-lg w-5 text-center text-primary" />
                <span>Luanda, Angola</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <i className="fas fa-phone text-lg w-5 text-center text-primary" />
                <span>{getDecodedPhone()}</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <i className="fas fa-envelope text-lg w-5 text-center text-primary" />
                <a href={`mailto:${getDecodedEmail()}`} className="text-white hover:text-primary transition-colors duration-300">
                  {getDecodedEmail()}
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/juliomalo-geotecnia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-xl text-white transition-all duration-300 hover:bg-primary hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href={getDecodedWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-xl text-white transition-all duration-300 hover:bg-primary hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-primary after:rounded">
              {t('quick_links_title')}
            </h3>
            <ul className="list-none p-0 m-0 space-y-3">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="text-white hover:text-primary transition-colors duration-300 text-base"
                >
                  {t('menu_about')}
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => handleLinkClick(e, 'experience')}
                  className="text-white hover:text-primary transition-colors duration-300 text-base"
                >
                  {t('menu_experience')}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleLinkClick(e, 'skills')}
                  className="text-white hover:text-primary transition-colors duration-300 text-base"
                >
                  {t('menu_skills')}
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  onClick={(e) => handleLinkClick(e, 'certifications')}
                  className="text-white hover:text-primary transition-colors duration-300 text-base"
                >
                  {t('menu_certifications')}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-5 border-t border-white/10 text-sm opacity-80 mt-8">
          <p>&copy; 2024 Júlio Maló. {t('all_rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
