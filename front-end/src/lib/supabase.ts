// src/lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Crea el cliente de conexión
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Prueba rápida de conexión
console.log("🔗 Conectando a Supabase...");
console.log("URL:", supabaseUrl ? "✅ OK" : "❌ NO encontrada");
console.log("KEY:", supabaseAnonKey ? "✅ OK" : "❌ NO encontrada");
