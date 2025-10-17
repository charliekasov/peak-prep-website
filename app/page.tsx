'use client'

import React, { useState } from 'react';
import { Target, Users, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Peak Prep helped my daughter improve her SAT score by 150 points. The personalized approach and flexible remote sessions made all the difference.",
      author: "Parent, Westchester NY",
      score: "1520 SAT"
    },
    {
      text: "The tutors really understand the tests inside and out. My son felt confident walking into his ACT after working with them.",
      author: "Parent, Manhattan",
      score: "34 ACT"
    },
    {
      text: "Finally found tutors who focus on strategy, not just content review. Worth every penny.",
      author: "Parent, Brooklyn",
      score: "1480 SAT"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] sm:h-[550px] flex items-end sm:items-center justify-start">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: 'url(/imagen-4-negative-space-4.webp)',
            backgroundPosition: '35% 75%',
          }}
        />
        
        {/* Subtle darkening overlay for better text contrast */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
        />
        
        {/* Text container */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 pb-6 sm:pb-8">
          <div className="max-w-3xl sm:translate-y-[15vh]">
            <h1 className="text-white font-bold" style={{ lineHeight: '0.95' }}>
              <span 
                className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl" 
                style={{ 
                  textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                Work Smart.
              </span>
              <span 
                className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl" 
                style={{ 
                  textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                Train Hard.
              </span>
              <span 
                className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl" 
                style={{ 
                  transform: 'skewX(-5deg)',
                  textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                Post a good-looking score.
              </span>
            </h1>
            
            <div className="mt-6 sm:mt-8">
              <Link 
                href="/get-started" 
                className="inline-block bg-white text-[#5B9279] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-10 sm:py-12 -mt-0 sm:-mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#6D6661] mb-10 sm:mb-10">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#6D6661] mb-4 flex items-center">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-[#5B9279] mr-2" />
                High-Scorer Focus
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-6">
                We specialize in helping strong students reach elite scores. If you&apos;re scoring 1400+ and aiming for 1520+, or have a 30+ ACT and want a 34+, we know how to get you there. These aren&apos;t just incremental improvements—they&apos;re the crucial margins that matter for competitive admissions.
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#6D6661] mb-4 flex items-center">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#5B9279] mr-2" />
                Active Tutors Leading
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Peak Prep is run by two full-time tutors with decades of combined experience. We&apos;re not a massive company—we&apos;re educators first who built the tools we needed to serve students better.
              </p>
            </div>
            <div className="bg-[#EAE6E5] p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-[#6D6661] mb-4">Distraction-Free Ed-Tech</h3>
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

      {/* What We Tutor Section */}
      <section className="py-12 sm:py-20 bg-[#EAE6E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#6D6661] mb-12 sm:mb-16">
            What We Tutor
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {['SAT', 'ACT', 'SSAT', 'ISEE'].map((test) => (
              <div 
                key={test}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-[#8FCB9B] rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-[#6D6661]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#6D6661] mb-3">{test}</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Comprehensive {test} preparation focusing on strategy, timing, and content mastery for competitive scores.
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link 
              href="/what-we-tutor"
              className="inline-block text-[#5B9279] font-semibold hover:text-[#4a7a63] transition-colors text-base sm:text-lg"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#6D6661] mb-12 sm:mb-16">
            What Parents Say
          </h2>
          <div className="relative bg-white p-6 sm:p-12 rounded-lg shadow-sm">
            <button 
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-[#5B9279]" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#5B9279]" />
            </button>
            <div className="text-center px-8 sm:px-12">
              <p className="text-base sm:text-xl text-gray-700 mb-6 italic">
                &quot;{testimonials[currentTestimonial].text}&quot;
              </p>
              <div className="border-t-2 border-[#8FCB9B] w-24 mx-auto my-6"></div>
              <p className="font-semibold text-[#6D6661]">
                {testimonials[currentTestimonial].author}
              </p>
              <p className="text-[#5B9279] font-medium">
                {testimonials[currentTestimonial].score}
              </p>
            </div>
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-[#5B9279] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-20 bg-[#5B9279]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
            Schedule a free consultation to discuss your goals and create a personalized test prep plan.
          </p>
          <Link 
            href="/get-started"
            className="inline-block bg-white text-[#5B9279] px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}