import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Case Studies Melbourne | Client Success Stories",
  description: "Real security case studies from Melbourne businesses. See how Security Guard Company Melbourne reduced theft, improved safety, and solved complex security challenges.",
  alternates: { canonical: "/case-studies/" },
  openGraph: {
    title: "Security Case Studies Melbourne | Client Success Stories",
    description: "Real security case studies from Melbourne businesses. See how Security Guard Company Melbourne reduced theft, improved safety, and solved complex security challenges.",
    url: "https://securityguardcompanymelbourne.com/case-studies/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const caseStudies = [
  {
    slug: "retail-chain-shrinkage-reduction",
    sector: "Retail",
    client: "Multi-Site Retail Chain",
    challenge: "Retail chain with 6 stores across Melbourne experiencing 3.2% shrinkage — significantly above industry average. Previous security provider had failed to reduce losses despite 18 months of engagement.",
    solution: "Deployed intelligence-led loss prevention program: shrinkage assessment across all 6 sites, plainclothes store detectives during peak hours, CCTV review and repositioning, staff awareness training, and weekly shrinkage reporting.",
    result: "Shrinkage reduced from 3.2% to 0.9% within 4 months. Three separate organised theft rings identified and prosecuted. Annual saving estimated at $380,000 across the group.",
    metrics: [{ label: "Shrinkage Reduced", value: "72%" }, { label: "Timeframe", value: "4 months" }, { label: "Annual Saving", value: "$380K" }],
  },
  {
    slug: "construction-equipment-theft",
    sector: "Construction",
    client: "Residential Developer — South-East Corridor",
    challenge: "Developer with 4 active housing estates in Melbourne's south-east experiencing repeated plant and materials theft. Two excavators stolen in 3 months, plus ongoing cable and materials theft. Previous approach of basic perimeter fencing was ineffective.",
    solution: "Implemented layered security: canine patrol teams visiting each site 3× per night on randomised schedules, 4G-connected CCTV with off-site monitoring and motion-triggered alerts, GPS trackers fitted to all plant, and improved perimeter hoarding at two sites.",
    result: "Zero plant theft in 8 months since implementation. Three attempted break-ins detected and deterred. Insurance premium reduced at renewal. Program cost recovered within first month of zero-theft operation.",
    metrics: [{ label: "Plant Theft", value: "Zero" }, { label: "Since Implementation", value: "8 months" }, { label: "Incidents Deterred", value: "3" }],
  },
  {
    slug: "hospital-aggression-reduction",
    sector: "Healthcare",
    client: "Metropolitan Public Hospital — Emergency Department",
    challenge: "Emergency department experiencing high rates of occupational violence — 34 reported incidents in 12 months, staff leaving due to safety concerns, and existing security not trained for clinical environment.",
    solution: "Replaced existing provider with healthcare-specialist security team. Officers trained in trauma-informed communication, dementia-specific de-escalation, and clinical emergency procedures. Implemented duress alarm system, environment redesign advice, and new code response protocols in collaboration with clinical team.",
    result: "Occupational violence incidents reduced by 61% in 6 months. Zero staff departures attributed to safety concerns in 12 months following implementation. Security team integrated into clinical incident management system.",
    metrics: [{ label: "Incidents Reduced", value: "61%" }, { label: "Timeframe", value: "6 months" }, { label: "Staff Departures", value: "Zero" }],
  },
  {
    slug: "corporate-tower-access-control",
    sector: "Corporate",
    client: "18-Level CBD Office Tower",
    challenge: "Building manager of an 18-level CBD tower with 12 tenants experiencing tailgating issues, after-hours access breaches, and inadequate visitor management. Previous concierge provider had high staff turnover and inconsistent service quality.",
    solution: "Transitioned to Security Guard Company Melbourne for full concierge security. Implemented digital visitor management system, access control audit and card deactivation sweep (found 340+ active cards for former employees), after-hours patrol schedule, and quarterly access review process.",
    result: "340 unauthorised active credentials deactivated in first week. Zero after-hours access breaches in 14 months. Tenant satisfaction with building security improved significantly in annual building survey. Two tenants extended leases citing building security as a positive factor.",
    metrics: [{ label: "Credentials Deactivated", value: "340" }, { label: "Breaches Since", value: "Zero" }, { label: "Months Running", value: "14+" }],
  },
  {
    slug: "event-security-festival",
    sector: "Events",
    client: "Annual Music Festival — 8,000 Attendees",
    challenge: "Festival organiser with 8,000 attendees needing a full security program — previous year had two serious incidents resulting in council review of the event permit. Required complete security management plan, Victoria Police liaison, and significant staffing uplift.",
    solution: "Prepared full Security Management Plan accepted by council. Deployed 45 security officers across 6 entry points, 12 roving officers, 4 VIP/backstage security, and 2 supervisors. Pre-event site walkthrough, full officer briefing, and communications protocol established with Victoria Police.",
    result: "Zero serious incidents across the 2-day event. Council permit renewed without conditions. Event organiser commended by Victoria Police liaison for security management quality. All 8,000 patrons processed through access control without significant queuing.",
    metrics: [{ label: "Attendees", value: "8,000" }, { label: "Officers Deployed", value: "45+" }, { label: "Serious Incidents", value: "Zero" }],
  },
  {
    slug: "warehouse-internal-theft",
    sector: "Warehousing",
    client: "FMCG Distribution Centre — Northern Suburbs",
    challenge: "Distribution centre experiencing significant stock discrepancies — over $200,000 in unaccounted stock loss over 6 months. Initial assumption was external theft, but perimeter appeared secure. Internal investigation required.",
    solution: "Deployed plainclothes loss prevention officers working alongside existing static guards. CCTV analysis revealed systematic internal theft at dispatch staging area. Implemented new dispatch audit protocols, CCTV repositioning at key vulnerability points, and chain of custody documentation for high-value stock movements.",
    result: "Internal theft syndicate of 3 employees identified and terminated. Police prosecution supported with CCTV evidence package. Stock discrepancy reduced to near-zero within 60 days. Client estimates $200K+ annual ongoing saving.",
    metrics: [{ label: "Loss Identified", value: "$200K+" }, { label: "Resolution", value: "60 days" }, { label: "Ongoing Saving", value: "$200K+/yr" }],
  },
];

