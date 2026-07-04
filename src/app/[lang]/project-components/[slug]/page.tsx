import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectComponentsData } from "@/lib/componentsData";
import { ChevronRight } from "lucide-react";

export default function ProjectComponentPage({ params }: { params: { slug: string } }) {
  const component = projectComponentsData.find((c) => c.slug === params.slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      {/* Breadcrumb / Nav */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-deep-green transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/#components" className="hover:text-deep-green transition-colors">Components</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900 font-medium">{component.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative w-full h-[40vh] md:h-[50vh] bg-gray-900">
        <Image
          src={component.heroImage}
          alt={component.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12">
          <div className="max-w-[1400px] w-full mx-auto px-4 text-white">
            <div className="text-green-500 mb-4 bg-white/10 p-3 rounded-full inline-block backdrop-blur-sm">
              {component.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold font-heading mb-4 tracking-tight">
              {component.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {component.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 pt-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 max-w-4xl">
          <h2 className="text-2xl font-semibold font-heading text-gray-900 mb-6">
            Component Overview
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none leading-relaxed">
            <p>{component.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
