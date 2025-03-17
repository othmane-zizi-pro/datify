"use client";

import { useState, useEffect, useRef, createRef } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// Process steps with detailed technical information
const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Discovery & Analysis",
    description: "We begin with a deep dive into your business, current data landscape, and specific challenges. Through stakeholder interviews, system reviews, and data analysis, we develop a comprehensive understanding of your needs and opportunities.",
    icon: "/images/solutions/discovery.svg",
    color: "bg-primary",
    textColor: "text-primary",
    technicalDetails: [
      { title: "Data Profiling", description: "We analyze your data sources to understand structure, quality, and relationships" },
      { title: "System Architecture Review", description: "We map your current technology stack and identify integration points" },
      { title: "Requirements Gathering", description: "We document functional and non-functional requirements with clear acceptance criteria" },
      { title: "Gap Analysis", description: "We identify gaps between current state and desired capabilities" }
    ]
  },
  {
    id: 2,
    number: "02",
    title: "Strategic Roadmap",
    description: "Based on our findings, we create a detailed roadmap that outlines the technical approach, timeline, resource requirements, and expected outcomes. This strategic plan aligns with your business goals and provides a clear path forward.",
    icon: "/images/solutions/strategy.svg",
    color: "bg-[#8C5CFF]",
    textColor: "text-[#8C5CFF]",
    technicalDetails: [
      { title: "Architecture Blueprint", description: "We design the target architecture with detailed component diagrams" },
      { title: "Technology Selection", description: "We evaluate and recommend optimal technologies based on requirements" },
      { title: "Implementation Phases", description: "We break down the project into logical phases with clear deliverables" },
      { title: "Risk Assessment", description: "We identify potential risks and develop mitigation strategies" }
    ]
  },
  {
    id: 3,
    number: "03",
    title: "Solution Design",
    description: "Our experts design a comprehensive solution architecture that addresses your specific needs. This includes data models, integration points, technology stack recommendations, and security considerations, all documented for clarity and alignment.",
    icon: "/images/solutions/design.svg",
    color: "bg-[#33C381]",
    textColor: "text-[#33C381]",
    technicalDetails: [
      { title: "Data Modeling", description: "We create logical and physical data models optimized for your use cases" },
      { title: "API Design", description: "We design RESTful or GraphQL APIs with comprehensive documentation" },
      { title: "Security Architecture", description: "We implement role-based access control and encryption strategies" },
      { title: "Infrastructure as Code", description: "We develop infrastructure templates for consistent deployments" }
    ]
  },
  {
    id: 4,
    number: "04",
    title: "Agile Development",
    description: "We implement the solution using agile methodology, breaking the work into manageable sprints with regular demonstrations and feedback sessions. This approach ensures visibility, quality, and the ability to adapt as needed.",
    icon: "/images/solutions/development.svg",
    color: "bg-[#F3901D]",
    textColor: "text-[#F3901D]",
    technicalDetails: [
      { title: "CI/CD Pipeline Setup", description: "We establish automated build, test, and deployment pipelines" },
      { title: "Code Quality Standards", description: "We implement linting, code reviews, and test coverage requirements" },
      { title: "Sprint Planning", description: "We organize work into 2-week sprints with clear acceptance criteria" },
      { title: "Feature Branching Strategy", description: "We use Git-flow or trunk-based development depending on project needs" }
    ]
  },
  {
    id: 5,
    number: "05",
    title: "Testing & Validation",
    description: "Every solution undergoes rigorous testing including unit tests, integration tests, performance testing, and user acceptance testing. We validate not just the functionality but also the business value and user experience.",
    icon: "/images/solutions/testing.svg",
    color: "bg-[#E93A76]",
    textColor: "text-[#E93A76]",
    technicalDetails: [
      { title: "Automated Testing", description: "We develop comprehensive test suites for unit, integration, and E2E testing" },
      { title: "Performance Testing", description: "We conduct load and stress tests to ensure scalability and responsiveness" },
      { title: "Data Validation", description: "We verify data integrity, transformation accuracy, and business rule compliance" },
      { title: "Security Testing", description: "We perform vulnerability scanning and penetration testing" }
    ]
  },
  {
    id: 6,
    number: "06",
    title: "Deployment & Training",
    description: "We carefully manage the deployment process to minimize disruption and ensure a smooth transition. Comprehensive training and documentation ensure your team is equipped to leverage the new solution effectively.",
    icon: "/images/solutions/deployment.svg",
    color: "bg-[#0EA5E9]",
    textColor: "text-[#0EA5E9]",
    technicalDetails: [
      { title: "Deployment Strategy", description: "We implement blue-green or canary deployment approaches to minimize risk" },
      { title: "Environment Configuration", description: "We ensure consistent configuration across development, staging, and production" },
      { title: "Rollback Planning", description: "We establish clear procedures for handling deployment issues" },
      { title: "Knowledge Transfer", description: "We conduct hands-on training sessions and create comprehensive documentation" }
    ]
  },
  {
    id: 7,
    number: "07",
    title: "Ongoing Support & Optimization",
    description: "Our relationship doesn't end at deployment. We provide ongoing support, monitor performance, and continuously identify opportunities for optimization and enhancement to maximize long-term value.",
    icon: "/images/solutions/support.svg",
    color: "bg-[#5D50C6]",
    textColor: "text-[#5D50C6]",
    technicalDetails: [
      { title: "Monitoring Setup", description: "We implement comprehensive monitoring for performance, errors, and availability" },
      { title: "Incident Response", description: "We establish clear procedures for handling production issues" },
      { title: "Performance Tuning", description: "We continuously optimize database queries, caching, and resource utilization" },
      { title: "Feature Enhancement", description: "We implement new capabilities based on evolving business needs" }
    ]
  },
  {
    id: 8,
    number: "08",
    title: "Value Assessment",
    description: "We conduct regular assessments to quantify the impact of our solutions on your business. These reviews measure ROI, identify new opportunities, and ensure the solution continues to align with your evolving business needs.",
    icon: "/images/solutions/analysis.svg",
    color: "bg-[#1D95E9]",
    textColor: "text-[#1D95E9]",
    technicalDetails: [
      { title: "KPI Tracking", description: "We measure key performance indicators against baseline metrics" },
      { title: "Usage Analytics", description: "We analyze user adoption and feature utilization patterns" },
      { title: "Cost Optimization", description: "We identify opportunities to reduce infrastructure and operational costs" },
      { title: "Roadmap Refinement", description: "We adjust future plans based on actual results and changing priorities" }
    ]
  }
];

const MethodologyProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedStep, setExpandedStep] = useState(1);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const stepRefs = useRef([]);
  const detailRefs = useRef([]);
  
  // Initialize refs for each step
  useEffect(() => {
    stepRefs.current = Array(processSteps.length).fill(null).map((_, i) => stepRefs.current[i] || createRef());
    detailRefs.current = Array(processSteps.length).fill(null).map((_, i) => detailRefs.current[i] || createRef());
  }, []);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
      
      // Determine which step is most visible in the viewport
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      
      let closestStep = 1;
      let closestDistance = Infinity;
      
      stepRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestStep = index + 1;
          }
        }
      });
      
      // Update active step
      setActiveStep(closestStep);
      
      // Mimic click behavior - when a step becomes active, expand its details
      setExpandedStep(closestStep);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
    setExpandedStep(stepId);
    
    // Scroll to the clicked step
    if (stepRefs.current[stepId - 1]?.current) {
      const yOffset = -100; // Adjust as needed
      const y = stepRefs.current[stepId - 1].current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  const currentStep = processSteps.find(step => step.id === activeStep);
  
  // Calculate progress percentage for timeline
  const progressPercentage = ((activeStep - 1) / (processSteps.length - 1)) * 100;

  return (
    <section 
      ref={sectionRef}
      className="pt-16 pb-20 md:pt-20 md:pb-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Proven Process"
          paragraph="We follow a structured yet flexible process that ensures quality, transparency, and successful outcomes for every project."
          center
          mb="60px"
        />

        <div className="lg:flex lg:gap-8">
          {/* Timeline side */}
          <div className="lg:w-5/12" ref={timelineRef}>
            {/* Interactive process timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[15px] top-0 h-full w-[2px] bg-gray-200 dark:bg-gray-700 lg:hidden">
                <div 
                  className="absolute top-0 left-0 w-full bg-primary transition-all duration-500 ease-in-out"
                  style={{ height: `${progressPercentage}%` }}
                ></div>
              </div>
              
              {/* Timeline steps */}
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div 
                    key={step.id}
                    ref={stepRefs.current[step.id - 1]}
                    className={`relative transition-all duration-500 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(step.id - 1) * 100}ms` }}
                  >
                    {/* Timeline dot for mobile */}
                    <div 
                      className={`lg:hidden absolute left-[15px] z-10 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border-4 border-white dark:border-gray-800 ${
                        activeStep === step.id 
                          ? `${step.color} border-white shadow-lg dark:border-gray-800` 
                          : 'bg-gray-200 hover:scale-110'
                      }`}
                      onClick={() => handleStepClick(step.id)}
                    ></div>
                    
                    {/* Content */}
                    <div className="ml-12 lg:ml-0">
                      <div 
                        className={`cursor-pointer rounded-lg bg-white p-6 shadow-md transition-all duration-300 dark:bg-gray-dark ${
                          activeStep === step.id 
                            ? `ring-2 ${step.color} shadow-lg` 
                            : 'hover:shadow-lg hover:translate-x-1'
                        }`}
                        onClick={() => handleStepClick(step.id)}
                      >
                        <div className="mb-3 flex items-center">
                          <div className={`mr-4 flex h-10 w-10 items-center justify-center rounded-md ${step.color}`}>
                            <span className="text-lg font-bold text-white">{step.number}</span>
                          </div>
                          <h3 className={`text-xl font-bold ${step.textColor}`}>
                            {step.title}
                          </h3>
                          
                          {/* Arrow indicator for active step */}
                          {activeStep === step.id && (
                            <div className="ml-auto lg:hidden">
                              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-body-color dark:text-body-color-dark">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Expanded details for each step (visible on mobile) */}
                    <div 
                      className={`mt-6 mb-12 ml-12 lg:hidden transition-all duration-500 ${
                        activeStep === step.id ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'
                      }`}
                    >
                      {activeStep === step.id && (
                        <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-dark">
                          <h4 className="mb-4 text-lg font-bold text-black dark:text-white">
                            Technical Implementation Details
                          </h4>
                          
                          <div className="grid grid-cols-1 gap-4">
                            {step.technicalDetails.map((detail, index) => {
                              // Extract color code from the background color class for shadow
                              const colorMatch = step.color.match(/\[#([A-Fa-f0-9]+)\]/);
                              
                              // Determine border color class based on the step
                              let borderColorClass = '';
                              if (colorMatch) {
                                borderColorClass = `border-[#${colorMatch[1]}]`;
                              } else if (step.color === 'bg-primary') {
                                borderColorClass = 'border-primary';
                              }
                              
                              const cardClass = `rounded-lg border-l-4 ${borderColorClass} bg-gray-50 p-4 dark:bg-dark-2 transition-all duration-300 hover:scale-[1.02]`;
                              
                              return (
                                <div 
                                  key={index}
                                  className={cardClass}
                                >
                                  <h5 className={`mb-2 text-base font-bold ${step.textColor}`}>
                                    {detail.title}
                                  </h5>
                                  <p className="text-sm text-body-color dark:text-body-color-dark">
                                    {detail.description}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Vertical Timeline for desktop */}
          <div className="hidden lg:block lg:w-1/12 relative">
            <div className="sticky top-28 h-[80vh] flex items-center">
              <div className="relative h-full w-[2px] bg-gray-200 dark:bg-gray-700 mx-auto">
                <div 
                  className="absolute top-0 left-0 w-full bg-primary transition-all duration-500 ease-in-out"
                  style={{ height: `${progressPercentage}%` }}
                ></div>
                
                {processSteps.map((step) => {
                  const stepColorClass = activeStep === step.id 
                    ? step.color
                    : activeStep > step.id 
                      ? 'bg-primary' 
                      : 'bg-gray-200 dark:bg-gray-700';
                  
                  // Determine text color based on step status
                  const textColorClass = activeStep === step.id 
                    ? 'text-white' 
                    : activeStep > step.id 
                      ? 'text-white' // White text for completed steps with blue background
                      : 'text-gray-600 dark:text-gray-300';
                  
                  return (
                    <div 
                      key={step.id}
                      onClick={() => handleStepClick(step.id)}
                      className={`absolute left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 flex items-center justify-center ${stepColorClass}`}
                      style={{ 
                        top: `${((step.id - 1) / (processSteps.length - 1)) * 100}%`,
                        width: activeStep === step.id ? '28px' : '24px',
                        height: activeStep === step.id ? '28px' : '24px',
                        borderRadius: '50%',
                        zIndex: 10
                      }}
                    >
                      <span className={`text-xs font-bold ${textColorClass}`}>
                        {step.id}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Expanded technical details side (desktop) */}
          <div className="hidden lg:block lg:w-5/12 relative">
            <div className="sticky top-28">
              {processSteps.map((step) => (
                <div 
                  key={step.id}
                  ref={detailRefs.current[step.id - 1]}
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                    expandedStep === step.id 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  <div 
                    className="rounded-xl bg-white p-8 shadow-lg transition-all duration-500 dark:bg-gray-dark"
                    style={{
                      boxShadow: `0 10px 25px ${
                        step.color.match(/\[#([A-Fa-f0-9]+)\]/) 
                          ? `rgba(${parseInt(step.color.match(/\[#([A-Fa-f0-9]+)\]/)[1].substring(0, 2), 16)}, 
                                  ${parseInt(step.color.match(/\[#([A-Fa-f0-9]+)\]/)[1].substring(2, 4), 16)}, 
                                  ${parseInt(step.color.match(/\[#([A-Fa-f0-9]+)\]/)[1].substring(4, 6), 16)}, 0.15)` 
                          : step.color === 'bg-primary' 
                            ? 'rgba(48, 86, 211, 0.15)' 
                            : 'rgba(0, 0, 0, 0.1)'
                      }`
                    }}
                  >
                    <div className="mb-6 flex items-center">
                      <div className={`mr-4 flex h-16 w-16 items-center justify-center rounded-md ${step.color}`}>
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={40}
                          height={40}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <span className={`text-sm font-semibold ${step.textColor}`}>
                          Step {step.number}
                        </span>
                        <h3 className="text-2xl font-bold text-primary">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="mb-8 text-body-color dark:text-body-color-dark">
                      {step.description}
                    </p>
                    
                    <h4 className="mb-4 text-lg font-bold text-black dark:text-white">
                      Technical Implementation Details
                    </h4>
                    
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {step.technicalDetails.map((detail, index) => {
                        // Extract color code from the background color class for shadow
                        const colorMatch = step.color.match(/\[#([A-Fa-f0-9]+)\]/);
                        
                        // Shadow style using the step's color
                        const shadowStyle = {
                          boxShadow: `0 5px 15px ${
                            colorMatch 
                              ? `rgba(${parseInt(colorMatch[1].substring(0, 2), 16)}, 
                                      ${parseInt(colorMatch[1].substring(2, 4), 16)}, 
                                      ${parseInt(colorMatch[1].substring(4, 6), 16)}, 0.15)` 
                              : step.color === 'bg-primary' 
                                ? 'rgba(48, 86, 211, 0.15)' 
                                : 'rgba(0, 0, 0, 0.1)'
                          }`
                        };
                        
                        // Determine border color class based on the step
                        let borderColorClass = '';
                        if (colorMatch) {
                          borderColorClass = `border-[#${colorMatch[1]}]`;
                        } else if (step.color === 'bg-primary') {
                          borderColorClass = 'border-primary';
                        }
                        
                        const cardClass = `rounded-lg border-l-4 ${borderColorClass} bg-gray-50 p-4 dark:bg-dark-2 transition-all duration-300 hover:scale-[1.02]`;
                        
                        return (
                          <div 
                            key={index}
                            className={cardClass}
                            style={shadowStyle}
                          >
                            <h5 className={`mb-2 text-base font-bold ${step.textColor}`}>
                              {detail.title}
                            </h5>
                            <p className="text-sm text-body-color dark:text-body-color-dark">
                              {detail.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Stage indicator for desktop */}
            <div className="sticky bottom-10 mt-[80vh]">
              <div className="flex justify-between">
                {processSteps.map((step) => {
                  const buttonClass = activeStep === step.id 
                    ? `${step.color} text-white` 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300';
                  
                  return (
                    <button 
                      key={step.id}
                      onClick={() => handleStepClick(step.id)}
                      className={`hidden h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${buttonClass}`}
                    >
                      {step.id}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyProcess;