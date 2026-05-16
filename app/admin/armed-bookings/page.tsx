"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminArmedBookingsPage() {
  return <AdminBookingList title="Armed Security Bookings" apiEndpoint="/api/bookings/armed/" detailBase="/admin/armed-bookings/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true }, { key: "company", label: "Company", badge: true },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "security_need", label: "Need" }, { key: "start_date", label: "Start Date" },
    ]} />;
}
