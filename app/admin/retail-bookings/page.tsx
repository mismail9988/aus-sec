"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminRetailBookingsPage() {
  return <AdminBookingList title="Retail Security Bookings" apiEndpoint="/api/bookings/retail/" detailBase="/admin/retail-bookings/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true }, { key: "store_name", label: "Store", badge: true },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "store_type", label: "Store Type" }, { key: "start_date", label: "Start Date" },
    ]} />;
}
