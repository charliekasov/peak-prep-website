'use client'

import React, { useState } from 'react';
import { GraduationCap, Target, Users, BookOpen, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

export default function PeakPrepLanding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! We\'ll be in touch soon.');
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#5B9279] border-b border-[#4a7a63] shadow-sm">
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              <span className="text-xl sm:text-2xl font-bold text-white font-lora">Peak Prep</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-white/90 hover:text-white transition-colors">What We Tutor</a>
              <a href="#remote" className="text-white/90 hover:text-white transition-colors">Why Remote?</a>
              <a href="#fees" className="text-white/90 hover:text-white transition-colors">Fees</a>
              <a href="#approach" className="text-white/90 hover:text-white transition-colors">Our Approach</a>
              
              {/* Desktop CTA */}
              <a 
                href="#contact" 
                className="bg-white text-[#5B9279] px-4 sm:px-6 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base ml-2"
              >
                Get Started
              </a>
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
                <a 
                  href="#services" 
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  What We Tutor
                </a>
                <a 
                  href="#remote" 
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Why Remote?
                </a>
                <a 
                  href="#fees" 
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Fees
                </a>
                <a 
                  href="#approach" 
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Approach
                </a>
                <a 
                  href="#contact" 
                  className="bg-white text-[#5B9279] px-6 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

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
                Work Smart,
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
                Post a good-looking score
              </span>
            </h1>
            
            <div className="mt-6 sm:mt-8">
              <a 
                href="#contact" 
                className="inline-block bg-white text-[#5B9279] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-10 sm:py-12 -mt-0 sm:-mt-6">
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
                Peak Prep is run by full-time tutors with decades of combined experience. We&apos;re not a massive company—we&apos;re educators first who built the tools we needed to serve students better.
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

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 bg-[#EAE6E5]">
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
        </div>
      </section>

      {/* Why Remote Section */}
      <section id="remote" className="py-12 sm:py-20 bg-[#8FCB9B]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6D6661] mb-6 sm:mb-8">
            Why Remote Tutoring?
          </h2>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Remote sessions offer much more flexible scheduling and a more lenient cancellation policy. The price is lower—not because the service is lesser, but because commute time isn&apos;t baked into the hourly rate.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              With remote-only tutoring, our students have been accepted to Yale, Cornell, Columbia, Brown, Duke, Vanderbilt, and many other top institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees" className="py-12 sm:py-20 bg-[#EAE6E5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#6D6661] mb-6 sm:mb-8">
            Fees
          </h2>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              At Peak Prep, our tutors are not just instructors; they are master strategists with a proven ability to deliver. Investing in Peak Prep means investing in peak performance and a clear path to success.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              For those tackling standardized tests, expect a focused, high-impact approach. Our seasoned professionals typically guide students to mastery in just 12-20 hours. This efficiency isn&apos;t magic; it&apos;s the result of precision teaching, targeted strategies, and a deep understanding of each student&apos;s potential.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Our hourly rates, ranging from $150 to $400, reflect the caliber of our team—professionals at the height of their craft. This structure allows us to partner with and retain educators who consistently achieve exceptional outcomes, ensuring your commitment empowers your child&apos;s progress.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Ready for a straightforward conversation about how we can help?
            </p>
            <a 
              href="#contact" 
              className="inline-block text-[#5B9279] font-semibold hover:text-[#4a7a63] transition-colors underline"
            >
              Book a free consultation.
            </a>
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

      {/* Contact Form Section */}
      <section id="contact" className="py-12 sm:py-20 bg-[#EAE6E5]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#6D6661] mb-4">
            Get Started
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base">
            Schedule a free consultation to discuss your goals and how we can help.
          </p>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-[#6D6661] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5B9279] focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-[#6D6661] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5B9279] focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-[#6D6661] mb-2">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5B9279] focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-[#6D6661] mb-2">
                Tell us about your goals
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5B9279] focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-[#5B9279] text-white py-3 rounded-md font-semibold hover:bg-[#4a7a63] transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6D6661] text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-[#8FCB9B]" />
                <span className="text-xl sm:text-2xl font-bold">Peak Prep</span>
              </div>
              <p className="text-sm sm:text-base text-gray-300">
                Expert test prep for ambitious students.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-base sm:text-lg">Quick Links</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="#services" className="text-gray-300 hover:text-[#8FCB9B] transition-colors">What We Tutor</a></li>
                <li><a href="#remote" className="text-gray-300 hover:text-[#8FCB9B] transition-colors">Why Remote</a></li>
                <li><a href="#fees" className="text-gray-300 hover:text-[#8FCB9B] transition-colors">Fees</a></li>
                <li><a href="#approach" className="text-gray-300 hover:text-[#8FCB9B] transition-colors">Our Approach</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-[#8FCB9B] transition-colors">Contact</a></li>
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
    </div>
  );
}