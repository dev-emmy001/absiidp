"use client";

import React from "react";
import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useDictionary } from "../providers/DictionaryProvider";

export default function HeroSection() {
  const dictionary = useDictionary();

  return (
    <section className="w-full bg-white pt-24 pb-0 overflow-hidden relative">

      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent -z-10"></div>

      <div className="max-w-4xl mx-auto text-center px-4 md:px-8 mt-12 relative z-10">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-tight leading-tight mb-6 font-heading">
          {dictionary.hero.title} <span className="text-deep-green block mt-2">{dictionary.hero.subtitle}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {dictionary.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="w-full sm:w-auto px-8 py-4 bg-deep-green text-white font-semibold rounded-md hover:bg-green-800 transition-all hover:-translate-y-0.5">
            {dictionary.hero.explore_btn}
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 font-semibold rounded-md border border-gray-200 hover:border-deep-green hover:text-deep-green transition-all">
            {dictionary.hero.dashboard_btn}
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto bg-white rounded-full border border-gray-100 p-2 flex items-center mb-8">
          <div className="pl-4 text-gray-400">
            <Search size={22} />
          </div>
          <input
            type="text"
            placeholder={dictionary.header.search_placeholder}
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
