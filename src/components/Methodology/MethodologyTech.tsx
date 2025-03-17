"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Tech frameworks data organized by category
const frameworksData = {
  all: [
    { id: 1, name: "D3 Framework", icon: "/images/solutions/discovery.svg", category: "data" },
    { id: 2, name: "Impact Matrix", icon: "/images/solutions/analysis.svg", category: "assessment" },
    { id: 3, name: "Agile Data", icon: "/images/solutions/development.svg", category: "delivery" },
    { id: 4, name: "Tech Excellence", icon: "/images/solutions/optimization.svg", category: "technical" },
    { id: 5, name: "Knowledge Transfer", icon: "/images/solutions/training.svg", category: "knowledge" },
    { id: 6, name: "Value Assessment", icon: "/images/solutions/monitoring.svg", category: "assessment" },
    { id: 7, name: "Data Strategy", icon: "/images/solutions/data-strategy.svg", category: "data" },
    { id: 8, name: "Solution Design", icon: "/images/solutions/design.svg", category: "technical" }
  ]
};

// Categories for filtering
const categories = [
  { id: "all", name: "All Frameworks" },
  { id: "data", name: "Data Frameworks" },
  { id: "technical", name: "Technical Frameworks" },
  { id: "delivery", name: "Delivery Frameworks" },
  { id: "assessment", name: "Assessment Frameworks" }
];

// Create filtered data by category
categories.forEach(category => {
  if (category.id !== "all") {
    frameworksData[category.id] = frameworksData.all.filter(framework => framework.category === category.id);
  }
});

const MethodologyTech = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleFrameworks, setVisibleFrameworks] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize visible frameworks on component mount
  useEffect(() => {
    const initialIndices = Array.from({ length: frameworksData.all.length }, (_, i) => i);
    setVisibleFrameworks(initialIndices);
    
    // Small delay to ensure all icons are loaded
    const timer = setTimeout(() => {
      showAllItems("all");
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle tab changes with animation
  const handleTabChange = (tabId) => {
    if (isAnimating || activeTab === tabId) return;
    
    setIsAnimating(true);
    
    // First hide all items
    setVisibleFrameworks([]);
    
    // Then change tab and show new items
    setTimeout(() => {
      setActiveTab(tabId);
      showAllItems(tabId);
    }, 300);
  };

  // Animate items appearing
  const showAllItems = (tabId) => {
    const data = frameworksData[tabId];
    const newVisibleFrameworks = [];
    
    // Pre-calculate all indices to avoid race conditions
    data.forEach((_, index) => {
      newVisibleFrameworks.push(index);
    });
    
    // Apply all indices at once
    setVisibleFrameworks(newVisibleFrameworks);
    setIsAnimating(false);
  };

  return (
    <section className="py-20 dark:bg-dark-2 bg-slate-50">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Our Frameworks
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-[45px]">
            Proven Technical Frameworks
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            We've developed a set of proprietary frameworks that guide our work and ensure consistent results
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center rounded-lg border border-[#E7E7E7] dark:border-dark-3 bg-white shadow-md dark:bg-dark-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleTabChange(category.id)}
              className={`m-1 rounded-md py-3 px-5 text-base font-medium transition md:m-2 ${
                activeTab === category.id
                  ? "bg-primary text-white"
                  : "bg-transparent text-body-color hover:bg-primary hover:text-white dark:text-body-color-dark"
              }`}
              disabled={isAnimating}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Frameworks grid */}
        <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-4">
          {frameworksData[activeTab].map((framework, index) => (
            <div
              key={framework.id}
              className={`group relative flex h-[140px] items-center justify-center overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-dark-2 ${
                visibleFrameworks.includes(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms`, transition: "all 0.3s ease" }}
            >
              <div className="flex flex-col items-center">
                <div className="relative h-16 w-16 mb-4">
                  <Image
                    src={framework.icon || "/images/solutions/placeholder.svg"}
                    alt={framework.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-center text-base font-medium text-body-color dark:text-body-color-dark">
                  {framework.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 rounded-lg bg-primary/[0.05] p-8 dark:bg-dark">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-3/4">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Interested in our methodology?
              </h3>
              <p className="mb-4 text-base font-medium text-body-color dark:text-body-color-dark lg:mb-0">
                Learn how our frameworks and approaches can help solve your specific data challenges.
              </p>
            </div>
            <div className="w-full lg:w-1/4 lg:text-right">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-7 text-center text-base font-medium text-white hover:bg-primary/90"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyTech; 