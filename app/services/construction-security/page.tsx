import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Construction Site Security Melbourne | Construction Security Guards",
  description: "Professional construction site security in Melbourne. Guards and canine patrols to protect equipment, materials, and plant from theft and vandalism.",
  alternates: { canonical: "/services/construction-security/" },
  openGraph: {
    title: "Construction Site Security Melbourne | Construction Security Guards",
    description: "Professional construction site security in Melbourne. Guards and canine patrols to protect equipment, materials, and plant from theft and vandalism.",
    url: "https://securityguardcompanymelbourne.com/services/construction-security/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function ConstructionSecurityPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Construction Site Security"
      intro="Guards and canine patrols for Melbourne construction sites — protecting equipment, materials, and plant from theft and vandalism."
      bookingHref="/book/construction-security/"
      description={[
        "Construction site theft costs the Australian industry over $1 billion every year. Most of it happens overnight and on weekends when sites are unattended. Security Guard Company Melbourne provides guards and canine patrols that stop theft before it happens.",
        "We deploy licenced security officers and trained dog handler teams across Melbourne construction sites. Our guards are familiar with site environments — they know how to manage access, handle subcontractors, and deal with trespassers without escalating situations.",
        "Every deployment starts with a site induction and briefing. Guards log every patrol, every interaction, and every incident. You get written reports and can request photo evidence. Our operations centre is available 24/7 if you need to contact us during a shift.",
      ]}
      features={[
        { title: "Overnight Guards", desc: "Stationed guards on-site overnight and through weekends — the highest-risk periods for theft and vandalism." },
        { title: "Canine Patrols", desc: "Dog and handler teams covering the full perimeter. The most effective deterrent for large construction sites." },
        { title: "Access Control", desc: "Managing entry and exit of workers, subcontractors, and vehicles. Checking IDs and induction cards." },
        { title: "Patrol Reports", desc: "Written patrol reports every shift with timestamps, observations, and any incidents logged." },
        { title: "Equipment Protection", desc: "Monitoring high-value plant, machinery, and materials left on-site between shifts." },
        { title: "Alarm Response", desc: "Rapid response to any alarms or intrusion alerts triggered on your site after hours." },
        { title: "Perimeter Checks", desc: "Regular checks of fencing, hoardings, gates, and site boundaries to identify and report breaches." },
        { title: "Trespass Management", desc: "Dealing with trespassers lawfully — warning, documenting, and escalating to police when required." },
        { title: "24/7 Operations", desc: "Our operations centre is reachable around the clock for urgent site issues during any shift." },
      ]}
      whyChoose={[
        "Familiar with construction site environments and protocols",
        "Canine patrols available — the strongest deterrent for large sites",
        "All guards hold current Victoria Police security licences",
        "Written patrol reports every shift",
        "Rapid response to alarms and incidents",
        "Available for single-night to multi-year project deployments",
        "Fully insured — public liability and workers compensation",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Construction Site Security", href: "/services/construction-security" },
      ]}
      ctaTitle="Secure Your Construction Site"
      ctaSubtitle="Guards and canine patrols available from tonight. Response within 2 business hours."
      testimonial={{
        text: "We've had no major theft incidents since deploying Security Guard Company Melbourne across our Point Cook subdivision sites. Response to alarm activations is consistently under 20 minutes. Good mobile patrol service and solid reporting every morning.",
        name: "Tom Elbrecht",
        role: "Site Manager — Wyndham Growth Development",
      }}
      faqs={[
        { q: "What security is most effective for construction sites?", a: "The most effective approach combines physical guards or canine patrols for after-hours deterrence with CCTV coverage for evidence capture. Mobile patrol vehicles that visit multiple times per night are cost-effective for large or spread-out sites." },
        { q: "Can you respond to alarm activations at construction sites?", a: "Yes. Our mobile patrol vehicles respond to alarm activations at construction sites, typically within 20–30 minutes. We provide a written alarm response report after every activation." },
        { q: "Do you provide security for multiple construction sites under one contract?", a: "Yes. Many of our construction clients operate multiple sites simultaneously. We manage security across all locations with a single point of contact and consolidated monthly reporting." },
        { q: "Is construction site security tax deductible?", a: "In most cases yes — security is a legitimate business expense. We recommend confirming with your accountant. We provide detailed invoices that clearly itemise all services for your records." },
      ]}
    />
  );
}
