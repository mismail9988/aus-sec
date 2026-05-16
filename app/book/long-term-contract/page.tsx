import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Long-Term Security Contract Melbourne | Contract Security Enquiry",
  description: "Enquire about a long-term security contract in Melbourne. Ongoing security guard contracts for businesses, buildings, and organisations.",
  alternates: { canonical: "/book/long-term-contract/" },
};

export default function ContractBookingPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Long-Term Contracts</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Long-Term Security Contract Enquiry</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">Looking for a dedicated ongoing security provider? Tell us about your requirements and we'll put together a competitive contract proposal.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Long-Term Contract Enquiry</span>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-[#f4f4f4] p-8">
              <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Contract Enquiry Form</h2>
              <div className="w-8 h-0.5 bg-[#c8102e] mb-8" />
              <BookingForm apiEndpoint="/api/bookings/contract/" fields={[
                { name: "contactName", label: "Contact Name", required: true, half: true },
                { name: "company", label: "Company / Organisation", required: true, half: true },
                { name: "email", label: "Email Address", type: "email", required: true, half: true },
                { name: "phone", label: "Phone Number", type: "tel", half: true, placeholder: "04XX XXX XXX" },
                { name: "siteAddress", label: "Primary Site Address", placeholder: "Main site address (list others in notes)" },
                { name: "serviceTypes", label: "Services Required", type: "select", options: ["Security Guards (static)", "Mobile Patrols", "Event Security", "Both Guards & Patrols", "Multiple Services — see notes"] },
                { name: "guardCount", label: "Estimated Guard Count", type: "select", options: ["1–2 guards", "3–5 guards", "6–10 guards", "10–20 guards", "20+ guards", "Varies — see notes"] },
                { name: "contractLength", label: "Preferred Contract Length", type: "select", options: ["3 months", "6 months", "12 months", "2 years", "Open-ended", "Flexible — advise me"] },
                { name: "startDate", label: "Preferred Start Date", type: "date", half: true },
                { name: "budget", label: "Approximate Monthly Budget", type: "select", half: true, options: ["Under $5,000/month", "$5,000–$15,000/month", "$15,000–$30,000/month", "$30,000+/month", "Prefer not to say"] },
                { name: "notes", label: "Additional Details", type: "textarea", placeholder: "Multiple sites, specific service mix, existing provider you're switching from, any compliance requirements..." },
              ]} />
            </div>
            <div className="space-y-6">
              <div className="bg-[#1a1a2e] p-8">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Contract Client Benefits</h3>
                <ul className="space-y-3">
                  {["Dedicated account manager", "Volume pricing discounts", "Priority emergency response", "Monthly reporting & reviews", "Flexible scaling up or down", "No lock-in on our end — we earn your business"].map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full shrink-0" />{s}
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
