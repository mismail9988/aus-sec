import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://uciyowykrthlvezhdpjq.supabase.co";
const SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjaXlvd3lrcnRobHZlemhkcGpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODg2Mjc5MiwiZXhwIjoyMDk0NDM4NzkyfQ.QJ43z606w3ugeDDsvuhfNmR8lRosBuOfV7t9naYF7dI";

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

// Test connection by trying to read from a system table
const { data, error } = await supabase.from("_prisma_migrations").select("*").limit(1);
console.log("Connection test:", error ? error.message : "connected");
