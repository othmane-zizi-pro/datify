import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Understanding Modern JavaScript: Promises, Async/Await and Beyond",
    paragraph:
      "Dive into the evolution of asynchronous programming in JavaScript, from callback hell to the elegant patterns of Promises and Async/Await. Learn practical applications and performance considerations.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Datify",
      designation: "Technology Solutions",
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
      name: "Datify",
      designation: "Technology Solutions",
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
      name: "Datify",
      designation: "Technology Solutions",
    },
    tags: ["ai", "machine-learning"],
    publishDate: "2023",
  }
];

export default blogData;
