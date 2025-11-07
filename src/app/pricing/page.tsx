import SectionTitle from "@/components/Common/SectionTitle";
import PricingBox from "@/components/Pricing/PricingBox";
import OfferList from "@/components/Pricing/OfferList";

export default function PricingPage() {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-[#f8fafc] dark:bg-black min-h-screen">
      <div className="container">
        <SectionTitle
          title="Consulting & Implementation Packages"
          paragraph="Datify delivers tailored technology solutions for startups and SMBs—whether you need a custom analytics dashboard, workflow automation, or AI-powered business agents. Our transparent hourly rates and expert guidance help you achieve rapid, cost-effective results."
          center
          width="700px"
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <PricingBox
            packageName="Essentials"
            price="125"
            duration="hr"
            subtitle="Ideal for focused projects: get expert help on dashboards, reporting, or workflow automation."
          >
            <OfferList text="Business analytics dashboard creation" status="active" />
            <OfferList text="KPI & reporting setup" status="active" />
            <OfferList text="Workflow automation (Zapier, Make, custom)" status="active" />
            <OfferList text="No-code/low-code solutions" status="active" />
            <OfferList text="Email support" status="active" />
            <OfferList text="AI agent integration" status="inactive" />
            <OfferList text="Dedicated project manager" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Automation & AI"
            price="175"
            duration="hr"
            subtitle="For teams ready to automate, optimize, and leverage AI for business growth."
          >
            <OfferList text="All Essentials features" status="active" />
            <OfferList text="Custom workflow automation" status="active" />
            <OfferList text="AI agent deployment (e.g., customer support, data entry)" status="active" />
            <OfferList text="Integration with business tools (CRM, ERP, etc.)" status="active" />
            <OfferList text="Priority support" status="active" />
            <OfferList text="Dedicated project manager" status="inactive" />
            <OfferList text="On-site training" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Enterprise Transformation"
            price="Custom"
            duration=""
            subtitle="For organizations seeking end-to-end digital transformation and ongoing partnership."
          >
            <OfferList text="All Automation & AI features" status="active" />
            <OfferList text="Bespoke analytics & BI solutions" status="active" />
            <OfferList text="Advanced AI agent development" status="active" />
            <OfferList text="Custom integrations & SLAs" status="active" />
            <OfferList text="Dedicated project manager" status="active" />
            <OfferList text="Ongoing optimization & support" status="active" />
            <OfferList text="On-site workshops & training" status="active" />
          </PricingBox>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-primary mb-2">Ready to unlock your business potential?</h3>
          <p className="text-lg text-body-color mb-6 text-center max-w-xl">Book a free discovery call with Datify. We'll help you scope your project and provide a transparent, no-obligation quote tailored to your needs.</p>
          <a
            href="/contact"
            className="inline-block rounded bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-opacity-90"
          >
            Book Your Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
} 