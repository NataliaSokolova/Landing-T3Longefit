import React from "react";

export default function ApplePricingSection() {
  return (
    <section className="w-full flex justify-center py-16 bg-[#f5f5f7]">
      <div className="w-full max-w-6xl rounded-[40px] bg-white px-4 md:px-12 py-12 flex flex-col items-center shadow-none">
        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-12">
          {/* 3 месяца бесплатно */}
          <div className="flex-1 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-200 px-6 pb-10 md:pb-0 md:pr-10">
            <div className="text-2xl font-bold mb-4 mt-2 text-center">3 months free</div>
            <div className="text-gray-500 text-center mb-8 text-lg">New subscribers get 3 months of Apple Fitness+ free with the purchase of an eligible device.<sup>1</sup></div>
            <a href="#" className="inline-block rounded-full bg-[#bfff10] hover:bg-[#d6fa7a] px-10 py-3 text-xl font-bold text-black transition-colors duration-200 shadow" style={{ boxShadow: "0 2px 8px 0 rgba(187,242,70,0.12)" }}>Shop now</a>
          </div>
          {/* 1 месяц бесплатно */}
          <div className="flex-1 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-200 px-6 pb-10 md:pb-0 md:pr-10">
            <div className="text-2xl font-bold mb-4 mt-2 text-center">1 month free</div>
            <div className="text-gray-500 text-center mb-8 text-lg">New subscribers get 1 month of Apple Fitness+ free, then pay $9.99 per month or $79.99 annually.<sup>*</sup></div>
            <a href="#" className="inline-block rounded-full bg-[#bfff10] hover:bg-[#d6fa7a] px-10 py-3 text-xl font-bold text-black transition-colors duration-200 shadow" style={{ boxShadow: "0 2px 8px 0 rgba(187,242,70,0.12)" }}>Try it free</a>
          </div>
          {/* Apple One */}
          <div className="flex-1 flex flex-col items-center px-6">
            <div className="text-2xl font-bold mb-4 mt-2 text-center">Apple One</div>
            <div className="text-gray-500 text-center mb-8 text-lg">Bundle Apple Fitness+ with five other great services for one low monthly price.</div>
            <div className="flex gap-4">
              <a href="#" className="inline-block rounded-full bg-[#bfff10] hover:bg-[#d6fa7a] px-10 py-3 text-xl font-bold text-black transition-colors duration-200 shadow" style={{ boxShadow: "0 2px 8px 0 rgba(187,242,70,0.12)" }}>Try Apple One free<sup>2</sup></a>
              <a href="#" className="inline-block rounded-full border border-black px-10 py-3 text-xl font-bold text-black transition-colors duration-200 hover:bg-gray-100">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 