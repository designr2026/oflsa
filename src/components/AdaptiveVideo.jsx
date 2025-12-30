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
  const [videoSrc, setVideoSrc] = useState('');
  const sourceSetRef = useRef(false);

  // Determine video source once on mount
  useEffect(() => {
    if (sourceSetRef.current) return;
    sourceSetRef.current = true;

    // Check connection speed and set appropriate source
    let selectedSource = sources.low; // Default to low for reliability

    if ('connection' in navigator) {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        const effectiveType = connection.effectiveType;
        const downlink = connection.downlink;

        // Use high quality only for fast connections
        if (effectiveType === '4g' && downlink > 3) {
          selectedSource = sources.high;
        }
      }
    } else {
      // No connection API, assume decent connection
      selectedSource = sources.high;
    }

    setVideoSrc(selectedSource);
  }, [sources]);

  // Handle video load success
  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  // Handle video errors - fallback to lower quality or poster
  const handleError = () => {
    console.warn('Video failed to load:', videoSrc);

    // If high quality failed, try low quality
    if (videoSrc === sources.high && sources.low) {
      setVideoSrc(sources.low);
    } else {
      // All sources failed
      setHasError(true);
      if (onError) {
        onError();
      }
    }
  };

  // Ensure video plays when ready
  useEffect(() => {
    if (videoRef.current && isLoaded && autoPlay) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      };
      playVideo();
    }
  }, [isLoaded, autoPlay]);

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
      preload="auto"
      onLoadedData={handleLoadedData}
      onError={handleError}
    />
  );
};

export default AdaptiveVideo;
