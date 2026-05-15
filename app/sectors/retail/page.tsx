import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Retail Security Melbourne | Security Guard Company Melbourne",
  description: "Professional retail security and loss prevention services for shopping centres, retail stores, and outlets across Melbourne.",
  alternates: { canonical: "/sectors/retail/" },
  openGraph: {
    title: "Retail Security Melbourne | Security Guard Company Melbourne",
    description: "Professional retail security and loss prevention services for shopping centres, retail stores, and outlets across Melbourne.",
    url: "https://securityguardcompanymelbourne.com/sectors/retail/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function RetailSectorPage() {
  return (
    <SectorPage
      name="Retail"
      breadcrumb="Retail"
      href="/sectors/retail"
      tagline="Loss Prevention Experts"
      intro="Retail theft and shrinkage cost Australian businesses billions each year. Our specialist retail security team helps you protect your stock, staff, and bottom line."
      description={[
        "The retail environment presents a constantly evolving set of security challenges. Organised retail crime, opportunistic theft, and aggressive incidents are on the rise — and the cost to retailers is significant.",
        "Our retail security officers are trained in effective loss prevention techniques that minimise shrinkage without alienating genuine customers. Whether in uniform or plainclothes, our team creates a visible deterrent while maintaining a welcoming store environment.",
        "From small boutiques to large-format stores and major shopping centres, we design retail security programs that fit your store layout, foot traffic, and risk profile.",
      ]}
      challenges={[
        "Organised retail crime and shoplifting rings",
        "Opportunistic and repeat offenders",
        "Staff safety and aggression incidents",
        "Self-checkout fraud and internal theft",
        "High-value merchandise protection",
        "Managing peak periods and sale events",
      ]}
      features={[
        { title: "Uniformed Guards", desc: "Visible deterrence with professional uniformed security officers at store entrances and key positions." },
        { title: "Plainclothes LP Officers", desc: "Discreet loss prevention operatives who blend in with shoppers while monitoring suspicious behaviour." },
        { title: "Bag Checking", desc: "Polite, professional bag and receipt checking at exit points to deter and detect theft." },
        { title: "CCTV Integration", desc: "Working alongside your CCTV systems to monitor and respond to suspicious activity in real time." },
        { title: "Incident Reporting", desc: "Detailed incident reports and evidence documentation to support police and prosecutions." },
        { title: "Staff Training", desc: "Training your retail team to identify suspicious behaviour and respond safely to incidents." },
      ]}
      icon={
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      }
    />
  );
}
