import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alarm Systems & Remote Monitoring Melbourne | Security Guard Company Melbourne",
  description: "Professionally monitored alarm systems for Melbourne businesses. 24/7 monitoring with rapid physical response from our mobile patrol team.",
  alternates: { canonical: "/services/electronic-security/alarms/" },
  openGraph: {
    title: "Alarm Systems & Remote Monitoring Melbourne | Security Guard Company Melbourne",
    description: "Professionally monitored alarm systems for Melbourne businesses. 24/7 monitoring with rapid physical response from our mobile patrol team.",
    url: "https://securityguardcompanymelbourne.com/services/electronic-security/alarms/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function AlarmsPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Electronic Security</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Alarm Systems & Remote Monitoring</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">24/7 professionally monitored alarm systems with rapid physical response from our mobile patrol team.</p>
        </div>
      </section>
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services" className="hover:text-[#c8102e]">Services</Link><span>/</span>
          <Link href="/services/electronic-security" className="hover:text-[#c8102e]">Electronic Security</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Alarm Systems</span>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">Beyond the Siren — Professional Alarm Monitoring</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <div className="space-y-4 text-[#4a4a4a]">
                <p>A siren without a response is just noise. Our alarm monitoring service ensures that when your alarm activates, a trained security professional is dispatched to your site — not just a phone call to your mobile at 2am.</p>
                <p>We supply, install, and professionally monitor alarm systems for Melbourne businesses of all sizes. Our monitoring centre operates 24 hours a day, 7 days a week, and our mobile patrol officers provide rapid physical response to alarm activations.</p>
                <p>Combining alarm monitoring with our mobile patrol service creates one of the most cost-effective and reliable security setups available for small to medium businesses.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px bg-gray-200">
              {[
                { title: "Intrusion Detection", desc: "Motion sensors, door and window contacts, and glass break detectors protecting your premises." },
                { title: "24/7 Monitoring Centre", desc: "Professional operators monitoring your system around the clock, 365 days a year." },
                { title: "Rapid Physical Response", desc: "Mobile patrol officers dispatched to your site within minutes of an alarm activation." },
                { title: "Duress Alarms", desc: "Panic buttons and duress codes for staff safety in high-risk situations." },
                { title: "Remote Arm & Disarm", desc: "Control your alarm system remotely via smartphone — set and cancel from anywhere." },
                { title: "Audit Reporting", desc: "Full activation logs and response reports for insurance and compliance purposes." },
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
          <div><h2 className="text-3xl font-black text-white uppercase mb-2">Get an Alarm System Quote</h2><p className="text-gray-400">Supply, installation, and monitoring included.</p></div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
