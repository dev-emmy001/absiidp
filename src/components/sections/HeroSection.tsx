import React from "react";
import { Search, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-24 pb-0 overflow-hidden relative">
      <div className="max-w-[900px] mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
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
      
      {/* Decorative Cityscape / Infrastructure Silhouette */}
      <div className="w-full h-48 md:h-64 bg-[#f8faf9] flex items-end justify-center relative mt-8 border-t border-gray-100">
        <div className="absolute bottom-0 w-full h-1/2 bg-deep-green/5"></div>
        {/* Abstract representation of infrastructure - bridges, buildings, roads */}
        <div className="flex items-end justify-center w-full max-w-[1200px] gap-2 px-4 opacity-80">
           <div className="w-16 h-24 bg-gray-200 rounded-t-sm"></div>
           <div className="w-24 h-40 bg-gray-300 rounded-t-sm"></div>
           <div className="w-12 h-32 bg-gray-200 rounded-t-sm"></div>
           <div className="w-full max-w-[400px] h-12 bg-deep-green relative mx-4 rounded-t-sm">
              {/* Bridge detail */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[40px] border-l-transparent border-b-[64px] border-b-gray-300 border-r-[40px] border-r-transparent"></div>
           </div>
           <div className="w-20 h-28 bg-gray-200 rounded-t-md"></div>
           <div className="w-32 h-48 bg-gray-300 rounded-t-full"></div>
           <div className="w-16 h-20 bg-gray-200 rounded-t-sm"></div>
        </div>
      </div>
    </section>
  );
}
