import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Finance Sector Security Melbourne | Bank & Financial Institution Security | Security Guard Company Melbourne",
  description: "Professional security for Melbourne banks, financial institutions, fintech offices, and finance sector facilities — access control, cash handling security, and licensed guard deployment.",
  alternates: { canonical: "/services/finance-security/" },
  openGraph: {
    title: "Finance Sector Security Melbourne | Security Guard Company Melbourne",
    description: "Security services for Melbourne banks, credit unions, financial institutions, and fintech companies — licensed guards, cash handling protocols, and access control.",
    url: "https://securityguardcompanymelbourne.com/services/finance-security/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function FinanceSecurityPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Finance Sector Security"
      intro="Specialist security for Melbourne's banks, credit unions, financial institutions, and fintech companies — protecting staff, customers, cash, and sensitive data with licensed, vetted security officers."
      description={[
        "Financial institutions face a distinct and elevated security environment. The combination of cash handling, sensitive customer data, high-profile premises, and the implicit target profile of financial facilities creates security requirements that demand specialist knowledge and thoroughly vetted personnel.",
        "We provide security services to Melbourne banks, credit unions, mortgage brokers, wealth management firms, fintech companies, and financial services offices — covering everything from branch access control and cash handling security to after-hours protection of financial premises and escort services for high-value transfers.",
        "All officers deployed to financial sector environments undergo enhanced background checks and are specifically briefed on the security protocols relevant to financial facilities, including cash handling procedures, suspicious transaction awareness, and emergency response protocols specific to financial institution threats.",
      ]}
      features={[
        { title: "Branch Access Control & Concierge", desc: "Professional access control and customer-facing security for bank branches and financial services offices — managing queues, controlling access to secure areas, and maintaining a reassuring professional presence." },
        { title: "Cash Handling Security", desc: "Security protocols for cash-in environments — vault access control, ATM area monitoring, cash handling escort, and after-hours cash security for financial premises." },
        { title: "After-Hours & Overnight Security", desc: "Static and patrol coverage for financial premises outside business hours — ATM monitoring, perimeter security, and alarm response for financial facilities." },
        { title: "High-Value Transfer Escort", desc: "Licensed security escort for high-value document transfers, cash movements, and sensitive financial asset transfers between financial premises." },
        { title: "Fintech & Corporate Finance Office Security", desc: "Access control, concierge security, and after-hours coverage for Melbourne's growing fintech and corporate finance sector — protecting both physical and data-adjacent environments." },
        { title: "Incident Response & Documentation", desc: "Structured incident response with detailed documentation suitable for AUSTRAC reporting requirements and financial industry regulatory obligations." },
      ]}
      whyChoose={[
        "Enhanced background screening for all officers in financial environments",
        "Experience with branch security, cash handling protocols, and ATM security",
        "Documentation suitable for financial sector compliance and regulatory requirements",
        "Discreet, professional presentation appropriate for financial services environments",
        "Licensed under the Private Security Act 2004 (Vic) with $20M public liability insurance",
        "Available 24/7 for after-hours financial facility security",
      ]}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Finance Sector Security", href: "/services/finance-security" },
      ]}
      ctaTitle="Security for Melbourne's Finance Sector"
      ctaSubtitle="Discuss your financial institution's security requirements with our specialist team."
      bookingHref="/contact"
      testimonial={{
        text: "After a threatening incident at one of our Melbourne branches, we needed to upgrade our security presence quickly with officers who understood the specific requirements of a retail banking environment. The team delivered exactly that — professional, appropriately presented, and properly briefed.",
        name: "Regional Manager",
        role: "Financial Institution — Melbourne",
      }}
      faqs={[
        { q: "What additional screening do officers in financial environments undergo?", a: "Beyond the standard National Police Check required for all officers, financial environment placements can include enhanced credit history checks, additional identity verification, and extended reference checking where the client requires it. We discuss the specific screening requirements with each financial sector client." },
        { q: "Can you provide security for ATM areas and cash handling operations?", a: "Yes. ATM area monitoring and cash handling security are specific competencies we cover — including the protocols around ATM servicing visits, cash delivery security, and after-hours ATM monitoring." },
        { q: "Do you have experience working within financial institution security frameworks?", a: "Yes. Financial institutions typically have existing security policies and procedures. We brief our officers on client-specific protocols and work within the client's existing framework rather than imposing our own procedures." },
        { q: "Can you provide security documentation for APRA or AUSTRAC compliance purposes?", a: "We can provide all standard compliance documentation — licences, insurance, background check policy, incident reports. For specific regulatory reporting requirements, we work with your compliance team to ensure our documentation meets the required format and standard." },
      ]}
    />
  );
}
