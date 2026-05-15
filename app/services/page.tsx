import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Services Melbourne | Security Guard Company Melbourne",
  description: "Comprehensive security services in Melbourne including corporate security, retail security, event security, mobile patrols, and more. Fully licenced and insured.",
  alternates: { canonical: "/services/" },
};

const services = [
  {
    title: "Corporate Security",
    desc: "We provide professional security officers for office buildings, commercial premises, and corporate campuses across Melbourne's CBD and suburbs. Our guards are trained in access control, visitor management, conflict resolution, and emergency procedures.",
    features: [
      "Uniformed security officers",
      "Access control management",
      "Visitor sign-in systems",
      "CCTV monitoring support",
      "Emergency response coordination",
      "After-hours security",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Retail Security",
    desc: "Our retail security team specialises in loss prevention and creating a safe shopping environment. We work with retailers from small boutiques to large shopping centres to protect merchandise and staff.",
    features: [
      "Loss prevention officers",
      "Plainclothes security",
      "Bag checking & searches",
      "CCTV integration",
      "Staff safety training",
      "Incident reporting",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: "Event Security",
    desc: "From intimate corporate functions to large-scale music festivals, our event security team ensures a safe and enjoyable experience for all attendees. We handle crowd control, access management, and emergency coordination.",
    features: [
      "Crowd management",
      "Entry & exit control",
      "VIP protection",
      "Wristband & ticket checking",
      "RSA-aware personnel",
      "Emergency evacuation planning",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Mobile Patrols",
    desc: "Our mobile patrol service provides visible security presence across your property or multiple sites. Regular, randomised patrols act as a powerful deterrent to criminal activity.",
    features: [
      "Randomised patrol schedules",
      "GPS-tracked vehicles",
      "After-hours monitoring",
      "Alarm response",
      "Detailed patrol reports",
      "Multi-site coverage",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: "Residential Security",
    desc: "Protect your home, gated community, or residential complex with our dedicated residential security officers. We provide concierge security, gate control, and regular property checks.",
    features: [
      "Gate & concierge security",
      "Visitor management",
      "Parcel handling",
      "Regular property inspections",
      "Resident communication",
      "Emergency response",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Construction Site Security",
    desc: "Construction sites are high-value targets for theft and vandalism. Our construction security team safeguards your site, equipment, and materials 24/7.",
    features: [
      "24/7 site presence",
      "Plant & equipment protection",
      "Unauthorised access prevention",
      "Safety compliance checks",
      "Incident documentation",
      "Subcontractor access control",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
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
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
            Our Security Services
          </h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            Tailored security solutions for every need. All services delivered by fully licenced,
            background-checked, and professionally trained security officers.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Services</span>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-0">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row gap-0 border-b border-gray-100 ${
                i % 2 === 1 ? "lg:flex-row-reverse bg-[#f4f4f4]" : "bg-white"
              }`}
            >
              {/* Icon panel */}
              <div className={`lg:w-64 flex items-center justify-center py-12 px-8 shrink-0 ${
                i % 2 === 1 ? "bg-[#1a1a2e]" : "bg-[#c8102e]"
              }`}>
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 lg:p-12">
                <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-3 tracking-tight">
                  {service.title}
                </h2>
                <div className="w-8 h-0.5 bg-[#c8102e] mb-5" />
                <p className="text-[#4a4a4a] leading-relaxed mb-7 max-w-2xl">{service.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {service.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm text-[#2d2d2d]">
                      <svg className="w-4 h-4 text-[#c8102e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">
              Need a Custom Security Solution?
            </h2>
            <p className="text-gray-400">
              Talk to our team — we&apos;ll design the right plan for your specific requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
