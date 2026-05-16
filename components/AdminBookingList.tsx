"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export type Booking = Record<string, string>;

const STATUS_COLORS: Record<string, string> = {
  new: "bg-green-100 text-green-800",
  contacted: "bg-blue-100 text-blue-800",
  qualified: "bg-purple-100 text-purple-800",
  closed: "bg-gray-100 text-gray-600",
  pending: "bg-yellow-100 text-yellow-800",
};

interface Props {
  title: string;
  apiEndpoint: string;
  detailBase: string;
  fields: { key: string; label: string; primary?: boolean; badge?: boolean }[];
}

export default function AdminBookingList({ title, apiEndpoint, detailBase, fields }: Props) {
  const [items, setItems] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const router = useRouter();

  async function fetchData() {
    const res = await fetch(apiEndpoint);
    if (res.status === 401) { router.push("/admin/login/"); return; }
    const data = await res.json();
    setItems(data.items || []);
    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    await fetch(apiEndpoint, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    fetchData();
  }

  useEffect(() => { fetchData(); }, []);

  const filtered = items.filter((item) => {
    const matchStatus = statusFilter === "all" || item.status === statusFilter;
    const matchSearch = search === "" || Object.values(item).some(v =>
      String(v).toLowerCase().includes(search.toLowerCase())
    );
    return matchStatus && matchSearch;
  });

  const primaryField = fields.find(f => f.primary);

  function fmt(d: string) {
    return new Date(d).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  if (loading) return (
    <div className="p-8 flex items-center justify-center min-h-64">
      <div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading...</div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">{title}</h1>
          <p className="text-gray-500 text-sm mt-1">{items.length} total submissions</p>
        </div>
        <div className="flex gap-3">
          <span className={`text-xs font-bold px-3 py-1.5 uppercase ${STATUS_COLORS["new"]}`}>
            {items.filter(i => i.status === "new").length} New
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#c8102e] flex-1"
        />
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
          className="border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#c8102e] bg-white">
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="qualified">Qualified</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-gray-200 p-16 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest">No submissions yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 p-5 hover:border-[#c8102e] transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <Link href={`${detailBase}${item.id}/`} className="font-black text-[#1a1a2e] uppercase text-sm hover:text-[#c8102e]">
                      {primaryField ? item[primaryField.key] : item.id}
                    </Link>
                    <span className={`text-xs font-bold px-2 py-0.5 uppercase ${STATUS_COLORS[item.status] || "bg-gray-100 text-gray-600"}`}>
                      {item.status}
                    </span>
                    {fields.filter(f => f.badge).map(f => item[f.key] && (
                      <span key={f.key} className="text-xs bg-[#1a1a2e] text-white px-2 py-0.5 uppercase font-bold">
                        {item[f.key]}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    {fields.filter(f => !f.primary && !f.badge).slice(0, 4).map(f => item[f.key] && (
                      <span key={f.key} className="text-gray-500 text-xs">{item[f.key]}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-gray-400 text-xs">{fmt(item.created_at)}</span>
                  <select value={item.status}
                    onChange={e => updateStatus(item.id, e.target.value)}
                    className="border border-gray-300 px-2 py-1.5 text-xs font-bold uppercase focus:outline-none focus:border-[#c8102e] bg-white">
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="closed">Closed</option>
                  </select>
                  <Link href={`${detailBase}${item.id}/`}
                    className="bg-[#1a1a2e] text-white text-xs font-bold px-3 py-1.5 uppercase hover:bg-black transition-colors">
                    View
                  </Link>
                  {item.email && (
                    <a href={`mailto:${item.email}`}
                      className="bg-[#c8102e] text-white text-xs font-bold px-3 py-1.5 uppercase hover:bg-[#a00d25] transition-colors">
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
