"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewBlogPostPage() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  function slugify(text: string) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError("");
    const form = e.currentTarget;
    const body = {
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      slug: (form.elements.namedItem("slug") as HTMLInputElement).value,
      category: (form.elements.namedItem("category") as HTMLSelectElement).value,
      excerpt: (form.elements.namedItem("excerpt") as HTMLTextAreaElement).value,
      content: (form.elements.namedItem("content") as HTMLTextAreaElement).value,
      published: (form.elements.namedItem("published") as HTMLInputElement).checked,
    };
    const res = await fetch("/api/admin/blog/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (res.ok) { router.push("/admin/blog/"); }
    else { setError("Failed to save post."); setSaving(false); }
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <Link href="/admin/blog/" className="hover:text-[#c8102e]">Blog Posts</Link>
        <span>/</span>
        <span className="text-[#2d2d2d] font-semibold">New Post</span>
      </div>
      <h1 className="text-2xl font-black text-[#1a1a2e] uppercase mb-8">New Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white border border-gray-200 p-6 space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Title *</label>
            <input name="title" required onChange={e => { const s = document.getElementById("slug") as HTMLInputElement; if (s) s.value = slugify(e.target.value); }}
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e]" placeholder="Post title" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Slug *</label>
              <input name="slug" id="slug" required className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e]" placeholder="post-slug" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Category</label>
              <select name="category" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] bg-white">
                {["Security Advice", "Industry News", "Case Studies", "Compliance", "General"].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Excerpt</label>
            <textarea name="excerpt" rows={2} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] resize-none" placeholder="Short summary shown in blog listings..." />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Content *</label>
            <textarea name="content" required rows={20} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] resize-y font-mono" placeholder="Full post content. You can use markdown or HTML." />
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="published" id="published" className="w-4 h-4 accent-[#c8102e]" />
            <label htmlFor="published" className="text-sm font-bold text-[#1a1a2e] uppercase tracking-wide">Publish immediately</label>
          </div>
        </div>

        {error && <div className="bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">{error}</div>}

        <div className="flex gap-3">
          <button type="submit" disabled={saving}
            className="bg-[#c8102e] text-white font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors disabled:opacity-60">
            {saving ? "Saving..." : "Save Post"}
          </button>
          <Link href="/admin/blog/" className="border border-gray-300 text-gray-600 font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
