import React from "react";
import { CircleCheck } from "lucide-react";

export default function AboutBackground() {
  const objectives = [
    "Alleviate traffic congestion by developing robust road networks.",
    "Implement effective flood mitigation and drainage systems.",
    "Promote sustainable solid waste management practices.",
    "Enhance the state's institutional framework and capacity.",
    "Support climate resilience and green infrastructure initiatives."
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Project Background */}
        <div className="mb-20">
          <h2 className="text-sm font-semibold tracking-tight text-green-600 uppercase mb-4">
            Project Background
          </h2>
          <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed font-light">
            <p>
              The Abia State Integrated Infrastructure Development Project (ABSIIDP) was conceived to address critical infrastructure deficits across the state, primarily in the areas of road networks, environmental management, and institutional capacity.
            </p>
            <p>
              Urban centers like Aba and Umuahia have experienced rapid population growth, placing immense pressure on existing infrastructure. ABSIIDP aims to bridge this gap through a comprehensive, multi-sectoral approach that involves government agencies, private stakeholders, and international development partners.
            </p>
          </div>
        </div>

        {/* Development Objective */}
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-green-600 uppercase mb-4">
            Core Objectives
          </h2>
          <p className="text-gray-900 text-xl md:text-2xl font-medium mb-8 tracking-tight">
            To contribute to the economic development of Abia State through the provision of resilient urban infrastructure and improved service delivery.
          </p>

          <ul className="space-y-5">
            {objectives.map((obj, index) => (
              <li key={index} className="flex items-start">
                <CircleCheck className="w-5 h-5 text-green-600 mt-1 shrink-0 mr-4" strokeWidth={1} />
                <span className="text-gray-600 text-lg font-light">{obj}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

