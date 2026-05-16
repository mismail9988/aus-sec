import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_armed",
  emailTitle: "New Armed Security Booking",
  subject: (b) => `Armed Security: ${b.contactName} — ${b.company}`,
  requiredFields: ["contactName", "email", "company", "siteAddress"],
  buildRow: (b) => ({ contact_name: b.contactName, company: b.company, email: b.email, phone: b.phone, site_address: b.siteAddress, security_need: b.securityNeed, guard_count: b.guardCount, shift_type: b.shiftType, start_date: b.startDate, duration: b.duration, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact": b.contactName, "Company": b.company, "Email": b.email, "Phone": b.phone, "Site Address": b.siteAddress, "Security Need": b.securityNeed, "Guards Needed": b.guardCount, "Shift Type": b.shiftType, "Start Date": b.startDate, "Duration": b.duration, "Notes": b.notes }),
});
export const { GET, POST, PATCH } = h;
