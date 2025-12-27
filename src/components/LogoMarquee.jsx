import React from 'react';
import LazyImage from './LazyImage';

const LogoMarquee = () => {
  const logos = [
    { src: '/assets/logo_banner_1.webp', alt: 'Project Cargo Network' },
    { src: '/assets/logo_banner_2.webp', alt: 'WCAworld' },
    { src: '/assets/logo_banner_3.webp', alt: 'PPL Networks' },
    { src: '/assets/logo_banner_4.webp', alt: 'JCTRANS' }
  ];

  return (
    <section className="bg-white py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-slate-600 text-xl md:text-2xl font-semibold mb-6 md:mb-8">Our Network</h2>
      </div>
      <div className="relative">
        <div className="flex animate-scroll hover:pause-animation">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 px-8 md:px-16 flex items-center justify-center">
              <LazyImage 
                src={logo.src} 
                alt={logo.alt} 
                className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`first-repeat-${index}`} className="flex-shrink-0 px-8 md:px-16 flex items-center justify-center">
              <LazyImage 
                src={logo.src} 
                alt={logo.alt} 
                className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 px-8 md:px-16 flex items-center justify-center">
              <LazyImage 
                src={logo.src} 
                alt={logo.alt} 
                className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`second-repeat-${index}`} className="flex-shrink-0 px-8 md:px-16 flex items-center justify-center">
              <LazyImage 
                src={logo.src} 
                alt={logo.alt} 
                className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;

