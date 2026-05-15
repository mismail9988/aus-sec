import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Cranbourne | South East Melbourne Security Services",
  description: "Professional security guards in Cranbourne. Retail security, construction site security, mobile patrols, and alarm response in Melbourne's south-east growth corridor.",
  alternates: { canonical: "/locations/cranbourne/" },
  openGraph: {
    title: "Security Guards Cranbourne | South East Melbourne Security Services",
    description: "Professional security guards in Cranbourne. Retail security, construction site security, mobile patrols, and alarm response in Melbourne's south-east growth corridor.",
    url: "https://securityguardcompanymelbourne.com/locations/cranbourne/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function CranbournePage() {
  return (
    <LocationPage
      suburb="Cranbourne"
      region="South Eastern Suburbs"
      slug="cranbourne"
      intro="Security guard services for Cranbourne's retail precincts, construction sites, and growing commercial areas in Melbourne's south-east."
      description={[
        "Cranbourne is a rapidly growing south-eastern suburb with a major retail precinct anchored by Cranbourne Park Shopping Centre, significant construction activity, and growing industrial development along the South Gippsland Highway corridor.",
        "Security Guard Company Melbourne provides retail loss prevention for Cranbourne's shopping centres, construction site security for the numerous residential developments in Cranbourne East and Clyde North, and mobile patrol services for commercial and residential properties.",
      ]}
      services={[
        "Retail Security & Loss Prevention",
        "Construction Site Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Industrial Site Security",
        "After-Hours Security",
        "Subdivision Security",
        "CCTV Monitoring",
      ]}
      localContext="Cranbourne Park Shopping Centre is a major retail security environment. The Cranbourne East, Clyde, and Clyde North growth precincts have extensive construction security requirements. Our south-east patrol covers Cranbourne, Clyde, and Clyde North."
      nearbySuburbs={[
        { name: "Berwick", href: "/locations/berwick" },
        { name: "Pakenham", href: "/locations/pakenham" },
        { name: "Frankston", href: "/locations/frankston" },
        { name: "Dandenong", href: "/locations/dandenong" },
      ]}
    />
  );
}
