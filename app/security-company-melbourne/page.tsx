import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Company Melbourne | Choose the Right Security Provider",
  description: "How to choose a security company in Melbourne. What to look for, questions to ask, red flags to avoid, and why Security Guard Company Melbourne is the right choice.",
  alternates: { canonical: "/security-company-melbourne/" },
  openGraph: {
    title: "Security Company Melbourne | Choose the Right Security Provider",
    description: "How to choose a security company in Melbourne. What to look for, questions to ask, red flags to avoid, and why Security Guard Company Melbourne is the right choice.",
    url: "https://securityguardcompanymelbourne.com/security-company-melbourne/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function SecurityCompanyMelbournePage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Melbourne Security</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
            Security Company Melbourne
          </h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">
            Melbourne&apos;s professional, licenced security company. Trusted by businesses across the CBD, suburbs, and regional Victoria.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Security Company Melbourne</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Why Choose Us</p>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">Melbourne&apos;s Trusted Security Partner</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
                <p>Security Guard Company Melbourne is a fully licenced, locally-operated security company serving businesses and organisations across Melbourne and Victoria. We provide the full spectrum of security services — from uniformed static guards and mobile patrols to electronic security systems and event security management.</p>
                <p>We believe that good security comes from good people — which is why we invest in thorough vetting, above-award wages, and ongoing training for every officer we deploy. A security guard who is well-treated and well-trained performs better, stays longer, and represents your business more professionally.</p>
                <p>Unlike large national providers who view Melbourne as a market to be managed from a head office elsewhere, we are a Melbourne business focused entirely on delivering excellent service in the city and state we know best.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px bg-gray-200">
              {[
                { title: "Fully Licenced", desc: "Victoria Police Master Licence holder. Every deployed officer individually licenced under the Private Security Act 2004." },
                { title: "Fully Insured", desc: "$20M+ public liability insurance. WorkCover and professional indemnity cover for all operations." },
                { title: "Award Compliant", desc: "All officers paid at or above the Security Industry Award. No sham contracting, no underpayment." },
                { title: "Locally Operated", desc: "Melbourne-owned and operated. Decisions made locally, not from an interstate head office." },
                { title: "No Lock-In Contracts", desc: "We earn your ongoing business through service quality, not contract lock-in." },
                { title: "24/7 Operations", desc: "Round-the-clock operations centre staffed by Australian-based security professionals." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 flex gap-4">
                  <div className="w-6 h-6 bg-[#c8102e] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h3 className="text-[#1a1a2e] font-black uppercase text-sm mb-1">{item.title}</h3>
                    <p className="text-[#767676] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">What We Offer</p>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">Our Security Services</h2>
            <div className="w-10 h-0.5 bg-[#c8102e] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {[
              { title: "Security Guards", href: "/services/security-guards", desc: "Uniformed, licenced static guards for any site or application." },
              { title: "Mobile Patrols", href: "/services/mobile-patrols", desc: "Cost-effective patrol runs and alarm response across Melbourne." },
              { title: "Event Security", href: "/services/event-security", desc: "Crowd management and security for events of all sizes." },
              { title: "Retail Security", href: "/services/retail-security", desc: "Loss prevention and store security for retailers." },
              { title: "Corporate Security", href: "/services/corporate-security", desc: "Professional security for office buildings and business parks." },
              { title: "Electronic Security", href: "/services/electronic-security", desc: "CCTV, access control, and alarm systems for complete protection." },
            ].map((service) => (
              <Link key={service.href} href={service.href} className="bg-white p-8 hover:bg-[#f4f4f4] transition-colors group">
                <div className="w-8 h-8 bg-[#c8102e] flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[#1a1a2e] font-black uppercase text-sm tracking-wide mb-2 group-hover:text-[#c8102e] transition-colors">{service.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Due Diligence</p>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">What to Ask Any Security Company</h2>
            <div className="w-10 h-0.5 bg-[#c8102e] mx-auto mb-6" />
            <p className="text-[#4a4a4a] leading-relaxed">Before engaging any security provider in Victoria, ask these questions to verify you&apos;re dealing with a legitimate, compliant company.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Do you hold a current Victoria Police Master Security Licence?",
              "Are all deployed officers individually licenced under the Private Security Act 2004?",
              "Do you carry $20M+ public liability insurance?",
              "Do you pay all officers at or above the Security Industry Award?",
              "Do you carry WorkCover insurance for all officers?",
              "Can you provide references from current clients in a similar industry?",
              "What is your incident reporting and escalation procedure?",
              "Do you have a 24/7 operations centre staffed by security professionals?",
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-gray-200">
                <svg className="w-5 h-5 text-[#c8102e] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#2d2d2d] text-sm">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Ready to Discuss Your Security Needs?</h2>
            <p className="text-gray-400">We&apos;ll respond within 2 business hours with a tailored proposal.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
