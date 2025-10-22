'use client'

import React, { useState } from 'react';
import { GraduationCap, BookOpen, Target, Users, Compass, CheckCircle, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
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
    <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
      {/* Card 1 */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <Users className="h-6 w-6 text-[#5B9279] mr-3" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#6D6661]">
            Always Refining Our Craft
          </h3>
        </div>
        <p className="text-sm sm:text-base text-gray-700">
        Through regular mentoring, peer-to-peer workshops, and collaborative curriculum refinement, we maintain the personalized approach of a boutique practice with the depth of a larger institution.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
        <Compass className="h-6 w-6 text-[#5B9279] mr-3" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#6D6661]">
            We Practice What We Teach
          </h3>
        </div>
        <p className="text-sm sm:text-base text-gray-700">
          Our tutors regularly take the tests they teach. This keeps us connected to what students actually experience—teaching from the trenches, not from memory.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <Target className="h-6 w-6 text-[#5B9279] mr-3" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#6D6661]">
            Adaptability Over Formula
          </h3>
        </div>
        <p className="text-sm sm:text-base text-gray-700">
          No two paths through school are the same. We meet students where they are and adapt our strategies to their reality—strong hand or weak hand, we help them play it well.
        </p>
      </div>
    </div>
  </div>
</section>

    {/* What We Tutor Section */}
<section className="py-12 sm:py-20 bg-[#EAE6E5]">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#6D6661] mb-12 sm:mb-16">
      What We Tutor
    </h2>
    
    <div className="space-y-8">
      {/* SAT & ACT Card */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-[#8FCB9B] rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen className="h-8 w-8 text-[#6D6661]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#6D6661] pt-3">
            SAT & ACT
          </h3>
        </div>
        <ul className="space-y-3 ml-20">
          <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
            <CheckCircle className="h-5 w-5 text-[#5B9279] flex-shrink-0 mt-0.5" />
            <span>Strategic guidance on which test to take</span>
          </li>
          <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
            <CheckCircle className="h-5 w-5 text-[#5B9279] flex-shrink-0 mt-0.5" />
            <span>Innovative strategies for the digital format</span>
          </li>
          <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
            <CheckCircle className="h-5 w-5 text-[#5B9279] flex-shrink-0 mt-0.5" />
            <span>Efficient prep that builds speed and mastery</span>
          </li>
          <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
            <CheckCircle className="h-5 w-5 text-[#5B9279] flex-shrink-0 mt-0.5" />
            <span>A personalized plan to maximize your score</span>
          </li>
        </ul>
      </div>

      {/* SSAT & ISEE Card */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-[#8FCB9B] rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen className="h-8 w-8 text-[#6D6661]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#6D6661] pt-3">
            SSAT & ISEE
          </h3>
        </div>
        <ul className="space-y-3 ml-20">
          <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
            <CheckCircle className="h-5 w-5 text-[#5B9279] flex-shrink-0 mt-0.5" />
            <span>Guidance on which test plays to your strengths</span>
          </li>
          <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
            <CheckCircle className="h-5 w-5 text-[#5B9279] flex-shrink-0 mt-0.5" />
            <span>Rigorous techniques to conquer content quickly</span>
          </li>
          <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
            <CheckCircle className="h-5 w-5 text-[#5B9279] flex-shrink-0 mt-0.5" />
            <span>Test-taking skills that translate to academic success</span>
          </li>
        </ul>
      </div>
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