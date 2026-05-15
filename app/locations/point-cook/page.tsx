import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Point Cook | Wyndham Vale Security Services Melbourne",
  description: "Professional security guards in Point Cook and Wyndham Vale. Construction site security, retail security, mobile patrols, and alarm response in Melbourne's west.",
  alternates: { canonical: "/locations/point-cook/" },
  openGraph: {
    title: "Security Guards Point Cook | Wyndham Vale Security Services Melbourne",
    description: "Professional security guards in Point Cook and Wyndham Vale. Construction site security, retail security, mobile patrols, and alarm response in Melbourne's west.",
    url: "https://securityguardcompanymelbourne.com/locations/point-cook/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function PointCookPage() {
  return (
    <LocationPage
      suburb="Point Cook"
      region="Western Suburbs"
      slug="point-cook"
      intro="Security guard services for Point Cook and Wyndham Vale — one of Melbourne's fastest-growing residential corridors."
      description={[
        "Point Cook is one of Melbourne's most rapidly growing suburbs — with extensive residential construction, new retail development, and a growing commercial base. As the suburb continues to expand, security requirements grow alongside it.",
        "Security Guard Company Melbourne provides construction site security for Point Cook's numerous housing estates, retail security for the Town Centre and Williams Landing precincts, and mobile patrol services for established residential and commercial properties.",
      ]}
      services={[
        "Construction Site Security",
        "Subdivision Security",
        "Retail Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "After-Hours Security",
        "Commercial Property Security",
        "CCTV Installation",
      ]}
      localContext="Point Cook's rapid residential growth creates significant construction site security demand. The Town Centre retail precinct and Williams Landing retail and commercial area also generate regular security requirements."
      nearbySuburbs={[
        { name: "Hoppers Crossing", href: "/locations/hoppers-crossing" },
        { name: "Werribee", href: "/locations/werribee" },
        { name: "Sunshine", href: "/locations/sunshine" },
        { name: "Geelong", href: "/locations/geelong" },
      ]}
    />
  );
}
