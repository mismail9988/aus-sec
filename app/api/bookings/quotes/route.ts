import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_quotes",
  emailTitle: "New Quote Request",
  subject: (b) => `New Quote Request: ${b.contactName} — ${b.serviceType}`,
  requiredFields: ["contactName", "email", "serviceType"],
  buildRow: (b) => ({ contact_name: b.contactName, company: b.company, email: b.email, phone: b.phone, service_type: b.serviceType, site_address: b.siteAddress, guard_count: b.guardCount, start_date: b.startDate, duration: b.duration, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact Name": b.contactName, "Company": b.company, "Email": b.email, "Phone": b.phone, "Service Type": b.serviceType, "Site Address": b.siteAddress, "Guards Needed": b.guardCount, "Start Date": b.startDate, "Duration": b.duration, "Additional Notes": b.notes }),
});
export const { GET, POST, PATCH } = h;
