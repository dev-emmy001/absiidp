import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold font-heading text-gray-900 mb-6 tracking-tighter leading-tight">
          Building a Resilient <br className="hidden md:block" />
          Future for Abia State
        </h1>
        <p className="text-lg md:text-xl text-gray-500 font-sans max-w-2xl mx-auto leading-relaxed">
          The Abia State Integrated Infrastructure Development Project (ABSIIDP) is our commitment to sustainable urban renewal, economic growth, and enhanced quality of life.
        </p>
      </div>
    </section>
  );
}

