// src/pages/Register.tsx
import type { FormEvent } from "react";
import { useState } from "react";
import { register } from "../lib/supabase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setMsg(null);
    const { error } = await register(email, password);
    if (error) setMsg(`Error: ${error.message}`);
    else setMsg("Registro creado. Revisa tu correo para confirmar.");
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Registro</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span>Correo</span>
          <input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </label>

        <label className="block">
          <span>Contraseña</span>
          <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} minLength={6} required />
        </label>

        <button className="btn w-full" type="submit">Crear cuenta</button>
        {msg && <p role="status" className="text-sm">{msg}</p>}
      </form>
    </div>
  );
}
