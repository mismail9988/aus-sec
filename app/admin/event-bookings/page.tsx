"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminEventBookingsPage() {
  return <AdminBookingList
    title="Event Security Bookings"
    apiEndpoint="/api/bookings/event/"
    detailBase="/admin/event-bookings/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true },
      { key: "event_name", label: "Event", badge: true },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "event_date", label: "Event Date" },
      { key: "attendees", label: "Attendees" },
    ]}
  />;
}
