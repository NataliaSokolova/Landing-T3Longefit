import React from "react";

export default function AppleSolutionSection() {
  return (
    <section className="solution-section w-full flex justify-center py-16 bg-black" id="solution">
      <div className="solution-content-wrapper flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-12 px-6 md:px-12 py-12">
        <div className="solution-card bg-[#181818] rounded-[28px] shadow-2xl p-12 text-white max-w-md flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">LongevFit is your AI-powered health companion</h2>
          <ul className="list-disc list-inside text-xl text-gray-200 space-y-3 ml-2">
            <li>Personalized fitness, nutrition, and recovery plans that adapt to your life.</li>
            <li>Real-time adjustments based on your feedback, schedule, and progress.</li>
            <li>Holistic approach: workouts, meals, sleep, stress, and more — all connected.</li>
            <li>Guidance from real coaches and AI, so you're never alone.</li>
            <li>Progress tracking that celebrates consistency, not just intensity.</li>
          </ul>
        </div>
        <div className="solution-image flex-1 flex items-center justify-center min-w-[220px] max-w-xs">
          <img src="/images/4582fcc01fbc443795404c60ae2a6ea2.png" alt="LongevFit iPhone Mockup" className="w-full max-w-xs rounded-[32px] shadow-2xl bg-[#222]" />
        </div>
      </div>
    </section>
  );
} 