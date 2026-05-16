import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { verifyAdmin } from "@/lib/adminAuth";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function GET(req: NextRequest) {
  if (!(await verifyAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = req.nextUrl.searchParams.get("id");
  if (id) {
    const { data } = await supabaseAdmin.from("invoices").select("*").eq("id", id).single();
    if (!data) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ item: data });
  }
  const { data } = await supabaseAdmin.from("invoices").select("*").order("created_at", { ascending: false });
  return NextResponse.json({ items: data || [] });
}

export async function POST(req: NextRequest) {
  if (!(await verifyAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const { client_name, client_email, client_company, invoice_number, issue_date, due_date, items, notes, status } = body;
  if (!client_name || !client_email || !invoice_number) {
    return NextResponse.json({ error: "client_name, client_email and invoice_number required" }, { status: 400 });
  }
  const subtotal = (items || []).reduce((s: number, i: { qty: number; rate: number }) => s + (i.qty * i.rate), 0);
  const gst = subtotal * 0.1;
  const total = subtotal + gst;

  const { data, error } = await supabaseAdmin.from("invoices").insert({
    client_name, client_email, client_company: client_company || null,
    invoice_number, issue_date, due_date,
    items: JSON.stringify(items || []),
    notes: notes || null,
    subtotal, gst, total,
    status: status || "draft",
    created_at: new Date().toISOString(),
  }).select("id").single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true, id: data?.id });
}

export async function PATCH(req: NextRequest) {
  if (!(await verifyAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id, action, ...fields } = await req.json();

  if (action === "send") {
    const { data: invoice } = await supabaseAdmin.from("invoices").select("*").eq("id", id).single();
    if (!invoice) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const parsedItems: { description: string; qty: number; rate: number }[] = JSON.parse(invoice.items || "[]");
    const itemRows = parsedItems.map(item =>
      `<tr>
        <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">${item.description}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;text-align:center;">${item.qty}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;text-align:right;">$${(item.rate).toFixed(2)}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:bold;">$${(item.qty * item.rate).toFixed(2)}</td>
      </tr>`
    ).join("");

    const emailHtml = `
      <!DOCTYPE html><html><body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">
      <div style="max-width:680px;margin:40px auto;background:#fff;">
        <div style="background:#1a1a2e;padding:32px 40px;">
          <div style="color:#c8102e;font-weight:900;font-size:20px;text-transform:uppercase;letter-spacing:2px;">Security Guard Company Melbourne</div>
          <div style="color:#ffffff;font-size:28px;font-weight:900;margin-top:8px;text-transform:uppercase;">Invoice</div>
        </div>
        <div style="padding:40px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:32px;">
            <div>
              <div style="font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Billed To</div>
              <div style="font-weight:bold;color:#1a1a2e;">${invoice.client_name}</div>
              ${invoice.client_company ? `<div style="color:#4a4a4a;">${invoice.client_company}</div>` : ""}
              <div style="color:#4a4a4a;">${invoice.client_email}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Invoice Details</div>
              <div style="font-weight:bold;color:#1a1a2e;">#${invoice.invoice_number}</div>
              <div style="color:#4a4a4a;">Issued: ${invoice.issue_date}</div>
              <div style="color:#c8102e;font-weight:bold;">Due: ${invoice.due_date}</div>
            </div>
          </div>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <thead>
              <tr style="background:#f4f4f4;">
                <th style="padding:10px 12px;text-align:left;font-size:11px;text-transform:uppercase;color:#6b7280;">Description</th>
                <th style="padding:10px 12px;text-align:center;font-size:11px;text-transform:uppercase;color:#6b7280;">Qty</th>
                <th style="padding:10px 12px;text-align:right;font-size:11px;text-transform:uppercase;color:#6b7280;">Rate</th>
                <th style="padding:10px 12px;text-align:right;font-size:11px;text-transform:uppercase;color:#6b7280;">Total</th>
              </tr>
            </thead>
            <tbody>${itemRows}</tbody>
          </table>
          <div style="text-align:right;border-top:2px solid #1a1a2e;padding-top:16px;">
            <div style="color:#6b7280;margin-bottom:4px;">Subtotal: <strong>$${invoice.subtotal.toFixed(2)}</strong></div>
            <div style="color:#6b7280;margin-bottom:8px;">GST (10%): <strong>$${invoice.gst.toFixed(2)}</strong></div>
            <div style="font-size:20px;font-weight:900;color:#1a1a2e;">Total: $${invoice.total.toFixed(2)} AUD</div>
          </div>
          ${invoice.notes ? `<div style="margin-top:24px;padding:16px;background:#f4f4f4;border-left:4px solid #c8102e;"><div style="font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:bold;margin-bottom:6px;">Notes</div><div style="color:#4a4a4a;">${invoice.notes}</div></div>` : ""}
          <div style="margin-top:32px;padding-top:24px;border-top:1px solid #e5e7eb;color:#6b7280;font-size:12px;">
            <p>Please arrange payment by the due date. For queries, contact us at info@securityguardcompanymelbourne.com or call 1300 XXX XXX.</p>
          </div>
        </div>
      </div>
      </body></html>
    `;

    try {
      await resend.emails.send({
        from: "Security Guard Company Melbourne <invoices@securityguardcompanymelbourne.com>",
        to: [invoice.client_email],
        subject: `Invoice #${invoice.invoice_number} — Security Guard Company Melbourne`,
        html: emailHtml,
      });
      await supabaseAdmin.from("invoices").update({ status: "sent", sent_at: new Date().toISOString() }).eq("id", id);
      return NextResponse.json({ success: true });
    } catch (err) {
      return NextResponse.json({ error: String(err) }, { status: 500 });
    }
  }

  const { error } = await supabaseAdmin.from("invoices").update({ ...fields, updated_at: new Date().toISOString() }).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  if (!(await verifyAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await req.json();
  const { error } = await supabaseAdmin.from("invoices").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
