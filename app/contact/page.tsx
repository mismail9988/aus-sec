import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Security Guard Company Melbourne",
  description: "Get in touch with Security Guard Company Melbourne for a free security assessment and quote. We respond within 2 business hours.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Us | Security Guard Company Melbourne",
    description: "Get in touch with Security Guard Company Melbourne for a free security assessment and quote. We respond within 2 business hours.",
    url: "https://securityguardcompanymelbourne.com/contact/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff08 0, #ffffff08 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
            Contact Us
          </h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed font-light">
            Request a free, no-obligation security assessment and quote. Our team responds
            within 2 business hours.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Contact</span>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Get In Touch</h2>
                <div className="w-8 h-0.5 bg-[#c8102e] mb-6" />
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Email",
                    value: "info@securityguardcompanymelbourne.com",
                    sub: "Response within 2 business hours",
                    href: "mailto:info@securityguardcompanymelbourne.com",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Location",
                    value: "Melbourne, Victoria",
                    sub: "Serving all of VIC",
                    href: null,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#c8102e] flex items-center justify-center text-white shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[#767676] text-xs uppercase tracking-wide font-bold mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-[#1a1a2e] font-semibold text-sm hover:text-[#c8102e] transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[#1a1a2e] font-semibold text-sm">{item.value}</div>
                      )}
                      <div className="text-[#767676] text-xs mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency box */}
              <div className="bg-[#1a1a2e] p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-[#c8102e] rounded-full animate-pulse" />
                  <h3 className="text-white font-black text-sm uppercase tracking-wide">24/7 Emergency Line</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  For urgent security requirements or after-hours emergencies, call our dedicated
                  24/7 line immediately.
                </p>
                <a
                  href="mailto:info@securityguardcompanymelbourne.com"
                  className="block bg-[#c8102e] text-white font-bold text-center py-3 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors"
                >
                  Email Us Now
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#f4f4f4] p-8 md:p-10">
                <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Request a Free Quote</h2>
                <div className="w-8 h-0.5 bg-[#c8102e] mb-8" />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
