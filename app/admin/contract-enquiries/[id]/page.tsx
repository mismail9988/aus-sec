"use client";
import { use } from "react";
import AdminBookingDetail from "@/components/AdminBookingDetail";

export default function ContractDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <AdminBookingDetail id={id} apiEndpoint="/api/bookings/contract/" listHref="/admin/contract-enquiries/" listLabel="Contract Enquiries"
    fields={[
      { key: "contact_name", label: "Contact" }, { key: "company", label: "Company" },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "site_address", label: "Site Address", wide: true }, { key: "service_types", label: "Services Required" },
      { key: "guard_count", label: "Guard Count" }, { key: "contract_length", label: "Contract Length" },
      { key: "start_date", label: "Start Date" }, { key: "budget", label: "Budget" },
      { key: "notes", label: "Notes", wide: true },
    ]} />;
}
