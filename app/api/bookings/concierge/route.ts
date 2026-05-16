import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_concierge",
  emailTitle: "New Concierge Security Booking",
  subject: (b) => `Concierge Booking: ${b.contactName} — ${b.buildingName}`,
  requiredFields: ["contactName", "email", "buildingName"],
  buildRow: (b) => ({ contact_name: b.contactName, building_name: b.buildingName, email: b.email, phone: b.phone, building_address: b.buildingAddress, building_type: b.buildingType, units: b.units, shift_type: b.shiftType, start_date: b.startDate, duration: b.duration, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact": b.contactName, "Building Name": b.buildingName, "Email": b.email, "Phone": b.phone, "Building Address": b.buildingAddress, "Building Type": b.buildingType, "Number of Units": b.units, "Shift Type": b.shiftType, "Start Date": b.startDate, "Duration": b.duration, "Notes": b.notes }),
});
export const { GET, POST, PATCH } = h;
