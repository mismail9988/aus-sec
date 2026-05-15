import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards St Kilda | Venue & Event Security St Kilda Melbourne",
  description: "Professional security guards in St Kilda. Crowd control, venue security, event security, and mobile patrols for St Kilda's hospitality and entertainment precincts.",
  alternates: { canonical: "/locations/st-kilda/" },
};

export default function StKildaPage() {
  return (
    <LocationPage
      suburb="St Kilda"
      region="Melbourne CBD & Inner City"
      slug="st-kilda"
      intro="Professional security for St Kilda's hospitality venues, events, and entertainment precincts — crowd control, venue security, and after-hours mobile patrols."
      description={[
        "St Kilda is one of Melbourne's most vibrant and complex security environments — a mix of hospitality venues, entertainment precincts, major events, residential apartments, and tourist attractions, all operating across extended hours.",
        "Security Guard Company Melbourne provides crowd controllers and venue security for St Kilda's licensed premises, event security for foreshore events and festivals, mobile patrol services for residential and commercial properties, and after-hours security for retail and hospitality businesses.",
        "Our officers working in St Kilda hold the required crowd control endorsements, are RSA-endorsed for licensed venue work, and have experience managing the specific dynamics of Melbourne's most active entertainment precinct.",
      ]}
      services={[
        "Crowd Control & Door Staff",
        "Venue Security",
        "Event Security",
        "Mobile Patrol Services",
        "Retail Security",
        "After-Hours Security",
        "Residential Security",
        "Alarm Response",
      ]}
      localContext="The Acland Street, Fitzroy Street, and foreshore precincts all have significant security requirements — particularly for licensed venues, major events, and late-night retail. Our officers are familiar with St Kilda's environment and have strong working relationships with venue operators in the area."
      nearbySuburbs={[
        { name: "South Melbourne", href: "/locations/south-melbourne" },
        { name: "Richmond", href: "/locations/richmond" },
        { name: "Fitzroy", href: "/locations/fitzroy" },
        { name: "Port Melbourne", href: "/locations/port-melbourne" },
        { name: "Melbourne CBD", href: "/locations/melbourne-cbd" },
      ]}
    />
  );
}
