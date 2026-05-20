import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Technology Melbourne | CCTV, Access Control & Monitoring | Security Guard Company Melbourne",
  description: "The security technology we use and recommend — GPS-tracked patrols, digital incident reporting, CCTV, access control systems, and alarm monitoring integration across Melbourne.",
  alternates: { canonical: "/technologies/" },
  openGraph: {
    title: "Security Technology Melbourne | Security Guard Company Melbourne",
    description: "GPS-tracked patrol officers, digital reporting systems, CCTV, access control, and alarm monitoring — the technology behind Melbourne's trusted security provider.",
    url: "https://securityguardcompanymelbourne.com/technologies/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const technologies = [
  {
    num: "01",
    title: "GPS-Tracked Patrol Officers",
    desc: "Every mobile patrol officer carries a GPS-tracked device that logs their location, patrol route, and activity timestamps in real time. You receive verifiable evidence that your site was patrolled — not just a verbal report.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    num: "02",
    title: "Digital Incident Reporting",
    desc: "All incidents are documented using a digital reporting system that captures time, location, photos, and officer details at the point of entry — not written up after the shift. Reports are delivered to your nominated contact in real time for significant incidents.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    num: "03",
    title: "CCTV Systems",
    desc: "High-resolution camera systems for retail, commercial, construction, and residential environments — including fixed cameras, PTZ units, and 4G-connected remote monitoring solutions for sites without wired infrastructure.",
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    num: "04",
    title: "Access Control Systems",
    desc: "Key card, fob, PIN, and biometric access control for offices, apartments, car parks, and restricted areas — with full access audit logs, remote deactivation, and integration with visitor management systems.",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
  },
  {
    num: "05",
    title: "Alarm Monitoring Integration",
    desc: "Direct integration with your existing alarm monitoring provider — when an activation is received, our nearest patrol officer is dispatched immediately for physical verification. No need to change your current monitoring arrangement.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    num: "06",
    title: "Wander Management (Aged Care)",
    desc: "Specialist wristband sensor systems for aged care and memory care facilities — alerting staff and security when a resident approaches an exit or restricted area, preventing elopement incidents.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

const electronicServices = [
  { label: "CCTV Supply & Installation", href: "/services/electronic-security" },
  { label: "Access Control Systems", href: "/services/electronic-security" },
  { label: "Alarm Response Integration", href: "/services/alarm-response" },
  { label: "Security System Consultation", href: "/contact" },
];

export default function TechnologiesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">How We Work</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Security Technology</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            The technology that makes our security services accountable, verifiable, and more effective — from GPS-tracked patrol officers to integrated alarm response and digital incident reporting.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Technologies</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Technology-Backed Security</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">
              Accountability You Can Verify
            </h2>
            <div className="w-12 h-1 bg-[#c8102e] mb-8" />
            <div className="space-y-5 text-[#4a4a4a] leading-relaxed">
              <p>
                A security company that cannot prove what its officers did — and when — is asking you to take their word for it. We believe accountability requires evidence. Every patrol visit is GPS-logged. Every incident is digitally documented at the moment it occurs. Every report delivered to you is timestamped and verifiable.
              </p>
              <p>
                We also advise on and supply the electronic security technology that makes physical security more effective — CCTV systems, access control, and alarm monitoring integration that work alongside our officers rather than replacing them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Our Technology Stack</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">What We Use & Recommend</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-white p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#1a1a2e] flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-[#c8102e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tech.icon} />
                  </svg>
                </div>
                <div className="text-[#c8102e] font-black text-sm uppercase tracking-widest mb-2">{tech.num}</div>
                <h3 className="text-[#1a1a2e] font-black text-lg uppercase mb-3 leading-tight">{tech.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electronic Security Services */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Electronic Security</p>
              <h2 className="text-4xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">
                Technology That Works<br />Alongside Your Guards
              </h2>
              <div className="w-12 h-1 bg-[#c8102e] mb-8" />
              <p className="text-[#4a4a4a] leading-relaxed mb-8">
                Electronic security technology and physical security officers are most effective when they work together. CCTV monitors areas officers cannot be everywhere at once. Access control creates the audit trail that resolves disputed incidents. Alarm response integration means your existing system triggers a physical response rather than just a phone call.
              </p>
              <div className="space-y-3">
                {electronicServices.map((s, i) => (
                  <Link key={i} href={s.href} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-[#c8102e] shrink-0" />
                    <span className="text-[#1a1a2e] font-bold text-sm uppercase tracking-tight group-hover:text-[#c8102e] transition-colors">
                      {s.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-gray-200">
              {[
                { value: "30+", label: "Day Footage Retention" },
                { value: "GPS", label: "All Patrol Officers" },
                { value: "24/7", label: "Alarm Monitoring" },
                { value: "Real-time", label: "Incident Reporting" },
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

      {/* CTA */}
      <section className="py-16 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">
              Ask Us About Our Technology Setup
            </h2>
            <p className="text-gray-400">We will advise on the right combination of technology and personnel for your site.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
