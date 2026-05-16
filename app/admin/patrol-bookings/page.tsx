"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminPatrolBookingsPage() {
  return <AdminBookingList title="Mobile Patrol Bookings" apiEndpoint="/api/bookings/patrol/" detailBase="/admin/patrol-bookings/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true }, { key: "company", label: "Company" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "site_address", label: "Site", badge: true }, { key: "patrol_frequency", label: "Frequency" },
    ]} />;
}
