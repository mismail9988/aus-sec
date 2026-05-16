"use client";
import AdminBookingList from "@/components/AdminBookingList";

export default function AdminEmergencyBookingsPage() {
  return <AdminBookingList title="Emergency Security Requests" apiEndpoint="/api/bookings/emergency/" detailBase="/admin/emergency-bookings/"
    fields={[
      { key: "contact_name", label: "Contact", primary: true }, { key: "urgency", label: "Urgency", badge: true },
      { key: "email", label: "Email" }, { key: "phone", label: "Phone" },
      { key: "site_address", label: "Site" }, { key: "incident_type", label: "Incident Type" },
    ]} />;
}
