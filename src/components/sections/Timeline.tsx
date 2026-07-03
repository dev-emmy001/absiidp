import React from "react";

export default function Timeline() {
  const milestones = [
    {
      year: "2023",
      title: "Project Inception",
      description: "Initial studies and feasibility reports conducted to identify key infrastructure needs across Abia State."
    },
    {
      year: "2024",
      title: "Funding & Approvals",
      description: "Secured necessary funding from AfDB, IsDB, and the Federal Government. Project designs finalized."
    },
    {
      year: "2025",
      title: "Project Launch",
      description: "Official launch by the Executive Governor, marking the commencement of Phase 1 road rehabilitation and drainage construction."
    },
    {
      year: "2026",
      title: "Mid-Term Review",
      description: "Evaluation of initial phase outcomes and expansion of solid waste management and climate resilience initiatives."
    },
    {
      year: "2028",
      title: "Expected Completion",
      description: "Finalization of all major civil works, institutional capacity building, and handover to state maintenance agencies."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-tight text-green-600 uppercase mb-4">
            Project Timeline
          </h2>
          <p className="text-gray-900 text-xl md:text-2xl font-medium tracking-tight">
            A chronological overview of the ABSIIDP milestones, from inception through execution and expected completion.
          </p>
        </div>

        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
              <div className="md:w-32 shrink-0">
                <span className="text-3xl font-semibold font-heading text-gray-300">
                  {milestone.year}
                </span>
              </div>
              <div className="pb-8 md:pb-0 border-b border-gray-200 md:border-b-0 w-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

