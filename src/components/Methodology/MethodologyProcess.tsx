import SectionTitle from "../Common/SectionTitle";

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="w-full px-4 md:w-1/2">
      <div className="mb-12 flex lg:mb-20">
        <div className="mr-4 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <span className="text-3xl font-bold">{number}</span>
        </div>
        <div>
          <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="text-base text-body-color">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const MethodologyProcess = () => {
  return (
    <section className="pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="container">
        <SectionTitle
          title="Our Proven Process"
          paragraph="We follow a structured yet flexible process that ensures quality, transparency, and successful outcomes for every project."
          center
          mb="60px"
        />

        <div className="-mx-4 flex flex-wrap">
          <ProcessStep
            number="01"
            title="Discovery & Analysis"
            description="We begin with a deep dive into your business, current data landscape, and specific challenges. Through stakeholder interviews, system reviews, and data analysis, we develop a comprehensive understanding of your needs and opportunities."
          />
          
          <ProcessStep
            number="02"
            title="Strategic Roadmap"
            description="Based on our findings, we create a detailed roadmap that outlines the technical approach, timeline, resource requirements, and expected outcomes. This strategic plan aligns with your business goals and provides a clear path forward."
          />
          
          <ProcessStep
            number="03"
            title="Solution Design"
            description="Our experts design a comprehensive solution architecture that addresses your specific needs. This includes data models, integration points, technology stack recommendations, and security considerations, all documented for clarity and alignment."
          />
          
          <ProcessStep
            number="04"
            title="Agile Development"
            description="We implement the solution using agile methodology, breaking the work into manageable sprints with regular demonstrations and feedback sessions. This approach ensures visibility, quality, and the ability to adapt as needed."
          />
          
          <ProcessStep
            number="05"
            title="Testing & Validation"
            description="Every solution undergoes rigorous testing including unit tests, integration tests, performance testing, and user acceptance testing. We validate not just the functionality but also the business value and user experience."
          />
          
          <ProcessStep
            number="06"
            title="Deployment & Training"
            description="We carefully manage the deployment process to minimize disruption and ensure a smooth transition. Comprehensive training and documentation ensure your team is equipped to leverage the new solution effectively."
          />

          <ProcessStep
            number="07"
            title="Ongoing Support & Optimization"
            description="Our relationship doesn't end at deployment. We provide ongoing support, monitor performance, and continuously identify opportunities for optimization and enhancement to maximize long-term value."
          />

          <ProcessStep
            number="08"
            title="Value Assessment"
            description="We conduct regular assessments to quantify the impact of our solutions on your business. These reviews measure ROI, identify new opportunities, and ensure the solution continues to align with your evolving business needs."
          />
        </div>
      </div>
    </section>
  );
};

export default MethodologyProcess; 