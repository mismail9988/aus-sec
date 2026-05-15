import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Wodonga | Border Security Services Albury Wodonga",
  description: "Professional security guards in Wodonga and Albury-Wodonga. Industrial security, retail security, mobile patrols, and alarm response on the NSW-Victoria border.",
  alternates: { canonical: "/locations/wodonga/" },
  openGraph: {
    title: "Security Guards Wodonga | Border Security Services Albury Wodonga",
    description: "Professional security guards in Wodonga and Albury-Wodonga. Industrial security, retail security, mobile patrols, and alarm response on the NSW-Victoria border.",
    url: "https://securityguardcompanymelbourne.com/locations/wodonga/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function WodongaPage() {
  return (
    <LocationPage
      suburb="Wodonga"
      region="Regional Victoria"
      slug="wodonga"
      intro="Professional security guard services across Wodonga and the Albury-Wodonga border region — industrial, commercial, and retail security."
      description={[
        "Wodonga is a significant regional centre on the Victoria-NSW border and part of the Albury-Wodonga twin city. The region has a strong industrial base including defence, logistics, and manufacturing, as well as retail and commercial businesses serving a large regional population.",
        "Security Guard Company Melbourne provides security guard services in Wodonga with regionally-based officers. We offer industrial and commercial site security, retail loss prevention, mobile patrol coverage, and alarm response across the Wodonga area.",
      ]}
      services={[
        "Industrial Site Security",
        "Commercial Property Security",
        "Retail Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "After-Hours Security",
        "Construction Site Security",
        "CCTV Monitoring",
      ]}
      localContext="Wodonga's industrial estate and the Gateway Island commercial precinct are significant security markets. The Wodonga retail precinct and the high street businesses also generate consistent security demand. We service the Victorian side of the Albury-Wodonga region."
      nearbySuburbs={[
        { name: "Shepparton", href: "/locations/shepparton" },
        { name: "Bendigo", href: "/locations/bendigo" },
      ]}
    />
  );
}
