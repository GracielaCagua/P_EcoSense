import { createContext, useContext, useState } from "react";

type AnnounceCtx = { announce: (msg:string)=>void };
const Ctx = createContext<AnnounceCtx>({ announce: ()=>{} });
export const useAnnouncer = () => useContext(Ctx);

export function AnnouncerProvider({ children }:{children: React.ReactNode}){
  const [msg, setMsg] = useState<string | null>(null);

  const announce = (m:string) => {
    setMsg(m);
    // quitar luego de 4s
    setTimeout(()=>setMsg(null), 4000);
  };

  return (
    <Ctx.Provider value={{ announce }}>
      {/* Región para lectores */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">{msg}</div>

      {/* “Subtítulo” visible (si captions está activo lo mostrarás desde App) */}
      {children}
    </Ctx.Provider>
  );
}
