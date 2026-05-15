import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Event Security Melbourne | Professional Event Security Services",
  description: "Expert event security services for Melbourne's events industry. Crowd management, access control, VIP security, and security management planning for events of all sizes.",
  alternates: { canonical: "/sectors/events/" },
};

export default function EventsSectorPage() {
  return (
    <SectorPage
      name="Events Security"
      tagline="Securing Melbourne's Events"
      intro="Comprehensive security services for Melbourne's events industry — from intimate private functions to major public events."
      description={[
        "Events are one of Melbourne's most significant industries — from major sporting events and concerts to festivals, corporate functions, and private celebrations. Every event presents unique security challenges that require specialist planning, experienced personnel, and clear operational protocols.",
        "Security Guard Company Melbourne has extensive experience in the events sector across Melbourne. We provide pre-event security planning, crowd management specialists, access control teams, and roving security personnel — all coordinated by experienced supervisors with specific event security training.",
        "Our events security team works with organisers during the planning phase to develop a security management plan that satisfies venue requirements, council conditions, Victoria Police liaison obligations, and the specific risk profile of your event.",
      ]}
      features={[
        { title: "Security Management Plans", desc: "Pre-event risk assessment and security plan development to meet venue, council, and licensing requirements." },
        { title: "Crowd Management", desc: "Trained crowd management specialists to maintain safe patron flow and prevent dangerous crowd density." },
        { title: "Access Control Teams", desc: "Gate security, ticket checking, bag searches, and prohibited items screening at all entry points." },
        { title: "Roving Security Teams", desc: "Mobile officers patrolling the event footprint and responding to incidents throughout the venue." },
        { title: "VIP & Artist Security", desc: "Close personal protection and escort services for artists, speakers, and VIP attendees." },
        { title: "Festival Security", desc: "Multi-day event security with rotating shifts, perimeter management, and camping area patrols." },
        { title: "Corporate Event Security", desc: "Discrete security for corporate functions, product launches, and business events." },
        { title: "Emergency Response", desc: "Officers trained in evacuation procedures, medical liaison, and coordination with emergency services." },
        { title: "Traffic & Crowd Flow", desc: "Entry and exit management to prevent dangerous queuing and manage pedestrian traffic safely." },
      ]}
      challenges={[
        "Managing crowd density and preventing dangerous crushes",
        "Access control at multiple simultaneous entry points",
        "Identifying and ejecting prohibited items and substances",
        "Coordinating with Victoria Police, venue management, and emergency services",
        "Managing major incidents while maintaining event continuity",
        "Scaling security teams quickly for events with variable attendance",
      ]}
      icon={
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      }
      breadcrumb="Events"
      href="/sectors/events"
    />
  );
}
