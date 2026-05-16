"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminCanineBookingsPage() {
  return <AdminBookingList title="Canine Security Bookings" apiEndpoint="/api/bookings/canine/" detailBase="/admin/canine-bookings/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true }, { key: "company", label: "Company" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "site_type", label: "Site Type", badge: true }, { key: "service_type", label: "Service" },
    ]} />;
}
