import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire a Security Guard Melbourne | How to Hire Security | Security Guard Company Melbourne",
  description: "How to hire a security guard in Melbourne. What to consider, how the process works, what to expect, and how to get a fast quote from Security Guard Company Melbourne.",
  alternates: { canonical: "/hire-security-guard-melbourne/" },
};

export default function HireSecurityGuardPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Getting Started</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
            Hire a Security Guard in Melbourne
          </h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">
            Everything you need to know about hiring a security guard in Melbourne — from what to consider to how the process works.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Hire a Security Guard Melbourne</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">How to Hire a Security Guard in Melbourne</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />

              <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
                <p>Hiring a security guard in Melbourne is simpler than many businesses expect — but getting it right requires thinking through a few key considerations before you approach providers. This guide walks you through what to think about, how to evaluate providers, and what the hiring process looks like.</p>

                <h3 className="text-xl font-black text-[#1a1a2e] uppercase mt-8 mb-4">Step 1: Define Your Requirement</h3>
                <p>Before contacting security companies, be clear on what you actually need. Consider:</p>
                <ul className="space-y-2 ml-4 mt-3">
                  {[
                    "What is the site, event, or situation requiring security?",
                    "What hours and days do you need coverage?",
                    "Do you need a uniformed presence or plainclothes (e.g., loss prevention)?",
                    "Is this a one-off requirement or ongoing engagement?",
                    "Are there specific risks or incidents you're trying to prevent?",
                    "Do you need electronic security (CCTV, alarms) in addition to personnel?",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-black text-[#1a1a2e] uppercase mt-8 mb-4">Step 2: Verify Licensing</h3>
                <p>In Victoria, all security work must be performed by a licenced security company and by individually licenced security officers. Under the Private Security Act 2004, it is illegal to operate as a security company or work as a security officer without the appropriate licence.</p>
                <p className="mt-4">Ask any provider for their Master Licence number and verify it on the Victoria Police Business Licencing Authority website. Engaging an unlicensed provider exposes you to significant legal and insurance risks.</p>

                <h3 className="text-xl font-black text-[#1a1a2e] uppercase mt-8 mb-4">Step 3: Get Comparable Quotes</h3>
                <p>Get quotes from at least two or three licenced, insured providers. Make sure quotes cover the same scope — the same hours, same roles, same deliverables — so you&apos;re making a genuine like-for-like comparison.</p>
                <p className="mt-4">Be wary of quotes that are significantly below market rates — this is a common indicator of Award non-compliance, unlicensed labour, or inadequate insurance coverage.</p>

                <h3 className="text-xl font-black text-[#1a1a2e] uppercase mt-8 mb-4">Step 4: Brief the Provider Properly</h3>
                <p>A good security company will take time to understand your site before deploying officers. Expect to be asked about your premises, your specific risks, your clientele, and any relevant procedures. The more information you provide, the better the service you&apos;ll receive.</p>
              </div>
            </div>

            <div>
              <div className="bg-[#1a1a2e] p-8 mb-6 sticky top-24">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Get a Quote Today</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">Fast turnaround. Transparent pricing. No lock-in contracts.</p>
                <Link href="/contact" className="block w-full bg-[#c8102e] text-white font-bold py-3 text-sm uppercase tracking-widest text-center hover:bg-[#a00d25] transition-colors mb-3">
                  Request a Quote
                </Link>
                <a href="mailto:info@securityguardcompanymelbourne.com" className="block w-full border border-gray-600 text-gray-300 font-bold py-3 text-sm uppercase tracking-widest text-center hover:bg-white hover:text-[#1a1a2e] transition-colors">
                  Email Us
                </a>
              </div>

              <div className="border border-gray-200 p-8">
                <h3 className="text-[#1a1a2e] font-black uppercase text-sm tracking-widest mb-5">What We&apos;ll Need From You</h3>
                <ul className="space-y-3">
                  {[
                    "Site address and type of premises",
                    "Dates and times of required coverage",
                    "Number of officers needed",
                    "Type of security (guard, patrol, event, etc.)",
                    "Any specific risks or requirements",
                    "Your contact details for a fast response",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-[#4a4a4a]">
                      <svg className="w-4 h-4 text-[#c8102e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Ready to Hire a Security Guard?</h2>
            <p className="text-gray-400">We respond to all enquiries within 2 business hours.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
