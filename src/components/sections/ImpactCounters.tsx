"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ImpactCounters() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const counterData = [
    { value: 200, suffix: "km+", label: "Roads Rehabilitated" },
    { value: 1.5, suffix: "m+", label: "Beneficiaries", decimals: 1 },
    { value: 120, suffix: "km+", label: "Drainage Systems" },
    { value: 5, suffix: "m+", label: "Tonnes Waste Managed" },
    { value: 15, suffix: "+", label: "Local Communities" },
  ];

  return (
    <section className="w-full bg-white py-12" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 text-center">
          {counterData.map((counter, index) => (
            <div key={index} className="flex-1 min-w-[140px]">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 font-heading tracking-tight">
                {inView ? (
                  <CountUp
                    end={counter.value}
                    duration={2.5}
                    decimals={counter.decimals || 0}
                    suffix={counter.suffix}
                  />
                ) : "0"}
              </h3>
              <p className="text-[11px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
