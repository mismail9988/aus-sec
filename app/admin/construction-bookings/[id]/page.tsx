"use client";
import { use } from "react";
import AdminBookingDetail from "@/components/AdminBookingDetail";

export default function ConstructionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AdminBookingDetail id={id} apiEndpoint="/api/bookings/construction/" listHref="/admin/construction-bookings/" listLabel="Construction Bookings"
    fields={[
      { key: "contact_name", label: "Contact" }, { key: "company", label: "Company" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "site_address", label: "Site Address", wide: true }, { key: "project_type", label: "Project Type" },
      { key: "site_size", label: "Site Size" }, { key: "guard_count", label: "Guards / Patrols" },
      { key: "after_hours", label: "After Hours" }, { key: "start_date", label: "Start Date" },
      { key: "project_duration", label: "Duration" }, { key: "notes", label: "Notes", wide: true },
    ]} />;
}
