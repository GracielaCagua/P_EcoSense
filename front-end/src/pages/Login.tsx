// src/pages/Login.tsx
import type { FormEvent } from "react";
import { useState } from "react";
import { login } from "../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setMsg(null);
    const { error } = await login(email, password);
    if (error) {
      setMsg(`Error: ${error.message}`);
      return;
    }
    if (remember) localStorage.setItem("ecosense_email", email);
    setMsg("Inicio de sesión correcto.");
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Acceso</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span>Correo</span>
          <input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </label>

        <label className="block">
          <span>Contraseña</span>
          <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={remember} onChange={(e)=>setRemember(e.target.checked)} />
          Recordarme
        </label>

        <button className="btn w-full" type="submit">Entrar</button>

        {msg && <p role="status" className="text-sm">{msg}</p>}
      </form>
    </div>
  );
}
