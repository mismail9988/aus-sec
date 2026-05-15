import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Berwick | Casey Security Services Melbourne South East",
  description: "Professional security guards in Berwick and the City of Casey. Retail security, construction site security, mobile patrols, and alarm response.",
  alternates: { canonical: "/locations/berwick/" },
  openGraph: {
    title: "Security Guards Berwick | Casey Security Services Melbourne South East",
    description: "Professional security guards in Berwick and the City of Casey. Retail security, construction site security, mobile patrols, and alarm response.",
    url: "https://securityguardcompanymelbourne.com/locations/berwick/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BerwickPage() {
  return (
    <LocationPage
      suburb="Berwick"
      region="South Eastern Suburbs"
      slug="berwick"
      intro="Security guard services for Berwick and the City of Casey's retail precincts, construction sites, and commercial properties."
      description={[
        "Berwick is a major suburban centre in the City of Casey — home to a busy retail precinct, the Bunjil Place cultural complex, significant construction activity, and a large and growing residential population.",
        "Security Guard Company Melbourne provides retail security for Berwick's shopping precincts, construction site security for the numerous residential developments in the area, and mobile patrol services for established commercial and residential properties throughout Casey.",
      ]}
      services={[
        "Retail Security",
        "Construction Site Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "After-Hours Commercial Security",
        "Corporate Office Security",
        "Subdivision Security",
        "CCTV Installation",
      ]}
      localContext="The City of Casey is one of Victoria's fastest-growing municipalities. Berwick's retail precinct and the surrounding residential construction zones are significant security markets. Our south-east team covers Berwick, Narre Warren, Officer, and Clyde."
      nearbySuburbs={[
        { name: "Narre Warren", href: "/locations/narre-warren" },
        { name: "Cranbourne", href: "/locations/cranbourne" },
        { name: "Pakenham", href: "/locations/pakenham" },
        { name: "Dandenong", href: "/locations/dandenong" },
      ]}
    />
  );
}
