"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const MethodologyHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const phrases = [
    "delivers results",
    "scales with you",
    "creates value",
    "transforms data"
  ];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Rotating through phrases
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div 
              className={`max-w-[570px] transition-all duration-700 ease-in-out transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Our methodology{" "}
                <span className="text-primary relative whitespace-nowrap">
                  {phrases[currentIndex]}
                  <span className="absolute left-0 -bottom-0 h-1 bg-primary w-full"></span>
                </span>
              </h1>
              <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                We combine technical excellence with strategic thinking to deliver data solutions that consistently exceed expectations and create lasting value.
              </p>
              
              <div className="flex flex-wrap items-center">
                <Link
                  href="/contact"
                  className="mr-6 inline-flex items-center justify-center rounded-md bg-primary py-3 px-6 text-center text-base font-medium text-white hover:bg-dark dark:hover:bg-primary/90"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center text-base font-medium text-body-color hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  Learn About Our Solutions
                  <span className="ml-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" fill="currentColor" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative z-10 mt-12 lg:mt-0">
              <div 
                className={`relative z-10 mx-auto max-w-[540px] transition-all duration-500 delay-300 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              >
                <Image
                  src="/images/hero/methodology-illustration.svg"
                  alt="methodology illustration"
                  width={540}
                  height={400}
                  className="mx-auto"
                />
              </div>
              
              {/* Decorative circles */}
              <div className="absolute left-0 top-0 -z-10 h-40 w-40 rounded-full bg-gradient-to-r from-primary/20 to-transparent opacity-70 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 -z-10 h-60 w-60 rounded-full bg-gradient-to-l from-primary/20 to-transparent opacity-70 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyHero; 