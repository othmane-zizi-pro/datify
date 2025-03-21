import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Datify - Technology Solutions",
  description: "Get in touch with our team for technology consulting, development services, and support.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Reach out to our team of experts for technology consulting, custom development solutions, or support for your existing projects."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
