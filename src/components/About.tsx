import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';

interface AboutProps {
  currentLanguage: Language;
}

export const About: React.FC<AboutProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative bg-gradient-to-r from-blue-500 via-primary to-secondary text-white py-10 px-5 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)] relative z-10 inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-[5px] after:bg-accent after:rounded-full after:transition-all after:duration-400">
            {t('about_title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden border-l-8 border-primary"
        >
          <p className="text-base md:text-lg mb-5 leading-relaxed text-dark">
            {t('about_p1')}
          </p>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary p-5 rounded-r-lg my-6 shadow-sm">
            <p className="text-base md:text-lg leading-relaxed text-dark">
              {t('about_p2')}
            </p>
          </div>

          <p className="text-base md:text-lg mb-5 leading-relaxed text-dark">
            {t('about_p3')}
          </p>

          <div className="text-center mt-8">
            <a
              href="https://www.linkedin.com/in/juliomalo-geotecnia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-accent text-white py-3 px-6 rounded-[30px] no-underline font-semibold text-base shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
            >
              <i className="fab fa-linkedin-in mr-2"></i>
              <span>{t('linkedin_cta')}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
