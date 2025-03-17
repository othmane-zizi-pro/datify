import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MethodologyHero from "@/components/Methodology/MethodologyHero";
import MethodologyApproach from "@/components/Methodology/MethodologyApproach";
import MethodologyFramework from "@/components/Methodology/MethodologyFramework";
import MethodologyTech from "@/components/Methodology/MethodologyTech";
import MethodologyProcess from "@/components/Methodology/MethodologyProcess";
import CTA from "@/components/Common/CTA";

export const metadata: Metadata = {
  title: "Our Methodology | Datify - Data-Driven Solutions",
  description: "Discover Datify's proven methodology for solving complex data challenges. Our unique approach combines technical expertise with strategic thinking to deliver transformative results.",
  keywords: ["data methodology", "data framework", "data consulting process", "data solution", "data-driven approach"],
};

const MethodologyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Methodology"
        description="Our proven approach to delivering transformative data solutions"
      />
      <MethodologyHero />
      <MethodologyApproach />
      <MethodologyFramework />
      <MethodologyTech />
      <MethodologyProcess />
      <CTA />
    </>
  );
};

export default MethodologyPage; 