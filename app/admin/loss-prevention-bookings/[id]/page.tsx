"use client";
import { use } from "react";
import AdminBookingDetail from "@/components/AdminBookingDetail";

export default function LossPreventionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AdminBookingDetail id={id} apiEndpoint="/api/bookings/loss-prevention/" listHref="/admin/loss-prevention-bookings/" listLabel="Loss Prevention Bookings"
    fields={[
      { key: "contact_name", label: "Contact" }, { key: "store_name", label: "Store Name" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "site_address", label: "Store Address", wide: true }, { key: "store_type", label: "Store Type" },
      { key: "shrinkage_concern", label: "Primary Concern" }, { key: "guard_count", label: "Officers" },
      { key: "shift_type", label: "Coverage" }, { key: "start_date", label: "Start Date" },
      { key: "notes", label: "Notes", wide: true },
    ]} />;
}
