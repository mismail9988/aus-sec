import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Aged Care Security Melbourne | Security Services for Aged Care Facilities",
  description: "Professional security services for aged care facilities in Melbourne. Protecting vulnerable residents while maintaining a respectful, safe environment.",
  alternates: { canonical: "/sectors/aged-care/" },
};

export default function AgedCarePage() {
  return (
    <SectorPage
      name="Aged Care Security"
      tagline="Protecting Australia's Most Vulnerable"
      intro="Specialist security services for aged care facilities — protecting residents, staff, and visitors while maintaining the dignity and comfort your residents deserve."
      description={[
        "Aged care facilities present unique security challenges that demand a sensitive, highly trained approach. The people in your care are often vulnerable — cognitively impaired, physically dependent, or requiring memory care — and the security approach must reflect this reality.",
        "Security Guard Company Melbourne provides aged care security officers who are specifically trained for the aged care environment. This includes training in dementia and cognitive impairment awareness, de-escalation techniques appropriate for aged care settings, visitor management protocols, and the specific duty of care obligations that apply to aged care security.",
        "Our aged care officers understand that their role is to protect residents while preserving their dignity, independence, and wellbeing — not to create an institutional or restrictive environment. We work in partnership with your care team to develop security protocols that genuinely serve your residents.",
      ]}
      features={[
        { title: "Resident Safety Monitoring", desc: "Monitoring resident movements in dementia units, memory care wards, and wandering-risk areas." },
        { title: "Visitor Management", desc: "Managing and logging visitor access — particularly important for memory care and dementia units." },
        { title: "Staff Safety", desc: "Supporting aged care workers in managing aggressive or agitated residents safely." },
        { title: "After-Hours Security", desc: "Night security for facilities where resident safety monitoring is required outside business hours." },
        { title: "Emergency Response", desc: "Trained response to medical emergencies, elopement incidents, and other aged care-specific events." },
        { title: "Perimeter Management", desc: "Managing facility perimeter to prevent elopement in memory care settings." },
        { title: "Family Communication", desc: "Professional, respectful communication with residents' families — your officers represent your facility." },
        { title: "Incident Reporting", desc: "Detailed incident reports compliant with aged care regulatory reporting requirements." },
        { title: "CCTV Systems", desc: "Aged care-appropriate CCTV systems balancing safety monitoring with resident privacy." },
      ]}
      challenges={[
        "Elopement prevention for cognitively impaired residents",
        "Managing agitated or aggressive residents with dignity and without restraint",
        "Balancing security with residents' rights to independence and dignity",
        "After-hours monitoring with limited staff",
        "Managing visitors including those who may pose a risk to residents",
        "Complying with aged care regulatory requirements for incident reporting",
      ]}
      icon={
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      }
      breadcrumb="Aged Care"
      href="/sectors/aged-care"
    />
  );
}
