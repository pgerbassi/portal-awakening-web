
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Ao atravessar O Portal, compreendi meu papel no universo.",
    name: "Carlos Mendes",
    age: 42,
    profession: "Empresário"
  },
  {
    quote: "Despertei um poder interior que sempre esteve aqui.",
    name: "Mariana Silva",
    age: 37,
    profession: "Psicóloga"
  },
  {
    quote: "O Portal desvendou os mistérios que sempre busquei compreender.",
    name: "Pedro Almeida",
    age: 29,
    profession: "Engenheiro"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-portal-black stars-bg">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Experiências de Transformação
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <div className="mb-4 text-center">
                <span className="text-4xl text-portal-gold">"</span>
              </div>
              <p className="text-portal-goldLight/90 text-center mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="mt-auto">
                <div className="w-12 h-12 rounded-full bg-portal-gold/40 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-portal-black text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <p className="text-portal-gold font-serif text-center">{testimonial.name}, {testimonial.age}</p>
                <p className="text-portal-goldLight/70 text-sm text-center">{testimonial.profession}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
