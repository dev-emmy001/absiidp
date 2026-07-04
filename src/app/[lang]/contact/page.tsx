import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Using react-icons/fa6 for X logo

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center font-sans py-20 px-4">
      {/* Header Text */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <h1 className="text-xl md:text-3xl font-semibold text-gray-900 mb-4 font-heading tracking-tight">
          Connect with Abia State Integrated Infrastructure Development Project
        </h1>
        <p className="text-gray-500 text-lg">
          Send a message to the email address below to get in touch.
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-14 w-full max-w-2xl text-center">
        {/* Email */}
        <div className="mb-8">
          <a
            href="mailto:info@absiidp.com"
            className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors"
          >
            info@absiidp.com
          </a>
        </div>

        {/* Address */}
        <div className="mb-3">
          <p className="text-gray-900 font-medium text-base leading-relaxed max-w-xs mx-auto">
            The Secretariat, Umuahia,
            <br />
            Abia State, Nigeria.
          </p>
        </div>

        {/* Directions Link */}
        <div className="mb-12">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium text-sm hover:underline underline-offset-4"
          >
            Get directions
          </a>
        </div>

        {/* Social Follow */}
        <div>
          <p className="text-gray-900 font-medium mb-6">Follow Abia State</p>
          <div className="flex items-center justify-center gap-4">
            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-[#E1306C] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>

            {/* X / Twitter */}
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-black flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
