
import React from 'react';
import { motion } from 'framer-motion';

const bonuses = [
  "PDF exclusivo 'As 7 Chaves do Hermetismo'",
  "Meditações guiadas com frequência 432Hz",
  "Comunidade fechada no Telegram"
];

export const OfferSection = () => {
  return (
    <section id="oferta" className="section-padding bg-portal-black stars-bg py-24">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Acesso ao Portal
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm border border-portal-gold rounded-lg p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
              <div className="text-center md:text-right">
                <span className="text-portal-goldLight/70 text-lg line-through">De R$ 497</span>
              </div>
              <div className="text-center">
                <span className="text-3xl md:text-4xl text-portal-gold font-serif">Por R$ 297</span>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl text-portal-gold font-serif text-center mb-6">Bônus Especiais</h3>
              <ul className="space-y-4">
                {bonuses.map((bonus, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="text-portal-gold mr-3">✧</span>
                    <span className="text-portal-goldLight">{bonus}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <motion.a 
                href="#iniciar"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)" }}
                className="gold-button inline-block"
              >
                Quero Entrar No Portal
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
