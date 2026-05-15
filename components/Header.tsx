"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const nav = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        group: "Security Personnel",
        links: [
          { href: "/services/security-guards", label: "Security Guards" },
          { href: "/services/mobile-patrols", label: "Mobile Patrols" },
          { href: "/services/event-security", label: "Event Security" },
          { href: "/services/retail-security", label: "Retail Security" },
          { href: "/services/corporate-security", label: "Corporate Security" },
          { href: "/services/crowd-control", label: "Crowd Control" },
          { href: "/services/loss-prevention", label: "Loss Prevention" },
          { href: "/services/concierge-security", label: "Concierge Security" },
          { href: "/services/canine-security", label: "Canine Security" },
          { href: "/services/armed-security", label: "Armed Security" },
        ],
      },
      {
        group: "Electronic Security",
        links: [
          { href: "/services/electronic-security", label: "Overview" },
          { href: "/services/electronic-security/cctv", label: "CCTV & Surveillance" },
          { href: "/services/electronic-security/access-control", label: "Access Control" },
          { href: "/services/electronic-security/alarms", label: "Alarm Systems & Monitoring" },
        ],
      },
    ],
  },
  {
    label: "Sectors",
    href: "/sectors",
    children: [
      {
        group: "Industries",
        links: [
          { href: "/sectors/healthcare", label: "Healthcare" },
          { href: "/sectors/retail", label: "Retail" },
          { href: "/sectors/corporate", label: "Corporate" },
          { href: "/sectors/government", label: "Government" },
          { href: "/sectors/education", label: "Education" },
          { href: "/sectors/hospitality", label: "Hospitality" },
          { href: "/sectors/events", label: "Events" },
          { href: "/sectors/aged-care", label: "Aged Care" },
          { href: "/sectors/commercial-real-estate", label: "Commercial Real Estate" },
          { href: "/sectors/aviation", label: "Aviation & Airport" },
          { href: "/sectors/construction", label: "Construction" },
          { href: "/sectors/warehousing", label: "Warehousing & Logistics" },
          { href: "/sectors/transport", label: "Transport" },
          { href: "/sectors/industrial", label: "Industrial" },
        ],
      },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      {
        group: "Melbourne & Inner City",
        links: [
          { href: "/locations/melbourne-cbd", label: "Melbourne CBD" },
          { href: "/locations/south-melbourne", label: "South Melbourne" },
          { href: "/locations/docklands", label: "Docklands" },
          { href: "/locations/fitzroy", label: "Fitzroy" },
          { href: "/locations/richmond", label: "Richmond" },
          { href: "/locations/st-kilda", label: "St Kilda" },
        ],
      },
      {
        group: "Suburbs & Regional",
        links: [
          { href: "/locations/dandenong", label: "Dandenong" },
          { href: "/locations/frankston", label: "Frankston" },
          { href: "/locations/geelong", label: "Geelong" },
          { href: "/locations/ballarat", label: "Ballarat" },
          { href: "/locations/werribee", label: "Werribee" },
          { href: "/locations", label: "All Locations →" },
        ],
      },
    ],
  },
  {
    label: "Why Us",
    href: "/reviews",
    children: [
      {
        group: "Our Credentials",
        links: [
          { href: "/security-company-melbourne", label: "Security Company Melbourne" },
          { href: "/hire-security-guard-melbourne", label: "How to Hire a Security Guard" },
          { href: "/reviews", label: "Client Reviews" },
          { href: "/case-studies", label: "Case Studies" },
          { href: "/free-security-audit", label: "Free Security Audit" },
          { href: "/emergency-security", label: "Emergency Security" },
          { href: "/about", label: "About Us" },
          { href: "/sustainability", label: "Sustainability" },
        ],
      },
    ],
  },
  {
    label: "Insights",
    href: "/blog",
    children: null,
  },
  {
    label: "Careers",
    href: "/careers",
    children: null,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  }

  return (
    <header className="w-full z-50 sticky top-0 shadow-sm">
      {/* Top utility bar */}
      <div className="bg-[#1a1a2e] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <span className="text-gray-400 text-xs hidden sm:block">Melbourne&apos;s Trusted Security Specialists — Available 24/7</span>
          <div className="flex items-center gap-6 ml-auto">
            <a href="mailto:info@securityguardcompanymelbourne.com" className="flex items-center gap-1.5 text-gray-300 hover:text-white text-xs transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@securityguardcompanymelbourne.com
            </a>
            <Link href="/contact" className="bg-[#c8102e] text-white text-xs font-bold px-4 py-1.5 hover:bg-[#a00d25] transition-colors uppercase tracking-wide">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight shrink-0">
              <span className="text-[#c8102e] font-black text-xl uppercase tracking-wider leading-none">Security Guard</span>
              <span className="text-[#1a1a2e] font-bold text-sm uppercase tracking-[0.2em] leading-none mt-0.5">Company Melbourne</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              <Link href="/" className="text-[#2d2d2d] hover:text-[#c8102e] font-semibold px-4 py-2 text-xs uppercase tracking-wide transition-colors">Home</Link>
              {nav.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-[#2d2d2d] hover:text-[#c8102e] font-semibold px-4 py-6 text-xs uppercase tracking-wide transition-colors"
                  >
                    {item.label}
                    {item.children && (
                      <svg className={`w-3 h-3 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 bg-white shadow-2xl border-t-2 border-[#c8102e] z-50 min-w-[240px]"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children.map((group) => (
                        <div key={group.group} className="border-b border-gray-100 last:border-b-0">
                          <div className="px-5 py-2 bg-[#f4f4f4]">
                            <span className="text-[#c8102e] text-xs font-black uppercase tracking-widest">{group.group}</span>
                          </div>
                          {group.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block px-5 py-2.5 text-[#2d2d2d] hover:text-[#c8102e] hover:bg-[#f4f4f4] text-sm font-semibold transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" className="ml-2 bg-[#c8102e] text-white font-bold px-5 py-2.5 text-xs uppercase tracking-wide hover:bg-[#a00d25] transition-colors">
                Get a Quote
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button className="lg:hidden text-[#2d2d2d] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4">
            <Link href="/" className="block py-3 px-3 text-[#2d2d2d] font-bold text-sm uppercase tracking-wide border-b border-gray-100" onClick={() => setMenuOpen(false)}>Home</Link>
            {nav.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 px-3 text-[#2d2d2d] font-bold text-sm uppercase tracking-wide border-b border-gray-100"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="bg-[#f4f4f4] pl-4">
                        {item.children.map((group) => (
                          <div key={group.group}>
                            <div className="px-3 py-2 text-[#c8102e] text-xs font-black uppercase tracking-widest">{group.group}</div>
                            {group.links.map((link) => (
                              <Link key={link.href} href={link.href} className="block py-2 px-3 text-[#4a4a4a] text-sm font-semibold hover:text-[#c8102e]" onClick={() => setMenuOpen(false)}>
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="block py-3 px-3 text-[#2d2d2d] font-bold text-sm uppercase tracking-wide border-b border-gray-100" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" className="block mt-4 bg-[#c8102e] text-white font-bold py-3 text-sm uppercase tracking-widest text-center hover:bg-[#a00d25] transition-colors" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
