"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BOOKING_SOURCES: { endpoint: string; label: string; href: string; key: "items" | "leads" | "audits" }[] = [
  { endpoint: "/api/admin/leads/", label: "Contact Leads", href: "/admin/leads/", key: "leads" },
  { endpoint: "/api/bookings/quotes/", label: "Quote Requests", href: "/admin/quotes/", key: "items" },
  { endpoint: "/api/bookings/event/", label: "Event Bookings", href: "/admin/event-bookings/", key: "items" },
  { endpoint: "/api/bookings/patrol/", label: "Patrol Bookings", href: "/admin/patrol-bookings/", key: "items" },
  { endpoint: "/api/bookings/construction/", label: "Construction", href: "/admin/construction-bookings/", key: "items" },
  { endpoint: "/api/bookings/corporate/", label: "Corporate", href: "/admin/corporate-bookings/", key: "items" },
  { endpoint: "/api/bookings/retail/", label: "Retail", href: "/admin/retail-bookings/", key: "items" },
  { endpoint: "/api/bookings/crowd-control/", label: "Crowd Control", href: "/admin/crowd-control-bookings/", key: "items" },
  { endpoint: "/api/bookings/canine/", label: "Canine", href: "/admin/canine-bookings/", key: "items" },
  { endpoint: "/api/bookings/concierge/", label: "Concierge", href: "/admin/concierge-bookings/", key: "items" },
  { endpoint: "/api/bookings/armed/", label: "Armed Security", href: "/admin/armed-bookings/", key: "items" },
  { endpoint: "/api/bookings/loss-prevention/", label: "Loss Prevention", href: "/admin/loss-prevention-bookings/", key: "items" },
  { endpoint: "/api/bookings/emergency/", label: "Emergency", href: "/admin/emergency-bookings/", key: "items" },
  { endpoint: "/api/bookings/contract/", label: "Contract Enquiries", href: "/admin/contract-enquiries/", key: "items" },
];

const CONTENT_SOURCES: { endpoint: string; label: string; href: string; key: string }[] = [
  { endpoint: "/api/admin/blog/", label: "Blog Posts", href: "/admin/blog/", key: "items" },
  { endpoint: "/api/admin/testimonials/", label: "Testimonials", href: "/admin/testimonials/", key: "items" },
  { endpoint: "/api/admin/faqs/", label: "FAQs", href: "/admin/faqs/", key: "items" },
  { endpoint: "/api/admin/invoices/", label: "Invoices", href: "/admin/invoices/", key: "items" },
];

type SourceStat = { label: string; href: string; total: number; newCount: number };
type ContentStat = { label: string; href: string; total: number; sub?: string };

type RecentItem = { source: string; name?: string; email?: string; company?: string; service_type?: string; status: string; created_at: string; href: string };

