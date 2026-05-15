"use client";

import { useState } from "react";

const services = [
  "Corporate Security",
  "Retail Security",
  "Event Security",
  "Mobile Patrols",
  "Residential Security",
  "Construction Site Security",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[#f4f4f4] border border-gray-200 p-12 text-center">
        <div className="w-14 h-14 bg-[#c8102e] flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[#1a1a2e] font-black text-2xl uppercase mb-3">Enquiry Received</h3>
        <p className="text-[#4a4a4a] max-w-sm mx-auto text-sm leading-relaxed">
          Thank you for your enquiry. A member of our team will be in touch within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#2d2d2d] text-xs font-bold uppercase tracking-wide mb-2" htmlFor="firstName">
            First Name <span className="text-[#c8102e]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full bg-white border border-gray-300 px-4 py-3 text-[#2d2d2d] text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-[#2d2d2d] text-xs font-bold uppercase tracking-wide mb-2" htmlFor="lastName">
            Last Name <span className="text-[#c8102e]">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full bg-white border border-gray-300 px-4 py-3 text-[#2d2d2d] text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#2d2d2d] text-xs font-bold uppercase tracking-wide mb-2" htmlFor="email">
            Email Address <span className="text-[#c8102e]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-white border border-gray-300 px-4 py-3 text-[#2d2d2d] text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-[#2d2d2d] text-xs font-bold uppercase tracking-wide mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full bg-white border border-gray-300 px-4 py-3 text-[#2d2d2d] text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
            placeholder="04XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label className="block text-[#2d2d2d] text-xs font-bold uppercase tracking-wide mb-2" htmlFor="company">
          Company / Organisation
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full bg-white border border-gray-300 px-4 py-3 text-[#2d2d2d] text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label className="block text-[#2d2d2d] text-xs font-bold uppercase tracking-wide mb-2" htmlFor="service">
          Service Required <span className="text-[#c8102e]">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full bg-white border border-gray-300 px-4 py-3 text-[#2d2d2d] text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[#2d2d2d] text-xs font-bold uppercase tracking-wide mb-2" htmlFor="message">
          Tell Us More <span className="text-[#c8102e]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-white border border-gray-300 px-4 py-3 text-[#2d2d2d] text-sm focus:outline-none focus:border-[#c8102e] transition-colors resize-none"
          placeholder="Describe your security requirements, location, number of guards needed, dates, etc."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#c8102e] text-white font-bold py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Enquiry"}
      </button>

      <p className="text-[#767676] text-xs text-center">
        We respond within 2 business hours. No obligation. No lock-in contracts.
      </p>
    </form>
  );
}
