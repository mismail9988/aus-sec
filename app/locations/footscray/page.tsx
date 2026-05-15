import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Footscray | Western Inner Suburbs Security Services",
  description: "Professional security guards in Footscray and Melbourne's inner west. Retail security, venue crowd control, mobile patrols, and commercial property security.",
  alternates: { canonical: "/locations/footscray/" },
  openGraph: {
    title: "Security Guards Footscray | Western Inner Suburbs Security Services",
    description: "Professional security guards in Footscray and Melbourne's inner west. Retail security, venue crowd control, mobile patrols, and commercial property security.",
    url: "https://securityguardcompanymelbourne.com/locations/footscray/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function FootscrayPage() {
  return (
    <LocationPage
      suburb="Footscray"
      region="Western Suburbs"
      slug="footscray"
      intro="Security guard services for Footscray's retail precincts, hospitality venues, industrial businesses, and commercial properties."
      description={[
        "Footscray is one of Melbourne's most culturally diverse and commercially active inner-western suburbs — with a busy retail and hospitality precinct, growing residential development, significant industrial businesses along the Maribyrnong River, and strong community activity.",
        "Security Guard Company Melbourne provides retail security along Footscray's market and shopping precincts, venue crowd control for the suburb's licensed venues, mobile patrol services across the commercial and residential areas, and industrial site security for businesses along Hopkins Street and the river precinct.",
        "Footscray's ongoing gentrification and growing hospitality scene create expanding security requirements that we're well-positioned to meet from our inner-west patrol team.",
      ]}
      services={[
        "Retail Security & Loss Prevention",
        "Crowd Control for Venues",
        "Mobile Patrol Services",
        "Industrial Site Security",
        "After-Hours Security",
        "Alarm Response",
        "Construction Site Security",
        "Residential Security",
      ]}
      localContext="Footscray Market and the surrounding retail precinct, along with the Barkly Street and Hopkins Street hospitality strips, are the main security focus areas. Our inner-west team covers Footscray, West Footscray, Seddon, and Yarraville."
      nearbySuburbs={[
        { name: "Sunshine", href: "/locations/sunshine" },
        { name: "Werribee", href: "/locations/werribee" },
        { name: "Melbourne CBD", href: "/locations/melbourne-cbd" },
        { name: "Docklands", href: "/locations/docklands" },
      ]}
    />
  );
}
