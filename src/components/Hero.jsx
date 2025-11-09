import React from 'react';
import { useNavigate } from 'react-router-dom';
import LazyBackground from './LazyBackground';

const Hero = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate('/contact');
    // Scroll to Contact Us section after navigation
    setTimeout(() => {
      const contactSection = document.getElementById('contact-us-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="relative text-white min-h-[380px] md:min-h-[100vh] overflow-visible">
      {/* Background Image */}
        <LazyBackground 
          src="/assets/home__page.webp"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-40 pb-8 md:pb-20 w-full">
          <div className="max-w-4xl">
            <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 md:mb-10">
              &quot;We take care of the<br />
              details so you can focus on what matters most&quot;
            </h1>

            

            <button
              onClick={handleConnectClick}
              className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 md:px-8 md:py-4 rounded-lg text-sm md:text-lg font-semibold transition-colors duration-300 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
            >
              Connect With Us
              <svg className="w-3 h-3 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
      </div>
      
      {/* Bottom dark blue bar */}
      <div className="absolute bottom-0 left-0 right-0 h-4" style={{backgroundColor: '#241afe'}}></div>
    </section>
  );
};

export default Hero;
