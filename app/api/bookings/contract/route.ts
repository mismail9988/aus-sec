import { makeBookingHandlers } from "@/lib/bookingApi";
const h = makeBookingHandlers({
  table: "booking_contracts",
  emailTitle: "New Long-Term Contract Enquiry",
  subject: (b) => `Contract Enquiry: ${b.contactName} — ${b.company}`,
  requiredFields: ["contactName", "email", "company"],
  buildRow: (b) => ({ contact_name: b.contactName, company: b.company, email: b.email, phone: b.phone, site_address: b.siteAddress, service_types: b.serviceTypes, guard_count: b.guardCount, contract_length: b.contractLength, start_date: b.startDate, budget: b.budget, notes: b.notes }),
  buildEmailFields: (b) => ({ "Contact": b.contactName, "Company": b.company, "Email": b.email, "Phone": b.phone, "Site Address": b.siteAddress, "Services Required": b.serviceTypes, "Guards Needed": b.guardCount, "Contract Length": b.contractLength, "Start Date": b.startDate, "Budget": b.budget, "Notes": b.notes }),
});
export const { GET, POST, PATCH } = h;
