# NurseAI Guide 🏥

**Prototipo de Alta Resolución** — Guía Interactiva de Herramientas de IA para Auxiliares de Enfermería

> Módulo: Emprendimiento de Base Tecnológica (EBT)  
> Unidad 2 / Escenario 3: Prototipado Rápido y Producto Mínimo Viable  
> Institución: Politécnico Grancolombiano  

---

## Descripción del proyecto

**NurseAI Guide** es una plataforma digital que orienta y capacita a auxiliares de enfermería en el uso de herramientas de inteligencia artificial en su práctica clínica diaria. Está enfocada en el sector de salud digital de Colombia, con cobertura inicial en Bogotá.

**Segmento objetivo:** Auxiliares de enfermería (20-50 años), turnos rotativos, dispositivo principal: celular.

---

## Prototipo de alta resolución

### Técnica utilizada
**Prototipo de Software** (según clasificación Escenario 3 — MPIUA, 2014):  
Implementación en HTML5, CSS3 y JavaScript puro que simula interacciones realistas del sistema, navegación entre secciones, filtros funcionales y modales con detalle completo de cada funcionalidad.

### Características del prototipo
- Alta fidelidad visual: colores, tipografía, iconografía, gradientes y sombras del producto final
- Interactividad completa: navegación entre 7 pantallas, modales, filtros, formularios
- Datos representativos: catálogo de herramientas, perfiles de usuario, estadísticas reales
- Técnica complementaria: **Wireframe digital** (estructura antes del estilo) → **Maqueta digital** (acabado visual) → **Prototipo software** (interactividad)

---

## Funcionalidades implementadas

| # | Funcionalidad | Estado |
|---|---------------|--------|
| 01 | Dashboard interactivo | ✅ Implementado |
| 02 | Recomendaciones inteligentes por perfil | ✅ Implementado |
| 03 | Tutoriales interactivos con seguimiento | ✅ Implementado |
| 04 | Sello de validación clínica | ✅ Implementado |
| 05 | Modo sin conexión (offline) | ✅ Implementado |
| 06 | Dashboard de progreso y estadísticas | ✅ Implementado |
| 07 | Sistema de alertas y notificaciones | ✅ Implementado |
| 08 | Panel institucional para administradores | ✅ Implementado |
| 09 | Comparador avanzado de herramientas IA | ✅ Implementado |
| 10 | Gestión de suscripción y pagos | ✅ Implementado |

---

## Estructura del proyecto

```
EBT_NurseAI_Guide/
├── index.html                  # Aplicación principal (SPA)
├── assets/
│   ├── css/
│   │   └── styles.css          # Sistema de diseño completo
│   └── js/
│       └── app.js              # Lógica de la aplicación
├── docs/
│   ├── prototipo_alta_resolucion.md   # Documentación técnica alta res.
│   └── prototipo_baja_resolucion.md   # Documentación técnica baja res.
└── README.md
```

---

## Cómo ejecutar

```bash
# Clonar el repositorio
git clone https://github.com/JosePoli92/EBT_NurseAI_Guide.git

# Entrar al directorio
cd EBT_NurseAI_Guide

# Abrir en el navegador (doble clic en index.html)
# O con servidor local:
npx serve .
```

No requiere instalación de dependencias. Solo un navegador moderno.

---

## Pantallas del prototipo

| Pantalla | Descripción |
|----------|-------------|
| Dashboard | Panel principal con estadísticas, herramientas recomendadas y notificaciones |
| Recomendaciones | Herramientas filtradas por área, costo e idioma con match de perfil al 92% |
| Tutoriales | Microaprendizajes con progreso visual, completado automático y filtros por nivel |
| Comparador IA | Tabla comparativa con filtros ponderables y exportación PDF |
| Mi Progreso | Estadísticas personales, actividad semanal, competencias y logros/badges |
| Panel Admin | Vista institucional con seguimiento del personal, rutas obligatorias y reportes |
| Suscripción | Tres planes de pago con pasarela de pago integrada |

---

## Diseño

- **Paleta:** Azul petróleo (#0e7490), Azul marino (#1e3a5f), Verde esmeralda (#10b981)
- **Tipografía:** Segoe UI / System UI
- **Estilo:** Glassmorphism suave, cards con sombra, gradientes clínicos
- **Responsive:** Adaptable a tablet y móvil (uso principal de auxiliares en turno)

---

## Metodología de prototipado aplicada (Esc. 3)

Según la guía UXPin Inc. (Zaki, 2009):

1. **Definición del alcance:** 10 funcionalidades priorizadas por impacto clínico
2. **Construcción de escenarios:** Persona: Ana, 29 años, auxiliar UCI, nivel intermedio
3. **Iteración:** Baja definición (papel/wireframe) → Alta definición (software funcional)
4. **Técnicas combinadas:**
   - Baja resolución: Bocetos en papel + Wireframes
   - Alta resolución: Maqueta digital + Prototipo de software

---

## Contexto del emprendimiento

- **Sector:** Tecnológico con aplicación en Salud Digital
- **Subsector:** Software de orientación y capacitación en IA
- **Mercado inicial:** Bogotá, Colombia
- **Usuario objetivo:** Auxiliares de enfermería de hospitales públicos, clínicas privadas e IPS

---

*Desarrollado como evidencia del punto 3.2 — Prototipo de Alta Resolución*  
*Politécnico Grancolombiano — Facultad de Ingeniería, Diseño e Innovación*
