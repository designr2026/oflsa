import React, { useState, useEffect, useRef } from 'react';

// Simple base64 placeholder generator for backgrounds
const generatePlaceholder = (width = 20, height = 20, color = '#1a1a1a') => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const LazyBackground = ({ 
  src, 
  className = '', 
  placeholder = null,
  children,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder || generatePlaceholder());
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (containerRef.current && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                  if (!didCancel) {
                    setImageSrc(src);
                    setIsLoaded(true);
                  }
                };
                img.onerror = () => {
                  console.error(`Failed to load background image: ${src}`);
                };
                observer.unobserve(containerRef.current);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '50px'
          }
        );
        observer.observe(containerRef.current);
      } else {
        // Fallback for older browsers
        const img = new Image();
        img.src = src;
        img.onload = () => {
          if (!didCancel) {
            setImageSrc(src);
            setIsLoaded(true);
          }
        };
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [src, imageSrc]);

  return (
    <div
      ref={containerRef}
      className={`${className} ${!isLoaded ? 'blur-sm' : 'blur-0'} transition-all duration-500`}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default LazyBackground;

