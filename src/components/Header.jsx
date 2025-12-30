import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleServiceClick = (route) => {
    navigate(route);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-transparent">
      {/* Main header - subtle background for visibility */}
      <div className="text-white py-2 md:py-4 bg-black bg-opacity-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col items-center cursor-pointer" onClick={handleLogoClick}>
            <div className="flex items-center">
              <svg className="w-12 h-4 md:w-24 md:h-8" viewBox="0 0 137 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M33.8472 8.16704L26.0372 26.3327C25.2586 28.3531 25.0747 32.547 30.4166 33.4253L48.1405 33.4679C50.5884 33.2639 56.2187 31.8767 59.1562 27.96L67.673 8.78442C69.4274 3.27654 65.3781 1.55957 63.1341 1.38958H44.1625C38.1651 1.96076 34.7867 6.14588 33.8472 8.16704ZM37.7367 22.1971L41.6126 13.1703C42.7498 10.5219 44.9084 9.82287 45.8455 9.8044H54.6173C55.7597 9.8044 55.9093 11.5044 55.8413 12.3543C54.5833 15.3973 51.8736 21.8299 51.0984 23.2171C50.3232 24.6043 48.8034 25.2231 48.1405 25.3591C46.5425 25.4101 42.6734 25.4815 39.9806 25.3591C37.2879 25.2367 37.3627 23.2001 37.7367 22.1971Z" fill="white" />
                <path d="M56.4587 34.7103L18.2157 34.9521L21.238 38.6595L18.2157 42.9715H56.4587C64.6474 42.0043 68.1184 37.7596 68.8303 35.7581L74.1094 23.185H94.7824L101.351 19.0746L98.2078 14.7627H77.7362L78.6228 12.3851C79.6867 9.38688 81.9676 8.55674 82.975 8.51644H102.721L109.733 4.7687L105.945 0.0940963H80.5168C74.1336 0.738869 70.8721 6.27317 70.0393 8.95972C67.4064 15.3537 61.8184 28.7865 60.5289 31.3656C59.2393 33.9446 57.2781 34.67 56.4587 34.7103Z" fill="white" />
                <path d="M108.241 8.51644H105.945L111.722 5.48018L108.867 0.0941095C109.904 0.0230923 113.239 -0.0763319 118.284 0.0941095C123.329 0.264551 122.488 6.68747 121.437 9.22989C118.497 16.4878 112.438 31.6173 111.722 34.0717C111.006 36.5261 112.247 37.1681 112.957 37.1823H132.729L136.904 41.912L129.022 45.6617C122.119 45.6901 107.239 45.6617 102.944 45.3208C98.6489 44.9799 98.8818 40.9462 99.5352 38.9719C102.021 32.2821 108.148 16.9089 109.733 12.9779C111.038 9.74283 109.377 8.3744 108.241 8.51644Z" fill="white" />
                <path d="M39.0433 1.31352H16.8028L15.3332 3.95886H34.6834C36.055 2.43044 38.1615 1.55846 39.0433 1.31352Z" fill="white" />
                <path d="M31.6637 7.71012H13.2442L11.8236 10.3555H29.9981L31.6637 7.71012Z" fill="white" />
                <path d="M28.4374 14.4423H9.52813L8.15647 17.0876H27.2127L28.4374 14.4423Z" fill="white" />
                <path d="M25.5227 21.0801H5.43764L3.91902 23.6765H24.5429L25.5227 21.0801Z" fill="white" />
                <path d="M23.2692 28.4528L1.46963 28.6977L0 31.0981H24.053C23.2692 30.667 23.2039 29.1549 23.2692 28.4528Z" fill="white" />
                <path d="M99.0569 27.96H80.5168L78.902 30.7709H98.2196L99.0569 27.96Z" fill="white" />
                <path d="M97.731 34.8135H77.5762L76.081 37.5048H96.8339L97.731 34.8135Z" fill="white" />
                <path d="M95.7187 41.1856H73.8294L72.2745 43.9367H96.855C95.946 42.8841 95.7187 41.664 95.7187 41.1856Z" fill="white" />
              </svg>
            </div>
            <div className="w-12 md:w-24 text-[3px] md:text-[6px] text-white font-light mt-0.5 md:mt-1 leading-tight text-center tracking-tight">
              INTERNATIONAL SHIPPING LLC
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="hover:text-blue-300 transition-colors bg-transparent border-none text-white cursor-pointer"
              >
                Find Your Solution
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-[700px] bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                      {/* Transport Solution */}
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">Transport Solution</h3>
                        <ul className="space-y-2">
                          <li>
                            <button
                              onClick={() => handleServiceClick('/project-oversize-shipments')}
                              className="text-gray-700 hover:text-blue-600 text-left"
                            >
                              Project & Oversize Shipments
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleServiceClick('/event-logistics')}
                              className="text-gray-700 hover:text-blue-600 text-left"
                            >
                              Event Logistics
                            </button>
                          </li>
                        </ul>
                      </div>

                      {/* Freight Solutions */}
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">Freight Solutions</h3>
                        <ul className="space-y-2">
                          <li>
                            <button
                              onClick={() => handleServiceClick('/air-logistics')}
                              className="text-gray-700 hover:text-blue-600 text-left"
                            >
                              Air Freight
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleServiceClick('/sea-freight')}
                              className="text-gray-700 hover:text-blue-600 text-left"
                            >
                              Sea Freight
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleServiceClick('/road-freight')}
                              className="text-gray-700 hover:text-blue-600 text-left"
                            >
                              Road Freight
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleServiceClick('/customs-clearance')}
                              className="text-gray-700 hover:text-blue-600 text-left"
                            >
                              Customs Clearance
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleServiceClick('/freight-insurance')}
                              className="text-gray-700 hover:text-blue-600 text-left"
                            >
                              Freight Insurance
                            </button>
                          </li>
                        </ul>
                      </div>

                      {/* Supply Chain & Logistics Solutions */}
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">Supply Chain & Logistics</h3>
                        <ul className="space-y-2">
                          <li>
                            <button
                              onClick={() => handleServiceClick('/warehousing')}
                              className="text-gray-700 hover:text-blue-600 text-left"
                            >
                              Warehousing & Distribution
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleServiceClick('/food-storage')}
                              className="text-gray-700 hover:text-blue-600 text-left"
                            >
                              Food Storage
                            </button>
                          </li>
                        </ul>
                      </div>

                      {/* Other Solutions */}
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">Other Solutions</h3>
                        <ul className="space-y-2">
                          <li>
                            <button
                              onClick={() => handleServiceClick('/consolidation-service')}
                              className="text-gray-700 hover:text-blue-600 text-left"
                            >
                              Consolidation Service
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate('/why-choose-ofl')}
              className="hover:text-blue-300 transition-colors bg-transparent border-none text-white cursor-pointer"
            >
              Why Choose OFL?
            </button>
            <button
              onClick={handleContactClick}
              className="hover:text-blue-300 transition-colors bg-transparent border-none text-white cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-sm border-t border-gray-600">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => {
                  navigate('/why-choose-ofl');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-white hover:text-blue-300 py-2"
              >
                Why Choose OFL?
              </button>
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-white hover:text-blue-300 py-2"
              >
                Contact Us
              </button>

              {/* Mobile Services Dropdown */}
              <div className="border-t border-gray-600 pt-4">
                <h3 className="text-white font-semibold mb-3">Our Services</h3>
                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => {
                      handleServiceClick('/air-logistics');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-300 hover:text-white py-1"
                  >
                    Air Freight
                  </button>
                  <button
                    onClick={() => {
                      handleServiceClick('/sea-freight');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-300 hover:text-white py-1"
                  >
                    Sea Freight
                  </button>
                  <button
                    onClick={() => {
                      handleServiceClick('/road-freight');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-300 hover:text-white py-1"
                  >
                    Road Freight
                  </button>
                  <button
                    onClick={() => {
                      handleServiceClick('/customs-clearance');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-300 hover:text-white py-1"
                  >
                    Customs Clearance
                  </button>
                  <button
                    onClick={() => {
                      handleServiceClick('/project-oversize-shipments');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-300 hover:text-white py-1"
                  >
                    Project & Oversize
                  </button>
                  <button
                    onClick={() => {
                      handleServiceClick('/event-logistics');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-300 hover:text-white py-1"
                  >
                    Event Logistics
                  </button>
                  <button
                    onClick={() => {
                      handleServiceClick('/freight-insurance');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-300 hover:text-white py-1"
                  >
                    Freight Insurance
                  </button>
                  <button
                    onClick={() => {
                      handleServiceClick('/food-storage');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-300 hover:text-white py-1"
                  >
                    Food Storage
                  </button>
                  <button
                    onClick={() => {
                      handleServiceClick('/consolidation-service');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-300 hover:text-white py-1"
                  >
                    Consolidation Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
