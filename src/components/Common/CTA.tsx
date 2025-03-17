import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
                  Ready to Transform Your Data Strategy?
                </h2>
                <p className="mb-6 text-base font-medium text-white md:text-lg lg:text-xl">
                  Our team of experts is ready to help you leverage the full potential of your data assets and drive real business outcomes.
                </p>
                <div className="flex flex-wrap items-center justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-white py-3 px-7 text-center text-base font-medium text-primary hover:bg-opacity-90 md:px-9 lg:px-11"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center rounded-md bg-opacity-0 bg-white py-3 px-7 text-center text-base font-medium text-white hover:bg-opacity-10 md:px-9 lg:px-11"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorations */}
          <div>
            <span className="absolute top-0 left-0 z-[-1]">
              <svg
                width="189"
                height="162"
                viewBox="0 0 189 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="16"
                  cy="-16.5"
                  rx="173"
                  ry="178.5"
                  transform="rotate(180 16 -16.5)"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-157"
                    y1="-107.754"
                    x2="98.5011"
                    y2="-106.425"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.4" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute bottom-0 right-0 z-[-1]">
              <svg
                width="191"
                height="208"
                viewBox="0 0 191 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="173"
                  cy="178.5"
                  rx="173"
                  ry="178.5"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-3.27832e-05"
                    y1="87.2457"
                    x2="255.501"
                    y2="88.5747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.4" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 