"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminCrowdControlBookingsPage() {
  return <AdminBookingList title="Crowd Control Bookings" apiEndpoint="/api/bookings/crowd-control/" detailBase="/admin/crowd-control-bookings/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true }, { key: "venue_name", label: "Venue", badge: true },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "venue_type", label: "Venue Type" }, { key: "nights_per_week", label: "Nights/Week" },
    ]} />;
}
