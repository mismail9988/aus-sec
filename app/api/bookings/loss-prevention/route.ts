import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_loss_prevention",
  emailTitle: "New Loss Prevention Booking",
  subject: (b) => `Loss Prevention: ${b.contactName} — ${b.storeName}`,
  requiredFields: ["contactName", "email", "storeName"],
  buildRow: (b) => ({ contact_name: b.contactName, store_name: b.storeName, email: b.email, phone: b.phone, site_address: b.siteAddress, store_type: b.storeType, shrinkage_concern: b.shrinkageConcern, guard_count: b.guardCount, shift_type: b.shiftType, start_date: b.startDate, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact": b.contactName, "Store Name": b.storeName, "Email": b.email, "Phone": b.phone, "Site Address": b.siteAddress, "Store Type": b.storeType, "Shrinkage Concern": b.shrinkageConcern, "Guards Needed": b.guardCount, "Shift Type": b.shiftType, "Start Date": b.startDate, "Notes": b.notes }),
});
export const { GET, POST, PATCH } = h;
