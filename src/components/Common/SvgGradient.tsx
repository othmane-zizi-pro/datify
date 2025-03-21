"use client"

import { useState, useEffect } from 'react';

const SvgComponent = () => {
  // Default to a consistent value for server rendering
  const [stopColor, setStopColor] = useState("#fff");
  
  useEffect(() => {
    // Only update on the client
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setStopColor(isDarkMode ? "#4A6CF7" : "#fff");
  }, []);
  
  return (
    <svg>
      <linearGradient>
        <stop stopColor={stopColor} />
        {/* more stops... */}
      </linearGradient>
    </svg>
  );
}; 