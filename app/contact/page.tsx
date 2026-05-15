import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Security Guard Company Melbourne",
  description: "Get in touch with Security Guard Company Melbourne for a free security assessment and quote. We respond within 2 business hours.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Us | Security Guard Company Melbourne",
    description: "Get in touch with Security Guard Company Melbourne for a free security assessment and quote. We respond within 2 business hours.",
    url: "https://securityguardcompanymelbourne.com/contact/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff08 0, #ffffff08 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
            Contact Us
          </h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed font-light">
            Request a free, no-obligation security assessment and quote. Our team responds
            within 2 business hours.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Contact</span>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Get In Touch</h2>
                <div className="w-8 h-0.5 bg-[#c8102e] mb-6" />
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  We respond to all enquiries within 2 business hours. For urgent or same-day security requirements, email us directly and mark your message as urgent — we monitor email around the clock.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Email",
                    value: "info@securityguardcompanymelbourne.com",
                    sub: "Response within 2 business hours",
                    href: "mailto:info@securityguardcompanymelbourne.com",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Location",
                    value: "Melbourne, Victoria",
                    sub: "Serving all of VIC",
                    href: null,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#c8102e] flex items-center justify-center text-white shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[#767676] text-xs uppercase tracking-wide font-bold mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-[#1a1a2e] font-semibold text-sm hover:text-[#c8102e] transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[#1a1a2e] font-semibold text-sm">{item.value}</div>
                      )}
                      <div className="text-[#767676] text-xs mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency box */}
              <div className="bg-[#1a1a2e] p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-[#c8102e] rounded-full animate-pulse" />
                  <h3 className="text-white font-black text-sm uppercase tracking-wide">24/7 Emergency Line</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  For urgent security requirements or after-hours emergencies, call our dedicated
                  24/7 line immediately.
                </p>
                <a
                  href="mailto:info@securityguardcompanymelbourne.com"
                  className="block bg-[#c8102e] text-white font-bold text-center py-3 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors"
                >
                  Email Us Now
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#f4f4f4] p-8 md:p-10">
                <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Request a Free Quote</h2>
                <div className="w-8 h-0.5 bg-[#c8102e] mb-8" />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Our Process</p>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">What Happens After You Contact Us</h2>
            <div className="w-10 h-0.5 bg-[#c8102e] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 mb-16">
            {[
              { step: "01", title: "We Review Your Enquiry", desc: "Within 2 business hours, a security specialist reviews your requirements and prepares relevant questions." },
              { step: "02", title: "We Call or Email You", desc: "We follow up to clarify your requirements, understand your site, and discuss the right approach for your situation." },
              { step: "03", title: "You Receive a Proposal", desc: "We provide a detailed, no-obligation proposal covering the recommended service, staffing, and transparent pricing." },
              { step: "04", title: "We Get Started", desc: "Once you approve, we handle everything — officer briefing, site induction, and first-day deployment." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8">
                <div className="text-[#c8102e] font-black text-3xl mb-3 leading-none">{item.step}</div>
                <h3 className="text-[#1a1a2e] font-black uppercase text-sm tracking-wide mb-2">{item.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-black text-[#1a1a2e] uppercase mb-4">Common Questions</h3>
              <div className="space-y-5">
                {[
                  { q: "How quickly can you deploy security guards?", a: "For standard engagements we typically deploy within 48–72 hours of agreement. For emergency and short-notice requirements, same-day or next-day deployment is often possible — contact us directly to discuss." },
                  { q: "Do you require a long-term contract?", a: "No. We offer both ongoing contracts and short-term or one-off engagements. Many clients start with a short engagement and continue on a rolling basis. We do not lock you in." },
                  { q: "What areas of Melbourne do you service?", a: "We cover all metropolitan Melbourne suburbs and major regional Victorian centres including Geelong, Ballarat, Bendigo, and Shepparton. View our full locations list for details." },
                  { q: "Are your guards fully licenced?", a: "Yes. All security officers we deploy hold a current Victoria Police Security Licence under the Private Security Act 2004. We verify this before every deployment." },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-[#c8102e] pl-5">
                    <h4 className="text-[#1a1a2e] font-black text-sm uppercase tracking-wide mb-1">{item.q}</h4>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a2e] p-8">
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Why Choose Security Guard Company Melbourne</h3>
              <ul className="space-y-3">
                {[
                  "All guards hold current Victoria Police security licences",
                  "Fully insured — public liability and workers compensation",
                  "No lock-in contracts — flexibility to scale up or down",
                  "Transparent pricing — no hidden fees or surcharges",
                  "Dedicated account manager for every client",
                  "24/7 operations centre — always reachable",
                  "Rapid deployment for emergency requirements",
                  "Serving Melbourne CBD, all suburbs, and regional VIC",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
