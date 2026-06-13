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
      skills: [
        { name: 'Proctor', icon: 'fas fa-vials' },
        { nameKey: 'granulometry' as const, icon: 'fas fa-ruler-combined' },
        { nameKey: 'attenberg' as const, icon: 'fas fa-globe-americas' },
        { name: 'CBR', icon: 'fas fa-road' },
        { nameKey: 'max_density' as const, icon: 'fas fa-weight' },
        { nameKey: 'geotech_char' as const, icon: 'fas fa-mountain' },
      ],
    },
    {
      id: 'concrete',
      titleKey: 'concrete_control' as const,
      icon: 'fas fa-hard-hat',
      skills: [
        { name: 'Slump Test', icon: 'fas fa-mortar-pestle' },
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
      skills: [
        { name: 'Marshall', icon: 'fas fa-fire' },
        { nameKey: 'max_density_dmt' as const, icon: 'fas fa-balance-scale' },
        { nameKey: 'binder_content' as const, icon: 'fas fa-oil-can' },
        { nameKey: 'void_density' as const, icon: 'fas fa-circle-notch' },
        { name: 'Baridades', icon: 'fas fa-gas-pump' },
      ],
    },
    {
      id: 'tools',
      titleKey: 'technical_tools' as const,
      icon: 'fas fa-laptop-code',
      skills: [
        { nameKey: 'advanced_excel' as const, icon: 'fas fa-file-excel' },
        { name: 'Macros Excel', icon: 'fas fa-code' },
        { nameKey: 'dynamic_sheets' as const, icon: 'fas fa-table' },
        { name: 'Go-Lab (Advanced)', icon: 'fas fa-microscope' },
        { nameKey: 'data_analysis' as const, icon: 'fas fa-chart-pie' },
        { name: 'Microsoft Office', icon: 'fas fa-file-alt' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative bg-gradient-to-r from-blue-500 via-primary to-secondary text-white py-10 px-5 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)] relative z-10 inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-[5px] after:bg-accent after:rounded-full after:transition-all after:duration-400">
            {t('skills_title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-primary"
            >
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <i className={`${category.icon}`} />
                <span>{t(category.titleKey)}</span>
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md cursor-default"
                  >
                    <i className={`${skill.icon} text-base`} />
                    <span>{'name' in skill ? skill.name : t(skill.nameKey)}</span>
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
