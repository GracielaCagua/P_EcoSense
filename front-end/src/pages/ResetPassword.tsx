// src/pages/ResetPassword.tsx
import type { FormEvent } from "react";
import { useState } from "react";
import { resetPassword } from "../lib/supabase";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setMsg(null);
    const { error } = await resetPassword(email);
    if (error) setMsg(`Error: ${error.message}`);
    else setMsg("Te enviamos un correo para restablecer tu contraseña.");
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Recuperar contraseña</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span>Correo</span>
          <input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </label>
        <button className="btn w-full" type="submit">Enviar</button>
        {msg && <p role="status" className="text-sm">{msg}</p>}
      </form>
    </div>
  );
}
