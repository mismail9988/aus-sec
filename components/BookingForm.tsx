"use client";

import { useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "select" | "textarea" | "number";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  half?: boolean;
};

interface Props {
  fields: Field[];
  apiEndpoint: string;
  submitLabel?: string;
}

export default function BookingForm({ fields, apiEndpoint, submitLabel = "Submit Booking Request" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const body: Record<string, string> = {};
    fields.forEach(f => {
      const el = form.elements.namedItem(f.name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (el) body[f.name] = el.value;
    });
    try {
      const res = await fetch(apiEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 p-12 text-center">
        <div className="w-14 h-14 bg-[#c8102e] flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[#1a1a2e] font-black text-2xl uppercase mb-3">Booking Request Received</h3>
        <p className="text-[#4a4a4a] max-w-sm mx-auto text-sm leading-relaxed">
          Thank you. A member of our team will be in touch within 2 business hours.
        </p>
      </div>
    );
  }

  const inputClass = "w-full bg-white border border-gray-300 px-4 py-3 text-[#2d2d2d] text-sm focus:outline-none focus:border-[#c8102e] transition-colors";
  const labelClass = "block text-[#2d2d2d] text-xs font-bold uppercase tracking-wide mb-2";

  // Group fields into rows: half-width fields pair together
  const rows: Field[][] = [];
  let i = 0;
  while (i < fields.length) {
    if (fields[i].half && fields[i + 1]?.half) {
      rows.push([fields[i], fields[i + 1]]);
      i += 2;
    } else {
      rows.push([fields[i]]);
      i++;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {rows.map((row, ri) => (
        <div key={ri} className={row.length === 2 ? "grid grid-cols-1 sm:grid-cols-2 gap-5" : ""}>
          {row.map(f => (
            <div key={f.name}>
              <label className={labelClass} htmlFor={f.name}>
                {f.label} {f.required && <span className="text-[#c8102e]">*</span>}
              </label>
              {f.type === "select" ? (
                <select id={f.name} name={f.name} required={f.required} className={inputClass}>
                  <option value="">Select...</option>
                  {f.options?.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : f.type === "textarea" ? (
                <textarea id={f.name} name={f.name} required={f.required} rows={4} placeholder={f.placeholder} className={`${inputClass} resize-none`} />
              ) : (
                <input id={f.name} name={f.name} type={f.type || "text"} required={f.required} placeholder={f.placeholder} className={inputClass} />
              )}
            </div>
          ))}
        </div>
      ))}

      {error && <div className="bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">{error}</div>}

      <button type="submit" disabled={loading}
        className="w-full bg-[#c8102e] text-white font-bold py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors disabled:opacity-60">
        {loading ? "Submitting..." : submitLabel}
      </button>
      <p className="text-[#767676] text-xs text-center">We respond within 2 business hours. No obligation.</p>
    </form>
  );
}
