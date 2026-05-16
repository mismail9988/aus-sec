import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Emergency Security Request Melbourne | Same-Day Security Guards",
  description: "Urgent security required? Submit an emergency security request for Melbourne. Same-day and next-day deployment available.",
  alternates: { canonical: "/book/emergency-security/" },
};

export default function EmergencyBookingPage() {
  return (
    <>
      <section className="bg-[#c8102e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
            <p className="text-white text-xs uppercase tracking-widest font-bold">Urgent Request</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Emergency Security Request</h1>
          <div className="w-12 h-1 bg-white mb-6" />
          <p className="text-white/80 text-lg max-w-2xl font-light">Same-day and next-day security deployment available. Fill in the form below — we respond as a priority to all emergency requests.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Emergency Security Request</span>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-[#f4f4f4] p-8">
              <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Emergency Security Form</h2>
              <div className="w-8 h-0.5 bg-[#c8102e] mb-8" />
              <BookingForm apiEndpoint="/api/bookings/emergency/" submitLabel="Submit Emergency Request" fields={[
                { name: "contactName", label: "Your Name", required: true, half: true },
                { name: "company", label: "Company / Organisation", half: true },
                { name: "email", label: "Email Address", type: "email", required: true, half: true },
                { name: "phone", label: "Phone Number (Best to reach you)", type: "tel", half: true, placeholder: "04XX XXX XXX" },
                { name: "siteAddress", label: "Site Address Requiring Security", required: true },
                { name: "urgency", label: "How Urgent?", type: "select", required: true, options: ["Same day (within hours)", "Tonight", "Tomorrow", "Within 48 hours", "Within this week"] },
                { name: "incidentType", label: "Nature of Emergency", type: "select", options: ["Break-in / Burglary", "Ongoing threats / Harassment", "Protest / Dispute", "Vacant premises — urgent risk", "Staff safety concern", "Post-incident site protection", "Other"] },
                { name: "guardCount", label: "Guards Required", type: "select", options: ["1", "2", "3–5", "5+", "Not sure — advise me"] },
                { name: "notes", label: "Describe the Situation", type: "textarea", required: true, placeholder: "Please describe what has happened or what the threat is. The more detail you provide, the faster we can respond appropriately." },
              ]} />
            </div>
            <div className="space-y-4">
              <div className="bg-[#1a1a2e] p-8">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-4">Emergency Response</h3>
                <ul className="space-y-3">
                  {["Priority response to all emergency requests", "Same-day deployment where possible", "24/7 operations centre", "Guards briefed and ready fast", "Ongoing support after initial deployment"].map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full shrink-0" />{s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 p-6">
                <p className="text-red-800 font-black text-xs uppercase tracking-wide mb-2">If you are in immediate danger</p>
                <p className="text-red-700 text-sm">Call 000 immediately. Our emergency security service is for planned urgent deployments — not active emergencies requiring police response.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
