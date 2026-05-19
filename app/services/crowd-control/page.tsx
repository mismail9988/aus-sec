import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Crowd Control Melbourne | Licenced Crowd Controllers & Bouncers",
  description: "Licenced crowd controllers for Melbourne venues, nightclubs, bars, and events. RSA-endorsed, experienced, professional door staff.",
  alternates: { canonical: "/services/crowd-control/" },
  openGraph: {
    title: "Crowd Control Melbourne | Licenced Crowd Controllers & Bouncers",
    description: "Licenced crowd controllers for Melbourne venues, nightclubs, bars, and events. RSA-endorsed, experienced, professional door staff.",
    url: "https://securityguardcompanymelbourne.com/services/crowd-control/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function CrowdControlPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Crowd Control Melbourne"
      intro="Licenced, RSA-endorsed crowd controllers for Melbourne venues, nightclubs, bars, restaurants, and events."
      description={[
        "Crowd control needs licenced guards with specific endorsements under Victorian law. Security Guard Company Melbourne provides experienced crowd controllers for licensed venues, hospitality businesses, and public events across Melbourne.",
        "Our crowd controllers are fully licenced under the Private Security Act 2004 with the required endorsement. Every officer is trained in RSA, conflict de-escalation, physical intervention as a last resort, and the legal duties of crowd controllers in Victoria.",
        "We understand running a licensed venue — balancing patron experience with safety and handling situations the right way. Our officers are chosen for their communication skills and ability to de-escalate before things get serious.",
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
      bookingHref="/book/crowd-control/"
      ctaTitle="Get Crowd Control for Your Venue"
      ctaSubtitle="Professional, licenced door staff — available 7 nights a week."
      testimonial={{
        text: "We run three licensed venues and have used them for crowd control across all three. Their officers are licenced, professional, and know how to manage difficult situations without escalating them. RSA compliance is taken seriously. I've referred them to three other venue operators — all happy.",
        name: "Lisa Nguyen",
        role: "Venue Manager — Chapel Street Entertainment Group",
      }}
      faqs={[
        { q: "Are your crowd controllers licenced in Victoria?", a: "Yes. All our crowd controllers hold a current Victoria security licence with a crowd management endorsement, as required under the Private Security Act 2004 for licensed venue work." },
        { q: "What's the minimum booking for crowd control?", a: "Most venue engagements have a 4-hour minimum per officer per shift. For regular bookings we offer ongoing arrangements that are more cost-effective than ad hoc bookings." },
        { q: "Do your crowd controllers understand RSA obligations?", a: "Yes. Our officers working at licensed premises understand their Responsible Service of Alcohol obligations and work cooperatively with venue staff to uphold these standards." },
        { q: "Can you provide last-minute crowd control?", a: "We do our best to accommodate urgent requests. For weekend nights, we recommend booking at least 48 hours in advance. For very last-minute needs, call us directly — we often have availability." },
      ]}
    />
  );
}
