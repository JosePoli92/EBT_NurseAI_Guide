# Prototipo de Baja Resolución — NurseAI Guide

## 3.1 Implementación del prototipo a baja resolución

### Definición aplicada (Escenario 3 — U.S. Department, 2018)

> "Los prototipos de baja definición suelen elaborarse en papel y no permiten modelar las interacciones del usuario con el producto o servicio. Dentro de estos prototipos se incluyen las maquetas dibujadas a mano y las impresiones. Estos prototipos son más rápidos de crear, son útiles para permitir la visualización temprana de soluciones de diseño alternativas, y permite que los usuarios se sientan más cómodos a la hora de sugerir cambios."

---

## Técnicas aplicadas

### 1. Bocetos en papel (MPIUA, 2014)
Primera exploración visual de la estructura de pantallas en papel cuadriculado:
- Disposición general del layout (sidebar + contenido)
- Jerarquía de elementos (cabecera, tarjetas, navegación)
- Flujo entre pantallas principales

### 2. Wireframes (MPIUA, 2014)
Representación esquemática en escala de grises de cada pantalla:
- Sin colores ni tipografía definitiva
- Solo cajas, líneas y placeholders
- Foco en funcionalidad y disposición de contenidos

**Herramienta:** Balsamiq / Papel y lápiz  
**Características:** Escala de grises, sin estilo, sin imágenes reales, flujo básico marcado con flechas

---

## Pantallas del prototipo de baja resolución

El prototipo de baja resolución (imagen adjunta: `Prototipo_baja_resolucion.jpeg`) muestra:

### Pantalla principal documentada

```
┌─────────────────────────────────────────┐
│  ≡   NurseIA Guide              🔔      │
├─────────────────────────────────────────┤
│  [👤]  ¡Hola, Ana!                      │
│        Aquí encontrarás herramientas    │
│        de IA que te ayudarán...         │
├─────────────────────────────────────────┤
│  🔍  Buscar herramientas, temas...      │
├─────────────────────────────────────────┤
│  ACCESOS RÁPIDOS                        │
│  ┌──────────────┐  ┌──────────────┐    │
│  │ ☆ Recomend.  │  │ 🎓Tutoriales │    │
│  │ Herramientas │  │ Aprende paso │    │
│  │ personalizad.│  │ a paso    →  │    │
│  └──────────────┘  └──────────────┘    │
│  ┌──────────────┐  ┌──────────────┐    │
│  │ 👥 Comunidad │  │ 👤 Mi Perfil │    │
│  │ Comparte exp │  │ Gestiona tu  │    │
│  │ y aprende → │  │ información →│    │
│  └──────────────┘  └──────────────┘    │
├─────────────────────────────────────────┤
│  RECOMENDADO PARA TI          Ver todo →│
│  ┌────────────────────────────────────┐ │
│  │ [img] ChatGPT para educación...    │ │
│  │       Educación     5 min lectura  │ │
│  └────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│  NOVEDADES                    Ver todo →│
│  📢 Nueva herramienta: MedAI...    →   │
├─────────────────────────────────────────┤
│  🏠 Inicio  ☆ Recom.  🎓 Tut.  👤Perf │
└─────────────────────────────────────────┘
```

---

## Funcionalidades representadas en baja resolución

| Funcionalidad | Representación en baja res |
|---------------|---------------------------|
| F01 Dashboard | Panel principal con accesos rápidos 2x2 |
| F02 Recomendaciones | Sección "Recomendado para ti" + acceso rápido |
| F03 Tutoriales | Acceso rápido + sección de tutoriales destacados |
| F04 Sello validación | No visible (baja res no detalla badges) |
| F07 Notificaciones | Ícono de campana en header con indicador |

---

## Diferencias clave: Baja vs Alta resolución

| Aspecto | Baja resolución | Alta resolución |
|---------|-----------------|-----------------|
| Representación | Papel / Escala de grises | HTML/CSS/JS a color |
| Precisión | Boceto esquemático | Pixel-perfect con sistema de diseño |
| Interactividad | Solo mirar / apuntar | Navegación completa funcional |
| Tiempo de creación | 30 minutos | 8-12 horas |
| Utilidad | Validar estructura y flujo | Demostración a stakeholders |
| Técnica | Boceto + Wireframe + Papel | Maqueta digital + Prototipo software |
| Feedback del usuario | Cómodo para sugerir cambios | Evaluación de usabilidad real |

---

## Conclusión metodológica

El proceso siguió la metodología UXPin (Zaki, 2009):
1. **Baja resolución (papel):** Validar que el flujo y la estructura tenían sentido para los usuarios auxiliares de enfermería
2. **Iteración:** Ajustes basados en feedback temprano
3. **Alta resolución (software):** Representación final interactiva para demostración y validación de usabilidad

La progresión baja → alta permitió detectar problemas de navegación antes de invertir tiempo en el código, reduciendo el coste de cambio (UXPin, 2015).

---

*Referencia: MPIUA (2014), U.S. Department (2018), UXPin Inc. (Zaki, 2009)*
