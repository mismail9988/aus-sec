"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Testimonial = { id: string; name: string; company: string; role: string; text: string; rating: number; published: boolean; created_at: string };

export default function AdminTestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function load() {
    const res = await fetch("/api/admin/testimonials/");
    if (res.status === 401) { router.push("/admin/login/"); return; }
    const data = await res.json();
    setItems(data.items || []);
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this review?")) return;
    await fetch("/api/admin/testimonials/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    load();
  }

  async function togglePublished(item: Testimonial) {
    await fetch("/api/admin/testimonials/", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: item.id, published: !item.published }) });
    load();
  }

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      text: (form.elements.namedItem("text") as HTMLTextAreaElement).value,
      rating: Number((form.elements.namedItem("rating") as HTMLSelectElement).value),
      published: true,
    };
    await fetch("/api/admin/testimonials/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    form.reset();
    setShowForm(false);
    setSaving(false);
    load();
  }

  useEffect(() => { load(); }, []);

  if (loading) return <div className="p-8 flex items-center justify-center min-h-64"><div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading...</div></div>;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">Testimonials</h1>
          <p className="text-gray-500 text-sm mt-1">{items.length} reviews · {items.filter(i => i.published).length} published</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="bg-[#c8102e] text-white font-bold px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
          + Add Review
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="bg-white border border-gray-200 p-6 mb-6 space-y-4">
          <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide">New Review</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div><label className="block text-xs font-bold uppercase text-gray-500 mb-1">Name *</label><input name="name" required className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" /></div>
            <div><label className="block text-xs font-bold uppercase text-gray-500 mb-1">Company</label><input name="company" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" /></div>
            <div><label className="block text-xs font-bold uppercase text-gray-500 mb-1">Role / Title</label><input name="role" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" /></div>
          </div>
          <div><label className="block text-xs font-bold uppercase text-gray-500 mb-1">Review Text *</label><textarea name="text" required rows={3} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] resize-none" /></div>
          <div className="flex gap-4 items-end">
            <div><label className="block text-xs font-bold uppercase text-gray-500 mb-1">Rating</label>
              <select name="rating" className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] bg-white">
                {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} stars</option>)}
              </select>
            </div>
            <button type="submit" disabled={saving} className="bg-[#c8102e] text-white font-bold px-5 py-2 text-xs uppercase tracking-widest hover:bg-[#a00d25] disabled:opacity-60">{saving ? "Saving..." : "Add Review"}</button>
            <button type="button" onClick={() => setShowForm(false)} className="border border-gray-300 text-gray-600 font-bold px-5 py-2 text-xs uppercase hover:bg-gray-50">Cancel</button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-black text-[#1a1a2e] text-sm">{item.name}</span>
                  {item.company && <span className="text-xs text-gray-500">{item.role ? `${item.role}, ` : ""}{item.company}</span>}
                  <span className={`text-xs font-bold px-2 py-0.5 uppercase ${item.published ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>{item.published ? "Published" : "Hidden"}</span>
                  <span className="text-yellow-500 text-xs">{"★".repeat(item.rating)}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{item.text}"</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => togglePublished(item)} className="border border-gray-300 text-gray-600 font-bold px-3 py-1.5 text-xs uppercase hover:bg-gray-50">{item.published ? "Hide" : "Show"}</button>
                <button onClick={() => handleDelete(item.id)} className="border border-red-200 text-red-600 font-bold px-3 py-1.5 text-xs uppercase hover:bg-red-50">Delete</button>
              </div>
            </div>
          </div>
        ))}
        {items.length === 0 && <div className="bg-white border border-gray-200 p-16 text-center"><p className="text-gray-400 text-sm uppercase tracking-widest">No reviews yet</p></div>}
      </div>
    </div>
  );
}
