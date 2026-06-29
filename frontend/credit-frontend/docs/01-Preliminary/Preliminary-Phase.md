# Preliminary Phase

**Documento:** Preliminary Phase

**Framework:** TOGAF® Standard – Architecture Development Method (ADM)

**Fase:** Preliminary Phase

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
4. Contexto Organizacional
5. Drivers del Negocio
6. Stakeholders
7. Framework de Arquitectura
8. Gobierno de Arquitectura
9. Architecture Repository
10. Herramientas de Arquitectura
11. Entregables
12. Roadmap ADM
13. Referencias
14. Conclusiones

---

# 1. Propósito

La fase preliminar establece las bases necesarias para el desarrollo de la Arquitectura Empresarial de la Plataforma de Solicitud y Aprobación de Créditos.

Su propósito es definir el marco de trabajo, el gobierno de arquitectura, los principios, la estructura documental y los mecanismos que guiarán el desarrollo de las siguientes fases del Architecture Development Method (ADM).

---

# 2. Objetivos

Los objetivos de esta fase son:

* Definir el alcance inicial de la arquitectura.
* Establecer el gobierno de arquitectura.
* Identificar los principales stakeholders.
* Adoptar TOGAF ADM como metodología de trabajo.
* Definir el repositorio de arquitectura.
* Establecer principios y estándares arquitectónicos.
* Definir los entregables del proyecto.

---

# 3. Alcance

La fase preliminar comprende:

* Definición del marco metodológico.
* Organización del repositorio de arquitectura.
* Definición del gobierno de arquitectura.
* Definición de principios arquitectónicos.
* Definición de estándares.
* Identificación de stakeholders.
* Planeación inicial del ADM.

No incluye actividades de diseño de negocio, datos, aplicaciones o tecnología, las cuales serán desarrolladas en las fases posteriores del ADM.

---

# 4. Contexto Organizacional

La organización busca modernizar el proceso de originación y aprobación de créditos mediante una plataforma digital basada en principios de arquitectura cloud-native.

La iniciativa hace parte de la estrategia de transformación digital de la organización, cuyo objetivo es mejorar la eficiencia operativa, reducir tiempos de respuesta y ofrecer una mejor experiencia al cliente.

Esta transformación requiere una arquitectura empresarial que permita alinear los objetivos del negocio con las capacidades tecnológicas, garantizando escalabilidad, seguridad y capacidad de evolución.

> **Nota:** El contexto detallado del negocio será desarrollado en el documento **Architecture Vision**.

---

# 5. Drivers del Negocio

Los principales impulsores de la iniciativa son:

## Estratégicos

* Transformación Digital.
* Optimización de procesos.
* Incremento de competitividad.
* Mejor experiencia del cliente.

## Operacionales

* Automatización.
* Disminución de tiempos de respuesta.
* Reducción de errores manuales.
* Incremento de productividad.

## Tecnológicos

* Adopción de servicios Cloud.
* Arquitectura Serverless.
* Infraestructura como Código.
* Observabilidad.
* Automatización de despliegues.

---

# 6. Stakeholders

## Stakeholders Clave

| Stakeholder | Interés |
|-------------|----------|
| Dirección de Tecnología | Modernización tecnológica |
| Arquitectura Empresarial | Gobierno de arquitectura |
| Arquitectura de Solución | Diseño de la solución |
| Área Comercial | Incrementar colocación de créditos |
| Área de Riesgos | Automatizar evaluación |
| Desarrollo | Implementación |
| Operaciones | Disponibilidad |
| Seguridad | Protección de la información |
| Auditoría | Cumplimiento |
| Cliente | Mejor experiencia digital |

---

# 7. Framework de Arquitectura

La arquitectura será desarrollada utilizando los siguientes estándares:

| Framework            | Propósito                  |
| -------------------- | -------------------------- |
| TOGAF ADM            | Arquitectura Empresarial   |
| ArchiMate            | Modelado Empresarial       |
| BPMN 2.0             | Procesos                   |
| C4 Model             | Arquitectura de Software   |
| ADR                  | Decisiones Arquitectónicas |
| AWS Well-Architected | Arquitectura Cloud         |

---

# 8. Gobierno de Arquitectura

El gobierno de arquitectura garantizará que todas las decisiones de diseño e implementación sean consistentes con los principios definidos por la organización.

El modelo de gobierno estará soportado por:

- Architecture Principles
- Architecture Standards
- Architecture Repository
- Architecture Decision Records (ADR)
- Architecture Reviews
- AWS Well-Architected Review

Los lineamientos completos se encuentran documentados en:

- `../00-Governance/Architecture-Principles.md`
- `../00-Governance/Architecture-Standards.md`
- `../00-Governance/Architecture-Repository.md`

---

# 9. Architecture Repository

# 9. Architecture Repository

Toda la documentación de arquitectura será gestionada mediante un repositorio estructurado siguiendo las fases del TOGAF Architecture Development Method (ADM).

El repositorio incluye:

- Gobierno de Arquitectura
- Fases del ADM
- Modelos de Arquitectura
- Diagramas
- Catálogos
- Matrices
- Architecture Decision Records (ADR)
- Evaluaciones AWS Well-Architected

La organización del repositorio se encuentra documentada en:

`../00-Governance/Architecture-Repository.md`
---

# 10. Herramientas

Las siguientes herramientas serán utilizadas durante el proyecto:

| Herramienta        | Uso                  |
| ------------------ | -------------------- |
| Visual Studio Code | Documentación        |
| Git                | Control de versiones |
| Draw.io            | Diagramas            |
| Mermaid            | Diagramas Markdown   |
| Archi              | Modelado ArchiMate   |
| Markdown           | Documentación        |
| GitHub             | Repositorio          |

---

# 11. Entregables

Durante el ADM se producirán los siguientes entregables principales:

* Architecture Vision
* Business Architecture
* Data Architecture
* Application Architecture
* Technology Architecture
* Opportunities & Solutions
* Migration Planning
* Implementation Governance
* Architecture Change Management
* AWS Well-Architected Review

---

# 12. Roadmap ADM

La arquitectura seguirá las fases del método ADM.

1. Preliminary Phase
2. Architecture Vision
3. Business Architecture
4. Information Systems Architecture

   * Data Architecture
   * Application Architecture
5. Technology Architecture
6. Opportunities & Solutions
7. Migration Planning
8. Implementation Governance
9. Architecture Change Management

## TOGAF ADM Lifecycle

El siguiente diagrama muestra la secuencia de fases que seguirá el desarrollo de la arquitectura empresarial de la Plataforma de Solicitud y Aprobación de Créditos.

![TOGAF ADM Lifecycle](Diagrams/togaf-adm-lifecycle.png)

---

# 13. Referencias

* TOGAF® Standard
* ArchiMate® Specification
* BPMN 2.0 Specification
* AWS Well-Architected Framework
* AWS Cloud Adoption Framework
* ISO/IEC/IEEE 42010

---

# 14. Conclusiones

La Preliminary Phase establece las bases metodológicas, organizacionales y de gobierno que soportarán el desarrollo de la Arquitectura Empresarial de la Plataforma de Solicitud y Aprobación de Créditos.

Los principios, estándares, estructura documental y modelo de gobierno definidos en esta fase proporcionan un marco consistente para el desarrollo de las siguientes fases del TOGAF ADM, asegurando la alineación entre estrategia, negocio y tecnología.