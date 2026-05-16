"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Member = { id: string; name: string; role: string; bio: string; licence_number: string; sort_order: number };

export default function AdminTeamPage() {
  const [items, setItems] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function load() {
    const res = await fetch("/api/admin/team/");
    if (res.status === 401) { router.push("/admin/login/"); return; }
    const data = await res.json();
    setItems(data.items || []);
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this team member?")) return;
    await fetch("/api/admin/team/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    load();
  }

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      bio: (form.elements.namedItem("bio") as HTMLTextAreaElement).value,
      licence_number: (form.elements.namedItem("licence_number") as HTMLInputElement).value,
      sort_order: Number((form.elements.namedItem("sort_order") as HTMLInputElement).value) || 99,
    };
    await fetch("/api/admin/team/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
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
          <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">Team Members</h1>
          <p className="text-gray-500 text-sm mt-1">{items.length} members</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="bg-[#c8102e] text-white font-bold px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
          + Add Member
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="bg-white border border-gray-200 p-6 mb-6 space-y-4">
          <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide">New Team Member</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name *</label><input name="name" required className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" /></div>
            <div><label className="block text-xs font-bold uppercase text-gray-500 mb-1">Role / Title *</label><input name="role" required className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" placeholder="e.g. Senior Security Officer" /></div>
            <div><label className="block text-xs font-bold uppercase text-gray-500 mb-1">Licence Number</label><input name="licence_number" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" /></div>
            <div><label className="block text-xs font-bold uppercase text-gray-500 mb-1">Sort Order</label><input name="sort_order" type="number" defaultValue={99} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e]" /></div>
          </div>
          <div><label className="block text-xs font-bold uppercase text-gray-500 mb-1">Bio</label><textarea name="bio" rows={3} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] resize-none" /></div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="bg-[#c8102e] text-white font-bold px-5 py-2 text-xs uppercase tracking-widest hover:bg-[#a00d25] disabled:opacity-60">{saving ? "Saving..." : "Add Member"}</button>
            <button type="button" onClick={() => setShowForm(false)} className="border border-gray-300 text-gray-600 font-bold px-5 py-2 text-xs uppercase hover:bg-gray-50">Cancel</button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 p-5 flex items-start justify-between gap-4">
            <div>
              <p className="font-black text-[#1a1a2e] text-sm">{item.name}</p>
              <p className="text-[#c8102e] text-xs font-bold uppercase tracking-wide mt-0.5">{item.role}</p>
              {item.licence_number && <p className="text-gray-400 text-xs mt-1">Licence: {item.licence_number}</p>}
              {item.bio && <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.bio}</p>}
            </div>
            <button onClick={() => handleDelete(item.id)} className="border border-red-200 text-red-600 font-bold px-3 py-1.5 text-xs uppercase hover:bg-red-50 shrink-0">Delete</button>
          </div>
        ))}
        {items.length === 0 && <div className="bg-white border border-gray-200 p-16 text-center"><p className="text-gray-400 text-sm uppercase tracking-widest">No team members yet</p></div>}
      </div>
    </div>
  );
}
