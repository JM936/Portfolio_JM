import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 15 }}
          onClick={scrollToTop}
          className="fixed bottom-[84px] right-6 sm:bottom-[90px] sm:right-6 z-40 border border-white/10 outline-none bg-slate-800/90 backdrop-blur-md text-white cursor-pointer rounded-full shadow-lg text-base transition-all hover:bg-primary hover:-translate-y-1 hover:scale-105 hover:shadow-xl flex items-center justify-center w-11 h-11 focus-visible:ring-2 focus-visible:ring-primary"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <i className="fas fa-arrow-up" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
