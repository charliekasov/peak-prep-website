import React from 'react';
import Link from 'next/link';

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fees Section */}
      <section className="py-12 sm:py-20 bg-[#EAE6E5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#6D6661] mb-6 sm:mb-8">
            Fees
          </h1>
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
            <Link 
              href="/get-started" 
              className="inline-block text-[#5B9279] font-semibold hover:text-[#4a7a63] transition-colors underline text-base sm:text-lg"
            >
              Book a free consultation.
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}