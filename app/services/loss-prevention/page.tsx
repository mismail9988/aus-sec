import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Loss Prevention Melbourne | Retail Loss Prevention Services",
  description: "Professional loss prevention services for Melbourne retailers. Reduce shrinkage with expert store detectives, CCTV analysis, and staff training.",
  alternates: { canonical: "/services/loss-prevention/" },
  openGraph: {
    title: "Loss Prevention Melbourne | Retail Loss Prevention Services",
    description: "Professional loss prevention services for Melbourne retailers. Reduce shrinkage with expert store detectives, CCTV analysis, and staff training.",
    url: "https://securityguardcompanymelbourne.com/services/loss-prevention/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function LossPreventionPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Loss Prevention Services"
      intro="Expert loss prevention for Melbourne retailers — reducing shrinkage through intelligence-led deployment, trained store detectives, and CCTV analysis."
      description={[
        "Retail shrinkage is one of the most significant and controllable costs in retail operations. Security Guard Company Melbourne's loss prevention team brings a professional, evidence-based approach to reducing theft — whether from customers, contractors, or internal staff.",
        "Unlike basic uniformed guard services, our loss prevention program begins with a shrinkage assessment — identifying your highest-risk product categories, locations, times of day, and theft methods. We then deploy the most appropriate combination of plainclothes store detectives, CCTV monitoring, and periodic auditing to target your specific loss drivers.",
        "All apprehensions and detentions are conducted in accordance with Victorian law, protecting you from civil liability while building a proper evidence trail for prosecution.",
      ]}
      features={[
        { title: "Shrinkage Assessment", desc: "Analysis of your current loss patterns, high-risk products, and vulnerability points before deployment." },
        { title: "Plainclothes Store Detectives", desc: "Trained officers operating without uniform to identify and observe theft without deterring offenders." },
        { title: "CCTV Analysis", desc: "Reviewing footage to identify theft patterns, build evidence files, and support apprehensions." },
        { title: "Supplier & Delivery Auditing", desc: "Monitoring deliveries and returns to prevent supplier fraud and internal theft at receiving points." },
        { title: "Staff Awareness Training", desc: "Training your team to identify theft behaviours and follow correct reporting procedures." },
        { title: "Intelligence Reports", desc: "Regular reports on theft trends, suspect activity, and recommendations to reduce vulnerability." },
        { title: "Prosecution Support", desc: "Evidence packages and statement preparation to support police prosecution of offenders." },
        { title: "Safe Count Observation", desc: "Supervised cash handling at closing to reduce internal theft risk during end-of-day processes." },
        { title: "Multi-Site Analytics", desc: "Cross-site reporting for retail chains to identify systemically vulnerable locations." },
      ]}
      whyChoose={[
        "Intelligence-led deployment — we target your actual loss drivers",
        "Lawful apprehension procedures with proper evidence documentation",
        "Measurable ROI — we track and report shrinkage reduction",
        "Experienced in supermarket, fashion, electronics, and liquor categories",
        "Plainclothes capability unavailable from most security companies",
        "Retail-specific training — not generic security officers",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Loss Prevention", href: "/services/loss-prevention" },
      ]}
      bookingHref="/book/loss-prevention/"

      ctaTitle="Reduce Your Retail Shrinkage"
      ctaSubtitle="Get a free shrinkage assessment and loss prevention proposal."
    />
  );
}
