import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Industrial Security Melbourne | Manufacturing & Industrial Site Security",
  description: "Professional security services for Melbourne's industrial sector. Manufacturing plant security, industrial estate patrols, perimeter protection, and after-hours coverage.",
  alternates: { canonical: "/sectors/industrial/" },
  openGraph: {
    title: "Industrial Security Melbourne | Manufacturing & Industrial Site Security",
    description: "Professional security services for Melbourne's industrial sector. Manufacturing plant security, industrial estate patrols, perimeter protection, and after-hours coverage.",
    url: "https://securityguardcompanymelbourne.com/sectors/industrial/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function IndustrialPage() {
  return (
    <SectorPage
      name="Industrial Security"
      tagline="Protecting Melbourne's Industrial Sector"
      intro="Professional security for manufacturing plants, industrial estates, and heavy industry operations across Melbourne and Victoria."
      description={[
        "Industrial environments present some of the most complex security challenges in the commercial sector — large sites with extensive perimeters, high-value equipment and materials, 24/7 operations with shift workers, multiple contractor access points, and significant WHS obligations. Security Guard Company Melbourne provides industrial security services built around the specific realities of manufacturing and heavy industry.",
        "Our industrial security officers are trained for the specific demands of industrial environments — including permit-to-work procedures, hazardous materials awareness, emergency response protocols, and the management of contractor and visitor access on complex industrial sites.",
        "We work with operations managers, facility managers, and HSE teams to develop security programs that align with your site's operating procedures and compliance obligations — not generic security plans imposed from outside.",
      ]}
      features={[
        { title: "Perimeter Security", desc: "Securing the extensive perimeters typical of industrial sites — fencing, gates, vehicle access points, and patrol coverage." },
        { title: "Contractor Management", desc: "Vetting, induction, and access management for the high volumes of contractors typical in industrial environments." },
        { title: "Gatehouse Operations", desc: "Staffed gatehouse security managing vehicle and personnel access at site entry points." },
        { title: "Plant & Equipment Protection", desc: "Protection of high-value plant, machinery, and equipment from theft and vandalism." },
        { title: "After-Hours & Overnight Coverage", desc: "24/7 security coverage for facilities that cannot afford to be left unprotected between shifts." },
        { title: "Canine Patrol Teams", desc: "Security dog and handler teams for large perimeter sites where foot patrol alone is insufficient." },
        { title: "Emergency Response", desc: "Officers trained in industrial emergency response protocols, evacuation procedures, and liaison with emergency services." },
        { title: "CCTV & Access Control", desc: "Industrial-grade electronic security systems integrated with site operations and monitoring." },
        { title: "Stock & Cargo Security", desc: "Protection of raw materials, finished goods, and cargo in transit through industrial facilities." },
      ]}
      challenges={[
        "Large perimeters requiring extensive patrol coverage",
        "High-value plant and equipment attractive to organised theft",
        "Managing contractor access across complex sites with multiple entry points",
        "24/7 operations requiring consistent security across all shifts",
        "WHS obligations and emergency response in hazardous environments",
        "Internal theft risk in shift-based workforces with high turnover",
      ]}
      icon={
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      }
      breadcrumb="Industrial"
      href="/sectors/industrial"
    />
  );
}
