import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LazyBackground from '../components/LazyBackground';

const Incoterms = () => {
  const [selectedIncoterm, setSelectedIncoterm] = useState(null);

  const incotermsData = [
    {
      code: "EXW",
      name: "Ex Works",
      description: "Seller makes goods available at their premises",
      sellerResponsibility: "Minimal; just makes goods available",
      buyerResponsibility: "Covers all costs and risks from seller's premises to destination",
      icon: "🏭",
      color: "bg-red-500",
      lightColor: "bg-red-50",
      textColor: "text-red-800",
      borderColor: "border-red-200"
    },
    {
      code: "FCA",
      name: "Free Carrier",
      description: "Seller delivers goods to carrier or specified location",
      sellerResponsibility: "Delivers goods to a carrier or specified location",
      buyerResponsibility: "Takes over once goods are delivered to the carrier",
      icon: "🚛",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-800",
      borderColor: "border-orange-200"
    },
    {
      code: "CPT",
      name: "Carriage Paid To",
      description: "Seller pays for transportation to destination",
      sellerResponsibility: "Pays for transportation to the destination",
      buyerResponsibility: "Risk transfers to buyer once goods are handed to carrier",
      icon: "🚚",
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-200"
    },
    {
      code: "CIP",
      name: "Carriage and Insurance Paid To",
      description: "Seller pays for transport and insurance",
      sellerResponsibility: "Pays for transport and insurance",
      buyerResponsibility: "Risk transfers once goods are handed to carrier",
      icon: "🛡️",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-800",
      borderColor: "border-green-200"
    },
    {
      code: "DAP",
      name: "Delivered at Place",
      description: "Seller delivers to specified destination, ready for unloading",
      sellerResponsibility: "Delivery to specified destination, ready for unloading",
      buyerResponsibility: "Takes risk upon arrival",
      icon: "📍",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-800",
      borderColor: "border-blue-200"
    },
    {
      code: "DPU",
      name: "Delivered at Place Unloaded",
      description: "Seller delivers and unloads goods at designated location",
      sellerResponsibility: "Delivers and unloads goods at the designated location",
      buyerResponsibility: "Takes over after unloading",
      icon: "📦",
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-800",
      borderColor: "border-indigo-200"
    },
    {
      code: "DDP",
      name: "Delivered Duty Paid",
      description: "Seller covers all costs, including duties and taxes",
      sellerResponsibility: "Covers all costs, including duties and taxes",
      buyerResponsibility: "Takes possession upon delivery",
      icon: "💰",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-800",
      borderColor: "border-purple-200"
    },
    {
      code: "FAS",
      name: "Free Alongside Ship",
      description: "Seller delivers goods alongside the ship",
      sellerResponsibility: "Delivers goods alongside the ship",
      buyerResponsibility: "Takes risk once goods are alongside the vessel",
      icon: "🚢",
      color: "bg-cyan-500",
      lightColor: "bg-cyan-50",
      textColor: "text-cyan-800",
      borderColor: "border-cyan-200"
    },
    {
      code: "FOB",
      name: "Free on Board",
      description: "Seller delivers goods on board the vessel",
      sellerResponsibility: "Delivers goods on board the vessel",
      buyerResponsibility: "Assumes risk once goods are on board",
      icon: "⛴️",
      color: "bg-teal-500",
      lightColor: "bg-teal-50",
      textColor: "text-teal-800",
      borderColor: "border-teal-200"
    },
    {
      code: "CFR",
      name: "Cost and Freight",
      description: "Seller pays shipping costs to destination port",
      sellerResponsibility: "Pays shipping costs to the destination port",
      buyerResponsibility: "Assumes risk once goods are on board",
      icon: "🚢",
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-800",
      borderColor: "border-emerald-200"
    },
    {
      code: "CIF",
      name: "Cost, Insurance, and Freight",
      description: "Seller pays shipping and insurance to destination",
      sellerResponsibility: "Pays shipping and insurance to the destination",
      buyerResponsibility: "Risk transfers when goods are on board",
      icon: "🛳️",
      color: "bg-lime-500",
      lightColor: "bg-lime-50",
      textColor: "text-lime-800",
      borderColor: "border-lime-200"
    }
  ];

  const handleIncotermClick = (incoterm) => {
    setSelectedIncoterm(incoterm);
  };

  const closeModal = () => {
    setSelectedIncoterm(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-18 md:pb-20">
        <LazyBackground 
          src="/assets/home__page.webp"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Incoterms® Guide
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
              International Commercial Terms that define responsibilities in global trade
            </p>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 max-w-3xl mx-auto">
              <p className="text-sm sm:text-base text-white/90">
                Incoterms® are essential in international trade as they define the responsibilities of buyers and sellers regarding the delivery of goods, minimizing disputes and misunderstandings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incoterms Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Choose an Incoterm to Learn More
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2">
                Each Incoterm specifies who is responsible for shipping, insurance, duties, and tariffs. 
                Click on any term below to see detailed responsibilities.
              </p>
            </div>

            {/* Incoterms Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {incotermsData.map((incoterm, index) => (
                <div
                  key={index}
                  onClick={() => handleIncotermClick(incoterm)}
                  className={`${incoterm.lightColor} ${incoterm.borderColor} border-2 rounded-lg p-3 sm:p-4 md:p-6 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="text-center">
                    <div className={`${incoterm.color} w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4`}>
                      <span className="text-lg sm:text-2xl md:text-3xl">{incoterm.icon}</span>
                    </div>
                    <h3 className={`${incoterm.textColor} text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2`}>
                      {incoterm.code}
                    </h3>
                    <h4 className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
                      {incoterm.name}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {incoterm.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Benefits Section */}
            <div className="mt-8 sm:mt-12 md:mt-16 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                Why Incoterms® Matter
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-lg sm:text-2xl">🛡️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Risk Management</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Clearly defines when risk transfers from seller to buyer</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-lg sm:text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Cost Allocation</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Outlines who bears which costs, preventing disputes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-lg sm:text-2xl">⚖️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Legal Clarity</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Provides common language for international trade</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-lg sm:text-2xl">🚚</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Trade Facilitation</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Eases logistics planning for both parties</p>
                </div>
              </div>
            </div>

            {/* Incoterms 2020 Updates */}
            <div className="mt-6 sm:mt-8 md:mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                Incoterms® 2020 Updates
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <span className="text-lg sm:text-2xl mr-2 sm:mr-3">🔄</span>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">DPU Introduction</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">DPU (Delivered at Place Unloaded) replaces DAT (Delivered at Terminal)</p>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <span className="text-lg sm:text-2xl mr-2 sm:mr-3">🛡️</span>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Insurance Clarification</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">Clearer requirements under CIP and CIF terms</p>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <span className="text-lg sm:text-2xl mr-2 sm:mr-3">📱</span>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Digital Focus</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">Emphasis on electronic documents and communications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Detailed View */}
      {selectedIncoterm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-2 sm:mx-4">
          <div className="p-4 sm:p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center">
                <div className={`${selectedIncoterm.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4`}>
                  <span className="text-lg sm:text-xl">{selectedIncoterm.icon}</span>
                </div>
                <div>
                  <h2 className={`${selectedIncoterm.textColor} text-xl sm:text-2xl font-bold`}>
                    {selectedIncoterm.code}
                  </h2>
                  <h3 className="text-gray-800 font-semibold text-sm sm:text-base">
                    {selectedIncoterm.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <div className="mb-4 sm:mb-6">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Description</h4>
              <p className="text-gray-700 text-sm sm:text-base">{selectedIncoterm.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className={`${selectedIncoterm.lightColor} ${selectedIncoterm.borderColor} border rounded-lg p-3 sm:p-4`}>
                <h4 className={`${selectedIncoterm.textColor} font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base`}>
                  <span className="mr-2">👤</span>
                  Seller's Responsibility
                </h4>
                <p className="text-xs sm:text-sm text-gray-700">{selectedIncoterm.sellerResponsibility}</p>
              </div>
              <div className={`${selectedIncoterm.lightColor} ${selectedIncoterm.borderColor} border rounded-lg p-3 sm:p-4`}>
                <h4 className={`${selectedIncoterm.textColor} font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base`}>
                  <span className="mr-2">👥</span>
                  Buyer's Responsibility
                </h4>
                <p className="text-xs sm:text-sm text-gray-700">{selectedIncoterm.buyerResponsibility}</p>
              </div>
            </div>

            {/* Close Button */}
            <div className="mt-4 sm:mt-6 text-center">
              <button
                onClick={closeModal}
                className={`${selectedIncoterm.color} hover:opacity-90 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-opacity text-sm sm:text-base`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Incoterms;
