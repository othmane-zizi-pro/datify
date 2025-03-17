"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Tech stack data organized by category
const techData = {
  all: [
    { id: 1, name: "Python", icon: "/images/brands/python.svg", category: "languages" },
    { id: 2, name: "AWS", icon: "/images/brands/aws.svg", category: "cloud" },
    { id: 3, name: "TensorFlow", icon: "/images/brands/tensorflow.svg", category: "ai" },
    { id: 4, name: "Snowflake", icon: "/images/brands/snowflake.svg", category: "data-warehouse" },
    { id: 5, name: "Databricks", icon: "/images/brands/databricks.svg", category: "data-platform" },
    { id: 6, name: "Apache Kafka", icon: "/images/brands/kafka.svg", category: "streaming" },
    { id: 7, name: "Docker", icon: "/images/brands/docker.svg", category: "devops" },
    { id: 8, name: "Kubernetes", icon: "/images/brands/kubernetes.svg", category: "devops" },
    { id: 9, name: "PostgreSQL", icon: "/images/brands/postgres.svg", category: "database" },
    { id: 10, name: "MongoDB", icon: "/images/brands/mongo.svg", category: "database" },
    { id: 11, name: "Tableau", icon: "/images/brands/tableau.svg", category: "visualization" },
    { id: 12, name: "Power BI", icon: "/images/brands/powerbi.svg", category: "visualization" },
    { id: 13, name: "Azure", icon: "/images/brands/azure.svg", category: "cloud" },
    { id: 14, name: "Google Cloud", icon: "/images/brands/gcp.svg", category: "cloud" },
    { id: 15, name: "Spark", icon: "/images/brands/spark.svg", category: "big-data" },
    { id: 16, name: "Airflow", icon: "/images/brands/airflow.svg", category: "orchestration" }
  ]
};

// Categories for filtering
const categories = [
  { id: "all", name: "All Technologies" },
  { id: "cloud", name: "Cloud" },
  { id: "data-platform", name: "Data Platforms" },
  { id: "ai", name: "AI & ML" },
  { id: "visualization", name: "Visualization" }
];

// Create filtered data by category
categories.forEach(category => {
  if (category.id !== "all") {
    techData[category.id] = techData.all.filter(tech => tech.category === category.id);
  }
});

const SolutionsTech = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleTechs, setVisibleTechs] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Initial animation
    setAnimate(true);
    const timer = setTimeout(() => {
      showAllItems();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle tab changes with animation
  const handleTabChange = (tabId) => {
    setAnimate(false);
    setVisibleTechs([]);
    
    setTimeout(() => {
      setActiveTab(tabId);
      setAnimate(true);
      showAllItems();
    }, 300);
  };

  // Animate items appearing
  const showAllItems = () => {
    const data = techData[activeTab];
    data.forEach((_, index) => {
      setTimeout(() => {
        setVisibleTechs(prev => [...prev, index]);
      }, index * 100);
    });
  };

  return (
    <section className="py-20 dark:bg-dark-2 bg-slate-50">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Technology Stack
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Powered by Leading Technology
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            We leverage best-in-class technologies to build scalable, efficient solutions
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
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Tech grid */}
        <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {techData[activeTab].map((tech, index) => (
            <div
              key={tech.id}
              className={`animate-fade-in group relative flex h-[120px] items-center justify-center overflow-hidden rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-dark-2 ${
                animate && visibleTechs.includes(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="relative h-12 w-12 mb-3">
                  <Image
                    src={tech.icon || "/images/brands/placeholder.svg"}
                    alt={tech.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-center text-sm font-medium text-body-color dark:text-body-color-dark">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tech expertise CTA */}
        <div className="mt-16 rounded-lg bg-primary/[0.05] p-8 dark:bg-dark">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-3/4">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Can't see a technology you need?
              </h3>
              <p className="mb-4 text-base font-medium text-body-color dark:text-body-color-dark lg:mb-0">
                Our expertise extends beyond the technologies listed. Contact us to discuss your specific requirements.
              </p>
            </div>
            <div className="w-full lg:w-1/4 lg:text-right">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-7 text-center text-base font-medium text-white hover:bg-primary/90"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsTech; 