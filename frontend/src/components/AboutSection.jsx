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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed text-center">
              At <span className="font-bold text-blue-900">Raj Canine Care</span>, we believe pets are family. 🐾
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-center">
              Our clinic is dedicated to providing ethical, transparent, and compassionate care for dogs and cats.
            </p>

            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 mb-6 text-center shadow-lg">
              <p className="text-blue-900 font-bold text-3xl mb-2">10,000+ Pets! 🎉</p>
              <p className="text-blue-800">Over two decades of dedicated pet care in Vadodara</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Meet Dr. R. D. Patel</h3>
              <p className="text-sm text-gray-600 mb-2">(B.V.Sc. & A.H.)</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                With over two decades of experience, Dr. R.D. Patel is a pioneer in small animal veterinary care and dog grooming in Gujarat. 
                After earning his degree from Gujarat Agricultural University, Anand in 1986, he gained international exposure 
                in London (1991-95), bringing advanced pet care techniques to Vadodara.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Former President of Vadodara Veterinary Association, Dr. Patel has been serving the pet community 
                with dedication and excellence, making Raj Canine Care a trusted name in pet healthcare.
              </p>
            </div>

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

            <p className="text-lg text-gray-600 leading-relaxed text-center">
              Whether it's a routine check-up or grooming session,{' '}
              <span className="font-semibold text-blue-900">your pet's comfort comes first. 🐾</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};