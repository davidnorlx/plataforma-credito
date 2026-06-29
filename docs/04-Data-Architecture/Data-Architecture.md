# Data Architecture

**Documento:** Data Architecture

**Framework:** TOGAF® ADM – Phase C (Data Architecture)

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
4. Principios de Datos
5. Arquitectura Actual (AS-IS)
6. Arquitectura Objetivo (TO-BE)
7. Entidades de Negocio
8. Modelo Conceptual de Datos
9. Clasificación de Datos
10. Ciclo de Vida de los Datos
11. Calidad de Datos
12. Seguridad de los Datos
13. Gobierno de Datos
14. Retención de Datos
15. Riesgos
16. KPIs
17. Trazabilidad
18. Conclusiones

---

# 1. Propósito

Definir la arquitectura de datos necesaria para soportar los procesos de negocio relacionados con la originación y aprobación de créditos, garantizando integridad, disponibilidad, seguridad y trazabilidad de la información.

---

# 2. Objetivos

* Identificar la información del negocio.
* Definir las entidades principales.
* Establecer relaciones conceptuales.
* Garantizar calidad de datos.
* Definir lineamientos de gobierno.
* Preparar la base para la arquitectura de aplicaciones.

---

# 3. Alcance

Incluye la información necesaria para:

* Gestión de clientes.
* Solicitudes de crédito.
* Evaluación crediticia.
* Decisiones.
* Auditoría.
* Consulta del estado.

No incluye información relacionada con:

* Contabilidad.
* Cobranza.
* Tesorería.
* Desembolsos.

---

# 4. Principios de Datos

Los principios aplicables son:

* Data is an Asset.
* Single Source of Truth.
* Data Quality.
* Data Security.
* Data Governance.
* Data Traceability.

Referencia:

* ../00-Governance/Architecture-Principles.md

---

# 5. Arquitectura Actual (AS-IS)

La información presenta las siguientes limitaciones:

* Datos distribuidos.
* Duplicidad.
* Escasa trazabilidad.
* Procesos manuales.
* Integraciones limitadas.
* Dificultad para auditoría.

---

# 6. Arquitectura Objetivo (TO-BE)

La información deberá caracterizarse por:

* Fuente única de información.
* Alta disponibilidad.
* Integridad.
* Consistencia.
* Auditoría.
* Escalabilidad.
* Seguridad.

---

# 7. Entidades de Negocio

Las entidades principales son:

## Cliente

Representa la persona que solicita un crédito.

### Atributos principales

* ClienteId
* TipoDocumento
* NumeroDocumento
* NombreCompleto
* FechaNacimiento
* Correo
* Teléfono

---

## SolicitudCredito

Representa una solicitud realizada por un cliente.

### Atributos

* SolicitudId
* ClienteId
* FechaSolicitud
* Salario
* MontoSolicitado
* Estado

---

## ScoreCrediticio

Resultado de la evaluación del riesgo.

### Atributos

* ScoreId
* SolicitudId
* Puntaje
* FechaCalculo

---

## Decision

Resultado final de la evaluación.

### Atributos

* DecisionId
* SolicitudId
* Resultado
* Motivo
* FechaDecision

---

## Historial

Registro de cambios sobre la solicitud.

### Atributos

* EventoId
* SolicitudId
* EstadoAnterior
* EstadoNuevo
* FechaEvento
* Usuario

---

# 8. Modelo Conceptual

```text
Cliente

│

├─────────────< SolicitudCredito

                     │

                     ├──────────── ScoreCrediticio

                     │

                     ├──────────── Decision

                     │

                     └──────────── Historial
```

---

# 9. Clasificación de Datos

| Información | Clasificación |
| ----------- | ------------- |
| Cliente     | Confidencial  |
| Solicitud   | Confidencial  |
| Score       | Confidencial  |
| Decisión    | Confidencial  |
| Historial   | Restringida   |

---

# 10. Ciclo de Vida

Creación

↓

Validación

↓

Persistencia

↓

Consulta

↓

Actualización

↓

Auditoría

↓

Archivado

↓

Eliminación

---

# 11. Calidad de Datos

Los datos deberán cumplir:

* Integridad.
* Exactitud.
* Consistencia.
* Disponibilidad.
* Trazabilidad.
* Completitud.

---

# 12. Seguridad

Los datos deberán protegerse mediante:

* Cifrado en tránsito.
* Cifrado en reposo.
* Control de acceso.
* Auditoría.
* Mínimo privilegio.

---

# 13. Gobierno de Datos

Responsabilidades:

| Rol         | Responsabilidad |
| ----------- | --------------- |
| Data Owner  | Define reglas   |
| Arquitecto  | Define modelo   |
| Desarrollo  | Implementa      |
| Operaciones | Monitorea       |

---

# 14. Retención

| Información | Retención                  |
| ----------- | -------------------------- |
| Solicitudes | Según política corporativa |
| Auditoría   | Según regulación vigente   |
| Historial   | Según regulación vigente   |

---

# 15. Riesgos

| Riesgo                 | Mitigación    |
| ---------------------- | ------------- |
| Datos inconsistentes   | Validaciones  |
| Pérdida de información | Backups       |
| Acceso no autorizado   | IAM + Cifrado |
| Duplicidad             | Fuente única  |

---

# 16. KPIs

* Calidad de datos.
* Porcentaje de registros válidos.
* Disponibilidad.
* Tiempo de consulta.
* Incidentes de seguridad.

---

# 17. Trazabilidad

Objetivos Estratégicos

↓

Capacidades

↓

Procesos

↓

Entidades

↓

Aplicaciones

↓

Tecnología

---

# 18. Conclusiones

La Arquitectura de Datos establece el modelo conceptual de la información requerida por el negocio, definiendo las entidades, relaciones y principios que servirán de base para la Arquitectura de Aplicaciones y la implementación tecnológica posterior.
