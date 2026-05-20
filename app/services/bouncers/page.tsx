import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Bouncers Melbourne | Licensed Door Security & Crowd Control | Security Guard Company Melbourne",
  description: "Licensed bouncers and door security for Melbourne bars, clubs, pubs, restaurants and events. Crowd controller licenced officers, RSA-aware, fully compliant with Victorian law.",
  alternates: { canonical: "/services/bouncers/" },
  openGraph: {
    title: "Bouncers Melbourne | Licensed Door Security | Security Guard Company Melbourne",
    description: "Licensed crowd controller officers for Melbourne venues — door security, patron management, RSA compliance, and responsible entry refusal under Victorian law.",
    url: "https://securityguardcompanymelbourne.com/services/bouncers/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BouncersPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Bouncers & Door Security"
      intro="Licensed crowd controller officers for Melbourne bars, clubs, pubs, restaurants, and events — professional door security that keeps your venue safe, compliant, and running smoothly."
      description={[
        "The term 'bouncer' is commonly used, but what you are actually engaging is a licensed crowd controller — a security professional who holds a specific crowd controller licence issued by the Victorian Security Agents Authority and has completed approved training in patron management, responsible service of alcohol awareness, use of force compliance, and the Victorian licensing framework.",
        "A good door security officer is not just there to remove trouble — they are there to prevent it. The best crowd controllers create an entry experience that is professional and welcoming for legitimate patrons while clearly communicating that the venue maintains standards. Their presence, manner, and positioning deters the problems that make door security necessary in the first place.",
        "We supply licensed crowd controllers to Melbourne venues of all types — late-night nightclubs, casual pubs, restaurants with liquor licences, rooftop bars, and private functions at licensed premises.",
      ]}
      features={[
        { title: "Fully Licensed Crowd Controllers", desc: "Every officer holds a current crowd controller licence issued by the VSAA — the mandatory legal requirement for working door security at Victorian licensed premises." },
        { title: "Entry Management & ID Checking", desc: "Professional patron assessment at entry — age verification, intoxication checks, dress code and conditions of entry enforcement, and Exclusion Register compliance." },
        { title: "Patron Management & De-escalation", desc: "Trained to manage difficult patrons through communication first — reducing the need for physical intervention and protecting your venue from liability." },
        { title: "RSA-Aware Operations", desc: "Our officers understand responsible service of alcohol obligations and work collaboratively with your RSA-certified bar staff to manage intoxicated patrons appropriately." },
        { title: "Incident Logging & Reporting", desc: "Full incident register entries for every significant event — the documentation your venue needs to meet licensing obligations and defend against complaints." },
        { title: "Exclusion Register Checks", desc: "Officers trained in checking and contributing to the Victorian Intoxicated Person Exclusion Register to manage known-risk individuals across the Melbourne licensed venue community." },
      ]}
      whyChoose={[
        "All officers hold current crowd controller licences — VSAA verified",
        "Trained in Victorian liquor licensing obligations and use-of-force compliance",
        "RSA-aware and experienced working alongside bar and floor staff",
        "Available for single nights, regular weekly shifts, or event-specific bookings",
        "Proper incident register documentation delivered after every shift",
        "Fast deployment — most regular venue requirements confirmed within 48 hours",
      ]}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Bouncers & Door Security", href: "/services/bouncers" },
      ]}
      ctaTitle="Licensed Door Security for Your Melbourne Venue"
      ctaSubtitle="Tell us about your venue and trading hours — we will match the right officers for your environment."
      bookingHref="/book/crowd-control"
      testimonial={{
        text: "We've had the same two officers on our Friday and Saturday nights for six months. The difference in how the door runs compared to our previous provider is night and day — professional, consistent, and our licence conditions have never been cleaner.",
        name: "Venue Manager",
        role: "Licensed Bar — Fitzroy, Melbourne",
      }}
      faqs={[
        { q: "Are bouncers in Victoria legally required to be licensed?", a: "Yes. Under the Private Security Act 2004 (Vic), any person working as a crowd controller at a licensed premises in Victoria must hold a current crowd controller licence. Using unlicensed security at your venue exposes you to significant fines and potential licence conditions from Liquor Control Victoria." },
        { q: "What is the difference between a security guard licence and a crowd controller licence?", a: "A crowd controller licence is a specific category that authorises working at licensed premises in a patron management capacity. A standard security guard licence does not authorise crowd control work at venues. Always verify that door security officers hold the crowd controller category specifically." },
        { q: "Can you provide bouncers for a one-off event?", a: "Yes. We supply crowd controllers for single-night events, private functions at licensed venues, and regular ongoing venue shifts. Minimum engagement periods apply — contact us with your event details for accurate pricing." },
        { q: "How many bouncers do I need for my venue?", a: "This depends on your capacity, licence conditions, and trading hours. As a general benchmark, one crowd controller per 100 patrons for venues up to 300 capacity, with additional coverage during high-risk periods. Your licence conditions may specify minimums — check these first." },
      ]}
    />
  );
}
