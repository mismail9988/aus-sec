import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electronic Security Solutions Melbourne | Security Guard Company Melbourne",
  description: "CCTV, access control, alarm systems, and remote monitoring solutions for Melbourne businesses. Integrated electronic security that works alongside our personnel.",
  alternates: { canonical: "/services/electronic-security/" },
  openGraph: {
    title: "Electronic Security Solutions Melbourne | Security Guard Company Melbourne",
    description: "CCTV, access control, alarm systems, and remote monitoring solutions for Melbourne businesses. Integrated electronic security that works alongside our personnel.",
    url: "https://securityguardcompanymelbourne.com/services/electronic-security/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const solutions = [
  {
    href: "/services/electronic-security/cctv",
    title: "CCTV & Surveillance",
    desc: "High-definition CCTV systems with remote monitoring, analytics, and cloud storage. See everything, miss nothing.",
  },
  {
    href: "/services/electronic-security/access-control",
    title: "Access Control",
    desc: "Electronic access control systems from key cards to biometrics — controlling who goes where and when.",
  },
  {
    href: "/services/electronic-security/alarms",
    title: "Alarm Systems & Remote Monitoring",
    desc: "Intrusion detection, duress alarms, and 24/7 monitored alarm systems with rapid response protocols.",
  },
];

export default function ElectronicSecurityPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Electronic Security Solutions</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            Integrated electronic security technology working alongside our personnel — for a complete, layered security solution.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services" className="hover:text-[#c8102e]">Services</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Electronic Security</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Integrated Protection</p>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">Electronic Security for Melbourne Businesses</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
                <p>Electronic security systems are the foundation of any modern security program. Security Guard Company Melbourne designs, supplies, installs, and monitors electronic security solutions for businesses across Melbourne and regional Victoria — from single-site retail stores to multi-building corporate campuses.</p>
                <p>The most effective security programs layer technology with trained personnel. CCTV cameras deter opportunistic theft and provide evidence for investigations. Access control systems ensure only authorised people enter sensitive areas. Alarm systems provide an immediate alert when perimeters are breached. When combined with our licenced security officers, these technologies create a security environment that is significantly harder to defeat than any single measure alone.</p>
                <p>We work with you to understand your site, your risks, and your budget — then recommend the right combination of technology. We do not push expensive systems you do not need, and we do not recommend cheap systems that will fail when tested.</p>
              </div>
            </div>
            <div className="bg-[#f4f4f4] p-8">
              <h3 className="text-[#1a1a2e] font-black uppercase text-sm tracking-widest mb-5">Why Choose Integrated Electronic Security</h3>
              <ul className="space-y-4">
                {[
                  { title: "Continuous coverage", desc: "Electronic systems monitor your site around the clock without fatigue, sick days, or gaps in coverage." },
                  { title: "Evidence and accountability", desc: "CCTV footage and access logs provide a clear record for insurance claims, police reports, and internal investigations." },
                  { title: "Deterrence effect", desc: "Visible cameras and access control systems deter opportunistic criminals before an incident occurs." },
                  { title: "Remote management", desc: "Modern systems allow you to monitor and manage your security from anywhere via smartphone or web portal." },
                  { title: "Scalable to your needs", desc: "Systems can be expanded as your business grows — add cameras, doors, or users without replacing the whole system." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-2 shrink-0" />
                    <div>
                      <span className="font-bold text-[#1a1a2e] text-sm">{item.title} — </span>
                      <span className="text-[#4a4a4a] text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Technology Solutions</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">Our Electronic Security Solutions</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto mb-6" />
            <p className="text-[#767676] max-w-2xl mx-auto">
              The best security programs combine trained personnel with smart technology. We help you choose, install, and manage the right electronic security solutions for your site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {solutions.map((s, i) => (
              <Link key={i} href={s.href} className="group bg-white p-10 hover:shadow-lg transition-shadow flex flex-col">
                <div className="w-12 h-12 bg-[#c8102e] flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-[#1a1a2e] font-black uppercase text-xl mb-3 group-hover:text-[#c8102e] transition-colors">{s.title}</h2>
                <p className="text-[#767676] text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="inline-flex items-center gap-2 mt-6 text-[#c8102e] font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                  View {s.title} <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Our Process</p>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">How We Deliver Electronic Security</h2>
            <div className="w-10 h-0.5 bg-[#c8102e] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {[
              { step: "01", title: "Site Assessment", desc: "We visit your premises, map your risks, identify vulnerabilities, and understand your operational requirements before recommending anything." },
              { step: "02", title: "Solution Design", desc: "We design a system tailored to your site — specifying camera positions, access points, alarm zones, and monitoring arrangements." },
              { step: "03", title: "Professional Installation", desc: "Our technicians install and commission all equipment to manufacturer specifications, with minimal disruption to your operations." },
              { step: "04", title: "Monitoring & Support", desc: "Ongoing monitoring, maintenance, and support to ensure your systems perform when you need them most." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8">
                <div className="text-[#c8102e] font-black text-3xl mb-3 leading-none">{item.step}</div>
                <h3 className="text-[#1a1a2e] font-black uppercase text-sm tracking-wide mb-2">{item.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Talk to Our Security Technology Team</h2>
            <p className="text-gray-400">Free site assessment and solution recommendation — no obligation.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Get a Free Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
