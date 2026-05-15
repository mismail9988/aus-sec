import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Geelong | Professional Security Services Geelong",
  description: "Licenced security guards in Geelong and the Surf Coast. Industrial security, retail loss prevention, event security, and mobile patrols across the Geelong region.",
  alternates: { canonical: "/locations/geelong/" },
};

export default function GeelongPage() {
  return (
    <LocationPage
      suburb="Geelong"
      region="Regional Victoria"
      slug="geelong"
      intro="Professional security guard services across Geelong, Surf Coast, and the Bellarine Peninsula — from the CBD to industrial estates."
      description={[
        "Geelong is Victoria's second-largest city and a growing commercial and industrial centre. Security Guard Company Melbourne provides professional security services across the Geelong region — from the waterfront CBD precinct to the industrial estates of Norlane, Corio, and North Geelong.",
        "Our Geelong security team provides the full range of services: uniformed guards for commercial and retail premises, mobile patrol services across the region, event security at Kardinia Park and other Geelong venues, and alarm response services for businesses that need physical response outside business hours.",
        "As security demand in Geelong grows alongside the city's population and business sector, we invest in local officers who know the area — not drivers dispatched from Melbourne who don't know the streets.",
      ]}
      services={[
        "Commercial Security Guards",
        "Industrial Site Security",
        "Retail Loss Prevention",
        "Event Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Construction Site Security",
        "CCTV & Alarm Systems",
      ]}
      localContext="Geelong's industrial precincts — Norlane, Corio, North Geelong — have significant after-hours security requirements. The waterfront CBD and retail precincts require both visible security presence and mobile patrol coverage. We operate a dedicated Geelong patrol team rather than extending our Melbourne-based routes."
      nearbySuburbs={[
        { name: "Ballarat", href: "/locations/ballarat" },
        { name: "Frankston", href: "/locations/frankston" },
        { name: "Werribee", href: "/locations/werribee" },
      ]}
    />
  );
}
