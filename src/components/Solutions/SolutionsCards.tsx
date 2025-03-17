"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Service data with icons, descriptions, and more info links
const servicesData = [
  {
    id: 1,
    icon: "/images/solutions/data-engineering.svg",
    title: "Data Engineering",
    description: "Build robust data pipelines and architectures that transform raw data into valuable assets",
    features: [
      "Data pipeline development",
      "ETL/ELT processes",
      "Data warehouse design",
      "Real-time data processing"
    ],
    moreLink: "/contact",
    bgColor: "bg-[#F8F9FF]",
    darkBgColor: "dark:bg-[#1D2144]"
  },
  {
    id: 2,
    icon: "/images/solutions/analytics.svg",
    title: "Advanced Analytics",
    description: "Uncover actionable insights from your data with sophisticated analytics solutions",
    features: [
      "Business intelligence",
      "Predictive analytics",
      "Dashboards & reporting",
      "Data visualization"
    ],
    moreLink: "/contact",
    bgColor: "bg-[#F5F2FF]",
    darkBgColor: "dark:bg-[#1A1B39]"
  },
  {
    id: 3,
    icon: "/images/solutions/machine-learning.svg",
    title: "AI & Machine Learning",
    description: "Implement cutting-edge AI and ML models to solve complex business problems",
    features: [
      "Predictive models",
      "Natural language processing",
      "Computer vision",
      "Recommendation engines"
    ],
    moreLink: "/contact",
    bgColor: "bg-[#EEFBF4]",
    darkBgColor: "dark:bg-[#162034]"
  },
  {
    id: 4,
    icon: "/images/solutions/data-strategy.svg",
    title: "Data Strategy",
    description: "Develop comprehensive data strategies aligned with your business objectives",
    features: [
      "Data governance",
      "Data quality management",
      "Strategy roadmapping",
      "Data maturity assessment"
    ],
    moreLink: "/contact",
    bgColor: "bg-[#FFF8F0]",
    darkBgColor: "dark:bg-[#1D1E3A]"
  },
  {
    id: 5,
    icon: "/images/solutions/cloud.svg",
    title: "Cloud Data Solutions",
    description: "Leverage cloud platforms for scalable, cost-effective data architectures",
    features: [
      "Cloud migration",
      "Data lake implementation",
      "Cloud data warehousing",
      "Serverless architectures"
    ],
    moreLink: "/contact",
    bgColor: "bg-[#F0F9FF]",
    darkBgColor: "dark:bg-[#181D3A]"
  },
  {
    id: 6,
    icon: "/images/solutions/integration.svg",
    title: "Data Integration",
    description: "Connect disparate systems and data sources for a unified view of your business",
    features: [
      "API development",
      "System integration",
      "Custom connectors",
      "iPaaS solutions"
    ],
    moreLink: "/contact",
    bgColor: "bg-[#FFF0F8]",
    darkBgColor: "dark:bg-[#1E1B38]"
  }
];

const SolutionsCards = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Initialize all items as visible immediately
    const allIndices = Array.from({ length: servicesData.length }, (_, i) => i);
    
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      setVisibleItems(allIndices);
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[590px] text-center md:mb-16 lg:mb-20">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Our Services
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-[45px]">
            Comprehensive Data Solutions
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            Explore our full suite of data and analytics services designed to solve your most complex challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              className={`${service.bgColor} ${service.darkBgColor} transform transition-all duration-500 ease-in-out ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative overflow-hidden rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-primary bg-opacity-10 text-primary">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    width={40} 
                    height={40} 
                    priority={index < 3}
                  />
                </div>
                
                <h3 className="mb-4 text-xl font-bold text-black duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                  {service.title}
                </h3>
                
                <p className="mb-6 text-body-color dark:text-body-color-dark">
                  {service.description}
                </p>
                
                <div className="mb-7">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-body-color dark:text-body-color-dark">
                        <span className="mr-2 text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={service.moreLink}
                  className="inline-flex items-center text-sm font-medium text-primary hover:opacity-80"
                >
                  Learn More
                  <span className="ml-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" fill="currentColor" />
                    </svg>
                  </span>
                </Link>
                
                {/* Decorative element */}
                <div className="absolute right-0 top-0 opacity-20">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L60 60H0V0Z" fill="#3056D3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsCards; 