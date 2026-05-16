import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_construction",
  emailTitle: "New Construction Site Security Booking",
  subject: (b) => `Construction Booking: ${b.contactName} — ${b.siteAddress}`,
  requiredFields: ["contactName", "email", "siteAddress"],
  buildRow: (b) => ({ contact_name: b.contactName, company: b.company, email: b.email, phone: b.phone, site_address: b.siteAddress, project_type: b.projectType, site_size: b.siteSize, guard_count: b.guardCount, start_date: b.startDate, project_duration: b.projectDuration, after_hours: b.afterHours, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact": b.contactName, "Company": b.company, "Email": b.email, "Phone": b.phone, "Site Address": b.siteAddress, "Project Type": b.projectType, "Site Size": b.siteSize, "Guards Needed": b.guardCount, "Start Date": b.startDate, "Project Duration": b.projectDuration, "After Hours Required": b.afterHours, "Notes": b.notes }),
});
export const { GET, POST, PATCH } = h;
