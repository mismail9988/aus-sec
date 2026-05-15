import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Retail Security Melbourne | Loss Prevention & Store Security Guards",
  description: "Professional retail security and loss prevention in Melbourne. Reduce theft, protect staff, and improve store safety with licenced retail security officers.",
  alternates: { canonical: "/services/retail-security/" },
};

export default function RetailSecurityPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Retail Security & Loss Prevention"
      intro="Reduce theft, protect your staff, and improve the safety of your retail environment with professional loss prevention officers across Melbourne."
      description={[
        "Retail theft is one of the most significant and controllable cost centres for retailers. Security Guard Company Melbourne provides specialist retail security and loss prevention services that directly reduce shrinkage, deter opportunistic theft, and protect your staff.",
        "Our retail security officers are trained specifically for the retail environment — balancing visible deterrence with a customer-service mindset. Whether deployed in plainclothes as store detectives or in uniform at the entrance, our officers understand how to identify theft behaviours, respond appropriately, and manage incidents in compliance with Victorian law.",
        "We work with retail clients to understand their specific loss patterns, peak risk periods, and product categories — allowing us to deploy our officers in the most effective way for your store.",
      ]}
      features={[
        { title: "Loss Prevention Officers", desc: "Plainclothes store detectives monitoring for theft behaviours without alerting offenders." },
        { title: "Uniformed Guard Presence", desc: "Visible uniformed security officers providing deterrence at store entrances and high-value areas." },
        { title: "Bag Checking", desc: "Bag and receipt checking services at exit points to deter and detect theft." },
        { title: "Staff Safety", desc: "Protecting retail staff from customer aggression and providing a safer working environment." },
        { title: "CCTV Monitoring", desc: "In-store CCTV monitoring to support loss prevention and incident investigation." },
        { title: "Incident Management", desc: "Proper lawful apprehension procedures and incident documentation for police and insurance purposes." },
        { title: "Theft Reporting", desc: "Detailed loss prevention reports including apprehensions, intelligence, and trend analysis." },
        { title: "After-Hours Security", desc: "Overnight and after-hours security for retail premises with high-value stock or cash handling." },
        { title: "Multi-Site Management", desc: "Coordinated security across retail chains with centralised reporting and consistent standards." },
      ]}
      whyChoose={[
        "Measurable shrinkage reduction — we track and report results",
        "Officers trained in Victorian retail crime legislation",
        "Lawful apprehension procedures — no civil liability exposure",
        "Customer-service focused — won't deter genuine shoppers",
        "Flexible deployment: peak hours, all-day, or overnight",
        "Experience across supermarkets, fashion, electronics, and liquor retail",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Retail Security", href: "/services/retail-security" },
      ]}
      ctaTitle="Reduce Retail Theft Today"
      ctaSubtitle="Get a loss prevention assessment and quote for your store."
    />
  );
}
