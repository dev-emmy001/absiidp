"use client";

import React from "react";
import { ShieldCheck, MessageSquare, AlertCircle, CheckCircle, FileText, Send } from "lucide-react";

export default function SafeguardsGRMPage() {
  return (
    <main className="min-h-screen bg-white font-sans pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">

        {/* Header */}
        <div className="mb-16">
          {/* <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-full mb-6">
            <ShieldCheck size={32} className="text-deep-green" />
          </div> */}
          <h1 className="text-3xl md:text-4xl font-semibold font-heading text-gray-900 mb-6 tracking-tight">
            Safeguards & Grievance Redress
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
            ABSIIDP is committed to sustainable development. We adhere strictly to environmental and social standards to ensure our projects benefit the community without causing harm to our natural ecosystems or vulnerable populations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          {/* Safeguards Section */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                {/* <FileText className="text-deep-green" /> */}
                Environmental & Social Framework
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Environmental and Social Management Framework (ESMF) and Resettlement Policy Framework (RPF) are the cornerstones of our operations. Before any physical work begins, rigorous environmental and social impact assessments (ESIAs) are conducted.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                  <div>
                    <strong className="block text-gray-900 mb-1">Ecological Protection</strong>
                    <span className="text-sm text-gray-600">Strict guidelines to prevent water contamination, manage construction waste, and protect local biodiversity.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                  <div>
                    <strong className="block text-gray-900 mb-1">Fair Resettlement</strong>
                    <span className="text-sm text-gray-600">Transparent compensation and resettlement plans for any individuals temporarily or permanently displaced by infrastructure routes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                  <div>
                    <strong className="block text-gray-900 mb-1">Occupational Health & Safety</strong>
                    <span className="text-sm text-gray-600">Mandatory safety protocols, PPE requirements, and regular site audits for all contractors.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-deep-green text-white p-8 rounded-xl relative overflow-hidden">
              {/* <AlertCircle size={120} className="absolute -bottom-6 -right-6 text-white opacity-10" /> */}
              <h3 className="text-xl font-bold mb-3 relative z-10">Download Framework Documents</h3>
              <p className="text-sm text-white/80 mb-6 relative z-10">Access the full ESMF and RPF documents for detailed guidelines.</p>
              <button className="bg-white text-deep-green font-bold py-2.5 px-6 rounded-md hover:bg-gray-100 transition-colors relative z-10">
                View Safeguards Documents
              </button>
            </div>
          </div>

          {/* GRM Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              {/* <MessageSquare className="text-deep-green" /> */}
              Grievance Redress Mechanism (GRM)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We understand that infrastructure projects can cause temporary inconveniences or raise concerns. The GRM is a formal, accessible, and transparent process for affected individuals to lodge complaints and seek resolution.
            </p>

            {/* Steps */}
            <div className="mb-10 relative border-l-2 border-gray-200 ml-4 space-y-8 pb-4">
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-deep-green rounded-full -left-[9px] top-1"></div>
                <h4 className="font-bold text-gray-900 mb-1">1. Submit Grievance</h4>
                <p className="text-sm text-gray-600">File a complaint online, via phone, or in person at designated community centers.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-yellow-500 rounded-full -left-[9px] top-1"></div>
                <h4 className="font-bold text-gray-900 mb-1">2. Review & Assessment</h4>
                <p className="text-sm text-gray-600">The GRM committee acknowledges receipt within 48 hours and conducts a field assessment.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                <h4 className="font-bold text-gray-900 mb-1">3. Resolution & Feedback</h4>
                <p className="text-sm text-gray-600">A resolution is proposed and implemented. Feedback is gathered to ensure satisfaction.</p>
              </div>
            </div>

            {/* GRM Form Mockup */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-4">Submit a Complaint</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Full Name *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-deep-green focus:border-deep-green outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Phone / Email *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-deep-green focus:border-deep-green outline-none" placeholder="Contact info" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Location / Project Site *</label>
                  <select className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-deep-green outline-none">
                    <option>Select a site...</option>
                    <option>Port Harcourt Road, Aba</option>
                    <option>Umuahia Central Drainage</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Complaint Details *</label>
                  <textarea rows={4} className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-deep-green outline-none resize-none" placeholder="Please describe the issue in detail..."></textarea>
                </div>
                <button type="button" className="w-full bg-gray-900 text-white font-bold py-3 rounded-md hover:bg-deep-green transition-colors flex items-center justify-center gap-2">
                  <Send size={18} />
                  Submit Grievance
                </button>
                <p className="text-[11px] text-gray-400 text-center mt-2">Your data is handled securely and confidentially.</p>
              </form>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
