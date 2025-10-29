import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function Placeholder({ title }: { title: string }) {
  return (
    <main className="container section">
      <div className="card" style={{minHeight: 260}}>
        <h3>{title}</h3>
        <p style={{color:"var(--muted)"}}>Próximamente…</p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dispositivos" element={<Placeholder title="Dispositivos" />} />
        <Route path="/reportes" element={<Placeholder title="Reportes" />} />
        <Route path="/ayuda" element={<Placeholder title="Ayuda" />} />
      </Routes>
    </>
  );
}
