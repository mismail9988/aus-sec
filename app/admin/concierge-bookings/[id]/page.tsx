"use client";
import { use } from "react";
import AdminBookingDetail from "@/components/AdminBookingDetail";

export default function ConciergeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AdminBookingDetail id={id} apiEndpoint="/api/bookings/concierge/" listHref="/admin/concierge-bookings/" listLabel="Concierge Bookings"
    fields={[
      { key: "contact_name", label: "Contact" }, { key: "building_name", label: "Building" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "building_address", label: "Address", wide: true }, { key: "building_type", label: "Building Type" },
      { key: "units", label: "Units" }, { key: "shift_type", label: "Coverage" },
      { key: "start_date", label: "Start Date" }, { key: "duration", label: "Duration" },
      { key: "notes", label: "Notes", wide: true },
    ]} />;
}
