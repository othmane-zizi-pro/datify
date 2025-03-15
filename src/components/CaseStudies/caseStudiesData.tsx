import { CaseStudy } from "@/types/caseStudy";

// Helper function to format multi-line text by removing extra indentation
// and converting single line breaks to spaces (for IDE organization only)
// while preserving intentional double line breaks for paragraphs
// and explicit \n characters for forced line breaks
const formatText = (text: string) => {
  return text
    .trim()
    // First, normalize all line breaks
    .replace(/\r\n|\r|\n/g, '\n')
    // Temporarily replace explicit \n sequences to preserve them
    .replace(/\\n/g, '{{LINE_BREAK}}')
    // Replace single line breaks (not preceded or followed by another line break) with spaces
    .replace(/(?<!\n)\n(?!\n)/g, ' ')
    // Restore explicit line breaks
    .replace(/{{LINE_BREAK}}/g, '\n')
    // Remove leading spaces from each line
    .replace(/^\s+/gm, ''); 
};

// Helper function to create a formatted list with bullet points
const createBulletList = (items: string[]) => {
  return items.map(item => `• ${item}`).join('\n');
};

// Helper function to create an empty line between paragraphs
// Using zero-width space character for truly invisible spacing
const emptyLine = '\n\n\u200B\n\n';

// Alternative helper for empty lines using HTML entities
// This creates a more consistent empty line with non-breaking space
const spacer = '\n\n&nbsp;\n\n';

// Helper for creating a paragraph with bottom margin using HTML
// This is the most reliable way to create consistent spacing
const marginParagraph = (text: string) => `<p style="margin-bottom: 2em;">${text}</p>`;

// Example of how to use line breaks in your case studies:
// 1. Single line break: Just for code organization in the IDE, will be converted to a space
//    Example:
//    "This line 
//     and this line" becomes "This line and this line"
//
// 2. Double line break: Creates a paragraph break in HTML
//    Example:
//    "Paragraph 1
//
//     Paragraph 2" becomes two separate paragraphs
//
// 3. Explicit \n character: Forces a line break in HTML even within the same paragraph
//    IMPORTANT: Use \\n (double backslash) in your text, not \n (single backslash)
//    Example:
//    "Line 1\\nLine 2" creates a line break between "Line 1" and "Line 2"
//
// 4. emptyLine: Creates an empty line between paragraphs (without visible characters)
//
// 5. spacer: Creates an empty line using HTML non-breaking space
//
// 6. marginParagraph: Creates consistent spacing using CSS margins (most reliable)

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "Streamlining Billing and Payments for Integral Treasury",
    summary: formatText(`
      How we helped Integral Treasury streamline their billing and payments process, resulting in a 40% reduction in processing time and a 60% 
      increase in customer satisfaction. 
    `),
    challenge: formatText(`
      The client needed to modernize their legacy systems and create a seamless 
      omnichannel experience for customers. This text will appear on the same line
      because single line breaks are now converted to spaces.
      
      Their existing infrastructure was built on outdated technology that was 
      becoming increasingly expensive to maintain and couldn't support modern features.
      ${emptyLine}
      Customer satisfaction was declining as competitors offered more convenient experiences.
      
      To force a line break within a paragraph, use the character explicitly:
      This text will appear on a new line because of the explicit  character.
      And this will be on another new line.
    `),
    solution: formatText(`
      Implemented a modern microservices architecture and developed a new 
      mobile-first e-commerce platform.
      
      Our approach included:\\n
      • Breaking down the monolithic legacy system into scalable microservices\\n
      • Developing a responsive, mobile-first platform\\n
      • Implementing a unified system across all channels
    `),
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
    summary: formatText(`
      How we helped Origin Financial deploy their global version of the app, 
      resulting in a 30% increase in user engagement and a 20% reduction in support requests.
    `),
    challenge: formatText(`
      ${marginParagraph(`The healthcare provider needed a way to analyze patient data securely 
      and derive actionable insights.`)}
      
      ${marginParagraph(`Key challenges included:
      • Ensuring data security and compliance with international regulations
      • Scaling the application to handle users from multiple countries
      • Adapting to different languages and regional requirements`)}
      
      ${marginParagraph(`This demonstrates using the marginParagraph helper function.
      It creates consistent spacing between paragraphs using CSS margins.
      This is the most reliable approach for creating empty lines.`)}
      
      The following demonstrates different line break techniques:
      
      1. PARAGRAPH BREAKS: Double line breaks create new paragraphs.
      This text is in the same paragraph as the line above.
      
      This text is in a new paragraph because of the double line break above.
      
      2. FORCED LINE BREAKS: Using \\n creates line breaks within paragraphs.
      This line will break here\nAnd continue on a new line\nAnd break again.
      
      3. BULLET POINTS: You can create bullet points with special characters.
      • First bullet point
      • Second bullet point
      • Third bullet point
      
      4. CODE ORGANIZATION: Single line breaks in the code editor
      don't affect the HTML output but make your code more readable.
    `),
    solution: formatText(`
      Created a HIPAA-compliant data analytics platform with advanced 
      visualization capabilities.
      
      Our solution featured:
      • Multi-region deployment with localized content
      • Enhanced security protocols for sensitive financial data
      • Automated translation and region-specific formatting
    `),
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
    summary: formatText(`
      Developing an intelligent customer service solution that reduced 
      response times by 80%
    `),
    challenge: formatText(`
      The client was struggling with long customer service response times 
      and increasing support costs.
      
      They faced several issues:
      ${createBulletList([
        "Growing backlog of customer inquiries",
        "High turnover rate among support staff",
        "Inconsistent quality of responses",
        "Difficulty scaling during peak periods"
      ])}
      
      This demonstrates using the createBulletList helper function to generate
      formatted bullet points automatically from an array of strings.
    `),
    solution: formatText(`
      Developed an AI-powered customer service platform with natural 
      language processing capabilities.
      
      The platform included:
      • Automated response system for common inquiries
      • Sentiment analysis to prioritize urgent customer needs
      • Knowledge base integration for consistent information
    `),
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
    summary: formatText(`
      Building a secure and scalable healthcare analytics platform for 
      better patient outcomes
    `),
    challenge: formatText(`
      The healthcare provider needed a way to analyze patient data securely 
      and derive actionable insights.
      
      Major challenges included:
      • Ensuring HIPAA compliance and data privacy
      • Integrating with existing electronic health record systems
      • Providing meaningful visualizations for medical professionals
      ${emptyLine}
      This paragraph has a truly empty line above it using the zero-width space
      technique. It creates visual separation without any visible characters.
      ${spacer}
      This paragraph has an empty line created with a non-breaking space.
      Both approaches create empty lines, but they work slightly differently.
    `),
    solution: formatText(`
      Created a HIPAA-compliant data analytics platform with advanced 
      visualization capabilities.
      
      Our solution delivered:
      • End-to-end encryption for all patient data
      • Custom dashboards for different medical specialties
      • Predictive analytics to identify at-risk patients
    `),
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