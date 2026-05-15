import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Transport Security Melbourne | Rail, Bus & Infrastructure Security",
  description: "Professional security services for Melbourne's transport sector. Rail station security, bus terminus security, transport hub protection, and passenger safety.",
  alternates: { canonical: "/sectors/transport/" },
  openGraph: {
    title: "Transport Security Melbourne | Rail, Bus & Infrastructure Security",
    description: "Professional security services for Melbourne's transport sector. Rail station security, bus terminus security, transport hub protection, and passenger safety.",
    url: "https://securityguardcompanymelbourne.com/sectors/transport/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function TransportPage() {
  return (
    <SectorPage
      name="Transport Security"
      tagline="Securing Melbourne's Transport Network"
      intro="Professional security for transport hubs, rail stations, bus interchanges, and transport infrastructure across Melbourne and Victoria."
      description={[
        "Transport infrastructure presents unique security challenges — high passenger volumes, 24/7 operations, diverse and transient populations, and significant public safety obligations. Security in transport environments requires officers who can manage public-facing situations with professionalism and authority.",
        "Security Guard Company Melbourne provides security services for transport hubs, rail station precincts, bus interchanges, and transport-related infrastructure. Our transport security officers are trained in public-order management, conflict de-escalation in high-volume environments, and coordination with Victoria Police and transport operations teams.",
        "We understand that transport security serves a dual function — deterring and responding to security incidents while also reassuring legitimate passengers that the network is safe and well-managed.",
      ]}
      features={[
        { title: "Station Security", desc: "Uniformed presence at rail stations and transport hubs to deter anti-social behaviour and respond to incidents." },
        { title: "Passenger Safety", desc: "Managing passenger safety at crowded interchanges and during peak period congestion." },
        { title: "Anti-Social Behaviour", desc: "Intervention and de-escalation of anti-social behaviour including fare evasion, harassment, and intoxication." },
        { title: "CCTV Monitoring", desc: "Real-time monitoring of transport CCTV systems to identify and respond to incidents proactively." },
        { title: "Emergency Response", desc: "First response to medical emergencies, altercations, and other incidents on transport property." },
        { title: "Infrastructure Protection", desc: "Security for transport infrastructure, depots, and maintenance facilities outside passenger-facing areas." },
        { title: "Night Operations", desc: "After-hours security for stations, depots, and transport precincts during low-service periods." },
        { title: "Event Transport", desc: "Security management for stations and stops serving major events and high-volume passenger surges." },
        { title: "Patrol Services", desc: "Mobile patrol coverage for transport infrastructure across Melbourne and regional Victoria." },
      ]}
      challenges={[
        "Managing diverse, transient passenger populations across 24/7 operations",
        "Anti-social behaviour including fare evasion, intoxication, and harassment",
        "Responding to medical emergencies in public transport environments",
        "Coordinating with Victoria Police and transport operations teams",
        "Managing security during major events and peak passenger surges",
        "Protecting transport infrastructure from vandalism and trespass",
      ]}
      icon={
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      }
      breadcrumb="Transport"
      href="/sectors/transport"
    />
  );
}
