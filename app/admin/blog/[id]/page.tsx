"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [post, setPost] = useState<Record<string, string | boolean> | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/admin/blog/?id=${id}`).then(r => r.json()).then(d => setPost(d.item));
  }, [id]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    const form = e.currentTarget;
    const body = {
      id,
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      slug: (form.elements.namedItem("slug") as HTMLInputElement).value,
      category: (form.elements.namedItem("category") as HTMLSelectElement).value,
      excerpt: (form.elements.namedItem("excerpt") as HTMLTextAreaElement).value,
      content: (form.elements.namedItem("content") as HTMLTextAreaElement).value,
      published: (form.elements.namedItem("published") as HTMLInputElement).checked,
    };
    const res = await fetch("/api/admin/blog/", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (res.ok) { router.push("/admin/blog/"); }
    else { setError("Failed to save."); setSaving(false); }
  }

  if (!post) return <div className="p-8 flex items-center justify-center min-h-64"><div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading...</div></div>;

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <Link href="/admin/blog/" className="hover:text-[#c8102e]">Blog Posts</Link><span>/</span>
        <span className="text-[#2d2d2d] font-semibold">Edit Post</span>
      </div>
      <h1 className="text-2xl font-black text-[#1a1a2e] uppercase mb-8">Edit Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white border border-gray-200 p-6 space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Title *</label>
            <input name="title" required defaultValue={post.title as string} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e]" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Slug *</label>
              <input name="slug" required defaultValue={post.slug as string} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e]" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Category</label>
              <select name="category" defaultValue={post.category as string} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] bg-white">
                {["Security Advice", "Industry News", "Case Studies", "Compliance", "General"].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Excerpt</label>
            <textarea name="excerpt" rows={2} defaultValue={post.excerpt as string} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] resize-none" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Content *</label>
            <textarea name="content" required rows={20} defaultValue={post.content as string} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#c8102e] resize-y font-mono" />
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="published" id="published" defaultChecked={post.published as boolean} className="w-4 h-4 accent-[#c8102e]" />
            <label htmlFor="published" className="text-sm font-bold text-[#1a1a2e] uppercase tracking-wide">Published</label>
          </div>
        </div>
        {error && <div className="bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">{error}</div>}
        <div className="flex gap-3">
          <button type="submit" disabled={saving} className="bg-[#c8102e] text-white font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors disabled:opacity-60">
            {saving ? "Saving..." : "Save Changes"}
          </button>
          <Link href="/admin/blog/" className="border border-gray-300 text-gray-600 font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
