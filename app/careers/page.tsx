import type { Metadata } from "next";
import Link from "next/link";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers in Security Melbourne | Security Guard Company Melbourne",
  description: "Join Melbourne's trusted security team. We're looking for professional, licenced security officers across Melbourne and Victoria. Apply today.",
  alternates: { canonical: "/careers/" },
  openGraph: {
    title: "Careers in Security Melbourne | Security Guard Company Melbourne",
    description: "Join Melbourne's trusted security team. We're looking for professional, licenced security officers across Melbourne and Victoria. Apply today.",
    url: "https://securityguardcompanymelbourne.com/careers/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const benefits = [
  { title: "Competitive Pay", desc: "Above award wages with regular reviews and performance bonuses." },
  { title: "Flexible Shifts", desc: "Full-time, part-time, and casual positions across a range of shifts to suit your lifestyle." },
  { title: "Career Progression", desc: "Clear pathways from security officer to team leader, supervisor, and management roles." },
  { title: "Ongoing Training", desc: "Funded training programs to develop specialist skills and advance your career." },
  { title: "Supportive Team", desc: "A strong, inclusive team culture with experienced supervisors who support your development." },
  { title: "Diverse Roles", desc: "Work across retail, corporate, events, healthcare, construction, and more — variety is our strength." },
];

const roles = [
  { title: "Security Officer — Retail", type: "Full-time / Part-time", location: "Melbourne CBD & Suburbs", desc: "Join our retail security team working in shopping centres and retail outlets across Melbourne." },
  { title: "Security Officer — Corporate", type: "Full-time", location: "Melbourne CBD", desc: "Professional corporate security role in a premium CBD office building. Reception and access control focus." },
  { title: "Mobile Patrol Officer", type: "Full-time / Casual", location: "Melbourne Metro", desc: "GPS-tracked mobile patrol role covering multiple client sites. Valid driver's licence required." },
  { title: "Event Security Officer", type: "Casual", location: "Melbourne & Surrounds", desc: "Casual event security for concerts, sporting events, festivals, and corporate functions." },
  { title: "Senior Security Officer", type: "Full-time", location: "Melbourne Metro", desc: "Senior role with team leadership responsibilities. Minimum 3 years experience required." },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Join Our Team</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Careers</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            Build a rewarding career with one of Melbourne&apos;s most trusted security companies. We invest in our people.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Careers</span>
        </div>
      </div>

      {/* Why work with us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Why Choose Us</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">Why Work With Us?</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto mb-6" />
            <p className="text-[#767676] max-w-2xl mx-auto">
              We believe that great security starts with great people. That means investing in our team — their training, wellbeing, and career development.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8">
                <div className="w-8 h-8 bg-[#c8102e] flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[#1a1a2e] font-black uppercase text-sm tracking-wide mb-2">{b.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">What You&apos;ll Need</p>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">Minimum Requirements</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <ul className="space-y-4">
                {[
                  "Current Victoria Security Licence (or willing to obtain)",
                  "National Police Check (completed within 12 months)",
                  "Current First Aid Certificate (HLTAID011 or equivalent)",
                  "Right to work in Australia",
                  "Excellent communication and interpersonal skills",
                  "Professional presentation and conduct",
                  "Reliable, punctual, and committed to shift obligations",
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#4a4a4a] text-sm">
                    <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-1.5 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
              <p className="text-[#767676] text-sm mt-6 leading-relaxed">
                Don&apos;t have your security licence yet? We can point you in the right direction. Contact us to find out more.
              </p>
            </div>
            <div className="bg-[#1a1a2e] p-10">
              <h3 className="text-white font-black uppercase text-xl mb-6">How to Apply</h3>
              <div className="space-y-5">
                {[
                  { step: "01", text: "Submit your resume and cover letter via our contact page or email." },
                  { step: "02", text: "Our recruitment team will review your application within 3 business days." },
                  { step: "03", text: "Suitable candidates are invited for an interview with our operations team." },
                  { step: "04", text: "Successful applicants complete site-specific induction and training." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-[#c8102e] font-black text-2xl leading-none shrink-0">{s.step}</div>
                    <p className="text-gray-300 text-sm leading-relaxed mt-0.5">{s.text}</p>
                  </div>
                ))}
              </div>
              <a href="#apply" className="block mt-8 bg-[#c8102e] text-white font-bold text-center py-3 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Available Positions</p>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase">Current Openings</h2>
          </div>
          <div className="space-y-px bg-gray-200">
            {roles.map((role, i) => (
              <div key={i} className="bg-white p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <h3 className="text-[#1a1a2e] font-black uppercase text-lg mb-2">{role.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-xs bg-[#f4f4f4] text-[#4a4a4a] px-3 py-1 font-semibold">{role.type}</span>
                    <span className="text-xs bg-[#f4f4f4] text-[#4a4a4a] px-3 py-1 font-semibold">{role.location}</span>
                  </div>
                  <p className="text-[#767676] text-sm">{role.desc}</p>
                </div>
                <a href="#apply" className="shrink-0 bg-[#c8102e] text-white font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors text-center">
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-[#f4f4f4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Apply Today</p>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase">Submit Your Application</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto mt-4" />
          </div>
          <ApplicationForm roles={roles.map(r => r.title)} />
        </div>
      </section>
    </>
  );
}
