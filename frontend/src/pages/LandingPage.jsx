import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { GroomingSection } from '../components/GroomingSection';
import { ShopSection } from '../components/ShopSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GroomingSection />
      <ShopSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;