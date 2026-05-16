"use client";

import { useEffect, useState } from "react";
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
  total: number;
  status: string;
  created_at: string;
};

const statusColors: Record<string, string> = {
  draft: "bg-gray-100 text-gray-600",
  sent: "bg-blue-100 text-blue-700",
  paid: "bg-green-100 text-green-700",
  overdue: "bg-red-100 text-red-700",
  cancelled: "bg-gray-100 text-gray-400",
};

export default function AdminInvoicesPage() {
  const [items, setItems] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  async function load() {
    const res = await fetch("/api/admin/invoices/");
    if (res.status === 401) { router.push("/admin/login/"); return; }
    const data = await res.json();
    setItems(data.items || []);
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this invoice?")) return;
    await fetch("/api/admin/invoices/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    load();
  }

  async function handleSend(id: string, email: string) {
    if (!confirm(`Send invoice to ${email}?`)) return;
    const res = await fetch("/api/admin/invoices/", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, action: "send" }) });
    if (res.ok) { alert("Invoice sent!"); load(); }
    else { alert("Failed to send invoice."); }
  }

  useEffect(() => { load(); }, []);

  if (loading) return <div className="p-8 flex items-center justify-center min-h-64"><div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading...</div></div>;

  const totalRevenue = items.filter(i => i.status === "paid").reduce((s, i) => s + i.total, 0);
  const outstanding = items.filter(i => i.status === "sent" || i.status === "overdue").reduce((s, i) => s + i.total, 0);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">Invoices</h1>
          <p className="text-gray-500 text-sm mt-1">{items.length} invoices</p>
        </div>
        <Link href="/admin/invoices/new/" className="bg-[#c8102e] text-white font-bold px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
          + New Invoice
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-gray-200 p-5">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Total Revenue</p>
          <p className="text-2xl font-black text-[#1a1a2e]">${totalRevenue.toLocaleString("en-AU", { minimumFractionDigits: 2 })}</p>
          <p className="text-xs text-gray-400 mt-1">from paid invoices</p>
        </div>
        <div className="bg-white border border-gray-200 p-5">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Outstanding</p>
          <p className="text-2xl font-black text-[#c8102e]">${outstanding.toLocaleString("en-AU", { minimumFractionDigits: 2 })}</p>
          <p className="text-xs text-gray-400 mt-1">sent &amp; overdue</p>
        </div>
        <div className="bg-white border border-gray-200 p-5">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Drafts</p>
          <p className="text-2xl font-black text-[#1a1a2e]">{items.filter(i => i.status === "draft").length}</p>
          <p className="text-xs text-gray-400 mt-1">not yet sent</p>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="bg-white border border-gray-200 p-16 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest">No invoices yet</p>
          <Link href="/admin/invoices/new/" className="inline-block mt-4 bg-[#c8102e] text-white font-bold px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-[#a00d25]">Create First Invoice</Link>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f4f4f4] border-b border-gray-200">
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Invoice #</th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Client</th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Due</th>
                <th className="px-5 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-widest">Total</th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {items.map(inv => (
                <tr key={inv.id} className="hover:bg-[#fafafa]">
                  <td className="px-5 py-4 text-sm font-black text-[#1a1a2e]">#{inv.invoice_number}</td>
                  <td className="px-5 py-4">
                    <div className="text-sm font-semibold text-[#1a1a2e]">{inv.client_name}</div>
                    {inv.client_company && <div className="text-xs text-gray-400">{inv.client_company}</div>}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-600">{inv.due_date}</td>
                  <td className="px-5 py-4 text-sm font-black text-[#1a1a2e] text-right">${inv.total?.toFixed(2)}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-bold px-2 py-0.5 uppercase ${statusColors[inv.status] || "bg-gray-100 text-gray-600"}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-2 justify-end">
                      <Link href={`/admin/invoices/${inv.id}/`} className="border border-gray-300 text-gray-600 font-bold px-3 py-1.5 text-xs uppercase hover:bg-gray-50">View</Link>
                      {inv.status === "draft" && (
                        <button onClick={() => handleSend(inv.id, inv.client_email)} className="border border-blue-200 text-blue-600 font-bold px-3 py-1.5 text-xs uppercase hover:bg-blue-50">Send</button>
                      )}
                      <button onClick={() => handleDelete(inv.id)} className="border border-red-200 text-red-600 font-bold px-3 py-1.5 text-xs uppercase hover:bg-red-50">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
