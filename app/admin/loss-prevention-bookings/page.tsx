"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminLossPreventionBookingsPage() {
  return <AdminBookingList title="Loss Prevention Bookings" apiEndpoint="/api/bookings/loss-prevention/" detailBase="/admin/loss-prevention-bookings/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true }, { key: "store_name", label: "Store", badge: true },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "store_type", label: "Store Type" }, { key: "shrinkage_concern", label: "Concern" },
    ]} />;
}
