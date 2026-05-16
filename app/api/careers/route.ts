import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, role, experience, licence, message } = body;

    if (!name || !email || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error: dbError } = await supabaseAdmin.from("job_applications").insert({
      name,
      email,
      phone: phone || null,
      role,
      experience: experience || null,
      licence: licence || null,
      message: message || null,
      status: "new",
      created_at: new Date().toISOString(),
    });

    if (dbError) console.error("Supabase error:", dbError);

    await resend.emails.send({
      from: "Security Guard Melbourne <onboarding@resend.dev>",
      to: process.env.LEAD_EMAIL!,
      subject: `New Job Application: ${name} — ${role}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1a1a2e;padding:24px;">
            <h1 style="color:#c8102e;margin:0;font-size:20px;text-transform:uppercase;letter-spacing:2px;">New Job Application</h1>
            <p style="color:#9ca3af;margin:4px 0 0;font-size:13px;">Security Guard Company Melbourne</p>
          </div>
          <div style="background:#f9f9f9;padding:32px;border:1px solid #e5e7eb;border-top:4px solid #c8102e;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;width:140px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;font-weight:bold;">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;"><a href="mailto:${email}" style="color:#c8102e;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;font-weight:bold;">${phone || "Not provided"}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Role Applied</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;"><span style="background:#c8102e;color:white;padding:2px 10px;font-size:12px;font-weight:bold;text-transform:uppercase;">${role}</span></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Experience</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;">${experience || "Not specified"}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;">Licence</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;">${licence || "Not provided"}</td></tr>
              <tr><td style="padding:10px 0;color:#6b7280;font-size:12px;text-transform:uppercase;vertical-align:top;">Cover Note</td><td style="padding:10px 0;color:#1a1a2e;line-height:1.6;">${message || "Not provided"}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Careers API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
