import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Residential Mobile Patrol Melbourne | Home & Apartment Security Patrols | Security Guard Company Melbourne",
  description: "Residential mobile patrol security for Melbourne homes, apartments, strata complexes, and gated communities. Regular licensed patrol visits, alarm response, and after-hours coverage.",
  alternates: { canonical: "/services/residential-mobile-patrol/" },
  openGraph: {
    title: "Residential Mobile Patrol Melbourne | Security Guard Company Melbourne",
    description: "Regular licensed patrol visits for Melbourne residential properties — homes, apartments, strata complexes, and gated communities. 24/7 alarm response included.",
    url: "https://securityguardcompanymelbourne.com/services/residential-mobile-patrol/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function ResidentialMobilePatrolPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Residential Mobile Patrol"
      intro="Regular, GPS-tracked patrol visits by licensed security officers to your home, apartment building, strata complex, or residential community — across Melbourne and metropolitan Victoria."
      description={[
        "Residential mobile patrols provide the security presence that technology alone cannot deliver. Cameras and alarm systems record and detect — a licensed patrol officer deters, responds, and documents. For residential properties that are regularly unoccupied, or where after-hours security is a concern, mobile patrol visits are the most cost-effective professional security solution available.",
        "Our residential patrol officers visit your property on a regular, randomised schedule — checking gates, doors, and access points, looking for signs of intrusion or damage, and logging each visit with GPS-verified timestamps. You receive confirmation of every visit and immediate notification if anything requires attention.",
        "We serve individual homes, apartment buildings, strata complexes, gated residential communities, and holiday properties across Melbourne and regional Victoria.",
      ]}
      features={[
        { title: "Scheduled Patrol Visits", desc: "Regular visits at intervals suited to your property — typically 2–4 times per night on a randomised schedule that prevents predictability and maximises deterrence." },
        { title: "GPS-Verified Attendance", desc: "Every patrol visit is logged with GPS location and timestamp. You receive a patrol report confirming each check — no guessing, no taking our word for it." },
        { title: "Physical Property Check", desc: "Officers check gates, doors, windows, and access points. Any signs of damage, forced entry, or suspicious activity are documented and reported to you immediately." },
        { title: "Alarm Response", desc: "When your alarm activates, a nearby patrol officer is dispatched to your property for physical verification — typically within 20–35 minutes across Melbourne metro." },
        { title: "Vacancy Coverage", desc: "Extended coverage for properties that are unoccupied — holiday periods, extended travel, between tenancies. More frequent patrols during the highest-risk periods." },
        { title: "Incident Reporting", desc: "Full written reports delivered to your nominated contact for any incident requiring attention — suitable for police reports, insurance claims, and strata records." },
      ]}
      whyChoose={[
        "GPS-tracked visits with timestamped patrol logs delivered to you",
        "Average 20–35 minute alarm response time across Melbourne metro",
        "Flexible patrol frequency — adjust up or down based on your needs",
        "Available for individual homes, apartment buildings, and strata complexes",
        "Licensed under the Private Security Act 2004 (Vic)",
        "Month-to-month arrangements — no long lock-in contracts",
      ]}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Residential Mobile Patrol", href: "/services/residential-mobile-patrol" },
      ]}
      ctaTitle="Protect Your Residential Property"
      ctaSubtitle="Tell us about your property and we will design a patrol schedule that matches your risk and budget."
      bookingHref="/book/mobile-patrols"
      testimonial={{
        text: "We travel interstate frequently for work and have always worried about the house. Having the patrol visits — and getting the GPS confirmation on my phone each morning — means I actually sleep properly when we are away.",
        name: "Rachel D.",
        role: "Homeowner — Glen Waverley",
      }}
      faqs={[
        { q: "How often will my property be patrolled?", a: "We recommend 2–4 visits per night for most residential properties. You can choose the frequency based on your risk level and budget. All visits are on a randomised schedule within the agreed window — not at predictable fixed times." },
        { q: "What does the officer actually do when they visit?", a: "The officer checks all accessible entry points — gates, doors, windows, garage — walks the perimeter, looks for any signs of intrusion, damage, or suspicious activity, and logs the visit with GPS and timestamp. If anything requires attention, you are contacted immediately." },
        { q: "Do you cover alarm response for residential properties?", a: "Yes. Alarm response is included in our residential patrol service — when your alarm activates, the nearest available patrol officer is dispatched to your property to physically investigate before police are contacted. This avoids false alarm fees and provides faster physical response than waiting for police." },
        { q: "Can I get patrols just while I am on holiday?", a: "Yes. We offer flexible short-term patrol arrangements for holiday and extended absence periods — contact us with your dates and property details for a quote." },
      ]}
    />
  );
}
