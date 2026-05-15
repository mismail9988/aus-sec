import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Werribee | Western Suburbs Security Services",
  description: "Professional security guards in Werribee and Melbourne's outer west. Industrial security, construction site security, retail loss prevention, and mobile patrols.",
  alternates: { canonical: "/locations/werribee/" },
};

export default function WerribeePage() {
  return (
    <LocationPage
      suburb="Werribee"
      region="Western Suburbs"
      slug="werribee"
      intro="Professional security guard services for Werribee and Melbourne's rapidly growing outer western suburbs."
      description={[
        "Werribee and Melbourne's outer western corridor is one of Victoria's fastest-growing regions — with significant industrial development, housing construction, and retail growth. Security requirements in the area span construction site security, industrial estate protection, retail security, and mobile patrol services across an expanding suburban footprint.",
        "Security Guard Company Melbourne provides security guard services across Werribee, Hoppers Crossing, Wyndham Vale, and the surrounding western suburbs. Our western patrol team offers rapid response to alarm activations, regular patrol runs through industrial estates and construction sites, and static guard services for commercial properties.",
        "As one of Melbourne's fastest-growing areas, we've invested in western-based patrol resources to ensure genuine local coverage — not an extended metro route that can't deliver the response times businesses need.",
      ]}
      services={[
        "Construction Site Security",
        "Industrial Site Security",
        "Retail Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Subdivision & Development Security",
        "After-Hours Commercial Security",
        "CCTV Installation",
      ]}
      localContext="The Wyndham corridor has some of Victoria's highest rates of construction activity — and construction site theft is a significant issue throughout the western growth corridor. Our western team covers Werribee, Hoppers Crossing, Point Cook, and Wyndham Vale with locally-based patrol officers."
      nearbySuburbs={[
        { name: "Footscray", href: "/locations/footscray" },
        { name: "Sunshine", href: "/locations/sunshine" },
        { name: "Hoppers Crossing", href: "/locations/hoppers-crossing" },
        { name: "Point Cook", href: "/locations/point-cook" },
        { name: "Geelong", href: "/locations/geelong" },
      ]}
    />
  );
}
