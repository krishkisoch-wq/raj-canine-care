import React from 'react';
import { Shield, Star } from 'lucide-react';

export const FeaturesSlider = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 animate-marquee">
          {/* European Vaccines */}
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full whitespace-nowrap">
            <Shield className="w-6 h-6 text-yellow-400" />
            <span className="text-white font-semibold text-lg">European Imported Vaccines</span>
            <span className="text-yellow-400">✨</span>
          </div>

          {/* Google Reviews */}
          <a
            href="https://g.page/r/CbFfBoMMYIaSSBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full whitespace-nowrap hover:bg-white/20 transition-all duration-300"
          >
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-semibold text-lg">Check Our Google Reviews</span>
            <span className="text-yellow-400">⭐</span>
          </a>

          {/* 10000+ Pets */}
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full whitespace-nowrap">
            <span className="text-yellow-400 text-2xl">🐾</span>
            <span className="text-white font-semibold text-lg">10,000+ Happy Pets Served</span>
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full whitespace-nowrap">
            <Shield className="w-6 h-6 text-yellow-400" />
            <span className="text-white font-semibold text-lg">European Imported Vaccines</span>
            <span className="text-yellow-400">✨</span>
          </div>

          <a
            href="https://g.page/r/CbFfBoMMYIaSSBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full whitespace-nowrap hover:bg-white/20 transition-all duration-300"
          >
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-semibold text-lg">Check Our Google Reviews</span>
            <span className="text-yellow-400">⭐</span>
          </a>

          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full whitespace-nowrap">
            <span className="text-yellow-400 text-2xl">🐾</span>
            <span className="text-white font-semibold text-lg">10,000+ Happy Pets Served</span>
          </div>
        </div>
      </div>
    </section>
  );
};
