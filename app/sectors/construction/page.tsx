import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Construction Site Security Melbourne | Security Guard Company Melbourne",
  description: "24/7 construction site security across Melbourne and Victoria. Protecting plant, equipment, materials, and access points for builders and developers.",
  alternates: { canonical: "/sectors/construction/" },
};

export default function ConstructionSectorPage() {
  return (
    <SectorPage
      name="Construction"
      breadcrumb="Construction"
      href="/sectors/construction"
      tagline="Protecting Your Site Investment"
      intro="Construction sites are among the most targeted locations for theft, vandalism, and trespassing. Our specialist team keeps your site secure."
      description={[
        "Construction sites represent significant capital investment — in equipment, materials, and the project itself. Theft, vandalism, and unauthorised access can cause project delays, cost blowouts, and serious safety incidents.",
        "Our construction security officers are experienced in the unique environment of active building sites. They understand site safety requirements, construction workflows, and how to manage subcontractor and visitor access effectively.",
        "Whether you need a single guard overnight or a comprehensive security program for a major development, we provide reliable, professional construction site security across Melbourne and Victoria.",
      ]}
      challenges={[
        "Plant and equipment theft overnight and on weekends",
        "Material theft including copper, steel, and timber",
        "Vandalism and graffiti on incomplete structures",
        "Unauthorised access and trespassing incidents",
        "Safety liability from public access to active sites",
        "Subcontractor access management and accountability",
      ]}
      features={[
        { title: "24/7 Site Guards", desc: "On-site security officers providing continuous protection during and after construction hours." },
        { title: "Plant & Equipment Monitoring", desc: "Vigilant protection of excavators, cranes, vehicles, and high-value plant." },
        { title: "Access Control", desc: "Managing and logging all subcontractor, delivery, and visitor access to your site." },
        { title: "Perimeter Patrols", desc: "Regular perimeter checks to detect and deter unauthorised entry attempts." },
        { title: "Alarm Response", desc: "Rapid response to site alarm activations, including after-hours call-outs." },
        { title: "Incident Documentation", desc: "Detailed incident reports with photo evidence for insurance and police matters." },
      ]}
      icon={
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      }
    />
  );
}
