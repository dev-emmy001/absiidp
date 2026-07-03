import React from "react";
import { DollarSign, HardHat, TrendingUp, Users } from "lucide-react";

export default function KPICards() {
  const kpis = [
    {
      title: "Total Budget Utilized",
      value: "42.5%",
      icon: <DollarSign size={24} />,
      trend: "+5.2% this quarter",
      color: "bg-blue-50 text-blue-700",
    },
    {
      title: "Infrastructure Projects",
      value: "14",
      icon: <HardHat size={24} />,
      trend: "4 completed, 10 active",
      color: "bg-orange-50 text-orange-700",
    },
    {
      title: "Roads Rehabilitated",
      value: "45 km",
      icon: <TrendingUp size={24} />,
      trend: "Target: 120 km",
      color: "bg-green-50 text-green-700",
    },
    {
      title: "Beneficiaries Reached",
      value: "250K+",
      icon: <Users size={24} />,
      trend: "Across Aba & Umuahia",
      color: "bg-purple-50 text-purple-700",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {kpis.map((kpi, i) => (
        <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-lg ${kpi.color}`}>
              {kpi.icon}
            </div>
          </div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">{kpi.title}</h3>
          <p className="text-3xl font-semibold font-heading text-gray-900 mb-2">{kpi.value}</p>
          <p className="text-sm font-medium text-gray-400 mt-auto">{kpi.trend}</p>
        </div>
      ))}
    </div>
  );
}
