import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MethodologyApproach from "@/components/Methodology/MethodologyApproach";
import MethodologyFramework from "@/components/Methodology/MethodologyFramework";
import MethodologyProcess from "@/components/Methodology/MethodologyProcess";

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
      <MethodologyApproach />
      <MethodologyFramework />
      <MethodologyProcess />
    </>
  );
};

export default MethodologyPage; 