import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Hoppers Crossing | Western Suburbs Security Melbourne",
  description: "Professional security guards in Hoppers Crossing and Wyndham. Retail security at Werribee Plaza, industrial security, mobile patrols, and alarm response.",
  alternates: { canonical: "/locations/hoppers-crossing/" },
};

export default function HoppersCrossingPage() {
  return (
    <LocationPage
      suburb="Hoppers Crossing"
      region="Western Suburbs"
      slug="hoppers-crossing"
      intro="Security guard services for Hoppers Crossing, Werribee, and the Wyndham growth corridor — retail, industrial, and construction security."
      description={[
        "Hoppers Crossing is home to Werribee Plaza — one of the western suburbs' largest shopping centres — alongside significant industrial businesses and rapidly expanding residential development throughout the Wyndham corridor.",
        "Security Guard Company Melbourne provides retail security for Werribee Plaza and surrounding retail, industrial site security for the area's commercial precincts, construction site security for the numerous housing developments, and mobile patrol services across Hoppers Crossing and surrounds.",
      ]}
      services={[
        "Retail Security & Loss Prevention",
        "Shopping Centre Security",
        "Industrial Site Security",
        "Construction Site Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "After-Hours Security",
        "Subdivision Security",
      ]}
      localContext="Werribee Plaza is a major retail security environment for the western suburbs. The Wyndham growth corridor has some of Victoria's highest residential construction rates — construction site theft is a significant issue throughout the area."
      nearbySuburbs={[
        { name: "Werribee", href: "/locations/werribee" },
        { name: "Point Cook", href: "/locations/point-cook" },
        { name: "Sunshine", href: "/locations/sunshine" },
        { name: "Footscray", href: "/locations/footscray" },
      ]}
    />
  );
}
