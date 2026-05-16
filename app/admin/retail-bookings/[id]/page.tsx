"use client";
import { use } from "react";
import AdminBookingDetail from "@/components/AdminBookingDetail";

export default function RetailDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AdminBookingDetail id={id} apiEndpoint="/api/bookings/retail/" listHref="/admin/retail-bookings/" listLabel="Retail Bookings"
    fields={[
      { key: "contact_name", label: "Contact" }, { key: "store_name", label: "Store Name" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "site_address", label: "Store Address", wide: true }, { key: "store_type", label: "Store Type" },
      { key: "guard_count", label: "Guards" }, { key: "shift_type", label: "Shift Type" },
      { key: "start_date", label: "Start Date" }, { key: "duration", label: "Duration" },
      { key: "notes", label: "Notes", wide: true },
    ]} />;
}
