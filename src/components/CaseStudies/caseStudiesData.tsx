import { CaseStudy } from "@/types/caseStudy";

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "Streamlining Billing and Payments for Integral Treasury",
    summary: "How we helped Integral Treasury streamline their billing and payments process, resulting in a 40% reduction in processing time and a 60% increase in customer satisfaction.",
    challenge: "The client needed to modernize their legacy systems and create a seamless omnichannel experience for customers.",
    solution: "Implemented a modern microservices architecture and developed a new mobile-first e-commerce platform.",
    results: [
      "150% increase in online sales",
      "40% improvement in customer satisfaction",
      "60% reduction in system maintenance costs"
    ],
    image: "/images/case-studies/retail-transformation.jpg",
    company: {
      name: "Integral Treasury",
      logo: "/images/case-studies/company-logos/integral-treasury.png",
      industry: "Crypto"
    },
    tags: ["Digital Transformation", "E-commerce", "Retail"],
    publishDate: "2025"
  },
  {
    id: 2,
    title: "Deploying the global version of the Origin Financial app",
    summary: "How we helped Origin Financial deploy their global version of the app, resulting in a 30% increase in user engagement and a 20% reduction in support requests.",
    challenge: "The healthcare provider needed a way to analyze patient data securely and derive actionable insights.",
    solution: "Created a HIPAA-compliant data analytics platform with advanced visualization capabilities.",
    results: [
      "30% increase in user engagement",  
      "20% reduction in support requests",
      "100% HIPAA compliance maintained"
    ],
    image: "/images/case-studies/healthcare-analytics.jpg",
    company: {
      name: "Origin Financial",
      logo: "/images/case-studies/company-logos/origin-financial.png",
      industry: "FinTech"
    },
    tags: ["Healthcare", "Data Analytics", "Security"],
    publishDate: "2024"
  },
  {
    id: 3,
    title: "AI-Powered Customer Service Platform",
    summary: "Developing an intelligent customer service solution that reduced response times by 80%",
    challenge: "The client was struggling with long customer service response times and increasing support costs.",
    solution: "Developed an AI-powered customer service platform with natural language processing capabilities.",
    results: [
      "80% reduction in response times",
      "65% cost savings in customer support",
      "95% customer satisfaction rate"
    ],
    image: "/images/case-studies/ai-customer-service.jpg",
    company: {
      name: "AMS Africa",
      logo: "/images/case-studies/company-logos/ams-africa.jpeg",
      industry: "Real Estate"
    },
    tags: ["Artificial Intelligence", "Customer Service", "Technology"],
    publishDate: "2023"
  },
  {
    id: 4,
    title: "Healthcare Data Analytics Platform",
    summary: "Building a secure and scalable healthcare analytics platform for better patient outcomes",
    challenge: "The healthcare provider needed a way to analyze patient data securely and derive actionable insights.",
    solution: "Created a HIPAA-compliant data analytics platform with advanced visualization capabilities.",
    results: [
      "30% improvement in patient outcomes",
      "50% reduction in administrative tasks",
      "100% HIPAA compliance maintained"
    ],
    image: "/images/case-studies/healthcare-analytics.jpg",
    company: {
      name: "Premian",
      logo: "/images/case-studies/company-logos/healthcare-plus.png",
      industry: "AI EdTech"
    },
    tags: ["Healthcare", "Data Analytics", "Security"],
    publishDate: "2024"
  }
];

export default caseStudiesData; 