import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Datify",
  description: "Terms of Service and legal agreements for using Datify services.",
};

const TermsOfServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        description="Please read these terms carefully before using our services."
      />
      <section className="pb-[120px] pt-[80px]">
        <div className="container">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                1. Acceptance of Terms
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                By accessing or using Datify's services, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                2. Use License
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark mb-4">
                Permission is granted to temporarily use Datify's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-body-color dark:text-body-color-dark">
                <li className="mb-2">Modify or copy the materials;</li>
                <li className="mb-2">Use the materials for any commercial purpose, or for any public display;</li>
                <li className="mb-2">Remove any copyright or other proprietary notations from the materials;</li>
                <li className="mb-2">Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Datify at any time.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                3. Disclaimer
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                The materials on Datify's website are provided on an 'as is' basis. Datify makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                4. Limitations
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                In no event shall Datify or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Datify's services, even if Datify or a Datify authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                5. Changes to Terms
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Datify reserves the right, at its sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                6. Contact Information
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                If you have any questions about these Terms, please contact us through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage; 