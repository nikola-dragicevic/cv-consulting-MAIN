// src/lib/supabaseServer.ts
import { createClient } from "@supabase/supabase-js"

const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url) console.error("Missing SUPABASE_URL / NEXT_PUBLIC_SUPABASE_URL")
if (!serviceKey) console.error("Missing SUPABASE_SERVICE_ROLE_KEY (server)")

export const supabaseServer = createClient(url!, serviceKey!, {
  auth: { persistSession: false },
})
