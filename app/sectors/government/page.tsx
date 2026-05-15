import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Government Security Melbourne | Security Guard Company Melbourne",
  description: "Trusted security services for government buildings, agencies, and public facilities across Victoria. Fully vetted, licenced, and compliant security personnel.",
  alternates: { canonical: "/sectors/government/" },
};

export default function GovernmentSectorPage() {
  return (
    <SectorPage
      name="Government"
      breadcrumb="Government"
      href="/sectors/government"
      tagline="Trusted by the Public Sector"
      intro="Government facilities require security providers who meet the highest standards of compliance, vetting, and professionalism. We deliver."
      description={[
        "Government buildings, agencies, and public-facing facilities require security personnel who are thoroughly vetted, rigorously trained, and held to the highest standards of conduct. Public trust is paramount.",
        "Our government security team undergoes enhanced background checks, security clearance support, and specific training for public-sector environments — including managing high-stress interactions with members of the public.",
        "We have extensive experience securing government office buildings, service centres, courts, transport hubs, and critical infrastructure sites across Victoria.",
      ]}
      challenges={[
        "Managing public access to sensitive government areas",
        "High-stress interactions with members of the public",
        "Compliance with government procurement requirements",
        "Protecting critical infrastructure and data",
        "After-hours security for unoccupied government buildings",
        "Emergency response and crisis management protocols",
      ]}
      features={[
        { title: "Enhanced Vetting", desc: "All guards undergo National Police Checks and additional government-standard background screening." },
        { title: "Public Access Management", desc: "Professional management of public-facing entry points and queuing systems." },
        { title: "Critical Infrastructure Protection", desc: "Specialist security for utility, transport, and communications infrastructure sites." },
        { title: "Compliance Reporting", desc: "Regular incident reporting and audit trails to meet government compliance requirements." },
        { title: "Emergency Protocols", desc: "Training aligned with government emergency response frameworks and evacuation plans." },
        { title: "24/7 Coverage", desc: "Round-the-clock security for facilities requiring constant protection." },
      ]}
      icon={
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      }
    />
  );
}
