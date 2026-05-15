import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Pakenham | Outer South East Security Services Melbourne",
  description: "Professional security guards in Pakenham and the outer south-east. Construction site security, retail security, mobile patrols, and alarm response.",
  alternates: { canonical: "/locations/pakenham/" },
};

export default function PakenhamPage() {
  return (
    <LocationPage
      suburb="Pakenham"
      region="South Eastern Suburbs"
      slug="pakenham"
      intro="Security guard services for Pakenham and the outer south-eastern growth corridor — construction sites, retail, and commercial properties."
      description={[
        "Pakenham is one of Melbourne's fastest-growing outer suburbs — with significant housing construction, an expanding retail precinct, and growing commercial development. As the population grows, so does the demand for professional security services across the area.",
        "Security Guard Company Melbourne provides construction site security for Pakenham's numerous housing and commercial developments, retail security for the Pakenham Place and Village Square retail precincts, and mobile patrol services for established commercial and residential properties.",
        "Our south-east patrol team extends to cover Pakenham and the Cardinia growth corridor with dedicated resources — not extended metro routes with long response times.",
      ]}
      services={[
        "Construction Site Security",
        "Retail Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Industrial Site Security",
        "After-Hours Commercial Security",
        "Subdivision Security",
        "CCTV Installation",
      ]}
      localContext="Pakenham has some of the highest rates of residential and commercial construction in Victoria — and new subdivision and construction site security is a major requirement. The retail precinct around Princes Highway also generates consistent loss prevention demand."
      nearbySuburbs={[
        { name: "Berwick", href: "/locations/berwick" },
        { name: "Cranbourne", href: "/locations/cranbourne" },
        { name: "Narre Warren", href: "/locations/narre-warren" },
        { name: "Frankston", href: "/locations/frankston" },
        { name: "Dandenong", href: "/locations/dandenong" },
      ]}
    />
  );
}
