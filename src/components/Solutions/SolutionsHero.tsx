"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const SolutionsHero = () => {
  // Animation states for dynamic content
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const phrases = [
    "transform your data",
    "unlock insights",
    "drive growth",
    "make informed decisions",
    "optimize operations"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate through phrases for the dynamic text effect
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
      {/* Animated particles background */}
      <div className="absolute inset-0 z-[-1]" id="particles-bg">
        <div className="particles-container h-full w-full">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="particle absolute rounded-full bg-primary/10 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div 
              className={`max-w-[570px] transition-all duration-700 ease-in-out transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Data solutions that{" "}
                <span className="text-primary relative whitespace-nowrap">
                  {phrases[currentIndex]}
                  <span className="absolute left-0 -bottom-0 h-1 bg-primary w-full"></span>
                </span>
              </h1>
              <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                Our cutting-edge data solutions help organizations harness the power of their data through advanced analytics, machine learning, and custom data architectures.
              </p>
              
              <div className="flex flex-col items-start space-y-6 sm:flex-row sm:space-x-5 sm:space-y-0">
                {/* Stats with counting animation */}
                <div 
                  className="rounded-md bg-primary/[.05] p-6 dark:bg-white/[.05] transition-all duration-700 ease-in-out"
                  style={{ transitionDelay: '300ms' }}
                >
                  <h2 className="mb-3 text-2xl font-bold leading-tight text-black dark:text-white">
                    <CountUp end={98} duration={2} />%
                  </h2>
                  <p className="mb-0 text-base font-medium text-body-color">
                    Client retention rate
                  </p>
                </div>
                <div 
                  className="rounded-md bg-primary/[.05] p-6 dark:bg-white/[.05] transition-all duration-700 ease-in-out"
                  style={{ transitionDelay: '500ms' }}
                >
                  <h2 className="mb-3 text-2xl font-bold leading-tight text-black dark:text-white">
                    <CountUp end={100} duration={2} />+
                  </h2>
                  <p className="mb-0 text-base font-medium text-body-color">
                    Projects delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden px-4 lg:block lg:w-1/2">
            <div 
              className={`relative z-10 text-center transition-all duration-700 ease-in-out transform ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <Image
                src="/images/hero/data-visualization.svg"
                alt="Hero"
                width={500}
                height={500}
                className="dark:hidden"
              />
              <Image
                src="/images/hero/data-visualization-dark.svg"
                alt="Hero"
                width={500}
                height={500}
                className="hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CountUp component for animated numbers
const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrameId;
    
    const countUp = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(countUp);
      }
    };
    
    animationFrameId = requestAnimationFrame(countUp);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);
  
  return <>{count}</>;
};

export default SolutionsHero; 