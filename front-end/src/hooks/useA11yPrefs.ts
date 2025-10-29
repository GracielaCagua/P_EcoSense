import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type FontSize = "md" | "lg" | "xl";

export type A11yPrefs = {
  captions: boolean;
  theme: string;
  highContrast: boolean;
  fontSize: FontSize;
  showFocusAlways: boolean;
  ttsEnabled: boolean;     // lector de texto (auditivo)
  motionReduced: boolean;  // pausar animaciones
};

const defaultPrefs: A11yPrefs = {
  captions: false,
  theme: "light",
  highContrast: false,
  fontSize: "md",
  showFocusAlways: true,
  ttsEnabled: false,
  motionReduced: false
};

const Ctx = createContext<{
  prefs: A11yPrefs;
  setPrefs: React.Dispatch<React.SetStateAction<A11yPrefs>>;
} | null>(null);

export function A11yPrefsProvider({ children }: { children: React.ReactNode }) {
  const [prefs, setPrefs] = useState<A11yPrefs>(() => {
    const raw = localStorage.getItem("ecosense_a11y");
    return raw ? JSON.parse(raw) as A11yPrefs : defaultPrefs;
  });

  // Aplicar al <html>
  useEffect(() => {
    const root = document.documentElement;

    // alto contraste
    if (prefs.highContrast) root.setAttribute("data-contrast", "high");
    else root.removeAttribute("data-contrast");

    // tamaño de fuente
    root.removeAttribute("data-font");
    if (prefs.fontSize !== "md") root.setAttribute("data-font", prefs.fontSize);

    // foco visible siempre (opcional, ya lo forzamos por CSS base)
    if (prefs.showFocusAlways) root.style.setProperty("--ring", "#60a5fa");
    else root.style.removeProperty("--ring");

    // reducir movimiento
    if (prefs.motionReduced) {
      root.style.setProperty("scroll-behavior","auto");
      const style = document.createElement("style");
      style.id = "reduce-motion";
      style.innerHTML = `*{animation: none !important; transition: none !important}`;
      document.head.appendChild(style);
    } else {
      document.getElementById("reduce-motion")?.remove();
      root.style.removeProperty("scroll-behavior");
    }

    localStorage.setItem("ecosense_a11y", JSON.stringify(prefs));
  }, [prefs]);

  const contextValue = useMemo(() => ({
    prefs,
    setPrefs
  }), [prefs]);

  return React.createElement(Ctx.Provider, { value: contextValue }, children);
}

export function useA11yPrefs(){
  const ctx = useContext(Ctx);
  if(!ctx) throw new Error("useA11yPrefs debe usarse dentro de A11yPrefsProvider");
  return ctx;
}

/* util auditivo: sintetizar voz (lector de texto) */
export function speak(text: string){
  try{
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "es-ES";
    window.speechSynthesis.speak(u);
  }catch{ /* no-op */ }
}
