import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Bodyguard Melbourne | Close Personal Protection Services | Security Guard Company Melbourne",
  description: "Professional bodyguard and close personal protection services in Melbourne. Discreet, licensed CPP officers for executives, VIPs, and individuals requiring personal security.",
  alternates: { canonical: "/services/bodyguard/" },
  openGraph: {
    title: "Bodyguard Melbourne | Close Personal Protection | Security Guard Company Melbourne",
    description: "Discreet, licensed bodyguard and close personal protection services for executives, VIPs, and individuals with specific personal security requirements across Melbourne.",
    url: "https://securityguardcompanymelbourne.com/services/bodyguard/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BodyguardPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Bodyguard & Close Personal Protection"
      intro="Discreet, professional close personal protection for executives, VIPs, public figures, and individuals facing specific personal security threats — across Melbourne and regional Victoria."
      description={[
        "Close personal protection (CPP) — commonly called bodyguard services — is a specialist discipline that goes well beyond standard security guarding. A CPP officer's role is to protect a specific individual: assessing and mitigating the risks they face in their daily movements, managing their immediate environment, and responding decisively if a threat materialises.",
        "Our CPP officers are experienced security professionals with backgrounds in law enforcement, military, or specialist security — trained in advance threat assessment, protective route planning, crowd management, and emergency response. They operate discreetly, integrating into a client's daily schedule without creating unnecessary visibility or disruption.",
        "Bodyguard services are appropriate for corporate executives facing credible threats, high-profile individuals during public appearances, individuals involved in sensitive legal or commercial matters, and VIP guests requiring protection during visits to Melbourne.",
      ]}
      features={[
        { title: "Advance Threat Assessment", desc: "Before any engagement, we assess the specific threat environment — who poses a risk, where, and under what circumstances — to design a protection protocol appropriate to the actual risk level." },
        { title: "Route Planning & Venue Assessment", desc: "All venues, routes, and scheduled locations are assessed in advance to identify risks, plan exits, and position the protection team appropriately." },
        { title: "Residential & Office Protection", desc: "CPP coverage at the client's home, workplace, or temporary accommodation — managing access, monitoring the environment, and maintaining a secure perimeter." },
        { title: "Transport Security", desc: "Secure vehicle arrangements and escort coverage for all travel — from airport arrivals to daily commutes and high-profile public engagements." },
        { title: "Event & Public Appearance Coverage", desc: "Specialist coverage for public appearances, media events, and high-attendance functions where crowd and public interaction creates an elevated personal risk environment." },
        { title: "Discreet Low-Profile Operation", desc: "Our CPP officers dress and operate appropriately for the client's context — no unnecessary visibility, no theatrical presence. Protection that does not advertise itself is more effective protection." },
      ]}
      whyChoose={[
        "Officers with law enforcement and specialist security backgrounds",
        "Advance risk assessment for every engagement — not just reactive presence",
        "Discreet presentation appropriate to corporate and VIP environments",
        "Licensed under the Private Security Act 2004 (Vic)",
        "Available for short-term engagements, extended assignments, and ongoing retainer",
        "24/7 availability including interstate and regional travel accompaniment",
      ]}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Bodyguard & Close Personal Protection", href: "/services/bodyguard" },
      ]}
      ctaTitle="Discuss Your Personal Protection Requirements"
      ctaSubtitle="CPP engagements begin with a confidential consultation. Contact us to discuss your specific situation."
      bookingHref="/contact"
      testimonial={{
        text: "We required protection for our CEO during a sensitive corporate matter. The officer was professional, completely discreet, and the planning that went into each day's movements gave us genuine confidence. Not once did it feel intrusive or theatrical.",
        name: "General Counsel",
        role: "ASX-Listed Corporation, Melbourne",
      }}
      faqs={[
        { q: "Do bodyguards in Victoria need a licence?", a: "Yes. All security officers providing close personal protection in Victoria must hold a current individual security licence issued by the Victorian Security Agents Authority (VSAA) under the Private Security Act 2004. We verify all officer licences before deployment — you can also verify them independently on the VSAA public register." },
        { q: "How discreet can the service be?", a: "Very. Our CPP officers are trained to operate at whatever profile level the client requires — from visibly suited protection for high-profile public appearances to completely plain-clothes coverage indistinguishable from a business associate. We discuss the appropriate presentation level during the initial consultation." },
        { q: "Can you provide protection for interstate or international travel?", a: "We cover Melbourne and all of Victoria directly. For interstate assignments we work with partner providers in other states to ensure consistent coverage standards. International deployment is assessed case by case." },
        { q: "What is the minimum engagement period?", a: "CPP engagements are typically assessed on a daily or weekly basis rather than hourly. Minimum engagements vary by the nature of the assignment. Contact us with your specific requirements for accurate pricing." },
      ]}
    />
  );
}
