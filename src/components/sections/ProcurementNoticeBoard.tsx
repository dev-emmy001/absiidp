"use client";

import React, { useState } from "react";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "../ui/Button";

// In a real implementation, this data would be fetched via ISR in page.tsx 
// and passed into this component as props.
const mockNotices = [
  { id: 1, title: "Rehabilitation of Port Harcourt Road, Aba", status: "Active", deadline: "Oct 15, 2026", type: "Works" },
  { id: 2, title: "Consultancy for Solid Waste Management Strategy", status: "Active", deadline: "Nov 02, 2026", type: "Consultancy" },
  { id: 3, title: "Supply of IT Equipment for PIU Office", status: "Awarded", deadline: "Closed", type: "Goods" },
  { id: 4, title: "Construction of Umuahia Central Drainage", status: "Upcoming", deadline: "TBA", type: "Works" },
];

export default function ProcurementNoticeBoard() {
  const [activeTab, setActiveTab] = useState("Active");

  const filteredNotices = mockNotices.filter(notice => notice.status === activeTab);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2 tracking-tight">Procurement Notices</h2>
            <p className="text-gray-500">Live updates on ABSIIDP tenders and contract awards.</p>
          </div>
          <Button href="#" variant="outline" size="sm">
            View All Procurement
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar">
          {["Active", "Upcoming", "Awarded"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors whitespace-nowrap ${activeTab === tab
                ? "border-b-2 border-deep-green text-deep-green"
                : "text-gray-400 hover:text-gray-600"
                }`}
            >
              {tab} Tenders
            </button>
          ))}
        </div>

        {/* List */}
        <div className="bg-white border border-gray-100 rounded-sm">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice, index) => (
              <div
                key={notice.id}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between p-6 hover:bg-gray-50 transition-colors ${index !== filteredNotices.length - 1 ? "border-b border-gray-100" : ""
                  }`}
              >
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="bg-[#e8f2ea] p-3 rounded-sm text-deep-green shrink-0 mt-1">
                    <FileText size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                      {notice.type}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 leading-tight pr-4">
                      {notice.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto md:gap-8 border-t border-gray-100 md:border-none pt-4 md:pt-0">
                  <div className="text-sm">
                    <span className="text-gray-400 block text-xs">Deadline</span>
                    <span className="font-semibold text-gray-700">{notice.deadline}</span>
                  </div>
                  <button className="text-deep-green hover:text-green-800 p-2">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-gray-500 font-medium">
              No {activeTab.toLowerCase()} notices at this time.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
