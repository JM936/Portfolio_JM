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

function App() {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Sincroniza a tag html lang com o idioma corrente para fins de acessibilidade
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="min-h-screen bg-light flex flex-col font-body antialiased">
      <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
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
