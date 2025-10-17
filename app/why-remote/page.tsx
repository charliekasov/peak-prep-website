import React from 'react';

export default function WhyRemotePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Why Remote Section */}
      <section className="py-12 sm:py-20 bg-[#8FCB9B]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#6D6661] mb-6 sm:mb-8">
            Why Remote Tutoring?
          </h1>
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
    </div>
  );
}