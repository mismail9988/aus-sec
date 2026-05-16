"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminConciergeBookingsPage() {
  return <AdminBookingList title="Concierge Security Bookings" apiEndpoint="/api/bookings/concierge/" detailBase="/admin/concierge-bookings/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true }, { key: "building_name", label: "Building", badge: true },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "building_type", label: "Building Type" }, { key: "shift_type", label: "Coverage" },
    ]} />;
}
