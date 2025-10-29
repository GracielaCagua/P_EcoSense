// src/components/Announcer.tsx
import { createContext, useContext, useState } from "react";

type AnnounceFn = (msg: string) => void;
const AnnouncerCtx = createContext<AnnounceFn>(() => {});

export function AnnouncerProvider({ children }: { children: React.ReactNode }) {
  const [msg, setMsg] = useState("");
  const announce: AnnounceFn = (m) => { setMsg(""); setTimeout(() => setMsg(m), 30); };

  return (
    <AnnouncerCtx.Provider value={announce}>
      {children}
      <div aria-live="polite" aria-atomic="true" className="sr-only">{msg}</div>
    </AnnouncerCtx.Provider>
  );
}

// desactiva el warning del linter solo aquí
// eslint-disable-next-line react-refresh/only-export-components
export function useAnnouncer() {
  return useContext(AnnouncerCtx);
}
