import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Crowd Control Melbourne | Crowd Controller Booking Form",
  description: "Book licenced crowd controllers for Melbourne venues and events. RSA-endorsed, experienced door staff available 7 nights a week.",
  alternates: { canonical: "/book/crowd-control/" },
};

export default function CrowdControlBookingPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Book Now</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Book Crowd Control</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">Licenced, RSA-endorsed crowd controllers for Melbourne venues. Available 7 nights a week.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services/crowd-control/" className="hover:text-[#c8102e]">Crowd Control</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Book Now</span>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-[#f4f4f4] p-8">
              <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Crowd Control Booking</h2>
              <div className="w-8 h-0.5 bg-[#c8102e] mb-8" />
              <BookingForm apiEndpoint="/api/bookings/crowd-control/" fields={[
                { name: "contactName", label: "Contact Name", required: true, half: true },
                { name: "venueName", label: "Venue Name", required: true, half: true },
                { name: "email", label: "Email Address", type: "email", required: true, half: true },
                { name: "phone", label: "Phone Number", type: "tel", half: true, placeholder: "04XX XXX XXX" },
                { name: "venueAddress", label: "Venue Address", placeholder: "Full venue address" },
                { name: "venueType", label: "Venue Type", type: "select", options: ["Nightclub", "Bar / Pub", "Restaurant / Bistro", "Live Music Venue", "Hotel", "Members Club", "Other Licensed Venue"] },
                { name: "guardCount", label: "Crowd Controllers Required", type: "select", options: ["1", "2", "3", "4+", "Need advice"] },
                { name: "nightsPerWeek", label: "Nights Required Per Week", type: "select", options: ["1 night", "2 nights", "3 nights", "4 nights", "5 nights", "6 nights", "7 nights"] },
                { name: "startDate", label: "Start Date", type: "date" },
                { name: "notes", label: "Additional Details", type: "textarea", placeholder: "Current issues, capacity, operating hours, any specific requirements..." },
              ]} />
            </div>
            <div className="space-y-6">
              <div className="bg-[#1a1a2e] p-8">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">All Officers Hold</h3>
                <ul className="space-y-3">
                  {["Victoria crowd control licence", "RSA endorsement", "De-escalation training", "First aid certification", "Professional presentation standards"].map((s, i) => (
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
