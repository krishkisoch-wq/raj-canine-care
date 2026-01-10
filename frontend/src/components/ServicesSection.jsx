import React from 'react';
import { Stethoscope, Syringe, Shield, Activity, FileText, Apple } from 'lucide-react';
import { servicesData } from '../data/mock';

const iconMap = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  shield: Shield,
  activity: Activity,
  'file-text': FileText,
  apple: Apple
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Veterinary Services
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Comprehensive healthcare services for your beloved pets
            </p>
            
            {/* Services Photo Area */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex flex-col items-center justify-center shadow-lg border-4 border-dashed border-blue-200">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow">
                    <span className="text-3xl">💉</span>
                  </div>
                  <p className="text-gray-600 font-bold mb-1">Veterinary Services Photo Area</p>
                  <p className="text-gray-500 text-sm">Add photos of consultation, vaccination, or treatment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};