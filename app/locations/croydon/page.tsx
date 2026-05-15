import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Croydon | Maroondah Security Services Melbourne East",
  description: "Professional security guards in Croydon and Maroondah. Retail security, construction site security, mobile patrols, and alarm response in Melbourne's east.",
  alternates: { canonical: "/locations/croydon/" },
};

export default function CroydonPage() {
  return (
    <LocationPage
      suburb="Croydon"
      region="Eastern Suburbs"
      slug="croydon"
      intro="Security guard services for Croydon and the Maroondah area — retail precincts, construction sites, and commercial properties."
      description={[
        "Croydon is a major suburban centre in Melbourne's east — with a busy retail precinct, significant residential and commercial development, and growing demand for professional security services.",
        "Security Guard Company Melbourne provides retail security for Croydon Central and surrounding retail businesses, construction site security for the area's residential developments, and mobile patrol services for commercial and residential properties across Maroondah.",
      ]}
      services={[
        "Retail Security",
        "Construction Site Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Commercial Property Security",
        "After-Hours Security",
        "Subdivision Security",
        "CCTV Monitoring",
      ]}
      localContext="Croydon Central and the surrounding Croydon retail strip are the main retail security environments. The Maroondah municipality has significant residential growth generating construction security demand."
      nearbySuburbs={[
        { name: "Ringwood", href: "/locations/ringwood" },
        { name: "Mooroolbark", href: "/locations/mooroolbark" },
        { name: "Box Hill", href: "/locations/box-hill" },
        { name: "Mitcham", href: "/locations/mitcham" },
      ]}
    />
  );
}
