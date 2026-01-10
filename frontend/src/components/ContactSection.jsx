import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../data/mock';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Contact Information
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us or call for appointments and queries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-8">Get In Touch</h3>
              
              {/* Phone Numbers */}
              <div className="space-y-6 mb-8">
                {contactInfo.phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone}`}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:bg-blue-50"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone {index + 1}</p>
                      <p className="text-lg font-semibold text-blue-900">{phone}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-lg font-semibold text-blue-900">{contactInfo.address}</p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Timings</p>
                  <p className="text-lg font-semibold text-blue-900">{contactInfo.timings}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-8">Location</h3>
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5896179158626!2d73.20287217525447!3d22.326848579689846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf3fd0dcbdeb%3A0x8692c80c0680f5b1!2sSuvidha%20Park!5e0!3m2!1sen!2sin!4v1704902400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Raj Canine Care Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};