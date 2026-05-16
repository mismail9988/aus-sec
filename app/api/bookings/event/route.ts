import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_events",
  emailTitle: "New Event Security Booking",
  subject: (b) => `Event Booking: ${b.contactName} — ${b.eventName}`,
  requiredFields: ["contactName", "email", "eventName", "eventDate"],
  buildRow: (b) => ({ contact_name: b.contactName, company: b.company, email: b.email, phone: b.phone, event_name: b.eventName, event_date: b.eventDate, event_venue: b.eventVenue, event_type: b.eventType, attendees: b.attendees, guard_count: b.guardCount, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact": b.contactName, "Company": b.company, "Email": b.email, "Phone": b.phone, "Event Name": b.eventName, "Event Date": b.eventDate, "Venue": b.eventVenue, "Event Type": b.eventType, "Expected Attendees": b.attendees, "Guards Needed": b.guardCount, "Notes": b.notes }),
});
export const { GET, POST, PATCH } = h;
