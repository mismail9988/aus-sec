import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { verifyAdmin } from "@/lib/adminAuth";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

function row(obj: Record<string, string | null>) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined));
}

function emailTable(fields: Record<string, string>) {
  return Object.entries(fields).map(([k, v]) =>
    `<tr><td style="padding:8px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px;text-transform:uppercase;width:160px;">${k}</td><td style="padding:8px 0;border-bottom:1px solid #e5e7eb;color:#1a1a2e;font-weight:bold;">${v || "Not provided"}</td></tr>`
  ).join("");
}

export function makeBookingHandlers(config: {
  table: string;
  subject: (body: Record<string, string>) => string;
  emailTitle: string;
  requiredFields: string[];
  buildRow: (body: Record<string, string>) => Record<string, string | null>;
  buildEmailFields: (body: Record<string, string>) => Record<string, string>;
}) {
  async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      for (const f of config.requiredFields) {
        if (!body[f]) return NextResponse.json({ error: `Missing ${f}` }, { status: 400 });
      }
      const insertRow = { ...config.buildRow(body), status: "new", created_at: new Date().toISOString() };
      const { error: dbError } = await supabaseAdmin.from(config.table).insert(row(insertRow as Record<string, string | null>));
      if (dbError) console.error("DB error:", dbError);

      await resend.emails.send({
        from: "Security Guard Melbourne <onboarding@resend.dev>",
        to: process.env.LEAD_EMAIL!,
        subject: config.subject(body),
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1a1a2e;padding:24px;"><h1 style="color:#c8102e;margin:0;font-size:18px;text-transform:uppercase;letter-spacing:2px;">${config.emailTitle}</h1><p style="color:#9ca3af;margin:4px 0 0;font-size:13px;">securityguardcompanymelbourne.com</p></div>
          <div style="background:#f9f9f9;padding:32px;border:1px solid #e5e7eb;border-top:4px solid #c8102e;"><table style="width:100%;border-collapse:collapse;">${emailTable(config.buildEmailFields(body))}</table></div>
          <div style="background:#1a1a2e;padding:16px 32px;text-align:center;"><p style="color:#6b7280;font-size:11px;margin:0;">securityguardcompanymelbourne.com</p></div>
        </div>`,
      });

      return NextResponse.json({ success: true });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
  }

  async function GET(req: NextRequest) {
    if (!(await verifyAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const id = req.nextUrl.searchParams.get("id");
    if (id) {
      const { data } = await supabaseAdmin.from(config.table).select("*").eq("id", id).single();
      if (!data) return NextResponse.json({ error: "Not found" }, { status: 404 });
      return NextResponse.json({ item: data });
    }
    const { data } = await supabaseAdmin.from(config.table).select("*").order("created_at", { ascending: false });
    return NextResponse.json({ items: data || [] });
  }

  async function PATCH(req: NextRequest) {
    if (!(await verifyAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { id, status, notes } = await req.json();
    const update: Record<string, string> = {};
    if (status) update.status = status;
    if (notes !== undefined) update.notes = notes;
    const { error } = await supabaseAdmin.from(config.table).update(update).eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
  }

  return { GET, POST, PATCH };
}
