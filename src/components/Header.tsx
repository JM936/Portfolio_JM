import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';
import { getDecodedEmail, getDecodedPhone } from '../utils/obfuscation';

interface HeaderProps {
  currentLanguage: Language;
}

export const Header: React.FC<HeaderProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  return (
    <header className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-4 relative overflow-hidden rounded-b-[50px] mb-10 shadow-md">
      <div className="max-w-[1200px] mx-auto relative z-10 text-center pt-8">
        <div className="w-[180px] h-[180px] rounded-full border-[5px] border-white/30 mx-auto mb-5 bg-white overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-lg">
          <img
            src="/Imagens/Profile.jpg"
            alt="Profile picture of Júlio Maló"
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://raw.githubusercontent.com/JM936/juliolab/main/Imagens/Profile.jpg';
            }}
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold mb-2 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
          Júlio Maló
        </h1>
        <h2 className="text-lg md:text-xl lg:text-[1.6rem] font-medium mb-5 text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] leading-snug">
          {t('job_title')}
        </h2>

        <div className="flex justify-center flex-wrap gap-6 mt-6">
          <div className="flex items-center gap-2 text-[1.1rem] bg-white/15 py-2 px-5 rounded-[30px] backdrop-blur-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 hover:scale-[1.02]">
            <i className="fas fa-map-marker-alt text-white"></i>
            <span>Luanda, Angola</span>
          </div>
          <div className="flex items-center gap-2 text-[1.1rem] bg-white/15 py-2 px-5 rounded-[30px] backdrop-blur-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 hover:scale-[1.02]">
            <i className="fas fa-envelope text-white"></i>
            <a href={`mailto:${getDecodedEmail()}`} className="text-white no-underline">
              {getDecodedEmail()}
            </a>
          </div>
          <div className="flex items-center gap-2 text-[1.1rem] bg-white/15 py-2 px-5 rounded-[30px] backdrop-blur-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 hover:scale-[1.02]">
            <i className="fas fa-phone text-white"></i>
            <span>{getDecodedPhone()}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
