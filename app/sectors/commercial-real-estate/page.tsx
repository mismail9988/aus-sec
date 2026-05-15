import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Commercial Real Estate Security Melbourne | Security Guard Company Melbourne",
  description: "Integrated security for office towers, mixed-use developments, and property portfolios across Melbourne. Trusted by leading property managers.",
  alternates: { canonical: "/sectors/commercial-real-estate/" },
};

export default function CommercialRealEstateSectorPage() {
  return (
    <SectorPage
      name="Commercial Real Estate"
      breadcrumb="Commercial Real Estate"
      href="/sectors/commercial-real-estate"
      tagline="Protecting Property Assets"
      intro="Commercial real estate owners and managers need a security partner who understands tenants, compliance, and asset protection."
      description={[
        "Commercial real estate presents a complex security environment — multiple tenants, high foot traffic, shared facilities, and the need to protect both the building asset and the tenants within it.",
        "Our commercial real estate security team works closely with property managers to develop security programs that address the unique needs of each building type — from premium CBD office towers to suburban business parks.",
        "We provide consistent, professional security services that reflect well on your property, support tenant satisfaction, and meet all compliance and insurance requirements.",
      ]}
      challenges={[
        "Managing security across multi-tenanted buildings",
        "Balancing tenant access needs with security requirements",
        "After-hours building security and emergency response",
        "Car park security and vehicle access control",
        "Protecting lobby and common areas from unauthorised access",
        "Meeting property management compliance requirements",
      ]}
      features={[
        { title: "Concierge Security", desc: "Professional lobby security and concierge services creating a secure, welcoming building entry." },
        { title: "Multi-Tenancy Access Control", desc: "Managing access across floors, secure areas, and after-hours entry for multiple tenants." },
        { title: "Car Park Security", desc: "Patrols and access control for basement and external car parks." },
        { title: "After-Hours Patrols", desc: "Regular building patrols during nights, weekends, and public holidays." },
        { title: "Incident Response", desc: "Rapid response to security incidents, alarms, and building emergencies." },
        { title: "Compliance Reporting", desc: "Detailed incident logs and security reports to support property management and insurance." },
      ]}
      icon={
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      }
    />
  );
}
