"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type LineItem = { description: string; qty: number; rate: number };

export default function NewInvoicePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [items, setItems] = useState<LineItem[]>([{ description: "", qty: 1, rate: 0 }]);
  const sendNowRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const today = new Date().toISOString().split("T")[0];
  const due = new Date(Date.now() + 14 * 86400000).toISOString().split("T")[0];
  const invoiceNum = `INV-${Date.now().toString().slice(-6)}`;

  function addItem() {
    setItems(prev => [...prev, { description: "", qty: 1, rate: 0 }]);
  }

  function removeItem(i: number) {
    setItems(prev => prev.filter((_, idx) => idx !== i));
  }

  function updateItem(i: number, field: keyof LineItem, value: string | number) {
    setItems(prev => prev.map((item, idx) => idx === i ? { ...item, [field]: value } : item));
  }

  const subtotal = items.reduce((s, i) => s + (Number(i.qty) * Number(i.rate)), 0);
  const gst = subtotal * 0.1;
  const total = subtotal + gst;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError("");
    const form = e.currentTarget;
    const body = {
      client_name: (form.elements.namedItem("client_name") as HTMLInputElement).value,
      client_email: (form.elements.namedItem("client_email") as HTMLInputElement).value,
      client_company: (form.elements.namedItem("client_company") as HTMLInputElement).value,
      invoice_number: (form.elements.namedItem("invoice_number") as HTMLInputElement).value,
      issue_date: (form.elements.namedItem("issue_date") as HTMLInputElement).value,
      due_date: (form.elements.namedItem("due_date") as HTMLInputElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
      items,
      status: "draft",
    };

    const res = await fetch("/api/admin/invoices/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const data = await res.json();
    if (!res.ok) { setError(data.error || "Failed to save"); setSaving(false); return; }

    if (sendNowRef.current && data.id) {
      await fetch("/api/admin/invoices/", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: data.id, action: "send" }) });
    }

    router.push("/admin/invoices/");
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <Link href="/admin/invoices/" className="hover:text-[#c8102e]">Invoices</Link>
        <span>/</span>
        <span className="text-[#2d2d2d] font-semibold">New Invoice</span>
      </div>
      <h1 className="text-2xl font-black text-[#1a1a2e] uppercase mb-8">New Invoice</h1>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white border border-gray-200 p-6 space-y-5">
          <h2 className="text-xs font-black text-gray-500 uppercase tracking-widest">Client Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Client Name *</label>
              <input name="client_name" required className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email *</label>
              <input name="client_email" type="email" required className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Company</label>
              <input name="client_company" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Invoice Number *</label>
              <input name="invoice_number" required defaultValue={invoiceNum} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] font-mono" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Issue Date</label>
              <input name="issue_date" type="date" defaultValue={today} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Due Date</label>
              <input name="due_date" type="date" defaultValue={due} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Line Items</h2>
          <div className="space-y-3">
            <div className="grid grid-cols-12 gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <div className="col-span-6">Description</div>
              <div className="col-span-2 text-center">Qty</div>
              <div className="col-span-2 text-right">Rate (AUD)</div>
              <div className="col-span-1 text-right">Total</div>
              <div className="col-span-1" />
            </div>
            {items.map((item, i) => (
              <div key={i} className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-6">
                  <input
                    value={item.description}
                    onChange={e => updateItem(i, "description", e.target.value)}
                    placeholder="e.g. Security guard services — 8hr shift"
                    className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={e => updateItem(i, "qty", Number(e.target.value))}
                    className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] text-center"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.rate}
                    onChange={e => updateItem(i, "rate", Number(e.target.value))}
                    className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] text-right"
                  />
                </div>
                <div className="col-span-1 text-right text-sm font-bold text-[#1a1a2e]">
                  ${(Number(item.qty) * Number(item.rate)).toFixed(2)}
                </div>
                <div className="col-span-1 text-right">
                  {items.length > 1 && (
                    <button type="button" onClick={() => removeItem(i)} className="text-red-400 hover:text-red-600 text-lg font-bold leading-none">×</button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button type="button" onClick={addItem} className="mt-4 text-[#c8102e] font-bold text-xs uppercase tracking-widest hover:underline">
            + Add Line Item
          </button>

          <div className="mt-6 border-t border-gray-200 pt-4 text-right space-y-1">
            <div className="text-sm text-gray-500">Subtotal: <span className="font-bold text-[#1a1a2e]">${subtotal.toFixed(2)}</span></div>
            <div className="text-sm text-gray-500">GST (10%): <span className="font-bold text-[#1a1a2e]">${gst.toFixed(2)}</span></div>
            <div className="text-lg font-black text-[#1a1a2e]">Total: ${total.toFixed(2)} AUD</div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Notes / Payment Instructions</label>
          <textarea name="notes" rows={3} placeholder="e.g. Please pay via bank transfer to BSB: 123-456, Account: 12345678" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] resize-none" />
        </div>

        {error && <div className="bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">{error}</div>}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            onClick={() => { sendNowRef.current = false; }}
            className="bg-[#1a1a2e] text-white font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#2d2d4e] disabled:opacity-60"
          >
            {saving && !sendNowRef.current ? "Saving..." : "Save as Draft"}
          </button>
          <button
            type="submit"
            disabled={saving}
            onClick={() => { sendNowRef.current = true; }}
            className="bg-[#c8102e] text-white font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#a00d25] disabled:opacity-60"
          >
            {saving && sendNowRef.current ? "Sending..." : "Save & Send Now"}
          </button>
          <Link href="/admin/invoices/" className="border border-gray-300 text-gray-600 font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-gray-50">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
