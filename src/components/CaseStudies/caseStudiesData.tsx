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
    "solution": "To address these challenges, we designed and implemented a comprehensive solution tailored to AMS Africa's needs:\n\n- <b>Centralized Data Platform:</b> We created a user-friendly app that consolidates all market research data into a single, easily accessible repository. Consultants can quickly search, visualize, and download pre-formatted slides for client deliverables, eliminating the need to recreate work from scratch.\n- <b>LLM-Powered Data Retrieval:</b> We programmed a Large Language Model (LLM) into the platform, enabling consultants to retrieve data effortlessly using natural language queries (e.g., 'Find residential supply data for Lagos from 2022'). The LLM interprets these requests, locates precise data points, and delivers them instantly, enhancing accessibility and reducing search time.\n- <b>Automation of Recurring Tasks:</b> Recognizing that market research often involves collecting similar data points across various asset classes (e.g., residential, retail, hospitality, leisure, industrial, offices), the platform automates data collection and slide generation. This ensures that once data is inputted, it can be reused indefinitely without duplication of effort.\n- <b>Incentivized Data Input:</b> To encourage consultants to contribute data to the platform, we developed automation features that make it faster to generate slides through the system than manually. In a fast-paced environment with multiple concurrent contracts and competing priorities, this aligns the platform with consultants' immediate needs—completing deliverables efficiently—ensuring widespread adoption.\n\nThis solution not only streamlined operations but also fostered a culture of knowledge sharing, ensuring that every piece of data collected contributes to the firm's collective expertise and future success.",
    "results": [
      "75% reduction in data collection time, freeing consultants to focus on analysis",
      "60% increase in deliverable efficiency, accelerating project timelines",
      "100% data reusability across contracts, eliminating redundant efforts",
      "!NOBULLET! The platform's impact extended beyond operational metrics, contributing to a 30% increase in client satisfaction and a 25% rise in repeat business. Unburdened by data collection taking up most of their productive time, consultants delivered more insightful and timely recommendations."
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
    "id": 3,
    "title": "Geospatial Technology for Accurate Retail Demand Analysis",
    "summary": "Our client, a real estate consulting firm, faced challenges in accurately quantifying demand for retail developments. Their outdated methods led to imprecise catchment area definitions, subjective population estimates, and inefficient data management. We implemented a solution using the Mapbox isochrone API and GeoPandas to create precise catchment areas and automate population calculations. This transformation reduced analysis time by 93%, improved population accuracy by 75%, and ensured 100% reusability of hard data across projects. Our solution empowered the client to deliver more accurate and timely insights to their clients and financial partners.",
    "challenge": "The client encountered several critical obstacles in their demand analysis process:\n\n- <b>Inaccurate Catchment Area Mapping:</b> Analysts used manual methods to draw catchment areas in PowerPoint, leading to imprecise isochrones that didn't reflect actual travel times.\n- <b>Subjective Population Estimates:</b> Population calculations relied on visual guesses of administrative unit overlaps, introducing significant errors.\n- <b>Complex and Time-Consuming Process:</b> The manual workflow was difficult to teach and took three days per project, limiting scalability.\n- <b>Data Repurposing Difficulties:</b> Valuable data was stored in nonstandard formats with unclear sourcing, making it hard to reuse for future projects.\n\nThese issues compromised the quality of insights and hindered the firm's ability to meet client expectations efficiently.",
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
  {
    id: 4,
    title: "Newsletter Automation for Integral Treasury",
    summary: formatText(`
      Integral Treasury needed to expand their sales funnel without overburdening their lean team. 
      We developed an end-to-end automation system that delivered a professional newsletter with minimal human intervention, 
      reducing production time to under 15 minutes weekly while growing their audience to 2,500 subscribers and increasing 
      sales calls by 15%.
    `),
    challenge: formatText(`
      Integral Treasury faced a classic growth dilemma: how to expand their sales funnel without overburdening their small, 
      efficiency-driven team. Their challenges included:\\n
      ${emptyLine}
      • <b>Top-of-Funnel Bottleneck:</b> Increasing sales required more leads, but their existing strategies weren't scaling fast enough.\\n
      • <b>Newsletter Potential:</b> A newsletter could engage prospects with industry insights, but creating one manually demanded time and resources they didn't have.\\n
      • <b>Resource Constraints:</b> With a team already stretched thin and a commitment to cost optimization, dedicating staff to content curation and newsletter production was impractical.\\n
      ${emptyLine}
      Integral needed a low-effort, high-impact solution to generate a steady stream of leads while staying true to their lean operational ethos.
    `),
    solution: formatText(`
      We designed an end-to-end automation system to deliver a professional newsletter with minimal human intervention:\\n
      ${emptyLine}
      • <b>Content Curation:</b> Using Zapier, we aggregated RSS feeds from major crypto industry publications and applied an LLM-based AI filter to select only the most relevant articles for Integral's audience. These were then posted to a dedicated Slack channel.\\n
      • <b>Theme Extraction:</b> A second automation analyzed the filtered articles weekly, extracting key themes to guide newsletter content.\\n
      • <b>Automated Generation:</b> With a Python notebook and a series of tailored prompts, we generated a fully formatted newsletter draft based on the curated content and themes.\\n
      • <b>HubSpot Integration:</b> We built a sleek newsletter template in HubSpot for consistent branding and easy distribution.\\n
      • <b>Subscription Growth:</b> A call-to-action on Integral's landing page invited visitors to subscribe, seamlessly growing their audience.\\n
      ${emptyLine}
      The result was a hands-off system: Integral's team spent less than 15 minutes per week editing and publishing a high-quality newsletter, turning a resource drain into a strategic asset.
    `),
    results: [
      "Less Than 15 Minutes Weekly: Reduced newsletter production time to under a quarter-hour per week, preserving Integral's lean team focus.",
      "2,500 Subscribers: Grew their newsletter audience to 2,500 engaged readers, expanding their reach.",
      "15% Increase in Calls: Boosted top-of-funnel sales calls by 15%, driving more opportunities downstream.",
      "!NOBULLET! By partnering with us, Integral Treasury unlocked a powerful growth channel without sacrificing efficiency, solidifying their position as an agile leader in the crypto space."
    ],
    resultsHeading: "Our solution delivered impressive, measurable impact:",
    image: "/images/case-studies/newsletter-automation.jpg",
    company: {
      name: "Integral Treasury",
      logo: "/images/case-studies/company-logos/integral-treasury.png",
      industry: "Crypto"
    },
    tags: ["Automation", "Content Marketing", "Lead Generation", "AI/ML", "HubSpot", "Zapier"],
    publishDate: "2024-03-15"
  },
  {
    id: 5,
    title: "AI-Suggested Customer Support Responses for Integral Treasury",
    summary: formatText(`
      Integral, a crypto SaaS provider, struggled with slow customer support response times, impacting client satisfaction and team morale. 
      Their support team was overwhelmed, spending hours crafting responses to repetitive queries. At Datify, we implemented an AI-driven 
      solution that leveraged their existing documentation and integrated an LLM-powered support chat tool. The result? Drastically reduced 
      response times, happier customers, and a support team empowered to focus on complex issues—all while maintaining a personal touch.
    `),
    challenge: formatText(`
      Integral had built a loyal customer base with their innovative SaaS platform, but their rapid growth exposed critical inefficiencies 
      in their customer support operations:\\n
      ${emptyLine}
      • <b>Delayed Responses:</b> With a growing user base, the support team took an average of 4 hours to respond to customer inquiries, 
      leading to frustration and a 10% drop in customer satisfaction scores.\\n
      • <b>Repetitive Queries:</b> Over 70% of support tickets were repetitive, involving basic troubleshooting or feature-related questions 
      already covered in their documentation—but the team lacked a quick way to access and utilize this information.\\n
      • <b>Overworked Team:</b> The small support team of two dedicated agents was stretched thin, often working late to clear ticket backlogs, 
      which led to burnout and high turnover.\\n
      • <b>Inconsistent Responses:</b> Without a centralized knowledge base integration, agents often provided inconsistent answers, 
      risking brand credibility.\\n
      • <b>Missed Opportunities:</b> Slow response times meant missed opportunities to upsell or cross-sell during customer interactions, 
      stunting revenue growth.\\n
      ${emptyLine}
      Integral needed a scalable, AI-driven solution to streamline their support process, reduce response times, and empower their team 
      to focus on high-value interactions—all while maintaining the personalized service their customers expected.
    `),
    solution: formatText(`
      We designed a robust, AI-powered system to revolutionize Integral's customer support workflow, integrating seamlessly with their existing tools:\\n
      ${emptyLine}
      • <b>Documentation Scraping & Categorization:</b> We developed a Python script to scrape every page of Integral's extensive documentation, 
      extracting content and metadata. The script output an Excel sheet with each page's URL and an AI-assigned label, matching the category 
      labels used in their support chat tool (e.g., "Billing," "Troubleshooting," "Feature Requests").\\n
      • <b>LLM-Powered Contextual Responses:</b> We integrated the categorized documentation into their support chat tool, enabling it to 
      natively query a large language model (LLM) with the right context. When a customer submitted a query, the tool automatically identified 
      the relevant category, pulled the appropriate documentation, and suggested a tailored response in seconds.\\n
      • <b>Agent-Friendly Interface:</b> We built a custom dashboard within the support tool, allowing agents to review AI-suggested responses, 
      edit them for tone, and send them with a single click.\\n
      • <b>Continuous Learning:</b> The system was designed to learn from agent edits, refining its suggestions over time to better align with 
      Integral's brand voice and customer expectations.\\n
      • <b>Integration with Existing Tools:</b> We connected the solution to Integral's CRM ticketing system (Plain), ensuring seamless tracking 
      of customer interactions and enabling agents to identify upsell opportunities during support conversations.\\n
      ${emptyLine}
      The result was a game-changing system: Integral's support team could now respond to customer inquiries in under 2 minutes, with AI-suggested 
      responses that were accurate, on-brand, and contextually relevant. This freed agents to focus on complex issues and relationship-building, 
      transforming support into a strategic asset.
    `),
    results: [
      "80% Faster Responses: Reduced average response time from 4 hours to under 2 minutes, boosting customer satisfaction scores by 15%.",
      "40% Increase in Agent Productivity: Freed up agents to handle 40% more tickets daily, eliminating backlogs and reducing overtime.",
      "5% Revenue Growth: Enabled agents to identify and act on upsell opportunities during support interactions, driving a 5% increase in monthly recurring revenue.",
      "!NOBULLET! By partnering with Datify, Integral Treasury turned their customer support from a bottleneck into a competitive advantage, delighting customers and empowering their team to focus on what matters most—building lasting relationships."
    ],
    resultsHeading: "Our AI-driven solution delivered transformative outcomes for Integral Innovations:",
    image: "/images/case-studies/customer-support.jpg",
    company: {
      name: "Integral Treasury",
      logo: "/images/case-studies/company-logos/integral-treasury.png",
      industry: "Crypto"
    },
    tags: ["AI-Driven Support", "Customer Service", "Automation", "AI/ML"],
    publishDate: "2025"
  },
];

export default caseStudiesData; 