import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Corporate Security Melbourne | Security Guard Company Melbourne",
  description: "Professional corporate security services for offices, commercial buildings, and business precincts across Melbourne CBD and suburbs.",
  alternates: { canonical: "/sectors/corporate/" },
  openGraph: {
    title: "Corporate Security Melbourne | Security Guard Company Melbourne",
    description: "Professional corporate security services for offices, commercial buildings, and business precincts across Melbourne CBD and suburbs.",
    url: "https://securityguardcompanymelbourne.com/sectors/corporate/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function CorporateSectorPage() {
  return (
    <SectorPage
      name="Corporate"
      breadcrumb="Corporate"
      href="/sectors/corporate"
      tagline="Securing Your Workplace"
      intro="A secure workplace is a productive workplace. Our corporate security team protects your people, assets, and reputation."
      description={[
        "Corporate environments require a security approach that is professional, discreet, and aligned with your business culture. Our corporate security officers act as an extension of your team — presenting a positive first impression while maintaining rigorous security standards.",
        "From access control and visitor management to after-hours patrols and executive protection, we provide comprehensive corporate security solutions tailored to your building type, occupancy, and risk profile.",
        "We work with building managers, facilities teams, and corporate security managers to implement security programs that meet compliance requirements and protect your most important asset — your people.",
      ]}
      challenges={[
        "Controlling access to sensitive areas and floors",
        "Managing high visitor volumes and contractor access",
        "Protecting intellectual property and confidential information",
        "After-hours security and lone worker protection",
        "Workplace violence and harassment incidents",
        "Emergency evacuation planning and warden coordination",
      ]}
      features={[
        { title: "Reception & Concierge Security", desc: "Professional front-of-house security officers managing access, visitors, and first impressions." },
        { title: "Access Control Management", desc: "Controlling and monitoring access to floors, server rooms, and restricted corporate areas." },
        { title: "After-Hours Security", desc: "Protecting your premises during nights, weekends, and public holidays." },
        { title: "Visitor Management", desc: "Structured sign-in systems, ID verification, and escort services for guests and contractors." },
        { title: "CCTV Monitoring", desc: "Integration with your building management systems for real-time surveillance and incident review." },
        { title: "Emergency Warden Support", desc: "Trained emergency wardens to support evacuation procedures and building emergency response plans." },
      ]}
      icon={
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      }
    />
  );
}
