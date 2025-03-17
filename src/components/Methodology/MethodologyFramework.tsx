"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// Framework data with detailed information
const frameworksData = [
  {
    id: 1,
    title: "D3 Data Framework",
    icon: "/images/solutions/discovery.svg",
    color: "bg-primary",
    description: "Our proprietary Discover, Develop, Deploy framework ensures a comprehensive approach to every data challenge.",
    phases: [
      {
        name: "Discover",
        description: "Deep analysis of business context, data landscape, and requirements",
        activities: [
          "Stakeholder interviews",
          "Data profiling & quality assessment",
          "System architecture review",
          "Requirements prioritization"
        ]
      },
      {
        name: "Develop",
        description: "Iterative solution development with continuous feedback",
        activities: [
          "Solution architecture design",
          "Agile development sprints",
          "Continuous integration/deployment",
          "Automated testing"
        ]
      },
      {
        name: "Deploy",
        description: "Controlled implementation with thorough validation",
        activities: [
          "Deployment planning",
          "Environment preparation",
          "Rollout strategy execution",
          "Post-deployment monitoring"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Impact Assessment Matrix",
    icon: "/images/solutions/analysis.svg",
    color: "bg-[#8C5CFF]",
    description: "Our Impact Assessment Matrix helps prioritize initiatives based on business value and implementation complexity.",
    diagram: {
      quadrants: [
        { name: "Quick Wins", position: "top-left", description: "High value, low complexity initiatives that deliver immediate impact" },
        { name: "Strategic Projects", position: "top-right", description: "High value, high complexity initiatives that require careful planning" },
        { name: "Fill-in Projects", position: "bottom-left", description: "Low value, low complexity initiatives that can be done opportunistically" },
        { name: "Reconsider", position: "bottom-right", description: "Low value, high complexity initiatives that should be deprioritized" }
      ],
      axes: [
        { name: "Business Value", position: "vertical" },
        { name: "Implementation Complexity", position: "horizontal" }
      ]
    }
  },
  {
    id: 3,
    title: "Agile Data Methodology",
    icon: "/images/solutions/development.svg",
    color: "bg-[#33C381]",
    description: "We apply agile principles specifically optimized for data projects, with sprints focused on delivering tangible outcomes at each stage.",
    principles: [
      { name: "Iterative Development", description: "Building solutions incrementally through time-boxed sprints" },
      { name: "Continuous Feedback", description: "Regular demos and feedback sessions to ensure alignment" },
      { name: "Adaptive Planning", description: "Flexibility to adjust priorities based on emerging insights" },
      { name: "Cross-functional Teams", description: "Combining data engineers, analysts, and domain experts" },
      { name: "Automated Testing", description: "Ensuring data quality and solution reliability" }
    ]
  },
  {
    id: 4,
    title: "Technical Excellence Principles",
    icon: "/images/solutions/optimization.svg",
    color: "bg-[#F3901D]",
    description: "Our commitment to technical excellence is governed by core principles: scalability, maintainability, security, and performance.",
    principles: [
      { 
        name: "Scalability", 
        description: "Designing solutions that can handle growing data volumes and user bases",
        techniques: ["Horizontal scaling", "Distributed processing", "Partitioning strategies", "Load balancing"]
      },
      { 
        name: "Maintainability", 
        description: "Creating code and systems that are easy to understand and modify",
        techniques: ["Clean code practices", "Comprehensive documentation", "Modular design", "Automated testing"]
      },
      { 
        name: "Security", 
        description: "Protecting data and systems from unauthorized access and breaches",
        techniques: ["Encryption at rest and in transit", "Role-based access control", "Audit logging", "Vulnerability scanning"]
      },
      { 
        name: "Performance", 
        description: "Optimizing for speed and efficiency in data processing and retrieval",
        techniques: ["Query optimization", "Caching strategies", "Indexing", "Resource allocation"]
      }
    ]
  },
  {
    id: 5,
    title: "Knowledge Transfer Protocol",
    icon: "/images/solutions/training.svg",
    color: "bg-[#E93A76]",
    description: "We've developed a structured approach to knowledge transfer that ensures your team can maintain and extend solutions after our engagement ends.",
    components: [
      { name: "Documentation", items: ["Architecture diagrams", "Code documentation", "Operational runbooks", "Data dictionaries"] },
      { name: "Training", items: ["Hands-on workshops", "Video tutorials", "Guided walkthroughs", "Q&A sessions"] },
      { name: "Collaborative Development", items: ["Pair programming", "Code reviews", "Shadowing", "Mentoring"] },
      { name: "Support Transition", items: ["Phased handover", "On-call support", "Issue resolution guides", "Escalation procedures"] }
    ]
  },
  {
    id: 6,
    title: "Continuous Value Assessment",
    icon: "/images/solutions/monitoring.svg",
    color: "bg-[#1D95E9]",
    description: "Our projects include regular value assessments to quantify the impact of our work and identify opportunities for additional value creation.",
    metrics: [
      { category: "Financial", examples: ["Cost reduction", "Revenue increase", "ROI", "TCO reduction"] },
      { category: "Operational", examples: ["Process efficiency", "Error reduction", "Time savings", "Resource utilization"] },
      { category: "Strategic", examples: ["Market share", "Competitive advantage", "Innovation enablement", "Decision quality"] },
      { category: "Technical", examples: ["System performance", "Scalability", "Reliability", "Security posture"] }
    ]
  }
];

const MethodologyFramework = () => {
  const [activeFramework, setActiveFramework] = useState(1);
  const [expandedSection, setExpandedSection] = useState(null);
  
  const handleSectionToggle = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  const currentFramework = frameworksData.find(f => f.id === activeFramework);

  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-[#F8FAFB] dark:bg-black/20">
      <div className="container">
        <SectionTitle
          title="Our Frameworks"
          paragraph="We've developed a set of powerful frameworks that guide our work and deliver exceptional results for our clients."
          center
          mb="60px"
        />

        {/* Framework selection tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {frameworksData.map((framework) => (
            <button
              key={framework.id}
              onClick={() => {
                setActiveFramework(framework.id);
                setExpandedSection(null);
              }}
              className={`rounded-md px-4 py-3 text-sm font-medium transition-all duration-300 ${
                activeFramework === framework.id
                  ? `${framework.color} text-white shadow-md`
                  : "bg-white text-gray-600 hover:bg-gray-100 dark:bg-dark-2 dark:text-gray-400 dark:hover:bg-dark-3"
              }`}
            >
              {framework.title}
            </button>
          ))}
        </div>
        
        {/* Framework content */}
        <div className="mx-auto max-w-[900px] rounded-xl bg-white p-8 shadow-lg transition-all duration-500 dark:bg-gray-dark">
          <div className="mb-8 flex items-center">
            <div className={`mr-4 flex h-16 w-16 items-center justify-center rounded-md ${currentFramework.color}`}>
              <Image
                src={currentFramework.icon}
                alt={currentFramework.title}
                width={40}
                height={40}
              />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-primary">
                {currentFramework.title}
              </h3>
              <p className="text-base text-body-color dark:text-body-color-dark">
                {currentFramework.description}
              </p>
            </div>
          </div>
          
          {/* D3 Framework */}
          {activeFramework === 1 && (
            <div className="mt-8">
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {currentFramework.phases.map((phase, index) => (
                  <div 
                    key={index}
                    className="rounded-lg bg-gray-50 p-6 transition-all duration-300 hover:shadow-md dark:bg-dark-2"
                  >
                    <h4 className="mb-3 text-xl font-bold text-primary">
                      {phase.name}
                    </h4>
                    <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                      {phase.description}
                    </p>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="mr-2 text-primary">•</span>
                          <span className="text-body-color dark:text-body-color-dark">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Impact Assessment Matrix */}
          {activeFramework === 2 && (
            <div className="mt-8">
              <div className="relative mx-auto h-[300px] w-[300px] rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-dark-2 md:h-[400px] md:w-[400px]">
                {/* Quadrant labels */}
                {currentFramework.diagram.quadrants.map((quadrant, index) => {
                  const positions = {
                    'top-left': 'top-4 left-4',
                    'top-right': 'top-4 right-4',
                    'bottom-left': 'bottom-4 left-4',
                    'bottom-right': 'bottom-4 right-4'
                  };
                  
                  return (
                    <div 
                      key={index}
                      className={`absolute ${positions[quadrant.position]} max-w-[45%] rounded-md bg-white p-2 shadow-md dark:bg-gray-800`}
                    >
                      <h5 className="text-sm font-bold text-primary">{quadrant.name}</h5>
                      <p className="text-xs text-body-color dark:text-body-color-dark">{quadrant.description}</p>
                    </div>
                  );
                })}
                
                {/* Axes */}
                <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-gray-300 dark:bg-gray-600"></div>
                <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-gray-300 dark:bg-gray-600"></div>
                
                {/* Axis labels */}
                <div className="absolute left-1/2 top-2 -translate-x-1/2 transform text-xs font-medium text-gray-500 dark:text-gray-400">
                  High Value
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 transform text-xs font-medium text-gray-500 dark:text-gray-400">
                  Low Value
                </div>
                <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 transform text-xs font-medium text-gray-500 dark:text-gray-400">
                  Low Complexity
                </div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 transform text-xs font-medium text-gray-500 dark:text-gray-400">
                  High Complexity
                </div>
              </div>
            </div>
          )}
          
          {/* Agile Data Methodology */}
          {activeFramework === 3 && (
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {currentFramework.principles.map((principle, index) => (
                  <div 
                    key={index}
                    className="rounded-lg bg-gray-50 p-5 transition-all duration-300 hover:shadow-md dark:bg-dark-2"
                  >
                    <h4 className="mb-2 text-lg font-bold text-primary">
                      {principle.name}
                    </h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Technical Excellence Principles */}
          {activeFramework === 4 && (
            <div className="mt-8">
              <div className="space-y-4">
                {currentFramework.principles.map((principle, index) => (
                  <div 
                    key={index}
                    className="overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 dark:border-gray-700"
                  >
                    <button
                      onClick={() => handleSectionToggle(principle.name)}
                      className="flex w-full items-center justify-between bg-gray-50 p-4 text-left dark:bg-dark-2"
                    >
                      <h4 className="text-lg font-bold text-primary">
                        {principle.name}
                      </h4>
                      <svg 
                        className={`h-5 w-5 transform text-primary transition-transform ${expandedSection === principle.name ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedSection === principle.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-4">
                        <p className="mb-3 text-body-color dark:text-body-color-dark">
                          {principle.description}
                        </p>
                        <div className="mt-2">
                          <h5 className="mb-2 text-sm font-semibold text-black dark:text-white">Key Techniques:</h5>
                          <ul className="grid grid-cols-2 gap-2">
                            {principle.techniques.map((technique, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <span className="mr-2 text-primary">•</span>
                                {technique}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Knowledge Transfer Protocol */}
          {activeFramework === 5 && (
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {currentFramework.components.map((component, index) => (
                  <div 
                    key={index}
                    className="rounded-lg bg-gray-50 p-5 transition-all duration-300 hover:shadow-md dark:bg-dark-2"
                  >
                    <h4 className="mb-3 text-lg font-bold text-primary">
                      {component.name}
                    </h4>
                    <ul className="space-y-2">
                      {component.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="mr-2 text-primary">•</span>
                          <span className="text-body-color dark:text-body-color-dark">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Continuous Value Assessment */}
          {activeFramework === 6 && (
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {currentFramework.metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="rounded-lg bg-gray-50 p-5 transition-all duration-300 hover:shadow-md dark:bg-dark-2"
                  >
                    <h4 className="mb-3 text-lg font-bold text-primary">
                      {metric.category} Metrics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {metric.examples.map((example, idx) => (
                        <span 
                          key={idx} 
                          className="rounded-full bg-primary bg-opacity-10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MethodologyFramework; 