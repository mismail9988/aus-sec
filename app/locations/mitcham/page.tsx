import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Mitcham | Whitehorse Security Services Melbourne East",
  description: "Professional security guards in Mitcham and Whitehorse. Retail security, commercial property security, mobile patrols, and alarm response.",
  alternates: { canonical: "/locations/mitcham/" },
  openGraph: {
    title: "Security Guards Mitcham | Whitehorse Security Services Melbourne East",
    description: "Professional security guards in Mitcham and Whitehorse. Retail security, commercial property security, mobile patrols, and alarm response.",
    url: "https://securityguardcompanymelbourne.com/locations/mitcham/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function MitchamPage() {
  return (
    <LocationPage
      suburb="Mitcham"
      region="Eastern Suburbs"
      slug="mitcham"
      intro="Security guard services for Mitcham and the City of Whitehorse — retail security, commercial property security, and mobile patrols."
      description={[
        "Mitcham and the surrounding Whitehorse area offer a mix of retail, commercial, and light industrial businesses. The suburb's retail strip and commercial precincts generate consistent security requirements across loss prevention, after-hours security, and mobile patrol services.",
        "Security Guard Company Melbourne provides retail and commercial security across Mitcham and the broader Whitehorse municipality, with coverage extending to Nunawading, Vermont, and Forest Hill.",
      ]}
      services={[
        "Retail Security",
        "Commercial Property Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "After-Hours Security",
        "Industrial Site Security",
        "CCTV Monitoring",
        "Access Control Systems",
      ]}
      localContext="The Mitcham retail and commercial precinct and surrounding Whitehorse commercial areas generate regular security requirements. Our east team covers Mitcham, Nunawading, Vermont, and Forest Hill."
      nearbySuburbs={[
        { name: "Box Hill", href: "/locations/box-hill" },
        { name: "Ringwood", href: "/locations/ringwood" },
        { name: "Croydon", href: "/locations/croydon" },
        { name: "Glen Waverley", href: "/locations/glen-waverley" },
      ]}
    />
  );
}
