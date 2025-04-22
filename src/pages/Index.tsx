
import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { ModulesSection } from '../components/ModulesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { OfferSection } from '../components/OfferSection';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';

// Importação do Framer Motion
import { MotionConfig } from 'framer-motion';

const Index = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="overflow-x-hidden">
        <Hero />
        <AboutSection />
        <BenefitsSection />
        <ModulesSection />
        <TestimonialsSection />
        <OfferSection />
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
};

export default Index;
