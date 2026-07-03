import React from "react";
import { Trash2, Truck, Recycle, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WasteManagementFlow() {
  const steps = [
    {
      id: "01",
      title: "Collection",
      desc: "Modernized urban waste collection networks.",
      icon: <Trash2 size={28} />
    },
    {
      id: "02",
      title: "Transfer",
      desc: "Efficient transit to designated processing facilities.",
      icon: <Truck size={28} />
    },
    {
      id: "03",
      title: "Processing",
      desc: "Sorting, recycling, and material recovery.",
      icon: <Recycle size={28} />
    },
    {
      id: "04",
      title: "Sustainability",
      desc: "Safe disposal and environmental protection.",
      icon: <Leaf size={28} />
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            Integrated Waste Management
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Establishing a modern, efficient, and sustainable solid waste management system to ensure cleaner, healthier communities.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden md:flex items-center justify-between relative mb-16 px-4">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center w-48 bg-white px-2">
              <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center text-deep-green mb-6 shadow-[0_0_0_8px_white]">
                {step.icon}
              </div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Step {step.id}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-xs text-gray-500 text-center leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Process Flow (Vertical) */}
        <div className="md:hidden flex flex-col space-y-8 mb-12 relative border-l border-gray-100 ml-6 pl-8 py-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[49px] top-0 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-deep-green">
                {step.icon}
              </div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest block mb-1">Step {step.id}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#" className="inline-flex items-center text-sm text-gray-500 font-semibold hover:text-deep-green transition-colors uppercase tracking-widest">
            Stuffs <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
