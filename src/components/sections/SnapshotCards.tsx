import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export default function SnapshotCards() {
  const cards = [
    {
      title: "Roads & Transport",
      description: "Rehabilitation of major urban corridors and junctions to improve traffic flow and safety across Abia State.",
      link: "#",
      bgColor: "bg-[#e8f2ea]"
    },
    {
      title: "Stormwater Management",
      description: "Construction of resilient drainage systems to mitigate urban flooding in key commercial and residential areas.",
      link: "#",
      bgColor: "bg-[#e6f4f1]"
    },
    {
      title: "Waste Management",
      description: "Modernizing solid waste collection and establishing new transfer stations for a cleaner, greener environment.",
      link: "#",
      bgColor: "bg-[#fcf5e3]"
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            Find and Access Core Project Information
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Explore the comprehensive approach ABSIIDP is taking to build resilient infrastructure, improve mobility, and enhance the quality of life in Abia State.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              {/* Abstract Header Image Placeholder */}
              <div className={`w-full h-48 ${card.bgColor} flex items-center justify-center p-8`}>
                <div className="w-full h-full bg-white/40 border border-white/60 rounded-sm"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">{card.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">{card.description}</p>
                <Button href={card.link} variant="primary" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#" className="inline-flex items-center text-sm text-gray-500 font-semibold hover:text-deep-green transition-colors uppercase tracking-widest">
            Explore All Documents <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
