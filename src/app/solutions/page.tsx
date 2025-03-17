import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SolutionsHero from "@/components/Solutions/SolutionsHero";
import SolutionsCards from "@/components/Solutions/SolutionsCards";
import SolutionsTech from "@/components/Solutions/SolutionsTech";
import SolutionsProcess from "@/components/Solutions/SolutionsProcess";
import CTA from "@/components/Common/CTA";

export const metadata: Metadata = {
  title: "Solutions | Datify - Data-Driven Solutions",
  description: "Explore Datify's comprehensive suite of data solutions designed to tackle your most complex challenges and unlock your organization's potential.",
  keywords: ["data solutions", "AI consulting", "data engineering", "analytics", "machine learning", "data architecture", "data integration"],
};

const SolutionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Solutions"
        description="Innovative data solutions tailored to your unique challenges"
      />
      <SolutionsHero />
      <SolutionsCards />
      <SolutionsTech />
      <SolutionsProcess />
      <CTA />
    </>
  );
};

export default SolutionsPage; 