import { Metadata } from "next";
import caseStudiesData from "@/components/CaseStudies/caseStudiesData";
import CaseStudyContent from "./CaseStudyContent";

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  const caseStudyId = parseInt(params.id);
  const caseStudy = caseStudiesData.find((cs) => cs.id === caseStudyId);
  
  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Datify",
      description: "The requested case study could not be found.",
    };
  }
  
  return {
    title: `${caseStudy.title} | Datify`,
    description: caseStudy.summary,
  };
}

export function generateStaticParams() {
  return caseStudiesData.map((caseStudy) => ({
    id: caseStudy.id.toString(),
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <CaseStudyContent id={params.id} />;
} 