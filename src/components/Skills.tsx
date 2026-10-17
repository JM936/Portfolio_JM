import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';

interface SkillsProps {
  currentLanguage: Language;
}

export const Skills: React.FC<SkillsProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  const categories = [
    {
      id: 'soil',
      titleKey: 'soil_tests' as const,
      icon: 'fas fa-flask',
      color: 'from-amber-600 to-amber-700',
      iconBg: 'bg-amber-50 text-amber-600',
      skills: [
        { name: 'Proctor (Normal/Modificado)', icon: 'fas fa-vials' },
        { nameKey: 'granulometry' as const, icon: 'fas fa-ruler-combined' },
        { nameKey: 'attenberg' as const, icon: 'fas fa-globe-americas' },
        { name: 'CBR (Índice de Suporte Califórnia)', icon: 'fas fa-road' },
        { nameKey: 'max_density' as const, icon: 'fas fa-weight' },
        { nameKey: 'geotech_char' as const, icon: 'fas fa-mountain' },
      ],
    },
    {
      id: 'concrete',
      titleKey: 'concrete_control' as const,
      icon: 'fas fa-hard-hat',
      color: 'from-blue-600 to-primary',
      iconBg: 'bg-blue-50 text-blue-600',
      skills: [
        { name: 'Slump Test (Abatimento)', icon: 'fas fa-mortar-pestle' },
        { nameKey: 'compression' as const, icon: 'fas fa-compress-arrows-alt' },
        { nameKey: 'reflection' as const, icon: 'fas fa-lightbulb' },
        { nameKey: 'concrete_analysis' as const, icon: 'fas fa-cube' },
        { nameKey: 'pathologies' as const, icon: 'fas fa-exclamation-triangle' },
      ],
    },
    {
      id: 'quality',
      titleKey: 'quality_management' as const,
      icon: 'fas fa-chart-line',
      color: 'from-emerald-600 to-emerald-700',
      iconBg: 'bg-emerald-50 text-emerald-600',
      skills: [
        { nameKey: 'audits' as const, icon: 'fas fa-clipboard-check' },
        { nameKey: 'compliance' as const, icon: 'fas fa-certificate' },
        { nameKey: 'quality_system' as const, icon: 'fas fa-cogs' },
        { nameKey: 'risk_mitigation' as const, icon: 'fas fa-shield-alt' },
        { nameKey: 'process_control' as const, icon: 'fas fa-project-diagram' },
      ],
    },
    {
      id: 'bituminous',
      titleKey: 'bituminous_tests' as const,
      icon: 'fas fa-road',
      color: 'from-slate-700 to-slate-800',
      iconBg: 'bg-slate-100 text-slate-700',
      skills: [
        { name: 'Marshall (Estabilidade & Fluência)', icon: 'fas fa-fire' },
        { nameKey: 'max_density_dmt' as const, icon: 'fas fa-balance-scale' },
        { nameKey: 'binder_content' as const, icon: 'fas fa-oil-can' },
        { nameKey: 'void_density' as const, icon: 'fas fa-circle-notch' },
        { name: 'Baridades e Granulometria Asfáltica', icon: 'fas fa-gas-pump' },
      ],
    },
    {
      id: 'tools',
      titleKey: 'technical_tools' as const,
      icon: 'fas fa-laptop-code',
      color: 'from-indigo-600 to-indigo-700',
      iconBg: 'bg-indigo-50 text-indigo-600',
      skills: [
        { nameKey: 'advanced_excel' as const, icon: 'fas fa-file-excel' },
        { name: 'Macros & Automação Excel', icon: 'fas fa-code' },
        { nameKey: 'dynamic_sheets' as const, icon: 'fas fa-table' },
        { name: 'Go-Lab (Controle Laboratorial)', icon: 'fas fa-microscope' },
        { nameKey: 'data_analysis' as const, icon: 'fas fa-chart-pie' },
        { name: 'Microsoft Office Corporativo', icon: 'fas fa-file-alt' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50/60 border-t border-slate-200/60">
      <div className="max-w-[1200px] mx-auto">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-3">
            Especialidades & Métodos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t('skills_title')}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Bento Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-lg ${category.iconBg}`}>
                    <i className={category.icon} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 m-0">
                    {t(category.titleKey)}
                  </h3>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2.5"
                >
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      className="inline-flex items-center gap-2 bg-slate-50 hover:bg-primary hover:text-white border border-slate-200/60 text-slate-700 px-3.5 py-1.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-200 cursor-default shadow-2xs hover:shadow-sm"
                    >
                      <i className={`${skill.icon} text-xs text-primary/80 group-hover:text-white`} />
                      <span>{'name' in skill ? skill.name : t(skill.nameKey)}</span>
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
