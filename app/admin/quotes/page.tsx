"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminQuotesPage() {
  return <AdminBookingList
    title="Quote Requests"
    apiEndpoint="/api/bookings/quotes/"
    detailBase="/admin/quotes/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true },
      { key: "company", label: "Company" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "service_type", label: "Service", badge: true },
      { key: "start_date", label: "Start Date" },
    ]}
  />;
}
