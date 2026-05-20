import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Alarm Response Security Melbourne | 24/7 Fast Response | Security Guard Company Melbourne",
  description: "Professional alarm response security in Melbourne. Licensed officers dispatched within minutes of an alarm activation — physical verification, incident reporting, and police liaison.",
  alternates: { canonical: "/services/alarm-response/" },
  openGraph: {
    title: "Alarm Response Security Melbourne | Security Guard Company Melbourne",
    description: "Licensed alarm response officers dispatched 24/7 across Melbourne. Physical site verification, police liaison, and full incident reporting.",
    url: "https://securityguardcompanymelbourne.com/services/alarm-response/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function AlarmResponsePage() {
  return (
    <ServicePage
      category="Security Services"
      name="Alarm Response"
      intro="When your alarm activates, a licensed security officer is dispatched immediately to your premises — 24 hours a day, 7 days a week, across Melbourne and metropolitan Victoria."
      description={[
        "Alarm monitoring alone is not enough. When an intrusion alarm activates, someone needs to physically attend your premises, assess the situation, and take appropriate action — whether that means securing a door, calling police, or detaining an intruder until law enforcement arrives.",
        "Our alarm response service connects your existing alarm system to our patrol network. When your monitoring centre receives an activation, a nearby licensed patrol officer is immediately dispatched to your site. They perform a full physical inspection, log the outcome, and escalate to police or emergency services where necessary.",
        "Our Melbourne metropolitan coverage achieves average response times of 20–35 minutes to alarm activations. This is far faster than waiting for police as a first response, and far more effective than relying on a monitoring centre to make judgement calls from a camera feed alone.",
      ]}
      features={[
        { title: "24/7 Rapid Dispatch", desc: "Officers dispatched immediately upon alarm activation — day, night, weekends, and public holidays without exception." },
        { title: "Physical Site Inspection", desc: "A licensed officer walks the full perimeter and interior access points, not just a drive-past. Every inspection is logged with GPS timestamp." },
        { title: "Police & Emergency Liaison", desc: "When a genuine intrusion or emergency is confirmed, our officer manages the scene and coordinates with Victoria Police and emergency services on your behalf." },
        { title: "Incident Report Delivered", desc: "A full written incident report is delivered to your nominated contact within 24 hours of every activation — suitable for insurance claims and police investigations." },
        { title: "False Alarm Management", desc: "We confirm genuine incidents before involving police, avoiding false alarm fees and maintaining your relationship with Victoria Police." },
        { title: "Integration with Existing Systems", desc: "We work with your current alarm monitoring provider — no need to change your existing system or monitoring contract." },
      ]}
      whyChoose={[
        "Average 20–35 minute response time across Melbourne metro",
        "GPS-tracked officers with timestamped patrol logs",
        "Fully licensed under the Private Security Act 2004 (Vic)",
        "Detailed written incident reports for every activation",
        "Available as a standalone service or combined with mobile patrols",
        "No lock-in contracts — flexible monthly arrangements available",
      ]}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Alarm Response", href: "/services/alarm-response" },
      ]}
      ctaTitle="Connect Your Alarm to Our Response Network"
      ctaSubtitle="Talk to our team about adding professional alarm response to your existing security setup."
      bookingHref="/book/alarm-response"
      testimonial={{
        text: "We had a break-in attempt on a Tuesday night — the alarm went off at 2am and the guard was on site within 25 minutes. Police were called, a report was filed, and we had the full written account by 8am. Couldn't ask for more.",
        name: "Marcus T.",
        role: "Property Manager — South Melbourne",
      }}
      faqs={[
        { q: "Do I need to change my alarm monitoring company?", a: "No. We integrate with your existing monitoring provider. When they receive an activation, they contact us for dispatch. You keep your current monitoring arrangement." },
        { q: "What happens when the officer arrives?", a: "The officer conducts a full physical inspection of the premises — checking all entry points, perimeter, and visible interior access areas. They log the inspection with GPS and timestamp, note any findings, and contact you with an immediate verbal report before following up with a written one." },
        { q: "What if there is an active intruder on site?", a: "The officer will not put themselves at risk. They will secure the perimeter, call Victoria Police immediately, and maintain observation until law enforcement arrives. Our officers are trained for incident management — not to confront armed intruders." },
        { q: "How fast is your response time?", a: "Our Melbourne metropolitan average is 20–35 minutes from dispatch. Response times vary by location and time of night depending on patrol officer proximity. We will give you a realistic estimate for your specific suburb when you enquire." },
      ]}
    />
  );
}
