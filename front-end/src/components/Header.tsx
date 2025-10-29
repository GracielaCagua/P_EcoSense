import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { theme, cycleTheme } = useTheme();

  const themeLabel =
    theme === "light" ? "Claro" : theme === "dark" ? "Oscuro" : "Tema del sistema";

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="brand" aria-label="Ir al inicio">
          <img src="/logo.svg" alt="" width={28} height={28} className="brand-mark" style={{padding:0, background:"transparent"}} />

        </Link>

        <nav className="nav" aria-label="Principal">
          <NavLink to="/" end className={({isActive})=> isActive ? "active" : ""}>Panel</NavLink>
          <NavLink to="/dispositivos" className={({isActive})=> isActive ? "active" : ""}>Dispositivos</NavLink>
          <NavLink to="/reportes" className={({isActive})=> isActive ? "active" : ""}>Reportes</NavLink>
          <NavLink to="/ayuda" className={({isActive})=> isActive ? "active" : ""}>Ayuda</NavLink>
        </nav>

        <button className="btn" onClick={cycleTheme} aria-label="Cambiar tema">
          {themeLabel}
        </button>
      </div>
    </header>
  );
}
