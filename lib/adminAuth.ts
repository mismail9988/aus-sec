import { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function verifyAdmin(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get("sb-token")?.value;
  if (!token) return false;
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data } = await supabase.auth.getUser(token);
  return !!data.user;
}
