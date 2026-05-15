import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Armed Security Melbourne | Cash in Transit & High-Value Asset Protection",
  description: "Licensed armed security services in Melbourne. Cash in transit, high-value asset protection, and armed escort for businesses with elevated security requirements.",
  alternates: { canonical: "/services/armed-security/" },
  openGraph: {
    title: "Armed Security Melbourne | Cash in Transit & High-Value Asset Protection",
    description: "Licensed armed security services in Melbourne. Cash in transit, high-value asset protection, and armed escort for businesses with elevated security requirements.",
    url: "https://securityguardcompanymelbourne.com/services/armed-security/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function ArmedSecurityPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Armed Security Services"
      intro="Licensed armed security for Melbourne businesses with elevated risk profiles — cash in transit, high-value asset protection, and armed escort services."
      description={[
        "Armed security services are required where the value of assets, cash, or the nature of the threat demands a higher level of protection than unarmed guards can provide. Security Guard Company Melbourne provides licensed armed security personnel for cash in transit operations, high-value asset protection, and armed escort services across Melbourne and Victoria.",
        "All armed security officers hold the relevant firearms endorsement under the Private Security Act 2004 and Firearms Act 1996, and are subject to ongoing screening, training, and compliance requirements that exceed standard security licensing. Every armed deployment is managed through our operations centre with full documentation and chain of custody protocols.",
        "Armed security is not appropriate for every situation — and we'll tell you honestly if unarmed security is sufficient for your requirements. Where armed security is warranted, our team delivers it with the professionalism, legal compliance, and operational discipline the service demands.",
      ]}
      features={[
        { title: "Cash in Transit", desc: "Armed escort for cash movements between business premises and financial institutions." },
        { title: "High-Value Asset Escort", desc: "Armed protection for the movement of jewelry, artwork, pharmaceuticals, and other high-value items." },
        { title: "Static Armed Guarding", desc: "Armed static guards for premises with elevated threat profiles or regulatory requirements." },
        { title: "Payroll Protection", desc: "Armed escort and protection for payroll cash movements for businesses that operate with cash wages." },
        { title: "Jewelry & Retail", desc: "Armed security for high-end jewelry stores, luxury retailers, and high-value retail environments." },
        { title: "Event Armed Security", desc: "Armed personnel for high-profile events where the security threat profile warrants it." },
        { title: "Executive Protection", desc: "Armed close personal protection for executives facing elevated personal security risks." },
        { title: "Pharmaceutical Security", desc: "Secure transport and storage security for high-value pharmaceutical products and controlled substances." },
        { title: "Chain of Custody Documentation", desc: "Full chain of custody documentation for all armed transport operations for compliance and insurance purposes." },
      ]}
      whyChoose={[
        "All armed officers hold firearms endorsement under Victorian law",
        "Ongoing screening, training, and compliance beyond base licensing",
        "Full chain of custody documentation for all operations",
        "Operations centre oversight for all armed deployments",
        "Fully insured for armed security operations",
        "Honest assessment — we'll tell you if unarmed security is sufficient",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Armed Security", href: "/services/armed-security" },
      ]}
      ctaTitle="Discuss Your Armed Security Requirement"
      ctaSubtitle="Confidential consultation — we'll assess your risk profile and recommend the right solution."
    />
  );
}
