import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_retail",
  emailTitle: "New Retail Security Booking",
  subject: (b) => `Retail Booking: ${b.contactName} — ${b.storeName}`,
  requiredFields: ["contactName", "email", "storeName"],
  buildRow: (b) => ({ contact_name: b.contactName, store_name: b.storeName, email: b.email, phone: b.phone, site_address: b.siteAddress, store_type: b.storeType, guard_count: b.guardCount, shift_type: b.shiftType, start_date: b.startDate, duration: b.duration, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact": b.contactName, "Store Name": b.storeName, "Email": b.email, "Phone": b.phone, "Site Address": b.siteAddress, "Store Type": b.storeType, "Guards Needed": b.guardCount, "Shift Type": b.shiftType, "Start Date": b.startDate, "Duration": b.duration, "Notes": b.notes }),
});
export const { GET, POST, PATCH } = h;
