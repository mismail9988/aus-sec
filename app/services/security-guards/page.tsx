import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Security Guards Melbourne | Professional Licenced Security Officers",
  description: "Hire professional, Victoria Police–licenced security guards in Melbourne. Uniformed static guards for corporate, retail, construction, events and more.",
  alternates: { canonical: "/services/security-guards/" },
  openGraph: {
    title: "Security Guards Melbourne | Professional Licenced Security Officers",
    description: "Hire professional, Victoria Police–licenced security guards in Melbourne. Uniformed static guards for corporate, retail, construction, events and more.",
    url: "https://securityguardcompanymelbourne.com/services/security-guards/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function SecurityGuardsPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Security Guards Melbourne"
      intro="Professional, Victoria Police–licenced security guards for businesses across Melbourne and Victoria. Uniformed, trained, and available 24/7."
      description={[
        "Security Guard Company Melbourne provides fully licenced, uniformed security guards for commercial, retail, industrial, and residential sites. Every guard holds a current Victorian Security Licence and has passed background checks, reference verification, and our internal training program.",
        "Our guards are more than a uniform at the door. They&apos;re trained in conflict de-escalation, emergency response, first aid, and your industry&apos;s specific requirements. Need one officer or a full team? We have the resources to staff your site properly.",
        "Every client&apos;s needs are different. We take time to understand your site and risks before we deploy — so the officer we send is the right fit for your environment.",
      ]}
      features={[
        { title: "Uniformed Static Guards", desc: "Visible deterrence and professional presence at your site entrance, lobby, or any fixed post." },
        { title: "Access Control", desc: "Managing visitor and contractor access, verifying credentials, and maintaining site access logs." },
        { title: "Concierge Security", desc: "Front-of-house security officers who combine security with a professional, customer-facing role." },
        { title: "Loss Prevention Officers", desc: "Plainclothes or uniformed officers working to reduce theft and shrinkage in retail environments." },
        { title: "Emergency Response", desc: "Officers trained to respond to medical emergencies, fire evacuations, and other on-site incidents." },
        { title: "Report Writing", desc: "Detailed daily activity reports and incident reports, delivered digitally after every shift." },
        { title: "Overnight & Weekends", desc: "Round-the-clock cover for sites requiring 24/7 or after-hours security presence." },
        { title: "Short & Long Term", desc: "Flexible arrangements from a single shift to permanent ongoing contracts — no lock-in required." },
        { title: "Industry-Specific Training", desc: "Guards briefed and trained on the specific requirements of your industry and site procedures." },
      ]}
      whyChoose={[
        "All officers hold current Victoria Police Security Licences",
        "Comprehensive vetting: background checks and reference verification",
        "Internal training program beyond minimum licensing requirements",
        "Real-time GPS tracking and digital reporting",
        "24/7 operations centre for officer support and incident management",
        "Fully insured with $20M+ public liability coverage",
        "No lock-in contracts — flexible to your needs",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Security Guards", href: "/services/security-guards" },
      ]}
      ctaTitle="Get a Security Guard Quote"
      ctaSubtitle="Fast response. Competitive pricing. No lock-in contracts."
    />
  );
}
