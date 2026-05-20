import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Film & TV Production Security Melbourne | Set & Location Security | Security Guard Company Melbourne",
  description: "Professional security for film and television productions in Melbourne — set security, location access control, equipment protection, and talent security across Victoria.",
  alternates: { canonical: "/services/film-tv-security/" },
  openGraph: {
    title: "Film & TV Production Security Melbourne | Security Guard Company Melbourne",
    description: "Security for film and TV productions in Melbourne — set access control, equipment protection, location security, and discreet talent coverage across Victoria.",
    url: "https://securityguardcompanymelbourne.com/services/film-tv-security/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function FilmTvSecurityPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Film & TV Production Security"
      intro="Specialist security for film and television productions across Melbourne and Victoria — protecting sets, equipment, locations, and talent with experienced officers who understand the unique demands of a production environment."
      description={[
        "Film and television production security is a specialist discipline. Production sets contain hundreds of thousands of dollars of camera and lighting equipment. Locations require access control that keeps the public out without disrupting the shoot. Talent security demands discretion, professional conduct, and the ability to manage public attention without creating incidents.",
        "Our officers assigned to production environments are briefed specifically on set etiquette, production schedules, and the unique operational requirements of a working film or television set. They understand that their role is to protect without disrupting — and that the production's schedule and creative environment must be respected.",
        "We have provided security to productions across Melbourne's CBD, inner suburbs, and regional Victorian locations — including studio productions, location shoots, and major event-tied productions.",
      ]}
      features={[
        { title: "Set Access Control", desc: "Managing who enters the set perimeter — crew, cast, approved visitors, and contractors — keeping unauthorised individuals out without creating disruption to the production schedule." },
        { title: "Equipment & Asset Protection", desc: "Overnight and after-hours protection for camera, lighting, and production equipment left on location — one of the highest-value asset protection requirements in the industry." },
        { title: "Location Security", desc: "Perimeter control and public management for location shoots in public spaces — managing bystanders, preventing interference with the shoot, and liaising with local police and council where required." },
        { title: "Talent Security", desc: "Discreet close personal protection for talent requiring personal security during production — managing public access, fan interaction, and unwanted attention without creating a visible security spectacle." },
        { title: "Overnight Production Security", desc: "After-wrap security for sets and locations where equipment remains in place overnight — patrol coverage with GPS-verified visits and immediate incident response." },
        { title: "Wrap & Strike Security", desc: "Security coverage during the wrap and strike phases of production — when expensive equipment is being packed and transported and the security profile of the location changes." },
      ]}
      whyChoose={[
        "Officers briefed specifically on production set etiquette and requirements",
        "Experience on Melbourne CBD, suburban, and regional location shoots",
        "Discreet operation — protection that does not disrupt the creative environment",
        "Flexible engagement — day rates, overnight rates, and full-production contracts",
        "Production-specific incident reporting for insurance and production records",
        "Available at short notice for last-minute location changes and schedule shifts",
      ]}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Film & TV Security", href: "/services/film-tv-security" },
      ]}
      ctaTitle="Production Security Across Melbourne & Victoria"
      ctaSubtitle="Tell us about your production schedule and locations — we will build security coverage around your shoot."
      bookingHref="/contact"
      testimonial={{
        text: "We had a night shoot in a public location with significant bystander interest. The officers managed the crowd professionally, kept the perimeter clear, and the production ran without a single interruption from the public. Exactly what we needed.",
        name: "Production Manager",
        role: "Feature Film Production — Melbourne CBD",
      }}
      faqs={[
        { q: "Can you provide security for both studio and location shoots?", a: "Yes. Studio productions have different security requirements to location shoots — different access control challenges, different public management needs, different equipment risk profiles. We cover both, and we brief officers specifically for the environment they are working in." },
        { q: "How quickly can you mobilise for a production security requirement?", a: "Production schedules change. We maintain the flexibility to mobilise within 24–48 hours for standard production security requirements. For large-scale or specialist requirements, more lead time is preferable." },
        { q: "Do you provide security for equipment left overnight on location?", a: "Yes — overnight equipment security is one of the most common production security requirements. We provide static overnight officers or regular mobile patrol visits depending on the value of the equipment and the risk profile of the location." },
        { q: "Can your officers work discreetly around talent?", a: "Yes. Officers assigned to talent proximity roles are selected for their professional presentation and interpersonal skills, and are briefed on the specific requirements of working around high-profile individuals. Discretion and professionalism are non-negotiable for these roles." },
      ]}
    />
  );
}
