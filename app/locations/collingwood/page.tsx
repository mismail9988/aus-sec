import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Collingwood | Venue & Commercial Security Melbourne",
  description: "Professional security guards in Collingwood. Venue security, crowd control on Smith Street, retail security, mobile patrols, and commercial property security.",
  alternates: { canonical: "/locations/collingwood/" },
};

export default function CollingwoodPage() {
  return (
    <LocationPage
      suburb="Collingwood"
      region="Melbourne CBD & Inner City"
      slug="collingwood"
      intro="Security guard services for Collingwood's hospitality precincts, retail businesses, commercial offices, and light industrial properties."
      description={[
        "Collingwood has evolved from a light-industrial suburb to one of Melbourne's most active hospitality and creative precincts. Smith Street is now one of the city's busiest bar and restaurant strips, and the suburb is home to significant creative offices, retail, and residential development.",
        "Security Guard Company Melbourne provides crowd control for Collingwood's licensed venues, retail security along Smith Street, mobile patrol services across the commercial and residential areas, and after-hours security for the suburb's industrial and commercial properties.",
        "Our inner-north team covers Collingwood, Fitzroy, Abbotsford, and Clifton Hill — providing consistent security coverage across one of Melbourne's most active urban precincts.",
      ]}
      services={[
        "Crowd Control & Door Staff",
        "Venue Security",
        "Retail Security",
        "Mobile Patrol Services",
        "After-Hours Security",
        "Alarm Response",
        "Commercial Property Security",
        "Construction Site Security",
      ]}
      localContext="Smith Street is one of Melbourne's busiest hospitality strips, with significant demand for crowd control and venue security. The surrounding light-industrial and commercial buildings also generate consistent after-hours security requirements."
      nearbySuburbs={[
        { name: "Fitzroy", href: "/locations/fitzroy" },
        { name: "Richmond", href: "/locations/richmond" },
        { name: "Melbourne CBD", href: "/locations/melbourne-cbd" },
        { name: "Coburg", href: "/locations/coburg" },
      ]}
    />
  );
}
