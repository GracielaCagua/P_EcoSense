// front-end/src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-12 px-4 md:px-6 mt-16 border-t border-gray-800 dark:border-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* COLUMNA 1: Logo y Descripción */}
        <div className="space-y-4">
          <a href="#" className="font-extrabold text-3xl text-blue-500 dark:text-blue-300 tracking-tight">
            EcoSense
          </a>
          <p className="text-sm">
            Optimiza tu consumo energético de forma inteligente y accesible.
            Desarrollado para una usabilidad superior (RNF09).
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Íconos de redes sociales aquí si los necesitas */}
          </div>
        </div>

        {/* COLUMNA 2: Comunidad */}
        <div>
          <h4 className="font-semibold text-white text-lg mb-4">Comunidad</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Tutoriales</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Foro</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* COLUMNA 3: Servicios */}
        <div>
          <h4 className="font-semibold text-white text-lg mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Alojamiento Cloud</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Soporte Premium</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Integraciones</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Actualizaciones</a></li>
          </ul>
        </div>

        {/* COLUMNA 4: Sobre nosotros */}
        <div>
          <h4 className="font-semibold text-white text-lg mb-4">Sobre Nosotros</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Nuestra Empresa</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contacta con nosotros</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Prensa</a></li>
            <li>
                <select className="mt-2 p-1 rounded bg-gray-800 text-gray-300 border border-gray-700">
                    <option>🇪🇸 Español</option>
                    <option>🇬🇧 English</option>
                </select>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-8">
        © {new Date().getFullYear()} EcoSense. Todos los derechos reservados.
      </div>
    </footer>
  );
}