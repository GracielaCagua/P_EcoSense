import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const systemPref = () => (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("ecosense_theme") as Theme) || "system");

  // Aplica el tema al <html data-theme="...">
  useEffect(() => {
    const resolved = theme === "system" ? systemPref() : theme;
    document.documentElement.dataset.theme = resolved;
    localStorage.setItem("ecosense_theme", theme);
  }, [theme]);

  // Reacciona si el usuario cambia el tema del SO
  useEffect(() => {
    if (theme !== "system") return;
    const mm = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      document.documentElement.dataset.theme = systemPref();
    };
    mm.addEventListener("change", onChange);
    return () => mm.removeEventListener("change", onChange);
  }, [theme]);

  // Botón que cicla
  function cycleTheme() {
    setTheme((t) => (t === "light" ? "dark" : t === "dark" ? "system" : "light"));
  }

  return { theme, setTheme, cycleTheme };
}
