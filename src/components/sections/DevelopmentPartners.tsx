import React from "react";

export default function DevelopmentPartners() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1000px] mx-auto px-4">
        
        <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-10">
          Implemented in Partnership With
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          
          {/* Partner Placeholder 1 (Abia State) */}
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
             <span className="font-bold text-sm text-gray-700 leading-tight">Abia State<br/>Government</span>
          </div>

          {/* Partner Placeholder 2 (FG) */}
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
             <span className="font-bold text-sm text-gray-700 leading-tight">Federal Govt<br/>of Nigeria</span>
          </div>

          {/* Partner Placeholder 3 (AfDB) */}
          <div className="flex items-center gap-3">
             <div className="w-12 h-10 bg-gray-300 rounded-sm"></div>
             <span className="font-bold text-sm text-gray-700 leading-tight">African<br/>Development Bank</span>
          </div>

          {/* Partner Placeholder 4 (IsDB) */}
          <div className="flex items-center gap-3">
             <div className="w-12 h-10 bg-gray-300 rounded-sm"></div>
             <span className="font-bold text-sm text-gray-700 leading-tight">Islamic<br/>Development Bank</span>
          </div>

        </div>

      </div>
    </section>
  );
}
