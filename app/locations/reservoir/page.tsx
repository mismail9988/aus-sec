import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Reservoir | Northern Suburbs Security Melbourne",
  description: "Professional security guards in Reservoir and Darebin. Retail security, mobile patrols, commercial property security, and alarm response.",
  alternates: { canonical: "/locations/reservoir/" },
  openGraph: {
    title: "Security Guards Reservoir | Northern Suburbs Security Melbourne",
    description: "Professional security guards in Reservoir and Darebin. Retail security, mobile patrols, commercial property security, and alarm response.",
    url: "https://securityguardcompanymelbourne.com/locations/reservoir/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function ReservoirPage() {
  return (
    <LocationPage
      suburb="Reservoir"
      region="Northern Suburbs"
      slug="reservoir"
      intro="Security guard services for Reservoir and the City of Darebin — retail security, mobile patrols, and commercial property security."
      description={[
        "Reservoir is a major northern suburb with a busy retail precinct along High Street, significant light industrial businesses, and a large residential population. Security requirements include retail loss prevention, after-hours commercial security, and mobile patrol services.",
        "Security Guard Company Melbourne's northern patrol team covers Reservoir and the broader Darebin municipality — providing retail security, mobile patrols, and alarm response with locally-based officers.",
      ]}
      services={[
        "Retail Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Commercial Property Security",
        "After-Hours Security",
        "Industrial Site Security",
        "CCTV Monitoring",
        "Construction Site Security",
      ]}
      localContext="High Street Reservoir is a significant retail strip with consistent security requirements. The surrounding industrial and commercial areas also generate regular after-hours patrol demand."
      nearbySuburbs={[
        { name: "Coburg", href: "/locations/coburg" },
        { name: "Thomastown", href: "/locations/thomastown" },
        { name: "Epping", href: "/locations/epping" },
        { name: "Broadmeadows", href: "/locations/broadmeadows" },
      ]}
    />
  );
}
