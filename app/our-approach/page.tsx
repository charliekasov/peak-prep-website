import React from 'react';
import { Target, Users, Compass } from 'lucide-react';
import Link from 'next/link';

export default function OurApproachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5B9279] to-[#4a7a63] text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Approach
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            We stay sharp. You get results.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1 */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-[#5B9279] mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6D6661]">
                Always Refining Our Craft
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4 text-base sm:text-lg">
                Peak Prep was founded by veteran educator Charlie Kasov and is comprised of a small collaborative team of elite tutors. We're not a large company where tutors just teach from a prep textbook, nor are we a solo practice where one voice dominates.
              </p>
              <p className="text-base sm:text-lg">
                Through regular mentoring, peer-to-peer workshops, and collaborative curriculum refinement, we maintain the personalized approach of a boutique practice with the depth of a larger institution.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12 sm:mb-16 bg-[#EAE6E5] p-6 sm:p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Compass className="h-8 w-8 text-[#5B9279] mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6D6661]">
                We Practice What We Teach
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4 text-base sm:text-lg">
                Our tutors regularly take the tests they teach. Every few months, we sit for full practice exams to stay sharp and connected to what students experience.
              </p>
              <p className="text-base sm:text-lg">
                This isn't just professional development—it's how we maintain empathy for the pressure, fatigue, and mental challenges our students face. We teach from the trenches, not from memory.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-[#5B9279] mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6D6661]">
                Adaptability Over Formula
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4 text-base sm:text-lg">
                Everyone knows no two students are the same. But here's what matters more: no two paths through school are the same. Life happens. Plans shift. A student who's been coasting can catch fire. One who's been excelling can hit turbulence. If the initial approach or tutor match isn't working, we adjust.
              </p>
              <p className="text-base sm:text-lg">
                We don't rely on rigid formulas because real progress requires meeting students where they are, not where we wish they were. Strong hand or weak hand, we help them play it well.
              </p>
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