"use client";
import { use } from "react";
import AdminBookingDetail from "@/components/AdminBookingDetail";

export default function CanineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AdminBookingDetail id={id} apiEndpoint="/api/bookings/canine/" listHref="/admin/canine-bookings/" listLabel="Canine Bookings"
    fields={[
      { key: "contact_name", label: "Contact" }, { key: "company", label: "Company" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "site_address", label: "Site Address", wide: true }, { key: "site_type", label: "Site Type" },
      { key: "service_type", label: "Service" }, { key: "patrol_nights", label: "Patrol Nights" },
      { key: "start_date", label: "Start Date" }, { key: "duration", label: "Duration" },
      { key: "notes", label: "Notes", wide: true },
    ]} />;
}
