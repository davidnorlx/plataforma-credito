# Application Architecture

**Documento:** Application Architecture

**Framework:** TOGAF® ADM – Phase C (Application Architecture)

**Proyecto:** Plataforma de Solicitud y Aprobación de Créditos

**Versión:** 1.0

**Estado:** Draft

**Autor:** David López

---

# Control de Versiones

| Versión | Fecha      | Autor       | Descripción     |
| ------- | ---------- | ----------- | --------------- |
| 1.0     | DD/MM/YYYY | David López | Versión inicial |

---

# Tabla de Contenido

1. Propósito
2. Objetivos
3. Alcance
4. Arquitectura Actual (AS-IS)
5. Arquitectura Objetivo (TO-BE)
6. Principios de Aplicación
7. Catálogo de Aplicaciones
8. Servicios de Aplicación
9. Interfaces de Aplicación
10. Integración entre Aplicaciones
11. Flujo de Aplicaciones
12. Requerimientos No Funcionales
13. Riesgos
14. KPIs
15. Trazabilidad
16. Conclusiones

---

# 1. Propósito

Definir la arquitectura de aplicaciones que soportará el proceso de originación y aprobación de créditos, identificando los componentes lógicos, servicios, interfaces e interacciones necesarias para implementar las capacidades de negocio definidas en la Business Architecture.

---

# 2. Objetivos

* Definir las aplicaciones necesarias.
* Identificar responsabilidades.
* Especificar interfaces.
* Definir integraciones.
* Mantener bajo acoplamiento.
* Garantizar escalabilidad y mantenibilidad.

---

# 3. Alcance

La arquitectura contempla:

* Portal Web.
* Gestión de solicitudes.
* Evaluación crediticia.
* Gestión de decisiones.
* Autenticación.
* Auditoría.
* Notificaciones.

---

# 4. Arquitectura Actual (AS-IS)

La organización presenta:

* Aplicaciones parcialmente integradas.
* Procesos manuales.
* Integraciones punto a punto.
* Escasa reutilización.
* Baja escalabilidad.

---

# 5. Arquitectura Objetivo (TO-BE)

La arquitectura objetivo estará basada en:

* Aplicaciones desacopladas.
* APIs bien definidas.
* Componentes independientes.
* Servicios reutilizables.
* Integraciones estandarizadas.
* Alta mantenibilidad.

---

# 6. Principios de Aplicación

Las aplicaciones deberán cumplir:

* API First.
* Loose Coupling.
* High Cohesion.
* Reusability.
* Stateless.
* Security by Design.

Referencia:

Architecture-Principles.md

---

# 7. Catálogo de Aplicaciones

| Aplicación                 | Propósito                  |
| -------------------------- | -------------------------- |
| Portal Web                 | Interacción con el cliente |
| Servicio de Solicitudes    | Gestionar solicitudes      |
| Servicio de Evaluación     | Calcular score             |
| Servicio de Decisiones     | Aprobar o rechazar         |
| Servicio de Auditoría      | Registrar eventos          |
| Servicio de Notificaciones | Informar al cliente        |
| Servicio de Autenticación  | Gestionar identidad        |

---

# 8. Servicios de Aplicación

## Gestión de Solicitudes

Responsabilidades:

* Registrar solicitud.
* Consultar solicitud.
* Actualizar estado.

---

## Evaluación Crediticia

Responsabilidades:

* Calcular score.
* Aplicar reglas.
* Retornar resultado.

---

## Decisiones

Responsabilidades:

* Aprobar.
* Rechazar.
* Registrar decisión.

---

## Auditoría

Responsabilidades:

* Registrar eventos.
* Consultar historial.
* Mantener trazabilidad.

---

## Notificaciones

Responsabilidades:

* Informar aprobación.
* Informar rechazo.
* Confirmar registro.

---

## Autenticación

Responsabilidades:

* Autenticar usuarios.
* Autorizar acceso.
* Gestionar sesiones.

---

# 9. Interfaces

Las aplicaciones expondrán interfaces REST.

Ejemplos:

POST /credit-applications

GET /credit-applications/{id}

POST /authentication/login

GET /customers/{id}

Las especificaciones detalladas serán documentadas mediante OpenAPI.

---

# 10. Integración

Las aplicaciones se comunicarán mediante:

* APIs REST.
* Eventos de negocio cuando aplique.

Principios:

* Bajo acoplamiento.
* Contratos estables.
* Comunicación segura.

---

# 11. Flujo de Aplicaciones

Portal Web

↓

Gestión de Solicitudes

↓

Evaluación

↓

Decisión

↓

Auditoría

↓

Notificación

↓

Portal Web

---

# 12. Requerimientos No Funcionales

| Requerimiento       | Valor                   |
| ------------------- | ----------------------- |
| Disponibilidad      | 99.9 %                  |
| Tiempo de respuesta | < 2 segundos            |
| Escalabilidad       | Horizontal              |
| Seguridad           | OAuth2 + JWT            |
| Observabilidad      | Logs, métricas y trazas |

---

# 13. Riesgos

| Riesgo                              | Mitigación               |
| ----------------------------------- | ------------------------ |
| Alta dependencia entre aplicaciones | Bajo acoplamiento        |
| Cambios frecuentes                  | APIs versionadas         |
| Errores de integración              | Contratos bien definidos |
| Baja disponibilidad                 | Arquitectura resiliente  |

---

# 14. KPIs

* Tiempo de respuesta.
* Disponibilidad.
* Número de errores.
* Tiempo medio de recuperación.
* Uso de APIs.

---

# 15. Trazabilidad

Objetivos Estratégicos

↓

Capacidades

↓

Procesos

↓

Servicios

↓

Aplicaciones

↓

Tecnología

---

# 16. Conclusiones

La Arquitectura de Aplicaciones define los componentes lógicos responsables de implementar las capacidades de negocio de la plataforma.

La separación por responsabilidades, el uso de interfaces estandarizadas y el bajo acoplamiento permitirán construir una solución escalable, mantenible y preparada para evolucionar conforme cambien las necesidades del negocio.

La implementación tecnológica específica de estas aplicaciones será definida en la fase de Technology Architecture.
