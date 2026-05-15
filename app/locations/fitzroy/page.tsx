import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Fitzroy Melbourne | Venue & Commercial Security",
  description: "Professional security guards in Fitzroy and Collingwood. Venue crowd control, retail security on Brunswick Street, mobile patrols, and commercial property security.",
  alternates: { canonical: "/locations/fitzroy/" },
};

export default function FitzroyPage() {
  return (
    <LocationPage
      suburb="Fitzroy"
      region="Melbourne CBD & Inner City"
      slug="fitzroy"
      intro="Security guard services for Fitzroy's hospitality venues, retail precincts, creative offices, and residential buildings."
      description={[
        "Fitzroy is Melbourne's creative and hospitality hub — with a high concentration of licensed venues, galleries, offices, and retail businesses along Brunswick Street and Smith Street. Security requirements in Fitzroy typically centre on venue crowd management, retail security, and after-hours mobile patrols.",
        "Security Guard Company Melbourne provides crowd control and door staff for Fitzroy's licensed venues, retail security along Brunswick Street, mobile patrol services covering the residential and commercial areas, and after-hours security for commercial properties.",
        "Our officers working in Fitzroy understand the suburb's unique character and the expectations of both venue operators and the local community.",
      ]}
      services={[
        "Crowd Control & Door Staff",
        "Venue Security",
        "Retail Security",
        "Mobile Patrol Services",
        "After-Hours Security",
        "Alarm Response",
        "Office & Commercial Security",
        "Residential Building Security",
      ]}
      localContext="Brunswick Street and Smith Street are two of Melbourne's most active hospitality strips. Our inner-north team covers Fitzroy, Collingwood, Abbotsford, and Carlton — with officers experienced in the specific demands of the area's licensed venue precinct."
      nearbySuburbs={[
        { name: "Melbourne CBD", href: "/locations/melbourne-cbd" },
        { name: "Collingwood", href: "/locations/collingwood" },
        { name: "Richmond", href: "/locations/richmond" },
        { name: "Coburg", href: "/locations/coburg" },
      ]}
    />
  );
}
