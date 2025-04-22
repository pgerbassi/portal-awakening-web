
import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  { 
    title: "Autoconhecimento profundo", 
    icon: "✧", 
    description: "Conecte-se com sua essência e desperte sua verdadeira identidade"
  },
  { 
    title: "Consciência universal", 
    icon: "✦", 
    description: "Expanda sua percepção para além dos limites da matéria"
  },
  { 
    title: "Poder de transmutação mental", 
    icon: "✧", 
    description: "Transforme pensamentos limitantes em força criadora"
  },
  { 
    title: "Alinhamento com os 4 planos", 
    icon: "✦", 
    description: "Harmonize os planos físico, mental, espiritual e divino"
  },
  { 
    title: "Silêncio interior", 
    icon: "✧", 
    description: "Cultive a paz e a clareza em meio ao caos do mundo"
  }
];

export const BenefitsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="beneficios" className="section-padding bg-portal-black stars-bg">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          O Que Você Vai Despertar
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className="benefit-card"
            >
              <div className="text-5xl text-portal-gold mb-4 text-center">{benefit.icon}</div>
              <h3 className="text-xl text-portal-gold font-serif text-center mb-3">{benefit.title}</h3>
              <p className="text-portal-goldLight/80 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
