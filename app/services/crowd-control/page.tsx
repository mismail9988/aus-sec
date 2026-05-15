import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Crowd Control Melbourne | Licenced Crowd Controllers & Bouncers",
  description: "Licenced crowd controllers for Melbourne venues, nightclubs, bars, and events. RSA-endorsed, experienced, professional door staff.",
  alternates: { canonical: "/services/crowd-control/" },
};

export default function CrowdControlPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Crowd Control Melbourne"
      intro="Licenced, RSA-endorsed crowd controllers for Melbourne venues, nightclubs, bars, restaurants, and events."
      description={[
        "Crowd control is a specialist discipline requiring licenced security officers with specific endorsements under Victorian law. Security Guard Company Melbourne provides experienced crowd controllers for licensed venues, hospitality businesses, and public events across Melbourne.",
        "Our crowd controllers are fully licenced under the Private Security Act 2004 and hold the required crowd control endorsement. Every officer is trained in responsible service of alcohol (RSA), conflict de-escalation, physical intervention as a last resort, and the legal obligations of crowd controllers in Victoria.",
        "We understand the pressures of operating a licensed venue — from balancing patron experience with safety, to managing difficult situations in a legally compliant way. Our officers are selected for their communication skills and ability to de-escalate situations before they become incidents.",
      ]}
      features={[
        { title: "Door Staff", desc: "Experienced crowd controllers managing patron entry, ID checks, and capacity at licensed venues." },
        { title: "RSA Endorsement", desc: "All officers hold Responsible Service of Alcohol endorsements required for licensed venue work." },
        { title: "Conflict De-escalation", desc: "Trained to resolve patron disputes verbally before any physical intervention is required." },
        { title: "Capacity Management", desc: "Monitoring patron numbers and managing venue capacity for safety and compliance." },
        { title: "Incident Management", desc: "Professional incident response and documentation for licensing compliance and police reports." },
        { title: "Ejection Procedures", desc: "Lawful ejection of patrons in accordance with Victorian legislation and venue conditions." },
        { title: "VIP Area Management", desc: "Dedicated crowd controllers for VIP areas, backstage zones, and restricted sections." },
        { title: "Venue Liaison", desc: "Regular communication with venue managers and coordination with Victoria Police when required." },
        { title: "Late Night Coverage", desc: "Available for late-night and early-morning shifts when licensed venues need it most." },
      ]}
      whyChoose={[
        "Fully licenced with crowd control endorsement under Victorian law",
        "RSA-endorsed officers for licensed premises compliance",
        "Professional presentation — your venue's reputation matters to us",
        "Experienced in Melbourne's hospitality and entertainment precincts",
        "Available for short-notice shifts and ongoing weekly rosters",
        "Incident documentation to support licensing compliance",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Crowd Control", href: "/services/crowd-control" },
      ]}
      ctaTitle="Get Crowd Control for Your Venue"
      ctaSubtitle="Professional, licenced door staff — available 7 nights a week."
    />
  );
}
