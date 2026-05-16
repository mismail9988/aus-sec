import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_crowd_control",
  emailTitle: "New Crowd Control Booking",
  subject: (b) => `Crowd Control: ${b.contactName} — ${b.venueName}`,
  requiredFields: ["contactName", "email", "venueName"],
  buildRow: (b) => ({ contact_name: b.contactName, venue_name: b.venueName, email: b.email, phone: b.phone, venue_address: b.venueAddress, venue_type: b.venueType, guard_count: b.guardCount, nights_per_week: b.nightsPerWeek, start_date: b.startDate, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact": b.contactName, "Venue Name": b.venueName, "Email": b.email, "Phone": b.phone, "Venue Address": b.venueAddress, "Venue Type": b.venueType, "Guards Needed": b.guardCount, "Nights Per Week": b.nightsPerWeek, "Start Date": b.startDate, "Notes": b.notes }),
});
export const { GET, POST, PATCH } = h;
