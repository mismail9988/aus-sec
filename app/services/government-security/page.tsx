import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Government Security Services Melbourne | Public Sector Security | Security Guard Company Melbourne",
  description: "Licensed security services for Victorian government buildings, councils, public facilities, and government-contracted sites — cleared officers, compliance documentation, and professional service delivery.",
  alternates: { canonical: "/services/government-security/" },
  openGraph: {
    title: "Government Security Services Melbourne | Security Guard Company Melbourne",
    description: "Security services for Victorian government buildings, councils, and public sector facilities — licensed, police-checked, and compliant with government procurement requirements.",
    url: "https://securityguardcompanymelbourne.com/services/government-security/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function GovernmentSecurityPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Government Security"
      intro="Professional security services for Victorian government buildings, local councils, public facilities, and government-contracted sites — licensed, compliant, and cleared to meet public sector requirements."
      description={[
        "Government and public sector security requires a higher standard of compliance documentation, officer screening, and accountability than most commercial environments. Government clients must demonstrate due diligence in procurement, and their security providers must be able to demonstrate regulatory compliance at every level — licencing, insurance, police checks, and Award wage compliance.",
        "We provide security services to Victorian state government departments, local councils, public utilities, and government-contracted construction and infrastructure projects. Our officers hold current VSAA licences and National Police Checks, and we carry comprehensive public liability insurance. All documentation is available for procurement compliance purposes.",
        "Government security engagements range from access control and concierge functions at government offices to static and mobile patrol coverage of public infrastructure, council-managed facilities, and government construction sites.",
      ]}
      features={[
        { title: "Procurement-Ready Compliance Documentation", desc: "All licences, insurance certificates, police check policies, and Award compliance documentation available for government procurement processes — no delays waiting for paperwork." },
        { title: "Access Control & Visitor Management", desc: "Professional access control for government offices and public buildings — identity verification, visitor registration, contractor induction management, and after-hours access control." },
        { title: "Public Facility Security", desc: "Static and patrol security for council-managed facilities, public libraries, community centres, sports facilities, and government-owned properties." },
        { title: "Government Construction Site Security", desc: "Security for government-contracted infrastructure projects, public works sites, and council construction — compliant with Victorian government contractor requirements." },
        { title: "Court & Tribunal Security Support", desc: "Security presence and management support for government facilities with elevated public access requirements, including document handling and restricted area access control." },
        { title: "Emergency & Incident Response", desc: "Rapid response protocols for incidents at government facilities, with structured escalation to Victoria Police and immediate documentation for government reporting requirements." },
      ]}
      whyChoose={[
        "Full VSAA licensing, insurance, and NPC documentation available for procurement",
        "Award-compliant wages — documented for government Fair Work compliance",
        "Experience with Victorian government and local council security requirements",
        "Digital incident reporting with government-standard documentation",
        "ABN registered, GST compliant, suitable for government procurement portals",
        "24/7 availability including public holidays for critical public facilities",
      ]}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Government Security", href: "/services/government-security" },
      ]}
      ctaTitle="Government & Public Sector Security Enquiries"
      ctaSubtitle="We can provide all documentation required for government security procurement. Contact us to discuss your requirements."
      bookingHref="/contact"
      testimonial={{
        text: "The procurement process required extensive compliance documentation — licences, insurance certificates, police check policies, Award compliance confirmation. Security Guard Company Melbourne had everything ready within 24 hours. That is not something every provider can do.",
        name: "Facilities Manager",
        role: "Victorian Local Council",
      }}
      faqs={[
        { q: "Can you provide documentation for government procurement panels?", a: "Yes. We maintain current copies of our VSAA business licence, public liability and professional indemnity insurance certificates of currency, National Police Check policy documentation, and Award wage compliance records. All documents are available on request for procurement purposes." },
        { q: "Are your officers suitable for security-sensitive government environments?", a: "All of our officers hold National Police Checks. For environments requiring enhanced screening — such as facilities with access to sensitive government information — we can discuss enhanced background check requirements and clearance processes." },
        { q: "Do you have experience with local council security requirements?", a: "Yes. We provide security services to Melbourne metropolitan and regional Victorian councils, covering both office facilities and council-managed public spaces, parks, and community infrastructure." },
        { q: "Can you provide security for government construction projects?", a: "Yes. Government-contracted construction and infrastructure projects have specific security requirements, including contractor management and compliance with government security protocols. We have experience with these requirements." },
      ]}
    />
  );
}
