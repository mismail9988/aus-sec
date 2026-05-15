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
        "Events present unique security challenges that require specialist planning, trained personnel, and clear operational protocols. Security Guard Company Melbourne has extensive experience providing security for events across Melbourne — from small private functions to large-scale public events with thousands of attendees.",
        "Our event security team includes crowd management specialists, access control personnel, search teams, and roving security officers. We work with event organisers during the planning phase to conduct a thorough risk assessment, develop a security management plan, and ensure compliance with venue and local council requirements.",
        "Every event is staffed with the right number of licenced security officers for the size, type, and risk profile of your event. Our supervisors maintain communication throughout the event and have clear escalation protocols in place for any incident.",
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
      ctaTitle="Get an Event Security Quote"
      ctaSubtitle="Tell us about your event and we'll put together a tailored security plan."
    />
  );
}
