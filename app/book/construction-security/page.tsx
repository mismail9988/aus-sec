import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Construction Site Security Melbourne | Construction Security Booking",
  description: "Book construction site security in Melbourne. Guard and canine patrols to protect equipment, materials, and plant from theft and vandalism.",
  alternates: { canonical: "/book/construction-security/" },
};

export default function ConstructionBookingPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Book Now</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Book Construction Site Security</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">Protect your site from theft, vandalism, and unauthorised access. Guards and canine patrols for Melbourne construction sites.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services/construction-security/" className="hover:text-[#c8102e]">Construction Security</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Book Now</span>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-[#f4f4f4] p-8">
              <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Construction Security Booking</h2>
              <div className="w-8 h-0.5 bg-[#c8102e] mb-8" />
              <BookingForm apiEndpoint="/api/bookings/construction/" fields={[
                { name: "contactName", label: "Contact Name", required: true, half: true },
                { name: "company", label: "Company / Builder", half: true },
                { name: "email", label: "Email Address", type: "email", required: true, half: true },
                { name: "phone", label: "Phone Number", type: "tel", half: true, placeholder: "04XX XXX XXX" },
                { name: "siteAddress", label: "Site Address", required: true, placeholder: "Construction site address" },
                { name: "projectType", label: "Project Type", type: "select", options: ["Residential Build", "Commercial Build", "Civil / Infrastructure", "Demolition", "Renovation / Fit-out", "Other"] },
                { name: "siteSize", label: "Approximate Site Size", type: "select", options: ["Small (under 2,000m²)", "Medium (2,000–10,000m²)", "Large (10,000m²+)", "Not sure"] },
                { name: "guardCount", label: "Guards / Patrols Needed", type: "select", options: ["1 guard", "2 guards", "Guard + canine patrol", "Canine patrol only", "Multiple guards", "Need advice"] },
                { name: "afterHours", label: "After-Hours Coverage Required?", type: "select", options: ["Yes — overnight only", "Yes — overnight + weekends", "24/7 coverage", "Weekends only", "Not sure"] },
                { name: "startDate", label: "Start Date", type: "date", half: true },
                { name: "projectDuration", label: "Project Duration", type: "select", half: true, options: ["Under 1 month", "1–3 months", "3–6 months", "6–12 months", "12+ months"] },
                { name: "notes", label: "Additional Details", type: "textarea", placeholder: "Specific risks, equipment on site, access requirements, any prior incidents..." },
              ]} />
            </div>
            <div className="space-y-6">
              <div className="bg-[#1a1a2e] p-8">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Why Construction Sites Need Security</h3>
                <ul className="space-y-3">
                  {["Equipment theft costs AU industry $1B+ yearly", "Most theft occurs overnight & weekends", "Canine patrols deter 90%+ of intruders", "Written reports for insurance claims", "Rapid response to alarms"].map((s, i) => (
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
