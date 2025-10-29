// front-end/src/hooks/useA11yPrefs.tsx
import { useState, useEffect } from 'react';

// Tipos de datos
type FontSize = 'normal' | 'large' | 'extra-large';

interface A11yPrefs {
  highContrast: boolean;
  fontSize: FontSize;
  // Podrías añadir subtitleAlerts: boolean, etc.
}

// Valores iniciales por defecto (o cargar desde localStorage)
const defaultPrefs: A11yPrefs = {
  highContrast: false,
  fontSize: 'normal',
};

export const useA11yPrefs = () => {
  const [prefs, setPrefs] = useState<A11yPrefs>(() => {
    // Cargar preferencias guardadas al iniciar
    const saved = localStorage.getItem('a11yPrefs');
    return saved ? JSON.parse(saved) : defaultPrefs;
  });

  // Efecto secundario para aplicar clases y guardar en localStorage
  useEffect(() => {
    const html = document.documentElement;

    // 1. Aplicar Alto Contraste (Clase global 'high-contrast')
    if (prefs.highContrast) {
      html.classList.add('high-contrast');
    } else {
      html.classList.remove('high-contrast');
    }

    // 2. Aplicar Tamaño de Fuente (Clases 'text-normal', 'text-large', etc.)
    // Primero, eliminar cualquier clase de fuente anterior
    html.classList.remove('text-normal', 'text-large', 'text-extra-large'); 
    
    // Añadir la clase de fuente actual
    if (prefs.fontSize !== 'normal') {
      html.classList.add(`text-${prefs.fontSize}`);
    }

    // 3. Guardar en almacenamiento local
    localStorage.setItem('a11yPrefs', JSON.stringify(prefs));
  }, [prefs]); // Se ejecuta cada vez que 'prefs' cambia

  // Función para actualizar una preferencia
  const updatePrefs = (key: keyof A11yPrefs, value: A11yPrefs[keyof A11yPrefs]) => {
    setPrefs(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return { prefs, updatePrefs };
};