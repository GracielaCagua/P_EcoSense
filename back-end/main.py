# /back-end/main.py

from fastapi import FastAPI

# Inicialización de la aplicación
app = FastAPI(
    title="EcoSense Backend API",
    description="API REST para la plataforma de optimización energética accesible.",
    version="1.0.0"
)

# Endpoint de prueba para verificar la disponibilidad
@app.get("/")
def read_root():
    # Mensaje simple que confirma el funcionamiento
    return {"project": "EcoSense", "status": "Running"}

# Endpoint para verificar la accesibilidad de la documentación
@app.get("/status")
def get_status():
    # Requisito RNF07: Disponibilidad del 99%
    return {"service": "Backend API", "health": "OK", "uptime_check": "Available"}