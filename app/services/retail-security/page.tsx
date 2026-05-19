import type { Metadata } from "next";
import Link from "next/link";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Retail Security Melbourne | Loss Prevention & Store Security Guards",
  description: "Professional retail security and loss prevention in Melbourne. Reduce theft, protect staff, and improve store safety with licenced retail security officers.",
  alternates: { canonical: "/services/retail-security/" },
  openGraph: {
    title: "Retail Security Melbourne | Loss Prevention & Store Security Guards",
    description: "Professional retail security and loss prevention in Melbourne. Reduce theft, protect staff, and improve store safety with licenced retail security officers.",
    url: "https://securityguardcompanymelbourne.com/services/retail-security/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function RetailSecurityPage() {
  return (
    <>
      <ServicePage
        category="Security Services"
        name="Retail Security & Loss Prevention"
        intro="Reduce theft, protect your staff, and improve the safety of your retail environment with professional loss prevention officers across Melbourne."
        description={[
          "Retail theft is one of the most significant and controllable cost centres for retailers. Security Guard Company Melbourne provides specialist retail security and loss prevention services that directly reduce shrinkage, deter opportunistic theft, and protect your staff.",
          "Our retail security officers are trained specifically for the retail environment — balancing visible deterrence with a customer-service mindset. Whether deployed in plainclothes as store detectives or in uniform at the entrance, our officers understand how to identify theft behaviours, respond appropriately, and manage incidents in compliance with Victorian law.",
          "We work with retail clients to understand their specific loss patterns, peak risk periods, and product categories — allowing us to deploy our officers in the most effective way for your store.",
        ]}
        features={[
          { title: "Loss Prevention Officers", desc: "Plainclothes store detectives monitoring for theft behaviours without alerting offenders." },
          { title: "Uniformed Guard Presence", desc: "Visible uniformed security officers providing deterrence at store entrances and high-value areas." },
          { title: "Bag Checking", desc: "Bag and receipt checking services at exit points to deter and detect theft." },
          { title: "Staff Safety", desc: "Protecting retail staff from customer aggression and providing a safer working environment." },
          { title: "CCTV Monitoring", desc: "In-store CCTV monitoring to support loss prevention and incident investigation." },
          { title: "Incident Management", desc: "Proper lawful apprehension procedures and incident documentation for police and insurance purposes." },
          { title: "Theft Reporting", desc: "Detailed loss prevention reports including apprehensions, intelligence, and trend analysis." },
          { title: "After-Hours Security", desc: "Overnight and after-hours security for retail premises with high-value stock or cash handling." },
          { title: "Multi-Site Management", desc: "Coordinated security across retail chains with centralised reporting and consistent standards." },
        ]}
        whyChoose={[
          "Measurable shrinkage reduction — we track and report results",
          "Officers trained in Victorian retail crime legislation",
          "Lawful apprehension procedures — no civil liability exposure",
          "Customer-service focused — won't deter genuine shoppers",
          "Flexible deployment: peak hours, all-day, or overnight",
          "Experience across supermarkets, fashion, electronics, and liquor retail",
        ]}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Retail Security", href: "/services/retail-security" },
        ]}
        bookingHref="/book/retail-security/"
        ctaTitle="Reduce Retail Theft Today"
        ctaSubtitle="Get a loss prevention assessment and quote for your store."
        testimonial={{
          text: "Since engaging their retail security team, our shrinkage has dropped significantly. Their loss prevention approach is intelligence-led — they study patterns and deploy strategically. The weekly reporting is data we actually use in operations meetings.",
          name: "Sarah Chen",
          role: "Operations Director — Bayside Retail Group",
        }}
        faqs={[
          { q: "What's the difference between a retail guard and a loss prevention officer?", a: "A uniformed guard provides visible deterrence and handles access control. A loss prevention officer works in plain clothes, detecting theft through behavioural observation and intelligence. Effective retail security programs often use both in combination." },
          { q: "How quickly can you deploy retail security?", a: "For urgent requirements we can often deploy within 24–48 hours. For planned ongoing retail security, we typically allow 3–5 days to match the right officer to your environment." },
          { q: "Do you provide security for shopping centres as well as individual stores?", a: "Yes — individual retail outlets, multi-tenancy strips, and large shopping centres. For centres we work with centre management to develop a coordinated security approach across all tenancies." },
          { q: "Can retail security help with staff safety, not just theft?", a: "Absolutely. Retail environments increasingly face aggression, particularly at self-checkouts and service desks. Our officers are trained in conflict de-escalation and provide a visible protective presence for your staff as well as your stock." },
        }}
      />
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#767676] text-xs uppercase tracking-widest font-bold mb-4">Related Services</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/loss-prevention" className="px-5 py-2.5 bg-[#f4f4f4] border border-gray-200 text-sm font-bold text-[#1a1a2e] hover:border-[#c8102e] hover:text-[#c8102e] transition-colors">
              Dedicated Loss Prevention Service
            </Link>
            <Link href="/services/security-guards" className="px-5 py-2.5 bg-[#f4f4f4] border border-gray-200 text-sm font-bold text-[#1a1a2e] hover:border-[#c8102e] hover:text-[#c8102e] transition-colors">
              Security Guards
            </Link>
            <Link href="/services/electronic-security/cctv" className="px-5 py-2.5 bg-[#f4f4f4] border border-gray-200 text-sm font-bold text-[#1a1a2e] hover:border-[#c8102e] hover:text-[#c8102e] transition-colors">
              CCTV & Surveillance
            </Link>
            <Link href="/sectors/retail" className="px-5 py-2.5 bg-[#f4f4f4] border border-gray-200 text-sm font-bold text-[#1a1a2e] hover:border-[#c8102e] hover:text-[#c8102e] transition-colors">
              Retail Sector Security
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
