import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import LatestCaseStudies from "@/components/CaseStudies/LatestCaseStudies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datify",
  description: "Software solutions for your business",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <AboutSectionOne />
      <Testimonials />
      <LatestCaseStudies />
      <Blog />
    </>
  );
}
