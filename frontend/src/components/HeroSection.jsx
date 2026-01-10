import React from 'react';
import { Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { contactInfo } from '../data/mock';

export const HeroSection = () => {
  const handleCall = () => {
    window.location.href = `tel:${contactInfo.phones[0]}`;
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Raj+Canine+Care+Vadodara', '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full mb-6">
            <span className="text-yellow-800 font-medium text-sm">🐾 Veterinary Clinic • Grooming Studio • Pet Shop 🐾</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Raj Canine Care
          </h1>
          <p className="text-2xl text-gray-700 mb-4 font-medium">
            Complete Care for Dogs & Cats 🐕 🐈
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Compassionate veterinary care, professional grooming, and premium pet products — all under one roof. Your pet's happiness is our priority! 🐾
          </p>

          {/* Stats Badge */}
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-sm font-medium mb-1">Proud to have served</p>
              <p className="text-4xl font-bold">10,000+ Pets 🐾</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button
              onClick={handleCall}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              onClick={handleDirections}
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50 px-8 py-6 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Contact Info
            </Button>
          </div>

          {/* Quick Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-xl shadow-md">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700 text-sm text-center">Experienced Veterinary Care</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-xl shadow-md">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700 text-sm text-center">Hygienic Grooming Studio</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-xl shadow-md">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700 text-sm text-center">Dog & Cat Specialization</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-xl shadow-md">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700 text-sm text-center">Quality Pet Food & Accessories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};