import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Concierge Security Melbourne | Concierge Guard Booking",
  description: "Book concierge security for your building in Melbourne. Professional, uniformed concierge security guards for residential and commercial buildings.",
  alternates: { canonical: "/book/concierge-security/" },
};

export default function ConciergeBookingPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Book Now</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Book Concierge Security</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">Professional concierge security for residential towers, commercial buildings, and mixed-use developments across Melbourne.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services/concierge-security/" className="hover:text-[#c8102e]">Concierge Security</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Book Now</span>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-[#f4f4f4] p-8">
              <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Concierge Security Booking</h2>
              <div className="w-8 h-0.5 bg-[#c8102e] mb-8" />
              <BookingForm apiEndpoint="/api/bookings/concierge/" fields={[
                { name: "contactName", label: "Contact Name", required: true, half: true },
                { name: "buildingName", label: "Building Name", required: true, half: true },
                { name: "email", label: "Email Address", type: "email", required: true, half: true },
                { name: "phone", label: "Phone Number", type: "tel", half: true, placeholder: "04XX XXX XXX" },
                { name: "buildingAddress", label: "Building Address", placeholder: "Full building address" },
                { name: "buildingType", label: "Building Type", type: "select", options: ["Residential Apartment Tower", "Mixed-Use Development", "Commercial Office Building", "Hotel / Serviced Apartments", "Retirement Village", "Other"] },
                { name: "units", label: "Number of Units / Floors", type: "select", options: ["Under 50 units", "50–100 units", "100–200 units", "200+ units", "Commercial (by floors)"] },
                { name: "shiftType", label: "Coverage Required", type: "select", options: ["24/7 (3 shifts)", "Day & evening only", "Evening & overnight", "Overnight only", "Custom"] },
                { name: "startDate", label: "Start Date", type: "date", half: true },
                { name: "duration", label: "Duration", type: "select", half: true, options: ["1–3 months", "3–6 months", "6–12 months", "12+ months", "Ongoing"] },
                { name: "notes", label: "Additional Details", type: "textarea", placeholder: "Current security setup, specific issues, access control systems in place, OC responsibilities..." },
              ]} />
            </div>
            <div className="space-y-6">
              <div className="bg-[#1a1a2e] p-8">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Concierge Security Includes</h3>
                <ul className="space-y-3">
                  {["Lobby & reception management", "Visitor check-in & monitoring", "Access control enforcement", "Parcel & delivery management", "Resident assistance", "Incident response & reporting", "CCTV monitoring"].map((s, i) => (
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
