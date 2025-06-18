import React from "react";

export default function AppleSupportSection() {
  return (
    <section className="w-full flex justify-center py-16 bg-white" id="support">
      <div className="w-full max-w-3xl rounded-[32px] bg-white px-6 md:px-12 py-12 flex flex-col items-center shadow-md">
        <h2 className="text-4xl md:text-5xl font-bold text-[#111] text-center mb-6">Support the Mission</h2>
        <p className="text-2xl md:text-3xl text-gray-700 text-center mb-4">
          LongevFit is on a mission to make personalized, sustainable wellness accessible to everyone. If you're passionate about health, technology, or investing in the future of well-being, we'd love to connect.<br /><br />
          <strong>Investment opportunity:</strong> We're seeking mission-aligned investors and partners. Contact us to learn more.
        </p>
      </div>
    </section>
  );
} 