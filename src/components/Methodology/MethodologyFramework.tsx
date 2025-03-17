import SectionTitle from "../Common/SectionTitle";

const SingleFramework = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-xl bg-white p-8 shadow-three dark:bg-gray-dark">
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <div className="text-base font-medium leading-relaxed text-body-color">
          {children}
        </div>
      </div>
    </div>
  );
};

const MethodologyFramework = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-[#F8FAFB] dark:bg-black/20">
      <div className="container">
        <SectionTitle
          title="Our Frameworks"
          paragraph="We've developed a set of powerful frameworks that guide our work and deliver exceptional results for our clients."
          center
          mb="60px"
        />

        <div className="-mx-4 flex flex-wrap">
          <SingleFramework title="D3 Data Framework">
            <p className="mb-3">
              Our proprietary <span className="font-bold">D</span>iscover, <span className="font-bold">D</span>evelop, <span className="font-bold">D</span>eploy framework ensures a comprehensive approach to every data challenge.
            </p>
            <p>
              We begin by discovering your unique needs, develop tailored solutions through iterative processes, and deploy with thorough testing and validation to ensure seamless integration.
            </p>
          </SingleFramework>
          
          <SingleFramework title="Impact Assessment Matrix">
            <p className="mb-3">
              Our Impact Assessment Matrix helps prioritize initiatives based on business value and implementation complexity.
            </p>
            <p>
              This framework ensures we focus resources on high-impact, achievable solutions first, creating early wins while building toward comprehensive transformation.
            </p>
          </SingleFramework>
          
          <SingleFramework title="Agile Data Methodology">
            <p className="mb-3">
              We apply agile principles specifically optimized for data projects, with sprints focused on delivering tangible outcomes at each stage.
            </p>
            <p>
              This approach allows for continuous feedback, rapid course correction, and ensures alignment between technical implementation and business objectives throughout the project.
            </p>
          </SingleFramework>
          
          <SingleFramework title="Technical Excellence Principles">
            <p className="mb-3">
              Our commitment to technical excellence is governed by core principles: scalability, maintainability, security, and performance.
            </p>
            <p>
              Every solution we design adheres to these principles, ensuring your data infrastructure can grow with your business while maintaining integrity and efficiency.
            </p>
          </SingleFramework>
          
          <SingleFramework title="Knowledge Transfer Protocol">
            <p className="mb-3">
              We've developed a structured approach to knowledge transfer that ensures your team can maintain and extend solutions after our engagement ends.
            </p>
            <p>
              This includes documentation standards, training modules, and collaborative development practices that build capability within your organization.
            </p>
          </SingleFramework>
          
          <SingleFramework title="Continuous Value Assessment">
            <p className="mb-3">
              Our projects include regular value assessments to quantify the impact of our work and identify opportunities for additional value creation.
            </p>
            <p>
              This framework keeps our focus on delivering measurable business outcomes rather than just technical deliverables.
            </p>
          </SingleFramework>
        </div>
      </div>
    </section>
  );
};

export default MethodologyFramework; 