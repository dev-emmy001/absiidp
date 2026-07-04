import React from "react";
import { BarChart3, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export default function ResultsDashboardPreview() {
  return (
    <section className="w-full bg-white py-24 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full"></div>

      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl text-black md:text-4xl font-semibold mb-6 tracking-tight leading-tight">
              Data-Driven <br />Transparency.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Track ABSIIDP's progress in real-time. Our public Results Dashboard provides comprehensive metrics on infrastructure deployment, budget utilization, and community impact.
            </p>
            <Button href="/dashboard" variant="primary" size="lg">
              Open Live Dashboard
            </Button>
          </div>

          {/* Dashboard Shell Preview */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#111827] rounded-md shadow-2xl p-6 md:p-8 relative">

              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-8 pb-6 ">
                <div className="flex items-center gap-3">
                  {/* <BarChart3 className="text-deep-green" size={24} /> */}
                  <span className="font-semibold text-lg">Project Performance</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Metric 1 */}
                <div className="bg-[#1f2937] p-5 rounded-sm">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Budget Utilized</p>
                  <p className="text-2xl font-semibold text-white mb-2">42.5%</p>
                  <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-deep-green w-[42.5%] h-full"></div>
                  </div>
                </div>
                {/* Metric 2 */}
                <div className="bg-[#1f2937] p-5 rounded-sm">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Roads Completed</p>
                  <p className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                    45 <span className="text-xs font-normal text-gray-400">/ 120 km</span>
                  </p>
                  <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gold-accent w-[37%] h-full"></div>
                  </div>
                </div>
                {/* Metric 3 */}
                <div className="bg-[#1f2937] p-5 rounded-sm flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-green-400">
                    <TrendingUp size={24} />
                    <span className="font-semibold">+12%</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Impact Growth (YoY)</p>
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="w-full h-32  flex items-end justify-around pb-0 pt-4 px-2">
                {[40, 70, 45, 90, 65, 80, 50, 100].map((height, i) => (
                  <div key={i} className="w-1/12 bg-deep-green/80 rounded-t-sm" style={{ height: `${height}%` }}></div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
