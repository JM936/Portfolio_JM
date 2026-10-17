import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';

interface NavbarProps {
  currentLanguage: Language;
}

const navItems = [
  { id: 'about', labelKey: 'menu_about' as const },
  { id: 'experience', labelKey: 'menu_experience' as const },
  { id: 'projects', labelKey: 'menu_projects' as const },
  { id: 'skills', labelKey: 'menu_skills' as const },
  { id: 'certifications', labelKey: 'menu_certifications' as const },
  { id: 'contact', labelKey: 'menu_contact' as const },
];

export const Navbar: React.FC<NavbarProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-slate-200/70 shadow-sm transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-center">
        <ul className="flex list-none flex-wrap justify-center items-center gap-1 sm:gap-2 m-0 py-2.5 px-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`inline-flex items-center justify-center min-h-[42px] px-3.5 sm:px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 no-underline cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-slate-600 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {t(item.labelKey)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
