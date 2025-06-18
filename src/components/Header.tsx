import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function AppleHeader() {
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setNavOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-md flex items-center justify-between px-10 h-[72px] transition-colors duration-300">
      <div className="flex items-center gap-3 font-bold text-2xl text-[#181818] select-none logo">
        <div className="w-[38px] h-[38px] rounded-[12px] bg-gradient-to-br from-[#BBF246] to-[#eaffc2] flex items-center justify-center font-bold text-lg shadow logo-placeholder" style={{ letterSpacing: "-1px" }}>LF</div>
        <span>LongevFit</span>
      </div>
      <button
        className="hamburger block md:hidden ml-3 p-2"
        aria-label="Menu"
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className="block w-[26px] h-[3px] bg-[#222] my-1 rounded transition-all" />
        <span className="block w-[26px] h-[3px] bg-[#222] my-1 rounded transition-all" />
        <span className="block w-[26px] h-[3px] bg-[#222] my-1 rounded transition-all" />
      </button>
      <nav className={`flex items-center gap-10 md:gap-6 transition-all duration-200 ${navOpen ? 'flex flex-col absolute top-[60px] right-0 w-screen bg-white shadow-lg py-6 z-50' : 'hidden md:flex'}`} id="mainNav">
        <Link href="#features" className="text-[#222] font-semibold text-lg px-3 py-2 rounded hover:text-[#BBF246] hover:bg-gray-100 transition">Features</Link>
        <Link href="#team" className="text-[#222] font-semibold text-lg px-3 py-2 rounded hover:text-[#BBF246] hover:bg-gray-100 transition">Team</Link>
        <Link href="#testimonials" className="text-[#222] font-semibold text-lg px-3 py-2 rounded hover:text-[#BBF246] hover:bg-gray-100 transition">Testimonials</Link>
        <Link href="#waitlist" className="text-[#222] font-semibold text-lg px-3 py-2 rounded hover:text-[#BBF246] hover:bg-gray-100 transition">Contact</Link>
      </nav>
    </header>
  );
} 