import React from 'react';
import { Monitor, Wifi } from 'lucide-react';
import Link from 'next/link';

export default function OurToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5B9279] to-[#4a7a63] text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Tools
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Technology that supports learning, with minimal distractions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Focus-First Tech */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center mb-4">
              <Monitor className="h-8 w-8 text-[#5B9279] mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6D6661]">
                Focus-First Tech
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4 text-base sm:text-lg">
                Quality educational technology exists, but too many platforms destroy their value with dizzying ads and dopamine-hacking gamification. At a time when focus is becoming a lost art—yet remains crucial for top test scores—we've built high-quality skill-building tools with no ads and minimal gamification.
              </p>
              <p className="text-base sm:text-lg">
                We use AI to build better tools and platforms, not to replace human interaction. Our custom software handles logistics, homework assignments, and progress tracking so tutors can focus on teaching.
              </p>
            </div>
          </div>

          {/* Section 2: Why Remote? */}
          <div className="mb-12 sm:mb-16 bg-[#EAE6E5] p-6 sm:p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Wifi className="h-8 w-8 text-[#5B9279] mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6D6661]">
                Why Remote?
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4 text-base sm:text-lg">
                Remote sessions offer much more flexible scheduling and a more lenient cancellation policy. The price is lower—not because the service is lesser, but because commute time isn't baked into the hourly rate.
              </p>
              <p className="text-base sm:text-lg">
                With remote-only tutoring, our students have been accepted to Yale, Cornell, Columbia, Brown, Duke, Vanderbilt, and many other top institutions.
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