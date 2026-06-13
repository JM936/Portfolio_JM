import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';

interface ExperienceProps {
  currentLanguage: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  const experiences = [
    {
      id: 1,
      period: "Apr 2024 - ",
      hasPresent: true,
      titleKey: "job1_title" as const,
      company: "MCA - Angola",
      descKey: "job1_desc" as const,
      skillsKey: "job1_skills" as const,
      image: "/Imagens/MCa.jpg",
      fallbackImage: "https://raw.githubusercontent.com/JM936/juliolab/main/Imagens/MCa.jpg",
      alt: "Image of Quality Control Laboratory Technician at MCA"
    },
    {
      id: 2,
      period: "Oct 2022 - Apr 2024",
      hasPresent: false,
      titleKey: "job2_title" as const,
      company: "Mota-Engil Angola - Luanda, Angola",
      descKey: "job2_desc" as const,
      skillsKey: "job2_skills" as const,
      image: "/Imagens/Mota.jpg",
      fallbackImage: "https://raw.githubusercontent.com/JM936/juliolab/main/Imagens/Mota.jpg",
      alt: "Image of Geotechnical Laboratory Technician at Mota-Engil"
    },
    {
      id: 3,
      period: "Aug 2019 - Aug 2022",
      hasPresent: false,
      titleKey: "job3_title" as const,
      company: "Omatapalo - Angola",
      descKey: "job3_desc" as const,
      skillsKey: "job3_skills" as const,
      image: "/Imagens/Omata.jpg",
      fallbackImage: "https://raw.githubusercontent.com/JM936/juliolab/main/Imagens/Omata.jpg",
      alt: "Image of Laboratory Technician at Omatapalo"
    },
    {
      id: 4,
      period: "2017 - 2019",
      hasPresent: false,
      titleKey: "job4_title" as const,
      company: "Odebrecht - Angola",
      descKey: "job4_desc" as const,
      skillsKey: "job4_skills" as const,
      image: "/Imagens/Ode.jpg",
      fallbackImage: "https://raw.githubusercontent.com/JM936/juliolab/main/Imagens/Ode.jpg",
      alt: "Image of Laboratory Technician at Odebrecht"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-[#f0f4f8]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative bg-gradient-to-r from-blue-500 via-primary to-secondary text-white py-10 px-5 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)] relative z-10 inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-[5px] after:bg-accent after:rounded-full after:transition-all after:duration-400">
            {t('experience_title')}
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-[900px] mx-auto before:content-[''] before:absolute before:w-1 before:bg-primary before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 md:before:left-8">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={exp.id} className="relative mb-16 last:mb-0 flex flex-col md:flex-row items-center w-full">
                {/* Timeline Circle */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10 md:left-5" />

                {/* Content side (Alternating left/right on desktop, always right of timeline on mobile) */}
                <div className="w-full md:w-[calc(100%-4rem)] md:ml-16 flex flex-col md:grid md:grid-cols-2 md:gap-8 items-center">
                  
                  {/* Text card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-black/5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 w-full ${
                      isEven ? 'order-1' : 'md:order-2'
                    }`}
                  >
                    <span className="inline-block bg-primary text-white text-xs px-3 py-1.5 rounded-full font-semibold mb-4 shadow-sm">
                      {exp.period}
                      {exp.hasPresent ? t('present') : ''}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
                      {t(exp.titleKey)}
                    </h3>
                    <h4 className="text-sm md:text-base font-semibold text-secondary mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-dark mb-4 text-xs md:text-sm leading-relaxed">
                      {t(exp.descKey)}
                    </p>
                    <p className="text-xs md:text-sm">
                      <strong className="text-secondary">{t('competences')} </strong>
                      <span className="text-dark/80">{t(exp.skillsKey)}</span>
                    </p>
                  </motion.div>

                  {/* Image card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className={`w-full mt-4 md:mt-0 ${
                      isEven ? 'order-2' : 'md:order-1'
                    }`}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-black/5 w-full aspect-[3/4] max-h-[450px] bg-white">
                      <img
                        src={exp.image}
                        alt={exp.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = exp.fallbackImage;
                        }}
                      />
                    </div>
                  </motion.div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-accent text-white py-3 px-6 rounded-[30px] no-underline font-semibold text-base shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) {
                const yOffset = -70;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            <i className="fas fa-envelope mr-2"></i>
            <span>{t('contact_cta')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
