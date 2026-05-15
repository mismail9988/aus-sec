import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Dandenong | Security Services Greater Dandenong",
  description: "Professional security guard services in Dandenong and Greater Dandenong. Industrial site security, retail loss prevention, mobile patrols and alarm response.",
  alternates: { canonical: "/locations/dandenong/" },
  openGraph: {
    title: "Security Guards Dandenong | Security Services Greater Dandenong",
    description: "Professional security guard services in Dandenong and Greater Dandenong. Industrial site security, retail loss prevention, mobile patrols and alarm response.",
    url: "https://securityguardcompanymelbourne.com/locations/dandenong/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function DandenongPage() {
  return (
    <LocationPage
      suburb="Dandenong"
      region="South Eastern Suburbs"
      slug="dandenong"
      intro="Licenced security guard services for Dandenong's industrial estates, retail centres, and commercial properties in Melbourne's south-east."
      description={[
        "Dandenong is one of Melbourne's major industrial and commercial hubs, with a significant concentration of warehousing, manufacturing, logistics, and retail businesses. Security demands in the area range from overnight industrial site protection to daytime retail loss prevention in the Dandenong Plaza and Market precinct.",
        "Security Guard Company Melbourne services the Greater Dandenong area with a locally-based patrol team that provides rapid response to alarm activations, regular patrol runs through industrial estates, and static guard services for construction sites, commercial properties, and retail environments.",
        "We understand the specific security challenges of the south-east corridor — including high-value equipment theft from industrial sites, cargo theft from logistics facilities, and retail crime in the shopping precincts. Our officers are briefed on local crime patterns and deployed accordingly.",
      ]}
      services={[
        "Industrial Site Security",
        "Warehouse & Logistics Security",
        "Retail Loss Prevention",
        "Mobile Patrol Services",
        "Alarm Response",
        "Construction Site Security",
        "After-Hours Building Security",
        "CCTV Monitoring",
      ]}
      localContext="Greater Dandenong has one of Melbourne's highest concentrations of industrial and logistics businesses — and one of the higher rates of commercial property crime in the south-east corridor. Our patrol team covers Dandenong, Dandenong South, and the surrounding industrial estates with regular overnight patrol runs."
      nearbySuburbs={[
        { name: "Frankston", href: "/locations/frankston" },
        { name: "Berwick", href: "/locations/berwick" },
        { name: "Cranbourne", href: "/locations/cranbourne" },
        { name: "Narre Warren", href: "/locations/narre-warren" },
        { name: "Pakenham", href: "/locations/pakenham" },
      ]}
    />
  );
}
