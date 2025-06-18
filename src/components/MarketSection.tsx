import React from "react";

export default function AppleMarketSection() {
  return (
    <section className="w-full flex justify-center py-16 bg-white" id="market">
      <div className="w-full max-w-3xl rounded-[32px] bg-white px-6 md:px-12 py-12 flex flex-col items-center shadow-md">
        <h2 className="text-4xl md:text-5xl font-bold text-[#111] text-center mb-6">Market Opportunity</h2>
        <ul className="list-disc list-inside text-xl text-gray-700 mb-6">
          <li>Global wellness market: $4.5 trillion and growing.</li>
          <li>Over 1 billion people use fitness or health apps.</li>
          <li>Rising demand for personalized, holistic health solutions.</li>
          <li>Most apps fail to deliver long-term results or adapt to real life.</li>
        </ul>
        <p className="font-semibold text-center text-2xl">LongevFit fills that gap — starting with English-speaking users and expanding globally</p>
      </div>
    </section>
  );
} 