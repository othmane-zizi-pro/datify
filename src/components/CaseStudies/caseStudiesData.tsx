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
    resultsHeading: "Our solution delivered measurable, game-changing outcomes:",
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
      Origin Financial needed to expand their financial wellness platform globally to serve multinational clients across different regions. 
      The challenge? Complex regulatory requirements, language barriers, and regional payment methods threatened to delay their market entry. 
      At Datify, we developed a scalable localization strategy and built a flexible architecture that enabled rapid deployment across 15 countries. 
      The result was a 30% increase in user engagement and significant growth in their enterprise client base.
    `),
    challenge: formatText(`
      Origin Financial faced significant hurdles in their global expansion, requiring a comprehensive technical solution:\\n
      ${emptyLine}
      • <b>Regulatory Complexity:</b> Each target market had distinct financial regulations and compliance requirements, demanding region-specific features and security protocols.\\n
      • <b>Language & Cultural Barriers:</b> The app needed to function seamlessly in 8 different languages while maintaining cultural relevance and delivering a consistent user experience.\\n
      • <b>Payment Method Fragmentation:</b> Regional payment preferences varied dramatically, from credit cards and bank transfers to local digital wallets and alternative payment methods.\\n
      • <b>Data Sovereignty Requirements:</b> Strict data residency laws in certain regions required a complete rethinking of their database architecture and server deployment strategy.\\n
      • <b>Performance Across Regions:</b> Serving users across continents raised concerns about latency and app performance, especially in regions with less robust internet infrastructure.
      
      Origin Financial needed a partner who could solve these technical challenges while maintaining their aggressive market entry timeline to stay ahead of competitors.
    `),
    solution: formatText(`
      Our team engineered a comprehensive globalization strategy that addressed each challenge while maintaining Origin's signature user experience:\\n
      ${emptyLine}
      • <b>Modular Compliance Framework:</b> We developed a flexible regulatory engine that could be configured for each region's specific requirements, enabling rapid deployment without code rewrites.\\n
      • <b>Advanced Localization Architecture:</b> Beyond simple translations, we built a system that adapted content, financial advice, and UI elements based on cultural norms and regional financial practices.\\n
      • <b>Unified Payment Gateway:</b> We created a payment orchestration layer that abstracted away the complexity of different payment methods while maintaining PCI compliance across all regions.\\n
      • <b>Distributed Data Architecture:</b> We implemented a hybrid cloud approach with regional data centers to satisfy data sovereignty requirements while maintaining data consistency and security.\\n
      • <b>Global CDN Implementation:</b> A distributed content delivery network ensured fast load times and responsive experiences regardless of user location.\\n
      • <b>Automated Compliance Testing:</b> We built automated testing pipelines that verified regional compliance requirements were met with each new feature release.
      
      The result was a truly global platform that felt local to each user, combining the scalability needed for worldwide operations with the personalized experience Origin Financial was known for.
      
      By partnering with us, Origin was able to enter key markets months ahead of schedule, capturing significant market share before competitors could respond.
    `),
    results: [
      "Successful deployment in 15 countries within 6 months",
      "30% increase in user engagement across all regions",
      "42% growth in enterprise client base",
      "95% regulatory compliance rating from independent auditors",
      "!NOBULLET! The global infrastructure we built enabled Origin Financial to scale from serving 50,000 users to over 2 million users worldwide, establishing them as the market leader in financial wellness technology."
    ],
    resultsHeading: "Our global deployment strategy achieved remarkable results:",
    image: "/images/case-studies/healthcare-analytics.jpg",
    company: {
      name: "Origin Financial",
      logo: "/images/case-studies/company-logos/origin-financial.png",
      industry: "FinTech"
    },
    tags: ["Global Expansion", "FinTech", "Localization"],
    publishDate: "2024"
  },
  {
    id: 3,
    title: "AI-Powered Customer Service Platform",
    summary: formatText(`
      AMS Africa, a rapidly expanding real estate firm, struggled with an overwhelming volume of customer inquiries that threatened their reputation for exceptional service. 
      Their manual support processes couldn't scale with their growth, resulting in delayed responses and inconsistent customer experiences. 
      We developed an AI-powered customer service platform that intelligently prioritized inquiries, automated common requests, and provided agents with real-time property information. 
      This transformed their customer experience, reducing response times by 80% while handling 3x the inquiry volume with the same team size.
    `),
    challenge: formatText(`
      AMS Africa faced critical customer service challenges as they expanded across multiple African markets:\\n
      ${emptyLine}
      • <b>Overwhelming Inquiry Volume:</b> Their support team was drowning in over 2,500 daily inquiries across email, WhatsApp, SMS, and phone channels, with no unified system to manage them all.\\n
      • <b>Multi-Language Requirements:</b> Their customer base communicated in 6 different languages, but support agents weren't always available for each language, creating delays and miscommunications.\\n
      • <b>Complex Property Questions:</b> Agents needed to reference multiple systems and databases to answer specific questions about properties, increasing handling time and error rates.\\n
      • <b>Inconsistent Response Quality:</b> With rapid team growth and high turnover, maintaining consistent service quality and accurate information became increasingly difficult.\\n
      • <b>After-Hours Support Gaps:</b> Property inquiries often came outside business hours, especially from international clients, but staffing 24/7 support was cost-prohibitive.
      
      These challenges created a growing backlog of unanswered inquiries, extending average response times to 32 hours—unacceptable in the competitive real estate market where prompt responses directly impact sales conversion rates.
    `),
    solution: formatText(`
      We built a comprehensive AI-powered customer service platform tailored to AMS Africa's unique real estate business needs:\\n
      ${emptyLine}
      • <b>Unified Omnichannel Interface:</b> We created a single platform that consolidated all communication channels—email, WhatsApp, SMS, phone calls, and social media—into one interface with unified customer histories.\\n
      • <b>Advanced NLP Engine:</b> We implemented natural language processing in all 6 required languages to accurately classify inquiry types, detect sentiment, and extract key property information from customer messages.\\n
      • <b>Intelligent Routing System:</b> Our algorithm prioritized inquiries based on urgency, sentiment, customer history, and property value, ensuring the most important conversations received immediate attention.\\n
      • <b>Automated Response System:</b> For common inquiries like property availability, pricing, and amenities, the system generated accurate responses automatically, handling 65% of all inquiries without agent intervention.\\n
      • <b>Real-Time Knowledge Base:</b> We integrated their property database, CRM, and transaction systems to provide agents with instant access to all relevant information in a single view.\\n
      • <b>24/7 Conversational AI:</b> For after-hours support, we deployed an advanced conversational AI that could answer detailed property questions, schedule viewings, and even begin qualification processes.
      
      The platform included comprehensive analytics that identified trends, emerging issues, and opportunities for further automation. We also provided a continuous learning system that improved response accuracy over time.
      
      By transforming their customer service operations, AMS Africa turned a potential weakness into a significant competitive advantage in the African real estate market.
    `),
    results: [
      "80% reduction in average response time (from 32 hours to just 6.4 hours)",
      "65% of inquiries successfully handled by AI without human intervention",
      "300% increase in inquiry handling capacity without adding staff",
      "95% customer satisfaction rating, up from 72% before implementation",
      "!NOBULLET! The transformation of AMS Africa's customer service operations contributed to a 43% increase in property viewing bookings and a 28% higher conversion rate from inquiry to sale, directly impacting the company's bottom line while significantly reducing operational costs."
    ],
    resultsHeading: "Our AI-powered platform transformed customer service metrics:",
    image: "/images/case-studies/ai-customer-service.jpg",
    company: {
      name: "AMS Africa",
      logo: "/images/case-studies/company-logos/ams-africa.jpeg",
      industry: "Real Estate"
    },
    tags: ["Artificial Intelligence", "Customer Service", "Real Estate"],
    publishDate: "2023"
  },
  {
    id: 4,
    title: "Healthcare Data Analytics Platform",
    summary: formatText(`
      Premian, an innovative AI-powered education technology company, wanted to expand into healthcare education but lacked the specialized analytics capabilities needed for medical training data. 
      They needed a platform that could analyze student performance in high-stakes medical simulations while providing actionable insights for educators and administrators. 
      We built a secure, HIPAA-compliant analytics platform that processed complex simulation data, identified knowledge gaps, and predicted student success rates on medical licensing exams. 
      The result was a 30% improvement in student outcomes and a successful entry into the competitive healthcare education market.
    `),
    challenge: formatText(`
      Premian faced significant obstacles entering the healthcare education sector with their existing EdTech platform:\\n
      ${emptyLine}
      • <b>Complex Medical Data:</b> Healthcare training involves complex scenarios, procedural simulations, and diagnostic challenges that their existing analytics engine wasn't designed to evaluate effectively.\\n
      • <b>Regulatory Compliance:</b> Medical education data contains sensitive information requiring strict HIPAA compliance and specialized security protocols their current platform lacked.\\n
      • <b>Predictive Gaps:</b> Medical educators needed predictive insights about which students might struggle with specific clinical concepts or licensing exam components—capabilities beyond their system's design.\\n
      • <b>Integration Challenges:</b> Medical schools used specialized simulation hardware and software that needed to feed data into a unified analytics system without disrupting existing workflows.\\n
      • <b>Multi-dimensional Assessment:</b> Unlike traditional education, medical training requires evaluating knowledge, decision-making, technical skills, and interpersonal abilities simultaneously.
      
      Without solving these challenges, Premian risked missing a critical market opportunity and losing ground to competitors already developing specialized medical education analytics. They needed a healthcare-specific analytics solution within six months to secure partnerships with key medical schools.
    `),
    solution: formatText(`
      We architected a comprehensive healthcare-specific analytics platform that addressed Premian's unique challenges:\\n
      ${emptyLine}
      • <b>Medical Context Engine:</b> We developed specialized algorithms that understood clinical contexts, medical terminology, and procedure-based assessments essential for healthcare education.\\n
      • <b>HIPAA-Compliant Architecture:</b> We implemented end-to-end encryption, comprehensive access controls, and detailed audit trails to ensure complete regulatory compliance while maintaining data utility.\\n
      • <b>Predictive Success Modeling:</b> Our machine learning system analyzed patterns across thousands of past student performances to identify early indicators of potential struggles with specific medical concepts or licensing exam components.\\n
      • <b>Universal Integration Framework:</b> We built flexible APIs and connectors that seamlessly integrated with 15+ medical simulation systems, electronic health record training environments, and virtual patient platforms.\\n
      • <b>Multi-factor Evaluation System:</b> Our platform assessed technical knowledge alongside decision quality, procedural execution, and simulated patient interactions to provide a holistic view of student capabilities.\\n
      • <b>Educator Insight Dashboard:</b> We created intuitive visualizations that helped medical educators quickly identify knowledge gaps, track cohort progress, and generate evidence-based curriculum improvements.
      
      The platform incorporated adaptive learning technologies that personalized educational paths based on individual performance data, accelerating the development of critical medical competencies.
      
      Through our partnership, Premian successfully entered the healthcare education market with a differentiated analytics solution that addressed the unique needs of medical educators and students.
    `),
    results: [
      "30% improvement in student outcomes on medical licensing examinations",
      "50% reduction in time educators spent analyzing student performance",
      "85% of students received personalized learning recommendations that improved their weakest areas",
      "Successful partnerships with 12 leading medical schools in the first year",
      "!NOBULLET! Premian's healthcare analytics platform became their fastest-growing product line, increasing company revenue by 42% year-over-year and establishing them as an innovation leader in the specialized medical education technology sector."
    ],
    resultsHeading: "Our healthcare analytics solution improved education outcomes:",
    image: "/images/case-studies/healthcare-analytics.jpg",
    company: {
      name: "Premian",
      logo: "/images/case-studies/company-logos/healthcare-plus.png",
      industry: "AI EdTech"
    },
    tags: ["Healthcare Education", "Data Analytics", "AI"],
    publishDate: "2024"
  }
];

export default caseStudiesData; 