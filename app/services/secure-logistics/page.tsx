import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Secure Logistics & Cash in Transit Melbourne | Security Guard Company Melbourne",
  description: "Secure logistics and high-value transport security across Melbourne — licensed escorts for cash, valuables, pharmaceuticals, and sensitive cargo with full chain-of-custody documentation.",
  alternates: { canonical: "/services/secure-logistics/" },
  openGraph: {
    title: "Secure Logistics & Cash in Transit Melbourne | Security Guard Company Melbourne",
    description: "Licensed security escorts for high-value cargo, cash, and sensitive shipments across Melbourne and Victoria. Full chain-of-custody documentation and 24/7 availability.",
    url: "https://securityguardcompanymelbourne.com/services/secure-logistics/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function SecureLogisticsPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Secure Logistics"
      intro="Licensed security escorts and secure transport solutions for high-value cargo, cash, pharmaceuticals, and sensitive shipments across Melbourne and regional Victoria."
      description={[
        "Moving high-value goods or sensitive cargo creates a specific and elevated security risk. The transit window — when items are in transit between locations — is when they are most vulnerable, most accessible to theft, and hardest to monitor.",
        "Our secure logistics service provides licensed security officers who escort high-value shipments from origin to destination, maintain continuous custody of sensitive cargo, and manage the documentation and protocols that support chain-of-custody requirements.",
        "We work with businesses across Melbourne that need to move cash, pharmaceutical products, high-value retail goods, sensitive equipment, and other cargo where the consequences of loss or theft are severe. Our officers are trained in secure transport protocols, chain-of-custody documentation, and incident response.",
      ]}
      features={[
        { title: "High-Value Cargo Escort", desc: "Licensed security officers accompanying shipments in transit — by road, within facilities, or between premises — to maintain continuous physical protection." },
        { title: "Cash & Valuables Transport Support", desc: "Escort and handling protocols for cash, bullion, jewellery, and high-value goods requiring secure point-to-point transfer." },
        { title: "Pharmaceutical & Controlled Substance Security", desc: "Specialist protocols for the secure transport of pharmaceutical inventory and controlled substances with full regulatory compliance." },
        { title: "Chain-of-Custody Documentation", desc: "Complete, auditable records of every transfer — time, location, handover signatures, and condition reports — to support compliance and insurance requirements." },
        { title: "Receiving & Dispatch Security", desc: "Security officer presence at receiving and dispatch points to manage access control, verify delivery personnel, and protect high-value goods at loading and unloading." },
        { title: "Armed Escort (Where Required)", desc: "For the highest-value transfers, armed licensed escorts are available where the risk assessment supports this level of protection." },
      ]}
      whyChoose={[
        "Licensed under both the Private Security Act 2004 (Vic) and Firearms Act 1996 (Vic) where applicable",
        "Full chain-of-custody documentation for every assignment",
        "Experience with pharmaceutical, retail, financial, and industrial logistics",
        "Discreet, unmarked vehicle options available",
        "24/7 availability including weekends and public holidays",
        "Insured for high-value cargo escort assignments",
      ]}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Secure Logistics", href: "/services/secure-logistics" },
      ]}
      ctaTitle="Secure Your High-Value Transfers"
      ctaSubtitle="Contact us to discuss your secure logistics requirements — we will design a protocol appropriate for your cargo and risk profile."
      bookingHref="/book/security-guards"
      testimonial={{
        text: "We move pharmaceutical stock between multiple sites weekly. Having a security escort with proper chain-of-custody documentation has significantly simplified our compliance reporting and given us peace of mind we simply didn't have before.",
        name: "Dr. Sarah K.",
        role: "Operations Director — Healthcare Distribution, Melbourne",
      }}
      faqs={[
        { q: "What types of cargo do you escort?", a: "Cash, bullion, jewellery, pharmaceutical products, high-value retail merchandise, sensitive equipment, legal documents, and any other cargo where loss or theft would have serious consequences. Contact us to discuss your specific cargo type." },
        { q: "Do you provide armed escorts?", a: "Yes, for assignments where the risk assessment supports armed coverage. Armed escort officers hold current firearms authorities endorsed on their Victorian security licence. See our armed security services page for more detail." },
        { q: "Can you provide unmarked vehicle escorts?", a: "Yes. For assignments where a discreet profile is preferred — to avoid advertising the presence of high-value cargo — we can provide unmarked vehicle support." },
        { q: "What documentation do you provide?", a: "Full chain-of-custody documentation for every assignment: handover records, GPS-tracked route logs, timestamped custody transfers, and condition reports at origin and destination. All documentation is retained and available for audit or insurance purposes." },
      ]}
    />
  );
}
