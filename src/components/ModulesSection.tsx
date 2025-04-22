
import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  {
    title: "Mentalismo",
    description: "Tudo é mente",
    icon: "⦿"
  },
  {
    title: "Correspondência",
    description: "O que está em cima é como o que está embaixo",
    icon: "⦿"
  },
  {
    title: "Vibração",
    description: "Tudo vibra",
    icon: "⦿"
  },
  {
    title: "Polaridade",
    description: "Tudo é duplo",
    icon: "⦿"
  },
  {
    title: "Ritmo",
    description: "Tudo flui e reflui",
    icon: "⦿"
  },
  {
    title: "Causa e Efeito",
    description: "Nada acontece por acaso",
    icon: "⦿"
  },
  {
    title: "Gênero",
    description: "Tudo tem princípio masculino e feminino",
    icon: "⦿"
  }
];

export const ModulesSection = () => {
  return (
    <section id="modulos" className="section-padding bg-portal-black stars-bg">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Os 7 Portais
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="module-card"
            >
              <div className="bg-portal-gold/10 h-32 mb-4 rounded flex items-center justify-center">
                <span className="text-5xl text-portal-gold">{module.icon}</span>
              </div>
              <h3 className="text-xl text-portal-gold font-serif text-center mb-2">{module.title}</h3>
              <p className="text-portal-goldLight/80 text-center">{module.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
