import React from 'react';
import LogoMarquee from './LogoMarquee';
import LazyImage from './LazyImage';

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - CEO Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 rounded-lg shadow-lg overflow-hidden">
              <LazyImage
                src="/assets/ceo.webp"
                alt="Rafeek Sharafudeen, Founder & CEO"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">About OFL INTERNATIONAL</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 italic">
              "As we mark another milestone in our journey, I extend my heartfelt gratitude to every client, partner, and team member who has contributed to our growth. What started as a vision in 2011 has grown into a trusted logistics name across borders."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
              "Thank you for believing in OFL International — your continued trust and support inspire us to raise the bar every day. Here's to new challenges, new horizons, and shared success."
            </p>
            <p className="text-lg font-semibold text-blue-900">
              Rafeek Sharafudeen
            </p>
            <p className="text-base text-gray-600">
              Founder & CEO
            </p>
          </div>
        </div>

        {/* Logo Marquee Section */}
        <div className="mt-12">
          <LogoMarquee />
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-gray-50 rounded-lg p-6">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">200k+</h3>
            <p className="text-gray-700">Deliveries</p>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-6">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">350+</h3>
            <p className="text-gray-700">Locations</p>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-6">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">15+</h3>
            <p className="text-gray-700">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

