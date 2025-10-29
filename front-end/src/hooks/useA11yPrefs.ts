import { useEffect, useState } from "react";

export type A11yPrefs = {
  mode: "system" | "light" | "dark";
  highContrast: boolean;
  fontSize: "Pequeña" | "Mediana" | "Grande";
  screenReaderHints: boolean; // pistas verbales / lector
  captions: boolean;          // subtítulos/alertas visuales (auditiva)
};

const KEY = "ecosense:prefs";

const defaultPrefs: A11yPrefs = {
  mode: "system",
  highContrast: false,
  fontSize: "Mediana",
  screenReaderHints: false,
  captions: true,
};

export function useA11yPrefs(){
  const [prefs, setPrefs] = useState<A11yPrefs>(() => {
    try { return { ...defaultPrefs, ...JSON.parse(localStorage.getItem(KEY) || "{}") }; }
    catch { return defaultPrefs; }
  });

  // Aplicar al <html>
  useEffect(() => {
    const root = document.documentElement;

    // Tema
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = prefs.mode === "dark" || (prefs.mode === "system" && sysDark);
    root.classList.toggle("dark", dark);

    // Alto contraste
    root.classList.toggle("hc", prefs.highContrast);

    // Tamaño fuente
    root.style.fontSize =
      prefs.fontSize === "Pequeña" ? "95%" :
      prefs.fontSize === "Grande"  ? "115%" : "100%";

    // Guardar
    localStorage.setItem(KEY, JSON.stringify(prefs));
  }, [prefs]);

  return { prefs, setPrefs };
}
