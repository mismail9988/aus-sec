import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Armed Security Melbourne | Armed Guard Booking Form",
  description: "Book armed security guards in Melbourne for high-value assets, cash in transit, and premises requiring elevated protection.",
  alternates: { canonical: "/book/armed-security/" },
};

export default function ArmedBookingPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Book Now</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Book Armed Security</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">Licensed armed security for high-value assets, cash handling, and premises requiring elevated threat response in Melbourne.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services/armed-security/" className="hover:text-[#c8102e]">Armed Security</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Book Now</span>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-[#f4f4f4] p-8">
              <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Armed Security Booking</h2>
              <div className="w-8 h-0.5 bg-[#c8102e] mb-8" />
              <BookingForm apiEndpoint="/api/bookings/armed/" fields={[
                { name: "contactName", label: "Contact Name", required: true, half: true },
                { name: "company", label: "Company Name", required: true, half: true },
                { name: "email", label: "Email Address", type: "email", required: true, half: true },
                { name: "phone", label: "Phone Number", type: "tel", half: true, placeholder: "04XX XXX XXX" },
                { name: "siteAddress", label: "Site / Premises Address", required: true },
                { name: "securityNeed", label: "Security Requirement", type: "select", options: ["Cash in Transit", "High-Value Asset Protection", "Premises Guard", "VIP / Executive Protection", "Jewellery / Valuables", "Financial Institution", "Other"] },
                { name: "guardCount", label: "Armed Guards Required", type: "select", options: ["1", "2", "3+", "Need advice"] },
                { name: "shiftType", label: "Coverage Required", type: "select", options: ["Business hours", "After hours", "24/7", "Specific shifts", "One-off"] },
                { name: "startDate", label: "Start Date", type: "date", half: true },
                { name: "duration", label: "Duration", type: "select", half: true, options: ["One-off", "1–4 weeks", "1–3 months", "Ongoing"] },
                { name: "notes", label: "Additional Details", type: "textarea", placeholder: "Nature of the threat, assets to protect, any prior incidents, compliance requirements..." },
              ]} />
            </div>
            <div className="space-y-6">
              <div className="bg-[#c8102e] p-6">
                <p className="text-white font-black text-xs uppercase tracking-widest mb-2">Important Notice</p>
                <p className="text-white/80 text-sm leading-relaxed">All armed security requests are assessed individually. We will contact you to discuss your specific requirements before deployment.</p>
              </div>
              <div className="bg-[#1a1a2e] p-8">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Compliance</h3>
                <ul className="space-y-3">
                  {["Firearms licence holders only", "Full compliance with Firearms Act", "Highest level of screening & vetting", "Regular re-certification", "Fully insured operations"].map((s, i) => (
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
