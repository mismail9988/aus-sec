import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, company, service, message } = body;

    if (!firstName || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error: dbError } = await supabaseAdmin.from("leads").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone: phone || null,
      company: company || null,
      service,
      message,
      source: "contact_form",
      status: "new",
      created_at: new Date().toISOString(),
    });

    if (dbError) console.error("Supabase error:", dbError);

    await resend.emails.send({
      from: "Security Guard Melbourne <onboarding@resend.dev>",
      to: process.env.LEAD_EMAIL!,
      subject: `New Lead: ${firstName} ${lastName} — ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a2e; padding: 24px;">
            <h1 style="color: #c8102e; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px;">New Lead</h1>
            <p style="color: #9ca3af; margin: 4px 0 0; font-size: 13px;">Security Guard Company Melbourne</p>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border: 1px solid #e5e7eb; border-top: 4px solid #c8102e;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;width:140px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;font-weight:bold;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;"><a href="mailto:${email}" style="color:#c8102e;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;font-weight:bold;">${phone || "Not provided"}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Company</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;">${company || "Not provided"}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Service</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;"><span style="background:#c8102e;color:white;padding:2px 10px;font-size:12px;font-weight:bold;text-transform:uppercase;">${service}</span></td></tr>
              <tr><td style="padding:10px 0;color:#6b7280;font-size:12px;text-transform:uppercase;vertical-align:top;">Message</td><td style="padding:10px 0;color:#1a1a2e;line-height:1.6;">${message}</td></tr>
            </table>
          </div>
          <div style="background:#1a1a2e;padding:16px 32px;text-align:center;">
            <p style="color:#6b7280;font-size:11px;margin:0;">securityguardcompanymelbourne.com — Contact Form</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
