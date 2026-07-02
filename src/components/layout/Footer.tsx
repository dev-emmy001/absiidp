"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Button } from "../ui/Button";

export default function Footer() {
  const [greeting, setGreeting] = useState({ text: "  hello", emoji: "👋" });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting({ text: "Good Morning", emoji: "☀️" });
    } else if (hour < 17) {
      setGreeting({ text: "Good Afternoon", emoji: "🌤️" });
    } else {
      setGreeting({ text: "Good Evening", emoji: "🌙" });
    }
  }, []);

  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-8">

        {/* Top Section: Greeting & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight">
            ABSIIDP, <span className="text-deep-green">{greeting.text}</span> {greeting.emoji}
          </h2>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-500 hover:text-deep-green transition-colors"><FaInstagram size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-deep-green transition-colors"><FaXTwitter size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-deep-green transition-colors"><FaFacebook size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-deep-green transition-colors"><FaLinkedin size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-deep-green transition-colors"><FaYoutube size={20} /></Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mb-16">
          {/* Column 1 */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-6">Project</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> About ABSIIDP</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Project Components</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Climate Resilience</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Waste Management</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-6">Transparency</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Procurement</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Documents</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Contract Awards</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Safeguards Reports</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-6">Citizen Engagement</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Submit Grievance</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Community Updates</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-6">Help & Support</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Contact PIU</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> info@absiidp.gov.ng</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-gray-600 hover:text-deep-green transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> +234 (0) 000 000 0000</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-6">Address</h3>
            <address className="not-italic text-[13px] font-medium text-gray-600 space-y-1">
              <p>Abia State PIU</p>
              <p>Ministry of Works</p>
              <p>Umuahia, Abia State</p>
            </address>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gray-50 rounded-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 mb-12">
          <p className="text-gray-900 font-bold text-lg md:text-xl text-center md:text-left">
            Stay updated with the latest project developments!
          </p>
          <Button href="#" variant="primary" size="lg">
            View News & Updates <ArrowUpRight size={16} />
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[10px] uppercase tracking-wider font-bold text-gray-400 gap-4 text-center md:text-left">
          <p>© COPYRIGHT 2026, ALL RIGHTS RESERVED | <span className="text-gray-900">ABIA STATE GOVERNMENT</span></p>
          <p>POWERED BY - <span className="text-gray-900">ABIA STATE PIU</span></p>
        </div>

      </div>
    </footer>
  );
}
