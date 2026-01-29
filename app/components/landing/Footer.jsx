import { MapPin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f6f6f6]">
      {/* TOP ROW */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-800">
        {/* LOCATION */}
        <div className="flex items-center gap-2">
          <MapPin />

          <span>Kuril, Vatara, Dhaka-1229, Bangladesh</span>
        </div>

        {/* LINKS */}
        <div className="flex gap-6 font-medium">
          <a href="/privacy-policy" className="hover:text-black transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-black transition">
            Terms & Conditions
          </a>
        </div>
      </div>
      <div className="border-t border-gray-300" />

      {/* BOTTOM ROW */}
      <div className="py-6 text-center text-gray-800 text-sm">
        © 2026 All Rights Reserved Designed by{" "}
        <span className="font-semibold text-black">Dipra Chowdhury</span>
      </div>
    </footer>
  );
};

export default Footer;