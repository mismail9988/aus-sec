import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Canine Security Melbourne | Security Dog Patrol Services",
  description: "Professional canine security services in Melbourne. Security dog patrols for construction sites, industrial estates, events, and high-risk properties.",
  alternates: { canonical: "/services/canine-security/" },
  openGraph: {
    title: "Canine Security Melbourne | Security Dog Patrol Services",
    description: "Professional canine security services in Melbourne. Security dog patrols for construction sites, industrial estates, events, and high-risk properties.",
    url: "https://securityguardcompanymelbourne.com/services/canine-security/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function CanineSecurityPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Canine Security Services"
      intro="Professional security dog and handler teams for Melbourne — the most cost-effective deterrent for high-risk sites and large properties."
      description={[
        "A security dog and handler team provides a level of deterrence that no uniformed officer alone can match. The presence of a trained security dog dramatically reduces the likelihood of trespass, vandalism, and theft — particularly on large sites, construction areas, and industrial properties where complete perimeter coverage by foot patrol alone is not practical.",
        "Security Guard Company Melbourne provides licensed security dog handlers and their trained dogs for patrol, search, and detection operations across Melbourne and Victoria. All handlers are licensed under the Private Security Act 2004 with the relevant canine endorsement, and all dogs are trained, certified, and maintained to industry standards.",
        "Canine security is particularly effective for construction sites, industrial estates, vacant properties, events, and any site where a strong visible deterrent is required. The combination of a trained dog and experienced handler covers ground quickly, responds to threats confidently, and provides a presence that deters even determined intruders.",
      ]}
      features={[
        { title: "Construction Site Patrols", desc: "Handler and dog teams patrolling construction sites overnight — the most effective deterrent against equipment and materials theft." },
        { title: "Industrial Estate Patrols", desc: "Regular patrol runs through industrial properties, warehouses, and commercial precincts after hours." },
        { title: "Vacant Property Security", desc: "Cost-effective protection for vacant commercial or residential properties at risk of trespass and vandalism." },
        { title: "Event Security", desc: "Canine teams for event perimeter management, crowd deterrence, and prohibited items detection." },
        { title: "Crowd Deterrence", desc: "The presence of a security dog and handler provides crowd control support without physical confrontation." },
        { title: "Search Operations", desc: "Trained dogs for area searches following suspected trespass, to locate persons hiding on-site." },
        { title: "Drug Detection", desc: "Narcotics detection dogs for events, venues, and workplace drug-detection programs." },
        { title: "Mobile Patrol Integration", desc: "Canine patrols integrated with standard mobile patrol routes for comprehensive site coverage." },
        { title: "After-Hours Response", desc: "Rapid deployment of canine teams to alarm activations and security incidents requiring elevated response." },
      ]}
      whyChoose={[
        "All handlers licensed under Private Security Act 2004 with canine endorsement",
        "Trained, certified dogs maintained to industry standards",
        "Proven deterrent — the most effective passive security measure for large sites",
        "Covers ground significantly faster than foot patrol alone",
        "Available for single-night deployments through to ongoing contracts",
        "Fully insured for canine operations",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Canine Security", href: "/services/canine-security" },
      ]}
      ctaTitle="Deploy Canine Security at Your Site"
      ctaSubtitle="The most effective deterrent for construction sites, industrial estates, and high-risk properties."
    />
  );
}
