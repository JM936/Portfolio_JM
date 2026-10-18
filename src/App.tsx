import { useState, useEffect } from 'react'
import type { Language } from './data/translations'
import LanguageSelector from './components/LanguageSelector'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import { trackEvent } from './utils/analytics'

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'pt' || urlLang === 'en' || urlLang === 'fr') {
        return urlLang;
      }
      const saved = localStorage.getItem('preferred_language');
      if (saved === 'pt' || saved === 'en' || saved === 'fr') {
        return saved;
      }
    }
    return 'en';
  });

  useEffect(() => {
    // Sincroniza a tag html lang com o idioma corrente para fins de acessibilidade e SEO
    document.documentElement.lang = language;
  }, [language]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    trackEvent('change_language', { language: newLang });
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred_language', newLang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url.toString());
    }
  };

  return (
    <div className="min-h-screen bg-light flex flex-col font-body antialiased">
      <LanguageSelector currentLanguage={language} onLanguageChange={handleLanguageChange} />
      <Header currentLanguage={language} />
      <Navbar currentLanguage={language} />
      
      <main className="flex-grow">
        <About currentLanguage={language} />
        <Experience currentLanguage={language} />
        <Projects currentLanguage={language} />
        <Skills currentLanguage={language} />
        <Certifications currentLanguage={language} />
      </main>

      <Footer currentLanguage={language} />
      <ScrollToTop />
      <WhatsAppButton currentLanguage={language} />
    </div>
  )
}

export default App
