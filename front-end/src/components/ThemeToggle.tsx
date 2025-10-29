import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Cargar tema del localStorage o usar el del sistema
    if (localStorage.getItem("theme"))
      return localStorage.getItem("theme") as string;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Cambiar el tema globalmente
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Alternar entre modos
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
    );
  };

  // Mostrar texto o icono según el tema actual
  const label =
    theme === "light"
      ? "☀️ Claro"
      : theme === "dark"
      ? "🌙 Oscuro"
      : "💻 Sistema";

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition text-sm"
    >
      {label}
    </button>
  );
}
