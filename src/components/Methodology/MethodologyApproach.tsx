import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const MethodologyApproach = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-white dark:bg-dark">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Our Data-Driven Approach"
                paragraph="We combine deep technical expertise with strategic thinking to deliver solutions that transform how organizations work with data."
                mb="44px"
              />

              <div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Client-Centered Discovery
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We begin every engagement with a thorough understanding of your organization, goals, and challenges. Our discovery process uncovers not just the surface problems, but the underlying data and process issues that need addressing.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Iterative Development
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We don't believe in big-bang launches. Our iterative approach allows for continuous feedback and refinement, ensuring the final solution precisely meets your needs while reducing risk and accelerating time-to-value.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Sustainable Results
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Our solutions are built to last. We focus on knowledge transfer, documentation, and creating systems that can evolve with your organization, ensuring long-term success beyond our engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/methodology/approach.svg"
                  alt="data-driven approach illustration"
                  fill
                  className="drop-shadow-three dark:hidden"
                />
                <Image
                  src="/images/methodology/approach-dark.svg"
                  alt="data-driven approach illustration"
                  fill
                  className="hidden drop-shadow-three dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyApproach; 