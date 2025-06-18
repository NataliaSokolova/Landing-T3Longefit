import React, { useState } from "react";

export default function AppleWaitlistSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const validate = () => {
    const newErrors = {
      name: !form.name.trim(),
      email: !form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
      message: !form.message.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="waitlist-section w-full flex justify-center py-16 bg-white" id="waitlist">
      <div className="w-full max-w-xl rounded-[32px] bg-white px-6 md:px-12 py-12 flex flex-col items-center shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111] text-center mb-8">Want early access? Sign up to join our waitlist and help shape the future of personalized wellness.</h2>
        <form className="waitlist-form flex flex-col gap-6 w-full" onSubmit={handleSubmit} autoComplete="off" noValidate>
          <div>
            <label htmlFor="name" className="font-semibold mb-2 block text-lg">Name *</label>
            <input
              id="name"
              type="text"
              className={`border-2 rounded-xl px-6 py-4 w-full bg-gray-50 focus:border-[#BBF246] transition text-lg ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="email" className="font-semibold mb-2 block text-lg">Email *</label>
            <input
              id="email"
              type="email"
              className={`border-2 rounded-xl px-6 py-4 w-full bg-gray-50 focus:border-[#BBF246] transition text-lg ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="message" className="font-semibold mb-2 block text-lg">Message *</label>
            <textarea
              id="message"
              rows={3}
              className={`border-2 rounded-xl px-6 py-4 w-full bg-gray-50 focus:border-[#BBF246] transition text-lg ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            />
          </div>
          <button type="submit" className="bg-[#BBF246] text-[#222] rounded-full py-4 font-bold shadow hover:bg-[#d6fa7a] transition mt-2 text-xl">Join Waitlist</button>
          {submitted && (
            <div className="bg-[#eaffc2] rounded-xl py-4 mt-4 font-semibold text-[#222] shadow text-center animate-fadeIn">
              Thank you for joining the waitlist!
            </div>
          )}
        </form>
      </div>
    </section>
  );
} 