import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Security Services Melbourne | All Booking Forms",
  description: "Book any security service in Melbourne — event security, mobile patrols, construction guards, crowd control, canine security, and more. Fast response guaranteed.",
  alternates: { canonical: "/book/" },
  openGraph: {
    title: "Book Security Services Melbourne | All Booking Forms",
    description: "Book any security service in Melbourne — event security, mobile patrols, construction guards, crowd control, canine security, and more.",
    url: "https://securityguardcompanymelbourne.com/book/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const bookings = [
  {
    href: "/book/quote/",
    title: "Request a Quote",
    desc: "Not sure which service? Tell us your requirements and we'll recommend the right solution.",
    tag: "Most Popular",
    urgent: false,
  },
  {
    href: "/book/event-security/",
    title: "Event Security",
    desc: "Concerts, festivals, corporate events, private functions — any size, any venue.",
    tag: null,
    urgent: false,
  },
  {
    href: "/book/mobile-patrols/",
    title: "Mobile Patrols",
    desc: "Regular patrol visits to your property after hours. Alarm response included.",
    tag: null,
    urgent: false,
  },
  {
    href: "/book/construction-security/",
    title: "Construction Site Security",
    desc: "Guards and canine patrols to protect equipment, plant, and materials from theft.",
    tag: null,
    urgent: false,
  },
  {
    href: "/book/corporate-security/",
    title: "Corporate Security",
    desc: "Professional security for offices, commercial buildings, and business premises.",
    tag: null,
    urgent: false,
  },
  {
    href: "/book/retail-security/",
    title: "Retail Security",
    desc: "Uniformed guards for stores and shopping centres. Reduce theft, protect staff.",
    tag: null,
    urgent: false,
  },
  {
    href: "/book/crowd-control/",
    title: "Crowd Control",
    desc: "Licensed, RSA-endorsed crowd controllers for venues and licensed premises.",
    tag: null,
    urgent: false,
  },
  {
    href: "/book/canine-security/",
    title: "Canine Security",
    desc: "Trained security dogs and licensed handlers — the most effective deterrent for large sites.",
    tag: null,
    urgent: false,
  },
  {
    href: "/book/concierge-security/",
    title: "Concierge Security",
    desc: "Professional concierge guards for residential towers and commercial buildings.",
    tag: null,
    urgent: false,
  },
  {
    href: "/book/armed-security/",
    title: "Armed Security",
    desc: "Licensed armed guards for high-value assets, cash handling, and elevated threat environments.",
    tag: null,
    urgent: false,
  },
  {
    href: "/book/loss-prevention/",
    title: "Loss Prevention",
    desc: "Plainclothes and uniformed loss prevention officers to reduce retail shrinkage.",
    tag: null,
    urgent: false,
  },
  {
    href: "/book/long-term-contract/",
    title: "Long-Term Contract",
    desc: "Ongoing security contract for businesses needing dedicated, consistent coverage.",
    tag: null,
    urgent: false,
  },
  {
    href: "/book/emergency-security/",
    title: "Emergency Request",
    desc: "Same-day or next-day deployment for urgent and emergency security situations.",
    tag: "Urgent",
    urgent: true,
  },
];

export default function BookIndexPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Book Online</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Book a Security Service</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">Select the service you need below. All enquiries receive a response within 2 business hours.</p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Book a Service</span>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {bookings.map((b) => (
              <Link key={b.href} href={b.href}
                className={`bg-white p-8 flex flex-col gap-3 hover:bg-[#f9f9f9] transition-colors group relative ${b.urgent ? "border-t-4 border-[#c8102e]" : ""}`}>
                {b.tag && (
                  <span className={`absolute top-4 right-4 text-xs font-bold px-2 py-0.5 uppercase ${b.urgent ? "bg-[#c8102e] text-white" : "bg-[#1a1a2e] text-white"}`}>
                    {b.tag}
                  </span>
                )}
                <h2 className="text-[#1a1a2e] font-black uppercase text-base group-hover:text-[#c8102e] transition-colors">{b.title}</h2>
                <p className="text-[#767676] text-sm leading-relaxed flex-1">{b.desc}</p>
                <span className="text-[#c8102e] text-xs font-bold uppercase tracking-widest flex items-center gap-1 mt-2">
                  Book Now
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-4">What Happens After You Book</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
                {[
                  { step: "01", title: "We Review Your Request", desc: "A security specialist reviews your booking within 2 business hours." },
                  { step: "02", title: "We Contact You", desc: "We follow up to confirm details, clarify requirements, and answer questions." },
                  { step: "03", title: "You Receive a Proposal", desc: "A detailed, transparent proposal with pricing and staffing breakdown." },
                  { step: "04", title: "We Deploy", desc: "Once approved, we brief our officers and deploy on your agreed date." },
                ].map((s) => (
                  <div key={s.step} className="bg-white p-6">
                    <div className="text-[#c8102e] font-black text-2xl mb-2">{s.step}</div>
                    <h3 className="text-[#1a1a2e] font-black uppercase text-sm mb-1">{s.title}</h3>
                    <p className="text-[#767676] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a2e] p-8 h-fit">
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Our Promise</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Response within 2 business hours",
                  "No lock-in contracts",
                  "Transparent, all-inclusive pricing",
                  "All guards fully licensed",
                  "Fully insured operations",
                  "24/7 operations centre",
                ].map((s, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#c8102e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full border border-white text-white font-bold py-3 text-xs uppercase tracking-widest text-center hover:bg-white hover:text-[#1a1a2e] transition-colors">
                Prefer to Email Us?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
