"use client";
import { use } from "react";
import AdminBookingDetail from "@/components/AdminBookingDetail";

export default function EmergencyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AdminBookingDetail id={id} apiEndpoint="/api/bookings/emergency/" listHref="/admin/emergency-bookings/" listLabel="Emergency Requests"
    fields={[
      { key: "contact_name", label: "Contact" }, { key: "company", label: "Company" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "site_address", label: "Site Address", wide: true }, { key: "urgency", label: "URGENCY LEVEL" },
      { key: "incident_type", label: "Incident Type" }, { key: "guard_count", label: "Guards Needed" },
      { key: "notes", label: "Situation Description", wide: true },
    ]} />;
}
