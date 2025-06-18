import React from "react";

const problems = [
  {
    img: "/images/2624acd560d84a19bd35621f25dbe68f.png",
    alt: "Busy Professional Icon",
    text: "Busy professionals want to be healthier — but they don't have the time, guidance, or consistency to keep going."
  },
  {
    img: "/images/34c19ba9cfee494abecc3fd34fe0eade.png",
    alt: "Disconnected Apps Icon",
    text: "They jump between fitness apps, diets, and mental health tools that don't talk to each other."
  },
  {
    img: "/images/19f9888bb0384033bcebb2dd9a1852db.png",
    alt: "Intensity vs Longevity Icon",
    text: "Most platforms sell intensity, not longevity."
  }
];

export default function AppleProblemSection() {
  return (
    <section className="problem-section w-full flex justify-center py-16 bg-white" id="problem">
      <div className="w-full max-w-4xl rounded-[32px] bg-white px-6 md:px-12 py-12 flex flex-col items-center shadow-md">
        <div className="text-4xl md:text-5xl font-bold text-[#111] text-center mb-10">Fitness that fits life — not the other way around</div>
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-stretch">
          {problems.map((p, i) => (
            <div key={i} className="problem-card flex-1 flex flex-col items-center bg-white rounded-2xl shadow-lg p-10 text-center transition-all opacity-100">
              <div className="problem-card-icon mb-6">
                <img src={p.img} alt={p.alt} className="w-16 h-16 rounded-xl shadow" style={{background:'#fff'}} />
              </div>
              <div className="problem-card-text text-lg font-semibold text-[#222]">{p.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 