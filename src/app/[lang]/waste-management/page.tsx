import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import WasteManagementFlow from "@/components/sections/WasteManagementFlow";

export const metadata = {
  title: "Waste Management | ABSIIDP",
  description: "Modernizing waste collection and establishing transfer stations in Abia State.",
};

export default function WasteManagementPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] bg-gray-900 flex items-center justify-center">
        <Image
          src="/aba-city.jpeg"
          alt="Waste Management"
          fill
          className="object-cover opacity-40 mix-blend-overlay grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-green/90 to-transparent" />

        <div className="relative z-10 text-center max-w-4xl px-4 mt-16">
          {/* <div className="inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-md rounded-full mb-6">
            <Trash2 size={32} className="text-white" />
          </div> */}
          <h1 className="text-4xl md:text-5xl font-semibold font-heading text-white mb-6 tracking-tight leading-tight">
            Solid Waste Management
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Transforming urban sanitation in Aba and Umuahia through modernized collection, recycling, and sustainable transfer stations.
          </p>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold font-heading text-gray-900 mb-6">
            A Cleaner, Healthier Abia
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Improper waste disposal has long been a challenge in our urban centers, leading to blocked drainages, flooding, and public health concerns. The Solid Waste Management component of ABSIIDP aims to completely overhaul this system. By investing in modern fleet infrastructure and empowering local environmental agencies, we are creating a cleaner, more vibrant state for all residents.
          </p>
        </div>
      </section>

      {/* Integrated Waste Flow Diagram */}
      <WasteManagementFlow />

    </main>
  );
}
