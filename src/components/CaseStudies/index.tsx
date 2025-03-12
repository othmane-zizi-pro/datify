import SectionTitle from "../Common/SectionTitle";
import SingleCaseStudy from "./SingleCaseStudy";
import caseStudiesData from "./caseStudiesData";

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="bg-white dark:bg-black py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Success Stories"
          paragraph="Discover how we've helped businesses overcome challenges and achieve remarkable results through innovative solutions."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {caseStudiesData.map((caseStudy) => (
            <div key={caseStudy.id} className="w-full">
              <SingleCaseStudy caseStudy={caseStudy} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 