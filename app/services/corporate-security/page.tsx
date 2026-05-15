import type { Metadata } from "next";
import Link from "next/link";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Corporate Security Melbourne | Office & Business Security Services",
  description: "Professional corporate security services for Melbourne offices and business premises. Access control, concierge security, executive protection and more.",
  alternates: { canonical: "/services/corporate-security/" },
  openGraph: {
    title: "Corporate Security Melbourne | Office & Business Security Services",
    description: "Professional corporate security services for Melbourne offices and business premises. Access control, concierge security, executive protection and more.",
    url: "https://securityguardcompanymelbourne.com/services/corporate-security/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function CorporateSecurityPage() {
  return (
    <>
      <ServicePage
        category="Security Services"
        name="Corporate Security Services"
        intro="Protecting Melbourne's corporate environments — from CBD office towers to business parks — with professional, presentable security personnel."
        description={[
          "Corporate environments demand a different approach to security. The security officer at your front desk or monitoring your access points represents your business to clients, visitors, and staff. Security Guard Company Melbourne provides corporate security personnel who combine genuine security competence with the professional presentation required in a business setting.",
          "We work with facility managers, building owners, and corporate security managers to develop security programs that address access control, visitor management, after-hours security, and emergency response — all delivered by officers who understand the standards expected in professional environments.",
          "From single-tenancy buildings to multi-tenanted towers, we have the systems and staffing to manage complex corporate security requirements at scale.",
        ]}
        features={[
          { title: "Concierge Security", desc: "Front-of-house officers who manage visitor reception and access control with professionalism." },
          { title: "Access Control Management", desc: "Managing card-based and manual access systems, issuing visitor passes, and maintaining access logs." },
          { title: "After-Hours Security", desc: "Overnight and weekend security for office buildings and business parks." },
          { title: "Executive Protection", desc: "Close personal protection for senior executives and VIP visitors." },
          { title: "Loading Dock Security", desc: "Controlling contractor and delivery access at building service entries." },
          { title: "Emergency Warden Support", desc: "Security officers trained as floor/area wardens to support building emergency procedures." },
          { title: "Patrol & Inspection", desc: "Regular internal and external patrols with digital reporting to facility management." },
          { title: "Incident Response", desc: "Rapid response to security incidents, medical emergencies, and other building events." },
          { title: "Security Consulting", desc: "Site assessments and security recommendations for building managers and corporate tenants." },
        ]}
        whyChoose={[
          "Professional presentation standards required for all corporate deployments",
          "Officers experienced in CBD and commercial office environments",
          "Integrated with building management systems and access control platforms",
          "Coordinated reporting to facility managers and building owners",
          "Scalable from single-building to multi-site corporate portfolios",
          "Understanding of WHS obligations for building managers",
        ]}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Corporate Security", href: "/services/corporate-security" },
        ]}
        ctaTitle="Secure Your Corporate Environment"
        ctaSubtitle="Professional corporate security — contact us for a building assessment."
      />
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#767676] text-xs uppercase tracking-widest font-bold mb-4">Related Services</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/concierge-security" className="px-5 py-2.5 bg-[#f4f4f4] border border-gray-200 text-sm font-bold text-[#1a1a2e] hover:border-[#c8102e] hover:text-[#c8102e] transition-colors">
              Dedicated Concierge Security Service
            </Link>
            <Link href="/services/armed-security" className="px-5 py-2.5 bg-[#f4f4f4] border border-gray-200 text-sm font-bold text-[#1a1a2e] hover:border-[#c8102e] hover:text-[#c8102e] transition-colors">
              Armed Security Officers
            </Link>
            <Link href="/services/electronic-security/access-control" className="px-5 py-2.5 bg-[#f4f4f4] border border-gray-200 text-sm font-bold text-[#1a1a2e] hover:border-[#c8102e] hover:text-[#c8102e] transition-colors">
              Access Control Systems
            </Link>
            <Link href="/sectors/corporate" className="px-5 py-2.5 bg-[#f4f4f4] border border-gray-200 text-sm font-bold text-[#1a1a2e] hover:border-[#c8102e] hover:text-[#c8102e] transition-colors">
              Corporate Sector Security
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
