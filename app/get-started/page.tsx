'use client'

import React, { useState } from 'react';

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! We\'ll be in touch soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Form Section */}
      <section className="py-12 sm:py-20 bg-[#EAE6E5]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#6D6661] mb-4">
            Get Started
          </h1>
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
    </div>
  );
}