const sectorColors: Record<string, string> = {
  Retail: "bg-blue-100 text-blue-800",
  Construction: "bg-orange-100 text-orange-800",
  Healthcare: "bg-green-100 text-green-800",
  Corporate: "bg-purple-100 text-purple-800",
  Events: "bg-pink-100 text-pink-800",
  Warehousing: "bg-yellow-100 text-yellow-800",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Proven Results</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Case Studies</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">
            Real security challenges. Real solutions. Real results — from retail, construction, healthcare, corporate, events, and warehousing clients across Melbourne.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Case Studies</span>
        </div>
      </div>

      {/* Summary stats bar */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "6", label: "Industries Covered" },
              { value: "$580K+", label: "Client Savings Documented" },
              { value: "61%", label: "Best Incident Reduction" },
              { value: "Zero", label: "Serious Incidents at Events" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-black text-[#c8102e]">{s.value}</div>
                <div className="text-xs text-[#767676] uppercase tracking-wide font-bold mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={i} className="border border-gray-200 shadow-sm overflow-hidden">
                {/* Header bar */}
                <div className="bg-[#1a1a2e] px-8 py-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 ${sectorColors[cs.sector] ?? "bg-gray-100 text-gray-800"}`}>
                        {cs.sector}
                      </span>
                      <span className="text-white font-black uppercase text-base leading-tight">{cs.client}</span>
                    </div>
                    <div className="flex gap-8 shrink-0">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="text-[#c8102e] font-black text-2xl leading-none">{m.value}</div>
                          <div className="text-gray-400 text-xs mt-1 uppercase tracking-wide">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  {[
                    { label: "The Challenge", content: cs.challenge, icon: "⚠️" },
                    { label: "Our Solution", content: cs.solution, icon: "🛡️" },
                    { label: "The Result", content: cs.result, icon: "✅" },
                  ].map((section) => (
                    <div key={section.label} className="bg-white p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg">{section.icon}</span>
                        <h3 className="text-[#c8102e] font-black uppercase text-xs tracking-widest">{section.label}</h3>
                      </div>
                      <p className="text-[#4a4a4a] text-sm leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector links */}
      <section className="py-16 bg-[#f4f4f4] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Your Industry</p>
          <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">We Know Your Sector</h2>
          <div className="w-10 h-0.5 bg-[#c8102e] mx-auto mb-10" />
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Retail Security", href: "/services/retail-security/" },
              { label: "Construction Security", href: "/services/construction-security/" },
              { label: "Event Security", href: "/services/event-security/" },
              { label: "Corporate Security", href: "/services/corporate-security/" },
              { label: "Loss Prevention", href: "/services/loss-prevention/" },
              { label: "Concierge Security", href: "/services/concierge-security/" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="border border-[#1a1a2e] text-[#1a1a2e] font-bold text-xs uppercase tracking-widest px-5 py-3 hover:bg-[#1a1a2e] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Ready for Results Like These?</h2>
            <p className="text-gray-400">Tell us your security challenge — we&apos;ll put together a solution.</p>
          </div>
          <Link href="/contact/" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
