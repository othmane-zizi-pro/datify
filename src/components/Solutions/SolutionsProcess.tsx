"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "We begin by thoroughly understanding your business objectives, data landscape, and challenges through stakeholder interviews and system analysis.",
    icon: "/images/solutions/discovery.svg",
    color: "bg-primary"
  },
  {
    id: 2,
    title: "Strategy",
    description: "Based on discovery insights, we develop a comprehensive strategy and roadmap aligned with your business goals and technical requirements.",
    icon: "/images/solutions/strategy.svg",
    color: "bg-[#8C5CFF]"
  },
  {
    id: 3,
    title: "Design",
    description: "Our solution architects create detailed technical designs for data models, pipelines, integrations, and analytics that will solve your challenges.",
    icon: "/images/solutions/design.svg",
    color: "bg-[#33C381]"
  },
  {
    id: 4,
    title: "Development",
    description: "Using agile methodology, we build your solution in sprints with regular demos and feedback cycles to ensure alignment throughout development.",
    icon: "/images/solutions/development.svg",
    color: "bg-[#F3901D]"
  },
  {
    id: 5,
    title: "Testing",
    description: "Comprehensive testing ensures functionality, performance, security, and user experience meet the highest standards before deployment.",
    icon: "/images/solutions/testing.svg",
    color: "bg-[#E93A76]"
  },
  {
    id: 6,
    title: "Deployment",
    description: "We manage a smooth transition to production with careful change management, training, and documentation for your team.",
    icon: "/images/solutions/deployment.svg",
    color: "bg-[#1D95E9]"
  },
  {
    id: 7,
    title: "Support",
    description: "Our engagement continues with ongoing support, optimization, and enhancement to ensure your solution delivers maximum value over time.",
    icon: "/images/solutions/support.svg",
    color: "bg-[#5D50C6]"
  }
];

const SolutionsProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const timelineRef = useRef(null);

  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Automatically cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev % processSteps.length) + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Calculate progress percentage for timeline
  const progressPercentage = ((activeStep - 1) / (processSteps.length - 1)) * 100;

  return (
    <section id="process" className="py-20 dark:bg-dark">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Our Process
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            How We Deliver Solutions
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            Our proven methodology ensures successful outcomes for every data project
          </p>
        </div>
        
        {/* Process visualization */}
        <div className="relative mx-auto max-w-[1000px]">
          {/* Interactive timeline */}
          <div 
            ref={timelineRef}
            className="mb-16 overflow-hidden px-4"
          >
            {/* Progress bar */}
            <div className="relative h-2 w-full rounded-full bg-[#E7E7E7] dark:bg-dark-3">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all duration-500 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            
            {/* Timeline steps */}
            <div className="relative mt-[-8px] flex justify-between">
              {processSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative z-10 flex h-4 w-4 items-center justify-center rounded-full transition-all ${
                    step.id <= activeStep ? step.color : "bg-[#E7E7E7] dark:bg-dark-3"
                  }`}
                >
                  <span 
                    className={`absolute -top-10 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium transition-all ${
                      step.id === activeStep ? "text-primary opacity-100 scale-110" : "text-body-color opacity-70 scale-100"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Active step details */}
          <div className="grid grid-cols-1 items-center gap-8 rounded-lg bg-white p-8 shadow-lg transition-all duration-500 dark:bg-dark-2 md:grid-cols-5">
            <div className="md:col-span-2">
              <div 
                className={`relative mx-auto h-64 w-64 transition-all duration-500 ${
                  activeStep % 2 === 0 ? "rotate-6" : "-rotate-6"
                }`}
              >
                <Image
                  src={processSteps[activeStep - 1].icon || "/images/solutions/placeholder.svg"}
                  alt={processSteps[activeStep - 1].title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h3 className={`mb-4 text-2xl font-bold ${processSteps[activeStep - 1].color.replace('bg-', 'text-')}`}>
                {activeStep}. {processSteps[activeStep - 1].title}
              </h3>
              <p className="mb-6 text-body-color dark:text-body-color-dark">
                {processSteps[activeStep - 1].description}
              </p>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setActiveStep(prev => Math.max(prev - 1, 1))}
                  disabled={activeStep === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary transition hover:bg-opacity-20 disabled:opacity-40"
                >
                  <svg width="8" height="14" viewBox="0 0 8 14" className="fill-current">
                    <path d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" />
                  </svg>
                </button>
                <button 
                  onClick={() => setActiveStep(prev => Math.min(prev + 1, processSteps.length))}
                  disabled={activeStep === processSteps.length}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary transition hover:bg-opacity-20 disabled:opacity-40"
                >
                  <svg width="8" height="14" viewBox="0 0 8 14" className="fill-current">
                    <path d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Learn more link */}
          <div className="mt-10 text-center">
            <Link 
              href="/methodology"
              className="inline-flex items-center text-base font-medium text-primary hover:opacity-80"
            >
              Learn more about our methodology
              <span className="ml-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" fill="currentColor" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsProcess; 