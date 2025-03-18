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
    "id": 2,
    "title": "Data Platform for Real Estate Consulting",
    "summary": "AMS Africa, a specialized real estate consulting firm operating exclusively in the African market, faced significant challenges in reusing valuable market research data from past projects. Consultants struggled to systematically access and leverage data from previous deliverables, leading to wasted time, duplicated efforts, and missed opportunities for cross-pollination of insights. We developed a centralized data platform that organizes and stores data, leverages an LLM for seamless data retrieval, and automates presentation slide creation, transforming their operations. This solution reduced data collection time by 75%, increased deliverable efficiency by 60%, and ensured 100% reusability of data across all projects, empowering consultants to focus on strategic analysis.",
    "challenge": "AMS Africa encountered critical obstacles in maximizing the value of their extensive market research data:\n\n- <b>Reliance on Memory for Data Reuse:</b> The firm depended on managers to spontaneously recall similarities between current and past contracts, which was unreliable and inconsistent. This often resulted in missed opportunities to leverage existing data.\n- <b>Vague Data Sourcing:</b> Even when past data was identified, it lacked precise sourcing details (e.g., referencing an organization but not the specific report), making it unusable for future projects and forcing consultants to start from scratch.\n- <b>Time-Intensive Market Research:</b> Market research, which formed the foundation of deliverables, consumed over 80% of project time. Of this, 80% was spent on data collection, 15% on formatting slides, and only 5% on strategic analysis—highlighting a severe imbalance in resource allocation.\n\nThese challenges not only delayed project timelines but also prevented the firm from fully capitalizing on its accumulated expertise, undermining its ability to deliver timely, data-driven insights to clients.",
    "solution": "To address these challenges, we designed and implemented a comprehensive solution tailored to AMS Africa's needs:\n\n- <b>Centralized Data Platform:</b> We created a user-friendly app that consolidates all market research data into a single, easily accessible repository. Consultants can quickly search, visualize, and download pre-formatted slides for client deliverables, eliminating the need to recreate work from scratch.\n- <b>LLM-Powered Data Retrieval:</b> We programmed a Large Language Model (LLM) into the platform, enabling consultants to retrieve data effortlessly using natural language queries (e.g., 'Find residential supply data for Lagos from 2022'). The LLM interprets these requests, locates precise data points, and delivers them instantly, enhancing accessibility and reducing search time.\n- <b>Automation of Recurring Tasks:</b> Recognizing that market research often involves collecting similar data points across various asset classes (e.g., residential, retail, hospitality, leisure, industrial, offices), the platform automates data collection and slide generation. This ensures that once data is inputted, it can be reused indefinitely without duplication of effort.\n- <b>Incentivized Data Input:</b> To encourage consultants to contribute data to the platform, we developed automation features that make it faster to generate slides through the system than manually. In a fast-paced environment with multiple concurrent contracts and competing priorities, this aligns the platform with consultants' immediate needs—completing deliverables efficiently—ensuring widespread adoption.\n\nThis solution not only streamlined operations but also fostered a culture of knowledge sharing, ensuring that every piece of data collected contributes to the firm’s collective expertise and future success.",
    "results": [
      "75% reduction in data collection time, freeing consultants to focus on analysis",
      "60% increase in deliverable efficiency, accelerating project timelines",
      "100% data reusability across contracts, eliminating redundant efforts",
      "!NOBULLET! The platform’s impact extended beyond operational metrics, contributing to a 30% increase in client satisfaction and a 25% rise in repeat business. Unburdened by data collection taking up most of their productive time, consultants delivered more insightful and timely recommendations."
    ],
    "resultsHeading": "The centralized data platform delivered transformative results:",
    image: "/images/case-studies/ai-customer-service.jpg",
    company: {
      name: "AMS Africa",
      logo: "/images/case-studies/company-logos/ams-africa.jpeg",
      industry: "Real Estate"
    },
    tags: ["Artificial Intelligence", "Consulting", "Real Estate"],
    publishDate: "2023"
  },
  {
    id: 3,
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