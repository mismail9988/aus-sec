"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Application = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  licence: string;
  message: string;
  status: string;
  notes: string;
  created_at: string;
};

const statusColors: Record<string, string> = {
  new: "bg-green-100 text-green-800",
  reviewing: "bg-blue-100 text-blue-700",
  interview: "bg-purple-100 text-purple-700",
  offered: "bg-yellow-100 text-yellow-800",
  hired: "bg-green-100 text-green-800",
  declined: "bg-red-100 text-red-700",
};

export default function AdminApplicationsPage() {
  const [items, setItems] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Application | null>(null);
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function load() {
    const res = await fetch("/api/admin/applications/");
    if (res.status === 401) { router.push("/admin/login/"); return; }
    const data = await res.json();
    setItems(data.items || []);
    setLoading(false);
  }

  async function handleStatus(id: string, status: string) {
    await fetch("/api/admin/applications/", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status }) });
    setItems(prev => prev.map(i => i.id === id ? { ...i, status } : i));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : prev);
  }

  async function handleNotes(id: string) {
    setSaving(true);
    await fetch("/api/admin/applications/", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, notes }) });
    setSaving(false);
    setItems(prev => prev.map(i => i.id === id ? { ...i, notes } : i));
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this application?")) return;
    await fetch("/api/admin/applications/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    setItems(prev => prev.filter(i => i.id !== id));
    if (selected?.id === id) setSelected(null);
  }

  function openDetail(item: Application) {
    setSelected(item);
    setNotes(item.notes || "");
  }

  useEffect(() => { load(); }, []);

  if (loading) return <div className="p-8 flex items-center justify-center min-h-64"><div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading...</div></div>;

  const newCount = items.filter(i => i.status === "new").length;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">Job Applications</h1>
          <p className="text-gray-500 text-sm mt-1">{items.length} applications · {newCount} new</p>
        </div>
      </div>

      <div className="flex gap-6">
        {/* List */}
        <div className={`${selected ? "w-1/2" : "w-full"} transition-all`}>
          {items.length === 0 ? (
            <div className="bg-white border border-gray-200 p-16 text-center">
              <p className="text-gray-400 text-sm uppercase tracking-widest">No applications yet</p>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 divide-y divide-gray-100">
              {items.map(item => (
                <div
                  key={item.id}
                  onClick={() => openDetail(item)}
                  className={`p-5 cursor-pointer hover:bg-[#fafafa] transition-colors ${selected?.id === item.id ? "bg-[#fff5f5] border-l-4 border-[#c8102e]" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-black text-[#1a1a2e] text-sm">{item.name}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 uppercase ${statusColors[item.status] || "bg-gray-100 text-gray-600"}`}>{item.status}</span>
                      </div>
                      <div className="text-xs text-[#c8102e] font-bold uppercase tracking-wide">{item.role}</div>
                      <div className="text-xs text-gray-400 mt-1">{item.email} {item.phone && `· ${item.phone}`}</div>
                    </div>
                    <div className="text-xs text-gray-400 shrink-0">
                      {new Date(item.created_at).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detail panel */}
        {selected && (
          <div className="w-1/2 bg-white border border-gray-200 p-6 self-start sticky top-6">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-lg font-black text-[#1a1a2e] uppercase">{selected.name}</h2>
                <p className="text-[#c8102e] text-xs font-bold uppercase tracking-wide mt-0.5">{selected.role}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-xl font-bold leading-none">×</button>
            </div>

            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm mb-5">
              {[
                ["Email", selected.email],
                ["Phone", selected.phone || "Not provided"],
                ["Experience", selected.experience || "Not specified"],
                ["Licence No.", selected.licence || "Not provided"],
                ["Applied", new Date(selected.created_at).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs text-gray-400 uppercase tracking-widest font-bold">{k}</dt>
                  <dd className="text-[#1a1a2e] font-semibold mt-0.5 break-all">{v}</dd>
                </div>
              ))}
            </dl>

            {selected.message && (
              <div className="mb-5">
                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Cover Note</div>
                <p className="text-sm text-gray-600 leading-relaxed bg-[#f4f4f4] p-3">{selected.message}</p>
              </div>
            )}

            <div className="mb-5">
              <label className="block text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Status</label>
              <select
                value={selected.status}
                onChange={e => handleStatus(selected.id, e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] bg-white"
              >
                {["new", "reviewing", "interview", "offered", "hired", "declined"].map(s => (
                  <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Internal Notes</label>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                rows={3}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] resize-none"
                placeholder="Add recruitment notes..."
              />
              <button
                onClick={() => handleNotes(selected.id)}
                disabled={saving}
                className="mt-2 bg-[#1a1a2e] text-white font-bold px-4 py-2 text-xs uppercase tracking-widest hover:bg-[#2d2d4e] disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Notes"}
              </button>
            </div>

            <div className="flex gap-2 pt-4 border-t border-gray-100">
              <a href={`mailto:${selected.email}`} className="border border-gray-300 text-gray-600 font-bold px-4 py-2 text-xs uppercase hover:bg-gray-50 flex-1 text-center">
                Email
              </a>
              {selected.phone && (
                <a href={`tel:${selected.phone}`} className="border border-gray-300 text-gray-600 font-bold px-4 py-2 text-xs uppercase hover:bg-gray-50 flex-1 text-center">
                  Call
                </a>
              )}
              <button onClick={() => handleDelete(selected.id)} className="border border-red-200 text-red-600 font-bold px-4 py-2 text-xs uppercase hover:bg-red-50">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
