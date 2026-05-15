import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Access Control Systems Melbourne | Security Guard Company Melbourne",
  description: "Electronic access control systems for Melbourne businesses — from key cards to biometrics. Control who goes where and when.",
  alternates: { canonical: "/services/electronic-security/access-control/" },
};

export default function AccessControlPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Electronic Security</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Access Control</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">Control who enters your building, which areas they can access, and when — from simple key card systems to advanced biometric technology.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services" className="hover:text-[#c8102e]">Services</Link><span>/</span>
          <Link href="/services/electronic-security" className="hover:text-[#c8102e]">Electronic Security</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Access Control</span>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">Smarter Access Management</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <div className="space-y-4 text-[#4a4a4a]">
                <p>Access control is one of the most fundamental elements of physical security. Knowing who is in your building, which areas they&apos;ve accessed, and when they entered and exited gives you both security and operational intelligence.</p>
                <p>We supply and install access control systems ranging from simple key card entry for small offices to sophisticated multi-site enterprise systems with biometric authentication, visitor management integration, and real-time reporting.</p>
                <p>Our access control solutions integrate with your CCTV, alarm, and HR systems — giving you a single, unified view of your security environment.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px bg-gray-200">
              {[
                { title: "Key Card & Fob Systems", desc: "Simple, reliable card-based access for offices, warehouses, and commercial premises." },
                { title: "Biometric Access", desc: "Fingerprint and facial recognition for high-security areas requiring positive identification." },
                { title: "Mobile Credentials", desc: "Smartphone-based access using Bluetooth and NFC technology — no physical card required." },
                { title: "Visitor Management", desc: "Integrated visitor registration, temporary access credentials, and access logs." },
                { title: "Time & Attendance", desc: "Access data integrated with time and attendance systems for workforce management." },
                { title: "Remote Management", desc: "Manage access permissions, view logs, and respond to incidents from anywhere." },
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
          <div><h2 className="text-3xl font-black text-white uppercase mb-2">Get a Free Access Control Assessment</h2><p className="text-gray-400">We&apos;ll design the right system for your building and budget.</p></div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
