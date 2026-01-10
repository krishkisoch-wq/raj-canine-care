import React from 'react';
import { Heart, Shield, Home, Users } from 'lucide-react';

export const AboutSection = () => {
  const values = [
    { icon: Heart, text: 'Preventive healthcare' },
    { icon: Shield, text: 'Stress-free handling' },
    { icon: Home, text: 'Clean & modern facilities' },
    { icon: Users, text: 'Honest medical guidance' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="order-2 md:order-1">
              <div className="w-full h-[400px] bg-gradient-to-br from-yellow-100 to-blue-100 rounded-3xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <p className="text-gray-500 text-lg">About Image Placeholder</p>
                  <p className="text-gray-400 text-sm mt-2">Add clinic or team image here</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                At <span className="font-bold text-blue-900">Raj Canine Care</span>, we believe pets are family.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our clinic is dedicated to providing ethical, transparent, and compassionate care for dogs and cats.
              </p>

              <div className="space-y-4 mb-8">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{value.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Whether it's a routine check-up or grooming session,{' '}
                <span className="font-semibold text-blue-900">your pet's comfort comes first.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};