import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Choose Security Guard Company Melbourne | The Difference | Security Guard Company Melbourne",
  description: "What makes Security Guard Company Melbourne different — our recruitment standards, officer training, reporting accountability, Award compliance, and what that means for your business.",
  alternates: { canonical: "/why-choose-us/" },
  openGraph: {
    title: "Why Choose Us | Security Guard Company Melbourne",
    description: "The difference between a professional security provider and an average one — our standards, our commitments, and why Melbourne businesses trust us.",
    url: "https://securityguardcompanymelbourne.com/why-choose-us/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const differences = [
  {
    num: "01",
    title: "We Recruit for Character, Not Just Credentials",
    body: "A security licence proves an officer met the minimum training standard. It does not prove they are reliable, professional, composed under pressure, or good with people. We look for all of these things — because the officer who represents your business needs to be more than just licensed.",
  },
  {
    num: "02",
    title: "Every Officer is Properly Briefed",
    body: "An officer deployed to your site without a proper briefing is operating blind. We invest in site-specific briefing before every deployment — your building layout, your specific risks, your escalation protocols, who to call and when. It sounds basic. Most providers skip it.",
  },
  {
    num: "03",
    title: "We Pay Award Wages — No Exceptions",
    body: "Security companies that undercut the market are almost always underpaying their staff. Underpaid guards have poor morale, high turnover, and no incentive to perform. We pay Award-compliant wages because the quality of our officers depends on it. You get what the industry pays for.",
  },
  {
    num: "04",
    title: "GPS-Verified Patrols — Not Just Promises",
    body: "Every mobile patrol officer carries a GPS-tracked device. Every site visit is logged with timestamp and location data. You receive verifiable evidence of what was done — not a verbal assurance. If we say your site was patrolled at 2am on Tuesday, we can prove it.",
  },
  {
    num: "05",
    title: "Incident Reports That Are Actually Useful",
    body: "We document incidents digitally at the time they occur — not written up from memory at the end of a shift. Reports contain time, location, names, actions taken, and follow-up recommendations. Useful for insurance, useful for police, useful for improving your security. Not just a formality.",
  },
  {
    num: "06",
    title: "No Lock-In Contracts",
    body: "We do not trap clients in long-term contracts because we do not need to. If our service is good, you will stay. If it is not, you should be able to leave. Our arrangements are month-to-month by default — you have the freedom to review and change at any time.",
  },
];

const commitments = [
  { label: "Current VSAA Business Licence", sub: "Publicly verifiable at vsaa.vic.gov.au" },
  { label: "All Officers Individually Licensed", sub: "VSAA licence verification before every deployment" },
  { label: "National Police Checks", sub: "Every officer, renewed on a regular cycle" },
  { label: "$20M Public Liability Insurance", sub: "Certificate of currency available on request" },
  { label: "Award-Compliant Wages", sub: "Security Industry Award 2020 compliance" },
  { label: "Digital Incident Reporting", sub: "Real-time, GPS-verified, timestamped" },
];

export default function WhyChooseUsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">The Difference</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
            Why Choose Us
          </h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            Every security company in Melbourne says they are professional. Here is specifically what that means for us — and what you can hold us to.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Why Choose Us</span>
        </div>
      </div>

      {/* Differences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">What Sets Us Apart</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">The Real Differences</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto mb-6" />
            <p className="text-[#767676] max-w-xl mx-auto font-light">
              These are not marketing claims. They are operational commitments that cost us more to maintain — and that directly affect the quality of what you receive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {differences.map((d, i) => (
              <div key={i} className="bg-white p-8 hover:shadow-md transition-shadow">
                <div className="text-[#c8102e] font-black text-4xl mb-5 leading-none">{d.num}</div>
                <div className="w-8 h-0.5 bg-[#c8102e] mb-5" />
                <h3 className="text-[#1a1a2e] font-black text-base uppercase mb-3 leading-snug">{d.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verifiable Commitments */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Hold Us To It</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">Verifiable Commitments</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto mb-6" />
            <p className="text-[#767676] max-w-xl mx-auto font-light">
              Every commitment on this list is independently verifiable. We encourage you to check them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commitments.map((c, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c8102e] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1a1a2e] font-black text-sm uppercase tracking-tight mb-1">{c.label}</p>
                  <p className="text-[#767676] text-xs leading-relaxed">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/certifications" className="inline-block border-2 border-[#1a1a2e] text-[#1a1a2e] font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a1a2e] hover:text-white transition-colors">
              View Full Licences & Certifications
            </Link>
          </div>
        </div>
      </section>

      {/* Client experience */}
      <section className="py-20 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-700">
            {[
              { quote: "After years of inconsistent service from another provider, switching was the best decision we made. Same guards, on time, properly briefed. It sounds simple but it made all the difference.", name: "Operations Manager", role: "Corporate Office — Melbourne CBD" },
              { quote: "The incident report quality is what surprised me most. After our first serious incident the report had everything our insurer needed — times, descriptions, officer actions, CCTV references. Claim processed without a problem.", name: "Venue Manager", role: "Licensed Venue — Southbank" },
              { quote: "We specifically asked about Award compliance when we were selecting providers. Security Guard Company Melbourne was the only one who could explain their payroll structure clearly. That told us everything.", name: "HR Manager", role: "Retail Group — Melbourne", },
            ].map((t, i) => (
              <div key={i} className="bg-[#12122080] p-8 flex flex-col">
                <div className="text-[#c8102e] text-4xl font-black mb-4 leading-none">"</div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>
                <div>
                  <p className="text-white font-black text-sm uppercase tracking-tight">{t.name}</p>
                  <p className="text-[#c8102e] text-xs font-bold uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-2">See the Difference for Yourself</h2>
            <p className="text-[#767676]">Get a transparent, itemised quote — no lock-in, no pressure.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
