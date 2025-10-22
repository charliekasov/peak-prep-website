import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhatWeTutorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5B9279] to-[#4a7a63] text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            What We Tutor
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive test prep for every major standardized exam
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-20 bg-[#EAE6E5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* SAT & ACT Card */}
            <div className="bg-white p-6 sm:p-10 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 bg-[#8FCB9B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-10 w-10 text-[#6D6661]" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#6D6661] mb-2">
                    SAT & ACT
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg">
                    College entrance exams for high school students
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-700">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#5B9279] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Strategic guidance on which test to take</strong> — We help you identify which exam plays to your strengths and build a personalized plan to maximize your score.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#5B9279] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Innovative strategies for the digital format</strong> — Our tutors stay current with the latest test changes and adapt proven techniques for the new digital experience.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#5B9279] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Efficient prep that builds speed and mastery</strong> — We focus on high-impact strategies and targeted practice to close content gaps while building test-taking stamina.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#5B9279] flex-shrink-0 mt-1" />
                  <div>
                    <strong>A personalized plan to maximize your score</strong> — We meet you at your current baseline and map the most efficient path to your target score.
                  </div>
                </div>
              </div>
            </div>

            {/* SSAT & ISEE Card */}
            <div className="bg-white p-6 sm:p-10 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 bg-[#8FCB9B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-10 w-10 text-[#6D6661]" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#6D6661] mb-2">
                    SSAT & ISEE
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Independent school entrance exams for middle schoolers
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-700">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#5B9279] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Guidance on which test plays to your strengths</strong> — We help you understand the differences between SSAT and ISEE and determine which format suits your child best.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#5B9279] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Rigorous techniques to conquer content quickly</strong> — We use proven methods to help students master vocabulary, reading comprehension, and quantitative reasoning efficiently.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#5B9279] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Test-taking skills that translate to academic success</strong> — The strategies students build preparing for SSAT/ISEE carry forward directly to high school coursework and future SAT/ACT prep.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16 p-8 bg-[#8FCB9B]/10 rounded-lg">
            <h3 className="text-2xl font-bold text-[#6D6661] mb-6">
              Ready to Get Started?
            </h3>
            <Link 
              href="/get-started" 
              className="inline-block bg-[#5B9279] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#4a7a63] transition-all hover:scale-105 shadow-lg"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}