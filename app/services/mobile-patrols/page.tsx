import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Patrol Security Melbourne | Security Guard Company Melbourne",
  description: "GPS-tracked mobile patrol security services across Melbourne and Victoria. Cost-effective, visible security for businesses, construction sites, and commercial properties.",
  alternates: { canonical: "/services/mobile-patrols/" },
  openGraph: {
    title: "Mobile Patrol Security Melbourne | Security Guard Company Melbourne",
    description: "GPS-tracked mobile patrol security services across Melbourne and Victoria. Cost-effective, visible security for businesses, construction sites, and commercial properties.",
    url: "https://securityguardcompanymelbourne.com/services/mobile-patrols/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const trustBadges = [
  { label: "Victoria Police Licenced" },
  { label: "GPS-Tracked Patrols" },
  { label: "Fully Insured" },
  { label: "Detailed Reports Every Visit" },
  { label: "24/7 Operations Centre" },
];

const faqs = [
  {
    q: "How many times will a patrol officer visit my site per night?",
    a: "Visit frequency depends on your package and site requirements. Standard patrol contracts include 2–4 randomised visits per night. Higher-risk sites can be scheduled for more frequent checks. We'll recommend a visit frequency based on your site's risk profile.",
  },
  {
    q: "How quickly do you respond to alarm activations?",
    a: "Our mobile patrol vehicles aim to respond to alarm activations within 20–30 minutes. Response time depends on vehicle proximity at the time of activation. All alarm responses are followed by a written report.",
  },
  {
    q: "Do I get reports from each patrol visit?",
    a: "Yes. Every patrol visit generates a written report with GPS timestamp, observations, and any issues found. Reports are delivered digitally. You can request photo evidence be included as part of your service agreement.",
  },
  {
    q: "Can mobile patrols cover multiple sites under one contract?",
    a: "Yes — this is one of the key advantages of mobile patrols. Our officers can cover several of your sites on a single route, making it very cost-effective compared to static guards at each location.",
  },
];

export default function MobilePatrolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Security Services</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Mobile Patrols</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            GPS-tracked mobile security patrols providing visible deterrence and rapid alarm response across Melbourne and Victoria.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book/mobile-patrols/" className="bg-[#c8102e] text-white font-bold px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
              Get a Patrol Quote
            </Link>
            <Link href="/contact/" className="border border-white/40 text-white font-bold px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
              Speak to Us
            </Link>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-[#c8102e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1a1a2e] font-bold uppercase text-xs tracking-wide">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <Link href="/services" className="hover:text-[#c8102e]">Services</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Mobile Patrols</span>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">How It Works</p>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">Visible Security Without the Full-Time Cost</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
                <p>Our patrol officers operate from marked vehicles, checking your site throughout their shift. We randomise patrol times to prevent predictability — this deters opportunistic crime.</p>
                <p>At each visit, your officer checks perimeters, tests access points, looks for signs of intrusion or vandalism, and confirms the site is secure. All visits are GPS-logged and time-stamped.</p>
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

      {/* Services Included */}
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

      {/* Why Choose Us */}
      <section className="py-20 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Why Choose Us</p>
            <h2 className="text-3xl font-black text-white uppercase mb-4">Why Melbourne Businesses Trust Our Patrols</h2>
            <div className="w-10 h-0.5 bg-[#c8102e] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "All officers hold current Victoria Police security licences",
              "GPS-verified patrol logs — full accountability every visit",
              "Randomised patrol times for maximum deterrent effect",
              "Rapid alarm response — typically 20–30 minutes",
              "Available for single sites or multi-site patrol routes",
              "Fully insured with $20M+ public liability coverage",
              "No lock-in contracts — flexible arrangements",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#c8102e] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-[#f4f4f4] border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-[#1a1a2e] text-lg font-light leading-relaxed italic mb-6">
            &ldquo;We switched to Security Guard Company Melbourne after our previous patrol provider couldn&apos;t prove they were actually visiting our sites. Within the first week, we had GPS-verified reports showing every check. The alarm response has been well under 25 minutes every time. Exactly what we needed.&rdquo;
          </blockquote>
          <p className="text-[#1a1a2e] font-black text-sm uppercase tracking-widest">Brendan Walsh</p>
          <p className="text-[#767676] text-sm mt-1">Portfolio Manager — Statewide Industrial Properties</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Common Questions</p>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">Mobile Patrol FAQs</h2>
            <div className="w-10 h-0.5 bg-[#c8102e] mx-auto" />
          </div>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="font-bold text-[#1a1a2e] text-sm pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-[#c8102e] shrink-0 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-[#4a4a4a] text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faqs/" className="text-[#c8102e] text-sm font-bold hover:underline">
              View all security FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Get a Mobile Patrol Quote</h2>
            <p className="text-gray-400">Fast response &bull; Competitive rates &bull; No lock-in contracts</p>
          </div>
          <Link href="/book/mobile-patrols/" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
