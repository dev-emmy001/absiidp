import React from "react";
import { MapPin } from "lucide-react";
import { Button } from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:h-screen flex items-center bg-gradient-to-br from-deep-green to-green-900 overflow-hidden">
      {/* Background Image/Video Placeholder Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full py-20 lg:py-0">

        {/* Main Text Content */}
        <div className="max-w-3xl">
          <h1 className="font-heading font-bold text-white text-[36px] lg:text-[56px] leading-tight mb-6">
            Building Climate-Resilient Infrastructure for a Stronger Abia
          </h1>
          <p className="font-sans text-white/85 text-base lg:text-[20px] leading-relaxed mb-10">
            ABSIIDP is transforming Aba and Umuahia through integrated roads, drainage, erosion control, climate resilience, waste management readiness, social inclusion, and institutional strengthening.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">Explore the Project</Button>
            <Button variant="secondary" size="lg">Track Implementation</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
              View Procurement Opportunities
            </Button>
          </div>
        </div>

        {/* Map Overlay Placeholder */}
        <div className="mt-16 lg:mt-0 lg:absolute lg:bottom-12 lg:right-8 w-full max-w-[280px] h-[200px] bg-deep-green/80 border-2 border-gold-accent rounded-xl flex flex-col items-center justify-center p-6 backdrop-blur-sm shadow-xl">
          <MapPin size={48} className="text-gold-accent mb-4" />
          <p className="text-white font-heading font-bold text-center">
            Abia State Project Map
          </p>
        </div>

      </div>
    </section>
  );
}
