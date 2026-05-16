"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminConstructionBookingsPage() {
  return <AdminBookingList title="Construction Security Bookings" apiEndpoint="/api/bookings/construction/" detailBase="/admin/construction-bookings/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true }, { key: "company", label: "Company" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "site_address", label: "Site" }, { key: "project_type", label: "Project", badge: true },
    ]} />;
}
