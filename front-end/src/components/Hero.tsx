// front-end/src/components/Hero.tsx

export default function Hero() {
  return (
    // Usa un color azul oscuro y CONTENIDO (bg-blue-800) para evitar desbordamiento
    <div className="bg-blue-800 dark:bg-gray-950 text-white py-16 px-4 md:px-6 text-center shadow-inner">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Monitoriza y optimiza tu consumo energético
        </h1>
        <p className="text-blue-300 dark:text-gray-400 mb-8 text-lg md:text-xl">
          Compatible con baja visión, lectores de pantalla y alto contraste. (RNF02, RNF08)
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#main-content" className="bg-white text-blue-800 dark:text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-gray-200 transition-colors text-lg">
            Ir al contenido
          </a>
          <button className="border border-blue-400 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg">
            Ver dispositivos
          </button>
        </div>
      </div>
    </div>
  );
}