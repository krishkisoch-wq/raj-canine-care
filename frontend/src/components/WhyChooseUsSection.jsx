import React from 'react';
import { Building, Sparkles, Heart, Smile, Award } from 'lucide-react';
import { whyChooseUs } from '../data/mock';

const iconMap = {
  building: Building,
  sparkles: Sparkles,
  heart: Heart,
  smile: Smile,
  award: Award
};

export const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Why Choose Raj Canine Care?
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best care for your furry family members
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = iconMap[reason.icon];
              return (
                <div
                  key={reason.id}
                  className="relative bg-gradient-to-br from-blue-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-blue-900 font-bold text-lg">{index + 1}</span>
                  </div>

                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>

          {/* Additional CTA */}
          <div className="mt-16 text-center bg-blue-600 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to give your pet the best care?
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Visit us today or call for more information
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-200 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};