"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Lead = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  status: string;
  created_at: string;
};

type Audit = {
  id: string;
  business_name: string;
  contact_name: string;
  phone: string;
  email: string;
  site_address: string;
  business_type: string;
  status: string;
  created_at: string;
};

const STATUS_COLORS: Record<string, string> = {
  new: "bg-green-100 text-green-800",
  contacted: "bg-blue-100 text-blue-800",
  qualified: "bg-purple-100 text-purple-800",
  closed: "bg-gray-100 text-gray-600",
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [audits, setAudits] = useState<Audit[]>([]);
  const [tab, setTab] = useState<"leads" | "audits">("leads");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  async function fetchData() {
    const res = await fetch("/api/admin/leads/");
    if (res.status === 401) { router.push("/admin/"); return; }
    const data = await res.json();
    setLeads(data.leads || []);
    setAudits(data.audits || []);
    setLoading(false);
  }

  async function updateStatus(id: string, table: "lead" | "audit", status: string) {
    await fetch("/api/admin/leads/", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, table, status }),
    });
    fetchData();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout/", { method: "POST" });
    router.push("/admin/");
  }

  useEffect(() => { fetchData(); }, []);

  function fmt(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-AU", {
      day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
    });
  }

  if (loading) return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center">
      <div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading...</div>
    </div>
  );

  const currentData = tab === "leads" ? leads : audits;

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      {/* Header */}
      <div className="bg-[#1a1a2e] px-6 py-4 flex items-center justify-between">
        <div>
          <span className="text-[#c8102e] font-black text-lg uppercase tracking-wider">Security Guard</span>
          <span className="text-gray-400 text-sm ml-3 uppercase tracking-widest">Admin</span>
        </div>
        <button onClick={handleLogout}
          className="text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors">
          Sign Out
        </button>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", value: leads.length },
            { label: "New Leads", value: leads.filter(l => l.status === "new").length },
            { label: "Audit Bookings", value: audits.length },
            { label: "New Audits", value: audits.filter(a => a.status === "new").length },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 border border-gray-200">
              <div className="text-3xl font-black text-[#c8102e]">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mb-6 border-b border-gray-200">
          {(["leads", "audits"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-6 py-3 text-xs font-bold uppercase tracking-widest border-b-2 transition-colors ${
                tab === t ? "border-[#c8102e] text-[#c8102e]" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}>
              {t === "leads" ? `Contact Leads (${leads.length})` : `Audit Bookings (${audits.length})`}
            </button>
          ))}
        </div>

        {/* Table */}
        {currentData.length === 0 ? (
          <div className="bg-white border border-gray-200 p-16 text-center">
            <p className="text-gray-400 text-sm uppercase tracking-widest">No {tab} yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {currentData.map((item) => {
              const isLead = tab === "leads";
              const lead = item as Lead;
              const audit = item as Audit;
              return (
                <div key={item.id} className="bg-white border border-gray-200 p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="font-black text-[#1a1a2e] uppercase text-sm">
                          {isLead ? `${lead.first_name} ${lead.last_name}` : audit.contact_name}
                        </span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase ${STATUS_COLORS[item.status] || "bg-gray-100 text-gray-600"}`}>
                          {item.status}
                        </span>
                        {isLead && (
                          <span className="text-xs bg-[#1a1a2e] text-white px-2 py-0.5 uppercase font-bold">
                            {lead.service}
                          </span>
                        )}
                        {!isLead && audit.business_type && (
                          <span className="text-xs bg-[#1a1a2e] text-white px-2 py-0.5 uppercase font-bold">
                            {audit.business_type}
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm mb-3">
                        <a href={`mailto:${item.email}`} className="text-[#c8102e] hover:underline">{item.email}</a>
                        <a href={`tel:${item.phone}`} className="text-[#1a1a2e] font-semibold">{item.phone}</a>
                        {isLead && lead.company && <span className="text-gray-500">{lead.company}</span>}
                        {!isLead && audit.business_name && <span className="text-gray-500">{audit.business_name}</span>}
                      </div>
                      {isLead && lead.message && (
                        <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-[#c8102e] pl-3">
                          {lead.message}
                        </p>
                      )}
                      {!isLead && audit.site_address && (
                        <p className="text-gray-500 text-sm border-l-2 border-[#c8102e] pl-3">
                          📍 {audit.site_address}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 lg:items-end shrink-0">
                      <span className="text-gray-400 text-xs">{fmt(item.created_at)}</span>
                      <select
                        value={item.status}
                        onChange={e => updateStatus(item.id, isLead ? "lead" : "audit", e.target.value)}
                        className="border border-gray-300 px-3 py-1.5 text-xs font-bold uppercase focus:outline-none focus:border-[#c8102e] bg-white"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="closed">Closed</option>
                      </select>
                      <div className="flex gap-2">
                        <a href={`mailto:${item.email}`}
                          className="bg-[#c8102e] text-white text-xs font-bold px-3 py-1.5 uppercase hover:bg-[#a00d25] transition-colors">
                          Email
                        </a>
                        <a href={`tel:${item.phone}`}
                          className="bg-[#1a1a2e] text-white text-xs font-bold px-3 py-1.5 uppercase hover:bg-black transition-colors">
                          Call
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
