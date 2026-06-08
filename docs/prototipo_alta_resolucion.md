# Prototipo de Alta Resolución — NurseAI Guide

## 3.2 Implementación del prototipo a alta resolución

### Definición aplicada (Escenario 3 — U.S. Department, 2018)

> "Los prototipos de alta definición suelen elaborarse en computadoras y, por lo general, permiten modelar las interacciones de usuario de manera realista. Los prototipos de alta definición acercan lo más posible a una verdadera representación de la interfaz de usuario del producto o servicio."

---

## Técnica principal: Prototipo de Software

Según MPIUA (2014), el prototipo de software es una **implementación real con técnicas de programación** que reproduce el funcionamiento de una parte importante de las funcionalidades para probar el sistema.

**Por qué esta técnica:**
- Permite interacción completa del usuario con todas las pantallas
- Simula flujos reales (filtros, guardado, progreso, modales)
- Facilita la recopilación de datos de rendimiento humano
- Más efectivo para demostración a stakeholders (hospitales, clínicas)

**Herramientas utilizadas:**
- HTML5 — estructura semántica de la interfaz
- CSS3 — sistema de diseño visual, animaciones, responsive
- JavaScript (ES6+) — lógica de negocio, estado, interacciones

---

## Técnicas complementarias aplicadas

### 1. Maqueta digital (MPIUA, 2014)
Se construyó el sistema visual completo antes de añadir interactividad:
- Paleta de colores clínica (#0e7490 azul petróleo, #10b981 verde salud)
- Sistema de componentes: cards, botones, badges, tablas
- Iconografía médica contextual (🏥, 🩺, 💊, 🛡️)

### 2. Mapa navegacional (MPIUA, 2014)
Se definió el mapa de 7 pantallas antes de codificar:
```
Dashboard → Recomendaciones → Tutoriales → Comparador
                                          → Mi Progreso
                                          → Panel Admin
                                          → Suscripción
```

### 3. Wireframe digital (MPIUA, 2014)
Estructura de cada pantalla definida en términos de:
- Disposición de columnas (sidebar 260px + contenido principal)
- Jerarquía de información (banner > stats > cards > sidebar derecha)
- Comportamiento de componentes

---

## Funcionalidades evidenciadas

### F01 — Dashboard interactivo
**Pantalla:** `index.html` → página `dashboard`  
**Elementos:** Banner de bienvenida con nombre del usuario, 4 tarjetas de estadísticas animadas, grid de herramientas recomendadas, barra lateral con progreso de competencias y notificaciones en tiempo real.  
**Interactividad:** Clic en cada tarjeta de stats navega a la sección correspondiente.

### F02 — Recomendaciones inteligentes por perfil
**Pantalla:** `page-recommendations`  
**Elementos:** Tarjeta de perfil con match del 92%, barra de compatibilidad visual, filtros por área (UCI, Urgencias, Documentación), catálogo de 6 herramientas filtradas.  
**Interactividad:** Botones de filtro actualizan el grid en tiempo real. Guardar herramienta persiste estado con ícono.

### F03 — Tutoriales interactivos con seguimiento de progreso
**Pantalla:** `page-tutorials`  
**Elementos:** 6 tarjetas de tutorial con miniatura de color, duración, nivel y barra de progreso individual. Registro automático al hacer clic en "Continuar".  
**Interactividad:** Al continuar un tutorial, el progreso avanza +40% por sesión. Al completar, se activa badge de logro. Modal con contenido del módulo (conceptos, caso clínico, ejercicio, evaluación).

### F04 — Sello de validación clínica
**Implementación:** Visible en cada herramienta del catálogo.  
**Niveles:** ✓ Validado (verde), En Revisión (amarillo), Básico (azul).  
**En comparador:** Columna "Evidencia Clínica" con escala de 5 hexágonos ponderada.

### F05 — Modo sin conexión (offline)
**Control:** Botón "📥 Offline" en topbar.  
**Al activar:** Banner de advertencia visible, toast de confirmación "contenido descargado disponible".  
**Al reconectar:** Toast "progreso sincronizado", banner desaparece.

### F06 — Dashboard de progreso y estadísticas personales
**Pantalla:** `page-progress`  
**Elementos:** Hero de perfil con XP acumulados (2.340 pts), 4 métricas principales, gráfico de barras de actividad semanal, 5 barras de competencias, 6 badges (4 desbloqueados + 2 bloqueados), rutas asignadas.

### F07 — Sistema de alertas y notificaciones
**Implementación:** Panel lateral en Dashboard con 4 notificaciones categorizadas (nuevo, info, alerta).  
**Toast global:** Mensajes de confirmación en cualquier acción del sistema.  
**Puntos de color:** Verde (nueva), azul (info), naranja (alerta).

### F08 — Panel institucional para administradores
**Pantalla:** `page-admin`  
**Elementos:** 3 KPIs (personal, tasa de adopción, rutas activas), tabla de 5 auxiliares con estado, progreso visual, racha y acciones.  
**Interactividad:** Modal de asignación de ruta con selector de área, ruta y fecha límite. Botón exportar reporte.

### F09 — Comparador avanzado de herramientas IA
**Pantalla:** `page-comparator`  
**Elementos:** Filtros por costo, idioma e integración HCE. Tabla comparativa con columnas: nombre, costo (chips de color), valoración (estrellas), idioma, compatibilidad HCE, nivel de evidencia clínica (hexágonos), y botón de detalle.  
**Interactividad:** Los filtros actualizan la tabla en tiempo real. Exportar PDF muestra flujo de confirmación.

### F10 — Gestión de suscripción y pagos
**Pantalla:** `page-subscription`  
**Elementos:** 3 planes (Básico $0, Pro $29.900/mes, Institucional $199.000/mes). Plan Pro destacado con escala visual mayor. Lista de características incluidas/excluidas.  
**Interactividad:** Al seleccionar plan pago, se abre modal con formulario de tarjeta de crédito. Al confirmar, estado del plan se actualiza en el perfil.

---

## Dimensiones del prototipo (Landay, 2015)

| Dimensión | Nivel | Descripción |
|-----------|-------|-------------|
| Representación | Digital / Computador | HTML/CSS/JS ejecutable en navegador |
| Precisión (fidelidad) | Alta | Colores finales, tipografía, flujos completos |
| Interactividad | Alta | Navegación completa, modales, filtros, persistencia de estado |
| Evolución | Iterativo | Construido desde wireframe → maqueta → prototipo software |

---

## Beneficios logrados con este prototipo (UXPin, 2015)

- **Menor coste de cambio:** Cambios en UI sin tocar backend ni base de datos
- **Probar usabilidad:** Flujo real para que auxiliares de enfermería naveguen y opinen
- **Facilitar venta de la idea:** Demo ejecutable para hospitales y clínicas
- **Toma de decisiones:** Evidencia visual de prioridades de diseño antes del desarrollo final

---

*Referencia: MPIUA (2014), U.S. Department (2018), UXPin Inc. (Zaki, 2009), Landay J. (2015)*
