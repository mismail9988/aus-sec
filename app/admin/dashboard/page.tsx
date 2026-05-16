"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Stats = { table: string; label: string; href: string; color: string }[];

const BOOKING_SOURCES: { endpoint: string; label: string; href: string }[] = [
  { endpoint: "/api/admin/leads/", label: "Contact Leads", href: "/admin/leads/" },
  { endpoint: "/api/bookings/quotes/", label: "Quote Requests", href: "/admin/quotes/" },
  { endpoint: "/api/bookings/event/", label: "Event Bookings", href: "/admin/event-bookings/" },
  { endpoint: "/api/bookings/patrol/", label: "Patrol Bookings", href: "/admin/patrol-bookings/" },
  { endpoint: "/api/bookings/construction/", label: "Construction", href: "/admin/construction-bookings/" },
  { endpoint: "/api/bookings/corporate/", label: "Corporate", href: "/admin/corporate-bookings/" },
  { endpoint: "/api/bookings/retail/", label: "Retail", href: "/admin/retail-bookings/" },
  { endpoint: "/api/bookings/crowd-control/", label: "Crowd Control", href: "/admin/crowd-control-bookings/" },
  { endpoint: "/api/bookings/canine/", label: "Canine", href: "/admin/canine-bookings/" },
  { endpoint: "/api/bookings/concierge/", label: "Concierge", href: "/admin/concierge-bookings/" },
  { endpoint: "/api/bookings/armed/", label: "Armed Security", href: "/admin/armed-bookings/" },
  { endpoint: "/api/bookings/loss-prevention/", label: "Loss Prevention", href: "/admin/loss-prevention-bookings/" },
  { endpoint: "/api/bookings/emergency/", label: "Emergency", href: "/admin/emergency-bookings/" },
  { endpoint: "/api/bookings/contract/", label: "Contract Enquiries", href: "/admin/contract-enquiries/" },
  { endpoint: "/api/admin/leads/?audits=1", label: "Audit Bookings", href: "/admin/audits/" },
];

type SourceStat = { label: string; href: string; total: number; newCount: number };

export default function AdminDashboard() {
  const [stats, setStats] = useState<SourceStat[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      try {
        const results = await Promise.all(
          BOOKING_SOURCES.map(async (s) => {
            try {
              const res = await fetch(s.endpoint);
              if (res.status === 401) { router.push("/admin/login/"); return null; }
              const data = await res.json();
              const items = data.items || data.leads || data.audits || [];
              return {
                label: s.label,
                href: s.href,
                total: items.length,
                newCount: items.filter((i: { status: string }) => i.status === "new").length,
              };
            } catch { return { label: s.label, href: s.href, total: 0, newCount: 0 }; }
          })
        );
        setStats(results.filter(Boolean) as SourceStat[]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const totalAll = stats.reduce((a, s) => a + s.total, 0);
  const totalNew = stats.reduce((a, s) => a + s.newCount, 0);

  if (loading) return (
    <div className="p-8 flex items-center justify-center min-h-64">
      <div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading dashboard...</div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">All bookings and enquiries across every service</p>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Total Submissions", value: totalAll },
          { label: "New / Unread", value: totalNew },
          { label: "Active Sources", value: stats.filter(s => s.total > 0).length },
          { label: "Conversion Pending", value: totalNew },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-gray-200 p-6">
            <div className="text-3xl font-black text-[#c8102e]">{s.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Per-source breakdown */}
      <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide mb-4">All Booking Sources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {stats.map((s) => (
          <Link key={s.href} href={s.href}
            className="bg-white border border-gray-200 p-5 hover:border-[#c8102e] transition-colors group">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide group-hover:text-[#c8102e] transition-colors">{s.label}</span>
              {s.newCount > 0 && (
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 uppercase">{s.newCount} new</span>
              )}
            </div>
            <div className="text-3xl font-black text-[#1a1a2e]">{s.total}</div>
            <div className="text-xs text-gray-400 mt-1">total submissions</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
