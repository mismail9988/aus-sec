import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Coburg | Inner North Security Services Melbourne",
  description: "Professional security guards in Coburg and Brunswick. Retail security on Sydney Road, venue security, mobile patrols, and commercial property security.",
  alternates: { canonical: "/locations/coburg/" },
};

export default function CoburgPage() {
  return (
    <LocationPage
      suburb="Coburg"
      region="Northern Suburbs"
      slug="coburg"
      intro="Security guard services for Coburg and Brunswick — retail security on Sydney Road, venue crowd control, and commercial property patrols."
      description={[
        "Coburg and Brunswick are inner-northern suburbs with bustling retail and hospitality precincts along Sydney Road, growing residential development, and a mix of commercial and light industrial businesses.",
        "Security Guard Company Melbourne provides retail security along Sydney Road and the Coburg precinct, crowd control for licensed venues in Brunswick and Coburg, and mobile patrol services for the area's commercial and residential properties.",
        "Our inner-north team covers Coburg, Brunswick, Brunswick East, and Fawkner — all from locally-based officers.",
      ]}
      services={[
        "Retail Security",
        "Crowd Control for Venues",
        "Mobile Patrol Services",
        "Alarm Response",
        "Commercial Property Security",
        "After-Hours Security",
        "Residential Building Security",
        "Construction Site Security",
      ]}
      localContext="Sydney Road is one of Melbourne's longest and most active retail and hospitality strips. Coburg's retail precinct and the Brunswick bar and restaurant scene both generate consistent security requirements."
      nearbySuburbs={[
        { name: "Fitzroy", href: "/locations/fitzroy" },
        { name: "Reservoir", href: "/locations/reservoir" },
        { name: "Broadmeadows", href: "/locations/broadmeadows" },
        { name: "Thomastown", href: "/locations/thomastown" },
      ]}
    />
  );
}
