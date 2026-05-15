import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Narre Warren | Westfield Knox & Casey Security Services",
  description: "Professional security guards in Narre Warren. Retail security at Westfield Knox, mobile patrols, construction site security, and alarm response.",
  alternates: { canonical: "/locations/narre-warren/" },
  openGraph: {
    title: "Security Guards Narre Warren | Westfield Knox & Casey Security Services",
    description: "Professional security guards in Narre Warren. Retail security at Westfield Knox, mobile patrols, construction site security, and alarm response.",
    url: "https://securityguardcompanymelbourne.com/locations/narre-warren/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function NarreWarrenPage() {
  return (
    <LocationPage
      suburb="Narre Warren"
      region="South Eastern Suburbs"
      slug="narre-warren"
      intro="Security guard services for Narre Warren and the broader City of Casey — including Westfield Knox precinct and surrounding commercial areas."
      description={[
        "Narre Warren is home to Westfield Knox, one of Victoria's largest shopping centres, as well as significant commercial and residential development. The suburb sits at the heart of the City of Casey — one of Victoria's fastest-growing municipalities.",
        "Security Guard Company Melbourne provides retail security and loss prevention for Westfield Knox and surrounding retail businesses, construction site security for the area's ongoing development, and mobile patrol services for commercial and residential properties throughout Casey.",
      ]}
      services={[
        "Retail Security & Loss Prevention",
        "Shopping Centre Security",
        "Construction Site Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "After-Hours Commercial Security",
        "CCTV Monitoring",
        "Subdivision Security",
      ]}
      localContext="Westfield Knox is one of Victoria's largest shopping centres and a major retail security environment. The surrounding residential and commercial growth in Casey creates significant ongoing security demand."
      nearbySuburbs={[
        { name: "Berwick", href: "/locations/berwick" },
        { name: "Cranbourne", href: "/locations/cranbourne" },
        { name: "Dandenong", href: "/locations/dandenong" },
        { name: "Glen Waverley", href: "/locations/glen-waverley" },
      ]}
    />
  );
}
