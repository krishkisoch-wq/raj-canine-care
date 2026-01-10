import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { contactInfo } from '../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold">RC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Raj Canine Care</h3>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Complete care for dogs and cats. Compassionate veterinary care, professional grooming, and premium pet products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('grooming')}
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  Grooming
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>Veterinary OPD</li>
              <li>Vaccination Programs</li>
              <li>Professional Grooming</li>
              <li>Pet Nutrition</li>
              <li>Pet Accessories</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <p className="text-sm text-blue-200">{contactInfo.address}</p>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <div className="text-sm text-blue-200">
                  {contactInfo.phones.map((phone, index) => (
                    <p key={index}>{phone}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {currentYear} Raj Canine Care. All rights reserved. Made with care for pets.
          </p>
        </div>
      </div>
    </footer>
  );
};