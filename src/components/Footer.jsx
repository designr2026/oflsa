import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (route) => {
    navigate(route);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const footerLinks = {
    discover: {
      title: "DISCOVER OFL:",
      links: [
        { text: "About us", route: "/why-choose-ofl" },
        { text: "Core message", route: "/" }
      ]
    },
    solutions: {
      title: "SOLUTIONS:",
      links: [
        { text: "Air Freight", route: "/air-logistics" },
        { text: "Sea Freight", route: "/sea-freight" },
        { text: "Road Freight", route: "/road-freight" },
        { text: "Customs Clearance", route: "/customs-clearance" },
        { text: "Project & Oversize", route: "/project-oversize-shipments" },
        { text: "Event Logistics", route: "/event-logistics" },
        { text: "Freight Insurance", route: "/freight-insurance" },
        { text: "Warehousing", route: "/warehousing" },
        { text: "Food Storage", route: "/food-storage" },
        { text: "Consolidation Service", route: "/consolidation-service" }
      ]
    },
    tools: {
      title: "TOOLS & UTILITY:",
      links: [
        { text: "Contact us", route: "/contact" },
        { text: "Tracker", route: "/tracker" },
        { text: "Airport code reference", route: "/airport-code-finder" },
        { text: "Country code reference", route: "/country-code-finder" },
        { text: "Incoterm code reference", route: "/incoterms" }
      ]
    },
    follow: {
      title: "FOLLOW US:",
      social: true
    }
  };

  return (
    <footer className="bg-gray-200 text-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          {/* Logo */}
          <div className="md:col-span-1 mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center">
                <svg className="w-16 h-6 md:w-20 md:h-7" viewBox="0 0 137 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M33.8472 8.16704L26.0372 26.3327C25.2586 28.3531 25.0747 32.547 30.4166 33.4253L48.1405 33.4679C50.5884 33.2639 56.2187 31.8767 59.1562 27.96L67.673 8.78442C69.4274 3.27654 65.3781 1.55957 63.1341 1.38958H44.1625C38.1651 1.96076 34.7867 6.14588 33.8472 8.16704ZM37.7367 22.1971L41.6126 13.1703C42.7498 10.5219 44.9084 9.82287 45.8455 9.8044H54.6173C55.7597 9.8044 55.9093 11.5044 55.8413 12.3543C54.5833 15.3973 51.8736 21.8299 51.0984 23.2171C50.3232 24.6043 48.8034 25.2231 48.1405 25.3591C46.5425 25.4101 42.6734 25.4815 39.9806 25.3591C37.2879 25.2367 37.3627 23.2001 37.7367 22.1971Z" fill="#241afe" />
                  <path d="M56.4587 34.7103L18.2157 34.9521L21.238 38.6595L18.2157 42.9715H56.4587C64.6474 42.0043 68.1184 37.7596 68.8303 35.7581L74.1094 23.185H94.7824L101.351 19.0746L98.2078 14.7627H77.7362L78.6228 12.3851C79.6867 9.38688 81.9676 8.55674 82.975 8.51644H102.721L109.733 4.7687L105.945 0.0940963H80.5168C74.1336 0.738869 70.8721 6.27317 70.0393 8.95972C67.4064 15.3537 61.8184 28.7865 60.5289 31.3656C59.2393 33.9446 57.2781 34.67 56.4587 34.7103Z" fill="#241afe" />
                  <path d="M108.241 8.51644H105.945L111.722 5.48018L108.867 0.0941095C109.904 0.0230923 113.239 -0.0763319 118.284 0.0941095C123.329 0.264551 122.488 6.68747 121.437 9.22989C118.497 16.4878 112.438 31.6173 111.722 34.0717C111.006 36.5261 112.247 37.1681 112.957 37.1823H132.729L136.904 41.912L129.022 45.6617C122.119 45.6901 107.239 45.6617 102.944 45.3208C98.6489 44.9799 98.8818 40.9462 99.5352 38.9719C102.021 32.2821 108.148 16.9089 109.733 12.9779C111.038 9.74283 109.377 8.3744 108.241 8.51644Z" fill="#241afe" />
                  <path d="M39.0433 1.31352H16.8028L15.3332 3.95886H34.6834C36.055 2.43044 38.1615 1.55846 39.0433 1.31352Z" fill="#241afe" />
                  <path d="M31.6637 7.71012H13.2442L11.8236 10.3555H29.9981L31.6637 7.71012Z" fill="#241afe" />
                  <path d="M28.4374 14.4423H9.52813L8.15647 17.0876H27.2127L28.4374 14.4423Z" fill="#241afe" />
                  <path d="M25.5227 21.0801H5.43764L3.91902 23.6765H24.5429L25.5227 21.0801Z" fill="#241afe" />
                  <path d="M23.2692 28.4528L1.46963 28.6977L0 31.0981H24.053C23.2692 30.667 23.2039 29.1549 23.2692 28.4528Z" fill="#241afe" />
                  <path d="M99.0569 27.96H80.5168L78.902 30.7709H98.2196L99.0569 27.96Z" fill="#241afe" />
                  <path d="M97.731 34.8135H77.5762L76.081 37.5048H96.8339L97.731 34.8135Z" fill="#241afe" />
                  <path d="M95.7187 41.1856H73.8294L72.2745 43.9367H96.855C95.946 42.8841 95.7187 41.664 95.7187 41.1856Z" fill="#241afe" />
                </svg>
              </div>
              <div className="w-16 md:w-20 text-[4px] md:text-[5px] text-blue-900 font-light mt-1 leading-tight text-center md:text-left tracking-tight">
                INTERNATIONAL SHIPPING LLC
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h4 className="font-bold text-sm mb-4">{section.title}</h4>
                {section.social ? (
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/orbitfreight"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                      aria-label="Follow us on Facebook"
                    >
                      <span className="text-sm font-bold">f</span>
                    </a>
                    <a
                      href="https://x.com/info_ofl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                      aria-label="Follow us on Twitter/X"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <button
                          onClick={() => link.route !== '#' ? handleServiceClick(link.route) : null}
                          className="text-sm hover:text-blue-900 transition-colors text-left bg-transparent border-none cursor-pointer"
                        >
                          {link.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-sm text-gray-600 mb-2 md:mb-0">
            Copyright 2023 © OFL All rights reserved.
          </div>
          <div className="text-sm text-gray-600">
            Designed by R
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
