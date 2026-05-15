import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Frankston | Security Services Frankston & Mornington Peninsula",
  description: "Professional security guards in Frankston and the Mornington Peninsula. Retail security, mobile patrols, alarm response, and event security.",
  alternates: { canonical: "/locations/frankston/" },
};

export default function FrankstonPage() {
  return (
    <LocationPage
      suburb="Frankston"
      region="South Eastern Suburbs"
      slug="frankston"
      intro="Professional security guard services for Frankston, the Mornington Peninsula, and Melbourne's south-eastern fringe."
      description={[
        "Frankston serves as both a major suburban centre and the gateway to the Mornington Peninsula. With a busy retail precinct, waterfront entertainment area, and significant residential and commercial growth, demand for professional security services in Frankston has grown substantially.",
        "Security Guard Company Melbourne provides mobile patrol services, retail security for the Bayside Shopping Centre precinct, alarm response for businesses and residential properties, and event security for the growing hospitality and events scene along the waterfront.",
        "Our south-east patrol team covers Frankston, Frankston North, Langwarrin, and surrounding suburbs with regular patrol runs and rapid alarm response — backed by officers based locally for genuine fast response times.",
      ]}
      services={[
        "Retail Security & Loss Prevention",
        "Mobile Patrol Services",
        "Alarm Response",
        "Commercial Property Security",
        "Event Security",
        "After-Hours Security",
        "CCTV Installation & Monitoring",
        "Construction Site Security",
      ]}
      localContext="Frankston's retail precinct and waterfront entertainment areas require both visible security presence and mobile patrol coverage. Our south-east team covers Frankston, Seaford, Langwarrin, and northern Mornington Peninsula with officers who know the area."
      nearbySuburbs={[
        { name: "Dandenong", href: "/locations/dandenong" },
        { name: "Cranbourne", href: "/locations/cranbourne" },
        { name: "Berwick", href: "/locations/berwick" },
        { name: "Pakenham", href: "/locations/pakenham" },
      ]}
    />
  );
}
