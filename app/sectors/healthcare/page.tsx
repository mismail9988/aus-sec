import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Healthcare Security Melbourne | Security Guard Company Melbourne",
  description: "Specialist healthcare security services for hospitals, clinics, and aged care facilities across Melbourne. Trained, licenced, and compassionate security personnel.",
  alternates: { canonical: "/sectors/healthcare/" },
  openGraph: {
    title: "Healthcare Security Melbourne | Security Guard Company Melbourne",
    description: "Specialist healthcare security services for hospitals, clinics, and aged care facilities across Melbourne. Trained, licenced, and compassionate security personnel.",
    url: "https://securityguardcompanymelbourne.com/sectors/healthcare/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function HealthcareSectorPage() {
  return (
    <SectorPage
      name="Healthcare"
      breadcrumb="Healthcare"
      href="/sectors/healthcare"
      tagline="Protecting Patients & Staff"
      intro="Healthcare environments require a unique approach to security — one that balances safety with compassion and patient dignity."
      description={[
        "Healthcare facilities face unique and complex security challenges. From managing aggressive or distressed patients to protecting sensitive medical equipment and data, the security demands of hospitals, clinics, and aged care facilities are unlike any other sector.",
        "Our healthcare security officers are specifically trained to work in clinical environments. They understand the importance of maintaining a calm, professional presence while supporting clinical staff and ensuring the safety of patients, visitors, and staff.",
        "We work closely with facility managers and clinical teams to design security programs that integrate seamlessly with healthcare operations — protecting people without compromising the care environment.",
      ]}
      challenges={[
        "Managing aggressive or distressed patients and visitors",
        "Protecting high-value medical equipment and pharmaceuticals",
        "Controlling access to sensitive areas (ICU, ED, pharmacy)",
        "Occupational violence and aggression (OVA) incidents",
        "After-hours security with reduced staff",
        "Balancing security with patient privacy and dignity",
      ]}
      features={[
        { title: "Trained Clinical Guards", desc: "Officers with specific training in mental health awareness, OVA de-escalation, and healthcare protocols." },
        { title: "Access Control", desc: "Managed access to restricted areas including ICU, ED, pharmacy, and administration zones." },
        { title: "Emergency Response", desc: "Rapid response to code situations, aggressive incidents, and emergency evacuations." },
        { title: "After-Hours Patrols", desc: "Regular patrols of wards, car parks, and facility perimeters during low-staffing periods." },
        { title: "CCTV Monitoring", desc: "Integration with facility CCTV systems for real-time monitoring and incident documentation." },
        { title: "Visitor Management", desc: "Controlled visitor access with sign-in systems and identification protocols." },
      ]}
      icon={
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      }
    />
  );
}
