"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminContractEnquiriesPage() {
  return <AdminBookingList title="Long-Term Contract Enquiries" apiEndpoint="/api/bookings/contract/" detailBase="/admin/contract-enquiries/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true }, { key: "company", label: "Company", badge: true },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "contract_length", label: "Contract Length" }, { key: "budget", label: "Budget" },
    ]} />;
}