export default function AdminDashboard() {
  const [bookingStats, setBookingStats] = useState<SourceStat[]>([]);
  const [contentStats, setContentStats] = useState<ContentStat[]>([]);
  const [recent, setRecent] = useState<RecentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [invoiceSummary, setInvoiceSummary] = useState({ outstanding: 0, paid: 0, draft: 0 });
  const router = useRouter();

  useEffect(() => {
    async function load() {
      try {
        const [bookingResults, contentResults] = await Promise.all([
          Promise.all(BOOKING_SOURCES.map(async (s) => {
            try {
              const res = await fetch(s.endpoint);
              if (res.status === 401) { router.push("/admin/login/"); return null; }
              const data = await res.json();
              const items: { status: string; created_at: string; name?: string; email?: string; company?: string }[] =
                data[s.key] || data.leads || data.audits || [];
              return {
                label: s.label,
                href: s.href,
                total: items.length,
                newCount: items.filter(i => i.status === "new").length,
                items,
              };
            } catch { return { label: s.label, href: s.href, total: 0, newCount: 0, items: [] }; }
          })),
          Promise.all(CONTENT_SOURCES.map(async (s) => {
            try {
              const res = await fetch(s.endpoint);
              if (res.status === 401) return null;
              const data = await res.json();
              const items: { status?: string; total?: number }[] = data[s.key] || [];
              let sub = "";
              if (s.label === "Testimonials") {
                const pub = items.filter((i) => (i as Record<string, unknown>).published).length;
                sub = `${pub} published`;
              } else if (s.label === "Invoices") {
                const outstanding = items.filter((i) => ["sent", "overdue"].includes(i.status || "")).length;
                const paid = items.filter((i) => i.status === "paid").length;
                const draft = items.filter((i) => i.status === "draft").length;
                setInvoiceSummary({
                  outstanding: items.filter(i => ["sent","overdue"].includes(i.status||"")).reduce((a,i)=>{
                    const inv = i as Record<string, number>;
                    return a + (inv.total || 0);
                  }, 0),
                  paid: items.filter(i => i.status === "paid").reduce((a,i)=>{
                    const inv = i as Record<string, number>;
                    return a + (inv.total || 0);
                  }, 0),
                  draft,
                });
                sub = `${paid} paid · ${outstanding} outstanding`;
              } else if (s.label === "Blog Posts") {
                const pub = items.filter((i) => (i as Record<string, unknown>).published).length;
                sub = `${pub} published`;
              }
              return { label: s.label, href: s.href, total: items.length, sub };
            } catch { return { label: s.label, href: s.href, total: 0, sub: "" }; }
          })),
        ]);

        const validBookings = bookingResults.filter(Boolean) as (SourceStat & { items: RecentItem[] })[];
        setBookingStats(validBookings);

        const allItems: RecentItem[] = [];
        validBookings.forEach(s => {
          (s.items || []).slice(0, 3).forEach((item) => {
            allItems.push({
              source: s.label,
              name: item.name,
              email: item.email,
              company: item.company,
              status: item.status,
              created_at: item.created_at,
              href: s.href,
            });
          });
        });
        allItems.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        setRecent(allItems.slice(0, 10));

        setContentStats(validBookings ? contentResults.filter(Boolean) as ContentStat[] : []);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const totalAll = bookingStats.reduce((a, s) => a + s.total, 0);
  const totalNew = bookingStats.reduce((a, s) => a + s.newCount, 0);

  if (loading) return (
    <div className="p-8 flex items-center justify-center min-h-64">
      <div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading dashboard...</div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">All bookings, enquiries, and content across every service</p>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Submissions", value: totalAll, sub: "all time" },
          { label: "New / Unread", value: totalNew, sub: "needs attention", highlight: totalNew > 0 },
          { label: "Active Sources", value: bookingStats.filter(s => s.total > 0).length, sub: `of ${BOOKING_SOURCES.length}` },
          { label: "Invoices Outstanding", value: `$${invoiceSummary.outstanding.toFixed(0)}`, sub: "awaiting payment" },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-gray-200 p-6">
            <div className={`text-3xl font-black ${s.highlight ? "text-[#c8102e]" : "text-[#1a1a2e]"}`}>{s.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{s.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
        {/* Recent activity */}
        <div className="xl:col-span-2">
          <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide mb-4">Recent Submissions</h2>
          <div className="bg-white border border-gray-200 divide-y divide-gray-100">
            {recent.length === 0 ? (
              <div className="p-8 text-center text-gray-400 text-sm uppercase tracking-widest">No submissions yet</div>
            ) : recent.map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center gap-4 px-5 py-3.5 hover:bg-[#fafafa] transition-colors group">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#c8102e] uppercase">{item.source}</span>
                    <span className={`text-xs font-bold px-1.5 py-0.5 uppercase ${item.status === "new" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{item.status}</span>
                  </div>
                  <div className="text-sm font-semibold text-[#1a1a2e] truncate mt-0.5">{item.name || item.email || "Unknown"}</div>
                  {item.company && <div className="text-xs text-gray-400 truncate">{item.company}</div>}
                </div>
                <div className="text-xs text-gray-400 shrink-0">
                  {item.created_at ? new Date(item.created_at).toLocaleDateString("en-AU", { day: "numeric", month: "short" }) : ""}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Content summary */}
        <div>
          <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide mb-4">Content</h2>
          <div className="space-y-3">
            {contentStats.map(s => (
              <Link key={s.href} href={s.href} className="bg-white border border-gray-200 p-5 flex items-center justify-between hover:border-[#c8102e] transition-colors group">
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide group-hover:text-[#c8102e] transition-colors">{s.label}</div>
                  {s.sub && <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>}
                </div>
                <div className="text-2xl font-black text-[#1a1a2e]">{s.total}</div>
              </Link>
            ))}
          </div>

          <div className="mt-4 bg-[#1a1a2e] p-5 space-y-2">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Invoice Summary</div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Paid</span>
              <span className="font-black text-green-400">${invoiceSummary.paid.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Outstanding</span>
              <span className="font-black text-yellow-400">${invoiceSummary.outstanding.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Drafts</span>
              <span className="font-black text-gray-400">{invoiceSummary.draft}</span>
            </div>
            <Link href="/admin/invoices/new/" className="block mt-3 bg-[#c8102e] text-white font-bold px-4 py-2 text-xs uppercase tracking-widest text-center hover:bg-[#a00d25]">
              New Invoice
            </Link>
          </div>
        </div>
      </div>

      {/* Per-source breakdown */}
      <h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide mb-4">All Booking Sources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {bookingStats.map((s) => (
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
