import React from "react";

const whyCards = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="#BBF246" strokeWidth="3"/><path d="M16 32c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#222" strokeWidth="2" strokeLinecap="round"/><circle cx="24" cy="20" r="4" stroke="#222" strokeWidth="2"/></svg>
    ),
    title: "Built on behavioral science and longevity research."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="8" width="32" height="32" rx="16" stroke="#BBF246" strokeWidth="3"/><path d="M24 16v8l6 6" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Adapts to your changing needs, goals, and life events."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="10" y="34" width="6" height="6" rx="3" fill="#BBF246"/><rect x="21" y="26" width="6" height="14" rx="3" fill="#BBF246"/><rect x="32" y="18" width="6" height="22" rx="3" fill="#BBF246"/></svg>
    ),
    title: "Focuses on small, sustainable changes for lasting results."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="12" width="32" height="24" rx="6" stroke="#BBF246" strokeWidth="3"/><rect x="18" y="36" width="12" height="4" rx="2" fill="#BBF246"/><circle cx="24" cy="24" r="3" fill="#222"/></svg>
    ),
    title: "Integrates seamlessly with your devices and daily routine."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="#BBF246" strokeWidth="3"/><path d="M24 32v-8M24 24l-6-6M24 24l6-6" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: "Empowers you to take control of your health, one step at a time."
  }
];

export default function AppleWhySection() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-transparent" id="why">
      <h2 className="text-4xl md:text-5xl font-bold text-[#111] text-center mb-10">Why It Works</h2>
      <div className="why-cards-container flex flex-wrap gap-10 justify-center w-full max-w-5xl">
        {whyCards.map((card, i) => (
          <div key={i} className="why-card bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center max-w-xs min-w-[220px] flex-1 transition-all opacity-100">
            <div className="why-card-icon mb-6">{card.icon}</div>
            <div className="why-card-title text-lg font-semibold text-[#222]">{card.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 