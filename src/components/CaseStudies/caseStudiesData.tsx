import { CaseStudy } from "@/types/caseStudy";

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "Digital Transformation for Global Retail Chain",
    summary: "How we helped a major retail chain modernize their digital infrastructure and increase online sales by 150%",
    challenge: "The client needed to modernize their legacy systems and create a seamless omnichannel experience for customers.",
    solution: "Implemented a modern microservices architecture and developed a new mobile-first e-commerce platform.",
    results: [
      "150% increase in online sales",
      "40% improvement in customer satisfaction",
      "60% reduction in system maintenance costs"
    ],
    image: "/images/case-studies/retail-transformation.jpg",
    company: {
      name: "Global Retail Co",
      logo: "/images/case-studies/company-logos/retail-co.png",
      industry: "Retail"
    },
    tags: ["Digital Transformation", "E-commerce", "Retail"],
    publishDate: "2024"
  },
  {
    id: 2,
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
      name: "TechServe Solutions",
      logo: "/images/case-studies/company-logos/techserve.png",
      industry: "Technology"
    },
    tags: ["Artificial Intelligence", "Customer Service", "Technology"],
    publishDate: "2024"
  },
  {
    id: 3,
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
      name: "HealthCare Plus",
      logo: "/images/case-studies/company-logos/healthcare-plus.png",
      industry: "Healthcare"
    },
    tags: ["Healthcare", "Data Analytics", "Security"],
    publishDate: "2024"
  }
];

export default caseStudiesData; 