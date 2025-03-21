import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Guarantee | Datify",
  description: "Our commitment to delivering quality technology services and solutions.",
};

const ServiceGuaranteePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Service Guarantee"
        description="Our commitment to excellence and client satisfaction."
      />
      <section className="pb-[120px] pt-[80px]">
        <div className="container">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Our Commitment to Quality
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                At Datify, quality is at the core of everything we do. We're committed to delivering solutions that not only meet but exceed our clients' expectations. Our dedication to excellence ensures that each project receives the attention to detail it deserves.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Client Satisfaction Promise
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark mb-4">
                Our service guarantee is built on these fundamental principles:
              </p>
              <ul className="list-disc pl-6 mb-4 text-body-color dark:text-body-color-dark">
                <li className="mb-2">Transparent communication throughout the project lifecycle</li>
                <li className="mb-2">Adherence to agreed-upon timelines and milestones</li>
                <li className="mb-2">Regular progress updates and feedback integration</li>
                <li className="mb-2">Post-deployment support and continuous improvement</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Technical Excellence
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark mb-4">
                We pride ourselves on technical excellence across all aspects of our service:
              </p>
              <ul className="list-disc pl-6 mb-4 text-body-color dark:text-body-color-dark">
                <li className="mb-2">Code quality that meets industry best practices</li>
                <li className="mb-2">Comprehensive testing protocols for reliable, bug-free solutions</li>
                <li className="mb-2">Scalable architecture designed for future growth</li>
                <li className="mb-2">Security-first approach to protect your data and users</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Continuous Support
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Our relationship with clients doesn't end at project delivery. We provide ongoing support to ensure your solution continues to perform optimally as your business evolves. From regular maintenance to feature enhancements, we're committed to the long-term success of your digital assets.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Knowledge Transfer
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                We believe in empowering our clients with the knowledge to maximize the value of their technology investments. Our team provides comprehensive documentation and training to ensure your team can confidently manage and utilize your new solutions.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Measuring Success
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                We measure our success by the impact our solutions have on your business. Through defined KPIs and regular performance reviews, we ensure that our technology solutions deliver measurable value and contribute to your business objectives.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Contact Us
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                If you have any questions about our service guarantee or would like to discuss how we can help with your technology needs, please reach out through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceGuaranteePage; 