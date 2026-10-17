import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';

interface ProjectsProps {
  currentLanguage: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  const metrics = [
    {
      id: 1,
      value: t('metric_years'),
      label: t('metric_years_desc'),
      icon: 'fas fa-business-time'
    },
    {
      id: 2,
      value: t('metric_samples'),
      label: t('metric_samples_desc'),
      icon: 'fas fa-vial'
    },
    {
      id: 3,
      value: t('metric_concrete'),
      label: t('metric_concrete_desc'),
      icon: 'fas fa-cubes'
    },
    {
      id: 4,
      value: t('metric_roads'),
      label: t('metric_roads_desc'),
      icon: 'fas fa-road'
    }
  ];

  const projects = [
    {
      id: 1,
      titleKey: 'project1_title' as const,
      companyKey: 'project1_company' as const,
      descKey: 'project1_desc' as const,
      tagKey: 'project1_tag' as const,
      period: '2026 - Presente',
      icon: 'fas fa-road',
      accentColor: 'from-blue-600 to-primary',
      bullets: [
        'Controlo de subleito, sub-base e base',
        'Ensaios de compactação in situ (CBR/Proctor)',
        'Controlo tecnológico de revestimento asfáltico'
      ]
    },
    {
      id: 2,
      titleKey: 'project2_title' as const,
      companyKey: 'project2_company' as const,
      descKey: 'project2_desc' as const,
      tagKey: 'project2_tag' as const,
      period: '2024 - 2025',
      icon: 'fas fa-solar-panel',
      accentColor: 'from-amber-500 to-primary',
      bullets: [
        'Validação de aterro para bases solares',
        'Fundações e ensaios geotécnicos de estacas',
        'Garantia de conformidade com ISO 9001 e ASTM'
      ]
    },
    {
      id: 3,
      titleKey: 'project3_title' as const,
      companyKey: 'project3_company' as const,
      descKey: 'project3_desc' as const,
      tagKey: 'project3_tag' as const,
      period: '2022 - 2024',
      icon: 'fas fa-city',
      accentColor: 'from-primary to-secondary',
      bullets: [
        'Controlo de betão estrutural (≥ 35 MPa)',
        'Validação de valas e redes de drenagem urbana',
        'Inspeção de agregados e subleitos viários'
      ]
    },
    {
      id: 4,
      titleKey: 'project4_title' as const,
      companyKey: 'project4_company' as const,
      descKey: 'project4_desc' as const,
      tagKey: 'project4_tag' as const,
      period: '2019 - 2021',
      icon: 'fas fa-map-marked-alt',
      accentColor: 'from-emerald-600 to-secondary',
      bullets: [
        'Extensão de mais de 200 km de infraestrutura rodoviária',
        'Caracterização de materiais de empréstimo e solos',
        'Ensaios betuminosos e ligantes asfálticos'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative bg-gradient-to-r from-blue-500 via-primary to-secondary text-white py-10 px-5 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)] relative z-10 inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-[5px] after:bg-accent after:rounded-full after:transition-all after:duration-400">
            {t('projects_title')}
          </h2>
          <p className="mt-3 text-white/90 text-base md:text-lg max-w-2xl mx-auto">
            {t('projects_subtitle')}
          </p>
        </motion.div>

        {/* Faixa de Métricas de Impacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light rounded-2xl p-6 text-center border-b-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl">
                <i className={metric.icon}></i>
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-secondary mb-1">
                {metric.value}
              </div>
              <div className="text-grayCustom text-sm font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid de Projetos Reais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 group"
            >
              {/* Header do Card com Gradiente */}
              <div className={`bg-gradient-to-r ${project.accentColor} p-6 text-white relative`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {t(project.tagKey)}
                  </span>
                  <span className="text-xs font-medium text-white/90 bg-black/20 px-3 py-1 rounded-full">
                    {project.period}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-xl backdrop-blur-sm">
                    <i className={project.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-sm text-white/90 font-medium">
                      {t(project.companyKey)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Corpo do Card */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-dark/90 text-sm md:text-base leading-relaxed mb-5">
                  {t(project.descKey)}
                </p>

                {/* Bullets técnicos */}
                <div className="pt-4 border-t border-gray-200/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    {t('competences')}
                  </h4>
                  <ul className="space-y-2 text-sm text-dark/80 m-0 p-0 list-none">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <i className="fas fa-check-circle text-primary text-xs mt-1"></i>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
