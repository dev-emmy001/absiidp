import React from "react";
import KPICards from "@/components/dashboard/KPICards";
import ProgressCharts from "@/components/dashboard/ProgressCharts";
import ReportingDownloads from "@/components/dashboard/ReportingDownloads";

export const metadata = {
  title: "Results Dashboard | ABSIIDP",
  description: "Real-time metrics and progress for the Abia State Integrated Infrastructure Development Project.",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold font-heading text-gray-900 mb-4 tracking-tight">
            Results Dashboard
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
            Track our progress transparently. This dashboard provides real-time, data-driven insights into budget utilization, infrastructure deployment, and community impact across Abia State.
          </p>
        </div>

        {/* KPI Cards */}
        <KPICards />

        {/* Recharts Data Visualization */}
        <ProgressCharts />

        {/* Downloads */}
        <ReportingDownloads />

      </div>
    </div>
  );
}
