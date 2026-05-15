import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Mooroolbark | Yarra Ranges Security Services Melbourne",
  description: "Professional security guards in Mooroolbark and the Yarra Ranges. Retail security, mobile patrols, construction site security, and alarm response.",
  alternates: { canonical: "/locations/mooroolbark/" },
  openGraph: {
    title: "Security Guards Mooroolbark | Yarra Ranges Security Services Melbourne",
    description: "Professional security guards in Mooroolbark and the Yarra Ranges. Retail security, mobile patrols, construction site security, and alarm response.",
    url: "https://securityguardcompanymelbourne.com/locations/mooroolbark/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function MooroolbarkPage() {
  return (
    <LocationPage
      suburb="Mooroolbark"
      region="Eastern Suburbs"
      slug="mooroolbark"
      intro="Security guard services for Mooroolbark and the Yarra Ranges area — retail security, mobile patrols, and construction site protection."
      description={[
        "Mooroolbark serves as a local centre for the outer eastern suburbs and the Yarra Ranges — with retail businesses, light commercial activity, and significant residential development in the surrounding hills suburbs.",
        "Security Guard Company Melbourne provides retail security, mobile patrol services, and construction site security across Mooroolbark and the broader Yarra Ranges area. Our east team covers Mooroolbark, Lilydale, Montrose, and Kilsyth.",
      ]}
      services={[
        "Retail Security",
        "Construction Site Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Commercial Property Security",
        "After-Hours Security",
        "Subdivision Security",
        "CCTV Monitoring",
      ]}
      localContext="Mooroolbark's retail strip and the surrounding Yarra Ranges growth areas generate consistent security requirements. Our eastern team covers Mooroolbark through to Lilydale and surrounding areas."
      nearbySuburbs={[
        { name: "Croydon", href: "/locations/croydon" },
        { name: "Ringwood", href: "/locations/ringwood" },
        { name: "Mitcham", href: "/locations/mitcham" },
        { name: "Box Hill", href: "/locations/box-hill" },
      ]}
    />
  );
}
