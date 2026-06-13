import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';

interface NavbarProps {
  currentLanguage: Language;
}

const navItems = [
  { id: 'about', labelKey: 'menu_about' as const },
  { id: 'experience', labelKey: 'menu_experience' as const },
  { id: 'skills', labelKey: 'menu_skills' as const },
  { id: 'certifications', labelKey: 'menu_certifications' as const },
  { id: 'contact', labelKey: 'menu_contact' as const },
];

export const Navbar: React.FC<NavbarProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);
  const [activeSection, setActiveSection] = useState<string>('about');


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset ajustado para cabeçalho fixo/sticky

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70; // Desconto para a navbar fixa
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[100] rounded-b-2xl">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-center">
        <ul className="flex list-none flex-wrap justify-center m-0 p-0">
          {navItems.map((item) => (
            <li key={item.id} className="py-4 px-4 md:py-5 md:px-6">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`text-dark no-underline font-semibold text-base md:text-lg relative pb-1 transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 ${
                  activeSection === item.id
                    ? 'text-primary after:w-full'
                    : 'hover:text-primary after:w-0 hover:after:w-full'
                }`}
              >
                {t(item.labelKey)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
