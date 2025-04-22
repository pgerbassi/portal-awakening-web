
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEyeOpen(false);
      setTimeout(() => setIsEyeOpen(true), 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden stars-bg">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_rgba(0,0,0,0)_70%)]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="eye-of-horus mb-12 relative animate-pulse-gold"
      >
        <img 
          src="/lovable-uploads/5b40a7a0-4bf4-49cb-8b27-98eb90c379b7.png" 
          alt="Olho de Hórus" 
          className="w-48 h-auto md:w-64"
        />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl md:text-7xl font-serif font-bold text-portal-gold text-center tracking-wider uppercase mb-4 gold-text-shadow"
      >
        Atravesse<br />O Portal
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl md:text-2xl text-portal-goldLight text-center max-w-2xl mb-12"
      >
        Desperte sua consciência e transforme sua jornada interior
      </motion.p>

      <motion.a 
        href="#iniciar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)" }}
        className="gold-button"
      >
        Iniciar Despertar
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-8"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-portal-gold" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
