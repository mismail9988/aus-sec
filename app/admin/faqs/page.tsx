"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type FAQ = { id: string; question: string; answer: string; category: string; sort_order: number };

export default function AdminFAQsPage() {
  const [items, setItems] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function load() {
    const res = await fetch("/api/admin/faqs/");
    if (res.status === 401) { router.push("/admin/login/"); return; }
    const data = await res.json();
    setItems(data.items || []);
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this FAQ?")) return;
    await fetch("/api/admin/faqs/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    load();
  }

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    const form = e.currentTarget;
    const body = {
      question: (form.elements.namedItem("question") as HTMLInputElement).value,
      answer: (form.elements.namedItem("answer") as HTMLTextAreaElement).value,
      category: (form.elements.namedItem("category") as HTMLSelectElement).value,
      sort_order: Number((form.elements.namedItem("sort_order") as HTMLInputElement).value) || 99,
    };
    await fetch("/api/admin/faqs/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    form.reset();
    setShowForm(false);
    setSaving(false);
    load();
  }

  useEffect(() => { load(); }, []);

  const grouped = items.reduce((acc, faq) => {
    const cat = faq.category || "General";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  if (loading) return <div className="p-8 flex items-center justify-center min-h-64"><div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading...</div></div>;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">FAQs</h1>
          <p className="text-gray-500 text-sm mt-1">{items.length} questions</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="bg-[#c8102e] text-white font-bold px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
          + Add FAQ
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="bg-white border border-gray-200 p-6 mb-6 space-y-4">
          <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide">New FAQ</h2>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Question *</label>
            <input name="question" required className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" placeholder="e.g. How quickly can you deploy security guards?" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Answer *</label>
            <textarea name="answer" required rows={4} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] resize-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Category</label>
              <select name="category" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] bg-white">
                {["General", "Licensing", "Pricing", "Services", "Deployment", "Contracts"].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Sort Order</label>
              <input name="sort_order" type="number" defaultValue={99} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" />
            </div>
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="bg-[#c8102e] text-white font-bold px-5 py-2 text-xs uppercase tracking-widest hover:bg-[#a00d25] disabled:opacity-60">{saving ? "Saving..." : "Add FAQ"}</button>
            <button type="button" onClick={() => setShowForm(false)} className="border border-gray-300 text-gray-600 font-bold px-5 py-2 text-xs uppercase hover:bg-gray-50">Cancel</button>
          </div>
        </form>
      )}

      {Object.keys(grouped).length === 0 ? (
        <div className="bg-white border border-gray-200 p-16 text-center"><p className="text-gray-400 text-sm uppercase tracking-widest">No FAQs yet</p></div>
      ) : (
        Object.entries(grouped).map(([cat, faqs]) => (
          <div key={cat} className="mb-8">
            <h2 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-3">
              {cat} <span className="h-px flex-1 bg-gray-200" />
            </h2>
            <div className="space-y-2">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white border border-gray-200 p-5 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-black text-[#1a1a2e] text-sm mb-2">{faq.question}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                  <button onClick={() => handleDelete(faq.id)} className="border border-red-200 text-red-600 font-bold px-3 py-1.5 text-xs uppercase hover:bg-red-50 shrink-0">Delete</button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
