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
    image: "/images/case-studies/real-estate-platform.jpg",
    company: {
      name: "AMS Africa",
      logo: "/images/case-studies/company-logos/ams-africa.jpeg",
      industry: "Real Estate"
    },
    tags: ["Artificial Intelligence", "Consulting", "Real Estate"],
    publishDate: "2023"
  },
  {
    "id": 6,
    "title": "Geospatial Technology for Accurate Retail Demand Analysis",
    "summary": "Our client, a real estate consulting firm, faced challenges in accurately quantifying demand for retail developments. Their outdated methods led to imprecise catchment area definitions, subjective population estimates, and inefficient data management. We implemented a solution using the Mapbox isochrone API and GeoPandas to create precise catchment areas and automate population calculations. This transformation reduced analysis time by 93%, improved population accuracy by 75%, and ensured 100% reusability of hard data across projects. Our solution empowered the client to deliver more accurate and timely insights to their clients and financial partners.",
    "challenge": "The client encountered several critical obstacles in their demand analysis process:\n\n- <b>Inaccurate Catchment Area Mapping:</b> Analysts used manual methods to draw catchment areas in PowerPoint, leading to imprecise isochrones that didn’t reflect actual travel times.\n- <b>Subjective Population Estimates:</b> Population calculations relied on visual guesses of administrative unit overlaps, introducing significant errors.\n- <b>Complex and Time-Consuming Process:</b> The manual workflow was difficult to teach and took three days per project, limiting scalability.\n- <b>Data Repurposing Difficulties:</b> Valuable data was stored in nonstandard formats with unclear sourcing, making it hard to reuse for future projects.\n\nThese issues compromised the quality of insights and hindered the firm’s ability to meet client expectations efficiently.",
    "solution": "To address these challenges, we developed a comprehensive, technology-driven solution:\n\n- <b>Precise Catchment Area Definition:</b> We utilized the Mapbox isochrone API to generate accurate catchment areas based on real travel times by car, divided into three proximity levels with modulated capture rates.\n- <b>Automated Population Calculation:</b> Using GeoPandas, we calculated the exact population within each catchment area by determining the overlap between administrative units and isochrones.\n- <b>Standardized Data Management:</b> We stored data in JSON format, linking coordinate-defined shapes to population and socioprofessional category (SPC) data for easy reuse.\n- <b>Automated Reporting and Deliverables:</b> We developed tools to automatically generate comprehensive reports and professionally formatted slides, eliminating manual formatting efforts.\n\nThis solution not only enhanced accuracy but also significantly reduced the time and effort required for each project.",
    "results": [
      "93% reduction in analysis time, from three days to two hours",
      "75% improvement in population accuracy within catchment areas",
      "100% reusability of hard data across projects"
    ],
    "resultsHeading": "Our innovative approach delivered remarkable improvements:",
    image: "/images/case-studies/catchment-areas.jpg",
    company: {
      name: "AMS Africa",
      logo: "/images/case-studies/company-logos/ams-africa.jpeg",
      industry: "Real Estate"
    },
    tags: ["Artificial Intelligence", "Consulting", "Real Estate"],
    publishDate: "2023"
  },

 
];

export default caseStudiesData; 