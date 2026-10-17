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
    <header className="relative bg-gradient-to-br from-[#00438a] via-primary to-[#1a2b49] text-white pt-12 pb-16 px-4 overflow-hidden rounded-b-[40px] md:rounded-b-[56px] shadow-lg mb-8">
      {/* Efeito de iluminação ambiente sutil */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(255,255,255,0.25) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10 text-center">
        {/* Badge de Especialidade e Status */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs sm:text-sm font-medium mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Controle Tecnológico & Geotecnia • Luanda, Angola</span>
        </div>

        {/* Avatar com moldura dupla refinada */}
        <div className="w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] rounded-full ring-4 ring-white/30 p-1 mx-auto mb-6 bg-white/10 backdrop-blur-md overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img
              src="/Imagens/Profile.webp"
              alt="Foto de perfil de Júlio Maló"
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/Imagens/Profile.jpg';
              }}
            />
          </div>
        </div>

        {/* Título e Cargo */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold mb-3 text-white tracking-tight drop-shadow-md">
          Júlio Maló
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] font-medium text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-sm mb-6">
          {t('job_title')}
        </h2>

        {/* Pílulas de Contato com Glassmorphism */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mt-6">
          <div className="flex items-center gap-2.5 text-sm sm:text-base bg-white/10 hover:bg-white/20 border border-white/15 py-2.5 px-5 rounded-full backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-0.5">
            <i className="fas fa-map-marker-alt text-amber-300" />
            <span className="font-medium">Luanda, Angola</span>
          </div>

          <div className="flex items-center gap-2.5 text-sm sm:text-base bg-white/10 hover:bg-white/20 border border-white/15 py-2.5 px-5 rounded-full backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-0.5">
            <i className="fas fa-envelope text-sky-300" />
            <a 
              href={`mailto:${getDecodedEmail()}`} 
              className="text-white no-underline font-medium hover:underline focus-visible:ring-1 focus-visible:ring-white rounded"
            >
              {getDecodedEmail()}
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-sm sm:text-base bg-white/10 hover:bg-white/20 border border-white/15 py-2.5 px-5 rounded-full backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-0.5">
            <i className="fas fa-phone text-emerald-300" />
            <span className="font-medium">{getDecodedPhone()}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
