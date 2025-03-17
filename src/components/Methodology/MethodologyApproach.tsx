"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// Data-driven approach pillars
const approachPillars = [
  {
    id: 1,
    title: "Data Strategy",
    description: "We align data initiatives with business objectives through comprehensive strategy development that considers your current state, desired outcomes, and optimal path forward.",
    details: [
      "Business-aligned data roadmaps",
      "Data maturity assessments",
      "Data governance frameworks",
      "ROI-focused prioritization"
    ],
    icon: "/images/solutions/data-strategy.svg",
    color: "bg-[#FFF8F0]",
    textColor: "text-[#F3901D]"
  },
  {
    id: 2,
    title: "Technical Excellence",
    description: "Our solutions are built on a foundation of technical excellence, ensuring scalability, reliability, and performance that meets enterprise standards.",
    details: [
      "Cloud-native architectures",
      "Microservices design patterns",
      "Automated CI/CD pipelines",
      "Infrastructure as code"
    ],
    icon: "/images/solutions/development.svg",
    color: "bg-[#F8F9FF]",
    textColor: "text-primary"
  },
  {
    id: 3,
    title: "Agile Delivery",
    description: "We employ agile methodologies tailored specifically for data projects, delivering value incrementally while maintaining flexibility to adapt to changing requirements.",
    details: [
      "Sprint-based delivery",
      "Continuous integration",
      "Automated testing",
      "Iterative refinement"
    ],
    icon: "/images/solutions/deployment.svg",
    color: "bg-[#F0F9FF]",
    textColor: "text-[#0EA5E9]"
  },
  {
    id: 4,
    title: "Knowledge Transfer",
    description: "We ensure your team can maintain and extend solutions through comprehensive documentation, training, and collaborative development practices.",
    details: [
      "Comprehensive documentation",
      "Hands-on training sessions",
      "Pair programming",
      "Capability building workshops"
    ],
    icon: "/images/solutions/training.svg",
    color: "bg-[#EEFBF4]",
    textColor: "text-[#33C381]"
  }
];

const MethodologyApproach = () => {
  const [activePillar, setActivePillar] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate through pillars
    const interval = setInterval(() => {
      setActivePillar(prev => prev % approachPillars.length + 1);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-white dark:bg-dark">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Our Data-Driven Approach"
                paragraph="We combine deep technical expertise with strategic thinking to deliver solutions that transform how organizations work with data."
                mb="44px"
              />

              {/* Interactive pillars */}
              <div className="mb-8 flex flex-wrap gap-3">
                {approachPillars.map((pillar) => (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activePillar === pillar.id
                        ? `${pillar.color} ${pillar.textColor} shadow-md`
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-dark-2 dark:text-gray-400 dark:hover:bg-dark-3"
                    }`}
                  >
                    {pillar.title}
                  </button>
                ))}
              </div>

              {/* Active pillar content */}
              <div 
                className={`transform transition-all duration-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <div className="mb-6 flex items-center">
                  <div className={`mr-4 flex h-12 w-12 items-center justify-center rounded-md ${approachPillars[activePillar-1].color}`}>
                    <Image
                      src={approachPillars[activePillar-1].icon}
                      alt={approachPillars[activePillar-1].title}
                      width={30}
                      height={30}
                    />
                  </div>
                  <h3 className={`text-2xl font-bold ${approachPillars[activePillar-1].textColor}`}>
                    {approachPillars[activePillar-1].title}
                  </h3>
                </div>
                
                <p className="mb-6 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                  {approachPillars[activePillar-1].description}
                </p>
                
                <ul className="space-y-3">
                  {approachPillars[activePillar-1].details.map((detail, index) => (
                    <li key={index} className="flex items-center">
                      <span className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full ${approachPillars[activePillar-1].color} ${approachPillars[activePillar-1].textColor}`}>
                        <svg width="10" height="8" viewBox="0 0 10 8" className="fill-current">
                          <path d="M9.99976 0.540957C9.99976 0.243235 9.75676 0 9.45904 0H0.540957C0.243235 0 0 0.243235 0 0.540957C0 0.7573 0.122935 0.95041 0.30981 1.05206L4.77877 3.27336C4.91574 3.34914 5.08425 3.34914 5.22122 3.27336L9.69018 1.05206C9.87706 0.95041 9.99999 0.7573 9.99999 0.540957H9.99976Z" />
                        </svg>
                      </span>
                      <span className="text-base font-medium text-body-color dark:text-body-color-dark">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full ${approachPillars[activePillar-1].color} opacity-20 blur-3xl transition-all duration-500`}></div>
                  <Image
                    src={approachPillars[activePillar-1].icon}
                    alt={approachPillars[activePillar-1].title}
                    width={200}
                    height={200}
                    className="relative z-10 transition-all duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyApproach; 