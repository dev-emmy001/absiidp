"use client";

import React, { useState, useMemo } from "react";
import { Search, FileText, FileSpreadsheet, FileIcon, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";

const MOCK_DOCUMENTS = [
  { id: 1, title: "Q2 2026 Environmental Safeguards Report", category: "Safeguards", year: "2026", type: "PDF", size: "4.2 MB", date: "2026-06-30" },
  { id: 2, title: "Phase 1 Procurement Vendor List", category: "Procurement", year: "2025", type: "CSV", size: "1.1 MB", date: "2025-11-15" },
  { id: 3, title: "ABSIIDP Annual Financial Audit", category: "Financial", year: "2025", type: "PDF", size: "8.5 MB", date: "2026-01-10" },
  { id: 4, title: "Road Infrastructure Blueprint - Aba", category: "Technical", year: "2024", type: "PDF", size: "15.0 MB", date: "2024-08-22" },
  { id: 5, title: "Waste Management Fleet Assessment", category: "Technical", year: "2026", type: "XLSX", size: "2.3 MB", date: "2026-02-05" },
  { id: 6, title: "Community Grievance Redress Logs Q1", category: "Safeguards", year: "2026", type: "CSV", size: "0.8 MB", date: "2026-04-01" },
  { id: 7, title: "IsDB Loan Agreement Summary", category: "Financial", year: "2024", type: "PDF", size: "3.2 MB", date: "2024-05-18" },
  { id: 8, title: "Q3 2025 General Progress Report", category: "Reports", year: "2025", type: "PDF", size: "5.1 MB", date: "2025-10-01" },
];

const CATEGORIES = ["All", "Safeguards", "Procurement", "Financial", "Technical", "Reports"];
const YEARS = ["All", "2026", "2025", "2024"];
const FILE_TYPES = ["All", "PDF", "CSV", "XLSX"];

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filteredDocs = useMemo(() => {
    return MOCK_DOCUMENTS.filter((doc) => {
      const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
      const matchesYear = selectedYear === "All" || doc.year === selectedYear;
      const matchesType = selectedType === "All" || doc.type === selectedType;

      return matchesSearch && matchesCategory && matchesYear && matchesType;
    });
  }, [searchTerm, selectedCategory, selectedYear, selectedType]);

  const getIcon = (type: string) => {
    switch (type) {
      case "PDF": return <FileText className="text-red-500" size={24} />;
      case "CSV": return <FileSpreadsheet className="text-green-500" size={24} />;
      case "XLSX": return <FileIcon className="text-blue-500" size={24} />;
      default: return <FileText className="text-gray-500" size={24} />;
    }
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-3xl font-semibold font-heading text-gray-900 mb-4 tracking-tight">
            Document Library
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
            Access official reports, technical blueprints, financial audits, and safeguard data. Use the filters below to find specific documents.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4 shrink-0 space-y-8 bg-white p-6 rounded-xl border border-gray-200 h-fit">
            <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-4">
              {/* <Filter size={20} className="text-deep-green" /> */}
              <h3 className="font-semibold text-gray-900">Filters</h3>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search titles..."
                  className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <div className="space-y-2">
                {CATEGORIES.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="text-deep-green focus:ring-deep-green"
                    />
                    <span className="text-sm text-gray-600">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
              <select
                className="w-full border border-gray-200 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {YEARS.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">File Type</label>
              <div className="flex flex-wrap gap-2">
                {FILE_TYPES.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${selectedType === type
                      ? 'bg-deep-green border-deep-green text-white'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedYear("All");
                setSelectedType("All");
              }}
              className="w-full py-2 text-sm text-gray-500 font-semibold hover:text-gray-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>

          {/* Document List */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  {filteredDocs.length} {filteredDocs.length === 1 ? 'Document' : 'Documents'} Found
                </span>
              </div>

              {filteredDocs.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {filteredDocs.map((doc) => (
                    <div key={doc.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 p-2 bg-white rounded-lg border border-gray-100">
                          {getIcon(doc.type)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-deep-green transition-colors">
                            {doc.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 font-medium">
                            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{doc.category}</span>
                            <span>•</span>
                            <span>{doc.date}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <button className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:bg-deep-green hover:text-white hover:border-deep-green transition-all ">
                        <Download size={16} />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <Search size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No documents found</h3>
                  <p className="text-gray-500">Adjust your filters or search term to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
