import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Request a Security Quote | Security Guard Company Melbourne",
  description: "Get a fast, no-obligation security quote from Security Guard Company Melbourne. Tell us your requirements and we'll respond within 2 business hours.",
  alternates: { canonical: "/book/quote/" },
};

export default function QuoteBookingPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Free Quote</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Request a Security Quote</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">Tell us about your security requirements. We'll respond with a tailored proposal within 2 business hours.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Request a Quote</span>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-[#f4f4f4] p-8">
              <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Quote Request Form</h2>
              <div className="w-8 h-0.5 bg-[#c8102e] mb-8" />
              <BookingForm apiEndpoint="/api/bookings/quotes/" fields={[
                { name: "contactName", label: "Full Name", required: true, half: true, placeholder: "John Smith" },
                { name: "company", label: "Company / Organisation", half: true, placeholder: "Your company" },
                { name: "email", label: "Email Address", type: "email", required: true, half: true, placeholder: "john@example.com" },
                { name: "phone", label: "Phone Number", type: "tel", half: true, placeholder: "04XX XXX XXX" },
                { name: "serviceType", label: "Service Required", type: "select", required: true, options: ["Corporate Security", "Event Security", "Mobile Patrols", "Construction Site Security", "Retail Security", "Loss Prevention", "Concierge Security", "Canine Security", "Armed Security", "Crowd Control", "Electronic Security", "Other"] },
                { name: "siteAddress", label: "Site Address", placeholder: "123 Example St, Melbourne VIC 3000" },
                { name: "guardCount", label: "Number of Guards Needed", type: "select", options: ["1", "2", "3-5", "6-10", "10+", "Not sure"] },
                { name: "startDate", label: "Required Start Date", type: "date", half: true },
                { name: "duration", label: "Duration / Contract Length", type: "select", half: true, options: ["One-off (single day)", "Short term (1–4 weeks)", "Medium term (1–6 months)", "Long term (6+ months)", "Ongoing", "Not sure"] },
                { name: "notes", label: "Additional Details", type: "textarea", placeholder: "Any specific requirements, shift patterns, access restrictions, or other information..." },
              ]} />
            </div>
            <div className="space-y-6">
              <div className="bg-[#1a1a2e] p-8">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">What Happens Next</h3>
                <ol className="space-y-4">
                  {["We review your requirements within 2 hours", "A specialist calls or emails you", "You receive a detailed, transparent proposal", "We deploy once you approve"].map((s, i) => (
                    <li key={i} className="flex gap-3 text-gray-300 text-sm">
                      <span className="text-[#c8102e] font-black">0{i + 1}</span>{s}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border border-gray-200 p-8">
                <h3 className="text-[#1a1a2e] font-black uppercase text-sm tracking-widest mb-4">Our Promise</h3>
                <ul className="space-y-3">
                  {["No lock-in contracts", "Transparent pricing", "Licensed & insured guards", "2 hour response time", "No hidden fees"].map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-[#4a4a4a]">
                      <svg className="w-4 h-4 text-[#c8102e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
