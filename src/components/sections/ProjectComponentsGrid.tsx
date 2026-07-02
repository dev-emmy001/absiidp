import React from "react";
import Link from "next/link";
import {
  Building2,
  Droplets,
  Trash2,
  Users,
  Leaf,
  Briefcase
} from "lucide-react";

export default function ProjectComponentsGrid() {
  const components = [
    {
      title: "Road Infrastructure",
      description: "Rehabilitation of roads and transport networks for better connectivity.",
      icon: <Building2 size={36} strokeWidth={1.5} />,
      link: "#"
    },
    {
      title: "Stormwater Drainage",
      description: "Flood mitigation and advanced water management systems.",
      icon: <Droplets size={36} strokeWidth={1.5} />,
      link: "#"
    },
    {
      title: "Solid Waste Management",
      description: "Modernizing waste collection and establishing transfer stations.",
      icon: <Trash2 size={36} strokeWidth={1.5} />,
      link: "#"
    },
    {
      title: "Social Inclusion",
      description: "Empowering communities, prioritizing gender equity and safety.",
      icon: <Users size={36} strokeWidth={1.5} />,
      link: "#"
    },
    {
      title: "Climate Resilience",
      description: "Integrating green, sustainable practices into urban planning.",
      icon: <Leaf size={36} strokeWidth={1.5} />,
      link: "#"
    },
    {
      title: "Institutional Capacity",
      description: "Strengthening state agencies and governance frameworks.",
      icon: <Briefcase size={36} strokeWidth={1.5} />,
      link: "#"
    }
  ];

  return (
    <section className="w-full bg-white py-24 ">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight">
            Browse Project Components & Topics
          </h2>
          {/* <p className="text-deep-green text-[11px] font-bold uppercase tracking-[0.15em]">
            Discover how ABSIIDP is transforming Abia State
          </p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {components.map((item, index) => (
            <Link href={item.link} key={index} className="group bg-white p-10 border border-gray-100 flex flex-col items-center text-center hover:border-deep-green/30 transition-colors">
              <div className="text-deep-green mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
