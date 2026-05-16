"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Post = { id: string; title: string; slug: string; category: string; published: boolean; created_at: string };

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  async function load() {
    const res = await fetch("/api/admin/blog/");
    if (res.status === 401) { router.push("/admin/login/"); return; }
    const data = await res.json();
    setPosts(data.items || []);
    setLoading(false);
  }

  async function deletePost(id: string) {
    if (!confirm("Delete this post?")) return;
    await fetch("/api/admin/blog/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    load();
  }

  async function togglePublished(post: Post) {
    await fetch("/api/admin/blog/", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: post.id, published: !post.published }) });
    load();
  }

  useEffect(() => { load(); }, []);

  function fmt(d: string) { return new Date(d).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }); }

  if (loading) return <div className="p-8 flex items-center justify-center min-h-64"><div className="text-[#1a1a2e] font-bold uppercase tracking-widest text-sm">Loading...</div></div>;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#1a1a2e] uppercase">Blog Posts</h1>
          <p className="text-gray-500 text-sm mt-1">{posts.length} posts total · {posts.filter(p => p.published).length} published</p>
        </div>
        <Link href="/admin/blog/new/" className="bg-[#c8102e] text-white font-bold px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white border border-gray-200 p-16 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">No posts yet</p>
          <Link href="/admin/blog/new/" className="bg-[#c8102e] text-white font-bold px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Create First Post
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {posts.map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 px-5 py-4 flex items-center justify-between gap-4 hover:border-[#c8102e] transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 uppercase ${post.published ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>
                    {post.published ? "Published" : "Draft"}
                  </span>
                  <span className="text-xs bg-[#1a1a2e] text-white px-2 py-0.5 uppercase font-bold">{post.category}</span>
                </div>
                <p className="font-black text-[#1a1a2e] text-sm truncate">{post.title}</p>
                <p className="text-gray-400 text-xs mt-0.5">/{post.slug}/ · {fmt(post.created_at)}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => togglePublished(post)}
                  className="border border-gray-300 text-gray-600 font-bold px-3 py-1.5 text-xs uppercase hover:bg-gray-50 transition-colors">
                  {post.published ? "Unpublish" : "Publish"}
                </button>
                <Link href={`/admin/blog/${post.id}/`}
                  className="bg-[#1a1a2e] text-white font-bold px-3 py-1.5 text-xs uppercase hover:bg-black transition-colors">
                  Edit
                </Link>
                <button onClick={() => deletePost(post.id)}
                  className="border border-red-200 text-red-600 font-bold px-3 py-1.5 text-xs uppercase hover:bg-red-50 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
