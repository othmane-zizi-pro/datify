import { CaseStudy } from "@/types/caseStudy";
import Image from "next/image";
import Link from "next/link";

const SingleCaseStudy = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const { title, summary, image, company, tags, publishDate } = caseStudy;
  return (
    <>
      <div className="group relative overflow-hidden rounded-lg bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href="/case-study-details"
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {company.industry}
          </span>
          <Image src={image} alt={title} fill className="object-cover" />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <div className="mb-5 flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={company.logo} alt={company.name} fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  {company.name}
                </h4>
                <p className="text-xs text-body-color">{company.industry}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Published
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
          <h3>
            <Link
              href="/case-study-details"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center justify-center rounded-sm bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCaseStudy; 