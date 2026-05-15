"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard/");
    } else {
      setError("Invalid email or password");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <span className="text-[#c8102e] font-black text-2xl uppercase tracking-wider block">Security Guard</span>
          <span className="text-white font-bold text-sm uppercase tracking-[0.2em] block mt-1">Company Melbourne</span>
          <div className="w-10 h-0.5 bg-[#c8102e] mx-auto mt-4" />
          <p className="text-gray-400 text-sm mt-4 uppercase tracking-widest">Admin Panel</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white p-10 space-y-5">
          <div>
            <label className="block text-[#2d2d2d] text-xs font-bold uppercase tracking-wide mb-2">Email</label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)} required
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e]"
              placeholder="admin@email.com"
            />
          </div>
          <div>
            <label className="block text-[#2d2d2d] text-xs font-bold uppercase tracking-wide mb-2">Password</label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)} required
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e]"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-[#c8102e] text-white font-bold py-3 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors disabled:opacity-60">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
