import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Epping | Northern Suburbs Security Services Melbourne",
  description: "Professional security guards in Epping and Whittlesea. Retail security at Pacific Epping, industrial security, mobile patrols, and alarm response in Melbourne's north.",
  alternates: { canonical: "/locations/epping/" },
  openGraph: {
    title: "Security Guards Epping | Northern Suburbs Security Services Melbourne",
    description: "Professional security guards in Epping and Whittlesea. Retail security at Pacific Epping, industrial security, mobile patrols, and alarm response in Melbourne's north.",
    url: "https://securityguardcompanymelbourne.com/locations/epping/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function EppingPage() {
  return (
    <LocationPage
      suburb="Epping"
      region="Northern Suburbs"
      slug="epping"
      intro="Security guard services for Epping's major retail precinct, industrial estates, and rapidly growing residential and commercial areas."
      description={[
        "Epping has grown from a suburban centre into one of Melbourne's major activity nodes — home to Pacific Epping (one of Victoria's largest shopping centres), Melbourne's wholesale market (the largest in the Southern Hemisphere), significant industrial and logistics businesses, and major residential growth.",
        "Security Guard Company Melbourne provides retail loss prevention and security for Pacific Epping and surrounding retail, security services for the Melbourne Market and surrounding wholesale precinct, industrial site security for the Epping industrial estates, and mobile patrol services across the Whittlesea growth corridor.",
        "Epping's combination of major retail, wholesale market, and industrial activity makes it one of the more complex security environments in Melbourne's north.",
      ]}
      services={[
        "Retail Security & Loss Prevention",
        "Wholesale Market Security",
        "Industrial Site Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "Construction Site Security",
        "After-Hours Commercial Security",
        "CCTV Installation & Monitoring",
      ]}
      localContext="Pacific Epping, Melbourne Market, and the Epping industrial estates all generate significant security requirements. The Whittlesea growth corridor has extensive construction security needs. Our northern team covers Epping, South Morang, Mernda, and Doreen."
      nearbySuburbs={[
        { name: "Broadmeadows", href: "/locations/broadmeadows" },
        { name: "Thomastown", href: "/locations/thomastown" },
        { name: "Reservoir", href: "/locations/reservoir" },
      ]}
    />
  );
}
