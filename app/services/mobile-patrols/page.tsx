import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Patrol Security Melbourne | Security Guard Company Melbourne",
  description: "GPS-tracked mobile patrol security services across Melbourne and Victoria. Cost-effective, visible security for businesses, construction sites, and commercial properties.",
  alternates: { canonical: "/services/mobile-patrols/" },
};

export default function MobilePatrolsPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Mobile Patrols</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            GPS-tracked mobile security patrols providing visible deterrence and rapid alarm response across Melbourne and Victoria.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services" className="hover:text-[#c8102e]">Services</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Mobile Patrols</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">How It Works</p>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">Visible Security Without the Full-Time Cost</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
                <p>Our mobile patrol officers operate from marked security vehicles, conducting regular checks on your site throughout their shift. Patrol times are randomised to prevent predictability — a key deterrent against opportunistic crime.</p>
                <p>At each visit, your officer performs a thorough physical inspection: checking perimeters, testing access points, looking for signs of intrusion or vandalism, and confirming the site is secure. All visits are GPS-logged and time-stamped.</p>
                <p>You receive detailed patrol reports after each visit — giving you full visibility of your site&apos;s security status without needing to be there yourself.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-gray-200">
              {[
                { icon: "🚗", title: "GPS Tracked", desc: "Every patrol is logged with GPS coordinates and timestamps." },
                { icon: "🔀", title: "Randomised", desc: "Unpredictable patrol schedules maximise deterrent effect." },
                { icon: "📋", title: "Full Reports", desc: "Detailed patrol reports delivered after every visit." },
                { icon: "⚡", title: "Alarm Response", desc: "Rapid dispatch to your site when alarms activate." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-[#1a1a2e] font-black uppercase text-sm mb-2">{item.title}</h3>
                  <p className="text-[#767676] text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Services Included</p>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">What&apos;s Included in Our Mobile Patrol Service</h2>
            <div className="w-10 h-0.5 bg-[#c8102e] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {[
              { title: "Physical Site Inspections", desc: "Thorough checks of perimeters, doors, gates, and windows at every patrol visit." },
              { title: "Alarm Response", desc: "Rapid response to alarm activations with physical site inspection and police liaison if required." },
              { title: "GPS-Logged Patrols", desc: "Every patrol timestamped and location-verified using vehicle GPS tracking technology." },
              { title: "Incident Reporting", desc: "Detailed written reports for every visit, including any observations, incidents, or actions taken." },
              { title: "Multi-Site Coverage", desc: "Cost-effective coverage across multiple sites on a single patrol route." },
              { title: "After-Hours Specialists", desc: "Overnight, weekend, and public holiday patrols when your site is at its most vulnerable." },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8">
                <div className="w-8 h-8 bg-[#c8102e] flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[#1a1a2e] font-black uppercase text-sm mb-2">{f.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Get a Mobile Patrol Quote</h2>
            <p className="text-gray-400">Fast response &bull; Competitive rates &bull; No lock-in contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
