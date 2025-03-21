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
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const stepRefs = useRef([]);

  // Initialize refs for each step
  useEffect(() => {
    stepRefs.current = Array(processSteps.length).fill(null).map((_, i) => stepRefs.current[i] || React.createRef());
  }, []);
  
  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };
  
  // Function to navigate to next step
  const goToNextStep = () => {
    setActiveStep(prev => Math.min(prev + 1, processSteps.length));
  };
  
  // Function to navigate to previous step
  const goToPrevStep = () => {
    setActiveStep(prev => Math.max(prev - 1, 1));
  };
  
  // Calculate progress percentage for timeline
  const progressPercentage = ((activeStep - 1) / (processSteps.length - 1)) * 100;

  return (
    <section 
      id="process" 
      ref={sectionRef}
      className="py-20 dark:bg-dark"
    >
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
              {processSteps.map((step) => {
                // Determine text color based on step status
                const textColorClass = step.id === activeStep 
                  ? "text-primary opacity-100 scale-110 font-bold" 
                  : step.id < activeStep 
                    ? "text-primary opacity-80" 
                    : "text-gray-400 dark:text-gray-500 opacity-70";
                
                // Determine circle color based on step status
                const circleColorClass = step.id <= activeStep 
                  ? "bg-primary border-primary" 
                  : "bg-white dark:bg-dark border-gray-300 dark:border-gray-700";
                
                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      if (el) stepRefs.current[step.id-1] = el;
                    }}
                    className="relative cursor-pointer text-center group"
                    onClick={() => handleStepClick(step.id)}
                  >
                    {/* Step circle */}
                    <div 
                      className={`mx-auto mb-2 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300 ${circleColorClass} ${step.id === activeStep ? 'scale-125' : 'group-hover:scale-110'}`}
                    ></div>
                    
                    {/* Step label */}
                    <span 
                      className={`block text-sm font-medium transition-all duration-300 ${textColorClass} group-hover:opacity-100`}
                    >
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Process step details */}
          <div className="px-4 min-h-[200px]">
            {processSteps.map((step) => (
              <div 
                key={step.id}
                className={`flex items-center transition-all duration-500 ${
                  step.id === activeStep ? "opacity-100 scale-100 translate-x-0" : 
                  step.id < activeStep ? "opacity-0 scale-95 -translate-x-full absolute" : 
                  "opacity-0 scale-95 translate-x-full absolute"
                }`}
                style={{ 
                  display: step.id === activeStep ? "flex" : "none",
                  transitionDelay: step.id === activeStep ? "150ms" : "0ms"
                }}
              >
                {/* Step icon */}
                <div className={`mr-8 flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${step.color} shadow-md`}>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                  />
                </div>
                
                {/* Step details */}
                <div className="flex-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <button 
              onClick={goToPrevStep}
              disabled={activeStep === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary transition hover:bg-opacity-20 disabled:opacity-40"
              aria-label="Previous step"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" className="fill-current">
                <path d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" />
              </svg>
            </button>
            <button 
              onClick={goToNextStep}
              disabled={activeStep === processSteps.length}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary transition hover:bg-opacity-20 disabled:opacity-40"
              aria-label="Next step"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" className="fill-current">
                <path d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsProcess; 