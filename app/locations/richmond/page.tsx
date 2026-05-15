import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Richmond Melbourne | Commercial & Venue Security",
  description: "Professional security guards in Richmond. Retail security on Bridge Road and Swan Street, venue security, mobile patrols, and commercial property security.",
  alternates: { canonical: "/locations/richmond/" },
  openGraph: {
    title: "Security Guards Richmond Melbourne | Commercial & Venue Security",
    description: "Professional security guards in Richmond. Retail security on Bridge Road and Swan Street, venue security, mobile patrols, and commercial property security.",
    url: "https://securityguardcompanymelbourne.com/locations/richmond/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function RichmondPage() {
  return (
    <LocationPage
      suburb="Richmond"
      region="Melbourne CBD & Inner City"
      slug="richmond"
      intro="Security guard services for Richmond's retail precincts, commercial offices, hospitality venues, and residential buildings."
      description={[
        "Richmond is one of Melbourne's most densely populated and commercially active inner suburbs — a mix of retail strips along Bridge Road and Swan Street, corporate offices and tech businesses, hospitality venues, and residential apartments.",
        "Security Guard Company Melbourne provides retail security for Richmond's major retail precincts, crowd control for licensed venues on Swan Street, mobile patrol services for commercial and residential properties, and concierge security for office buildings throughout the suburb.",
        "Our inner-east patrol team provides rapid response across Richmond, Cremorne, Abbotsford, and Hawthorn — all from locally-based officers who know the area.",
      ]}
      services={[
        "Retail Security & Loss Prevention",
        "Crowd Control for Venues",
        "Mobile Patrol Services",
        "Commercial Property Security",
        "After-Hours Security",
        "Alarm Response",
        "Corporate Office Security",
        "Construction Site Security",
      ]}
      localContext="Bridge Road and Swan Street are two of Melbourne's busiest retail and hospitality strips — with security demands ranging from retail loss prevention during the day to crowd management at licensed venues in the evening. Our inner-east team covers Richmond, Cremorne, Hawthorn, and Abbotsford."
      nearbySuburbs={[
        { name: "Melbourne CBD", href: "/locations/melbourne-cbd" },
        { name: "Fitzroy", href: "/locations/fitzroy" },
        { name: "Collingwood", href: "/locations/collingwood" },
        { name: "South Melbourne", href: "/locations/south-melbourne" },
        { name: "St Kilda", href: "/locations/st-kilda" },
      ]}
    />
  );
}
