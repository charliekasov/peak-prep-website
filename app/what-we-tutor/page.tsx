import React from 'react';
import { BookOpen } from 'lucide-react';

export default function WhatWeTutorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* What We Tutor Section */}
      <section className="py-12 sm:py-20 bg-[#EAE6E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#6D6661] mb-6 sm:mb-8">
            What We Tutor
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 sm:mb-16 text-base sm:text-lg">
            We offer comprehensive test preparation for all major standardized tests, focusing on strategy, timing, and content mastery.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {['SAT', 'ACT', 'SSAT', 'ISEE'].map((test) => (
              <div 
                key={test}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-[#8FCB9B] rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-[#6D6661]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#6D6661] mb-3">{test}</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Comprehensive {test} preparation focusing on strategy, timing, and content mastery for competitive scores.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}