import React from "react";
import { Leaf } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";

export default function ClimateResilienceHighlight() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="w-full md:w-1/2">
            {/* <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-deep-green" size={24} />
              <span className="text-deep-green text-[11px] font-bold uppercase tracking-widest">
                Climate Adaptation
              </span>
            </div> */}

            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6 font-heading tracking-tight leading-tight">
              Building a <span className="text-deep-green">Sustainable</span> Future for Abia.
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              ABSIIDP integrates green infrastructure and climate-resilient practices across all urban development projects to mitigate flooding, reduce carbon footprints, and protect local ecosystems against extreme weather events.
            </p>

            {/* <ul className="space-y-4 mb-10">
              {["Flood Mitigation Systems", "Urban Tree Planting Initiatives", "Sustainable Drainage Networks"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-deep-green"></div>
                  {item}
                </li>
              ))}
            </ul> */}

            <Button href="#" variant="primary" size="lg">
              Explore Our Green Strategy
            </Button>
          </div>

          {/* Right Abstract Visual */}
          <div className="w-full md:w-1/2 bg-white rounded-sm border border-gray-100 p-8 h-[400px] flex items-center justify-center relative overflow-hidden">
            <Image src="/aba-city.jpeg" alt="Climate Resilience" fill className="object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
