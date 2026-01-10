import React from 'react';
import { Star, MessageCircle, ThumbsUp, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export const GoogleReviewsSection = () => {
  const googleReviewUrl = "https://g.page/r/CbFfBoMMYIaSSBM/review";
  
  return (
    <section id="google-reviews" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full mb-4">
              <span className="text-yellow-800 font-medium text-sm">⭐ Customer Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Google Reviews
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your feedback helps us serve you better! Share your experience with Raj Canine Care
            </p>
          </div>

          {/* Main Review Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Info */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  Love Our Service? 💙
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  We'd love to hear about your experience! Your review helps other pet parents find quality care for their furry friends.
                </p>
                
                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Share your pet's care experience</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ThumbsUp className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Help us improve our services</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Support local pet care business</p>
                  </div>
                </div>
              </div>

              {/* Right Side - CTA */}
              <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                      <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                      <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                      <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-blue-900 mb-2">Visit Us on Google</h4>
                  <p className="text-gray-600 mb-6">Read reviews from our happy pet parents</p>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <a
                    href={googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg shadow-lg"
                    >
                      <Star className="w-5 h-5 mr-2 fill-white" />
                      Write a Review
                    </Button>
                  </a>
                  <a
                    href={googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-6 text-lg"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Read All Reviews
                    </Button>
                  </a>
                </div>

                <p className="text-sm text-gray-500 mt-4">Takes less than 2 minutes</p>
              </div>
            </div>
          </div>

          {/* Bottom Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Rate Your Visit</h4>
              <p className="text-sm text-gray-600">Share your experience with our services</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Share Your Story</h4>
              <p className="text-sm text-gray-600">Tell others about your pet's care journey</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ThumbsUp className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Help Pet Parents</h4>
              <p className="text-sm text-gray-600">Guide others in choosing quality pet care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
