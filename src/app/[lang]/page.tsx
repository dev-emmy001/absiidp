import HeroSection from "@/components/sections/HeroSection";
import ImpactCounters from "@/components/sections/ImpactCounters";
import SnapshotCards from "@/components/sections/SnapshotCards";
import ClimateResilienceHighlight from "@/components/sections/ClimateResilienceHighlight";
import WasteManagementFlow from "@/components/sections/WasteManagementFlow";
import WhyItMatters from "@/components/sections/WhyItMatters";
import ProjectComponentsGrid from "@/components/sections/ProjectComponentsGrid";
import ResultsDashboardPreview from "@/components/sections/ResultsDashboardPreview";
import ProcurementNoticeBoard from "@/components/sections/ProcurementNoticeBoard";
import LatestNewsFeed from "@/components/sections/LatestNewsFeed";
import DevelopmentPartners from "@/components/sections/DevelopmentPartners";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ImpactCounters />
      <SnapshotCards />
      <ClimateResilienceHighlight />
      <WasteManagementFlow />
      <WhyItMatters />
      <ProjectComponentsGrid />
      <ResultsDashboardPreview />
      <ProcurementNoticeBoard />
      <LatestNewsFeed />
      <DevelopmentPartners />
    </div>
  );
}
