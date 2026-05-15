import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Security Guard Company Melbourne | Professional Security Services",
    description: "Melbourne's trusted security guard company. Professional security services for corporate, retail, events, and residential clients across Melbourne and Victoria.",
    url: "https://securityguardcompanymelbourne.com/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Corporate Security",
    desc: "Professional uniformed guards for offices, commercial buildings, and corporate campuses across Melbourne.",
    href: "/services/corporate-security",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Retail & Loss Prevention",
    desc: "Loss prevention officers and uniformed guards reducing shrinkage and protecting staff in retail environments.",
    href: "/services/loss-prevention",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Event Security",
    desc: "Crowd management and access control for concerts, festivals, corporate events, and private functions.",
    href: "/services/event-security",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: "Mobile Patrols",
    desc: "GPS-tracked mobile patrol services providing visible security deterrence across your site or multiple locations.",
    href: "/services/mobile-patrols",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Concierge Security",
    desc: "Front-of-house security officers combining professional reception duties with access control and building security.",
    href: "/services/concierge-security",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Armed Security",
    desc: "Licenced armed security officers for cash-in-transit, high-value asset protection, and specialised risk environments.",
    href: "/services/armed-security",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "24/7", label: "Availability" },
  { value: "100%", label: "Licenced Guards" },
];

const testimonials = [
  {
    name: "James Mitchell",
    role: "Operations Manager — Collins Street Office",
    text: "Exceptional service from start to finish. Their guards are professional, punctual, and handle every situation with composure. Highly recommended.",
  },
  {
    name: "Sarah Chen",
    role: "Event Director — Melbourne Events Co.",
    text: "We rely on Security Guard Company Melbourne for all our major events. Their team is always well-prepared, courteous, and keeps everything running safely.",
  },
  {
    name: "David O'Brien",
    role: "Store Manager — Southland Shopping Centre",
    text: "Since engaging their retail security team, our shrinkage has dropped significantly. Proactive, vigilant, and a pleasure to work with.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#1a1a2e] overflow-hidden min-h-[85vh] flex items-center">
        {/* Background pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff08 0, #ffffff08 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#1a1a2e]/95 to-[#1a1a2e]/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#c8102e] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Melbourne&apos;s Trusted Security Specialists
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 uppercase tracking-tight">
              Protecting<br />
              <span className="text-[#c8102e]">Your Future</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
              Highly trained, licenced security personnel for corporate, retail, events, and
              residential clients across Melbourne and Victoria. Available 24 hours a day,
              7 days a week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors text-center"
              >
                Get a Free Security Quote in Melbourne
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/40 text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:border-white hover:bg-white/10 transition-colors text-center"
              >
                View Our Security Services
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              New to hiring security?{" "}
              <Link href="/hire-security-guard-melbourne" className="text-white underline hover:text-[#c8102e] transition-colors">
                Read our guide to hiring a security guard in Melbourne
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────── */}
      <section className="bg-[#c8102e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((stat, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <div className="text-4xl font-black text-white leading-none">{stat.value}</div>
                <div className="text-white/80 text-xs uppercase tracking-widest mt-2 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro strip ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-[#767676] text-xs uppercase tracking-widest font-bold mb-2">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a2e] leading-tight">
                Integrated Security Solutions for Melbourne Businesses
              </h2>
            </div>
            <div className="flex-1 text-[#4a4a4a] leading-relaxed">
              <p>
                Security Guard Company Melbourne delivers professional, fully licenced security
                services tailored to your specific needs. Whether you need a single guard or a
                complete security program, we have the people, processes, and technology to keep
                your people and property safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">What We Offer</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] mb-4">Our Security Services</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gray-200">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 hover:shadow-lg transition-shadow group flex flex-col"
              >
                <div className="text-[#c8102e] mb-5 group-hover:scale-105 transition-transform origin-left">
                  {service.icon}
                </div>
                <h3 className="text-[#1a1a2e] font-black text-xl mb-3 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[#767676] text-sm leading-relaxed flex-1">{service.desc}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 mt-5 text-[#c8102e] font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block border-2 border-[#1a1a2e] text-[#1a1a2e] font-bold px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-[#1a1a2e] hover:text-white transition-colors"
            >
              View All Security Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Dark panel */}
            <div className="bg-[#1a1a2e] p-10 lg:p-14">
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">
                Why Choose Us
              </p>
              <h2 className="text-4xl font-black text-white leading-tight mb-8 uppercase">
                Security You Can<br />Count On
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Fully Licenced & Insured",
                    desc: "All guards hold valid Victoria security licences under the Private Security Act 2004.",
                  },
                  {
                    title: "Rigorous Vetting & Training",
                    desc: "National Police Checks, first aid certification, and ongoing professional development.",
                  },
                  {
                    title: "24/7 Operations",
                    desc: "Round-the-clock coverage with dedicated account management and rapid response.",
                  },
                  {
                    title: "Tailored Security Plans",
                    desc: "Custom-designed security programs to match your budget, site, and risk profile.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 bg-[#c8102e] shrink-0 rounded" />
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA box */}
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">
                Get Started Today
              </p>
              <h3 className="text-3xl font-black text-[#1a1a2e] mb-5 uppercase leading-tight">
                Free Security Assessment for Your Business
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed mb-8">
                Talk to one of our security specialists about your requirements. We&apos;ll conduct
                a free site assessment and provide a detailed, no-obligation proposal within
                24 hours.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "No lock-in contracts",
                  "Competitive, transparent pricing",
                  "Response within 2 business hours",
                  "Serving all Melbourne metro and regional VIC",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#2d2d2d]">
                    <svg className="w-5 h-5 text-[#c8102e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors text-center"
                >
                  Request a Free Quote
                </Link>
                <Link
                  href="/security-company-melbourne"
                  className="inline-block border-2 border-[#1a1a2e] text-[#1a1a2e] font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a1a2e] hover:text-white transition-colors text-center"
                >
                  Why Choose Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Client Stories</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] mb-4">What Our Clients Say</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#c8102e]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#4a4a4a] text-sm leading-relaxed flex-1 italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-5">
                  <div className="text-[#1a1a2e] font-bold text-sm">{t.name}</div>
                  <div className="text-[#c8102e] text-xs mt-0.5 font-semibold">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-3">
                Ready to Secure Your<br />Business or Event?
              </h2>
              <p className="text-gray-400 text-lg">
                Fast response &bull; Competitive rates &bull; No lock-in contracts
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors text-center"
              >
                Request a Melbourne Security Quote
              </Link>
              <a
                href="mailto:info@securityguardcompanymelbourne.com"
                className="border-2 border-white/40 text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:border-white hover:bg-white/10 transition-colors text-center"
              >
                Email Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
