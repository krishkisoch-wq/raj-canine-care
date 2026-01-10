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
  const brandImages = [
    "https://customer-assets.emergentagent.com/job_pawsomecare-4/artifacts/adti7jrt_WhatsApp%20Image%202026-01-07%20at%201.47.45%20AM.jpeg",
    "https://customer-assets.emergentagent.com/job_pawsomecare-4/artifacts/jo5fxfb0_WhatsApp%20Image%202026-01-07%20at%201.47.46%20AM.jpeg",
    "https://customer-assets.emergentagent.com/job_pawsomecare-4/artifacts/tcw6w7uj_WhatsApp%20Image%202026-01-07%20at%201.47.46%20AM%20%281%29.jpeg",
    "https://customer-assets.emergentagent.com/job_pawsomecare-4/artifacts/o8hpaej2_WhatsApp%20Image%202026-01-07%20at%201.47.46%20AM%20%282%29.jpeg"
  ];

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Pet Shop
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Quality food and accessories available at Raj Canine Care
            </p>
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg">
              <p className="text-xl font-bold">100+ Variety of Treats, Biscuits & Pet Food 🛍️</p>
            </div>
          </div>

          {/* Trusted Brands Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">Trusted Brands We Carry</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {brandImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex items-center justify-center"
                >
                  <img
                    src={image}
                    alt={`Brand ${index + 1}`}
                    className="w-full h-32 object-contain"
                  />
                </div>
              ))}
            </div>
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