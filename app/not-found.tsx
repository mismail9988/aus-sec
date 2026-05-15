import Link from "next/link";

const helpfulLinks = [
  { label: "Security Guards", href: "/services/security-guards/" },
  { label: "Mobile Patrols", href: "/services/mobile-patrols/" },
  { label: "Event Security", href: "/services/event-security/" },
  { label: "Our Services", href: "/services/" },
  { label: "Locations We Cover", href: "/locations/" },
  { label: "Get a Quote", href: "/contact/" },
  { label: "About Us", href: "/about/" },
  { label: "Blog", href: "/blog/" },
];

export default function NotFound() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#c8102e] font-black text-[120px] leading-none mb-2">404</div>
          <div className="w-12 h-1 bg-[#c8102e] mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">Page Not Found</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto font-light">
            This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Where to Next?</p>
          <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-8">Popular Pages</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-4 border border-gray-200 text-sm font-semibold text-[#2d2d2d] hover:border-[#c8102e] hover:text-[#c8102e] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-[#1a1a2e] text-[#1a1a2e] font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a1a2e] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-black text-white uppercase mb-2">Need Security? We Can Help.</h2>
            <p className="text-gray-400">Call us or request a quote — we respond within 2 business hours.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:1300000000" className="border border-gray-600 text-gray-300 font-bold px-6 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1a1a2e] transition-colors">
              1300 XXX XXX
            </a>
            <Link href="/contact/" className="bg-[#c8102e] text-white font-bold px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
