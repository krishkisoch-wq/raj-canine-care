import React from 'react';
import { Droplet, Scissors, Sparkles, Eye, Wind, Bug } from 'lucide-react';
import { groomingServices } from '../data/mock';

const iconMap = {
  droplet: Droplet,
  scissors: Scissors,
  sparkles: Sparkles,
  eye: Eye,
  wind: Wind,
  bug: Bug
};

export const GroomingSection = () => {
  return (
    <section id="grooming" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Professional Grooming Studio
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Complete grooming services in a calm and hygienic environment
            </p>
            
            {/* Grooming Photo Area */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="w-full h-64 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl flex flex-col items-center justify-center shadow-lg border-4 border-dashed border-yellow-200">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow">
                    <span className="text-3xl">✂️</span>
                  </div>
                  <p className="text-gray-600 font-bold mb-1">Grooming Studio Photo Area</p>
                  <p className="text-gray-500 text-sm">Add photos of grooming studio, bathing area, or groomed pets</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {groomingServices.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-yellow-900" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Features */}
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Our Grooming Studio?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <p className="font-semibold text-lg">Separate grooming area</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <p className="font-semibold text-lg">Pet-safe products</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <p className="font-semibold text-lg">Calm & hygienic environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Shield, Heart } from 'lucide-react';