import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Sunshine | Western Suburbs Security Services Melbourne",
  description: "Professional security guards in Sunshine and Brimbank. Retail security, industrial site security, mobile patrols, and alarm response in Melbourne's west.",
  alternates: { canonical: "/locations/sunshine/" },
};

export default function SunshinePage() {
  return (
    <LocationPage
      suburb="Sunshine"
      region="Western Suburbs"
      slug="sunshine"
      intro="Security guard services for Sunshine's retail precincts, industrial businesses, commercial properties, and residential areas."
      description={[
        "Sunshine is a major activity centre and transport hub in Melbourne's inner west — with a busy retail precinct anchored by Sunshine Marketplace, significant industrial businesses, and strong community and residential activity.",
        "Security Guard Company Melbourne provides retail security for Sunshine's shopping precincts, industrial site security for the commercial areas around Ashley Street and Hampshire Road, mobile patrol services, and alarm response across the Brimbank local government area.",
        "Our western patrol team covers Sunshine, Albion, St Albans, and Deer Park — with locally-based officers who provide genuine rapid response.",
      ]}
      services={[
        "Retail Security & Loss Prevention",
        "Industrial Site Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Commercial Property Security",
        "After-Hours Security",
        "Construction Site Security",
        "CCTV Monitoring",
      ]}
      localContext="Sunshine Marketplace and the surrounding retail precinct have consistent security requirements. The industrial areas around Ashley Street, Hampshire Road, and Sunshine North have significant after-hours security demand. Our western team covers the Brimbank municipality."
      nearbySuburbs={[
        { name: "Footscray", href: "/locations/footscray" },
        { name: "Werribee", href: "/locations/werribee" },
        { name: "Broadmeadows", href: "/locations/broadmeadows" },
        { name: "Hoppers Crossing", href: "/locations/hoppers-crossing" },
      ]}
    />
  );
}
