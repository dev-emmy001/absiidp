"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

export default function ProgressCharts() {
  const componentData = [
    { name: "Road Infrastructure", progress: 65, fill: "#16a34a" },
    { name: "Waste Management", progress: 30, fill: "#2563eb" },
    { name: "Storm Water", progress: 45, fill: "#eab308" },
    { name: "Capacity Building", progress: 80, fill: "#9333ea" },
  ];

  const budgetData = [
    { month: "Jan", expenditure: 2.4, target: 2.5 },
    { month: "Feb", expenditure: 3.1, target: 3.0 },
    { month: "Mar", expenditure: 4.8, target: 4.5 },
    { month: "Apr", expenditure: 5.2, target: 5.5 },
    { month: "May", expenditure: 6.9, target: 7.0 },
    { month: "Jun", expenditure: 8.5, target: 8.5 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Component Progress Chart */}
      <div className="bg-white p-6 rounded-xl  border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Component Progress (%)</h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={componentData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
              <RechartsTooltip cursor={{ fill: "transparent" }} />
              <Bar dataKey="progress" radius={[0, 4, 4, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Budget Expenditure Chart */}
      <div className="bg-white p-6 rounded-xl border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Budget Expenditure (Millions USD)</h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={budgetData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <RechartsTooltip />
              <Legend />
              <Line type="monotone" dataKey="expenditure" stroke="#16a34a" strokeWidth={3} activeDot={{ r: 8 }} name="Actual Spend" />
              <Line type="monotone" dataKey="target" stroke="#9ca3af" strokeWidth={2} strokeDasharray="5 5" name="Target Spend" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
