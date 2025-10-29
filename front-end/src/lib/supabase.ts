// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnon);

// Autenticación
export async function login(email: string, password: string) {
  return await supabase.auth.signInWithPassword({ email, password });
}

export async function register(email: string, password: string) {
  return await supabase.auth.signUp({ email, password });
}

export async function resetPassword(email: string) {
  return await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/usuario/login`,
  });
}
