import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Education Security Melbourne | Security Guard Company Melbourne",
  description: "Safe and welcoming campus security for universities, TAFEs, schools, and educational institutions across Melbourne and Victoria.",
  alternates: { canonical: "/sectors/education/" },
};

export default function EducationSectorPage() {
  return (
    <SectorPage
      name="Education"
      breadcrumb="Education"
      href="/sectors/education"
      tagline="Safe Learning Environments"
      intro="Educational institutions need security that protects students and staff while maintaining a welcoming, open campus atmosphere."
      description={[
        "Universities, TAFEs, and schools face a unique security challenge: how to keep students and staff safe without creating an environment that feels restrictive or unwelcoming. The balance between security and accessibility is critical.",
        "Our education security officers are trained to engage positively with students, staff, and visitors. They understand campus culture and are skilled at de-escalation, crowd management, and emergency response.",
        "We provide security services across the full spectrum of educational institutions — from primary schools requiring visitor management systems to large universities needing 24/7 campus patrols and control room operations.",
      ]}
      challenges={[
        "Balancing open campus access with safety",
        "Managing large student populations during peak periods",
        "After-hours security of empty campus buildings",
        "Responding to mental health incidents and student welfare concerns",
        "Protecting high-value research equipment and IT assets",
        "Managing external events and third-party facility users",
      ]}
      features={[
        { title: "Campus Patrols", desc: "Regular foot and vehicle patrols of campus buildings, car parks, and outdoor areas." },
        { title: "After-Hours Security", desc: "Protecting campus facilities, labs, and equipment during nights, weekends, and holidays." },
        { title: "Event Security", desc: "Managing graduation ceremonies, open days, public lectures, and student events safely." },
        { title: "Visitor & Contractor Access", desc: "Structured access management for non-student visitors and maintenance contractors." },
        { title: "Student Safety Programs", desc: "Late-night safe walking programs and student welfare support initiatives." },
        { title: "Emergency Response", desc: "Trained campus wardens and emergency coordinators working with institution leadership." },
      ]}
      icon={
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      }
    />
  );
}
