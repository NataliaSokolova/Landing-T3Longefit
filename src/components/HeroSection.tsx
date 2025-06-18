import React from "react";

export default function AppleHeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-[#f5f5f7] pt-8 pb-20">
      <div className="w-full max-w-7xl mx-auto rounded-[40px] overflow-hidden flex flex-col items-center bg-[#f5f5f7]">
        <div className="w-full h-[340px] md:h-[480px] flex items-center justify-center relative">
          {/* Можно заменить на <video> или <Image> */}
          <img
            src="/images/hero-fitness.jpg"
            alt="Fitness+ Hero"
            className="w-full h-full object-cover object-center rounded-[40px]"
            style={{ minHeight: 220 }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
            <div className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg mb-4">
              <span className="inline-block align-middle mr-2"></span>Fitness+
            </div>
            <div className="text-white text-3xl md:text-5xl font-bold text-center mb-6">
              Fitness for everyone.<br />Fitness for you.
            </div>
            <a
              href="#"
              className="inline-block rounded-full bg-[#bfff10] hover:bg-[#d6fa7a] px-8 py-3 text-lg font-medium text-black transition-colors duration-200 shadow"
              style={{ boxShadow: "0 2px 8px 0 rgba(187,242,70,0.12)" }}
            >
              Try it free*
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 