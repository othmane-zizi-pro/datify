import { notFound } from "next/navigation";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import caseStudiesData from "@/components/CaseStudies/caseStudiesData";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyContentProps {
  id: string;
}

export default function CaseStudyContent({ id }: CaseStudyContentProps) {
  const caseStudyId = parseInt(id);
  const caseStudy = caseStudiesData.find((cs) => cs.id === caseStudyId);
  
  if (!caseStudy) {
    notFound();
  }
  
  // Get related case studies (excluding the current one)
  const relatedCaseStudies = caseStudiesData
    .filter((cs) => cs.id !== caseStudyId)
    .slice(0, 2);
    
  // Your existing JSX here
  return (
    <>
      {/* Your existing JSX here */}
    </>
  );
} 