import React from "react";

const team = [
  "Jane Doe — Founder & CEO (ex-Apple, health tech leader)",
  "John Smith — CTO (AI/ML, ex-Google Health)",
  "Dr. Emily Lee — Chief Science Officer (PhD, behavioral science)",
  "Alex Kim — Head of Product (ex-Peloton, digital wellness)",
  "Advisors: Top experts in longevity, fitness, and nutrition"
];

export default function AppleTeamSection() {
  return (
    <section className="w-full flex justify-center py-16 bg-white" id="team">
      <div className="w-full max-w-3xl rounded-[32px] bg-white px-6 md:px-12 py-12 flex flex-col items-center shadow-md">
        <h2 className="text-4xl md:text-5xl font-bold text-[#111] text-center mb-6">Our Team</h2>
        <ul className="team-list list-none text-xl text-gray-700 mb-6">
          {team.map((member, i) => (
            <li key={i} className="mb-2 font-medium">{member}</li>
          ))}
        </ul>
        <div className="blockquote mt-10 p-8 bg-gradient-to-r from-[#f7f7f7] to-[#eaffc2] border-l-4 border-[#BBF246] rounded-xl italic text-[#333] text-2xl shadow">“We know what it feels like to lose control of your health — and how powerful it is to take it back.”</div>
      </div>
    </section>
  );
} 