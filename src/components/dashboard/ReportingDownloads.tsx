import React from "react";
import { Download, FileText, FileSpreadsheet, FileIcon } from "lucide-react";

export default function ReportingDownloads() {
  const reports = [
    {
      title: "Q2 2026 Progress Report",
      description: "Comprehensive quarterly update on all ABSIIDP activities.",
      type: "PDF",
      size: "4.2 MB",
      icon: <FileText className="text-red-500" size={24} />,
    },
    {
      title: "Environmental Safeguards Data",
      description: "Raw metrics on waste processing and carbon offset.",
      type: "CSV",
      size: "1.1 MB",
      icon: <FileSpreadsheet className="text-green-500" size={24} />,
    },
    {
      title: "Procurement Approvals",
      description: "List of all approved contractors and vendors for Phase 1.",
      type: "XLSX",
      size: "2.8 MB",
      icon: <FileIcon className="text-blue-500" size={24} />,
    },
  ];

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Reports & Data Downloads</h2>
          <p className="text-gray-500">Access official documentation and raw datasets.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reports.map((report, i) => (
          <div key={i} className="group border border-gray-200 rounded-lg p-5 hover:border-green-600 transition-colors cursor-pointer flex flex-col h-full">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-green-50 transition-colors">
                {report.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 leading-tight mb-1">{report.title}</h3>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{report.type} • {report.size}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6 flex-grow">{report.description}</p>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-50 text-gray-700 rounded-md font-medium group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Download size={16} />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
