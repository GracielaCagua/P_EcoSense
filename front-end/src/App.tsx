import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeForm from "./components/HomeForm"; // ajusta según la carpeta real
import Footer from "./components/Footer";
import AccessibilityMenu from "./components/AccessibilityMenu";
import { useA11yPrefs } from "./hooks/useA11yPrefs";
import { AnnouncerProvider, useAnnouncer } from "./components/Announcer";

/* ------------------ Toast (mensajes accesibles) ------------------ */
function Toast() {
  const { announce } = useAnnouncer();

  // Anuncio al montar el componente
  useEffect(() => {
    announce("Bienvenido a EcoSense. Configura tus preferencias.");
  }, [announce]);

  return null;
}

/* --------------------------- App principal --------------------------- */
export default function App() {
  const { prefs } = useA11yPrefs();

  return (
    <AnnouncerProvider>
      <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
        <Header />
        <Hero />

        <main
          id="contenido"
          className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3"
        >
          <section className="md:col-span-2">
            <HomeForm />
          </section>
          <aside className="md:col-span-1">
            <AccessibilityMenu />
          </aside>
        </main>

        <Footer />

        {/* Región visible de subtítulos / alertas visuales */}
        {prefs.captions && <A11yToast />}

        {/* Lanzar mensaje de bienvenida */}
        <Toast />
      </div>
    </AnnouncerProvider>
  );
}

/* ---------------- Toast visible (para subtítulos visuales) ---------------- */
import { useState } from "react";

function A11yToast() {
  const [text, setText] = useState<string | null>(null);

  // Escuchar mensajes globales
  useEffect(() => {
    (window as any).announce = (msg: string) => {
      setText(msg);
      setTimeout(() => setText(null), 4000);
    };
  }, []);

  if (!text) return null;

  return (
    <div className="a11y-toast" role="status" aria-live="polite">
      {text}
    </div>
  );
}
