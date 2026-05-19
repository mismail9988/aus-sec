import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Concierge Security Melbourne | Corporate Reception & Security Services",
  description: "Professional concierge security officers for Melbourne offices, hotels, and mixed-use buildings. Front-of-house security with customer service excellence.",
  alternates: { canonical: "/services/concierge-security/" },
  openGraph: {
    title: "Concierge Security Melbourne | Corporate Reception & Security Services",
    description: "Professional concierge security officers for Melbourne offices, hotels, and mixed-use buildings. Front-of-house security with customer service excellence.",
    url: "https://securityguardcompanymelbourne.com/services/concierge-security/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function ConciergeSecurityPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Concierge Security Services"
      intro="Security officers who combine genuine security expertise with the professional front-of-house presence your building demands."
      description={[
        "Concierge security sits at the intersection of security and hospitality — and it's a discipline that requires a specific type of officer. Security Guard Company Melbourne places concierge security officers who are as comfortable welcoming a CEO to a building as they are managing an access control system or responding to an incident.",
        "Our concierge officers are deployed at the front desk, lobby, or reception of corporate buildings, hotels, residential towers, and mixed-use developments. They manage visitor access, handle deliveries, monitor CCTV, and maintain the building's security posture — all while presenting as a professional first point of contact for the building.",
        "We understand that in premium buildings, your security officer is part of the building's brand. We select and brief our concierge officers accordingly.",
      ]}
      features={[
        { title: "Front Desk Management", desc: "Professional reception of visitors, residents, and contractors with proper access control procedures." },
        { title: "Visitor Management", desc: "Visitor registration, pass issuance, host notification, and departure logging." },
        { title: "Package & Delivery Handling", desc: "Receiving and logging deliveries, notifying residents or tenants, and managing courier access." },
        { title: "CCTV Monitoring", desc: "Monitoring building camera systems from the concierge desk and escalating anomalies." },
        { title: "Intercom & Access Management", desc: "Managing intercom systems, granting remote access, and handling after-hours entry requests." },
        { title: "Incident Reporting", desc: "Logging and escalating all security incidents, maintenance issues, and unusual events." },
        { title: "Emergency Response", desc: "First response to building emergencies including medical events, fire alarms, and security breaches." },
        { title: "After-Hours Coverage", desc: "Overnight and weekend concierge security for buildings requiring 24/7 front desk presence." },
        { title: "Tenant & Resident Support", desc: "Assisting tenants and residents with building-related queries, key management, and access issues." },
      ]}
      whyChoose={[
        "Officers selected specifically for concierge roles — professional presentation required",
        "Training in customer service as well as security procedures",
        "Experience in corporate, residential, and mixed-use buildings",
        "Coordination with building management systems and property managers",
        "Uniform and presentation standards that match your building's brand",
        "Thorough handover procedures for shift changes — no gaps in coverage",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Concierge Security", href: "/services/concierge-security" },
      ]}
      bookingHref="/book/concierge-security/"
      ctaTitle="Upgrade Your Building's Security Presence"
      ctaSubtitle="Professional concierge security for Melbourne's best buildings."
      testimonial={{
        text: "We manage a shared workspace with 200+ members and needed concierge security that matched our culture — not intimidating, but genuinely security-conscious. Security Guard Company Melbourne found us exactly the right officer. Professional, personable, and takes security seriously without making members feel unwelcome.",
        name: "Rachel Thompson",
        role: "Operations Manager — Brunswick Creative Hub",
      }}
      faqs={[
        { q: "What does a concierge security officer actually do?", a: "A concierge security officer combines front-of-house reception duties with active security functions. They greet and direct visitors, manage building access control, monitor CCTV, respond to incidents, and maintain a professional security presence — all from the lobby desk." },
        { q: "How is concierge security different from a standard security guard?", a: "Concierge officers are selected and trained specifically for client-facing environments. They have stronger communication skills, professional presentation standards, and are comfortable handling reception duties alongside their security responsibilities." },
        { q: "Can concierge security integrate with our building management system?", a: "Yes. Our concierge officers are trained to work with access control platforms, visitor management systems, and building management software. We'll work with your building manager during onboarding to ensure seamless integration." },
      ]}
    />
  );
}
