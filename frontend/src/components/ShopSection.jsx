import React from 'react';
import { Package, Candy, Link, Home, Scissors } from 'lucide-react';
import { shopCategories } from '../data/mock';

const iconMap = {
  package: Package,
  candy: Candy,
  link: Link,
  home: Home,
  scissors: Scissors
};

export const ShopSection = () => {
  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Pet Shop
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality food and accessories available at Raj Canine Care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopCategories.slice(0, 3).map((category) => {
              const IconComponent = iconMap[category.icon];
              return (
                <div
                  key={category.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {shopCategories.slice(3).map((category) => {
              const IconComponent = iconMap[category.icon];
              return (
                <div
                  key={category.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};