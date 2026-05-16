import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Mobile Patrols Melbourne | Mobile Patrol Booking Form",
  description: "Book mobile patrol security in Melbourne. Regular patrol visits for your property, after hours. Fast quote within 2 business hours.",
  alternates: { canonical: "/book/mobile-patrols/" },
};

export default function PatrolBookingPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Book Now</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Book Mobile Patrols</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">Regular patrol visits to your site after hours. Alarm response, lock-up checks, and written reports every visit.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services/mobile-patrols/" className="hover:text-[#c8102e]">Mobile Patrols</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Book Now</span>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-[#f4f4f4] p-8">
              <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Mobile Patrol Booking</h2>
              <div className="w-8 h-0.5 bg-[#c8102e] mb-8" />
              <BookingForm apiEndpoint="/api/bookings/patrol/" fields={[
                { name: "contactName", label: "Your Name", required: true, half: true, placeholder: "John Smith" },
                { name: "company", label: "Company / Organisation", half: true },
                { name: "email", label: "Email Address", type: "email", required: true, half: true },
                { name: "phone", label: "Phone Number", type: "tel", half: true, placeholder: "04XX XXX XXX" },
                { name: "siteAddress", label: "Site Address", required: true, placeholder: "Full site address including suburb" },
                { name: "siteType", label: "Site Type", type: "select", options: ["Commercial Property", "Industrial / Warehouse", "Retail", "Construction Site", "Residential Complex", "Vacant Land / Property", "Other"] },
                { name: "patrolFrequency", label: "Patrol Frequency", type: "select", options: ["Nightly (7 nights)", "Weeknights only (Mon–Fri)", "Weekends only", "3 nights per week", "Random / irregular", "Not sure"] },
                { name: "startDate", label: "Required Start Date", type: "date", half: true },
                { name: "duration", label: "Duration", type: "select", half: true, options: ["1–4 weeks", "1–3 months", "3–6 months", "6+ months", "Ongoing", "Not sure"] },
                { name: "notes", label: "Additional Details", type: "textarea", placeholder: "Any access requirements, alarm codes, specific patrol instructions, incidents to be aware of..." },
              ]} />
            </div>
            <div className="space-y-6">
              <div className="bg-[#1a1a2e] p-8">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">What You Get</h3>
                <ul className="space-y-3">
                  {["Multiple patrol visits per night", "Alarm response included", "Lock-up & open-up checks", "Written report every visit", "Photo evidence on request", "24/7 operations centre"].map((s, i) => (
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
