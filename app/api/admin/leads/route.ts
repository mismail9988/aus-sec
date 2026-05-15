import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { createClient } from "@supabase/supabase-js";

function getToken(req: NextRequest) {
  return req.cookies.get("sb-token")?.value;
}

async function verifyAdmin(token: string) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data } = await supabase.auth.getUser(token);
  return data.user;
}

export async function GET(req: NextRequest) {
  const token = getToken(req);
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await verifyAdmin(token);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: leads } = await supabaseAdmin
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: audits } = await supabaseAdmin
    .from("audit_bookings")
    .select("*")
    .order("created_at", { ascending: false });

  return NextResponse.json({ leads: leads || [], audits: audits || [] });
}

export async function PATCH(req: NextRequest) {
  const token = getToken(req);
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await verifyAdmin(token);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, table, status } = await req.json();
  const tableName = table === "audit" ? "audit_bookings" : "leads";

  const { error } = await supabaseAdmin
    .from(tableName)
    .update({ status })
    .eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
