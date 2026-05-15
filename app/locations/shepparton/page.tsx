import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Shepparton | Regional Victoria Security Services",
  description: "Professional security guards in Shepparton and the Goulburn Valley. Industrial security, retail security, agricultural security, and mobile patrols.",
  alternates: { canonical: "/locations/shepparton/" },
  openGraph: {
    title: "Security Guards Shepparton | Regional Victoria Security Services",
    description: "Professional security guards in Shepparton and the Goulburn Valley. Industrial security, retail security, agricultural security, and mobile patrols.",
    url: "https://securityguardcompanymelbourne.com/locations/shepparton/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function SheppartonPage() {
  return (
    <LocationPage
      suburb="Shepparton"
      region="Regional Victoria"
      slug="shepparton"
      intro="Professional security guard services across Shepparton and the Goulburn Valley region — commercial, industrial, and agricultural security."
      description={[
        "Shepparton is the major regional centre of north-central Victoria — a hub for agriculture, food processing, retail, healthcare, and community services. Security requirements in the region span food processing plant security, agricultural equipment protection, retail loss prevention, and healthcare facility security.",
        "Security Guard Company Melbourne provides security guard services in Shepparton with a regional team. We offer static guarding, mobile patrol coverage, alarm response, and event security for Shepparton and the broader Goulburn Valley.",
      ]}
      services={[
        "Industrial & Food Processing Security",
        "Agricultural Equipment Security",
        "Retail Security",
        "Healthcare Facility Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Event Security",
        "Construction Site Security",
      ]}
      localContext="Shepparton's food processing industry — including SPC and other major operations — and the agricultural sector create unique after-hours security requirements. The CBD retail precinct and GV Health hospital also generate regular security demand."
      nearbySuburbs={[
        { name: "Bendigo", href: "/locations/bendigo" },
        { name: "Wodonga", href: "/locations/wodonga" },
      ]}
    />
  );
}
