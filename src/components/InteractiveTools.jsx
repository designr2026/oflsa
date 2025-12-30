import React from 'react';
import { useNavigate } from 'react-router-dom';
import LazyBackground from './LazyBackground';

const InteractiveTools = () => {
  const navigate = useNavigate();

  const tools = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      label: "TRACKER",
      route: "/tracker"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: "INCOTERMS",
      route: "/incoterms"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      label: "AIRPORT CODE FINDER",
      route: "/airport-code-finder"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "COUNTRY CODE FINDER",
      route: "/country-code-finder"
    }
  ];

  const handleToolClick = (route) => {
    navigate(route);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <section className="relative -mt-32 md:-mt-48 z-20">
      {/* Solid brand blue background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#241afe' }}></div>

      <div className="w-full relative">
        {/* Glass morphism bar with iPhone-like design */}
        <div className="relative w-full">
          {/* White glass highlight on top */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5"></div>

          {/* Main glass container */}
          <div className="relative py-4 md:py-4 px-4 md:px-8">
            <div className="grid grid-cols-2 md:flex md:justify-evenly items-center w-full gap-4 md:gap-0">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group md:flex-1 cursor-pointer"
                  onClick={() => handleToolClick(tool.route)}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm bg-white/5">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                      {tool.icon}
                    </div>
                  </div>
                  <span className="text-white text-[10px] md:text-sm font-medium mt-2 md:mt-3 text-center tracking-wide leading-tight">
                    {tool.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTools;
