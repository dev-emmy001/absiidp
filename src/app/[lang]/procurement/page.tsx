"use client";

import React, { useState, useMemo } from "react";
import { FileText, Download, Search, Briefcase, Truck, HardHat, CheckCircle } from "lucide-react";

// Mock Data
const MOCK_NOTICES = [
  { id: 1, title: "Rehabilitation of Port Harcourt Road, Aba", status: "Current", deadline: "Oct 15, 2026", type: "Works", ref: "ABS/WORKS/2026/01" },
  { id: 2, title: "Consultancy for Solid Waste Management Strategy", status: "Current", deadline: "Nov 02, 2026", type: "Consultancy", ref: "ABS/CONS/2026/04" },
  { id: 3, title: "Supply of Heavy-duty Waste Compactors", status: "Current", deadline: "Nov 10, 2026", type: "Goods", ref: "ABS/GOODS/2026/09" },
  { id: 4, title: "Construction of Umuahia Central Drainage", status: "Upcoming", deadline: "TBA", type: "Works", ref: "ABS/WORKS/2026/05" },
  { id: 5, title: "Supervision of Obohia Road Construction", status: "Upcoming", deadline: "TBA", type: "Consultancy", ref: "ABS/CONS/2026/08" },
  { id: 6, title: "Supply of IT Equipment for PIU Office", status: "Awards", deadline: "Awarded", type: "Goods", ref: "ABS/GOODS/2025/11", winner: "TechNaija Solutions Ltd" },
  { id: 7, title: "Design of Ohanku Road Infrastructure", status: "Awards", deadline: "Awarded", type: "Consultancy", ref: "ABS/CONS/2025/02", winner: "Aba Engineering Consultants" },
];

const TABS = ["Current", "Upcoming", "Awards", "Documents"];
const TYPES = ["All", "Works", "Goods", "Consultancy"];

export default function ProcurementPage() {
  const [activeTab, setActiveTab] = useState("Current");
  const [activeType, setActiveType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotices = useMemo(() => {
    return MOCK_NOTICES.filter(notice => {
      // If we are on Documents tab, show everything (or a specific subset in a real app)
      const tabMatch = activeTab === "Documents" ? true : notice.status === activeTab;
      const typeMatch = activeType === "All" ? true : notice.type === activeType;
      const searchMatch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) || notice.ref.toLowerCase().includes(searchQuery.toLowerCase());

      return tabMatch && typeMatch && searchMatch;
    });
  }, [activeTab, activeType, searchQuery]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Works": return <HardHat size={18} />;
      case "Goods": return <Truck size={18} />;
      case "Consultancy": return <Briefcase size={18} />;
      default: return <FileText size={18} />;
    }
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold font-heading text-gray-900 mb-4 tracking-tight">
            Procurement Portal
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
            Transparent access to all ABSIIDP tenders, expressions of interest, and contract awards. Filter notices below and download the associated bidding documents.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">

          {/* Tabs */}
          <div className="flex border-b border-gray-200 overflow-x-auto hide-scrollbar bg-gray-50/50">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-bold tracking-widest uppercase transition-colors whitespace-nowrap ${activeTab === tab
                  ? "border-b-2 border-deep-green text-deep-green bg-white"
                  : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {tab} {tab !== "Documents" && "Tenders"}
              </button>
            ))}
          </div>

          {/* Filters & Search */}
          <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-white">
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto hide-scrollbar pb-2 md:pb-0">
              {TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-1.5 text-sm font-semibold rounded-full border transition-colors whitespace-nowrap ${activeType === type
                    ? 'bg-gray-900 border-gray-900 text-white'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title or Ref No..."
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* List */}
          <div className="bg-white min-h-[400px]">
            {filteredNotices.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {filteredNotices.map((notice) => (
                  <div key={notice.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 group">

                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-green-50 p-3 rounded-lg text-deep-green shrink-0 mt-1">
                        {getTypeIcon(notice.type)}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            {notice.type}
                          </span>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-100 px-2 py-0.5 rounded">
                            {notice.ref}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-2 group-hover:text-deep-green transition-colors">
                          {notice.title}
                        </h3>

                        {activeTab === "Awards" && notice.winner && (
                          <div className="flex items-center gap-1.5 text-sm text-green-700 font-medium bg-green-50 w-fit px-2.5 py-1 rounded-md">
                            <CheckCircle size={14} />
                            Awarded to: {notice.winner}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full lg:w-auto border-t lg:border-none border-gray-100 pt-4 lg:pt-0">
                      <div className="text-sm min-w-[120px]">
                        <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Deadline / Status</span>
                        <span className={`font-semibold ${notice.deadline === 'TBA' ? 'text-orange-600' : 'text-gray-800'}`}>
                          {notice.deadline}
                        </span>
                      </div>
                      <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:bg-deep-green hover:text-white hover:border-deep-green transition-all">
                        <Download size={16} />
                        {activeTab === "Awards" ? "Download Notice" : "Download Bidding Doc"}
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="p-16 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 border border-gray-100">
                  <FileText size={32} className="text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No matching notices found</h3>
                <p className="text-gray-500">Try adjusting your filters or search term.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
