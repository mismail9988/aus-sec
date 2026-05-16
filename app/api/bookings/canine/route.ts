import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_canine",
  emailTitle: "New Canine Security Booking",
  subject: (b) => `Canine Booking: ${b.contactName} — ${b.siteAddress}`,
  requiredFields: ["contactName", "email", "siteAddress"],
  buildRow: (b) => ({ contact_name: b.contactName, company: b.company, email: b.email, phone: b.phone, site_address: b.siteAddress, site_type: b.siteType, service_type: b.serviceType, patrol_nights: b.patrolNights, start_date: b.startDate, duration: b.duration, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact": b.contactName, "Company": b.company, "Email": b.email, "Phone": b.phone, "Site Address": b.siteAddress, "Site Type": b.siteType, "Service Type": b.serviceType, "Patrol Nights/Week": b.patrolNights, "Start Date": b.startDate, "Duration": b.duration, "Notes": b.notes }),
});
export const { GET, POST, PATCH } = h;
