import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Security Melbourne | 24/7 Urgent Security Response",
  description: "24/7 emergency security response in Melbourne. Need security urgently? We deploy licensed guards fast — same day response for urgent security requirements.",
  alternates: { canonical: "/emergency-security/" },
};

export default function EmergencySecurityPage() {
  return (
    <>
      <section className="bg-[#c8102e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff10 0,#ffffff10 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-xs uppercase tracking-widest font-bold mb-4 opacity-80">Urgent Response</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Emergency Security Melbourne</h1>
          <div className="w-12 h-1 bg-white mb-6" />
          <p className="text-white text-lg max-w-2xl font-light opacity-90">
            24/7 emergency security response — licenced guards deployed fast when you need it most.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="tel:1300000000" className="inline-flex items-center gap-3 bg-white text-[#c8102e] font-black px-8 py-4 text-lg uppercase tracking-wide hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              1300 XXX XXX
            </a>
            <Link href="/contact/" className="inline-block border-2 border-white text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-[#c8102e] transition-colors">
              Request Online
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[#1a1a2e] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {["24/7 Availability", "Same-Day Deployment", "Licenced Officers", "All Melbourne"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wide">
                <svg className="w-4 h-4 text-[#c8102e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Emergency Security</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">When You Need Security Now</p>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">Fast-Deploy Emergency Security</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
                <p>Security emergencies don&apos;t wait for business hours. Whether your regular security provider has let you down, you&apos;ve had a break-in that has left your premises exposed, or you need security at short notice for an urgent situation — Security Guard Company Melbourne provides emergency security deployment across Melbourne 24 hours a day, 7 days a week.</p>
                <p>We maintain a roster of available officers specifically for emergency and short-notice deployments. When you call, our operations centre assesses your requirement and deploys the right officer — not whoever happens to be available, but the right fit for your situation.</p>
                <p>All emergency deployments use fully licenced officers. We don&apos;t cut corners because it&apos;s urgent — every officer we deploy holds a current Victoria Police Security Licence.</p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
                {[
                  { title: "Break-In Response", desc: "Premises exposed after a break-in or vandalism — we deploy overnight security while you arrange repairs." },
                  { title: "Provider Let You Down", desc: "Your regular security didn't show. We cover gaps with properly licenced officers at short notice." },
                  { title: "Urgent Event Security", desc: "Last-minute event security requirement — we staff events at short notice across Melbourne." },
                  { title: "Threat Response", desc: "You've received a specific threat or have a situation that requires immediate security presence." },
                  { title: "Protest or Demonstration", desc: "Unexpected protest activity near your premises — we deploy experienced officers quickly." },
                  { title: "After-Hours Incident", desc: "An incident at your premises after hours requiring a security presence until it's resolved." },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 flex gap-4">
                    <div className="w-6 h-6 bg-[#c8102e] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#1a1a2e] font-black uppercase text-sm mb-1">{item.title}</h3>
                      <p className="text-[#767676] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[#c8102e] p-8 mb-6">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-2">Emergency Line</h3>
                <p className="text-white text-opacity-80 text-xs mb-4">Available 24 hours, 7 days a week</p>
                <a href="tel:1300000000" className="block text-white font-black text-3xl mb-6 hover:underline">1300 XXX XXX</a>
                <Link href="/contact/" className="block w-full bg-white text-[#c8102e] font-bold py-3 text-sm uppercase tracking-widest text-center hover:bg-gray-100 transition-colors">
                  Request Online
                </Link>
              </div>

              <div className="border border-gray-200 p-8">
                <h3 className="text-[#1a1a2e] font-black uppercase text-sm tracking-widest mb-5">What We&apos;ll Need</h3>
                <ul className="space-y-3">
                  {[
                    "Your location / site address",
                    "Nature of the security requirement",
                    "How many officers needed",
                    "When you need cover from",
                    "How long you anticipate needing it",
                    "Your contact number",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#4a4a4a]">
                      <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f4f4f4] p-6 mt-6 border-l-4 border-[#c8102e]">
                <p className="text-[#2d2d2d] text-sm font-bold uppercase tracking-wide mb-1">Response Commitment</p>
                <p className="text-[#4a4a4a] text-sm">We aim to have an officer on-site within 2–4 hours of your call for most Melbourne locations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Security Emergency? Call Now.</h2>
            <p className="text-gray-400">Our operations centre is staffed 24/7. We respond immediately.</p>
          </div>
          <a href="tel:1300000000" className="shrink-0 bg-[#c8102e] text-white font-black px-8 py-4 text-lg uppercase tracking-wide hover:bg-[#a00d25] transition-colors">
            1300 XXX XXX
          </a>
        </div>
      </section>
    </>
  );
}
