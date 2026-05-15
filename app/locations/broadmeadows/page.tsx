import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Broadmeadows | Northern Suburbs Security Services",
  description: "Professional security guards in Broadmeadows and Melbourne's northern suburbs. Industrial security, retail loss prevention, mobile patrols, and alarm response.",
  alternates: { canonical: "/locations/broadmeadows/" },
};

export default function BroadmeadowsPage() {
  return (
    <LocationPage
      suburb="Broadmeadows"
      region="Northern Suburbs"
      slug="broadmeadows"
      intro="Professional security guard services for Broadmeadows and Melbourne's northern suburbs — industrial estates, retail centres, and commercial properties."
      description={[
        "Broadmeadows is a major industrial and commercial centre in Melbourne's northern corridor — home to significant manufacturing, logistics, and warehousing operations alongside the Broadmeadows Shopping Centre and numerous commercial and retail businesses.",
        "Security Guard Company Melbourne provides industrial site security, retail loss prevention, mobile patrol services, and alarm response across Broadmeadows and the surrounding northern suburbs including Dallas, Campbellfield, and Somerton.",
        "The northern industrial corridor from Broadmeadows through to Campbellfield and Somerton has consistent after-hours security requirements for high-value stock and equipment. Our northern patrol team provides regular coverage of these areas with locally-based officers.",
      ]}
      services={[
        "Industrial Site Security",
        "Warehouse Security",
        "Retail Security & Loss Prevention",
        "Mobile Patrol Services",
        "Alarm Response",
        "After-Hours Commercial Security",
        "Construction Site Security",
        "CCTV Monitoring",
      ]}
      localContext="The Campbellfield-Broadmeadows industrial corridor is one of Melbourne's major manufacturing and logistics zones. The area has significant after-hours security demand, particularly for high-value manufacturing equipment and logistics stock. Our northern team covers Broadmeadows, Dallas, Campbellfield, Somerton, and Coolaroo."
      nearbySuburbs={[
        { name: "Epping", href: "/locations/epping" },
        { name: "Thomastown", href: "/locations/thomastown" },
        { name: "Coburg", href: "/locations/coburg" },
        { name: "Reservoir", href: "/locations/reservoir" },
      ]}
    />
  );
}
