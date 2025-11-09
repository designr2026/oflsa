import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomerPerks from '../components/CustomerPerks';
import LazyBackground from '../components/LazyBackground';

const FreightInsurance = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative text-white min-h-[100vh] flex items-start pt-20 md:pt-32">
        {/* Background Image */}
        <LazyBackground 
          src="/assets/Freight_Insurance.webp"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-10 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Freight Insurance
            </h1>
            
            <div className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-gray-200 max-w-3xl space-y-2 md:space-y-3">
              <p>
                Protect Your Cargo with Freight Insurance
              </p>
              <p>
                At OFL International, we offer reliable freight insurance solutions to safeguard your shipments against loss, damage, or unforeseen events during transit. Whether by air, sea, or land, our coverage ensures peace of mind across every route — locally, regionally, or globally.
              </p>
              <p>
                Your cargo is valuable — we make sure it's protected.
              </p>
            </div>
            
            <button 
              onClick={handleContactClick}
              className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-lg font-semibold transition-colors duration-300 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
            >
              connect to an expert
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Customer Perks Section */}
      <CustomerPerks />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FreightInsurance;
