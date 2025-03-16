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
    title: "Streamlining Financial Operations for Integral",
    summary: formatText(`
      Integral, a fast-growing early-stage startup, faced inefficiencies in their monthly payment reconciliation and overage check processes. 
      These manual, error-prone tasks consumed days of staff time and risked unnoticed payment discrepancies. At Datify, we 
      delivered an automated solution using advanced algorithms, database enhancements, and a custom dashboard. The result? Significant time 
      savings, flawless overage billing, and a leaner, more efficient operation that allowed Integral to focus on their core mission.
    `),
    challenge: formatText(`
      Integral's rapid growth brought complexity to their financial operations, creating a tangled web of inefficiencies:\\n
      ${emptyLine}
      • <b>Overwhelming Volume:</b> With hundreds of clients, monthly reconciliation and transaction overage checks were chaotic, taking one full-time employee (FTE) multiple days to complete.\\n
      • <b>Payment Tracking Chaos:</b> Reconciling payments required verifying each client's payment frequency (e.g., annual or monthly) and source (e.g., Stripe, wire, crypto). A centralized spreadsheet compounded the issue, with multiple entries per client due to upsells and new contracts, making it nearly impossible to trace payments to the right agreements.\\n
      • <b>Disconnected Client Orgs:</b> Many clients had multiple organizations, but there was no way to link these to parent entities—critical for accurate, per-organization overage checks.\\n
      • <b>Error-Prone and Untrackable:</b> The haphazard process left room for unmade payments to slip through unnoticed, threatening revenue integrity.\\n
      • <b>Resource Strain:</b> For a startup committed to small, efficient teams, the burden was unsustainable—account managers often worked weekends to keep up.
      
      Integral needed an automated system to reconcile payments, monitor overages, and bill accurately, freeing their team for mission-critical work.
    `),
    solution: formatText(`
      Our agency crafted a comprehensive, tech-driven solution to transform Integral's financial workflows:\\n
      ${emptyLine}
      • <b>Org Clustering:</b> We deployed a community-detection algorithm to group sibling orgs by analyzing user email access patterns, establishing a clear client-org hierarchy.\\n
      • <b>Data Cleanup:</b> We consolidated multiple client entries into unified records, eliminating confusion from redundant data.\\n
      • <b>Smart Linking:</b> Sibling org groups were matched to client names using name similarity algorithms, with manual checks to ensure precision.\\n
      • <b>Custom Dashboard:</b> Using Retool, we built an intuitive dashboard to oversee payment reconciliation and overage checks across all clients for any month.\\n
      • <b>Stripe Integration:</b> We connected the dashboard to the Stripe API, enabling one-click verification of payments (covering 90% of transactions) via customer IDs.\\n
      • <b>Database Enhancements:</b> We added fields to the SQL database to persistently track reconciliation and overage statuses, fully monitorable from the dashboard.\\n
      • <b>Quota Automation:</b> We identified quota-related fields, wrote SQL queries to assess quotas for all orgs per client, and updated the database—streamlining overage monitoring and billing.
      
      The result was a seamless system: with a single button, Integral could reconcile Stripe payments, check overages, and link them to contracts for accurate billing.
      
      By partnering with us, Integral turned a chaotic process into a competitive advantage, positioning themselves for scalable growth with a lean, optimized team.
    `),
    results: [
      "50 Days Saved Annually: Freed up one FTE's worth of time each year, redirecting effort to strategic priorities.",
      "Zero Missed Overages: Enabled immediate billing for overages, capturing all revenue without exception.",
      "12% Error Reduction: Slashed reconciliation mistakes, boosting financial accuracy and trust.",
      "!NOBULLET! By partnering with us, Integral turned a chaotic process into a competitive advantage, positioning themselves for scalable growth with a lean, optimized team."
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