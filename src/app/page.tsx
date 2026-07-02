import HeroSection from "@/components/sections/HeroSection";
import ImpactCounters from "@/components/sections/ImpactCounters";
import SnapshotCards from "@/components/sections/SnapshotCards";
import WhyItMatters from "@/components/sections/WhyItMatters";
import ProjectComponentsGrid from "@/components/sections/ProjectComponentsGrid";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ImpactCounters />
      <SnapshotCards />
      <WhyItMatters />
      <ProjectComponentsGrid />
    </div>
  );
}
