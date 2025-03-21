"use client"

import { useState, useEffect } from 'react';

// This component wraps the SVG with gradient that's causing hydration issues
const Gradient = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // During server rendering, use a simplified placeholder gradient
  if (!mounted) {
    return (
      <svg className="gradient-placeholder" width="0" height="0">
        {/* Empty or simplified version that won't change */}
      </svg>
    );
  }
  
  // On client side, render the actual gradient
  return children;
};

export default Gradient; 