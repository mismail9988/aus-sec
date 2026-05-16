"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminCorporateBookingsPage() {
  return <AdminBookingList title="Corporate Security Bookings" apiEndpoint="/api/bookings/corporate/" detailBase="/admin/corporate-bookings/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true }, { key: "company", label: "Company", badge: true },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "building_type", label: "Building" }, { key: "start_date", label: "Start Date" },
    ]} />;
}
