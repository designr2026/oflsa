import React, { useRef, useEffect, useState } from 'react';

const AdaptiveVideo = ({
  sources = {
    high: '/assets/videos/hero_vid.mp4',
    low: '/assets/videos/hero_vid_480p.mp4',
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
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  // Detect if mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Start with low quality for mobile, or determine based on connection
  const getInitialSource = () => {
    // Default to low quality for mobile devices (more reliable)
    if (isMobile) {
      return sources.low;
    }

    // Check connection speed for desktop
    if ('connection' in navigator) {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        const effectiveType = connection.effectiveType;
        const downlink = connection.downlink;

        // Use high quality only for very fast connections
        if (effectiveType === '4g' && downlink > 3) {
          return sources.high;
        }
      }
    }

    // Default to low quality for reliability
    return sources.low;
  };

  const [videoSrc, setVideoSrc] = useState(getInitialSource());
  const sourceSetRef = useRef(false);

  // Handle video load success
  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  // Handle video errors - try to reload before fallback
  const handleError = () => {
    console.warn(`Video failed to load: ${videoSrc}`);

    // If we haven't exhausted retries
    if (retryCount < maxRetries) {
      const nextRetry = retryCount + 1;
      const delay = Math.pow(2, nextRetry) * 1000; // Exponential backoff: 2s, 4s, 8s...

      console.log(`Retrying video load (${nextRetry}/${maxRetries}) in ${delay}ms...`);
      setRetryCount(nextRetry);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.load();
        }
      }, delay);
      return;
    }

    // If high quality failed and we haven't tried low quality yet
    if (videoSrc === sources.high && sources.low) {
      console.log('Falling back to low quality video source');
      setVideoSrc(sources.low);
      setRetryCount(0); // Reset retries for the new source
    } else {
      // All sources and retries failed
      console.error('All video sources failed, falling back to poster image');
      setHasError(true);
      if (onError) {
        onError();
      }
    }
  };

  // Ensure video plays when ready - handle mobile autoplay restrictions
  useEffect(() => {
    if (videoRef.current && isLoaded && autoPlay) {
      const playVideo = async () => {
        try {
          // For mobile, ensure video is muted before attempting play
          if (isMobile && !videoRef.current.muted) {
            videoRef.current.muted = true;
          }
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
          // On mobile, if autoplay fails, try to load the video anyway
          // The poster image will show, and user can tap to play
          if (isMobile && videoRef.current) {
            videoRef.current.load();
          }
        }
      };
      playVideo();
    }
  }, [isLoaded, autoPlay, isMobile]);

  // Load video source when it changes
  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.load();
    }
  }, [videoSrc]);

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
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      poster={poster}
      src={videoSrc}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={isMobile ? "metadata" : "auto"}
      webkitPlaysInline={true}
      x5PlaysInline={true}
      onLoadedData={handleLoadedData}
      onError={handleError}
      onCanPlay={() => {
        // Ensure video can play on mobile
        if (videoRef.current && autoPlay) {
          videoRef.current.play().catch(() => {
            // Autoplay failed, but video is loaded
            console.log('Video loaded but autoplay prevented');
          });
        }
      }}
    />
  );
};

export default AdaptiveVideo;
