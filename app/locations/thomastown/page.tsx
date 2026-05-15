import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Thomastown | Northern Industrial Security Melbourne",
  description: "Professional security guards in Thomastown and Whittlesea. Industrial site security, warehouse security, mobile patrols, and alarm response.",
  alternates: { canonical: "/locations/thomastown/" },
  openGraph: {
    title: "Security Guards Thomastown | Northern Industrial Security Melbourne",
    description: "Professional security guards in Thomastown and Whittlesea. Industrial site security, warehouse security, mobile patrols, and alarm response.",
    url: "https://securityguardcompanymelbourne.com/locations/thomastown/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function ThomasdownPage() {
  return (
    <LocationPage
      suburb="Thomastown"
      region="Northern Suburbs"
      slug="thomastown"
      intro="Security guard services for Thomastown's major industrial estates and commercial businesses in Melbourne's northern suburbs."
      description={[
        "Thomastown is one of Melbourne's most significant industrial suburbs — home to a large concentration of manufacturing, logistics, and warehousing businesses. The suburb's industrial character creates substantial demand for after-hours site security, mobile patrols, and alarm response.",
        "Security Guard Company Melbourne provides industrial site security across Thomastown's estates, warehouse security services, mobile patrol coverage, and alarm response for the area's commercial and industrial properties.",
      ]}
      services={[
        "Industrial Site Security",
        "Warehouse & Logistics Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "After-Hours Commercial Security",
        "Construction Site Security",
        "CCTV Monitoring",
        "Access Control Systems",
      ]}
      localContext="Thomastown's industrial estates — stretching from Settlement Road through to the ring road — have some of Melbourne's highest concentrations of manufacturing and logistics businesses. After-hours security is a consistent requirement across the area."
      nearbySuburbs={[
        { name: "Epping", href: "/locations/epping" },
        { name: "Broadmeadows", href: "/locations/broadmeadows" },
        { name: "Reservoir", href: "/locations/reservoir" },
        { name: "Coburg", href: "/locations/coburg" },
      ]}
    />
  );
}
