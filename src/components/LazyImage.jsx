import React, { useState, useRef, useEffect } from 'react';

// Simple base64 placeholder generator - creates a tiny blurred placeholder
const generatePlaceholder = (width = 20, height = 20, color = '#241afe') => {
  // Create a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const LazyImage = ({
  src,
  alt,
  className = '',
  placeholder = null,
  ...props
}) => {
  const imgRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(placeholder || generatePlaceholder());
  const [isLoaded, setIsLoaded] = useState(false);
  const prevSrcRef = useRef(src);

  // Load image when src changes or component mounts
  useEffect(() => {
    // Reset if src changed
    if (prevSrcRef.current !== src) {
      setIsLoaded(false);
      setImageSrc(placeholder || generatePlaceholder());
      prevSrcRef.current = src;
    }

    let didCancel = false;

    const loadImage = () => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (!didCancel) {
          setImageSrc(src);
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        if (!didCancel) {
          console.error(`Failed to load image: ${src}`);
        }
      };
    };

    // Check if element is in viewport
    const checkVisibility = () => {
      if (!imgRef.current) return false;
      const rect = imgRef.current.getBoundingClientRect();
      return (
        rect.top < window.innerHeight + 50 &&
        rect.bottom > -50 &&
        rect.left < window.innerWidth + 50 &&
        rect.right > -50
      );
    };

    // If already visible, load immediately
    if (checkVisibility()) {
      loadImage();
      return () => { didCancel = true; };
    }

    // Otherwise use intersection observer
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !didCancel) {
              loadImage();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: '50px' }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        didCancel = true;
        observer.disconnect();
      };
    } else {
      // Fallback for older browsers
      loadImage();
    }

    return () => { didCancel = true; };
  }, [src, placeholder]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${!isLoaded ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
      loading="lazy"
      {...props}
    />
  );
};

export default LazyImage;
