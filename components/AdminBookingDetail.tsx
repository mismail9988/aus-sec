"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Booking = Record<string, string>;

const STATUS_COLORS: Record<string, string> = {
  new: "bg-green-100 text-green-800",
  contacted: "bg-blue-100 text-blue-800",
  qualified: "bg-purple-100 text-purple-800",
  closed: "bg-gray-100 text-gray-600",
};

interface Props {
  apiEndpoint: string;
  listHref: string;
  listLabel: string;
  fields: { key: string; label: string; wide?: boolean }[];
  id: string;
}

export default function AdminBookingDetail({ apiEndpoint, listHref, listLabel, fields, id }: Props) {
  const [item, setItem] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("new");
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const res = await fetch(`${apiEndpoint}?id=${id}`);
      if (res.status === 401) { router.push("/admin/login/"); return; }
      if (res.status === 404) { router.push(listHref); return; }
      const data = await res.json();
      setItem(data.item);
      setStatus(data.item?.status || "new");
      setNotes(data.item?.notes || "");
      setLoading(false);
    }
    load();
  }, [id]);

  async function save() {
    setSaving(true);
    await fetch(apiEndpoint, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status, notes }),
    });
    setSaving(false);
  }

  function fmt(d: string) {
    return new Date(d).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  if (loading) return (
    <div className="p-8 flex items-center justify-center min-h-64">
      <div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading...</div>
    </div>
  );

  if (!item) return null;

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <Link href="/admin/dashboard/" className="hover:text-[#c8102e]">Dashboard</Link>
        <span>/</span>
        <Link href={listHref} className="hover:text-[#c8102e]">{listLabel}</Link>
        <span>/</span>
        <span className="text-[#2d2d2d] font-semibold">Detail</span>
      </div>

      <div className="flex items-start justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">Booking Detail</h1>
          <p className="text-gray-400 text-xs mt-1">Submitted {fmt(item.created_at)}</p>
        </div>
        <span className={`text-xs font-bold px-3 py-1.5 uppercase ${STATUS_COLORS[item.status] || "bg-gray-100 text-gray-600"}`}>
          {item.status}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Fields */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide mb-5">Submission Details</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {fields.map(f => item[f.key] && (
                <div key={f.key} className={f.wide ? "sm:col-span-2" : ""}>
                  <dt className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">{f.label}</dt>
                  <dd className="text-sm text-[#1a1a2e] font-semibold">{item[f.key]}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Notes */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide mb-4">Internal Notes</h2>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={5}
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] resize-none"
              placeholder="Add internal notes about this booking..." />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide mb-4">Update Status</h2>
            <select value={status} onChange={e => setStatus(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#c8102e] bg-white mb-4">
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="closed">Closed</option>
            </select>
            <button onClick={save} disabled={saving}
              className="w-full bg-[#c8102e] text-white font-bold py-2.5 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors disabled:opacity-60">
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>

          {item.email && (
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <a href={`mailto:${item.email}`}
                  className="block w-full bg-[#1a1a2e] text-white font-bold py-2.5 text-xs uppercase tracking-widest text-center hover:bg-black transition-colors">
                  Send Email
                </a>
                {item.phone && (
                  <a href={`tel:${item.phone}`}
                    className="block w-full border border-gray-300 text-[#1a1a2e] font-bold py-2.5 text-xs uppercase tracking-widest text-center hover:bg-gray-50 transition-colors">
                    Call {item.phone}
                  </a>
                )}
              </div>
            </div>
          )}

          <Link href={listHref}
            className="block w-full border border-gray-300 text-gray-500 font-bold py-2.5 text-xs uppercase tracking-widest text-center hover:bg-gray-50 transition-colors">
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}
