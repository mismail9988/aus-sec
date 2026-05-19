import Link from "next/link";
import { ReactNode } from "react";

interface Feature {
  title: string;
  desc: string;
}

interface ServicePageProps {
  category: string;
  name: string;
  intro: string;
  description: string[];
  features: Feature[];
  whyChoose: string[];
  breadcrumbs: { label: string; href: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  bookingHref?: string;
  icon?: ReactNode;
  testimonial?: { text: string; name: string; role: string };
  faqs?: { q: string; a: string }[];
}

export default function ServicePage({
  category,
  name,
  intro,
  description,
  features,
  whyChoose,
  breadcrumbs,
  ctaTitle,
  ctaSubtitle,
  bookingHref,
  icon,
  testimonial,
  faqs,
}: ServicePageProps) {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">{category}</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">{name}</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light mb-8">{intro}</p>
          <div className="flex flex-wrap gap-3">
            {bookingHref && (
              <Link href={bookingHref} className="bg-[#c8102e] text-white font-bold px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
                Book Now
              </Link>
            )}
            <Link href="/contact" className="border border-white text-white font-bold px-6 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1a1a2e] transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-gray-500 font-semibold uppercase tracking-wide">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "Fully Licenced & Insured" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "24/7 Availability" },
              { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", text: "National Police Checked" },
              { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "No Lock-In Contracts" },
              { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "Response Within 2 Hours" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#c8102e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={t.icon} />
                </svg>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          {breadcrumbs.map((b, i) => (
            <span key={b.href} className="flex items-center gap-2">
              {i < breadcrumbs.length - 1 ? (
                <><Link href={b.href} className="hover:text-[#c8102e] transition-colors">{b.label}</Link><span>/</span></>
              ) : (
                <span className="text-[#2d2d2d] font-semibold">{b.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black text-[#1a1a2e] uppercase leading-tight mb-4">{name} in Melbourne</h2>
              <div className="w-10 h-0.5 bg-[#c8102e] mb-8" />
              <div className="space-y-4 text-[#4a4a4a] leading-relaxed">
                {description.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>
            <div className="bg-[#1a1a2e] p-10">
              {icon && <div className="text-[#c8102e] mb-6">{icon}</div>}
              <h3 className="text-white font-black text-xl uppercase mb-5">Why Choose Us</h3>
              <ul className="space-y-3">
                {whyChoose.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-1.5 shrink-0" />
                    {item}
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
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">What&apos;s Included</p>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-4">Service Features</h2>
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

      {/* Testimonial */}
      {testimonial && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#c8102e]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl text-[#1a1a2e] font-light leading-relaxed italic mb-6">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>
            <div className="font-black text-[#1a1a2e] text-sm uppercase tracking-wide">{testimonial.name}</div>
            <div className="text-[#c8102e] text-xs font-semibold mt-1">{testimonial.role}</div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-[#f4f4f4]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-8">Frequently Asked Questions</h2>
            <div className="space-y-0 border border-gray-200 divide-y divide-gray-200 bg-white">
              {faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-[#f4f4f4] transition-colors">
                    <span className="font-black text-[#1a1a2e] text-sm">{faq.q}</span>
                    <svg className="w-5 h-5 text-[#c8102e] shrink-0 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed bg-[#fafafa]">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/faqs/" className="text-[#c8102e] font-bold text-sm uppercase tracking-widest hover:underline">
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">{ctaTitle}</h2>
            <p className="text-gray-400">{ctaSubtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            {bookingHref && (
              <Link href={bookingHref} className="bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors text-center">
                Book Now
              </Link>
            )}
            <Link href="/contact" className="border border-white text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1a1a2e] transition-colors text-center">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
