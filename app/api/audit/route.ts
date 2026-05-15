import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { businessName, contactName, phone, email, siteAddress, businessType } = body;

    if (!contactName || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error: dbError } = await supabaseAdmin.from("audit_bookings").insert({
      business_name: businessName || null,
      contact_name: contactName,
      phone,
      email,
      site_address: siteAddress || null,
      business_type: businessType || null,
      status: "new",
      created_at: new Date().toISOString(),
    });

    if (dbError) console.error("Supabase error:", dbError);

    await resend.emails.send({
      from: "Security Guard Melbourne <onboarding@resend.dev>",
      to: process.env.LEAD_EMAIL!,
      subject: `New Audit Booking: ${contactName} — ${businessName || "Unknown Business"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a2e; padding: 24px;">
            <h1 style="color: #c8102e; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px;">New Audit Booking</h1>
            <p style="color: #9ca3af; margin: 4px 0 0; font-size: 13px;">Free Security Audit Request</p>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border: 1px solid #e5e7eb; border-top: 4px solid #c8102e;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;width:140px;">Contact</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;font-weight:bold;">${contactName}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Business</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;">${businessName || "Not provided"}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;font-weight:bold;">${phone}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;"><a href="mailto:${email}" style="color:#c8102e;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Site Address</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;">${siteAddress || "Not provided"}</td></tr>
              <tr><td style="padding:10px 0;color:#6b7280;font-size:12px;text-transform:uppercase;">Industry</td><td style="padding:10px 0;color:#1a1a2e;">${businessType || "Not provided"}</td></tr>
            </table>
          </div>
          <div style="background:#1a1a2e;padding:16px 32px;text-align:center;">
            <p style="color:#6b7280;font-size:11px;margin:0;">securityguardcompanymelbourne.com — Free Audit Booking</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Audit API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
