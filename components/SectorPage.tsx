import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

interface Feature {
  title: string;
  desc: string;
}

interface SectorPageProps {
  name: string;
  tagline: string;
  intro: string;
  description: string[];
  features: Feature[];
  challenges: string[];
  icon: ReactNode;
  breadcrumb: string;
  href: string;
}

export default function SectorPage({
  name,
  tagline,
  intro,
  description,
  features,
  challenges,
  icon,
  breadcrumb,
  href,
}: SectorPageProps) {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Sectors</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">{name}</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">{intro}</p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/sectors" className="hover:text-[#c8102e] transition-colors">Sectors</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">{breadcrumb}</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">{tagline}</p>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">{name} Security Solutions</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
                {description.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>
            <div className="bg-[#1a1a2e] p-10">
              <div className="text-[#c8102e] mb-6">{icon}</div>
              <h3 className="text-white font-black text-xl uppercase mb-5">Key Security Challenges</h3>
              <ul className="space-y-3">
                {challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-1.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">What We Provide</p>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">Our {name} Services</h2>
            <div className="w-10 h-0.5 bg-[#c8102e] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8">
                <div className="w-8 h-8 bg-[#c8102e] flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[#1a1a2e] font-black uppercase text-sm tracking-wide mb-2">{f.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Get a Free {name} Security Assessment</h2>
            <p className="text-gray-400">Tailored solutions, competitive pricing, no lock-in contracts.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
