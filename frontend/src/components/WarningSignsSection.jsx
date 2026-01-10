import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { contactInfo } from '../data/mock';

export const WarningSignsSection = () => {
  const warningSigns = [
    "Behaviour changes: lethargy, lack of energy or playfulness",
    "Changes in eating habits: excessive weight gain or loss",
    "Changes in water intake and urination",
    "Changes in defecation: frequent, bloody, uncontrolled, constipation",
    "Vomiting: especially if bloody or with weakness, pain or fever",
    "Eye abnormalities: redness, excessive tearing, mucus discharge",
    "Pain and limping: difficulty in getting up, lying down or walking",
    "Coughing: prolonged coughing and sneezing, nasal discharge",
    "Ear abnormalities: foul odor, excessive wax, unusual discharge",
    "Fever: temperature over 102.5°F",
    "Skin abnormalities: hair loss, baldness, open sores, pustules",
    "Bleeding or discharge from any body part",
    "Changes in respiration: difficult or shallow breathing",
    "Convulsions: stiffening, jerking of legs, facial twitching",
    "Dazed expression or loss of consciousness"
  ];

  const handleCall = () => {
    window.location.href = `tel:${contactInfo.phones[0]}`;
  };

  return (
    <section id="warning-signs" className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
              <span className="text-red-800 font-medium text-sm">⚠️ Important Pet Health Information</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              15 Warning Signs to Call Us/Vet 🐾
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Call your veterinarian immediately if any of the following develops in your pet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {warningSigns.map((sign, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border-l-4 border-yellow-400"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{sign}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                  <AlertTriangle className="w-8 h-8" />
                  <h3 className="text-3xl font-bold">Emergency? Call Us Now!</h3>
                </div>
                <p className="text-red-100 text-lg mb-4">
                  When you take your pet to the veterinarian, be prepared to give an accurate account 
                  of the symptoms, timing, and any important observations.
                </p>
                <p className="text-red-100 font-semibold">
                  More information helps us diagnose and treat your pet better! 🐾
                </p>
              </div>
              <Button
                onClick={handleCall}
                size="lg"
                className="bg-white text-red-600 hover:bg-yellow-400 hover:text-blue-900 px-8 py-6 text-lg font-bold whitespace-nowrap shadow-xl"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call Immediately
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
