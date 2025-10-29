import { useEffect, useRef, useState } from 'react'

const METRICS_KEY = 'usability_metrics'

function pushMetric(m: Record<string, unknown>) {
  try {
    const raw = localStorage.getItem(METRICS_KEY) || '[]'
    const arr = JSON.parse(raw)
    arr.push(m)
    localStorage.setItem(METRICS_KEY, JSON.stringify(arr))
  } catch (e) {
    console.warn('Error saving metric', e)
  }
  fetch('/metrics', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(m) }).catch(() => {})
}

export default function UserForm() {
  const [mode, setMode] = useState<'login'|'register'|'recover'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const startRef = useRef<number | null>(null)

  useEffect(() => { startRef.current = Date.now(); pushMetric({ page: 'usuario', action: 'load', timestamp: new Date().toISOString(), mode }) }, [mode])

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const duration = startRef.current ? Date.now() - startRef.current : undefined
    const success = !!email && !!password
    pushMetric({ page: 'usuario', action: 'login_attempt', durationMs: duration, success, timestamp: new Date().toISOString() })
    // Llamada de ejemplo al backend
    fetch('/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, remember }) })
      .then((r) => {
        if (r.ok) {
          alert('Login OK (simulado)')
        } else {
          alert('Login falló (simulado)')
        }
      }).catch(() => alert('Error de red (simulado)'))
  }

  function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    const duration = startRef.current ? Date.now() - startRef.current : undefined
    const success = !!email && !!password
    pushMetric({ page: 'usuario', action: 'register', durationMs: duration, success, timestamp: new Date().toISOString() })
    fetch('/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
      .then(() => alert('Registro enviado (simulado)')).catch(() => alert('Error de red (simulado)'))
  }

  function handleRecover(e: React.FormEvent) {
    e.preventDefault()
    pushMetric({ page: 'usuario', action: 'recover', timestamp: new Date().toISOString() })
    fetch('/auth/recover', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      .then(() => alert('Correo de recuperación enviado (simulado)')).catch(() => alert('Error de red (simulado)'))
  }

  return (
    <section aria-labelledby="user-form-title">
      <h2 id="user-form-title">Acceso usuario</h2>
      <div role="tablist" aria-label="Opciones usuario">
        <button onClick={() => setMode('login')} aria-pressed={mode === 'login'}>Acceder</button>
        <button onClick={() => setMode('register')} aria-pressed={mode === 'register'}>Registro</button>
        <button onClick={() => setMode('recover')} aria-pressed={mode === 'recover'}>Recuperar</button>
      </div>

      {mode === 'login' && (
        <form onSubmit={handleLogin} aria-label="Formulario de acceso">
          <label htmlFor="uemail">Email</label>
          <input id="uemail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="upass">Contraseña</label>
          <input id="upass" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} /> Recuérdame
          </label>
          <button type="submit">Entrar</button>
        </form>
      )}

      {mode === 'register' && (
        <form onSubmit={handleRegister} aria-label="Formulario de registro">
          <label htmlFor="remail">Email</label>
          <input id="remail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="rpass">Contraseña</label>
          <input id="rpass" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Registrar</button>
        </form>
      )}

      {mode === 'recover' && (
        <form onSubmit={handleRecover} aria-label="Formulario recuperar contraseña">
          <label htmlFor="cemail">Email</label>
          <input id="cemail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">Enviar recuperacion</button>
        </form>
      )}
    </section>
  )
}
