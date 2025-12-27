import React, { useRef, useEffect, useState } from 'react';

const AdaptiveVideo = ({
  sources = {
    high: '/assets/videos/hero_vid.mp4',
    medium: '/assets/videos/hero_vid.mp4',
    low: '/assets/videos/hero_vid_480p.mp4',
    // Fallback for slow connections
    original: '/assets/videos/hero_vid_480p.mp4'
  },
  poster = '/assets/videos/hero_vid_poster.webp',
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  onError
}) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSource, setCurrentSource] = useState(null);
  const [connectionSpeed, setConnectionSpeed] = useState('medium');
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Detect connection speed
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        const effectiveType = connection.effectiveType;
        const downlink = connection.downlink;

        // Determine quality based on connection
        if (effectiveType === '4g' && downlink > 5) {
          setConnectionSpeed('high');
        } else if (effectiveType === '4g' || (effectiveType === '3g' && downlink > 1.5)) {
          setConnectionSpeed('medium');
        } else {
          setConnectionSpeed('low');
        }

        // Listen for connection changes
        const handleConnectionChange = () => {
          const newEffectiveType = connection.effectiveType;
          const newDownlink = connection.downlink;

          if (newEffectiveType === '4g' && newDownlink > 5) {
            setConnectionSpeed('high');
          } else if (newEffectiveType === '4g' || (newEffectiveType === '3g' && newDownlink > 1.5)) {
            setConnectionSpeed('medium');
          } else {
            setConnectionSpeed('low');
          }
        };

        connection.addEventListener('change', handleConnectionChange);
        return () => connection.removeEventListener('change', handleConnectionChange);
      }
    }
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (videoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px', // Start loading when 50px from viewport
        }
      );

      observer.observe(videoRef.current);

      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }
  }, []);

  // Set video source based on connection speed
  useEffect(() => {
    if (isVisible && !hasError) {
      // Start with medium quality, then upgrade/downgrade based on connection
      // Fallback chain: high -> medium -> low -> original
      let initialSource = sources.medium || sources.low || sources.high || sources.original;

      if (connectionSpeed === 'high' && sources.high) {
        initialSource = sources.high;
      } else if (connectionSpeed === 'low' && sources.low) {
        initialSource = sources.low;
      } else if (sources.medium) {
        initialSource = sources.medium;
      } else if (sources.low) {
        initialSource = sources.low;
      } else if (sources.high) {
        initialSource = sources.high;
      } else if (sources.original) {
        // Only use original as last resort (it's large)
        initialSource = sources.original;
      }

      setCurrentSource(initialSource);
    }
  }, [isVisible, connectionSpeed, sources, hasError]);

  // Handle video load
  const handleLoadedData = () => {
    setIsLoaded(true);
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  };

  // Handle video errors - fallback to lower quality
  const handleError = () => {
    console.warn('Video failed to load, trying fallback...');

    if (currentSource === sources.high && sources.medium) {
      setCurrentSource(sources.medium);
    } else if (currentSource === sources.medium && sources.low) {
      setCurrentSource(sources.low);
    } else if (currentSource === sources.high && sources.low) {
      setCurrentSource(sources.low);
    } else if (currentSource !== sources.original && sources.original) {
      // Try original as last resort
      setCurrentSource(sources.original);
    } else {
      // All sources failed
      setHasError(true);
      if (onError) {
        onError();
      }
    }
  };

  // Handle video canplay - upgrade quality if connection is good
  const handleCanPlay = () => {
    if (connectionSpeed === 'high' && currentSource === sources.medium) {
      // Try to upgrade to high quality
      const highVideo = document.createElement('video');
      highVideo.src = sources.high;
      highVideo.addEventListener('loadeddata', () => {
        if (videoRef.current && !hasError) {
          videoRef.current.src = sources.high;
          setCurrentSource(sources.high);
        }
      });
      highVideo.addEventListener('error', () => {
        // High quality not available, keep medium
      });
    }
  };

  // Monitor buffering and adjust quality
  useEffect(() => {
    if (!videoRef.current || !isVisible) return;

    const video = videoRef.current;
    let bufferingTimeout;

    const handleWaiting = () => {
      // Video is buffering
      bufferingTimeout = setTimeout(() => {
        if (currentSource === sources.high) {
          // Downgrade to medium
          setCurrentSource(sources.medium);
        } else if (currentSource === sources.medium) {
          // Downgrade to low
          setCurrentSource(sources.low);
        }
      }, 2000); // Wait 2 seconds before downgrading
    };

    const handlePlaying = () => {
      // Video is playing smoothly
      clearTimeout(bufferingTimeout);
    };

    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('playing', handlePlaying);

    return () => {
      clearTimeout(bufferingTimeout);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('playing', handlePlaying);
    };
  }, [currentSource, sources, isVisible]);

  if (hasError) {
    // Fallback to poster image if all video sources fail
    return (
      <div
        className={className}
        style={{
          backgroundImage: `url('${poster}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
      poster={poster}
      src={currentSource || ''}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="metadata" // Only load metadata initially
      onLoadedData={handleLoadedData}
      onError={handleError}
      onCanPlay={handleCanPlay}
    />
  );
};

export default AdaptiveVideo;

