import React from "react";
import { Button } from "../ui/Button";

export default function WhyItMatters() {
  return (
    <section className="w-full bg-white pb-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row rounded-md overflow-hidden bg-white border border-gray-100 min-h-[320px]">
          {/* Left image area (abstract) */}
          <div className="w-full md:w-1/3 bg-[#e8f2ea] flex items-center justify-center p-8 relative overflow-hidden">
            <div className="w-48 h-48 bg-deep-green/5 rounded-full absolute -left-12 -top-12"></div>
            <div className="z-10 bg-white p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-100 w-full max-w-[200px] rounded-sm transform -rotate-3">
              <div className="w-12 h-12 bg-deep-green rounded-sm mb-4"></div>
              <div className="w-full h-2 bg-gray-100 mb-2 rounded-full"></div>
              <div className="w-full h-2 bg-gray-100 mb-2 rounded-full"></div>
              <div className="w-2/3 h-2 bg-gray-100 rounded-full"></div>
            </div>
          </div>

          {/* Right content area */}
          <div className="w-full md:w-2/3 bg-deep-green text-white p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 bottom-0 w-40 h-40 bg-gold-accent/10 rounded-full blur-2xl"></div>

            {/* <span className="bg-gold-accent text-deep-green text-[10px] font-bold uppercase tracking-widest py-1 px-3 w-fit rounded-sm mb-6">
              Why It Matters
            </span> */}
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading leading-tight tracking-tight">
              Infrastructure as unique as our people.
            </h2>
            <p className="text-white/80 text-base max-w-lg mb-8 leading-relaxed">
              ABSIIDP goes beyond concrete and roads. We focus on social inclusion, gender empowerment, and building a sustainable future for all residents of Abia State.
            </p>
            <Button href="#" variant="white" size="md" className="w-fit">
              Read Impact Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
