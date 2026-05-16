"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Invoice = {
  id: string;
  invoice_number: string;
  client_name: string;
  client_email: string;
  client_company: string;
  issue_date: string;
  due_date: string;
  items: string;
  notes: string;
  subtotal: number;
  gst: number;
  total: number;
  status: string;
  sent_at: string;
  created_at: string;
};

type LineItem = { description: string; qty: number; rate: number };

const statusColors: Record<string, string> = {
  draft: "bg-gray-100 text-gray-600",
  sent: "bg-blue-100 text-blue-700",
  paid: "bg-green-100 text-green-700",
  overdue: "bg-red-100 text-red-700",
  cancelled: "bg-gray-100 text-gray-400",
};

export default function InvoiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [saving, setSaving] = useState(false);
  const [sending, setSending] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/admin/invoices/?id=${id}`).then(r => r.json()).then(d => setInvoice(d.item));
  }, [id]);

  async function handleStatusChange(status: string) {
    setSaving(true);
    await fetch("/api/admin/invoices/", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status }) });
    setSaving(false);
    setInvoice(prev => prev ? { ...prev, status } : prev);
  }

  async function handleSend() {
    if (!invoice) return;
    if (!confirm(`Send invoice to ${invoice.client_email}?`)) return;
    setSending(true);
    const res = await fetch("/api/admin/invoices/", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, action: "send" }) });
    setSending(false);
    if (res.ok) { alert("Invoice sent!"); setInvoice(prev => prev ? { ...prev, status: "sent" } : prev); }
    else { alert("Failed to send invoice."); }
  }

  async function handleDelete() {
    if (!confirm("Delete this invoice?")) return;
    await fetch("/api/admin/invoices/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    router.push("/admin/invoices/");
  }

  if (!invoice) return <div className="p-8 flex items-center justify-center min-h-64"><div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading...</div></div>;

  const parsedItems: LineItem[] = JSON.parse(invoice.items || "[]");

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <Link href="/admin/invoices/" className="hover:text-[#c8102e]">Invoices</Link>
        <span>/</span>
        <span className="text-[#2d2d2d] font-semibold">#{invoice.invoice_number}</span>
      </div>

      <div className="flex items-start justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">Invoice #{invoice.invoice_number}</h1>
          <div className="flex items-center gap-3 mt-2">
            <span className={`text-xs font-bold px-2 py-0.5 uppercase ${statusColors[invoice.status] || "bg-gray-100 text-gray-600"}`}>{invoice.status}</span>
            {invoice.sent_at && <span className="text-xs text-gray-400">Sent {new Date(invoice.sent_at).toLocaleDateString("en-AU")}</span>}
          </div>
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {invoice.status === "draft" && (
            <button onClick={handleSend} disabled={sending} className="bg-blue-600 text-white font-bold px-4 py-2 text-xs uppercase tracking-widest hover:bg-blue-700 disabled:opacity-60">
              {sending ? "Sending..." : "Send to Client"}
            </button>
          )}
          <select
            value={invoice.status}
            onChange={e => handleStatusChange(e.target.value)}
            disabled={saving}
            className="border border-gray-300 px-3 py-2 text-xs font-bold uppercase bg-white focus:outline-none focus:border-[#c8102e]"
          >
            {["draft", "sent", "paid", "overdue", "cancelled"].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <button onClick={handleDelete} className="border border-red-200 text-red-600 font-bold px-4 py-2 text-xs uppercase hover:bg-red-50">Delete</button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 p-8 mb-6">
        <div className="flex justify-between mb-8">
          <div>
            <div className="text-[#c8102e] font-black text-lg uppercase tracking-wider">Security Guard Company Melbourne</div>
            <div className="text-gray-400 text-xs uppercase tracking-widest mt-0.5">securityguardcompanymelbourne.com</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-[#1a1a2e] uppercase">Invoice</div>
            <div className="text-gray-500 text-sm mt-1">#{invoice.invoice_number}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Billed To</div>
            <div className="font-black text-[#1a1a2e]">{invoice.client_name}</div>
            {invoice.client_company && <div className="text-gray-600 text-sm">{invoice.client_company}</div>}
            <div className="text-gray-500 text-sm">{invoice.client_email}</div>
          </div>
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Invoice Details</div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between gap-4"><span className="text-gray-500">Issue Date</span><span className="font-semibold">{invoice.issue_date}</span></div>
              <div className="flex justify-between gap-4"><span className="text-gray-500">Due Date</span><span className="font-semibold text-[#c8102e]">{invoice.due_date}</span></div>
            </div>
          </div>
        </div>

        <table className="w-full mb-6">
          <thead>
            <tr className="bg-[#f4f4f4]">
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Description</th>
              <th className="px-4 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-widest">Qty</th>
              <th className="px-4 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-widest">Rate</th>
              <th className="px-4 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-widest">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {parsedItems.map((item, i) => (
              <tr key={i}>
                <td className="px-4 py-3 text-sm">{item.description}</td>
                <td className="px-4 py-3 text-sm text-center">{item.qty}</td>
                <td className="px-4 py-3 text-sm text-right">${Number(item.rate).toFixed(2)}</td>
                <td className="px-4 py-3 text-sm text-right font-bold">${(item.qty * item.rate).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <div className="w-64 space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Subtotal</span><span className="font-semibold">${invoice.subtotal?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>GST (10%)</span><span className="font-semibold">${invoice.gst?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-black text-[#1a1a2e] border-t border-gray-200 pt-2">
              <span>Total</span><span>${invoice.total?.toFixed(2)} AUD</span>
            </div>
          </div>
        </div>

        {invoice.notes && (
          <div className="mt-6 p-4 bg-[#f4f4f4] border-l-4 border-[#c8102e]">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Notes</div>
            <div className="text-sm text-gray-600">{invoice.notes}</div>
          </div>
        )}
      </div>
    </div>
  );
}
