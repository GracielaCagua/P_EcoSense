// front-end/src/components/AccessibilityMenu.tsx
import { useA11yPrefs } from '../hooks/useA11yPrefs';

export default function AccessibilityMenu() {
  const { prefs, updatePrefs } = useA11yPrefs();

  return (
    // Estilos basados en Tailwind (se aplicarán cuando corrijas index.css)
    <div className="space-y-4">
      
      {/* -------------------- CONTROL DE TAMAÑO DE FUENTE -------------------- */}
      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 pt-2">Tamaño de fuente</div>
      <select 
        className="block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 text-sm bg-white dark:bg-gray-700 dark:text-white"
        value={prefs.fontSize}
        onChange={(e) => updatePrefs('fontSize', e.target.value as 'normal' | 'large' | 'extra-large')}
        aria-label="Seleccionar tamaño de fuente"
      >
        <option value="normal">Mediana</option>
        <option value="large">Grande</option>
        <option value="extra-large">Extra Grande</option>
      </select>
      
      {/* -------------------- CONTROL DE ALTO CONTRASTE -------------------- */}
      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 pt-2">Contraste</div>
      <div className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          id="highContrast" 
          checked={prefs.highContrast}
          onChange={(e) => updatePrefs('highContrast', e.target.checked)}
          className="rounded text-blue-600 focus:ring-blue-500" 
          aria-checked={prefs.highContrast}
        />
        <label htmlFor="highContrast" className="text-sm text-gray-600 dark:text-gray-400">Alto contraste</label>
      </div>

      {/* -------------------- CONTROL DE TEMA (Modo Oscuro/Claro) -------------------- */}
      {/* Esto se conecta a ThemeToggle, pero lo mantenemos para consistencia RF02 */}
      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 pt-2">Tema</div>
      <select 
        className="block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 text-sm bg-white dark:bg-gray-700 dark:text-white"
        // Este select necesitaría lógica adicional de 'useTheme.ts'
        aria-label="Seleccionar tema de color"
      >
        <option>Sistema</option>
        <option>Claro</option>
        <option>Oscuro</option>
      </select>
      
    </div>
  );
}