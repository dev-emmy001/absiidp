import React from "react";
import AboutHero from "@/components/sections/AboutHero";
import AboutBackground from "@/components/sections/AboutBackground";
import Timeline from "@/components/sections/Timeline";
import CircularModelDiagram from "@/components/sections/CircularModelDiagram";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <AboutHero />
      <AboutBackground />
      <CircularModelDiagram />
      <Timeline />
    </div>
  );
}
