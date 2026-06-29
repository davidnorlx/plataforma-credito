# Technology Architecture

**Documento:** Technology Architecture

**Framework:** TOGAF® ADM – Phase D

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
4. Principios Tecnológicos
5. Arquitectura Tecnológica Objetivo
6. Plataforma Cloud
7. Componentes Tecnológicos
8. Arquitectura de Red
9. Seguridad
10. Observabilidad
11. Alta Disponibilidad
12. Escalabilidad
13. Continuidad del Negocio
14. Riesgos Tecnológicos
15. Estándares Tecnológicos
16. Trazabilidad
17. Conclusiones

---

# 1. Propósito

Definir la arquitectura tecnológica que soportará la Plataforma de Solicitud y Aprobación de Créditos, estableciendo las plataformas, servicios, herramientas y estándares tecnológicos necesarios para implementar la Arquitectura de Aplicaciones y satisfacer los requerimientos del negocio.

---

# 2. Objetivos

* Seleccionar la plataforma tecnológica.
* Definir la infraestructura objetivo.
* Garantizar seguridad.
* Garantizar disponibilidad.
* Garantizar escalabilidad.
* Definir estándares tecnológicos.

---

# 3. Alcance

La arquitectura comprende:

* Infraestructura Cloud.
* Plataforma de ejecución.
* Seguridad.
* Observabilidad.
* Almacenamiento.
* Red.
* Plataforma de integración.

---

# 4. Principios Tecnológicos

La arquitectura se basa en los siguientes principios:

* Cloud First.
* Serverless First.
* API First.
* Security by Design.
* Infrastructure as Code.
* Automation First.
* Observability.
* High Availability.
* Least Privilege.

Referencia:

Architecture-Principles.md

---

# 5. Arquitectura Tecnológica Objetivo

La solución estará basada en una arquitectura **Cloud Native** utilizando servicios administrados para reducir la carga operativa y aumentar la escalabilidad, resiliencia y disponibilidad.

El diseño prioriza componentes desacoplados, automatización y pago por consumo.

---

# 6. Plataforma Cloud

## Proveedor Cloud

Amazon Web Services (AWS)

### Justificación

AWS proporciona un ecosistema de servicios administrados que permiten construir soluciones escalables, resilientes y seguras, reduciendo el esfuerzo operativo y acelerando la entrega de valor al negocio.

---

# 7. Componentes Tecnológicos

| Componente         | Tecnología             | Justificación                                                          |
| ------------------ | ---------------------- | ---------------------------------------------------------------------- |
| Frontend           | React + Vite           | SPA moderna, alto rendimiento y mantenibilidad.                        |
| Hosting Frontend   | Amazon S3 + CloudFront | Distribución global y alta disponibilidad.                             |
| API                | Amazon API Gateway     | Exposición segura y administrada de APIs REST.                         |
| Backend            | AWS Lambda (.NET 8)    | Ejecución serverless con escalado automático.                          |
| Orquestación       | AWS Step Functions     | Coordinación del flujo de aprobación de créditos.                      |
| Base de Datos      | Amazon DynamoDB        | Baja latencia, escalabilidad horizontal y administración simplificada. |
| Autenticación      | Amazon Cognito         | Gestión de identidad y autenticación basada en estándares.             |
| Eventos            | Amazon EventBridge     | Integración basada en eventos y desacoplamiento.                       |
| Notificaciones     | Amazon SNS             | Envío de notificaciones a los clientes.                                |
| Observabilidad     | Amazon CloudWatch      | Monitoreo, logs y métricas centralizadas.                              |
| Trazabilidad       | AWS X-Ray              | Seguimiento distribuido de solicitudes.                                |
| Gestión de Accesos | AWS IAM                | Control de permisos mediante el principio de mínimo privilegio.        |

---

# 8. Arquitectura de Red

La solución utilizará una arquitectura orientada a servicios administrados.

Principios:

* Comunicación mediante HTTPS.
* APIs protegidas.
* Acceso autenticado.
* Cifrado de extremo a extremo.

---

# 9. Seguridad

La arquitectura incorpora controles de seguridad desde el diseño.

## Autenticación

Amazon Cognito

## Autorización

JWT + IAM

## Protección

* TLS 1.2+
* Cifrado en reposo
* Cifrado en tránsito
* Gestión segura de credenciales
* Principio de mínimo privilegio

---

# 10. Observabilidad

La plataforma deberá generar:

* Logs estructurados.
* Métricas.
* Alarmas.
* Dashboards.
* Trazas distribuidas.

Herramientas:

* Amazon CloudWatch
* AWS X-Ray

---

# 11. Alta Disponibilidad

La solución aprovechará servicios administrados con alta disponibilidad nativa.

Objetivo:

Disponibilidad ≥ 99.9%.

---

# 12. Escalabilidad

La arquitectura soportará escalabilidad automática mediante servicios administrados que ajustan la capacidad según la demanda sin intervención manual.

---

# 13. Continuidad del Negocio

La plataforma deberá garantizar:

* Persistencia de la información.
* Recuperación ante fallos.
* Monitoreo continuo.
* Gestión de incidentes.
* Recuperación basada en servicios administrados.

---

# 14. Riesgos Tecnológicos

| Riesgo                          | Mitigación                                     |
| ------------------------------- | ---------------------------------------------- |
| Dependencia del proveedor cloud | Uso de estándares abiertos cuando sea posible. |
| Incremento de costos            | Monitoreo y optimización continua.             |
| Accesos no autorizados          | IAM, Cognito y controles de seguridad.         |
| Fallos en integraciones         | Arquitectura desacoplada y manejo de errores.  |

---

# 15. Estándares Tecnológicos

| Categoría            | Estándar                |
| -------------------- | ----------------------- |
| Backend              | .NET 8                  |
| Frontend             | React                   |
| APIs                 | REST + OpenAPI          |
| Autenticación        | OAuth2 / OpenID Connect |
| Infraestructura      | Infrastructure as Code  |
| Observabilidad       | CloudWatch + X-Ray      |
| Base de Datos        | NoSQL                   |
| Control de Versiones | Git                     |

---

# 16. Trazabilidad

Objetivos Estratégicos

↓

Capacidades de Negocio

↓

Procesos

↓

Aplicaciones

↓

Servicios AWS

↓

Infraestructura

---

# 17. Conclusiones

La Arquitectura Tecnológica proporciona una plataforma moderna, escalable y segura que soporta las necesidades del negocio mediante el uso de servicios administrados en AWS.

Las decisiones tecnológicas adoptadas se encuentran alineadas con los principios de arquitectura definidos durante la fase preliminar y permiten implementar una solución resiliente, de bajo acoplamiento y preparada para evolucionar conforme crezcan las necesidades de la organización.
