interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  technologies: string[];
  date: string;
  client: string;
  role: string;
  features: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "[B2C] Easy Habit Tracker",
    description: "A simple, clean habit tracking app that helps users build better habits. Features include streak tracking, personalized insights, and an intuitive interface.",
    image: "/images/portfolio/easy-habit-tracker.png",
    link: "https://apps.apple.com/app/easy-habit-tracker/id6744540714",
    category: "iOS Application",
    technologies: ["Swift", "SwiftUI", "Core Data"],
    date: "2023",
    client: "Personal Project",
    role: "Sole Developer",
    features: [
      "Habit tracking and streak monitoring",
      "Personalized insights and analytics",
      "Intuitive and clean user interface",
      "Data persistence with Core Data",
      "App Store distribution"
    ]
  },
  {
    id: 3,
    title: "IsoKron",
    description: "A powerful tool for analyzing and visualizing catchment areas. Our platform helps businesses, researchers, and urban planners understand population coverage.",
    image: "/images/portfolio/isokron.png",
    link: "https://isokron-project.vercel.app/",
    category: "Web Application",
    technologies: ["TypeScript", "Next.js", "Mapbox"],
    date: "2024",
    client: "IsoKron",
    role: "Full Stack Developer",
    features: [
      "Interactive map visualization",
      "Catchment area analysis",
      "Population coverage metrics",
      "Customizable analysis parameters",
      "Export and reporting tools"
    ]
  }
]; 