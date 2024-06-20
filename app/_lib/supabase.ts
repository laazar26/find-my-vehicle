import { SupabaseClient, createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_KEY environment variable");
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
