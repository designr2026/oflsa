import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import InteractiveTools from '../components/InteractiveTools';
import OurServices from '../components/OurServices';
import CustomerPerks from '../components/CustomerPerks';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <InteractiveTools />
      <OurServices />
      <CustomerPerks />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
