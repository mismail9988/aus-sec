import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Security Guard Company Melbourne",
  description: "Learn about Security Guard Company Melbourne — our history, values, and commitment to delivering professional security services across Victoria.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Us | Security Guard Company Melbourne",
    description: "Learn about Security Guard Company Melbourne — our history, values, and commitment to delivering professional security services across Victoria.",
    url: "https://securityguardcompanymelbourne.com/about/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const values = [
  {
    num: "01",
    title: "Integrity",
    desc: "We operate with complete transparency and honesty — from pricing to incident reporting. No surprises, no shortcuts.",
  },
  {
    num: "02",
    title: "Professionalism",
    desc: "Our guards represent your business. We hold them to the highest standards of conduct, appearance, and performance.",
  },
  {
    num: "03",
    title: "Reliability",
    desc: "When you need us, we're there. No-shows and late arrivals are simply not in our vocabulary.",
  },
  {
    num: "04",
    title: "Responsiveness",
    desc: "Security situations can escalate quickly. Our team is trained to act decisively and communicate promptly.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
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
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
            About Us
          </h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            A Melbourne-based security firm committed to protecting people, property, and assets
            with professionalism and integrity.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">About Us</span>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Our Story</p>
              <h2 className="text-4xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">
                Built on Trust,<br />Delivered with Excellence
              </h2>
              <div className="w-12 h-1 bg-[#c8102e] mb-8" />
              <div className="space-y-5 text-[#4a4a4a] leading-relaxed">
                <p>
                  Security Guard Company Melbourne was founded with one clear mission: to provide
                  businesses and individuals across Melbourne with security services that actually
                  deliver peace of mind.
                </p>
                <p>
                  Standards were inconsistent, guard quality varied, and clients often dealt with the
                  fallout from poor security. We did things differently — rigorous recruitment,
                  thorough training, and a culture that puts client outcomes first.
                </p>
                <p>
                  Today, we serve hundreds of clients across Melbourne and regional Victoria,
                  covering everything from small retail stores to large-scale construction sites
                  and major public events. Our reputation is built on reliability, and we work
                  every day to earn and keep your trust.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-gray-200">
              {[
                { value: "10+", label: "Years in Business" },
                { value: "500+", label: "Clients Served" },
                { value: "200+", label: "Trained Guards" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`py-12 px-8 text-center ${i % 2 === 0 ? "bg-[#1a1a2e]" : "bg-white"}`}
                >
                  <div className={`text-5xl font-black mb-2 ${i % 2 === 0 ? "text-[#c8102e]" : "text-[#1a1a2e]"}`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs uppercase tracking-widest font-bold ${i % 2 === 0 ? "text-gray-400" : "text-[#767676]"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">What We Stand For</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">Our Core Values</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 hover:shadow-md transition-shadow">
                <div className="text-[#c8102e] font-black text-4xl mb-5 leading-none">{v.num}</div>
                <div className="w-8 h-0.5 bg-[#c8102e] mb-5" />
                <h3 className="text-[#1a1a2e] font-black text-lg uppercase mb-3">{v.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-[#1a1a2e] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff08 0, #ffffff08 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Compliance</p>
            <h2 className="text-4xl font-black text-white uppercase mb-4">Licenced & Compliant</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              We operate in full compliance with all Victorian and Federal legislation governing
              the private security industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-700">
            {[
              {
                title: "Victoria Security Licence",
                desc: "All our guards hold valid individual security licences issued under the Private Security Act 2004 (Victoria).",
              },
              {
                title: "Comprehensive Insurance",
                desc: "We carry full public liability and professional indemnity insurance for all deployments.",
              },
              {
                title: "Background Checked",
                desc: "Every guard undergoes a National Police Check and identity verification before deployment.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#12122080] p-8 backdrop-blur-sm">
                <div className="w-10 h-10 bg-[#c8102e] flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-black uppercase mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-2">
              Work With Melbourne&apos;s Trusted Security Team
            </h2>
            <p className="text-[#767676] mb-3">Contact us today to discuss your security needs.</p>
            <Link href="/sustainability" className="text-[#c8102e] text-sm font-bold hover:underline">
              Read about our sustainability &amp; ethical commitments →
            </Link>
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
