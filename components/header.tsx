'use client'

import React, { useState } from 'react';
import { Mountain, Menu, X, MountainIcon } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#5B9279] border-b border-[#4a7a63] shadow-sm">
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
          <MountainIcon className="h-9 w-9 sm:h-12 sm:w-12 text-white" />
<span className="text-3xl sm:text-4xl font-bold text-white font-lora">Peak Prep</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/what-we-tutor" className="text-white/90 hover:text-white transition-colors">
              What We Tutor
            </Link>
            <Link href="/why-remote" className="text-white/90 hover:text-white transition-colors">
              Why Remote?
            </Link>
            <Link href="/fees" className="text-white/90 hover:text-white transition-colors">
              Fees
            </Link>
            <Link href="/our-approach" className="text-white/90 hover:text-white transition-colors">
              Our Approach
            </Link>
            
            {/* Desktop CTA */}
            <Link 
              href="/get-started" 
              className="bg-white text-[#5B9279] px-4 sm:px-6 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base ml-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/what-we-tutor" 
                className="text-white/90 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                What We Tutor
              </Link>
              <Link 
                href="/why-remote" 
                className="text-white/90 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Remote?
              </Link>
              <Link 
                href="/fees" 
                className="text-white/90 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fees
              </Link>
              <Link 
                href="/our-approach" 
                className="text-white/90 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Approach
              </Link>
              <Link 
                href="/get-started" 
                className="bg-white text-[#5B9279] px-6 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}