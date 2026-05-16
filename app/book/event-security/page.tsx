import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Event Security Melbourne | Event Security Booking Form",
  description: "Book professional event security in Melbourne. Fill in our event security booking form and receive a tailored quote within 2 business hours.",
  alternates: { canonical: "/book/event-security/" },
};

export default function EventSecurityBookingPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Book Now</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Book Event Security</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">Concerts, festivals, corporate events, and private functions. Tell us about your event and we'll build a security plan.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services/event-security/" className="hover:text-[#c8102e]">Event Security</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Book Now</span>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-[#f4f4f4] p-8">
              <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Event Security Booking</h2>
              <div className="w-8 h-0.5 bg-[#c8102e] mb-8" />
              <BookingForm apiEndpoint="/api/bookings/event/" fields={[
                { name: "contactName", label: "Your Name", required: true, half: true, placeholder: "John Smith" },
                { name: "company", label: "Organisation / Promoter", half: true, placeholder: "Event company" },
                { name: "email", label: "Email Address", type: "email", required: true, half: true },
                { name: "phone", label: "Phone Number", type: "tel", half: true, placeholder: "04XX XXX XXX" },
                { name: "eventName", label: "Event Name", required: true, placeholder: "e.g. Summer Music Festival 2025" },
                { name: "eventType", label: "Event Type", type: "select", required: true, options: ["Concert / Music Festival", "Corporate Event", "Private Function", "Sporting Event", "Market / Fair", "Conference", "Gala / Award Night", "Other"] },
                { name: "eventVenue", label: "Event Venue / Address", placeholder: "Venue name and address" },
                { name: "eventDate", label: "Event Date", type: "date", required: true, half: true },
                { name: "attendees", label: "Expected Attendees", type: "select", half: true, options: ["Under 100", "100–500", "500–1,000", "1,000–5,000", "5,000+", "Not sure"] },
                { name: "guardCount", label: "Estimated Guards Needed", type: "select", options: ["2–5", "6–10", "11–20", "21–50", "50+", "Need advice"] },
                { name: "notes", label: "Event Details & Special Requirements", type: "textarea", placeholder: "Describe the event, any specific security concerns, VIP areas, restricted zones, etc." },
              ]} />
            </div>
            <div className="space-y-6">
              <div className="bg-[#1a1a2e] p-8">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Event Security Includes</h3>
                <ul className="space-y-3">
                  {["Security management plan", "Crowd management officers", "Access control & ticketing", "Roving security", "VIP protection", "Emergency procedures", "Post-event reporting"].map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full shrink-0" />{s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-gray-200 p-6 text-center">
                <p className="text-[#1a1a2e] font-black text-sm uppercase tracking-wide mb-2">Need it urgently?</p>
                <a href="mailto:info@securityguardcompanymelbourne.com" className="text-[#c8102e] text-sm font-bold hover:underline">Email us directly</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
