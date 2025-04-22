
import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding stars-bg py-24">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          O Que É O Portal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 border-2 border-portal-gold rounded-full flex items-center justify-center animate-slow-spin">
                <div className="w-48 h-48 md:w-60 md:h-60 border border-portal-gold/60 rounded-full">
                  <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 border border-portal-gold/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif text-portal-gold mb-6">O Portal é mais que um curso.</h3>
            <p className="text-lg mb-4 text-portal-goldLight/90">
              É uma travessia espiritual guiada por 7 leis herméticas, práticas ancestrais e sabedorias eternas.
            </p>
            <p className="text-lg mb-4 text-portal-goldLight/90">
              Inspirado nos ensinamentos do Caibalion, na Cabala e nos mistérios do Egito e da Grécia, este caminho te reconecta com a tua origem divina.
            </p>

            <div className="flex flex-wrap mt-8 gap-6">
              <div className="flex items-center">
                <div className="mr-3 text-3xl">🧿</div>
                <span className="text-portal-gold">Símbolo de Kether</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-3xl">⚖️</div>
                <span className="text-portal-gold">Balança grega</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-3xl">🌟</div>
                <span className="text-portal-gold">7 leis do Caibalion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
