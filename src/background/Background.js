import React, { useEffect, useRef } from 'react';
import '../styles/background.css';
import video from '../assets/bg-universe.mp4';
import fallbackImage from '../assets/fallback-image.png';

const Background = ({ play }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (play && videoRef.current) {
      videoRef.current.play();
    }
  }, [play]);

  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        ref={videoRef}
        playsInline
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default Background;
