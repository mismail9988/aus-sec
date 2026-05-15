import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Docklands Melbourne | Corporate & Stadium Security",
  description: "Professional security guards in Melbourne Docklands. Corporate tower security, Marvel Stadium event security, concierge officers, and mobile patrols.",
  alternates: { canonical: "/locations/docklands/" },
};

export default function DocklandsPage() {
  return (
    <LocationPage
      suburb="Docklands"
      region="Melbourne CBD & Inner City"
      slug="docklands"
      intro="Professional security services for Docklands' corporate towers, waterfront precincts, and major events including Marvel Stadium."
      description={[
        "Docklands has transformed into one of Melbourne's major corporate and entertainment precincts — home to some of Australia's largest corporate headquarters, major entertainment venues including Marvel Stadium, a bustling waterfront retail and dining precinct, and thousands of residential apartments.",
        "Security Guard Company Melbourne provides corporate concierge and access control for Docklands' office towers, event security coordination for Marvel Stadium events, security for the waterfront entertainment precinct, and mobile patrol services across the precinct's residential and commercial areas.",
        "The concentration of high-profile corporate tenants and major entertainment events in Docklands demands security personnel with both corporate professionalism and event management capability — a combination we specialise in.",
      ]}
      services={[
        "Corporate Concierge Security",
        "High-Rise Building Security",
        "Event Security & Crowd Management",
        "Waterfront Precinct Security",
        "Mobile Patrol Services",
        "After-Hours Security",
        "CCTV Monitoring",
        "Access Control Systems",
      ]}
      localContext="Docklands hosts a significant proportion of Melbourne's corporate headquarters alongside major events at Marvel Stadium. Our officers working in Docklands are experienced in both corporate environments and large-scale event security — often switching between both types of deployment in the same area."
      nearbySuburbs={[
        { name: "Melbourne CBD", href: "/locations/melbourne-cbd" },
        { name: "South Melbourne", href: "/locations/south-melbourne" },
        { name: "Port Melbourne", href: "/locations/port-melbourne" },
        { name: "Fitzroy", href: "/locations/fitzroy" },
      ]}
    />
  );
}
