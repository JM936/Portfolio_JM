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
      icon: 'fas fa-business-time',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      id: 2,
      value: t('metric_samples'),
      label: t('metric_samples_desc'),
      icon: 'fas fa-vial',
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      id: 3,
      value: t('metric_concrete'),
      label: t('metric_concrete_desc'),
      icon: 'fas fa-cubes',
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      id: 4,
      value: t('metric_roads'),
      label: t('metric_roads_desc'),
      icon: 'fas fa-road',
      color: 'text-amber-600 bg-amber-50'
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
      images: [
        { src: '/Imagens/projetos/camama.webp', alt: 'Ensaio de extração de testemunhos in situ na Estrada Camama/Viana' },
        { src: '/Imagens/projetos/camama2.webp', alt: 'Compactação de subleito e sub-base na Estrada Camama/Viana' }
      ],
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
      images: [
        { src: '/Imagens/projetos/solar.webp', alt: 'Vista aérea do parque fotovoltaico de grande escala em Angola' }
      ],
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
      images: [
        { src: '/Imagens/projetos/ruas-luanda.webp', alt: 'Armadura e concretagem de drenagem urbana nas Ruas de Luanda' }
      ],
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
      images: [
        { src: '/Imagens/Omata.webp', alt: 'Equipamentos e execução de obras na Estrada Nacional N:230' }
      ],
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
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-3">
            Obras & Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t('projects_title')}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            {t('projects_subtitle')}
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Faixa Bento Grid com Métricas de Impacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-50/70 border border-slate-200/70 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 mx-auto mb-3.5 rounded-2xl flex items-center justify-center text-xl ${metric.color}`}>
                <i className={metric.icon} />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">
                {metric.value}
              </div>
              <div className="text-slate-600 text-xs sm:text-sm font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid de Projetos Reais com Fotos de Campo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-200/80 group"
            >
              {/* Showcase de Imagem Real com Overlay de Gradiente */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-900">
                {project.images.length > 1 ? (
                  /* Grid Duplo para projetos com 2 fotos (ex: Camama/Viana) */
                  <div className="grid grid-cols-2 h-full w-full">
                    {project.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="relative h-full w-full overflow-hidden border-r border-black/20 last:border-none">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Foto única panorâmica */
                  <img
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Overlay de gradiente escuro na base para legibilidade perfeita */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Badges no Topo */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none z-10">
                  <span className="bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                    {t(project.tagKey)}
                  </span>
                  <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {project.period}
                  </span>
                </div>

                {/* Título e Empresa Sobrepostos na Base da Foto */}
                <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-lg flex-shrink-0">
                    <i className={project.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-sm m-0">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-xs text-white/80 font-medium m-0">
                      {t(project.companyKey)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Corpo do Card com Descrição e Bullets Técnicos */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {t(project.descKey)}
                </p>

                {/* Bullets técnicos */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    {t('competences')}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 m-0 p-0 list-none">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <i className="fas fa-check-circle text-primary text-xs mt-1 flex-shrink-0" />
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
