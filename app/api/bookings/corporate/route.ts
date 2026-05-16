import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_corporate",
  emailTitle: "New Corporate Security Booking",
  subject: (b) => `Corporate Booking: ${b.contactName} — ${b.company}`,
  requiredFields: ["contactName", "email", "company"],
  buildRow: (b) => ({ contact_name: b.contactName, company: b.company, email: b.email, phone: b.phone, site_address: b.siteAddress, building_type: b.buildingType, guard_count: b.guardCount, shift_type: b.shiftType, start_date: b.startDate, duration: b.duration, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact": b.contactName, "Company": b.company, "Email": b.email, "Phone": b.phone, "Site Address": b.siteAddress, "Building Type": b.buildingType, "Guards Needed": b.guardCount, "Shift Type": b.shiftType, "Start Date": b.startDate, "Duration": b.duration, "Notes": b.notes }),
});
export const { GET, POST, PATCH } = h;
