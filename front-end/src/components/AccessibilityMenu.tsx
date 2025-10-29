import { useA11yPrefs } from "../hooks/useA11yPrefs";

export default function AccessibilityMenu(){
  const { prefs, setPrefs } = useA11yPrefs();

  return (
    <aside className="card" aria-label="Accesibilidad">
      <h3 className="text-lg font-semibold mb-3">Accesibilidad</h3>

      <div className="grid gap-3">
        {/* Visual */}
        <div>
          <label className="field" htmlFor="tema">Tema</label>
          <select id="tema" className="select" value={prefs.mode}
                  onChange={e => setPrefs(p=>({ ...p, mode: e.target.value as any }))}>
            <option value="system">Sistema</option>
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
          </select>
        </div>

        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={prefs.highContrast}
                 onChange={e => setPrefs(p=>({ ...p, highContrast: e.target.checked }))}/>
          Alto contraste
        </label>

        <div>
          <label className="field" htmlFor="fuente">Tamaño de fuente</label>
          <select id="fuente" className="select" value={prefs.fontSize}
                  onChange={e => setPrefs(p=>({ ...p, fontSize: e.target.value as any }))}>
            <option>Pequeña</option><option>Mediana</option><option>Grande</option>
          </select>
        </div>

        {/* Auditiva */}
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={prefs.captions}
                 onChange={e => setPrefs(p=>({ ...p, captions: e.target.checked }))}/>
          Subtítulos/alertas visuales
        </label>

        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={prefs.screenReaderHints}
                 onChange={e => setPrefs(p=>({ ...p, screenReaderHints: e.target.checked }))}/>
          Pistas para lector de pantalla
        </label>
      </div>
    </aside>
  );
}
