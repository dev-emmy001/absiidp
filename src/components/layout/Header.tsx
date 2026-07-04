"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    if (activeMobileDropdown === name) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(name);
    }
  };

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    {
      name: "COMPONENTS",
      href: "#",
      dropdown: [
        { name: "Road Infrastructure", href: "/project-components/road-infrastructure" },
        { name: "Climate Resilience", href: "/climate-resilience" },
        { name: "Waste Management", href: "/waste-management" },
      ]
    },
    {
      name: "TRANSPARENCY",
      href: "#",
      dropdown: [
        { name: "Procurement", href: "/procurement" },
        { name: "Safeguards & GRM", href: "/safeguards-grm" },
        { name: "Results Dashboard", href: "/dashboard" },
        { name: "Documents", href: "/documents" },
      ]
    },
    { name: "NEWS", href: "/news" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      {/* 4-Color Top Border */}
      <div className="flex h-1 w-full">
        <div className="w-1/4 bg-red-600"></div>
        <div className="w-1/4 bg-blue-600"></div>
        <div className="w-1/4 bg-yellow-500"></div>
        <div className="w-1/4 bg-green-600"></div>
      </div>

      {/* Top Utility Bar (Desktop) */}
      <div className="hidden xl:block bg-deep-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2.5 text-[11px] tracking-[0.1em]">
            <div className="flex items-center gap-x-4 uppercase">
              <span>PARTNERS: Abia State Govt | FG of Nigeria | AfDB | IsDB | CACF</span>
              <span className="px-2 text-white/40">|</span>
              <button className="hover:text-gold-accent transition-colors">EN</button>
              <span className="text-white/40">/</span>
              <button className="hover:text-gold-accent transition-colors">IGBO</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center transition-opacity hover:opacity-90">
            <Image
              src="/absiidp.png"
              alt="ABSIIDP Logo"
              width={200}
              height={80}
              className="w-[120px] md:w-[150px] lg:w-[180px] h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-center flex-1 gap-x-8 text-[13px] text-gray-800 tracking-wider h-full ml-12">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 hover:text-deep-green transition-colors h-full px-2"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="text-gray-400 group-hover:text-deep-green transition-colors" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-[90px] left-0 hidden group-hover:block w-[240px] bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border-t-2 border-deep-green py-2 transition-all z-50">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-5 py-3 text-[13px] font-medium text-gray-600 hover:text-deep-green hover:bg-gray-50 tracking-normal transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Icon Desktop */}
          <div className="hidden xl:flex items-center shrink-0 pl-6 border-l border-gray-200 h-8 ml-2">
            <button aria-label="Search" className="text-gray-800 hover:text-deep-green transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 -mr-2 text-deep-green hover:bg-gray-50 rounded-md shrink-0 transition-colors"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-4 py-4 max-h-[75vh] overflow-y-auto shadow-inner">
          <nav className="flex flex-col mb-6">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-50">
                <div
                  className="flex items-center justify-between py-3 px-2"
                  onClick={() => link.dropdown ? toggleMobileDropdown(link.name) : setIsMobileMenuOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="text-[15px] font-semibold tracking-wide text-gray-800 hover:text-deep-green transition-colors"
                    onClick={(e) => link.dropdown && e.preventDefault()}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button className="text-gray-400 p-1">
                      <ChevronDown size={18} className={`transition-transform ${activeMobileDropdown === link.name ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {link.dropdown && activeMobileDropdown === link.name && (
                  <div className="bg-gray-50 px-4 py-2 mb-2 rounded-md">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block py-2 text-[14px] font-medium text-gray-600 hover:text-deep-green"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex flex-col space-y-5 pt-2 px-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-500 text-xs tracking-wider">LANGUAGE</span>
              <div className="flex items-center space-x-3 text-sm font-semibold">
                <button className="text-deep-green">EN</button>
                <span className="text-gray-300">|</span>
                <button className="text-gray-400 hover:text-deep-green">IGBO</button>
              </div>
            </div>
            <div className="flex flex-col space-y-3 pb-4">
              <span className="font-semibold text-gray-500 text-xs tracking-wider">PARTNERS</span>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm font-medium text-gray-600">
                <Link href="#" className="hover:text-deep-green">Abia State Govt</Link>
                <Link href="#" className="hover:text-deep-green">FG of Nigeria</Link>
                <Link href="#" className="hover:text-deep-green">AfDB</Link>
                <Link href="#" className="hover:text-deep-green">IsDB</Link>
                <Link href="#" className="hover:text-deep-green">CACF</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
