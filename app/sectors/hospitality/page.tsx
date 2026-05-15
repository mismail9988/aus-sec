import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Hospitality Security Melbourne | Venue & Hotel Security Services",
  description: "Professional security for Melbourne's hospitality sector. Hotel security, venue crowd control, restaurant and bar security, and event security for hospitality businesses.",
  alternates: { canonical: "/sectors/hospitality/" },
  openGraph: {
    title: "Hospitality Security Melbourne | Venue & Hotel Security Services",
    description: "Professional security for Melbourne's hospitality sector. Hotel security, venue crowd control, restaurant and bar security, and event security for hospitality businesses.",
    url: "https://securityguardcompanymelbourne.com/sectors/hospitality/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function HospitalityPage() {
  return (
    <SectorPage
      name="Hospitality Security"
      tagline="Protecting Melbourne's Hospitality Sector"
      intro="Professional security services for hotels, restaurants, bars, nightclubs, and hospitality venues across Melbourne."
      description={[
        "Melbourne's hospitality sector is one of the city's most vibrant — and one of its most complex security environments. Licensed venues, late-night operations, large patron volumes, and the need to balance security with exceptional guest experience all create unique challenges.",
        "Security Guard Company Melbourne provides hospitality security that understands the balance between effective security and the guest experience your business works hard to deliver. Our hospitality security officers are trained in conflict de-escalation, responsible service of alcohol protocols, and the specific legal obligations that apply to licensed premises in Victoria.",
        "Whether you operate a boutique hotel, a CBD cocktail bar, a large nightclub, or a major entertainment venue, we tailor our security approach to your specific operation — not a generic one-size-fits-all solution.",
      ]}
      features={[
        { title: "Hotel Security", desc: "Front desk security officers, room patrol, asset protection, and guest safety management for hotels." },
        { title: "Crowd Control", desc: "RSA-endorsed crowd controllers for licensed premises — managing patron entry, behaviour, and ejections lawfully." },
        { title: "Event Management", desc: "Security planning and staffing for venue events, private functions, and large-scale hospitality events." },
        { title: "Bar & Restaurant Security", desc: "Uniformed and plainclothes officers for dining and drinking venues, balancing visibility with ambience." },
        { title: "Late Night Operations", desc: "Experienced door staff and roving officers for venues operating beyond midnight." },
        { title: "VIP Management", desc: "Discrete protection and access management for VIP guests and performers." },
        { title: "Staff Duress Support", desc: "Emergency response for staff facing aggressive or threatening patrons." },
        { title: "Incident Documentation", desc: "Proper incident reports for licensing compliance, police reports, and insurance claims." },
        { title: "Liquor Licensing Support", desc: "Security management plans and compliance documentation to support licensing applications." },
      ]}
      challenges={[
        "Managing intoxicated patrons safely and lawfully",
        "Maintaining a welcoming atmosphere while providing genuine security",
        "RSA and liquor licensing compliance requirements",
        "Late-night operations requiring officers with stamina and experience",
        "Balancing guest privacy with security monitoring in hotel environments",
        "Managing high-profile guests and events discreetly",
      ]}
      icon={
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      }
      breadcrumb="Hospitality"
      href="/sectors/hospitality"
    />
  );
}
