# Architecture Vision

**Documento:** Architecture Vision

**Framework:** TOGAF® ADM – Phase A

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
3. Contexto del Negocio
4. Problema
5. Drivers del Negocio
6. Objetivos Estratégicos
7. Visión de la Arquitectura
8. Alcance
9. Fuera del Alcance
10. Stakeholders
11. Beneficios Esperados
12. Restricciones
13. Riesgos
14. Factores Críticos de Éxito
15. KPIs
16. Arquitectura Objetivo
17. Conclusiones

---

# 1. Propósito

Definir la visión de arquitectura de la Plataforma de Solicitud y Aprobación de Créditos, alineando la estrategia del negocio con una solución tecnológica moderna que soporte los objetivos de transformación digital de la organización.

Este documento establece la dirección estratégica del proyecto y servirá como referencia para las fases posteriores del Architecture Development Method (ADM).

---

# 2. Objetivos

Los objetivos de la visión de arquitectura son:

* Alinear negocio y tecnología.
* Definir la dirección estratégica de la solución.
* Identificar el valor esperado para la organización.
* Establecer el alcance inicial del proyecto.
* Obtener una visión compartida entre los stakeholders.

---

# 3. Contexto del Negocio

La organización busca modernizar su proceso de originación y aprobación de créditos mediante una plataforma digital que reduzca los tiempos de respuesta, incremente la automatización y permita escalar el servicio de acuerdo con la demanda.

Actualmente, el proceso presenta actividades manuales, baja trazabilidad y dificultades para evolucionar rápidamente ante nuevas necesidades del negocio.

---

# 4. Problema

El proceso actual presenta las siguientes limitaciones:

* Alto tiempo de aprobación de solicitudes.
* Dependencia de actividades manuales.
* Baja capacidad de escalamiento.
* Dificultad para integrar nuevos servicios.
* Escasa trazabilidad del proceso.
* Alto esfuerzo operativo.

---

# 5. Drivers del Negocio

## Estratégicos

* Transformación Digital.
* Innovación.
* Incremento de competitividad.

## Operacionales

* Automatización.
* Optimización de procesos.
* Reducción de costos operativos.

## Tecnológicos

* Cloud Native.
* Arquitectura Serverless.
* Observabilidad.
* Automatización del despliegue.

---

# 6. Objetivos Estratégicos

| Objetivo                     | Indicador                      |
| ---------------------------- | ------------------------------ |
| Reducir tiempo de aprobación | < 2 minutos                    |
| Automatizar evaluación       | > 95 %                         |
| Disponibilidad               | 99.9 %                         |
| Tiempo de respuesta API      | < 2 segundos                   |
| Escalabilidad                | Automática                     |
| Auditoría                    | 100 % de solicitudes trazables |

---

# 7. Visión de la Arquitectura

Se propone una arquitectura empresarial basada en principios **Cloud Native**, orientada a servicios, desacoplada y altamente escalable.

La solución permitirá automatizar el proceso de solicitud y evaluación de créditos mediante componentes independientes, observables y seguros, garantizando una evolución controlada y alineada con las necesidades futuras del negocio.

---

# 8. Alcance

El proyecto incluye:

* Registro de solicitudes de crédito.
* Consulta del estado de solicitudes.
* Evaluación automática.
* Persistencia de la información.
* Exposición de APIs.
* Autenticación de usuarios.
* Observabilidad.
* Gobierno de arquitectura.

---

# 9. Fuera del Alcance

No forman parte de esta iniciativa:

* Desembolso del crédito.
* Integración con centrales de riesgo reales.
* Firma digital.
* Gestión documental.
* Cobranza.
* Machine Learning productivo.

---

# 10. Stakeholders

| Stakeholder             | Interés                            |
| ----------------------- | ---------------------------------- |
| Dirección de Tecnología | Modernización tecnológica          |
| Área Comercial          | Incrementar colocación de créditos |
| Área de Riesgos         | Evaluaciones confiables            |
| Arquitectura            | Solución alineada con estándares   |
| Desarrollo              | Implementación                     |
| Operaciones             | Disponibilidad                     |
| Seguridad               | Protección de la información       |
| Auditoría               | Trazabilidad                       |
| Cliente                 | Mejor experiencia digital          |

---

# 11. Beneficios Esperados

## Negocio

* Reducción de tiempos de aprobación.
* Mayor productividad.
* Disminución de costos operativos.

## Cliente

* Mejor experiencia.
* Respuesta más rápida.
* Disponibilidad permanente.

## Tecnología

* Arquitectura desacoplada.
* Mayor mantenibilidad.
* Escalabilidad automática.
* Alta resiliencia.

---

# 12. Restricciones

* Plataforma AWS.
* Arquitectura Serverless.
* Backend en .NET 8.
* Frontend React.
* Persistencia en Amazon DynamoDB.
* APIs REST.

---

# 13. Riesgos

| Riesgo                           | Mitigación               |
| -------------------------------- | ------------------------ |
| Incremento inesperado de demanda | Arquitectura escalable   |
| Cambios regulatorios             | Gobierno de arquitectura |
| Cambios funcionales              | Arquitectura desacoplada |
| Accesos no autorizados           | Security by Design       |

---

# 14. Factores Críticos de Éxito

* Alineación entre negocio y tecnología.
* Alta disponibilidad.
* Seguridad.
* Escalabilidad.
* Observabilidad.
* Bajo costo operativo.
* Facilidad de evolución.

---

# 15. KPIs

| Indicador                 | Meta         |
| ------------------------- | ------------ |
| Tiempo de aprobación      | < 2 minutos  |
| Disponibilidad            | 99.9 %       |
| Tiempo de respuesta       | < 2 segundos |
| Solicitudes automatizadas | > 95 %       |
| Incidentes críticos       | 0            |

---

# 16. Arquitectura Objetivo

La solución evolucionará hacia una arquitectura empresarial soportada por una plataforma cloud-native que priorice:

* Automatización.
* Seguridad por diseño.
* Escalabilidad horizontal.
* Observabilidad integral.
* Gobierno de arquitectura.
* Infraestructura como código.
* Integración mediante APIs.

Las decisiones tecnológicas específicas serán desarrolladas en las fases de **Application Architecture** y **Technology Architecture**.

---

# 17. Conclusiones

La Architecture Vision establece la dirección estratégica de la Plataforma de Solicitud y Aprobación de Créditos y proporciona una visión compartida para todos los interesados.

Esta visión servirá como punto de partida para el desarrollo de la Business Architecture, donde se definirán las capacidades, procesos y servicios de negocio que soportarán los objetivos estratégicos de la organización.
