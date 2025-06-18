import React from "react";

export default function AppleInstaSection() {
  return (
    <section className="w-full flex justify-center py-16 bg-[#f5f5f7]">
      <div className="w-full max-w-5xl rounded-[40px] bg-[#f5f5f7] px-6 md:px-16 py-16 flex flex-col items-center shadow-none">
        <h2 className="text-4xl md:text-6xl font-bold text-[#111] text-center leading-tight mb-4">
          Join Fitness+ on Instagram<br />for even more inspiration.
        </h2>
        <p className="text-lg md:text-2xl text-gray-500 text-center mb-8 max-w-2xl">
          Stay up to date with the latest workouts, meditations, celebrations, and news from the Fitness+ studio.
        </p>
        <a
          href="https://instagram.com/applefitnessplus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-[#bfff10] hover:bg-[#d6fa7a] px-8 py-3 text-lg font-medium text-black transition-colors duration-200 shadow"
          style={{ boxShadow: "0 2px 8px 0 rgba(187,242,70,0.12)" }}
        >
          Follow @applefitnessplus
        </a>
      </div>
    </section>
  );
} 