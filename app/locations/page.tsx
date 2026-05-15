import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Guard Services Across Melbourne & Victoria | Security Guard Company Melbourne",
  description: "Professional security guard services across Melbourne's suburbs and regional Victoria. Local knowledge, fast response, licenced officers.",
  alternates: { canonical: "/locations/" },
  openGraph: {
    title: "Security Guard Services Across Melbourne & Victoria | Security Guard Company Melbourne",
    description: "Professional security guard services across Melbourne's suburbs and regional Victoria. Local knowledge, fast response, licenced officers.",
    url: "https://securityguardcompanymelbourne.com/locations/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const locations = [
  {
    region: "Melbourne CBD & Inner City",
    suburbs: [
      { name: "Melbourne CBD", href: "/locations/melbourne-cbd" },
      { name: "South Melbourne", href: "/locations/south-melbourne" },
      { name: "Docklands", href: "/locations/docklands" },
      { name: "Fitzroy", href: "/locations/fitzroy" },
      { name: "Richmond", href: "/locations/richmond" },
      { name: "St Kilda", href: "/locations/st-kilda" },
      { name: "Collingwood", href: "/locations/collingwood" },
      { name: "Port Melbourne", href: "/locations/port-melbourne" },
    ],
  },
  {
    region: "Eastern Suburbs",
    suburbs: [
      { name: "Box Hill", href: "/locations/box-hill" },
      { name: "Ringwood", href: "/locations/ringwood" },
      { name: "Croydon", href: "/locations/croydon" },
      { name: "Mooroolbark", href: "/locations/mooroolbark" },
      { name: "Glen Waverley", href: "/locations/glen-waverley" },
      { name: "Mitcham", href: "/locations/mitcham" },
    ],
  },
  {
    region: "South Eastern Suburbs",
    suburbs: [
      { name: "Dandenong", href: "/locations/dandenong" },
      { name: "Frankston", href: "/locations/frankston" },
      { name: "Pakenham", href: "/locations/pakenham" },
      { name: "Berwick", href: "/locations/berwick" },
      { name: "Cranbourne", href: "/locations/cranbourne" },
      { name: "Narre Warren", href: "/locations/narre-warren" },
    ],
  },
  {
    region: "Northern Suburbs",
    suburbs: [
      { name: "Broadmeadows", href: "/locations/broadmeadows" },
      { name: "Epping", href: "/locations/epping" },
      { name: "Thomastown", href: "/locations/thomastown" },
      { name: "Reservoir", href: "/locations/reservoir" },
      { name: "Coburg", href: "/locations/coburg" },
    ],
  },
  {
    region: "Western Suburbs",
    suburbs: [
      { name: "Footscray", href: "/locations/footscray" },
      { name: "Sunshine", href: "/locations/sunshine" },
      { name: "Werribee", href: "/locations/werribee" },
      { name: "Hoppers Crossing", href: "/locations/hoppers-crossing" },
      { name: "Point Cook", href: "/locations/point-cook" },
    ],
  },
  {
    region: "Regional Victoria",
    suburbs: [
      { name: "Geelong", href: "/locations/geelong" },
      { name: "Ballarat", href: "/locations/ballarat" },
      { name: "Bendigo", href: "/locations/bendigo" },
      { name: "Shepparton", href: "/locations/shepparton" },
      { name: "Wodonga", href: "/locations/wodonga" },
    ],
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Where We Operate</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Security Guard Services Melbourne & Victoria</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">
            Professional security guard services across Melbourne&apos;s suburbs and regional Victoria. Local knowledge, rapid response, licenced officers.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Locations</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Our Coverage Area</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">Melbourne & Regional Victoria</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto mb-6" />
            <p className="text-[#4a4a4a] leading-relaxed">
              We provide security guard services across Melbourne and throughout Victoria. With locally-based patrol teams, we offer fast response times and genuine local knowledge — not a national provider dispatching from a distant depot.
            </p>
          </div>

          <div className="space-y-12">
            {locations.map((group) => (
              <div key={group.region}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-widest whitespace-nowrap">{group.region}</h2>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {group.suburbs.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block p-4 border border-gray-200 text-sm font-semibold text-[#2d2d2d] hover:border-[#c8102e] hover:text-[#c8102e] transition-colors text-center"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {[
              { stat: "24/7", label: "Service Coverage", desc: "Around-the-clock security across all locations." },
              { stat: "30 min", label: "Avg. Response Time", desc: "Fast patrol response to alarm activations across metro Melbourne." },
              { stat: "Victoria", label: "Wide Coverage", desc: "From Melbourne CBD to regional Victoria." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 text-center">
                <div className="text-4xl font-black text-[#c8102e] mb-2">{item.stat}</div>
                <div className="text-[#1a1a2e] font-black uppercase text-sm tracking-wide mb-2">{item.label}</div>
                <p className="text-[#767676] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Don&apos;t See Your Area?</h2>
            <p className="text-gray-400">Contact us — we cover all of Victoria and can discuss your location.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
