import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3" aria-label="Principal">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded bg-white/20" aria-hidden="true" />
          <span className="font-bold text-xl">EcoSense</span>
        </a>

        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            <li><a className="hover:underline" href="#panel">Panel</a></li>
            <li><a className="hover:underline" href="#dispositivos">Dispositivos</a></li>
            <li><a className="hover:underline" href="#reportes">Reportes</a></li>
            <li><a className="hover:underline" href="#ayuda">Ayuda</a></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
