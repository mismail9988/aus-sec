import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Melbourne CBD | Professional Security Services City",
  description: "Licenced security guards in Melbourne CBD. Corporate security, concierge officers, mobile patrols, and event security for the city's businesses and buildings.",
  alternates: { canonical: "/locations/melbourne-cbd/" },
};

export default function MelbourneCBDPage() {
  return (
    <LocationPage
      suburb="Melbourne CBD"
      region="Melbourne CBD & Inner City"
      slug="melbourne-cbd"
      intro="Professional security guard services for Melbourne's central business district — corporate buildings, retail precincts, events, and more."
      description={[
        "Melbourne CBD is one of Australia's most dynamic and complex urban security environments. With a mix of corporate towers, retail precincts, hospitality venues, residential apartments, and major events, the demand for professional, experienced security personnel in the city is significant.",
        "Security Guard Company Melbourne provides the full range of security services in the CBD — from concierge security officers for corporate buildings to crowd management at major events, loss prevention in retail precincts, and mobile patrol services for businesses operating after hours.",
        "Our CBD-based officers understand the unique demands of working in Melbourne's city centre — from managing high volumes of foot traffic to liaising with Victoria Police and other agencies during major events. We're a familiar presence in the CBD and have built strong working relationships with building managers, venue operators, and event organisers throughout the city.",
      ]}
      services={[
        "Corporate Concierge Security",
        "Office Building Access Control",
        "Retail Loss Prevention",
        "Event Security & Crowd Management",
        "Mobile Patrol Services",
        "CCTV & Alarm Monitoring",
        "After-Hours Security",
        "Construction Site Security",
      ]}
      localContext="Melbourne CBD has some of Victoria's highest security demand — from Swanston Street retail to Collins Street corporate towers, from Flinders Street events to Docklands precincts. Our officers are based in and around the city, ensuring rapid response times and genuine local knowledge."
      nearbySuburbs={[
        { name: "Docklands", href: "/locations/docklands" },
        { name: "South Melbourne", href: "/locations/south-melbourne" },
        { name: "Fitzroy", href: "/locations/fitzroy" },
        { name: "Richmond", href: "/locations/richmond" },
        { name: "Collingwood", href: "/locations/collingwood" },
        { name: "Port Melbourne", href: "/locations/port-melbourne" },
      ]}
    />
  );
}
