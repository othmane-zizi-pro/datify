import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Understanding Modern JavaScript: Promises, Async/Await and Beyond",
    paragraph:
      "Dive into the evolution of asynchronous programming in JavaScript, from callback hell to the elegant patterns of Promises and Async/Await. Learn practical applications and performance considerations.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Alex Johnson",
      image: "/images/blog/author-01.png",
      designation: "Senior JavaScript Developer",
    },
    tags: ["javascript", "programming"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Demystifying WebAssembly: The Future of Web Performance",
    paragraph:
      "Explore how WebAssembly is revolutionizing web application performance by allowing developers to run code at near-native speed. Learn about its use cases, ecosystem, and how it complements JavaScript.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Maria Chen",
      image: "/images/blog/author-02.png",
      designation: "Systems Architect",
    },
    tags: ["webassembly", "performance"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "The Architecture Behind Modern AI Frameworks",
    paragraph:
      "A technical exploration of the architectural patterns that power today's leading AI frameworks. Understand the trade-offs between performance, flexibility, and developer experience in TensorFlow, PyTorch, and JAX.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "David Kumar",
      image: "/images/blog/author-03.png",
      designation: "ML Engineer",
    },
    tags: ["ai", "machine-learning"],
    publishDate: "2023",
  },
  {
    id: 4,
    title: "Building Resilient Microservices: Patterns and Practices",
    paragraph:
      "Learn how to design and implement fault-tolerant, scalable microservices architectures. This article covers circuit breakers, bulkheads, and other resilience patterns essential for modern distributed systems.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Sarah Williams",
      image: "/images/blog/author-01.png",
      designation: "Cloud Solutions Architect",
    },
    tags: ["microservices", "architecture"],
    publishDate: "2023",
  },
  {
    id: 5,
    title: "The Evolution of CSS: From Floats to Grid and Beyond",
    paragraph:
      "Trace the remarkable evolution of CSS layout techniques from the early days of tables and floats to modern approaches with Flexbox and Grid. Includes practical migration strategies for legacy codebases.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Chris Thompson",
      image: "/images/blog/author-02.png",
      designation: "Frontend Specialist",
    },
    tags: ["css", "web-development"],
    publishDate: "2023",
  },
  {
    id: 6,
    title: "Optimizing React Performance: Beyond Memoization",
    paragraph:
      "Discover advanced techniques for optimizing React applications that go beyond basic memoization. This deep dive covers virtualization, bundle optimization, and effective state management patterns.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Priya Patel",
      image: "/images/blog/author-03.png",
      designation: "React Performance Engineer",
    },
    tags: ["react", "performance"],
    publishDate: "2023",
  },
  {
    id: 7,
    title: "Understanding TypeScript's Type System: Advanced Concepts",
    paragraph:
      "Explore the more sophisticated aspects of TypeScript's type system, including conditional types, mapped types, and template literal types. Learn how to leverage these features for safer, more maintainable code.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Michael Zhang",
      image: "/images/blog/author-01.png",
      designation: "TypeScript Advocate",
    },
    tags: ["typescript", "programming"],
    publishDate: "2023",
  },
  {
    id: 8,
    title: "GraphQL at Scale: Lessons from Production",
    paragraph:
      "Learn from real-world experiences scaling GraphQL in high-traffic applications. This article covers caching strategies, batching, persisted queries, and other optimization techniques for enterprise GraphQL deployments.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Emma Robinson",
      image: "/images/blog/author-02.png",
      designation: "API Architect",
    },
    tags: ["graphql", "scalability"],
    publishDate: "2023",
  },
  {
    id: 9,
    title: "The Case for Server Components: React's New Paradigm",
    paragraph:
      "Analyze the benefits and tradeoffs of React Server Components and how they change our approach to building React applications. Includes migration strategies and performance comparisons with traditional approaches.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Daniel Lee",
      image: "/images/blog/author-03.png",
      designation: "Full Stack Engineer",
    },
    tags: ["react", "server-components"],
    publishDate: "2023",
  },
  {
    id: 10,
    title: "Securing Modern Web Applications: Beyond the Basics",
    paragraph:
      "Move beyond OWASP top 10 with advanced web security techniques. This comprehensive guide covers Content Security Policy, Subresource Integrity, modern authentication patterns, and emerging threats in the web security landscape.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Olivia Garcia",
      image: "/images/blog/author-01.png",
      designation: "Security Engineer",
    },
    tags: ["security", "web-development"],
    publishDate: "2023",
  },
];
export default blogData;
