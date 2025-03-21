import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Datify",
  description: "Learn how Datify collects, uses, and protects your personal information.",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Your privacy is important to us. This policy outlines how we handle your data."
      />
      <section className="pb-[120px] pt-[80px]">
        <div className="container">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                1. Information We Collect
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark mb-4">
                At Datify, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-body-color dark:text-body-color-dark">
                <li className="mb-2">Personal identification information (Name, email address, phone number, etc.)</li>
                <li className="mb-2">Business information related to the services we provide</li>
                <li className="mb-2">Technical data such as browser type, IP address, device information</li>
                <li className="mb-2">Usage data about how you interact with our website and services</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                2. How We Use Your Information
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-body-color dark:text-body-color-dark">
                <li className="mb-2">Providing, operating, and maintaining our services</li>
                <li className="mb-2">Improving, personalizing, and expanding our services</li>
                <li className="mb-2">Understanding and analyzing how you use our services</li>
                <li className="mb-2">Communicating with you, including for customer service, updates, and marketing</li>
                <li className="mb-2">Developing new products, services, features, and functionality</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                3. Data Security
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                4. Data Retention
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                5. Your Rights
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-body-color dark:text-body-color-dark">
                <li className="mb-2">The right to access the personal information we hold about you</li>
                <li className="mb-2">The right to request correction of your personal information</li>
                <li className="mb-2">The right to request deletion of your personal information</li>
                <li className="mb-2">The right to withdraw consent at any time</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                6. Changes to This Privacy Policy
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                7. Contact Us
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                If you have any questions about this Privacy Policy, please contact us through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage; 