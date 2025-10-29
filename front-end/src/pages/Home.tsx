export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner container">
          <div>
            <h1>Panel de Control Energético</h1>
            <p>Monitorea y optimiza tu consumo en tiempo real.</p>
          </div>
          <div className="card" aria-hidden="true" />
        </div>
      </section>

      {/* KPIs */}
      <main className="container section" id="panel">
        <div className="grid cols-4" role="list">
          <article className="card" role="listitem">
            <h3>Consumo Actual</h3>
            <div className="kpi">2.4 kWh</div>
            <p style={{color:"var(--muted)", margin:"0 0 10px"}}>-12%</p>
            <div className="bar"><span style={{width:"62%"}}/></div>
          </article>

          <article className="card" role="listitem">
            <h3>Ahorro del Mes</h3>
            <div className="kpi">$145</div>
            <p style={{color:"var(--muted)", margin:"0 0 10px"}}>+23%</p>
            <div className="bar"><span style={{width:"74%"}}/></div>
          </article>

          <article className="card" role="listitem">
            <h3>Dispositivos Activos</h3>
            <div className="kpi">8</div>
            <p style={{color:"var(--muted)", margin:"0 0 10px"}}>2 inactivos</p>
            <div className="bar"><span style={{width:"68%"}}/></div>
          </article>

          <article className="card" role="listitem">
            <h3>Tendencia</h3>
            <div className="kpi">Bajando</div>
            <p style={{color:"var(--muted)", margin:"0 0 10px"}}>Óptimo</p>
            <div className="bar"><span style={{width:"80%"}}/></div>
          </article>
        </div>

        {/* Aquí puedes seguir con “Consumo semanal”, “Dispositivos” etc. */}
        <section className="section">
          <div className="card" style={{minHeight: 220}}>
            <h3>Consumo Semanal</h3>
            <p style={{color:"var(--muted)"}}>Comparación con la semana anterior</p>
          </div>
        </section>
      </main>
    </>
  );
}
