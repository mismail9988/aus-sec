import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Security Guards Glen Waverley | Eastern Suburbs Security Services",
  description: "Professional security guards in Glen Waverley and Monash. Retail security at The Glen, corporate office security, mobile patrols, and alarm response.",
  alternates: { canonical: "/locations/glen-waverley/" },
  openGraph: {
    title: "Security Guards Glen Waverley | Eastern Suburbs Security Services",
    description: "Professional security guards in Glen Waverley and Monash. Retail security at The Glen, corporate office security, mobile patrols, and alarm response.",
    url: "https://securityguardcompanymelbourne.com/locations/glen-waverley/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function GlenWaverleyPage() {
  return (
    <LocationPage
      suburb="Glen Waverley"
      region="Eastern Suburbs"
      slug="glen-waverley"
      intro="Security guard services for Glen Waverley's retail precinct, corporate offices, and the broader Monash corridor."
      description={[
        "Glen Waverley is a major suburban centre in Melbourne's south-east — home to The Glen Shopping Centre, a busy retail precinct along Kingsway, significant corporate offices, and a large residential population. The suburb is a key node in the Monash business corridor.",
        "Security Guard Company Melbourne provides retail security for The Glen and surrounding retail businesses, corporate concierge security for office buildings throughout the area, and mobile patrol services across Glen Waverley and the surrounding eastern suburbs.",
        "Our south-east team covers Glen Waverley, Notting Hill, Mount Waverley, and the broader Monash area — servicing both retail and corporate security requirements.",
      ]}
      services={[
        "Retail Security & Loss Prevention",
        "Shopping Centre Security",
        "Corporate Office Security",
        "Mobile Patrol Services",
        "Alarm Response",
        "After-Hours Building Security",
        "CCTV Monitoring",
        "Access Control Systems",
      ]}
      localContext="The Glen Shopping Centre and the Kingsway retail strip are the main retail security environments. The Monash business corridor generates significant corporate security demand. Our south-east team covers Glen Waverley, Notting Hill, and Mount Waverley."
      nearbySuburbs={[
        { name: "Box Hill", href: "/locations/box-hill" },
        { name: "Dandenong", href: "/locations/dandenong" },
        { name: "Ringwood", href: "/locations/ringwood" },
        { name: "Frankston", href: "/locations/frankston" },
      ]}
    />
  );
}
