"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Button } from "../ui/Button";
import { useDictionary } from "../providers/DictionaryProvider";

export default function Footer() {
  const dictionary = useDictionary();
  const [greeting, setGreeting] = useState({ text: dictionary.footer.greeting.hello, emoji: "👋" });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting({ text: dictionary.footer.greeting.morning, emoji: "☀️" });
    } else if (hour < 17) {
      setGreeting({ text: dictionary.footer.greeting.afternoon, emoji: "🌤️" });
    } else {
      setGreeting({ text: dictionary.footer.greeting.evening, emoji: "🌙" });
    }
  }, [dictionary]);

  return (
    <footer className="bg-deep-green text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-8">

        {/* Top Section: Greeting & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white tracking-tight">
            {/* ABSIIDP, */}
            <span className="text-white">{greeting.text}</span> {greeting.emoji}
          </h2>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white hover:text-gold-accent transition-colors"><FaInstagram size={20} /></Link>
            <Link href="#" className="text-white hover:text-gold-accent transition-colors"><FaXTwitter size={20} /></Link>
            <Link href="#" className="text-white hover:text-gold-accent transition-colors"><FaFacebook size={20} /></Link>
            <Link href="#" className="text-white hover:text-gold-accent transition-colors"><FaLinkedin size={20} /></Link>
            <Link href="#" className="text-white hover:text-gold-accent transition-colors"><FaYoutube size={20} /></Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mb-16">
          {/* Column 1 */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-white mb-6">{dictionary.footer.columns.project}</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.about}</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.components}</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.climate}</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.waste}</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-white mb-6">{dictionary.footer.columns.transparency}</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.procurement}</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.documents}</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.contract_awards}</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.safeguards_reports}</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-white mb-6">{dictionary.footer.columns.citizen_engagement}</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.submit_grievance}</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.community_updates}</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.faqs}</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-white mb-6">{dictionary.footer.columns.help_support}</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> {dictionary.footer.links.contact_piu}</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> info@absiidp.gov.ng</Link></li>
              <li><Link href="#" className="group flex items-start gap-2 text-[13px] font-medium text-white hover:text-gold-accent transition-colors"><ArrowUpRight size={14} className="text-deep-green mt-0.5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> +234 (0) 000 000 0000</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-white mb-6">{dictionary.footer.columns.address}</h3>
            <address className="not-italic text-[13px] font-medium text-white space-y-1">
              <p>{dictionary.footer.address_lines.l1}</p>
              <p>{dictionary.footer.address_lines.l2}</p>
              <p>{dictionary.footer.address_lines.l3}</p>
            </address>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gray-50 rounded-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 mb-12">
          <p className="text-white font-semibold text-lg md:text-xl text-center md:text-left">
            {dictionary.footer.cta.text}
          </p>
          <Button href="/news" variant="primary" size="lg">
            {dictionary.footer.cta.btn} <ArrowUpRight size={16} />
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[10px] uppercase tracking-wider font-semibold text-gray-400 gap-4 text-center md:text-left">
          <p>{dictionary.footer.bottom.copyright} | <span className="text-white">{dictionary.footer.bottom.gov}</span></p>
          <p>{dictionary.footer.bottom.powered} - <span className="text-white">{dictionary.footer.bottom.piu}</span></p>
        </div>

      </div>
    </footer>
  );
}
