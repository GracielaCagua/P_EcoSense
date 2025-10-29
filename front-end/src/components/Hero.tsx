export default function Hero() {
  return (
    <section className="bg-blue-700 text-white" role="region" aria-label="Presentación">
      <div className="container mx-auto grid gap-8 px-4 py-14 md:grid-cols-2">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Monitorea y optimiza tu consumo energético
          </h1>
          <p className="mt-4 text-blue-100">
            Compatible con baja visión, lectores de pantalla y alto contraste.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contenido" className="btn-primary bg-white text-blue-700 hover:bg-blue-50">Ir al contenido</a>
            <a href="#dispositivos" className="btn-outline border-white text-white">Ver dispositivos</a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-48 w-72 rounded-xl bg-white/15 backdrop-blur-sm" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
