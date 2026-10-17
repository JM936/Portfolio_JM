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
      image: "/Imagens/MCa.webp",
      fallbackImage: "/Imagens/MCa.jpg",
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
      image: "/Imagens/Mota.webp",
      fallbackImage: "/Imagens/Mota.jpg",
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
      image: "/Imagens/Omata.webp",
      fallbackImage: "/Imagens/Omata.jpg",
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
      image: "/Imagens/Ode.webp",
      fallbackImage: "/Imagens/Ode.jpg",
      alt: "Image of Laboratory Technician at Odebrecht"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-[1200px] mx-auto">
        {/* Título com padrão UI/UX Pro Max */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-3">
            Carreira & Histórico
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t('experience_title')}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-[960px] mx-auto before:content-[''] before:absolute before:w-0.5 before:bg-slate-200 before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 md:before:left-8">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={exp.id} className="relative mb-14 last:mb-0 flex flex-col md:flex-row items-center w-full">
                {/* Marcador Luminoso da Timeline */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-4 border-primary z-10 md:left-5 flex items-center justify-center shadow-md">
                  {exp.hasPresent && (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  )}
                </div>

                {/* Conteúdo da linha do tempo */}
                <div className="w-full md:w-[calc(100%-4rem)] md:ml-16 flex flex-col md:grid md:grid-cols-2 md:gap-8 items-center">
                  
                  {/* Card de Texto */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className={`bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full ${
                      isEven ? 'order-1' : 'md:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-bold">
                        {exp.hasPresent && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
                        {exp.period}
                        {exp.hasPresent ? t('present') : ''}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                      {t(exp.titleKey)}
                    </h3>
                    <h4 className="text-sm sm:text-base font-semibold text-primary mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-slate-600 mb-5 text-sm sm:text-base leading-relaxed">
                      {t(exp.descKey)}
                    </p>
                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        {t('competences')}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed block">
                        {t(exp.skillsKey)}
                      </span>
                    </div>
                  </motion.div>

                  {/* Card de Imagem */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className={`w-full mt-4 md:mt-0 flex items-center justify-center ${
                      isEven ? 'order-2' : 'md:order-1'
                    }`}
                  >
                    <div className="w-full max-h-[380px] p-2 bg-white rounded-3xl border border-slate-200/80 shadow-sm flex items-center justify-center overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.alt}
                        loading="lazy"
                        className="max-w-full max-h-[340px] w-auto h-auto object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
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

        {/* Botão de contato rápido */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-[#004494] text-white py-3.5 px-8 rounded-full font-semibold text-base shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) {
                const yOffset = -80;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            <i className="fas fa-envelope mr-1" />
            <span>{t('contact_cta')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
