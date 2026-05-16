import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { supabaseAdmin } from "@/lib/supabase";
import BlogPost from "@/components/BlogPost";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await supabaseAdmin
    .from("blog_posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  if (!data) return {};
  return {
    title: `${data.title} | Security Guard Company Melbourne`,
    description: data.excerpt || "",
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: `${data.title} | Security Guard Company Melbourne`,
      description: data.excerpt || "",
      url: `https://securityguardcompanymelbourne.com/blog/${slug}/`,
      siteName: "Security Guard Company Melbourne",
      locale: "en_AU",
      type: "article",
    },
  };
}

export default async function DynamicBlogPost({ params }: Props) {
  const { slug } = await params;
  const { data: post } = await supabaseAdmin
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!post) notFound();

  const date = new Date(post.created_at).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const wordCount = (post.content || "").split(/\s+/).length;
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  return (
    <BlogPost title={post.title} category={post.category || "General"} date={date} readTime={readTime}>
      <div className="prose-content">
        {(post.content || "").split("\n\n").map((para: string, i: number) => {
          const trimmed = para.trim();
          if (!trimmed) return null;
          if (trimmed.startsWith("## ")) {
            return (
              <h2 key={i} style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1a1a2e", textTransform: "uppercase", margin: "2rem 0 1rem" }}>
                {trimmed.slice(3)}
              </h2>
            );
          }
          if (trimmed.startsWith("### ")) {
            return (
              <h3 key={i} style={{ fontSize: "1.125rem", fontWeight: 900, color: "#1a1a2e", textTransform: "uppercase", margin: "1.5rem 0 0.75rem" }}>
                {trimmed.slice(4)}
              </h3>
            );
          }
          if (trimmed.startsWith("- ")) {
            const items = trimmed.split("\n").filter(l => l.startsWith("- ")).map(l => l.slice(2));
            return (
              <ul key={i} style={{ listStyle: "none", padding: 0, margin: "1rem 0" }}>
                {items.map((item, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ width: "6px", height: "6px", background: "#c8102e", borderRadius: "50%", marginTop: "0.5rem", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            );
          }
          return <p key={i}>{trimmed}</p>;
        })}
      </div>
    </BlogPost>
  );
}
