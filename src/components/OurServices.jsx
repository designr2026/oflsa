import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage';

const OurServices = () => {
  const [selectedService, setSelectedService] = useState('Freight Solutions');
  const navigate = useNavigate();

  const handleServiceClick = (serviceTitle) => {
    const routeMap = {
      'Air Freight': '/air-logistics',
      'Sea Freight': '/sea-freight',
      'Road Freight': '/road-freight',
      'Customs Clearance': '/customs-clearance',
      'Project & Oversize Shipments': '/project-oversize-shipments',
      'Event Logistics': '/event-logistics',
      'Freight Insurance': '/freight-insurance',
      'Warehousing & Distribution': '/warehousing',
      'Consolidation Service': '/consolidation-service',
      'Food Storage': '/food-storage'
    };
    
    const route = routeMap[serviceTitle];
    if (route) {
      navigate(route);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  };

  const transportServices = [
    {
      title: "Project & Oversize Shipments",
      image: "/assets/Project_&_Oversize_Shipments.webp",
      description: "OFL International offers specialized solutions for oversized, heavy, or unconventional cargo that requires more than standard transport. With access to a wide range of equipment, we ensure safe, compliant, and efficient movement from origin to destination."
    },
    {
      title: "Event Logistics",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Seamless Event Logistics – From Planning to Execution. OFL International provides specialized event logistics solutions for exhibitions, conferences, and live events. From freight coordination and customs clearance to on-site delivery and setup, we handle every detail with precision."
    }
  ];

  const freightServices = [
    {
      title: "Air Freight",
      image: "/assets/air_frieght.webp",
      description: "Fast. Reliable. Global. OFL International provides premium air freight solutions from Saudi Arabia and across the Middle East to destinations worldwide. Whether your shipping terms are EXW, FOB, C&F, CIF, or DDP, we deliver seamless, end-to-end handling — from pickup to final delivery."
    },
    {
      title: "Sea Freight",
      image: "/assets/sea_freight.webp",
      description: "Efficient Sea Freight Services – Covering Ports Worldwide. Whether your shipment is under FOB, CIF, EXW, or DDP terms, we provide flexible LCL and FCL options — complete with documentation, customs clearance, and timely delivery."
    },
    {
      title: "Road Freight",
      image: "/assets/road_freight.webp",
      description: "Reliable Land Freight Across the Region. OFL International delivers efficient land freight solutions connecting Saudi Arabia and the Middle East with smooth cross-border transport. Whether your cargo requires FTL or LTL services under EXW, FOB, or DDP terms, we ensure safe, timely deliveries."
    },
    {
      title: "Customs Clearance",
      image: "/assets/Customs_Clearance.webp",
      description: "Smooth & Hassle-Free Customs Clearance. OFL International offers expert customs clearance services to ensure your cargo moves swiftly. From paperwork to port release — we clear the way for your cargo."
    },
    {
      title: "Freight Insurance",
      image: "/assets/Freight_Insurance.webp",
      description: "Protect Your Cargo with Freight Insurance. At OFL International, we offer reliable freight insurance solutions to safeguard your shipments against loss, damage, or unforeseen events during transit. Your cargo is valuable — we make sure it's protected."
    }
  ];

  const warehousingServices = [
    {
      title: "Warehousing & Distribution",
      image: "/assets/Warehousing_&_Distribution.webp",
      description: "OFL International provides reliable warehousing and efficient distribution services tailored to your supply chain needs. Our strategically located facilities ensure seamless storage, inventory management, and timely dispatch."
    },
    {
      title: "Food Storage",
      image: "/assets/Food_Storage.webp",
      description: "OFL International offers specialized food storage services with both refrigerated and standard (dry) warehousing options. Our temperature-controlled facilities maintain the integrity and freshness of perishable goods."
    }
  ];

  const otherSolutions = [
    {
      title: "Consolidation Service",
      image: "/assets/Consolidation Service.webp",
      description: "With an aim to provide extra-efficient, seamless, and cost-effective services, OFL International has developed a consolidation hub in Amsterdam, Netherlands. This gives us an edge over others in both time and cost savings."
    }
  ];

  const getServices = () => {
    switch(selectedService) {
      case 'Transport Solution':
        return transportServices;
      case 'Freight Solutions':
        return freightServices;
      case 'Supply Chain & Logistics Solutions':
        return warehousingServices;
      case 'Other Solutions':
        return otherSolutions;
      default:
        return transportServices;
    }
  };

  const services = getServices();

      return (
        <section className="bg-white py-8 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6 pt-8 md:pt-16">OUR SERVICES</h2>
        
        {/* Dropdown */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="text-gray-500 text-sm">Please select</span>
            <div className="relative w-full sm:w-auto">
              <select 
                value={selectedService}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                }}
                className="w-full sm:w-auto px-3 md:px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 text-blue-900 font-medium appearance-none pr-8"
              >
                <option value="Transport Solution">Transport Solution</option>
                <option value="Freight Solutions">Freight Solutions</option>
                <option value="Supply Chain & Logistics Solutions">Supply Chain & Logistics Solutions</option>
                <option value="Other Solutions">Other Solutions</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer hover:scale-105"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="h-40 sm:h-48 overflow-hidden">
                <LazyImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
