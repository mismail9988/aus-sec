"use client";
import { use } from "react";
import AdminBookingDetail from "@/components/AdminBookingDetail";

export default function CrowdControlDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AdminBookingDetail id={id} apiEndpoint="/api/bookings/crowd-control/" listHref="/admin/crowd-control-bookings/" listLabel="Crowd Control Bookings"
    fields={[
      { key: "contact_name", label: "Contact" }, { key: "venue_name", label: "Venue Name" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "venue_address", label: "Venue Address", wide: true }, { key: "venue_type", label: "Venue Type" },
      { key: "guard_count", label: "Controllers" }, { key: "nights_per_week", label: "Nights/Week" },
      { key: "start_date", label: "Start Date" }, { key: "notes", label: "Notes", wide: true },
    ]} />;
}
