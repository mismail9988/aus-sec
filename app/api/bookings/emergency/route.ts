import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_emergency",
  emailTitle: "🚨 EMERGENCY SECURITY REQUEST",
  subject: (b) => `URGENT: Emergency Security — ${b.contactName} — ${b.siteAddress}`,
  requiredFields: ["contactName", "email", "siteAddress", "urgency"],
  buildRow: (b) => ({ contact_name: b.contactName, company: b.company, email: b.email, phone: b.phone, site_address: b.siteAddress, urgency: b.urgency, incident_type: b.incidentType, guard_count: b.guardCount, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact": b.contactName, "Company": b.company, "Email": b.email, "Phone": b.phone, "Site Address": b.siteAddress, "URGENCY": b.urgency, "Incident Type": b.incidentType, "Guards Needed": b.guardCount, "Details": b.notes }),
});
export const { GET, POST, PATCH } = h;
