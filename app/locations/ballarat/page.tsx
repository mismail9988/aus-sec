import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Ballarat | Professional Security Services Ballarat",
  description: "Licenced security guards in Ballarat. Industrial security, retail loss prevention, event security, and mobile patrol services across the Ballarat region.",
  alternates: { canonical: "/locations/ballarat/" },
  openGraph: {
    title: "Security Guards Ballarat | Professional Security Services Ballarat",
    description: "Licenced security guards in Ballarat. Industrial security, retail loss prevention, event security, and mobile patrol services across the Ballarat region.",
    url: "https://securityguardcompanymelbourne.com/locations/ballarat/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BallaratPage() {
  return (
    <LocationPage
      suburb="Ballarat"
      region="Regional Victoria"
      slug="ballarat"
      intro="Professional security guard services across Ballarat and the Central Highlands — from the CBD to industrial estates and regional events."
      description={[
        "Ballarat is a significant regional centre with a diverse mix of retail, healthcare, education, industrial, and tourism businesses. As the city grows, so does the demand for professional security services — particularly for industrial sites, the retail CBD precinct, healthcare facilities, and major events.",
        "Security Guard Company Melbourne provides security guard services across Ballarat with a locally-based team. We offer static guard services for commercial and industrial premises, mobile patrol coverage across the city, alarm response services, and event security for Ballarat's growing events calendar.",
        "We understand that regional businesses have different expectations to metropolitan clients — responsiveness, value for money, and a genuine local presence matter. Our Ballarat team is based in the region, not dispatched from Melbourne.",
      ]}
      services={[
        "Industrial Site Security",
        "Commercial Property Security",
        "Retail Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Event Security",
        "Healthcare Facility Security",
        "Construction Site Security",
      ]}
      localContext="Ballarat's industrial precincts around Sebastopol, Wendouree, and the Western Ring Road have consistent after-hours security needs. The CBD retail precinct and major events at venues like the Ballarat Racecourse require professional security coverage throughout the year."
      nearbySuburbs={[
        { name: "Geelong", href: "/locations/geelong" },
        { name: "Bendigo", href: "/locations/bendigo" },
      ]}
    />
  );
}
