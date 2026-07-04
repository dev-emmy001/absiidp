import React from "react";
import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-24 pb-0 overflow-hidden relative">
      <div className="max-w-[900px] mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-tight mb-8">
          Smarter Access to <span className="text-deep-green">ABSIIDP</span> Information for Everyone
        </h1>

        <div className="relative max-w-2xl mx-auto bg-white rounded-full flex items-center p-2 mb-16 border border-gray-200 focus-within:border-deep-green focus-within:ring-1 focus-within:ring-deep-green transition-all">
          <Search className="text-gray-400 ml-4 shrink-0" size={24} />
          <input
            type="text"
            placeholder="Search project components, documents, news..."
            className="flex-1 bg-transparent border-none outline-none px-4 text-gray-700 text-lg placeholder:text-gray-400 w-full"
          />
          <button className="bg-gray-900 text-white rounded-full p-3 hover:bg-deep-green transition-colors">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center mt-12 mb-8 px-4">
        <div className="relative w-full max-w-4xl h-64 md:h-[400px] bg-[#f8faf9] rounded-2xl overflow-hidden border border-gray-50 md:p-4">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image src="/Abia_state_tower.jpg" alt="Abia State Tower" fill className="object-cover w-full h-full object-center" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
