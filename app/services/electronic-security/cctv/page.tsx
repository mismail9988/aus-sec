import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CCTV & Surveillance Systems Melbourne | Security Guard Company Melbourne",
  description: "High-definition CCTV and surveillance systems for Melbourne businesses. Remote monitoring, analytics, and cloud storage. Professional installation and support.",
  alternates: { canonical: "/services/electronic-security/cctv/" },
};

export default function CCTVPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Electronic Security</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">CCTV & Surveillance</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">See everything. Miss nothing. Our CCTV solutions give you complete visibility of your site at all times.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services" className="hover:text-[#c8102e]">Services</Link><span>/</span>
          <Link href="/services/electronic-security" className="hover:text-[#c8102e]">Electronic Security</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">CCTV</span>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">HD CCTV for Melbourne Businesses</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <div className="space-y-4 text-[#4a4a4a]">
                <p>Modern CCTV systems do far more than record footage. Advanced analytics, remote monitoring, and cloud storage transform your cameras from a passive record-keeping tool into an active security system.</p>
                <p>We design, supply, and install CCTV systems tailored to your site. From a single camera in a small retail store to a multi-camera enterprise system covering a large commercial complex, we deliver solutions that work.</p>
                <p>Our CCTV systems integrate with your broader security program — including our security personnel, access control systems, and alarm monitoring — for a truly unified security solution.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px bg-gray-200">
              {[
                { title: "HD & 4K Cameras", desc: "Crystal clear footage day and night — indoor, outdoor, and covert options available." },
                { title: "Remote Monitoring", desc: "View your site from anywhere via secure mobile app or web browser." },
                { title: "Cloud & On-Site Storage", desc: "Flexible storage options including cloud recording and on-site NVR systems." },
                { title: "Video Analytics", desc: "AI-powered motion detection, people counting, and perimeter alerts." },
                { title: "Professional Installation", desc: "Expert installation with minimal disruption to your business operations." },
                { title: "Ongoing Support", desc: "Maintenance contracts and 24/7 technical support for your peace of mind." },
              ].map((f, i) => (
                <div key={i} className="bg-white p-6 flex gap-4">
                  <div className="w-6 h-6 bg-[#c8102e] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h3 className="text-[#1a1a2e] font-black uppercase text-sm mb-1">{f.title}</h3>
                    <p className="text-[#767676] text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div><h2 className="text-3xl font-black text-white uppercase mb-2">Get a Free CCTV Assessment</h2><p className="text-gray-400">We&apos;ll assess your site and recommend the right solution.</p></div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
