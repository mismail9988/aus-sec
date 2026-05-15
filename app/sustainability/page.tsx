import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sustainability & Corporate Responsibility | Security Guard Company Melbourne",
  description: "Our commitment to sustainability, ethical employment, and community responsibility at Security Guard Company Melbourne.",
  alternates: { canonical: "/sustainability/" },
  openGraph: {
    title: "Sustainability & Corporate Responsibility | Security Guard Company Melbourne",
    description: "Our commitment to sustainability, ethical employment, and community responsibility at Security Guard Company Melbourne.",
    url: "https://securityguardcompanymelbourne.com/sustainability/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function SustainabilityPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Our Responsibility</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Sustainability</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">
            We believe that doing business well means doing business responsibly — for our people, our clients, and our community.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Sustainability</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Our Commitment</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">Beyond Security</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto mb-6" />
            <p className="text-[#4a4a4a] leading-relaxed">
              We operate ethically and sustainably — for our people, our clients, and our community. That means how we treat our staff, how we work with clients, and how we show up as a Melbourne business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {[
              {
                title: "Our People First",
                desc: "We pay above-award wages, provide genuine career pathways, and invest in the training and wellbeing of every member of our team. A security guard who is well-treated, well-trained, and fairly compensated performs better — and that benefits our clients.",
                items: ["Above-award wages", "Funded professional development", "Clear career pathways", "Inclusive, supportive culture"],
              },
              {
                title: "Ethical Employment",
                desc: "We provide genuine employment with proper entitlements — superannuation, leave, and workers' comp — for all our guards. No sham contracting, no exploitative arrangements.",
                items: ["Proper superannuation entitlements", "Paid leave for permanent staff", "Workers' compensation coverage", "No sham contracting arrangements"],
              },
              {
                title: "Environmental Responsibility",
                desc: "We&apos;re cutting our environmental impact by moving to lower-emission patrol vehicles and using digital reporting instead of paper.",
                items: ["Lower-emission vehicle transition", "Digital reporting systems", "Reduced paper waste", "Responsible procurement"],
              },
              {
                title: "Community Commitment",
                desc: "We are a Melbourne business that employs Melbourne people. We are committed to contributing positively to the communities in which we operate — through local employment, supporting community events, and partnering with local organisations.",
                items: ["Local employment focus", "Community event support", "Local supplier preference", "Charitable partnerships"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10">
                <h3 className="text-[#1a1a2e] font-black uppercase text-xl mb-3">{item.title}</h3>
                <div className="w-8 h-0.5 bg-[#c8102e] mb-5" />
                <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.items.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-[#2d2d2d]">
                      <svg className="w-4 h-4 text-[#c8102e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Want to Work With a Responsible Security Company?</h2>
            <p className="text-gray-400">Get in touch to discuss how we can protect your business.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
