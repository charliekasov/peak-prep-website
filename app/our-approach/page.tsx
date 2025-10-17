import React from 'react';
import { Target, Users } from 'lucide-react';

export default function OurApproachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Our Approach Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#6D6661] mb-12 sm:mb-16">
            Our Approach
          </h1>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#6D6661] mb-4 flex items-center">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-[#5B9279] mr-2" />
                High-Scorer Focus
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-6">
                We specialize in helping strong students reach elite scores. If you&apos;re scoring 1400+ and aiming for 1520+, or have a 30+ ACT and want a 34+, we know how to get you there. These aren&apos;t just incremental improvements—they&apos;re the crucial margins that matter for competitive admissions.
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-[#6D6661] mb-4 flex items-center">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#5B9279] mr-2" />
                Active Tutors Leading
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Peak Prep is run by two full-time tutors with decades of combined experience. We&apos;re not a massive company—we&apos;re educators first who built the tools we needed to serve students better.
              </p>
            </div>
            <div className="bg-[#EAE6E5] p-6 sm:p-8 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-[#6D6661] mb-4">Distraction-Free Ed-Tech</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Quality educational technology exists, but too many platforms destroy their value with ads and dopamine-hacking gamification. At a time when focus is becoming a lost art—yet remains crucial for top test scores—we&apos;ve built high-quality skill-building tools with no ads and minimal gamification.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                We use AI to build better tools and platforms, not to replace human interaction. Our custom software handles logistics so tutors can focus on teaching.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}