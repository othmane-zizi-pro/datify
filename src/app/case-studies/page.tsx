import SingleCaseStudy from "@/components/CaseStudies/SingleCaseStudy";
import caseStudiesData from "@/components/CaseStudies/caseStudiesData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Your Company Name",
  description: "Explore our success stories and see how we've helped businesses transform and grow.",
};

const CaseStudies = () => {
  return (
    <>
      <Breadcrumb
        pageName="Case Studies"
        description="Discover how we've helped businesses overcome challenges and achieve remarkable results through innovative solutions."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {caseStudiesData.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleCaseStudy caseStudy={caseStudy} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies; 