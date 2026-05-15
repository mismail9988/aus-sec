import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards South Melbourne | Corporate & Commercial Security",
  description: "Professional security guards in South Melbourne. Corporate security, concierge officers, mobile patrols, and alarm response for South Melbourne businesses.",
  alternates: { canonical: "/locations/south-melbourne/" },
  openGraph: {
    title: "Security Guards South Melbourne | Corporate & Commercial Security",
    description: "Professional security guards in South Melbourne. Corporate security, concierge officers, mobile patrols, and alarm response for South Melbourne businesses.",
    url: "https://securityguardcompanymelbourne.com/locations/south-melbourne/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function SouthMelbournePage() {
  return (
    <LocationPage
      suburb="South Melbourne"
      region="Melbourne CBD & Inner City"
      slug="south-melbourne"
      intro="Professional security services for South Melbourne's corporate offices, commercial precincts, and residential developments."
      description={[
        "South Melbourne is a densely commercial suburb bridging the CBD and Port Phillip Bay — home to corporate offices, the South Melbourne Market, logistics businesses, and a growing residential population. The suburb's mix of uses creates varied security requirements across different times of day.",
        "Security Guard Company Melbourne provides corporate concierge security for South Melbourne's office buildings, loss prevention services for the South Melbourne Market and retail precinct, mobile patrol services, and alarm response for businesses and residential properties.",
        "Our South Melbourne deployments are typically a mix of corporate concierge for daytime office buildings and mobile patrol/alarm response for after-hours commercial premises.",
      ]}
      services={[
        "Corporate Concierge Security",
        "Office Building Security",
        "Retail & Market Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "After-Hours Building Security",
        "Construction Site Security",
        "CCTV Monitoring",
      ]}
      localContext="South Melbourne Market is one of Melbourne's busiest retail environments, and the surrounding office precinct along Clarendon Street is a significant corporate security zone. Our inner-south patrol team covers South Melbourne, Port Melbourne, and Albert Park."
      nearbySuburbs={[
        { name: "Melbourne CBD", href: "/locations/melbourne-cbd" },
        { name: "Port Melbourne", href: "/locations/port-melbourne" },
        { name: "St Kilda", href: "/locations/st-kilda" },
        { name: "Richmond", href: "/locations/richmond" },
        { name: "Docklands", href: "/locations/docklands" },
      ]}
    />
  );
}
