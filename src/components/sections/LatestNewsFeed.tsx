import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function LatestNewsFeed() {
  // Simulated WordPress Data
  const news = [
    {
      id: 1,
      title: "Governor Flags Off Port Harcourt Road Reconstruction",
      excerpt: "A major milestone for ABSIIDP as heavy equipment rolls onto the historic Port Harcourt road corridor in Aba.",
      date: "August 12, 2026",
      category: "Milestone",
      image: "bg-gray-200"
    },
    {
      id: 2,
      title: "Community Townhall Held in Umuahia North",
      excerpt: "PIU safeguards team engaged with local residents to discuss upcoming drainage projects and grievance mechanisms.",
      date: "August 05, 2026",
      category: "Engagement",
      image: "bg-gray-300"
    },
    {
      id: 3,
      title: "ABSIIDP Waste Management Strategy Approved",
      excerpt: "The steering committee has greenlit the comprehensive plan for new waste transfer stations across the state.",
      date: "July 28, 2026",
      category: "Policy",
      image: "bg-gray-200"
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
            Latest Updates
          </h2>
          <Link href="/news" className="hidden md:inline-flex items-center text-sm font-semibold text-deep-green hover:text-green-800 uppercase tracking-widest transition-colors">
            View Newsroom <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link key={item.id} href="#" className="group flex flex-col h-full bg-white border border-gray-100 rounded-sm overflow-hidden hover:-translate-y-1 transition-transform duration-300">

              {/* Image Placeholder */}
              <div className={`w-full h-56 ${item.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white text-gray-900 text-[10px] font-semibold uppercase tracking-widest py-1.5 px-3 rounded-sm shadow-sm">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-semibold">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-deep-green transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>

                <span className="text-xs font-semibold text-deep-green uppercase tracking-widest flex items-center mt-auto">
                  Read Article <ArrowRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
              </div>

            </Link>
          ))}
        </div>

        {/* Mobile View All button */}
        <div className="mt-10 text-center md:hidden">
          <Link href="#" className="inline-flex items-center text-sm font-semibold text-deep-green hover:text-green-800 uppercase tracking-widest transition-colors">
            View All News <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
