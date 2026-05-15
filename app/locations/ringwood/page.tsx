import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Ringwood | Eastern Suburbs Security Services Maroondah",
  description: "Professional security guards in Ringwood and the Maroondah area. Retail security at Eastland, mobile patrols, commercial property security, and alarm response.",
  alternates: { canonical: "/locations/ringwood/" },
  openGraph: {
    title: "Security Guards Ringwood | Eastern Suburbs Security Services Maroondah",
    description: "Professional security guards in Ringwood and the Maroondah area. Retail security at Eastland, mobile patrols, commercial property security, and alarm response.",
    url: "https://securityguardcompanymelbourne.com/locations/ringwood/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function RingwoodPage() {
  return (
    <LocationPage
      suburb="Ringwood"
      region="Eastern Suburbs"
      slug="ringwood"
      intro="Professional security services for Ringwood's major retail precinct, commercial businesses, and surrounding eastern suburbs."
      description={[
        "Ringwood is a major activity centre in Melbourne's east — anchored by Eastland Shopping Centre, one of Victoria's largest shopping centres, alongside a busy commercial precinct, transport interchange, and significant residential development.",
        "Security Guard Company Melbourne provides retail loss prevention and security for Ringwood's retail businesses, mobile patrol services across the commercial and industrial areas, alarm response coverage, and static guard services for commercial properties.",
        "Our east Melbourne patrol team covers Ringwood, Mitcham, Croydon, and surrounding suburbs — providing consistent coverage across the Maroondah municipality.",
      ]}
      services={[
        "Retail Security & Loss Prevention",
        "Shopping Centre Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Commercial Property Security",
        "After-Hours Security",
        "Construction Site Security",
        "CCTV Monitoring",
      ]}
      localContext="Eastland Shopping Centre is one of Victoria's largest retail destinations and a significant retail security environment. The surrounding Ringwood commercial and industrial precinct also has consistent mobile patrol and after-hours security requirements."
      nearbySuburbs={[
        { name: "Box Hill", href: "/locations/box-hill" },
        { name: "Croydon", href: "/locations/croydon" },
        { name: "Mitcham", href: "/locations/mitcham" },
        { name: "Mooroolbark", href: "/locations/mooroolbark" },
      ]}
    />
  );
}
