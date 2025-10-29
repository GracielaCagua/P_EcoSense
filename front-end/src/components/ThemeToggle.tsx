import { useA11yPrefs } from "../hooks/useA11yPrefs";

export default function ThemeToggle(){
  const { prefs, setPrefs } = useA11yPrefs();

  const cycle = () => {
    setPrefs(p => ({
      ...p,
      mode: p.mode === "system" ? "light" : p.mode === "light" ? "dark" : "system",
    }));
  };

  const label =
    prefs.mode === "system" ? "Tema del sistema" :
    prefs.mode === "light"  ? "Modo claro" :
                              "Modo oscuro";

  return (
    <button
      type="button"
      onClick={cycle}
      className="btn-outline"
      aria-pressed={prefs.mode !== "system"}
      aria-label={`Cambiar tema: ${label}`}
      title={`Tema actual: ${label} (clic para cambiar)`}
    >
      {label}
    </button>
  );
}
