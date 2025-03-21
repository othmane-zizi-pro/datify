import SectionTitle from "../Common/SectionTitle";
import SingleCaseStudy from "./SingleCaseStudy";
import caseStudiesData from "./caseStudiesData";
import Link from "next/link";

const LatestCaseStudies = () => {
  // Sort case studies by date (most recent first) and take the latest 3
  const latestCaseStudies = [...caseStudiesData]
    .sort((a, b) => {
      // Sort in descending order (newest first)
      return b.publishDate.localeCompare(a.publishDate);
    })
    .slice(0, 3);

  return (
    <section
      id="latest-case-studies"
      className="bg-primary/5 dark:bg-dark-2 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Latest Case Studies"
          paragraph="Explore our recent projects and see how we've helped organizations overcome challenges and achieve their goals."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {latestCaseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="w-full h-full flex">
              <SingleCaseStudy caseStudy={caseStudy} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/case-studies"
            className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestCaseStudies; 