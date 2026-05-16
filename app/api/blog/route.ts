import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (slug) {
    const { data } = await supabaseAdmin
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();
    if (!data) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ item: data });
  }
  const { data } = await supabaseAdmin
    .from("blog_posts")
    .select("id, title, slug, category, excerpt, created_at")
    .eq("published", true)
    .order("created_at", { ascending: false });
  return NextResponse.json({ items: data || [] });
}
