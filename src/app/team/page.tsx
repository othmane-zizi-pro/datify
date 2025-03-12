import Breadcrumb from "@/components/Common/Breadcrumb";
import teamData from "@/components/Team/teamData";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Datify",
  description: "Meet the talented professionals behind our success",
};

const TeamPage = () => {
  const founder = teamData[0]; // Get the founder/first team member

  // Function to render text with line breaks
  const renderWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      <Breadcrumb
        pageName="Our Team"
        description="Meet the talented professionals behind our success and learn about their expertise and accomplishments."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="wow fadeInUp mb-12 rounded-md bg-white p-8 shadow-three dark:bg-gray-dark sm:p-10 lg:p-12" data-wow-delay=".1s">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative h-80 w-[36rem] overflow-hidden rounded-full">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                      {founder.name}
                    </h3>
                    <p className="mb-5 text-lg font-medium text-body-color">
                      {founder.position}
                    </p>
                    <div className="mb-6 flex items-center justify-center md:justify-start">
                      {founder.socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mr-5 text-body-color hover:text-primary"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                          >
                            <path d={social.icon} />
                          </svg>
                        </a>
                      ))}
                    </div>
                    <p className="text-base text-body-color">
                      {renderWithLineBreaks(founder.bio)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-three dark:bg-gray-dark sm:p-10 lg:p-12 mb-12" data-wow-delay=".1s">
                <h3 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Accomplishments
                </h3>
                <div className="flex flex-col gap-8">
                  {founder.accomplishments.map((accomplishment, index) => (
                    <div key={index} className="border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10 last:border-0 last:pb-0">
                      <div className="flex flex-wrap items-center">
                        <div className="w-full">
                          <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                            {accomplishment.title}
                            {accomplishment.year && (
                              <span className="ml-2 text-base font-normal text-body-color">
                                ({accomplishment.year})
                              </span>
                            )}
                          </h4>
                          <p className="text-base text-body-color">
                            {accomplishment.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-three dark:bg-gray-dark sm:p-10 lg:p-12 mb-12" data-wow-delay=".1s">
                <h3 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Education
                </h3>
                <div className="flex flex-col gap-8">
                  {founder.education.map((edu, index) => (
                    <div key={index} className="border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10 last:border-0 last:pb-0">
                      <div className="flex flex-wrap items-center">
                        <div className="w-full">
                          <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                            {edu.degree}
                            {edu.year && (
                              <span className="ml-2 text-base font-normal text-body-color">
                                ({edu.year})
                              </span>
                            )}
                          </h4>
                          <p className="text-base text-body-color">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="wow fadeInUp rounded-md bg-primary bg-opacity-5 p-8 dark:bg-opacity-5 sm:p-10 lg:p-12" data-wow-delay=".1s">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Join Our Team
                </h3>
                <p className="mb-8 text-base text-body-color">
                  We're always looking for talented individuals to join our growing team. If you're passionate about technology and innovation, we'd love to hear from you.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage; 