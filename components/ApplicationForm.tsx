"use client";

import { useState } from "react";

interface Props {
  roles: string[];
}

export default function ApplicationForm({ roles }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLSelectElement).value,
      experience: (form.elements.namedItem("experience") as HTMLSelectElement).value,
      licence: (form.elements.namedItem("licence") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/careers/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (res.ok) { setSubmitted(true); }
      else { setError("Something went wrong. Please try again or email us directly."); }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 p-12 text-center">
        <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-[#1a1a2e] uppercase mb-3">Application Received</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you for applying. Our recruitment team will review your application and be in touch within 3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name *</label>
          <input name="name" required className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email Address *</label>
          <input name="email" type="email" required className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone Number</label>
          <input name="phone" type="tel" className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" placeholder="04XX XXX XXX" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Position Applying For *</label>
          <select name="role" required className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e] bg-white">
            <option value="">Select a role...</option>
            {roles.map(r => <option key={r} value={r}>{r}</option>)}
            <option value="General Application">General Application</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Years of Security Experience</label>
          <select name="experience" className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e] bg-white">
            <option value="">Select...</option>
            <option>Less than 1 year</option>
            <option>1–2 years</option>
            <option>3–5 years</option>
            <option>5–10 years</option>
            <option>10+ years</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Victoria Security Licence Number</label>
          <input name="licence" className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" placeholder="e.g. 123456A (leave blank if pending)" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Cover Note</label>
        <textarea name="message" rows={4} className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e] resize-none" placeholder="Tell us about your experience, availability, and why you'd like to join the team..." />
      </div>
      {error && <div className="bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">{error}</div>}
      <button type="submit" disabled={submitting} className="w-full bg-[#c8102e] text-white font-bold py-3.5 text-sm uppercase tracking-widest hover:bg-[#a00d25] disabled:opacity-60 transition-colors">
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
      <p className="text-xs text-gray-400 text-center">Your information is handled in accordance with our <a href="/privacy-policy/" className="text-[#c8102e] hover:underline">Privacy Policy</a>.</p>
    </form>
  );
}
