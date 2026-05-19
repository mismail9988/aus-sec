import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Event Security Melbourne | Crowd Control & Event Security Guards",
  description: "Professional event security services across Melbourne. Crowd management, access control, and security planning for concerts, festivals, corporate events and more.",
  alternates: { canonical: "/services/event-security/" },
  openGraph: {
    title: "Event Security Melbourne | Crowd Control & Event Security Guards",
    description: "Professional event security services across Melbourne. Crowd management, access control, and security planning for concerts, festivals, corporate events and more.",
    url: "https://securityguardcompanymelbourne.com/services/event-security/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function EventSecurityPage() {
  return (
    <ServicePage
      category="Security Services"
      name="Event Security Melbourne"
      intro="Professional event security and crowd management for concerts, festivals, corporate events, and private functions across Melbourne."
      description={[
        "Events need specialist planning, trained staff, and clear procedures. Security Guard Company Melbourne has extensive experience across Melbourne — from small private functions to large public events with thousands of attendees.",
        "Our event security team includes crowd managers, access control staff, search teams, and roving officers. We work with organisers in the planning phase to assess risks, build a security plan, and meet venue and council requirements.",
        "We staff every event with the right number of licenced officers based on size, type, and risk. Supervisors stay in contact throughout and have clear escalation steps ready for any incident.",
      ]}
      features={[
        { title: "Event Risk Assessment", desc: "Pre-event risk assessment and security management plan development to meet venue and council requirements." },
        { title: "Crowd Management", desc: "Trained crowd management officers to maintain safe patron flow and manage crowd density." },
        { title: "Access Control & Ticketing", desc: "Perimeter control, ticket checking, bag searches, and prohibited item screening at all entry points." },
        { title: "Roving Security Officers", desc: "Mobile officers patrolling the event footprint, responding to incidents and supporting patrons." },
        { title: "VIP Protection", desc: "Close personal protection for artists, speakers, and VIP guests at your event." },
        { title: "Conflict Resolution", desc: "Trained de-escalation specialists to handle patron disputes and anti-social behaviour." },
        { title: "Emergency Procedures", desc: "Officers trained in evacuation procedures, medical response, and liaison with emergency services." },
        { title: "Venue Liaison", desc: "Coordination with venue management, local police, and other event stakeholders." },
        { title: "Post-Event Reporting", desc: "Full incident reports and debrief documentation provided after every event." },
      ]}
      whyChoose={[
        "Extensive event security experience across Melbourne venues",
        "Security management plan preparation included",
        "All officers hold current crowd management endorsements",
        "Scalable teams from 2 to 200+ officers",
        "24/7 point of contact throughout your event",
        "Coordination with Victoria Police and local councils",
        "Competitive per-head pricing for large events",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Event Security", href: "/services/event-security" },
      ]}
      bookingHref="/book/event-security/"
      ctaTitle="Get an Event Security Quote"
      ctaSubtitle="Tell us about your event and we'll put together a tailored security plan."
      testimonial={{
        text: "We've used Security Guard Company Melbourne for three major events now. Their team is always well-briefed, professional with patrons, and their supervisor stayed in contact with me all night. When an incident arose, it was handled quickly and quietly. Exactly what you need.",
        name: "Amanda Foster",
        role: "Events Manager — Melbourne Event Productions",
      }}
      faqs={[
        { q: "How many security guards do I need for my event?", a: "The number depends on your event size, type, and venue layout. As a general guide, 1 guard per 100 attendees is a starting point for low-risk events, rising to 1 per 50 for licensed venues or higher-risk events. We'll advise the right ratio after reviewing your event details." },
        { q: "Do your guards hold crowd management endorsements?", a: "Yes. All our event security officers hold the required crowd management endorsements under Victoria's Private Security Act 2004. They are trained in crowd behaviour, de-escalation, and emergency procedures." },
        { q: "Can you provide security for a private function or house party?", a: "Yes. We provide security for events of all sizes — from private parties of 30 people to large public events with thousands of attendees. Small functions typically require a minimum of 2 officers." },
        { q: "Do you prepare a security management plan?", a: "Yes. For larger events we prepare a full security management plan covering risk assessment, guard positioning, access control procedures, communications, emergency protocols, and debrief reporting. This is included in our event security packages." },
      ]}
    />
  );
}
