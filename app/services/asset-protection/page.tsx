import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Asset Protection Security Melbourne | Business Asset Security Services | Security Guard Company Melbourne",
  description: "Professional asset protection security for Melbourne businesses — guarding high-value equipment, stock, cash, and property with licensed officers and proven protocols.",
  alternates: { canonical: "/services/asset-protection/" },
  openGraph: {
    title: "Asset Protection Security Melbourne | Security Guard Company Melbourne",
    description: "Protect your business assets with licensed security officers, mobile patrols, and tailored protocols for high-value equipment, stock, and property across Melbourne.",
    url: "https://securityguardcompanymelbourne.com/services/asset-protection/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function AssetProtectionPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Asset Protection"
      intro="Protecting your most valuable assets — equipment, stock, cash, intellectual property, and physical infrastructure — with licensed security officers and tailored protection protocols across Melbourne and Victoria."
      description={[
        "Asset protection goes beyond a guard at the door. It is a structured approach to identifying which of your business assets are most at risk, what threats they face, and how to deploy the right combination of personnel, technology, and procedure to protect them effectively.",
        "We work with businesses across Melbourne to assess their asset risk profile — from retail stock and construction plant to pharmaceutical inventory, high-value equipment, and cash handling operations. Based on that assessment, we design and deliver a protection program that is proportionate to the actual risk.",
        "Our asset protection services range from static guard deployment and mobile patrol coverage to close personal protection for high-value asset transfers and specialist loss prevention for retail and warehouse environments.",
      ]}
      features={[
        { title: "Asset Risk Assessment", desc: "We identify your highest-value and highest-risk assets, assess the specific threats they face, and design a protection program accordingly." },
        { title: "Static Guard Deployment", desc: "Licensed officers stationed at your premises to provide continuous physical protection of assets during high-risk periods." },
        { title: "Mobile Patrol Coverage", desc: "Regular, randomised patrol visits to deter opportunistic and organised theft — particularly for after-hours asset protection." },
        { title: "Cash & Valuables Handling", desc: "Secure protocols for cash-handling environments and high-value asset movements, including escort and handover procedures." },
        { title: "Loss Prevention", desc: "Plain-clothes and uniformed loss prevention officers for retail, warehouse, and distribution environments where internal and external theft is a primary risk." },
        { title: "Incident Response & Reporting", desc: "Rapid response to asset theft incidents with full documentation for insurance claims and police investigations." },
      ]}
      whyChoose={[
        "Tailored programs based on your specific asset risk profile",
        "Licensed under the Private Security Act 2004 (Vic)",
        "Experience across retail, construction, healthcare, corporate, and industrial sectors",
        "Detailed incident reporting and regular security performance reviews",
        "Flexible deployment — static, mobile patrol, or hybrid coverage",
        "Available 24/7 including weekends and public holidays",
      ]}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Asset Protection", href: "/services/asset-protection" },
      ]}
      ctaTitle="Protect What Your Business Has Built"
      ctaSubtitle="Talk to our team about a tailored asset protection program for your business."
      bookingHref="/book/security-guards"
      testimonial={{
        text: "We were losing significant stock from our warehouse and couldn't identify how. The team conducted a proper assessment, identified three access control gaps we hadn't noticed, and the losses stopped within two weeks. Professional from start to finish.",
        name: "Priya L.",
        role: "Warehouse Operations Manager — Dandenong",
      }}
      faqs={[
        { q: "What types of assets can you protect?", a: "Any business asset — physical stock, equipment, plant and machinery, cash, pharmaceutical inventory, data infrastructure, and high-value items of all kinds. We tailor the approach to the specific asset type and its threat profile." },
        { q: "Do you cover after-hours asset protection?", a: "Yes. After-hours coverage is often the highest-risk period for asset theft. We provide both static overnight guard deployment and mobile patrol coverage depending on the level of protection your assets require." },
        { q: "Can you help with internal theft as well as external?", a: "Yes. Internal theft accounts for a significant proportion of business losses. Our loss prevention officers and access control assessments specifically address internal theft risks alongside external threats." },
        { q: "How quickly can you deploy?", a: "For most standard asset protection requirements we can deploy within 48 hours. Urgent requirements can sometimes be accommodated same-day or next-day — contact us directly to discuss your timeline." },
      ]}
    />
  );
}
