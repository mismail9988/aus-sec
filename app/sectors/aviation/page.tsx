import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Aviation Security Melbourne | Security Guard Company Melbourne",
  description: "Specialist aviation security personnel for airports, cargo facilities, and aviation precincts across Melbourne and Victoria.",
  alternates: { canonical: "/sectors/aviation/" },
};

export default function AviationSectorPage() {
  return (
    <SectorPage
      name="Aviation & Airport"
      breadcrumb="Aviation"
      href="/sectors/aviation"
      tagline="Specialist Aviation Security"
      intro="Aviation security demands the highest standards of training, compliance, and reliability. We meet and exceed those standards."
      description={[
        "The aviation sector operates under strict regulatory frameworks that demand security personnel with specialist training, clearances, and an unwavering commitment to compliance. Any lapse in aviation security can have serious consequences.",
        "Our aviation security officers hold the required Aviation Security Identification Cards (ASICs) and are trained in aviation-specific security procedures, threat assessment, and access control for restricted airside and landside areas.",
        "We provide security services across airport terminals, cargo precincts, general aviation facilities, and aviation-related commercial zones.",
      ]}
      challenges={[
        "Compliance with CASA and ASIO aviation security regulations",
        "Managing ASIC-controlled access to restricted airside areas",
        "High-volume passenger screening and queue management",
        "Cargo facility security and screening",
        "24/7 operations across all shifts and weather conditions",
        "Rapid response to security incidents and threats",
      ]}
      features={[
        { title: "ASIC-Cleared Personnel", desc: "All aviation security officers hold current Aviation Security Identification Cards (ASICs)." },
        { title: "Airside Access Control", desc: "Strictly controlled access management for restricted airside zones and secure areas." },
        { title: "Cargo Security", desc: "Security screening and monitoring for air cargo facilities and freight operations." },
        { title: "Terminal Security", desc: "Passenger-facing security in terminal landside areas, car parks, and retail zones." },
        { title: "24/7 Operations", desc: "Round-the-clock coverage across all shifts to support continuous aviation operations." },
        { title: "Regulatory Compliance", desc: "Full compliance with all applicable CASA, ASIO, and airport operator security requirements." },
      ]}
      icon={
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      }
    />
  );
}
