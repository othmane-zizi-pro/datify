"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";

const Portfolio = () => {
  return (
    <>
      <Breadcrumb
        pageName="Portfolio"
        description="Check out some of the public apps and tools we've built."
      />

      <section className="pb-[120px] pt-[70px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div key={item.id} className="wow fadeInUp group" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-md">
                  <Link href={item.link} className="block" target={item.link.startsWith('http') ? '_blank' : undefined}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={267}
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </Link>
                </div>
                <div>
                  <span className="mb-5 inline-block rounded-md bg-primary px-4 py-1 text-xs font-semibold text-white">
                    {item.category}
                  </span>
                  <h3>
                    <Link
                      href={item.link}
                      className="mb-4 inline-block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="inline-flex items-center justify-center rounded-md bg-gray-2 px-3 py-1 text-sm font-medium text-dark dark:bg-dark-2 dark:text-white">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={item.link}
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-opacity-90 hover:shadow-lg"
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                    >
                      {item.link.startsWith('http') ? 'View on App Store' : 'View Project'}
                      <span className="pl-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.8334 10.0001H4.16675M15.8334 10.0001L11.6667 5.83341M15.8334 10.0001L11.6667 14.1667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio; 