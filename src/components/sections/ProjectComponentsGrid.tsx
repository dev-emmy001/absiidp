import React from "react";
import Link from "next/link";
import { projectComponentsData } from "@/lib/componentsData";

export default function ProjectComponentsGrid() {
  return (
    <section className="w-full bg-white py-24 " id="components">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight">
            Browse Project Components & Topics
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {projectComponentsData.map((item, index) => (
            <Link href={`/project-components/${item.slug}`} key={index} className="group bg-white p-10 border border-gray-100 flex flex-col items-center text-center hover:border-deep-green/30 transition-colors">
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
