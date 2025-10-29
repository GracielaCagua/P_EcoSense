export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-10">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} EcoSense • Accesible •
        {" "}
        <a className="underline" href="#privacidad">Privacidad / Términos</a>
      </div>
    </footer>
  );
}
