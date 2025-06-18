import React from "react";

const features = [
  { icon: "fa-dumbbell", text: "Personalized training (AI-adaptive workouts)" },
  { icon: "fa-utensils", text: "Nutrition assistant (tailored meals & recipes)" },
  { icon: "fa-brain", text: "Meditation & recovery tools" },
  { icon: "fa-mobile-screen-button", text: "Lifestyle sync with wearables" },
  { icon: "fa-chart-line", text: "Progress dashboard & goal tracker" },
  { icon: "fa-user-graduate", text: "Real-time coaching features" },
];

export default function AppleFeaturesSection() {
  return (
    <section className="section w-full flex justify-center py-16 bg-black" id="features">
      <div className="w-full max-w-5xl rounded-[32px] bg-black px-6 md:px-12 py-12 flex flex-col items-center shadow-none">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-white text-center mb-10">What's Inside LongevFit?</h2>
        <div className="features-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {features.map((f, i) => (
            <div key={i} className="feature-card bg-[#181818] rounded-2xl shadow-lg p-10 flex flex-col items-center text-center text-white font-semibold text-lg min-h-[160px]">
              <div className="feature-icon text-3xl mb-4" style={{ color: '#BBF246' }}>
                <i className={`fa-solid ${f.icon}`} aria-hidden="true"></i>
              </div>
              <div>{f.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 