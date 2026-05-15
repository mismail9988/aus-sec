import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does a Security Guard Cost in Melbourne? | 2025 Pricing Guide",
  description: "Security guard costs in Melbourne explained. What affects pricing, typical hourly rates, and how to get the best value security for your business.",
  alternates: { canonical: "/security-guard-cost/" },
  openGraph: {
    title: "How Much Does a Security Guard Cost in Melbourne? | 2025 Pricing Guide",
    description: "Security guard costs in Melbourne explained. What affects pricing, typical hourly rates, and how to get the best value security for your business.",
    url: "https://securityguardcompanymelbourne.com/security-guard-cost/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function SecurityGuardCostPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Pricing Guide</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
            Security Guard Cost Melbourne
          </h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">
            A transparent guide to security guard pricing in Melbourne — what you&apos;ll pay, what affects the cost, and how to get real value.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Security Guard Cost</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 prose-style">
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">What Does a Security Guard Cost in Melbourne?</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />

              <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
                <p>Security guard pricing in Melbourne is governed primarily by the Security Industry Award — the minimum wage standard set by the Fair Work Commission for the security industry. Any legitimate, licenced security company must pay its officers at or above these rates.</p>

                <p>As a client, you&apos;ll generally pay a bill rate that covers the officer&apos;s wages, superannuation, leave loading, WorkCover, company overheads, and margin. The total cost is always higher than the officer&apos;s base wage — which is why quotes from very cheap providers should be treated with significant scepticism.</p>

                <h3 className="text-xl font-black text-[#1a1a2e] uppercase mt-8 mb-4">Typical Security Guard Hourly Rates in Melbourne (2025)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 my-6">
                  {[
                    { type: "Standard Daytime Guard", range: "$35–$55/hr", note: "Monday–Friday business hours" },
                    { type: "Afternoon / Evening Guard", range: "$45–$65/hr", note: "Penalty rate hours (5pm–midnight)" },
                    { type: "Night Shift Guard", range: "$55–$75/hr", note: "Midnight–6am overnight shifts" },
                    { type: "Weekend Guard (Saturday)", range: "$55–$80/hr", note: "Saturday penalty rates" },
                    { type: "Weekend Guard (Sunday)", range: "$65–$90/hr", note: "Sunday penalty rates" },
                    { type: "Public Holiday Guard", range: "$80–$120/hr", note: "Public holiday penalty rates" },
                    { type: "Crowd Controller", range: "$45–$70/hr", note: "Licensed crowd control endorsement" },
                    { type: "Mobile Patrol Service", range: "$15–$35/visit", note: "Per patrol visit or alarm response" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-6">
                      <div className="text-[#c8102e] font-black text-lg mb-1">{item.range}</div>
                      <div className="text-[#1a1a2e] font-bold text-sm uppercase tracking-wide mb-1">{item.type}</div>
                      <div className="text-[#767676] text-xs">{item.note}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1a1a2e] p-6 my-6">
                  <p className="text-yellow-400 text-sm font-bold uppercase tracking-wide mb-2">Important Note on Pricing</p>
                  <p className="text-gray-300 text-sm leading-relaxed">These are indicative market rates. The only reliable way to get pricing for your specific situation is to request a quote. Rates vary significantly based on the factors outlined below.</p>
                </div>

                <h3 className="text-xl font-black text-[#1a1a2e] uppercase mt-8 mb-4">What Affects Security Guard Pricing?</h3>
                <p>Several factors determine what you&apos;ll actually pay:</p>

                <div className="space-y-4 mt-4">
                  {[
                    { factor: "Time of Day & Day of Week", detail: "The Security Industry Award prescribes penalty rates for afternoons, nights, weekends, and public holidays. A guard working Saturday night costs significantly more than one working Tuesday morning. This is unavoidable under Australian industrial law." },
                    { factor: "Shift Length", detail: "Minimum engagement periods apply under the Award — typically 4 hours minimum. Very short shifts are therefore relatively expensive per hour. Longer shifts and overnight covers are generally more cost-efficient." },
                    { factor: "Licence & Endorsements", detail: "A standard Security Guard licence is the base requirement. Crowd controllers require an additional endorsement, which commands a higher rate. First aid certifications and other qualifications may also affect pricing." },
                    { factor: "Type of Work", detail: "Specialist roles — armed escort, executive protection, maritime security — command premium rates. Standard corporate or retail guarding sits at the lower end of the market." },
                    { factor: "Number of Officers", detail: "Larger deployments — multiple guards per shift, multiple sites — can attract volume pricing. Single-officer, single-site assignments typically attract standard market rates." },
                    { factor: "Frequency & Contract Length", detail: "Ongoing weekly contracts are generally priced more competitively than one-off or ad-hoc requests. Committing to regular shifts allows the provider to roster and plan more efficiently." },
                  ].map((item, i) => (
                    <div key={i} className="border-l-4 border-[#c8102e] pl-5">
                      <h4 className="font-black text-[#1a1a2e] text-sm uppercase tracking-wide mb-1">{item.factor}</h4>
                      <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-black text-[#1a1a2e] uppercase mt-8 mb-4">Why Are Some Quotes Much Cheaper?</h3>
                <p>If you receive a quote significantly below the rates above, it&apos;s worth asking why. Common reasons include:</p>
                <ul className="space-y-2 mt-3 ml-4">
                  {[
                    "Sham contracting — treating employees as independent contractors to avoid Award obligations",
                    "Unlicensed labour — deploying officers without valid Security Licences (illegal in Victoria)",
                    "Underpayment of workers — paying below Award rates (wage theft)",
                    "No WorkCover insurance — significant liability exposure for you as the client",
                    "No public liability insurance — you may be exposed if an incident occurs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#4a4a4a]">
                      <svg className="w-4 h-4 text-[#c8102e] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">Engaging an unlicensed or non-compliant security provider in Victoria can expose you to legal liability, insurance voidance, and reputational damage. Always verify your provider holds a current Master Licence and that all deployed officers are individually licenced.</p>

                <h3 className="text-xl font-black text-[#1a1a2e] uppercase mt-8 mb-4">Mobile Patrols vs Static Guards — Which Is More Cost-Effective?</h3>
                <p>For many small and medium businesses, mobile patrol services offer significantly better value than a static guard. A mobile patrol officer visits your site multiple times per shift — checking doors, gates, vehicles, and lights — but also services other sites in their run. This shared cost model typically delivers patrols for a fraction of the cost of a dedicated guard.</p>
                <p className="mt-4">For sites requiring continuous physical presence — access control, reception security, high-risk locations — a static guard is appropriate. For after-hours deterrence, alarm response, and general site checks, mobile patrols are typically more cost-effective.</p>
              </div>
            </div>

            <div>
              <div className="bg-[#1a1a2e] p-8 mb-6 sticky top-24">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Get an Accurate Quote</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">Tell us about your security requirement and we&apos;ll give you a specific, transparent quote — no surprises.</p>
                <Link href="/contact" className="block w-full bg-[#c8102e] text-white font-bold py-3 text-sm uppercase tracking-widest text-center hover:bg-[#a00d25] transition-colors mb-3">
                  Request a Quote
                </Link>
                <a href="mailto:info@securityguardcompanymelbourne.com" className="block w-full border border-gray-600 text-gray-300 font-bold py-3 text-sm uppercase tracking-widest text-center hover:bg-white hover:text-[#1a1a2e] transition-colors">
                  Email Us
                </a>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-3">We Are</p>
                  {["Fully Licenced", "Fully Insured", "Award-Compliant", "No Lock-In Contracts"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                      <svg className="w-4 h-4 text-[#c8102e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Ready for Transparent Pricing?</h2>
            <p className="text-gray-400">No hidden fees, no lock-in contracts, no wage exploitation. Just honest pricing for professional security.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
