"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      <Breadcrumb
        pageName="Portfolio"
        description="Check out some of the apps and tools we've built."
      />

      <section className="pb-[120px] pt-[70px]">
        <div className="container">
          <div className="flex justify-center">
            <div className="wow fadeInUp group max-w-[400px]" data-wow-delay=".1s">
              <div className="mb-8 overflow-hidden rounded-md">
                <Link href="https://apps.apple.com/app/easy-habit-tracker/id6744540714" className="block" target="_blank">
                  {/* To change the image, either:
                      1. Replace the file at public/images/portfolio/easy-habit-tracker.png with your actual screenshot
                      2. Or change the src path below to point to your image location */}
                  <Image
                    src="/images/portfolio/easy-habit-tracker.png"
                    alt="Easy Habit Tracker App"
                    width={400}
                    height={267}
                    className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                  />
                </Link>
              </div>
              <div>
                <span className="mb-5 inline-block rounded-md bg-primary px-4 py-1 text-xs font-semibold text-white">
                  iOS Application
                </span>
                <h3>
                  <Link
                    href="https://apps.apple.com/app/easy-habit-tracker/id6744540714"
                    className="mb-4 inline-block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    target="_blank"
                  >
                    Easy Habit Tracker
                  </Link>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  A simple, clean habit tracking app that helps users build better habits. Features include streak tracking, personalized insights, and an intuitive interface.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center justify-center rounded-md bg-gray-2 px-3 py-1 text-sm font-medium text-dark dark:bg-dark-2 dark:text-white">
                    Swift
                  </span>
                  <span className="inline-flex items-center justify-center rounded-md bg-gray-2 px-3 py-1 text-sm font-medium text-dark dark:bg-dark-2 dark:text-white">
                    SwiftUI
                  </span>
                  <span className="inline-flex items-center justify-center rounded-md bg-gray-2 px-3 py-1 text-sm font-medium text-dark dark:bg-dark-2 dark:text-white">
                    Core Data
                  </span>
                </div>

                <div className="mt-6">
                  <Link
                    href="https://apps.apple.com/app/easy-habit-tracker/id6744540714"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-opacity-90 hover:shadow-lg"
                  >
                    View on App Store
                    <span className="pl-2">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8334 10.0001H4.16675M15.8334 10.0001L11.6667 5.83341M15.8334 10.0001L11.6667 14.1667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio; 