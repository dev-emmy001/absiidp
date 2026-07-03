import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { FaRegClock } from "react-icons/fa";

const categories = [
  "ALL",
  "GOVERNMENT",
  "HEALTH & WELLNESS",
  "JUST IN",
  "SECURITY",
  "TRANSPORTATION",
  "EDUCATION",
  "INFRASTRUCTURE"
];

const mockNews = [
  {
    id: 1,
    date: "10 Jul 2026",
    title: "Abia State Ministry of Health Vaccine Introduction Sensitization Board Summary",
    image: "/aba-city.jpeg",
    category: "HEALTH",
    readTime: "3 mins read",
  },
  {
    id: 2,
    date: "11 Jul 2026",
    title: "Ministry of Works Inspects Aba-Port Harcourt Expressway...",
    image: "/aba-city.jpeg",
    category: "INFRASTRUCTURE",
    readTime: "5 mins read",
  },
  {
    id: 3,
    date: "12 Jul 2026",
    title: "State Government Launches New Water Reticulation Project in Umuahia...",
    image: "/aba-city.jpeg",
    category: "GOVERNMENT",
    readTime: "4 mins read",
  },
  {
    id: 4,
    date: "13 Jul 2026",
    title: "Governor Declares Free Primary Health Care for Women and Children...",
    image: "/aba-city.jpeg",
    category: "HEALTH",
    readTime: "6 mins read",
  },
  {
    id: 5,
    date: "14 Jul 2026",
    title: "Abia State Security Summit: Enhancing Safety Across Local Governments...",
    image: "/aba-city.jpeg",
    category: "SECURITY",
    readTime: "3 mins read",
  },
  {
    id: 6,
    date: "15 Jul 2026",
    title: "New Police Commissioner Assumes Duty in Abia Command",
    image: "/aba-city.jpeg",
    category: "SECURITY",
    readTime: "2 mins read",
  },
  {
    id: 7,
    date: "16 Jul 2026",
    title: "Permanent Secretary Inspects Erosion Control Staff Clinic Proj...",
    image: "/aba-city.jpeg",
    category: "INFRASTRUCTURE",
    readTime: "4 mins read",
  },
  {
    id: 8,
    date: "17 Jul 2026",
    title: "The Ohafia General Hospital Gets State-of-the-art Equipment from State...",
    image: "/aba-city.jpeg",
    category: "HEALTH",
    readTime: "5 mins read",
  },
  {
    id: 9,
    date: "18 Jul 2026",
    title: "Governor Receives Update on the Enyimba Economic City Project...",
    image: "/aba-city.jpeg",
    category: "GOVERNMENT",
    readTime: "7 mins read",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Categories Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* <button className="p-2 text-gray-500 hover:text-black">
              <ChevronLeft className="w-5 h-5" />
            </button> */}

            <div className="flex-1 overflow-x-auto no-scrollbar flex items-center justify-center space-x-6 md:space-x-10 text-xs md:text-sm font-semibold text-gray-600">
              {categories.map((cat, index) => (
                <button
                  key={cat}
                  className={`whitespace-nowrap uppercase tracking-wider py-4 border-b-2 ${index === 0 ? "border-green-600 text-green-700" : "border-transparent hover:text-green-700 hover:border-green-600 transition-colors"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* <button className="p-2 text-gray-500 hover:text-black">
              <ChevronRight className="w-5 h-5" />
            </button> */}
          </div>
        </div>
      </div>
      {/* News Grid */}
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {mockNews.map((news) => (
            <div key={news.id} className="group cursor-pointer flex flex-col">
              <div className="relative w-full aspect-[16/10] mb-4 overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-xs font-semibold text-gray-500 mb-2">{news.date}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                {news.title}
              </h3>

              <div className="mt-auto flex items-center gap-4">
                <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-sm">
                  {news.category}
                </span>
                <div className="flex items-center text-xs text-gray-500 font-medium">
                  <FaRegClock className="mr-1.5" />
                  {news.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex items-center justify-center space-x-1">
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-black">
            Previous
          </button>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold transition-colors ${page === 1
                ? "bg-green-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
                }`}
            >
              {page}
            </button>
          ))}

          <button className="px-3 py-2 text-sm text-gray-500 hover:text-black">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
