import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Security Audit Melbourne | Site Security Assessment",
  description: "Get a free security audit for your Melbourne business. Our experts assess your vulnerabilities and recommend the right security solution — no obligation.",
  alternates: { canonical: "/free-security-audit/" },
};

export default function FreeSecurityAuditPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">No Obligation</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Free Security Audit</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">
            A professional security assessment of your Melbourne premises — identifying vulnerabilities and recommending the right solution at no cost.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Free Security Audit</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">What&apos;s Included</p>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">What Does a Security Audit Cover?</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
                <p>Our free security audit is a professional on-site assessment conducted by an experienced security consultant. It&apos;s not a sales call — it&apos;s a genuine assessment of your premises, your risks, and your current security arrangements.</p>
                <p>At the end of the audit, you receive a written report with specific recommendations. You&apos;re under no obligation to use our services — we believe that showing you the quality of our thinking is the best way to earn your business.</p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  { title: "Perimeter Assessment", desc: "Review of all entry points, fencing, gates, lighting, and perimeter vulnerabilities." },
                  { title: "Access Control Review", desc: "Assessment of how people access your building or site — where the gaps are and how to close them." },
                  { title: "CCTV Coverage Analysis", desc: "Mapping existing camera coverage and identifying blind spots, resolution issues, and storage gaps." },
                  { title: "Alarm System Check", desc: "Review of existing alarm system — detector placement, monitoring arrangements, and response protocols." },
                  { title: "After-Hours Vulnerability", desc: "Specific assessment of your site&apos;s exposure during after-hours periods when it is most at risk." },
                  { title: "Written Recommendations", desc: "A clear, prioritised list of recommendations with estimated costs — no technical jargon." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 border-l-2 border-[#c8102e] pl-4">
                    <div>
                      <h3 className="text-[#1a1a2e] font-black uppercase text-sm mb-1">{item.title}</h3>
                      <p className="text-[#767676] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[#1a1a2e] p-10">
                <h3 className="text-white font-black uppercase text-lg tracking-wide mb-2">Book Your Free Audit</h3>
                <p className="text-gray-400 text-sm mb-8">Available across Melbourne and regional Victoria. No cost, no obligation.</p>

                <div className="space-y-4">
                  {[
                    { label: "Business Name", type: "text", placeholder: "Your business name" },
                    { label: "Your Name", type: "text", placeholder: "Your full name" },
                    { label: "Phone", type: "tel", placeholder: "Best contact number" },
                    { label: "Email", type: "email", placeholder: "your@email.com" },
                    { label: "Site Address", type: "text", placeholder: "Address to be audited" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-gray-400 text-xs uppercase tracking-wide mb-1">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e]"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Type of Business</label>
                    <select className="w-full bg-[#1a1a2e] border border-gray-600 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e]">
                      <option value="">Select your industry</option>
                      <option>Retail</option>
                      <option>Corporate / Office</option>
                      <option>Construction</option>
                      <option>Healthcare</option>
                      <option>Hospitality / Venue</option>
                      <option>Warehousing / Industrial</option>
                      <option>Education</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <Link
                    href="/contact/"
                    className="block w-full bg-[#c8102e] text-white font-bold py-4 text-sm uppercase tracking-widest text-center hover:bg-[#a00d25] transition-colors mt-2"
                  >
                    Book My Free Audit
                  </Link>
                  <p className="text-gray-600 text-xs text-center">Or call us: <a href="tel:1300000000" className="text-gray-400 hover:text-white">1300 XXX XXX</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">How the Audit Process Works</h2>
            <div className="w-10 h-0.5 bg-[#c8102e] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {[
              { step: "01", title: "Book Online or Call", desc: "Fill in the form above or call us. We&apos;ll confirm a time that suits you — usually within 3 business days." },
              { step: "02", title: "On-Site Assessment", desc: "Our security consultant visits your premises and conducts a thorough walkthrough assessment." },
              { step: "03", title: "Written Report", desc: "You receive a written audit report with specific, prioritised recommendations and indicative costs." },
              { step: "04", title: "No Obligation", desc: "You choose what to do next. We&apos;re happy to discuss our recommendations — but there&apos;s no pressure." },
            ].map((step, i) => (
              <div key={i} className="bg-white p-8">
                <div className="text-[#c8102e] font-black text-4xl mb-4">{step.step}</div>
                <h3 className="text-[#1a1a2e] font-black uppercase text-sm tracking-wide mb-2">{step.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Know Your Vulnerabilities Before Someone Else Does</h2>
            <p className="text-gray-400">Free, professional, no obligation — book your audit today.</p>
          </div>
          <Link href="/contact/" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Book Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
