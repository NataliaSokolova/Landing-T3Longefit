import React from "react";

export default function AppleProjectSection() {
  return (
    <section className="w-full flex justify-center py-16 bg-white">
      <div className="w-full max-w-3xl rounded-[32px] bg-white px-6 md:px-12 py-12 flex flex-col items-center shadow-md">
        <h2 className="text-4xl md:text-5xl font-bold text-[#111] text-center mb-6">Project for a Longer, Better Life</h2>
        <p className="text-xl md:text-2xl text-gray-700 text-center">
          In a world where burnout, stress, and quick-fix fitness fads dominate, LongevFit offers a smarter, more personalized path — one where your workouts, nutrition, and well-being are deeply connected and tailored to you.
        </p>
      </div>
    </section>
  );
} 