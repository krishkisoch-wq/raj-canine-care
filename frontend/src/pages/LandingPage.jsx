import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSlider } from '../components/FeaturesSlider';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { GroomingSection } from '../components/GroomingSection';
import { ShopSection } from '../components/ShopSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { WarningSignsSection } from '../components/WarningSignsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSlider />
      <ServicesSection />
      <GroomingSection />
      <ShopSection />
      <WhyChooseUsSection />
      <WarningSignsSection />
      <ContactSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default LandingPage;