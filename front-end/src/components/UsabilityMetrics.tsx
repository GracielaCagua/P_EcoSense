import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";

/** Guarda métricas básicas de uso para el flujo "inicio" */
export default function UsabilityMetrics({ flow = "inicio", userId = null as string | null }) {
  const t0 = useRef(performance.now());
  const [actions, setActions] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const beforeUnload = async () => {
      await save(false);
    };
    window.addEventListener("beforeunload", beforeUnload);
    return () => window.removeEventListener("beforeunload", beforeUnload);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addAction = () => setActions(a => a + 1);

  const save = async (success = true) => {
    const end = performance.now();
    try {
      await supabase.from("usability_metrics").insert({
        user_id: userId,
        flow,
        start_time_ms: Math.round(t0.current),
        end_time_ms: Math.round(end),
        actions,
        errors: 0,
        success,
      });
      setSaved(true);
    } catch {
      setSaved(false);
    }
  };

  return (
    <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
      <button type="button" className="btn-outline" onClick={addAction}>+ Acción (debug)</button>
      <button type="button" className="btn-outline ml-2" onClick={() => save(true)}>
        Guardar métrica
      </button>
      {saved && <span className="ml-2">✔ guardado</span>}
    </div>
  );
}
