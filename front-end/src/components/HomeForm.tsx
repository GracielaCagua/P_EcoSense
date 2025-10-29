import { useState } from "react";
import { supabase } from "../lib/supabase";
import UsabilityMetrics from "../components/UsabilityMetrics";

export default function HomeForm() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    pref_contraste: "Normal",
    pref_modo_oscuro: false,
    pref_fuente_tamano: "Mediana",
  });
  const [msg, setMsg] = useState<string | null>(null);
  const [errors, setErrors] = useState<{[k:string]: string}>({});

  const onChange = (k: keyof typeof form, v: any) => setForm({ ...form, [k]: v });

  const validate = () => {
    const e: typeof errors = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre.";
    if (!/^\S+@\S+\.\S+$/.test(form.correo)) e.correo = "Correo inválido.";
    return e;
    };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      setMsg("❌ Corrige los campos marcados.");
      return;
    }
    setMsg("Guardando…");
    const { error } = await supabase.from("usuarios").insert([{
      nombre: form.nombre,
      correo: form.correo,
      pref_contraste: form.pref_contraste,
      pref_modo_oscuro: form.pref_modo_oscuro,
      pref_fuente_tamano: form.pref_fuente_tamano,
    }]);
    setMsg(error ? "❌ Error al guardar" : "✅ Preferencias guardadas correctamente");
  };

  return (
    <section id="contenido" className="container mx-auto px-4 py-10">
      <div className="grid gap-8 md:grid-cols-3">
        <form onSubmit={onSubmit} className="md:col-span-2 card" aria-labelledby="prefsTitle" noValidate>
          <h2 id="prefsTitle" className="text-xl font-semibold">Preferencias iniciales</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Ajusta contraste y tamaño de fuente. Se guardarán como base para tu experiencia.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="field" htmlFor="nombre">Nombre</label>
              <input id="nombre" className="input" placeholder="Tu nombre"
                     value={form.nombre} onChange={e=>onChange("nombre", e.target.value)} aria-invalid={!!errors.nombre}/>
              {errors.nombre && <p className="text-sm text-red-600 mt-1">{errors.nombre}</p>}
            </div>
            <div>
              <label className="field" htmlFor="correo">Correo</label>
              <input id="correo" type="email" className="input" placeholder="tucorreo@ejemplo.com"
                     value={form.correo} onChange={e=>onChange("correo", e.target.value)} aria-invalid={!!errors.correo}/>
              {errors.correo && <p className="text-sm text-red-600 mt-1">{errors.correo}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-4">
            <div>
              <label className="field" htmlFor="contraste">Contraste</label>
              <select id="contraste" className="select"
                      value={form.pref_contraste} onChange={e=>onChange("pref_contraste", e.target.value)}>
                <option>Normal</option><option>Alto</option><option>Bajo</option>
              </select>
            </div>

            <label className="inline-flex items-center gap-2 mt-1">
              <input type="checkbox" checked={form.pref_modo_oscuro}
                     onChange={e=>onChange("pref_modo_oscuro", e.target.checked)} />
              Modo oscuro
            </label>

            <div>
              <label className="field" htmlFor="fuente">Tamaño de fuente</label>
              <select id="fuente" className="select"
                      value={form.pref_fuente_tamano} onChange={e=>onChange("pref_fuente_tamano", e.target.value)}>
                <option>Pequeña</option><option>Mediana</option><option>Grande</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <button className="btn-primary" type="submit">Guardar</button>
            <a href="#ayuda" className="btn-outline">Ayuda</a>
          </div>

          {msg && <p className="mt-3 text-sm">{msg}</p>}

          <UsabilityMetrics flow="inicio" />
        </form>

        <div className="md:col-span-1">
          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Accesibilidad</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Ajustes rápidos para mejorar legibilidad y contraste.
            </p>
            {/* Si quieres el menú completo, importa AccessibilityMenu: */}
            {/* <AccessibilityMenu /> */}
            <p className="text-sm">*El menú completo se integra en Fase 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
