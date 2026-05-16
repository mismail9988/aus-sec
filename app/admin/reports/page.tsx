"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SOURCES = [
  { endpoint: "/api/admin/leads/", label: "Contact Leads", key: "leads" },
  { endpoint: "/api/bookings/quotes/", label: "Quote Requests", key: "items" },
  { endpoint: "/api/bookings/event/", label: "Event Bookings", key: "items" },
  { endpoint: "/api/bookings/patrol/", label: "Patrol Bookings", key: "items" },
  { endpoint: "/api/bookings/construction/", label: "Construction", key: "items" },
  { endpoint: "/api/bookings/corporate/", label: "Corporate", key: "items" },
  { endpoint: "/api/bookings/retail/", label: "Retail", key: "items" },
  { endpoint: "/api/bookings/crowd-control/", label: "Crowd Control", key: "items" },
  { endpoint: "/api/bookings/canine/", label: "Canine", key: "items" },
  { endpoint: "/api/bookings/concierge/", label: "Concierge", key: "items" },
  { endpoint: "/api/bookings/armed/", label: "Armed", key: "items" },
  { endpoint: "/api/bookings/loss-prevention/", label: "Loss Prevention", key: "items" },
  { endpoint: "/api/bookings/emergency/", label: "Emergency", key: "items" },
  { endpoint: "/api/bookings/contract/", label: "Contracts", key: "items" },
];

type Row = { label: string; new: number; contacted: number; qualified: number; closed: number; total: number };

export default function ReportsPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const results = await Promise.all(SOURCES.map(async (s) => {
        try {
          const res = await fetch(s.endpoint);
          if (res.status === 401) { router.push("/admin/login/"); return null; }
          const data = await res.json();
          const items: { status: string }[] = data[s.key] || [];
          return {
            label: s.label,
            new: items.filter(i => i.status === "new").length,
            contacted: items.filter(i => i.status === "contacted").length,
            qualified: items.filter(i => i.status === "qualified").length,
            closed: items.filter(i => i.status === "closed").length,
            total: items.length,
          };
        } catch { return null; }
      }));
      setRows(results.filter(Boolean) as Row[]);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <div className="p-8 flex items-center justify-center min-h-64"><div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading...</div></div>;

  const totals = { new: rows.reduce((a, r) => a + r.new, 0), contacted: rows.reduce((a, r) => a + r.contacted, 0), qualified: rows.reduce((a, r) => a + r.qualified, 0), closed: rows.reduce((a, r) => a + r.closed, 0), total: rows.reduce((a, r) => a + r.total, 0) };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">Reports</h1>
        <p className="text-gray-500 text-sm mt-1">Submission and conversion overview across all booking types</p>
      </div>

      <div className="bg-white border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[#1a1a2e] text-white">
            <tr>
              <th className="text-left px-5 py-3 text-xs uppercase tracking-wide font-bold">Source</th>
              <th className="text-center px-4 py-3 text-xs uppercase tracking-wide font-bold text-green-400">New</th>
              <th className="text-center px-4 py-3 text-xs uppercase tracking-wide font-bold text-blue-400">Contacted</th>
              <th className="text-center px-4 py-3 text-xs uppercase tracking-wide font-bold text-purple-400">Qualified</th>
              <th className="text-center px-4 py-3 text-xs uppercase tracking-wide font-bold text-gray-400">Closed</th>
              <th className="text-center px-4 py-3 text-xs uppercase tracking-wide font-bold">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r) => (
              <tr key={r.label} className="hover:bg-gray-50">
                <td className="px-5 py-3 font-semibold text-[#1a1a2e]">{r.label}</td>
                <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5">{r.new}</span></td>
                <td className="px-4 py-3 text-center"><span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5">{r.contacted}</span></td>
                <td className="px-4 py-3 text-center"><span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-0.5">{r.qualified}</span></td>
                <td className="px-4 py-3 text-center"><span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5">{r.closed}</span></td>
                <td className="px-4 py-3 text-center font-black text-[#c8102e]">{r.total}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-[#f4f4f4] border-t-2 border-[#1a1a2e]">
            <tr>
              <td className="px-5 py-3 font-black text-[#1a1a2e] uppercase text-xs tracking-wide">Total</td>
              <td className="px-4 py-3 text-center font-black text-green-700">{totals.new}</td>
              <td className="px-4 py-3 text-center font-black text-blue-700">{totals.contacted}</td>
              <td className="px-4 py-3 text-center font-black text-purple-700">{totals.qualified}</td>
              <td className="px-4 py-3 text-center font-black text-gray-600">{totals.closed}</td>
              <td className="px-4 py-3 text-center font-black text-[#c8102e] text-lg">{totals.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
