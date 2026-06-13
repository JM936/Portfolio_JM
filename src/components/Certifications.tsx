import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';

interface CertificationsProps {
  currentLanguage: Language;
}

export const Certifications: React.FC<CertificationsProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  const certificates = [
    {
      id: 1,
      titleKey: 'metrology' as const,
      institution: 'IPETEC - Instituto de Pesquisa Educação e Tecnologia',
      dateKey: 'issued_mar' as const,
      descKey: 'metrology_desc' as const,
      skillsKey: 'metrology_skills' as const,
    },
    {
      id: 2,
      titleKey: 'soil_mechanics' as const,
      institution: 'GINEAO - Instituto Nacional de Ensino a Distancia',
      dateKey: 'issued_jul' as const,
      descKey: 'soil_mechanics_desc' as const,
      skillsKey: 'soil_mechanics_skills' as const,
    },
    {
      id: 3,
      titleKey: 'asphalt_mixes' as const,
      subTitleKey: 'asphalt_title' as const,
      dateKey: 'issued_aug' as const,
      descKey: 'asphalt_desc' as const,
      skillsKey: 'asphalt_skills' as const,
    },
    {
      id: 4,
      titleKey: 'pathologies_title' as const,
      subTitleKey: 'concrete_pathologies' as const,
      dateKey: 'issued_aug' as const,
      descKey: 'pathologies_desc' as const,
      skillsKey: 'pathologies_skills' as const,
    },
    {
      id: 5,
      titleKey: 'construction_material' as const,
      institution: 'GINEAD - Instituto Nacional de Ensino a Distancia',
      dateKey: 'issued_jun' as const,
      descKey: 'construction_material_desc' as const,
      skillsKey: 'construction_material_skills' as const,
    },
    {
      id: 6,
      titleKey: 'geotechnical_description' as const,
      institution: 'SINGEO MG-CREA',
      dateKey: 'issued_dez' as const,
      descKey: 'geotechnical_description_desc' as const,
      skillsKey: 'geotechnical_description_skills' as const,
    },
    {
      id: 7,
      titleKey: 'safety_certificate_title' as const,
      institution: 'Federal Institute of Education, Science and Technology of Rio Grande do Sul',
      dateString: '7 - 22 Dec 2025 (30 hours)',
      descKey: 'safety_certificate_desc' as const,
      skillsKey: 'safety_certificate_skills' as const,
    },
    {
      id: 8,
      titleKey: 'concrete_control_certificate_title' as const,
      institution: 'Federal Institute of Education, Science and Technology of São Paulo',
      dateString: '7 - 22 Dec 2025 (20 hours)',
      descKey: 'concrete_control_certificate_desc' as const,
      skillsKey: 'concrete_control_certificate_skills' as const,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-[#f0f4f8]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative bg-gradient-to-r from-blue-500 via-primary to-secondary text-white py-10 px-5 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)] relative z-10 inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-[5px] after:bg-accent after:rounded-full after:transition-all after:duration-400">
            {t('certifications_title')}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col border border-black/5"
            >
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-5 font-semibold text-lg md:text-xl">
                <h3>{t(cert.titleKey)}</h3>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {cert.institution && (
                  <h4 className="text-secondary font-semibold text-base md:text-lg mb-3">
                    {cert.institution}
                  </h4>
                )}
                {cert.subTitleKey && (
                  <h4 className="text-secondary font-semibold text-base md:text-lg mb-3">
                    {t(cert.subTitleKey)}
                  </h4>
                )}
                <div className="flex items-center gap-2 text-grayCustom text-sm mb-4">
                  <i className="far fa-calendar-alt" />
                  <span>{cert.dateKey ? t(cert.dateKey) : cert.dateString}</span>
                </div>
                <p className="text-dark/80 text-sm mb-6 leading-relaxed flex-grow">
                  {t(cert.descKey)}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <h5 className="text-grayCustom font-bold text-xs uppercase tracking-wider mb-2">
                    {t('competences')}
                  </h5>
                  <p className="text-xs md:text-sm text-dark/95 leading-relaxed">
                    {t(cert.skillsKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
