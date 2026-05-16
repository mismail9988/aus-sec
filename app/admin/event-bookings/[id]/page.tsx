"use client";
import { use } from "react";
import AdminBookingDetail from "@/components/AdminBookingDetail";

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AdminBookingDetail id={id} apiEndpoint="/api/bookings/event/" listHref="/admin/event-bookings/" listLabel="Event Bookings"
    fields={[
      { key: "contact_name", label: "Contact Name" }, { key: "company", label: "Organisation" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "event_name", label: "Event Name" }, { key: "event_type", label: "Event Type" },
      { key: "event_venue", label: "Venue" }, { key: "event_date", label: "Event Date" },
      { key: "attendees", label: "Expected Attendees" }, { key: "guard_count", label: "Guards Needed" },
      { key: "notes", label: "Event Details", wide: true },
    ]} />;
}
