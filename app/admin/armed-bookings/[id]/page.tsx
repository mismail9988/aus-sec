"use client";
import { use } from "react";
import AdminBookingDetail from "@/components/AdminBookingDetail";

export default function ArmedDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AdminBookingDetail id={id} apiEndpoint="/api/bookings/armed/" listHref="/admin/armed-bookings/" listLabel="Armed Bookings"
    fields={[
      { key: "contact_name", label: "Contact" }, { key: "company", label: "Company" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "site_address", label: "Site Address", wide: true }, { key: "security_need", label: "Security Need" },
      { key: "guard_count", label: "Guards" }, { key: "shift_type", label: "Shift Type" },
      { key: "start_date", label: "Start Date" }, { key: "duration", label: "Duration" },
      { key: "notes", label: "Notes", wide: true },
    ]} />;
}
