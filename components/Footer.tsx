import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 md:col-span-2">
            <div className="mb-5">
              <span className="text-[#c8102e] font-black text-2xl uppercase tracking-wider block leading-none">Security Guard</span>
              <span className="text-white font-bold text-base uppercase tracking-[0.2em] leading-none mt-1 block">Company Melbourne</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Melbourne&apos;s trusted security specialists. Professional, licenced security services across Melbourne and Victoria.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Licenced", "Insured", "24/7"].map((b) => (
                <span key={b} className={`text-xs font-bold px-3 py-1.5 uppercase tracking-wide ${b === "Licenced" ? "bg-[#c8102e] text-white" : "border border-gray-600 text-gray-300"}`}>{b}</span>
              ))}
            </div>
            <div className="space-y-3">
              <a href="tel:1300000000" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors group">
                <svg className="w-4 h-4 text-[#c8102e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                1300 XXX XXX
              </a>
              <a href="mailto:info@securityguardcompanymelbourne.com" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors break-all">
                <svg className="w-4 h-4 text-[#c8102e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@securityguardcompanymelbourne.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-black uppercase text-xs tracking-widest mb-5 pb-3 border-b border-gray-700">Services</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/services/security-guards", label: "Security Guards" },
                { href: "/services/mobile-patrols", label: "Mobile Patrols" },
                { href: "/services/event-security", label: "Event Security" },
                { href: "/services/retail-security", label: "Retail Security" },
                { href: "/services/crowd-control", label: "Crowd Control" },
                { href: "/services/canine-security", label: "Canine Security" },
                { href: "/services/electronic-security", label: "Electronic Security" },
                { href: "/services/electronic-security/cctv", label: "CCTV & Surveillance" },
                { href: "/services/electronic-security/alarms", label: "Alarm Systems" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#c8102e] rounded-full group-hover:w-2 transition-all shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-black uppercase text-xs tracking-widest mb-5 pb-3 border-b border-gray-700">Locations</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/locations/melbourne-cbd", label: "Melbourne CBD" },
                { href: "/locations/dandenong", label: "Dandenong" },
                { href: "/locations/frankston", label: "Frankston" },
                { href: "/locations/geelong", label: "Geelong" },
                { href: "/locations/ballarat", label: "Ballarat" },
                { href: "/locations/werribee", label: "Werribee" },
                { href: "/locations/broadmeadows", label: "Broadmeadows" },
                { href: "/locations", label: "All Locations →" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#c8102e] rounded-full group-hover:w-2 transition-all shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-black uppercase text-xs tracking-widest mb-5 pb-3 border-b border-gray-700">Company</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/reviews", label: "Client Reviews" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/free-security-audit", label: "Free Security Audit" },
                { href: "/emergency-security", label: "Emergency Security" },
                { href: "/blog", label: "Insights" },
                { href: "/careers", label: "Careers" },
                { href: "/security-guard-cost", label: "Security Guard Cost" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#c8102e] rounded-full group-hover:w-2 transition-all shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Security Guard Company Melbourne. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Security Licence: XXXXXXXX &bull; ABN: XX XXX XXX XXX &bull; Melbourne, VIC, Australia</p>
        </div>
      </div>
    </footer>
  );
}
