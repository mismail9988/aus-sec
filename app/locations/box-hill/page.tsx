import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Box Hill | Eastern Suburbs Security Services",
  description: "Professional security guards in Box Hill. Retail security, hospital security, mobile patrols, and commercial property security in Melbourne's eastern suburbs.",
  alternates: { canonical: "/locations/box-hill/" },
  openGraph: {
    title: "Security Guards Box Hill | Eastern Suburbs Security Services",
    description: "Professional security guards in Box Hill. Retail security, hospital security, mobile patrols, and commercial property security in Melbourne's eastern suburbs.",
    url: "https://securityguardcompanymelbourne.com/locations/box-hill/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BoxHillPage() {
  return (
    <LocationPage
      suburb="Box Hill"
      region="Eastern Suburbs"
      slug="box-hill"
      intro="Professional security guard services for Box Hill's retail precincts, healthcare facilities, transport hub, and commercial buildings."
      description={[
        "Box Hill is one of Melbourne's major suburban commercial centres — home to a bustling retail and dining precinct, Box Hill Central, Box Hill Hospital, a major transport interchange, and significant corporate offices and healthcare facilities.",
        "Security Guard Company Melbourne provides retail security for the Box Hill Central and surrounding retail precincts, healthcare security for Box Hill Hospital and surrounding medical facilities, mobile patrol services across the commercial and residential areas, and concierge security for the area's office buildings.",
        "Box Hill's status as a major activity centre means consistent demand for security across retail, healthcare, hospitality, and corporate sectors — all of which we service from our east Melbourne patrol team.",
      ]}
      services={[
        "Retail Security & Loss Prevention",
        "Healthcare Facility Security",
        "Mobile Patrol Services",
        "Corporate Office Security",
        "Alarm Response",
        "After-Hours Building Security",
        "Construction Site Security",
        "CCTV Installation & Monitoring",
      ]}
      localContext="Box Hill Central is one of Melbourne's busiest suburban retail hubs. Box Hill Hospital and the surrounding medical precinct are significant healthcare security clients. Our east Melbourne team covers Box Hill, Blackburn, Nunawading, and surrounding eastern suburbs."
      nearbySuburbs={[
        { name: "Ringwood", href: "/locations/ringwood" },
        { name: "Glen Waverley", href: "/locations/glen-waverley" },
        { name: "Mitcham", href: "/locations/mitcham" },
        { name: "Croydon", href: "/locations/croydon" },
      ]}
    />
  );
}
