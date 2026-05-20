import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Companies Melbourne: How to Choose the Right One | Security Guard Company Melbourne",
  description: "What separates good security companies in Melbourne from poor ones — licensing, Award compliance, insurance, reporting standards, and the questions every business should ask before signing a contract.",
  alternates: { canonical: "/security-companies-melbourne/" },
  openGraph: {
    title: "Security Companies Melbourne: How to Choose the Right One | Security Guard Company Melbourne",
    description: "The criteria that matter when comparing Melbourne security companies — licences, compliance, pricing transparency, and what red flags to watch for.",
    url: "https://securityguardcompanymelbourne.com/security-companies-melbourne/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const criteria = [
  {
    num: "01",
    title: "VSAA Licence Verification",
    desc: "Every legitimate security company in Victoria holds a current Security Business Licence issued by the Victorian Security Agents Authority (VSAA). This is publicly verifiable at vsaa.vic.gov.au. If a company cannot provide their licence number or it does not appear on the VSAA register, do not engage them.",
  },
  {
    num: "02",
    title: "Individual Officer Licensing",
    desc: "A company licence does not automatically mean every guard they deploy is licensed. Ask specifically whether all deployed officers hold current individual VSAA licences appropriate to the role — guard, crowd controller, or other category. Spot-check by asking for officer licence numbers.",
  },
  {
    num: "03",
    title: "Award Wage Compliance",
    desc: "Security guards in Victoria are covered by the Security Industry Award 2020. Companies quoting significantly below market rates are almost certainly underpaying staff — which means poor retention, low morale, and corners cut on compliance. Ask explicitly whether the quoted rate is Award-compliant.",
  },
  {
    num: "04",
    title: "Public Liability Insurance",
    desc: "Any security company you engage should carry a minimum of $10 million public liability insurance. Ask for a certificate of currency — not just a verbal confirmation. Uninsured security incidents create direct liability exposure for your business.",
  },
  {
    num: "05",
    title: "Incident Reporting Standards",
    desc: "Ask to see a sample incident report. Professional companies use digital reporting systems that deliver timestamped, GPS-verified reports. Companies that still rely on handwritten end-of-shift notes are not operating at a current professional standard.",
  },
  {
    num: "06",
    title: "National Police Checks",
    desc: "Every officer should have undergone a National Police Check (NPC) prior to deployment. This is a legal obligation in some environments and an industry standard in all of them. Ask for written confirmation of NPC policy.",
  },
];

const redFlags = [
  "Quotes significantly below other providers without explanation",
  "Cannot provide a VSAA licence number on request",
  "Vague or verbal-only responses to questions about officer licensing",
  "No written incident reporting process",
  "No certificate of currency for public liability insurance",
  "Pressure to sign long lock-in contracts immediately",
  "Officers deployed without proper site briefing",
  "No named account manager or point of escalation",
];

const services = [
  { label: "Security Guards", href: "/services/security-guards" },
  { label: "Mobile Patrols", href: "/services/mobile-patrols" },
  { label: "Event Security", href: "/services/event-security" },
  { label: "Corporate Security", href: "/services/corporate-security" },
  { label: "Retail Security", href: "/services/retail-security" },
  { label: "Construction Security", href: "/services/construction-security" },
  { label: "Alarm Response", href: "/services/alarm-response" },
  { label: "Crowd Control", href: "/services/crowd-control" },
  { label: "Canine Security", href: "/services/canine-security" },
  { label: "Armed Security", href: "/services/armed-security" },
  { label: "Loss Prevention", href: "/services/loss-prevention" },
  { label: "Concierge Security", href: "/services/concierge-security" },
];

export default function SecurityCompaniesMelbournePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Melbourne Security</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
            Security Companies Melbourne
          </h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            Not all security companies in Melbourne operate to the same standard. Here is what to look for — and what to avoid — when choosing a security provider for your business.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/contact" className="bg-[#c8102e] text-white font-bold px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
              Get a Free Quote
            </Link>
            <Link href="/certifications" className="border border-white text-white font-bold px-6 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1a1a2e] transition-colors">
              View Our Credentials
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Security Companies Melbourne</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">The Melbourne Market</p>
              <h2 className="text-4xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">
                Why the Right Choice Matters
              </h2>
              <div className="w-12 h-1 bg-[#c8102e] mb-8" />
              <div className="space-y-5 text-[#4a4a4a] leading-relaxed">
                <p>
                  Melbourne has hundreds of registered security providers — from large national firms to small owner-operators. Quality varies enormously. Some companies undercut the market by paying guards below Award rates, deploying unlicensed officers, or carrying inadequate insurance. The consequences of choosing poorly fall on you as the client.
                </p>
                <p>
                  A security incident at your premises handled by an unlicensed guard, or an insurance claim rejected because your provider was underinsured, can be far more costly than paying a reasonable rate for a compliant, professional service.
                </p>
                <p>
                  The criteria below are what every Melbourne business should verify before engaging any security company — including us.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-gray-200">
              {[
                { value: "200+", label: "Trained Officers" },
                { value: "$20M", label: "Public Liability Cover" },
                { value: "10+", label: "Years in Business" },
                { value: "500+", label: "Clients Served" },
              ].map((stat, i) => (
                <div key={i} className={`py-12 px-8 text-center ${i % 2 === 0 ? "bg-[#1a1a2e]" : "bg-white"}`}>
                  <div className={`text-4xl font-black mb-2 ${i % 2 === 0 ? "text-[#c8102e]" : "text-[#1a1a2e]"}`}>{stat.value}</div>
                  <div className={`text-xs uppercase tracking-widest font-bold ${i % 2 === 0 ? "text-gray-400" : "text-[#767676]"}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">What to Check</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">6 Criteria That Matter</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {criteria.map((c, i) => (
              <div key={i} className="bg-white p-8 hover:shadow-md transition-shadow">
                <div className="text-[#c8102e] font-black text-4xl mb-5 leading-none">{c.num}</div>
                <div className="w-8 h-0.5 bg-[#c8102e] mb-5" />
                <h3 className="text-[#1a1a2e] font-black text-lg uppercase mb-3">{c.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Warning Signs</p>
              <h2 className="text-4xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">
                Red Flags to Watch For
              </h2>
              <div className="w-12 h-1 bg-[#c8102e] mb-8" />
              <div className="space-y-3">
                {redFlags.map((flag, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#c8102e] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{flag}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a2e] p-10 flex flex-col justify-center">
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Why Choose Us</p>
              <h3 className="text-3xl font-black text-white uppercase leading-tight mb-6">
                What We Offer Melbourne Businesses
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  "Current VSAA Security Business Licence — publicly verifiable",
                  "All officers individually licensed and National Police Checked",
                  "$20 million public liability insurance — COC on request",
                  "Award-compliant wages — no undercutting, no underpaying",
                  "Digital incident reporting delivered in real time",
                  "No lock-in contracts — month-to-month arrangements available",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#c8102e] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <Link href="/certifications" className="inline-block border border-[#c8102e] text-[#c8102e] font-bold px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#c8102e] hover:text-white transition-colors text-center">
                View Our Full Credentials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Our Services</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">What We Provide</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="flex items-center gap-3 bg-white border border-gray-200 px-5 py-4 hover:border-[#c8102e] hover:shadow-sm transition-all group">
                <div className="w-2 h-2 bg-[#c8102e] shrink-0" />
                <span className="text-[#1a1a2e] font-bold text-sm uppercase tracking-tight group-hover:text-[#c8102e] transition-colors">
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Ready to Get a Quote?</h2>
            <p className="text-gray-400">Tell us about your security requirements — we will respond with a transparent, itemised proposal.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
