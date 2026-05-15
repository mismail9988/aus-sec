import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Warehouse Security Melbourne | Industrial & Logistics Security Services",
  description: "Professional security for Melbourne's warehousing and logistics sector. Protecting high-value stock, equipment, and assets in industrial environments.",
  alternates: { canonical: "/sectors/warehousing/" },
  openGraph: {
    title: "Warehouse Security Melbourne | Industrial & Logistics Security Services",
    description: "Professional security for Melbourne's warehousing and logistics sector. Protecting high-value stock, equipment, and assets in industrial environments.",
    url: "https://securityguardcompanymelbourne.com/sectors/warehousing/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function WarehousingPage() {
  return (
    <SectorPage
      name="Warehousing & Logistics Security"
      tagline="Protecting Melbourne's Supply Chain"
      intro="Professional security for warehouses, distribution centres, and logistics facilities across Melbourne and Victoria."
      description={[
        "Warehousing and logistics facilities face some of the highest security risks of any commercial sector — high-value stock, 24/7 operations, large workforces with high turnover, multiple access points, and significant vehicle movement all create complex security challenges.",
        "Security Guard Company Melbourne provides specialist security for warehouses and distribution centres. Our officers are trained in the specific requirements of logistics environments — including cargo tracking, contractor management, vehicle access control, and internal theft prevention.",
        "We understand that a security incident in a warehouse doesn't just mean lost stock — it means supply chain disruption, insurance claims, and potential contractual penalties. Our approach is prevention-focused, with systems and procedures designed to prevent incidents rather than just respond to them.",
      ]}
      features={[
        { title: "Perimeter Security", desc: "Controlling access to the facility perimeter — gates, fencing, and vehicle entry points." },
        { title: "Cargo & Stock Protection", desc: "Monitoring high-value stock areas, dispatch zones, and receiving docks." },
        { title: "Contractor Management", desc: "Vetting, logging, and escorting contractors and delivery drivers throughout the facility." },
        { title: "Internal Theft Prevention", desc: "Systems and officer deployment to reduce employee theft in high-risk warehouse environments." },
        { title: "Mobile Patrol Coverage", desc: "Regular patrol runs for facilities requiring security presence outside core hours." },
        { title: "Alarm Response", desc: "Rapid physical response to alarm activations at warehouses and distribution centres." },
        { title: "CCTV & Access Control", desc: "Integrated electronic security systems for comprehensive warehouse coverage." },
        { title: "Night Watch Officers", desc: "Overnight security for facilities with high-value stock or 24-hour operations." },
        { title: "Incident Investigation", desc: "Supporting internal investigations of stock discrepancies and suspected theft incidents." },
      ]}
      challenges={[
        "High-value stock and cargo attracting organised theft",
        "Multiple access points across large facilities",
        "Internal theft risk with large, high-turnover workforces",
        "24/7 operations requiring consistent security coverage",
        "Cargo staging areas vulnerable during loading and unloading",
        "Managing contractor and delivery driver access securely",
      ]}
      icon={
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      }
      breadcrumb="Warehousing"
      href="/sectors/warehousing"
    />
  );
}
