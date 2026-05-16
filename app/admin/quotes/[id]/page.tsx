"use client";
import { use } from "react";
import AdminBookingDetail from "@/components/AdminBookingDetail";

export default function QuoteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AdminBookingDetail
    id={id}
    apiEndpoint="/api/bookings/quotes/"
    listHref="/admin/quotes/"
    listLabel="Quote Requests"
    fields={[
      { key: "contact_name", label: "Contact Name" },
      { key: "company", label: "Company" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "service_type", label: "Service Type" },
      { key: "site_address", label: "Site Address" },
      { key: "guard_count", label: "Guards Needed" },
      { key: "start_date", label: "Start Date" },
      { key: "duration", label: "Duration" },
      { key: "notes", label: "Additional Notes", wide: true },
    ]}
  />;
}
