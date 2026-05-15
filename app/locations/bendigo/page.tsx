import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Bendigo | Professional Security Services Bendigo",
  description: "Licenced security guards in Bendigo. Industrial security, retail loss prevention, healthcare security, event security, and mobile patrols across Bendigo.",
  alternates: { canonical: "/locations/bendigo/" },
};

export default function BendigoPage() {
  return (
    <LocationPage
      suburb="Bendigo"
      region="Regional Victoria"
      slug="bendigo"
      intro="Professional security guard services across Bendigo and central Victoria — from the CBD retail precinct to industrial estates and regional events."
      description={[
        "Bendigo is one of Victoria's largest regional cities and a major commercial, healthcare, and cultural centre. Security requirements across Bendigo span the retail CBD, Bendigo Health (one of Victoria's largest regional hospitals), significant industrial businesses, and the city's growing events calendar.",
        "Security Guard Company Melbourne provides security guard services in Bendigo with a locally-based team. We offer static guard services for commercial and industrial premises, mobile patrol coverage, alarm response, and event security for Bendigo's major events including those at the Bendigo Racecourse and exhibition centre.",
        "Regional businesses deserve the same quality of security service as metropolitan clients. Our Bendigo team is based in the city — not dispatched from Melbourne.",
      ]}
      services={[
        "Healthcare Facility Security",
        "Industrial Site Security",
        "Retail Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Event Security",
        "Commercial Property Security",
        "Construction Site Security",
      ]}
      localContext="Bendigo Health is one of regional Victoria's largest employers and a significant healthcare security environment. The Bendigo CBD retail precinct, the industrial estates around Kangaroo Flat and Epsom, and the Bendigo Racecourse events venue all generate regular security requirements."
      nearbySuburbs={[
        { name: "Ballarat", href: "/locations/ballarat" },
        { name: "Shepparton", href: "/locations/shepparton" },
      ]}
    />
  );
}
