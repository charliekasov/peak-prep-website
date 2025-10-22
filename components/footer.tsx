import React from 'react';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#6D6661] text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-[#8FCB9B]" />
              <span className="text-xl sm:text-2xl font-bold">Peak Prep</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              Work Smart, Train Hard. Post a Good-Looking Score. 
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
  <li>
    <Link href="/our-approach" className="text-gray-300 hover:text-[#8FCB9B] transition-colors">
      Our Approach
    </Link>
  </li>
  <li>
    <Link href="/what-we-tutor" className="text-gray-300 hover:text-[#8FCB9B] transition-colors">
      What We Tutor
    </Link>
  </li>
  <li>
    <Link href="/fees" className="text-gray-300 hover:text-[#8FCB9B] transition-colors">
      Fees
    </Link>
  </li>
  <li>
    <Link href="/our-tools" className="text-gray-300 hover:text-[#8FCB9B] transition-colors">
      Our Tools
    </Link>
  </li>
  <li>
    <Link href="/get-started" className="text-gray-300 hover:text-[#8FCB9B] transition-colors">
      Contact
    </Link>
  </li>
</ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-4 text-base sm:text-lg">Student Login</h3>
            <a 
              href="https://app.peakprep.tech/login" 
              className="inline-block bg-[#5B9279] text-white px-6 py-2 rounded-md hover:bg-[#4a7a63] transition-colors text-sm sm:text-base"
            >
              Access Student Portal
            </a>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>© 2025 Peak Prep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}