import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Port Melbourne | Commercial & Industrial Security",
  description: "Professional security guards in Port Melbourne. Industrial port security, commercial property security, mobile patrols, and residential building security.",
  alternates: { canonical: "/locations/port-melbourne/" },
  openGraph: {
    title: "Security Guards Port Melbourne | Commercial & Industrial Security",
    description: "Professional security guards in Port Melbourne. Industrial port security, commercial property security, mobile patrols, and residential building security.",
    url: "https://securityguardcompanymelbourne.com/locations/port-melbourne/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function PortMelbournePage() {
  return (
    <LocationPage
      suburb="Port Melbourne"
      region="Melbourne CBD & Inner City"
      slug="port-melbourne"
      intro="Security guard services for Port Melbourne's industrial port precinct, commercial businesses, and waterfront residential developments."
      description={[
        "Port Melbourne encompasses both the Port of Melbourne — Australia's busiest container port — and a growing residential and commercial precinct along the waterfront. Security requirements in the area span high-security port operations, commercial and industrial businesses, and residential property security.",
        "Security Guard Company Melbourne provides security services across Port Melbourne — from commercial businesses and light industrial properties to residential apartment buildings. Our inner-south patrol team covers Port Melbourne, South Melbourne, and the surrounding waterfront precincts.",
      ]}
      services={[
        "Industrial & Commercial Security",
        "Residential Building Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "After-Hours Security",
        "CCTV Installation & Monitoring",
        "Access Control Systems",
        "Construction Site Security",
      ]}
      localContext="Port Melbourne has a mix of light industrial businesses along the waterfront, growing residential apartment towers, and the Port of Melbourne logistics precinct. Our inner-south patrol covers Port Melbourne, South Melbourne, and Albert Park."
      nearbySuburbs={[
        { name: "South Melbourne", href: "/locations/south-melbourne" },
        { name: "Melbourne CBD", href: "/locations/melbourne-cbd" },
        { name: "Docklands", href: "/locations/docklands" },
        { name: "St Kilda", href: "/locations/st-kilda" },
      ]}
    />
  );
}
