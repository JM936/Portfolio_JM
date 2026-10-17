import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';

interface AboutProps {
  currentLanguage: Language;
}

export const About: React.FC<AboutProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  const highlights = [
    {
      icon: 'fas fa-clipboard-check',
      title: 'QA/QC Rigoroso',
      desc: 'Prevenção de não conformidades com rastreabilidade total'
    },
    {
      icon: 'fas fa-award',
      title: 'Normas Internacionais',
      desc: 'ASTM, AASHTO, NP EN, LNEC e ABNT NBR'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Análise de Dados',
      desc: 'Excel Avançado, ensaios laboratoriais e Go-Lab'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Título de Seção Moderno com Padrão UI/UX Pro Max */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-3">
            Perfil Profissional
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t('about_title')}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Card Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-slate-200/80 relative overflow-hidden"
        >
          {/* Barra decorativa lateral suave */}
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-primary to-secondary" />

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
            {t('about_p1')}
          </p>

          {/* Destaque Executivo com Fundo Suave */}
          <div className="bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border-l-4 border-primary p-6 rounded-r-2xl my-8 shadow-sm">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium m-0">
              {t('about_p2')}
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            {t('about_p3')}
          </p>

          {/* Grid de Destaques Rápidos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 pt-4 border-t border-slate-100">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg flex-shrink-0">
                  <i className={item.icon} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-600 m-0 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA LinkedIn */}
          <div className="text-center pt-2">
            <a
              href="https://www.linkedin.com/in/juliomalo-geotecnia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary hover:bg-[#004494] text-white py-3.5 px-8 rounded-full font-semibold text-base shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline"
            >
              <i className="fab fa-linkedin-in text-lg" />
              <span>{t('linkedin_cta')}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
