import { createClient } from "@supabase/supabase-js";

let supabaseClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseClient() {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

    // Only create if we have both keys
    if (supabaseUrl && supabaseAnonKey) {
      supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    }
  }
  return supabaseClient;
}

// Backward compatibility export
export const supabase = {
  from: (table: string) => {
    const client = getSupabaseClient();
    if (!client) {
      return {
        insert: () => ({ select: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }) }),
        select: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } })
      };
    }
    return client.from(table);
  }
} as any;
