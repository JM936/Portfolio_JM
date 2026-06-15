import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../data/translations';

interface CertificationsProps {
  currentLanguage: Language;
}

export const Certifications: React.FC<CertificationsProps> = ({ currentLanguage }) => {
  const { t } = useTranslation(currentLanguage);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      id: 1,
      titleKey: 'metrology' as const,
      institution: 'IPETEC - Instituto de Pesquisa Educação e Tecnologia',
      dateKey: 'issued_mar' as const,
      descKey: 'metrology_desc' as const,
      skillsKey: 'metrology_skills' as const,
      imageUrl: '/certificados/imagens/Julio Malo Certificado de Metrologia.png',
    },
    {
      id: 2,
      titleKey: 'metrology_basic' as const,
      institution: 'ENAP - Escola Nacional de Administração Pública',
      dateKey: 'issued_aug' as const,
      descKey: 'metrology_basic_desc' as const,
      skillsKey: 'metrology_basic_skills' as const,
      imageUrl: '/certificados/imagens/metrologia_basica_turma_set2024_certificado.png',
    },
    {
      id: 3,
      titleKey: 'soil_mechanics' as const,
      institution: 'GINEAO - Instituto Nacional de Ensino a Distancia',
      dateKey: 'issued_jul' as const,
      descKey: 'soil_mechanics_desc' as const,
      skillsKey: 'soil_mechanics_skills' as const,
      imageUrl: '/certificados/imagens/certificado Julio -mecanica-dos-solos.png',
    },
    {
      id: 4,
      titleKey: 'asphalt_mixes' as const,
      subTitleKey: 'asphalt_title' as const,
      institution: 'GINEAD - Instituto Nacional de Ensino a Distancia',
      dateKey: 'issued_aug' as const,
      descKey: 'asphalt_desc' as const,
      skillsKey: 'asphalt_skills' as const,
      imageUrl: '/certificados/imagens/misturas_asfalticas_conceituacao_materiais_e_dosagem_turma_ago2024_certificado_2.png',
    },
    {
      id: 5,
      titleKey: 'pathologies_title' as const,
      subTitleKey: 'concrete_pathologies' as const,
      institution: 'GINEAD - Instituto Nacional de Ensino a Distancia',
      dateKey: 'issued_aug' as const,
      descKey: 'pathologies_desc' as const,
      skillsKey: 'pathologies_skills' as const,
      imageUrl: '/certificados/imagens/conceitos_essenciais_sobre_patologias_em_estruturas_de_concreto_turma_set2024_certificado.png',
    },
    {
      id: 6,
      titleKey: 'construction_material' as const,
      institution: 'GINEAD - Instituto Nacional de Ensino a Distancia',
      dateKey: 'issued_jun' as const,
      descKey: 'construction_material_desc' as const,
      skillsKey: 'construction_material_skills' as const,
      imageUrl: '/certificados/imagens/certificado Julio materiais-de-construcao.png',
    },
    {
      id: 7,
      titleKey: 'geotechnical_description' as const,
      institution: 'SINGEO MG-CREA',
      dateKey: 'issued_dez' as const,
      descKey: 'geotechnical_description_desc' as const,
      skillsKey: 'geotechnical_description_skills' as const,
      imageUrl: '/certificados/imagens/certificado Geotécnia .png',
    },
    {
      id: 8,
      titleKey: 'mining_borehole_description' as const,
      institution: 'SINGEO MG-CREA',
      dateKey: 'issued_nov' as const,
      descKey: 'mining_borehole_desc' as const,
      skillsKey: 'mining_borehole_skills' as const,
      imageUrl: '/certificados/imagens/Certificado Julio Maló_descricao de testemunho na mineração, .png',
    },
    {
      id: 9,
      titleKey: 'safety_certificate_title' as const,
      institution: 'Federal Institute of Education, Science and Technology of Rio Grande do Sul',
      dateString: '7 - 22 Dec 2025 (30 hours)',
      descKey: 'safety_certificate_desc' as const,
      skillsKey: 'safety_certificate_skills' as const,
      imageUrl: '/certificados/imagens/Seguranca_do_Trabalho_riscos_ambientais_e_prevencão_de_acidentes-Certificado_digital_3436153.png',
    },
    {
      id: 10,
      titleKey: 'concrete_control_certificate_title' as const,
      institution: 'Federal Institute of Education, Science and Technology of São Paulo',
      dateString: '7 - 22 Dec 2025 (20 hours)',
      descKey: 'concrete_control_certificate_desc' as const,
      skillsKey: 'concrete_control_certificate_skills' as const,
      imageUrl: '/certificados/imagens/Introducão_ao_Controle_Tecnologico_Aplicado_à_Usinas_de_Concreto-Certificado_digital_3436159.png',
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
              className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col border border-black/5"
            >
              {/* Imagem de certificado desfocada no fundo */}
              {cert.imageUrl && (
                <img 
                  src={cert.imageUrl}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full opacity-[0.18] blur-[3px] pointer-events-none select-none z-0 object-cover"
                />
              )}

              {/* Overlay suave para legibilidade e efeito glassmorphism */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[0.5px] z-0 pointer-events-none" />

              <div className="bg-gradient-to-r from-primary to-secondary p-5 font-semibold relative z-10">
                <h3 className="!text-white text-lg md:text-xl font-bold">{t(cert.titleKey)}</h3>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
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
                {cert.imageUrl && (
                  <div className="mb-6">
                    <button
                      onClick={() => setSelectedImage(cert.imageUrl)}
                      className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-sm transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                    >
                      <i className="fas fa-eye text-primary text-lg animate-pulse"></i>
                      <span>{t('view_certificate')}</span>
                    </button>
                  </div>
                )}
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

      {/* Lightbox Modal para Visualização Segura */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md cursor-zoom-out"
          >
            {/* Botão de fechar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 bg-black/50 hover:bg-accent hover:scale-105 border border-white/10 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl focus:outline-none transition-all duration-200 cursor-pointer z-[10000] shadow-lg"
              aria-label="Fechar"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Container da imagem com proteção */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar na imagem
              className="relative max-w-[90%] max-h-[85vh] rounded-lg shadow-2xl overflow-hidden border border-white/10"
            >
              {/* Máscara invisível transparente por cima para evitar clique direito e salvar */}
              <div 
                className="absolute inset-0 z-10 w-full h-full bg-transparent select-none pointer-events-auto"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
              
              <img
                src={selectedImage}
                alt="Certificado"
                className="max-w-full max-h-[85vh] object-contain block rounded-lg select-none pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
